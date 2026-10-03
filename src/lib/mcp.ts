import { RESOURCE_TYPES, getAgentResource, resourceUrl, searchAgentResources, type ResourceType } from "@/lib/agent-resources";
import { rootAiMarkdown } from "@/lib/ai-discovery";
import { whatsappHref } from "@/lib/contact";
import { COURSES, findCoursesByQuery } from "@/lib/courses";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";
import { TEACHERS, type Teacher } from "@/lib/teachers";

/**
 * Read-only MCP server (https://modelcontextprotocol.io) over Streamable
 * HTTP, served at /mcp. Stateless: every POST carries one JSON-RPC message
 * (or a batch) and gets a JSON answer; there are no sessions or SSE streams.
 * `search` and `fetch` follow the shape ChatGPT connectors expect.
 */

export const MCP_PATH = "/mcp";
export const MCP_SERVER_INFO = { name: "amediotono", title: `${SITE_NAME}: escuela de música en Bogotá`, version: "1.0.0" };
const PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];

export const MCP_INSTRUCTIONS = [
  `${SITE_NAME} es una escuela de música en Bogotá, Colombia, con clases particulares virtuales y a domicilio para todas las edades.`,
  "Usa search para encontrar clases, profes, guías, acordes, escalas, afinaciones y ritmos, y fetch para leer cualquiera en Markdown.",
  "Usa find_teachers para recomendar profes por instrumento, formato e idioma, y whatsapp_link para que la persona escriba a la escuela.",
  "Los precios no están publicados: dependen del formato, la duración y la frecuencia, y se consultan por WhatsApp. No inventes precios ni disponibilidad.",
  "El contenido está en español; cita la URL de la página que uses.",
].join(" ");

type Json = Record<string, unknown>;
type ToolResult = { content: Array<{ type: "text"; text: string }>; isError?: boolean };

type Tool = {
  name: string;
  title: string;
  description: string;
  inputSchema: Json;
  run: (args: Json) => ToolResult;
};

const READ_ONLY = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

function text(value: string, isError = false): ToolResult {
  return { content: [{ type: "text", text: value }], ...(isError ? { isError } : {}) };
}

function stringArg(args: Json, name: string) {
  const value = args[name];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function teacherMatches(teacher: Teacher, courseIds: Set<string> | undefined, format?: string, language?: string) {
  if (courseIds && !teacher.skillIds.some((id) => courseIds.has(id))) return false;
  // Profiles without formats or languages offer both formats, in Spanish.
  if (format && !(teacher.classFormats ?? ["Virtual", "A domicilio"]).some((item) => item.toLowerCase() === format)) return false;
  if (language && !(teacher.classLanguages ?? ["Español"]).some((item) => item.toLowerCase() === language)) return false;
  return true;
}

const TOOLS: Tool[] = [
  {
    name: "search",
    title: "Buscar en el sitio",
    description: "Busca páginas de A medio tono por palabras clave en español: clases por instrumento, profes, guías del blog, acordes (por ejemplo «Am7» o «la menor»), escalas, afinaciones por instrumento, ritmos colombianos y servicios para academias. Devuelve id, título y URL; usa fetch con el id para leer la página completa.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Palabras clave, por ejemplo «clases de piano para niños» o «afinación del tiple»." },
        type: { type: "string", enum: [...RESOURCE_TYPES], description: "Opcional: limita la búsqueda a un tipo de página." },
        limit: { type: "integer", minimum: 1, maximum: 25, description: "Máximo de resultados (10 por defecto)." },
      },
      required: ["query"],
      additionalProperties: false,
    },
    run(args) {
      const query = stringArg(args, "query");
      if (!query) return text("Falta el parámetro query.", true);
      const type = RESOURCE_TYPES.find((item) => item === args.type) as ResourceType | undefined;
      const limit = typeof args.limit === "number" ? Math.min(Math.max(Math.round(args.limit), 1), 25) : 10;
      const results = searchAgentResources(query, { type, limit }).map((resource) => ({
        id: resource.path,
        title: resource.title,
        url: resourceUrl(resource),
        type: resource.type,
        description: resource.description,
      }));
      return text(JSON.stringify({ results }));
    },
  },
  {
    name: "fetch",
    title: "Leer una página",
    description: "Devuelve en Markdown el contenido completo de una página de A medio tono. Acepta el id que entrega search, una ruta como «/clases/piano» o una URL del sitio.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", description: "Id de search, ruta o URL de amediotonomusic.com." } },
      required: ["id"],
      additionalProperties: false,
    },
    run(args) {
      const id = stringArg(args, "id");
      const resource = id ? getAgentResource(id) : undefined;
      if (!resource) return text(`No hay una página con el id «${id ?? ""}». Usa search para encontrar el id correcto.`, true);
      return text(JSON.stringify({
        id: resource.path,
        title: resource.title,
        text: resource.markdown(),
        url: resourceUrl(resource),
        metadata: { type: resource.type, markdown_url: absoluteUrl(resource.path === "/" ? "/llms.txt" : `${resource.path}.md`) },
      }));
    },
  },
  {
    name: "find_teachers",
    title: "Encontrar profes",
    description: "Lista los profes de A medio tono que enseñan un instrumento, con formato (virtual o a domicilio en Bogotá) e idioma, su perfil y un enlace de WhatsApp para pedir la clase. Sin filtros devuelve todos.",
    inputSchema: {
      type: "object",
      properties: {
        instrument: { type: "string", description: "Instrumento o clase, por ejemplo «piano», «canto», «violonchelo» o «teoría musical»." },
        format: { type: "string", enum: ["virtual", "a domicilio"], description: "Opcional: formato de la clase." },
        language: { type: "string", enum: ["español", "inglés"], description: "Opcional: idioma de la clase." },
      },
      additionalProperties: false,
    },
    run(args) {
      const instrument = stringArg(args, "instrument");
      const format = stringArg(args, "format")?.toLowerCase();
      const language = stringArg(args, "language")?.toLowerCase();
      const courses = instrument ? findCoursesByQuery(instrument) : [];
      if (instrument && !courses.length) {
        return text(`No hay clases de «${instrument}». Instrumentos disponibles: ${COURSES.map((course) => course.label.toLowerCase()).join(", ")}.`, true);
      }
      const courseIds = instrument ? new Set(courses.map((course) => course.id)) : undefined;
      const teachers = TEACHERS.filter((teacher) => teacherMatches(teacher, courseIds, format, language));
      const subject = courses.length ? courses.map((course) => course.label.toLowerCase()).join(" o ") : "música";
      if (!teachers.length) {
        return text(`Ningún profe de ${subject} coincide con esos filtros. Escribe a la escuela para revisar opciones: ${whatsappHref(`¡Hola! Busco clases de ${subject}.`)}`);
      }
      const lines = [
        `# Profes de ${subject} en ${SITE_NAME}`, "",
        `${teachers.length} ${teachers.length === 1 ? "profe" : "profes"}. Cada profe pasa una evaluación de música, pedagogía y calidad humana antes de su primera clase. Precios y horarios se consultan por WhatsApp.`, "",
        ...teachers.map((teacher) => [
          `## ${teacher.name}`,
          `- Enseña: ${teacher.role}`,
          `- Formatos: ${(teacher.classFormats ?? ["Virtual", "A domicilio"]).map((item) => item === "A domicilio" ? "a domicilio en Bogotá y alrededores" : "virtual").join(", ")}`,
          `- Idiomas: ${(teacher.classLanguages ?? ["Español"]).join(", ")}`,
          `- Perfil: ${absoluteUrl(`/profes/${teacher.slug}`)}`,
          `- Pedir clase: ${whatsappHref(`¡Hola! Quiero información sobre clases de ${subject} con ${teacher.name}.`)}`,
          "", teacher.bio.replace(/\s+/g, " ").trim(), "",
        ].join("\n")),
      ];
      return text(lines.join("\n"));
    },
  },
  {
    name: "school_info",
    title: "Datos de la escuela",
    description: "Datos clave de A medio tono: qué es, instrumentos, edades, formatos, cómo se eligen los profes, servicios para academias, herramientas gratis, contacto y por dónde empezar.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: () => text(rootAiMarkdown()),
  },
  {
    name: "whatsapp_link",
    title: "Enlace de WhatsApp",
    description: "Crea un enlace de WhatsApp a la escuela con un mensaje listo para que la persona lo envíe (por ejemplo para pedir información o agendar una clase). No envía nada: la persona abre el enlace y decide.",
    inputSchema: {
      type: "object",
      properties: { message: { type: "string", description: "Mensaje en español, por ejemplo «¡Hola! Quiero clases de guitarra para mi hijo de 8 años, virtuales»." } },
      additionalProperties: false,
    },
    run(args) {
      const message = stringArg(args, "message")?.slice(0, 1000);
      return text(whatsappHref(message));
    },
  },
];

export function mcpToolDefinitions() {
  return TOOLS.map(({ name, title, description, inputSchema }) => ({ name, title, description, inputSchema, annotations: READ_ONLY }));
}

type JsonRpcMessage = { jsonrpc?: unknown; id?: unknown; method?: unknown; params?: unknown };

function rpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message } };
}

/** One JSON-RPC message in, its response out (undefined for notifications). */
export function handleMcpMessage(message: JsonRpcMessage) {
  if (!message || typeof message !== "object" || message.jsonrpc !== "2.0" || typeof message.method !== "string") {
    return rpcError(message?.id, -32600, "Invalid Request");
  }
  const isNotification = !("id" in message);
  const params = (message.params && typeof message.params === "object" ? message.params : {}) as Json;
  const reply = (result: unknown) => (isNotification ? undefined : { jsonrpc: "2.0", id: message.id, result });

  switch (message.method) {
    case "initialize": {
      const requested = typeof params.protocolVersion === "string" ? params.protocolVersion : "";
      return reply({
        protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: { ...MCP_SERVER_INFO, websiteUrl: absoluteUrl("/") },
        instructions: MCP_INSTRUCTIONS,
      });
    }
    case "ping":
      return reply({});
    case "tools/list":
      return reply({ tools: mcpToolDefinitions() });
    case "tools/call": {
      const tool = TOOLS.find((item) => item.name === params.name);
      if (!tool) return isNotification ? undefined : rpcError(message.id, -32602, `Unknown tool: ${String(params.name)}`);
      const args = (params.arguments && typeof params.arguments === "object" ? params.arguments : {}) as Json;
      return reply(tool.run(args));
    }
    default:
      return isNotification ? undefined : rpcError(message.id, -32601, `Method not found: ${message.method}`);
  }
}
