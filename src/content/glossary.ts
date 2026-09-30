// Diccionario musical: glosario de términos musicales en español (Colombia).
// `definition` y `example` admiten enlaces internos con la sintaxis `[texto](/ruta)`.

export type GlossaryGroup =
  | "Ritmo y tiempo"
  | "Melodía y armonía"
  | "Lectura y escritura"
  | "Técnica e interpretación"
  | "Instrumentos y voz"
  | "Formas y estilos";

/** Orden sugerido para mostrar los grupos. */
export const GLOSSARY_GROUPS: readonly GlossaryGroup[] = [
  "Ritmo y tiempo",
  "Melodía y armonía",
  "Lectura y escritura",
  "Técnica e interpretación",
  "Instrumentos y voz",
  "Formas y estilos",
];

export type GlossaryTerm = {
  /** Display term, e.g. "Acorde". */
  term: string;
  /** URL anchor: lowercase kebab-case ascii, unique, e.g. "acorde". */
  id: string;
  /** One of the groups below. */
  group: GlossaryGroup;
  /** 1–3 sentences (max ~60 words), accurate, plain Spanish, answer-first (starts with what it IS). */
  definition: string;
  /** Optional 1-sentence example or tip. */
  example?: string;
  /** Optional ids of related terms in this same file. */
  related?: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  // ─── Ritmo y tiempo ───────────────────────────────────────────────
  {
    term: "Ritmo",
    id: "ritmo",
    group: "Ritmo y tiempo",
    definition:
      "El ritmo es la organización de los sonidos y los silencios en el tiempo: cuánto dura cada uno y dónde caen los acentos. Junto con la melodía y la armonía, es uno de los elementos básicos de la música.",
    related: ["pulso", "compas", "acento", "melodia"],
  },
  {
    term: "Pulso",
    id: "pulso",
    group: "Ritmo y tiempo",
    definition:
      "El pulso es la unidad regular de tiempo que se siente en la música, como los latidos de un corazón: es lo que marcas al dar palmas o mover el pie con una canción. Cada pulso también se llama tiempo.",
    example: "Si das palmas siguiendo una canción sin pensarlo, estás marcando el pulso.",
    related: ["tempo", "compas", "acento", "metronomo"],
  },
  {
    term: "Tempo",
    id: "tempo",
    group: "Ritmo y tiempo",
    definition:
      "El tempo es la velocidad a la que se interpreta una pieza, es decir, qué tan rápido van los pulsos. Se indica en BPM o con términos italianos como largo (muy lento), adagio (lento), andante (al paso), moderato, allegro (rápido) y presto (muy rápido).",
    related: ["bpm", "pulso", "metronomo"],
  },
  {
    term: "BPM",
    id: "bpm",
    group: "Ritmo y tiempo",
    definition:
      "BPM es la sigla de pulsos por minuto (del inglés beats per minute) y es la medida del tempo de una pieza. A 60 BPM suena un pulso por segundo; a 120 BPM, dos por segundo.",
    example: "Estudia los pasajes difíciles a un BPM cómodo y súbelo de a 4 u 8 cuando salgan limpios.",
    related: ["tempo", "metronomo", "pulso"],
  },
  {
    term: "Metrónomo",
    id: "metronomo",
    group: "Ritmo y tiempo",
    definition:
      "El metrónomo es un aparato o aplicación que produce un clic regular a un tempo fijo, medido en BPM, para practicar con un pulso estable. Muchos permiten acentuar el primer tiempo de cada compás.",
    example:
      "Prueba el [metrónomo en línea](/herramientas/metronomo) y revisa [cómo practicar con metrónomo](/blog/como-usar-el-metronomo-para-practicar).",
    related: ["bpm", "tempo", "pulso"],
  },
  {
    term: "Compás",
    id: "compas",
    group: "Ritmo y tiempo",
    definition:
      "El compás es la agrupación de los pulsos en unidades regulares, cada una con un primer tiempo más fuerte. En la partitura se separa con barras verticales y se indica al inicio con una cifra como 4/4, 3/4 o 6/8: el número de abajo dice qué figura se cuenta y el de arriba, cuántas caben.",
    related: ["compas-simple-y-compuesto", "metrica", "pulso", "acento"],
  },
  {
    term: "Compás simple y compuesto",
    id: "compas-simple-y-compuesto",
    group: "Ritmo y tiempo",
    definition:
      "Los compases simples son aquellos en los que cada tiempo se divide en dos partes iguales (2/4, 3/4, 4/4); los compuestos, aquellos en los que cada tiempo se divide en tres (6/8, 9/8, 12/8). Por eso un 6/8 se siente en dos tiempos de tres corcheas cada uno, no en seis.",
    example: "El pasillo se escribe en 3/4, un compás simple; el bambuco, en 6/8 o en 3/4.",
    related: ["compas", "metrica", "tresillo", "bambuco"],
  },
  {
    term: "Métrica",
    id: "metrica",
    group: "Ritmo y tiempo",
    definition:
      "La métrica es la organización de los pulsos en patrones regulares de tiempos fuertes y débiles, que en la partitura se expresa con el compás. Puede ser binaria (como 2/4), ternaria (3/4), cuaternaria (4/4) o irregular (5/4, 7/8).",
    related: ["compas", "acento", "pulso"],
  },
  {
    term: "Acento",
    id: "acento",
    group: "Ritmo y tiempo",
    definition:
      "Un acento es un énfasis que hace que una nota suene más fuerte o destacada que las que la rodean. Hay acentos propios del compás (el primer tiempo suele ser el más fuerte) y acentos escritos, que se marcan con el signo > sobre o bajo la nota.",
    related: ["metrica", "sincopa", "articulacion"],
  },
  {
    term: "Redonda",
    id: "redonda",
    group: "Ritmo y tiempo",
    definition:
      "La redonda es la figura musical de mayor duración de uso común: se dibuja como un óvalo hueco sin plica y, en un compás de 4/4, dura los cuatro tiempos. Equivale a dos blancas o a cuatro negras.",
    related: ["blanca", "negra", "silencio"],
  },
  {
    term: "Blanca",
    id: "blanca",
    group: "Ritmo y tiempo",
    definition:
      "La blanca es la figura musical que dura la mitad de una redonda; en 4/4 vale dos tiempos. Se dibuja con la cabeza hueca y una plica (el palito vertical) y equivale a dos negras.",
    related: ["redonda", "negra", "puntillo"],
  },
  {
    term: "Negra",
    id: "negra",
    group: "Ritmo y tiempo",
    definition:
      "La negra es la figura musical que dura la cuarta parte de una redonda y, en compases como 2/4, 3/4 o 4/4, vale un tiempo. Se dibuja con la cabeza rellena y plica, y equivale a dos corcheas.",
    related: ["blanca", "corchea", "pulso"],
  },
  {
    term: "Corchea",
    id: "corchea",
    group: "Ritmo y tiempo",
    definition:
      "La corchea es la figura musical que dura la mitad de una negra, así que en 4/4 caben dos por tiempo. Se dibuja como una negra con un corchete (banderita) en la plica; si van varias seguidas, se unen con una barra.",
    related: ["negra", "semicorchea", "tresillo"],
  },
  {
    term: "Semicorchea",
    id: "semicorchea",
    group: "Ritmo y tiempo",
    definition:
      "La semicorchea es la figura musical que dura la mitad de una corchea: en 4/4 caben cuatro por tiempo. Lleva dos corchetes en la plica o, cuando van en grupo, dos barras que las unen.",
    example: "Marca el pulso con el pie y toca cuatro notas iguales por cada golpe: eso son semicorcheas.",
    related: ["corchea", "negra"],
  },
  {
    term: "Silencio",
    id: "silencio",
    group: "Ritmo y tiempo",
    definition:
      "Un silencio es el signo que indica durante cuánto tiempo no debe sonar nada. Cada figura tiene un silencio de igual duración: de redonda, de blanca, de negra, de corchea y de semicorchea.",
    example: "Los silencios se cuentan igual que las notas: también hacen parte del ritmo.",
    related: ["redonda", "negra", "ritmo"],
  },
  {
    term: "Puntillo",
    id: "puntillo",
    group: "Ritmo y tiempo",
    definition:
      "El puntillo es un punto escrito a la derecha de una nota o de un silencio que le suma la mitad de su duración. Así, una blanca con puntillo dura tres tiempos en vez de dos, y una negra con puntillo, tiempo y medio.",
    related: ["blanca", "negra", "ligadura"],
  },
  {
    term: "Síncopa",
    id: "sincopa",
    group: "Ritmo y tiempo",
    definition:
      "La síncopa es un efecto rítmico en el que una nota empieza en un tiempo débil, o en la parte débil de un tiempo, y se prolonga sobre el tiempo fuerte siguiente, desplazando el acento esperado. Da empuje y balanceo a géneros como la cumbia, el son o el jazz.",
    related: ["contratiempo", "acento", "cumbia"],
  },
  {
    term: "Contratiempo",
    id: "contratiempo",
    group: "Ritmo y tiempo",
    definition:
      "Un contratiempo es una nota que suena en la parte débil del tiempo mientras el tiempo fuerte queda en silencio. A diferencia de la síncopa, la nota no se prolonga sobre el tiempo siguiente.",
    example: "Si cuentas «1 y 2 y» y solo tocas en cada «y», estás tocando a contratiempo.",
    related: ["sincopa", "silencio", "acento"],
  },
  {
    term: "Anacrusa",
    id: "anacrusa",
    group: "Ritmo y tiempo",
    definition:
      "La anacrusa es la nota o el grupo de notas que suenan antes del primer tiempo fuerte de una pieza o de una frase, en un compás incompleto. Funciona como un impulso que lleva hacia ese primer tiempo.",
    example: "«Cumpleaños feliz» empieza con anacrusa: «Cum-ple» suena antes del primer tiempo fuerte.",
    related: ["compas", "acento", "fraseo"],
  },
  {
    term: "Tresillo",
    id: "tresillo",
    group: "Ritmo y tiempo",
    definition:
      "Un tresillo es un grupo de tres notas iguales que ocupan el tiempo que normalmente ocuparían dos de la misma figura. Se escribe con un 3 sobre o bajo el grupo: tres corcheas en tresillo duran lo mismo que una negra.",
    example: "En la música afrocaribeña, «tresillo» también nombra un patrón rítmico de 3 + 3 + 2, que es otra cosa.",
    related: ["corchea", "compas-simple-y-compuesto"],
  },

  // ─── Lectura y escritura ─────────────────────────────────────────
  {
    term: "Pentagrama",
    id: "pentagrama",
    group: "Lectura y escritura",
    definition:
      "El pentagrama es el conjunto de cinco líneas horizontales y cuatro espacios en el que se escriben las notas. Cuanto más arriba está una nota, más aguda suena; las líneas y los espacios se cuentan de abajo hacia arriba.",
    related: ["clave-de-sol", "lineas-adicionales", "partitura"],
  },
  {
    term: "Clave de sol",
    id: "clave-de-sol",
    group: "Lectura y escritura",
    definition:
      "La clave de sol es el signo, escrito al inicio del pentagrama, que indica que la nota de la segunda línea es Sol (G), el Sol que está por encima del Do central. Se usa para instrumentos y voces agudos: violín, flauta, guitarra, voz y la mano derecha del piano.",
    related: ["pentagrama", "clave-de-fa", "clave-de-do"],
  },
  {
    term: "Clave de fa",
    id: "clave-de-fa",
    group: "Lectura y escritura",
    definition:
      "La clave de fa es el signo que indica que la nota de la cuarta línea del pentagrama es Fa (F), el Fa que está por debajo del Do central. Se usa para instrumentos y voces graves: violonchelo, contrabajo, fagot, trombón, bajo eléctrico y la mano izquierda del piano.",
    related: ["pentagrama", "clave-de-sol", "clave-de-do"],
  },
  {
    term: "Clave de do",
    id: "clave-de-do",
    group: "Lectura y escritura",
    definition:
      "La clave de do es el signo que indica en qué línea del pentagrama está el Do central (C). La más usada hoy es la de tercera línea, propia de la viola; la de cuarta línea aparece en los pasajes agudos del violonchelo, el fagot y el trombón.",
    related: ["clave-de-sol", "clave-de-fa", "pentagrama"],
  },
  {
    term: "Líneas adicionales",
    id: "lineas-adicionales",
    group: "Lectura y escritura",
    definition:
      "Las líneas adicionales son pequeñas líneas que se dibujan por encima o por debajo del pentagrama para escribir las notas que quedan fuera de sus cinco líneas. Por ejemplo, en clave de sol el Do central se escribe sobre una línea adicional debajo del pentagrama.",
    related: ["pentagrama", "clave-de-sol"],
  },
  {
    term: "Partitura",
    id: "partitura",
    group: "Lectura y escritura",
    definition:
      "Una partitura es la versión escrita de una obra musical: notas, ritmo e indicaciones de tempo, dinámica y articulación, y en música de conjunto, las partes de todos los instrumentos. La parte que lee un solo músico se llama particela.",
    example:
      "Si estás empezando, sigue esta [guía para leer partituras](/blog/como-leer-partituras-guia-para-principiantes).",
    related: ["pentagrama", "lectura-a-primera-vista", "solfeo"],
  },
  {
    term: "Tablatura",
    id: "tablatura",
    group: "Lectura y escritura",
    definition:
      "La tablatura es un sistema de escritura para instrumentos de cuerda con trastes, como la guitarra o el bajo, en el que cada línea representa una cuerda y cada número indica el traste que se pisa. Es fácil de leer, pero casi nunca muestra el ritmo con precisión.",
    example: "Aprende a descifrarla en [cómo leer tablaturas](/blog/como-leer-tablaturas-de-guitarra-y-bajo).",
    related: ["traste", "partitura", "cifrado-americano"],
  },
  {
    term: "Cifrado americano",
    id: "cifrado-americano",
    group: "Lectura y escritura",
    definition:
      "El cifrado americano es el sistema que nombra notas y acordes con letras: A es La, B es Si, C es Do, D es Re, E es Mi, F es Fa y G es Sol. Los símbolos indican el tipo de acorde: Am es La menor, G7 es Sol séptima y C/E es Do con Mi en el bajo.",
    related: ["acorde", "acorde-de-septima", "inversion"],
  },
  {
    term: "Solfeo",
    id: "solfeo",
    group: "Lectura y escritura",
    definition:
      "El solfeo es la práctica de leer la música escrita diciendo o cantando el nombre de las notas (Do, Re, Mi, Fa, Sol, La, Si) con su ritmo. Entrena a la vez la lectura, el pulso y el oído, y es la base de la formación teórica.",
    example: "Aquí te explicamos [qué es el solfeo y cómo practicarlo](/blog/que-es-el-solfeo-y-como-practicarlo).",
    related: ["dictado-musical", "lectura-a-primera-vista", "partitura"],
  },
  {
    term: "Dictado musical",
    id: "dictado-musical",
    group: "Lectura y escritura",
    definition:
      "El dictado musical es un ejercicio de entrenamiento auditivo en el que escuchas un fragmento (una melodía, un ritmo o una serie de acordes) y lo escribes en el pentagrama. Es habitual en las clases de teoría y en las pruebas de admisión a carreras de música.",
    example: "Se practica en [teoría musical](/clases/teoria-musical), empezando por ritmos y melodías cortas.",
    related: ["solfeo", "oido-absoluto-y-oido-relativo", "intervalo"],
  },
  {
    term: "Lectura a primera vista",
    id: "lectura-a-primera-vista",
    group: "Lectura y escritura",
    definition:
      "La lectura a primera vista es la capacidad de tocar o cantar una partitura que nunca has visto, sin prepararla, manteniendo el pulso. Se desarrolla leyendo con frecuencia material sencillo y variado.",
    example: "Antes de empezar, revisa la armadura, el compás y los pasajes difíciles; luego no te detengas aunque falles una nota.",
    related: ["partitura", "solfeo", "armadura"],
  },
  {
    term: "Armadura",
    id: "armadura",
    group: "Lectura y escritura",
    definition:
      "La armadura es el grupo de sostenidos o bemoles escritos al inicio de cada pentagrama, justo después de la clave, que afectan a todas las notas de ese nombre durante la pieza. Indica la tonalidad: un sostenido (Fa♯) corresponde a Sol mayor o a Mi menor.",
    related: ["tonalidad", "alteraciones", "circulo-de-quintas"],
  },
  {
    term: "Alteraciones",
    id: "alteraciones",
    group: "Lectura y escritura",
    definition:
      "Las alteraciones son los signos que modifican la altura de una nota: el sostenido (♯) la sube un semitono, el bemol (♭) la baja un semitono y el becuadro (♮) anula una alteración previa. Pueden ir en la armadura o como accidentes junto a una nota, y estos valen hasta el final del compás.",
    related: ["sostenido", "bemol", "becuadro", "armadura", "semitono"],
  },
  {
    term: "Sostenido",
    id: "sostenido",
    group: "Lectura y escritura",
    definition:
      "El sostenido (♯) es la alteración que sube una nota un semitono. Por ejemplo, Fa♯ (F#) suena medio tono más agudo que Fa; en el piano es la tecla negra que está justo a la derecha de Fa.",
    related: ["bemol", "becuadro", "alteraciones", "semitono"],
  },
  {
    term: "Bemol",
    id: "bemol",
    group: "Lectura y escritura",
    definition:
      "El bemol (♭) es la alteración que baja una nota un semitono. Por ejemplo, Si♭ (Bb) suena medio tono más grave que Si. Una misma tecla puede tener dos nombres: Do♯ y Re♭ suenan igual en el piano y se llaman notas enarmónicas.",
    related: ["sostenido", "becuadro", "alteraciones", "semitono"],
  },
  {
    term: "Becuadro",
    id: "becuadro",
    group: "Lectura y escritura",
    definition:
      "El becuadro (♮) es la alteración que cancela un sostenido o un bemol, ya venga de la armadura o de un accidente anterior, y devuelve la nota a su altura natural.",
    example: "Si la armadura tiene Fa♯ y aparece un Fa con becuadro, en ese compás se toca Fa natural.",
    related: ["alteraciones", "sostenido", "bemol"],
  },
  {
    term: "Ligadura",
    id: "ligadura",
    group: "Lectura y escritura",
    definition:
      "La ligadura es una línea curva que une notas. Si une dos notas de la misma altura, es de prolongación: se toca solo la primera y se suman sus duraciones. Si une notas distintas, es de expresión: indica tocarlas unidas, sin cortes, es decir, legato.",
    related: ["legato", "puntillo", "fraseo"],
  },
  {
    term: "Transporte",
    id: "transporte",
    group: "Lectura y escritura",
    definition:
      "El transporte (o transposición) es tocar o escribir una pieza en otra tonalidad, moviendo todas las notas el mismo intervalo, por ejemplo para acomodarla a una voz. También explica los instrumentos transpositores, cuya nota escrita no coincide con la que suena: en el clarinete o la trompeta en Si♭, un Do escrito suena Si♭.",
    example: "El saxofón alto está en Mi♭: cuando lee un Do, suena un Mi♭, por eso su partitura se escribe transportada.",
    related: ["tonalidad", "intervalo", "modulacion"],
  },

  // ─── Melodía y armonía ───────────────────────────────────────────
  {
    term: "Melodía",
    id: "melodia",
    group: "Melodía y armonía",
    definition:
      "La melodía es una sucesión de notas de distintas alturas y duraciones que se percibe como una idea completa: la parte de una canción que cantas o tarareas. Se construye con intervalos, ritmo y fraseo.",
    related: ["armonia", "ritmo", "intervalo", "fraseo"],
  },
  {
    term: "Armonía",
    id: "armonia",
    group: "Melodía y armonía",
    definition:
      "La armonía es el uso y el estudio de las notas que suenan al mismo tiempo, es decir, de los acordes y de cómo se encadenan. Si la melodía es la línea horizontal de la música, la armonía es su dimensión vertical, el acompañamiento que le da color.",
    related: ["acorde", "cadencia", "melodia", "contrapunto"],
  },
  {
    term: "Escala",
    id: "escala",
    group: "Melodía y armonía",
    definition:
      "Una escala es una serie ordenada de notas, ascendente o descendente, que sigue un patrón fijo de tonos y semitonos a partir de una nota inicial llamada tónica. De las escalas salen las melodías y los acordes de una tonalidad.",
    related: ["escala-mayor", "escala-menor", "tonalidad", "tono"],
  },
  {
    term: "Escala mayor",
    id: "escala-mayor",
    group: "Melodía y armonía",
    definition:
      "La escala mayor es la escala de siete notas con el patrón tono, tono, semitono, tono, tono, tono, semitono. Do mayor (C) usa solo las teclas blancas del piano: Do, Re, Mi, Fa, Sol, La, Si, Do. Suele describirse como de sonido brillante o alegre.",
    example: "Compárala con la menor en [escalas mayores y menores explicadas](/blog/escalas-mayores-y-menores-explicadas).",
    related: ["escala", "escala-menor", "tonalidad", "armadura"],
  },
  {
    term: "Escala menor",
    id: "escala-menor",
    group: "Melodía y armonía",
    definition:
      "La escala menor natural es la escala de siete notas con el patrón tono, semitono, tono, tono, semitono, tono, tono; La menor (Am) usa las mismas notas que Do mayor, empezando en La. Existen además la menor armónica (séptimo grado elevado) y la melódica (sexto y séptimo elevados al subir).",
    related: ["escala-mayor", "escala", "tonalidad"],
  },
  {
    term: "Escala pentatónica",
    id: "escala-pentatonica",
    group: "Melodía y armonía",
    definition:
      "La escala pentatónica es una escala de cinco notas por octava. La pentatónica mayor de Do es Do, Re, Mi, Sol, La, y la menor de La es La, Do, Re, Mi, Sol; como no tiene semitonos, casi cualquier combinación de sus notas suena bien.",
    example: "Es la escala más usada para empezar a improvisar en guitarra, sobre todo en rock y blues.",
    related: ["escala", "improvisacion", "escala-mayor"],
  },
  {
    term: "Escala cromática",
    id: "escala-cromatica",
    group: "Melodía y armonía",
    definition:
      "La escala cromática es la que recorre las doce notas de la octava avanzando siempre de semitono en semitono. En el piano equivale a tocar todas las teclas, blancas y negras, una tras otra.",
    related: ["semitono", "escala", "octava"],
  },
  {
    term: "Tono",
    id: "tono",
    group: "Melodía y armonía",
    definition:
      "El tono es la distancia entre dos notas equivalente a dos semitonos, como de Do a Re o de Fa a Sol. En el habla cotidiana, «tono» también se usa como sinónimo de tonalidad («¿en qué tono está la canción?») o de altura de un sonido.",
    related: ["semitono", "intervalo", "tonalidad"],
  },
  {
    term: "Semitono",
    id: "semitono",
    group: "Melodía y armonía",
    definition:
      "El semitono, también llamado medio tono, es la distancia más pequeña entre dos notas en la música occidental. En el piano es el paso de una tecla a la inmediatamente vecina (de Mi a Fa o de Do a Do♯), y en la guitarra, el paso de un traste al siguiente.",
    related: ["tono", "alteraciones", "escala-cromatica", "traste"],
  },
  {
    term: "Intervalo",
    id: "intervalo",
    group: "Melodía y armonía",
    definition:
      "Un intervalo es la distancia de altura entre dos notas. Se nombra contando las notas desde la primera hasta la última, ambas incluidas (de Do a Mi es una tercera), y se precisa con su calidad: justo, mayor, menor, aumentado o disminuido.",
    example: "Profundiza en [qué es un intervalo musical](/blog/que-es-un-intervalo-musical) y cómo reconocerlo de oído.",
    related: ["tercera", "quinta", "octava", "semitono"],
  },
  {
    term: "Octava",
    id: "octava",
    group: "Melodía y armonía",
    definition:
      "La octava es el intervalo entre una nota y la siguiente del mismo nombre, más aguda o más grave, por ejemplo de Do a Do (doce semitonos). La nota más aguda vibra al doble de frecuencia, por eso ambas se perciben casi como la misma nota.",
    related: ["intervalo", "registro", "escala-cromatica"],
  },
  {
    term: "Tercera",
    id: "tercera",
    group: "Melodía y armonía",
    definition:
      "La tercera es el intervalo que abarca tres notas, como de Do a Mi. La tercera mayor tiene cuatro semitonos (Do-Mi) y la menor, tres (Do-Mi♭); esa diferencia es la que define si un acorde es mayor o menor.",
    related: ["intervalo", "triada", "acorde"],
  },
  {
    term: "Quinta",
    id: "quinta",
    group: "Melodía y armonía",
    definition:
      "La quinta es el intervalo que abarca cinco notas, como de Do a Sol. La quinta justa tiene siete semitonos y es, después de la octava, el intervalo más estable y consonante; es la base de los power chords de la guitarra eléctrica y del círculo de quintas.",
    related: ["intervalo", "circulo-de-quintas", "consonancia-y-disonancia"],
  },
  {
    term: "Acorde",
    id: "acorde",
    group: "Melodía y armonía",
    definition:
      "Un acorde es la combinación de tres o más notas diferentes que suenan al mismo tiempo. El más básico es la tríada, y los acordes se nombran por su nota fundamental y su tipo: Do mayor (C), La menor (Am), Sol séptima (G7).",
    example: "Empieza por los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes).",
    related: ["triada", "acorde-de-septima", "arpegio", "armonia", "cifrado-americano"],
  },
  {
    term: "Tríada",
    id: "triada",
    group: "Melodía y armonía",
    definition:
      "La tríada es el acorde de tres notas formado por una fundamental, su tercera y su quinta, por ejemplo Do-Mi-Sol. Según sus intervalos puede ser mayor, menor, disminuida o aumentada.",
    related: ["acorde", "tercera", "quinta", "inversion"],
  },
  {
    term: "Acorde de séptima",
    id: "acorde-de-septima",
    group: "Melodía y armonía",
    definition:
      "El acorde de séptima es una tríada a la que se le añade una cuarta nota, una séptima por encima de la fundamental. El más común es el de séptima de dominante (G7: Sol-Si-Re-Fa), que genera tensión y pide resolver hacia la tónica, en este caso Do.",
    related: ["acorde", "triada", "cadencia", "cifrado-americano"],
  },
  {
    term: "Inversión",
    id: "inversion",
    group: "Melodía y armonía",
    definition:
      "Una inversión es una disposición de un acorde con una nota distinta de la fundamental en el bajo. Do mayor en estado fundamental es Do-Mi-Sol; en primera inversión, Mi-Sol-Do; en segunda, Sol-Do-Mi. En cifrado americano se escribe con barra: C/E.",
    related: ["acorde", "triada", "cifrado-americano"],
  },
  {
    term: "Arpegio",
    id: "arpegio",
    group: "Melodía y armonía",
    definition:
      "Un arpegio es un acorde tocado nota por nota, una tras otra, en lugar de todas a la vez. Es un recurso de acompañamiento muy usado en guitarra y piano, y un ejercicio técnico habitual.",
    related: ["acorde", "digitacion", "escala"],
  },
  {
    term: "Tonalidad",
    id: "tonalidad",
    group: "Melodía y armonía",
    definition:
      "La tonalidad es el sistema que organiza una pieza alrededor de una nota central, la tónica, y de la escala construida sobre ella. Decir que una canción está «en Sol mayor» significa que Sol es su punto de reposo y que usa sobre todo las notas de esa escala.",
    related: ["armadura", "escala-mayor", "modulacion", "circulo-de-quintas"],
  },
  {
    term: "Círculo de quintas",
    id: "circulo-de-quintas",
    group: "Melodía y armonía",
    definition:
      "El círculo de quintas es un diagrama que ordena las doce tonalidades como un reloj, cada una a una quinta justa de la anterior. En el sentido de las manecillas cada tonalidad suma un sostenido a la armadura y en sentido contrario, un bemol.",
    example: "Aprende a dibujarlo y usarlo en [el círculo de quintas explicado](/blog/circulo-de-quintas-explicado).",
    related: ["quinta", "armadura", "tonalidad"],
  },
  {
    term: "Cadencia",
    id: "cadencia",
    group: "Melodía y armonía",
    definition:
      "Una cadencia es el encadenamiento de acordes que cierra una frase o una obra, como la puntuación en un texto. La cadencia auténtica (V-I, como Sol-Do en Do mayor) suena conclusiva; la semicadencia, que termina en el V, deja la frase en suspenso.",
    related: ["armonia", "acorde-de-septima", "tonalidad", "fraseo"],
  },
  {
    term: "Modulación",
    id: "modulacion",
    group: "Melodía y armonía",
    definition:
      "La modulación es el cambio de tonalidad dentro de una misma pieza. Suele hacerse con un acorde común a ambas tonalidades o con la dominante de la nueva, y aporta contraste o intensidad.",
    example: "La subida de medio tono o de un tono en el último coro de muchas baladas es una modulación.",
    related: ["tonalidad", "transporte", "cadencia"],
  },
  {
    term: "Consonancia y disonancia",
    id: "consonancia-y-disonancia",
    group: "Melodía y armonía",
    definition:
      "La consonancia es la sensación de estabilidad y reposo que producen ciertos intervalos y acordes, como la octava, la quinta justa o las terceras; la disonancia es la sensación de tensión que producen otros, como las segundas, las séptimas o el tritono. La disonancia no es un error: crea movimiento y pide resolverse.",
    related: ["intervalo", "armonia", "cadencia"],
  },
  {
    term: "Contrapunto",
    id: "contrapunto",
    group: "Melodía y armonía",
    definition:
      "El contrapunto es la técnica de combinar dos o más melodías independientes que suenan a la vez y encajan armónicamente. Alcanzó su cumbre en el Barroco, con Johann Sebastian Bach, en formas como el canon y la fuga.",
    related: ["armonia", "melodia", "composicion"],
  },

  // ─── Técnica e interpretación ────────────────────────────────────
  {
    term: "Afinación",
    id: "afinacion",
    group: "Técnica e interpretación",
    definition:
      "La afinación es el ajuste de la altura de un instrumento o de la voz para que sus notas coincidan con una referencia, casi siempre La 440 Hz. También nombra la precisión con que alguien entona y las notas de las cuerdas al aire: la guitarra estándar se afina Mi, La, Re, Sol, Si, Mi.",
    example:
      "Afina con el [afinador de guitarra](/herramientas/afinador/guitarra) o el [afinador de violín](/herramientas/afinador/violin) desde el navegador.",
    related: ["la-440", "afinador", "diapason"],
  },
  {
    term: "La 440",
    id: "la-440",
    group: "Técnica e interpretación",
    definition:
      "La 440 es el estándar internacional de afinación que fija el La situado por encima del Do central en 440 hercios (vibraciones por segundo). Todas las demás notas se afinan a partir de esa referencia; algunas orquestas usan valores cercanos, como 442 Hz.",
    related: ["afinacion", "afinador", "diapason"],
  },
  {
    term: "Dinámica y matices",
    id: "dinamica",
    group: "Técnica e interpretación",
    definition:
      "La dinámica es la variación de intensidad (volumen) en la música, y cada indicación que la marca se llama matiz: pianissimo (pp), piano (p, suave), mezzo piano (mp), mezzo forte (mf), forte (f, fuerte) y fortissimo (ff). Crescendo (<) pide subir el volumen poco a poco y diminuendo (>), bajarlo.",
    related: ["articulacion", "fraseo", "acento"],
  },
  {
    term: "Fraseo",
    id: "fraseo",
    group: "Técnica e interpretación",
    definition:
      "El fraseo es la manera de dar forma a las frases musicales al interpretarlas: dónde respirar o cortar, hacia qué nota dirigir la frase y cómo usar la dinámica y la articulación. Es a la música lo que la entonación y las pausas son a la lectura en voz alta.",
    related: ["dinamica", "articulacion", "ligadura", "legato"],
  },
  {
    term: "Articulación",
    id: "articulacion",
    group: "Técnica e interpretación",
    definition:
      "La articulación es la forma en que se ataca, se sostiene y se une o separa cada nota. Las más comunes son el legato (notas ligadas), el staccato (cortas y separadas), el acento (>) y el tenuto (–, sostenida todo su valor).",
    related: ["legato", "staccato", "acento", "fraseo"],
  },
  {
    term: "Legato",
    id: "legato",
    group: "Técnica e interpretación",
    definition:
      "Legato es una indicación italiana que significa «ligado»: las notas se tocan unidas, sin silencio entre una y otra. Se escribe con una ligadura de expresión sobre el grupo de notas.",
    related: ["staccato", "ligadura", "articulacion"],
  },
  {
    term: "Staccato",
    id: "staccato",
    group: "Técnica e interpretación",
    definition:
      "Staccato es una indicación italiana que significa «separado»: las notas se tocan cortas y despegadas, más breves que su valor escrito. Se marca con un punto encima o debajo de la cabeza de la nota.",
    example: "No lo confundas con el puntillo: el punto del staccato va sobre o bajo la nota, y el puntillo, a su derecha.",
    related: ["legato", "articulacion", "puntillo"],
  },
  {
    term: "Pizzicato",
    id: "pizzicato",
    group: "Técnica e interpretación",
    definition:
      "Pizzicato (abreviado pizz.) es la técnica de los instrumentos de cuerda frotada, como el violín, la viola, el violonchelo y el contrabajo, en la que la cuerda se pulsa con los dedos en lugar de tocarse con el arco. La indicación «arco» señala que se vuelve a usar el arco.",
    related: ["arco", "vibrato"],
  },
  {
    term: "Vibrato",
    id: "vibrato",
    group: "Técnica e interpretación",
    definition:
      "El vibrato es una oscilación leve y regular de la altura de una nota que le da calidez y expresión. En las cuerdas se logra moviendo el dedo que pisa la cuerda; en la voz y los vientos, con el control del aire o, en algunos instrumentos, de la mandíbula.",
    related: ["tecnica-vocal", "afinacion", "glissando"],
  },
  {
    term: "Glissando",
    id: "glissando",
    group: "Técnica e interpretación",
    definition:
      "El glissando es un deslizamiento continuo o muy rápido de una nota a otra, pasando por las alturas intermedias. Se escribe con una línea recta u ondulada entre las dos notas y es característico del trombón, el arpa, el piano y las cuerdas.",
    related: ["vibrato", "legato"],
  },
  {
    term: "Digitación",
    id: "digitacion",
    group: "Técnica e interpretación",
    definition:
      "La digitación es la elección de qué dedo toca cada nota, y también los números que la indican en la partitura. En el piano los dedos van del 1 (pulgar) al 5 (meñique); en la mano izquierda de la guitarra, del 1 (índice) al 4 (meñique).",
    example: "Decide la digitación de un pasaje difícil antes de repetirlo muchas veces: cambiarla después cuesta más.",
    related: ["arpegio", "cejilla", "traste"],
  },
  {
    term: "Embocadura",
    id: "embocadura",
    group: "Técnica e interpretación",
    definition:
      "La embocadura es la posición y el uso de los labios, los músculos de la cara y los dientes al tocar un instrumento de viento, como la flauta, el clarinete, el saxofón o la trompeta. De ella dependen en gran parte el sonido, la afinación y la resistencia.",
    related: ["boquilla", "cana", "apoyo"],
  },
  {
    term: "Oído absoluto y oído relativo",
    id: "oido-absoluto-y-oido-relativo",
    group: "Técnica e interpretación",
    definition:
      "El oído absoluto es la capacidad, poco común, de identificar o cantar una nota sin ninguna referencia, por ejemplo saber que un sonido es un La. El oído relativo es la capacidad de reconocer notas e intervalos a partir de una nota de referencia; es el que usa la mayoría de músicos y se puede entrenar.",
    example: "Lee más sobre las diferencias en [oído absoluto y oído relativo](/blog/oido-absoluto-y-oido-relativo).",
    related: ["dictado-musical", "intervalo", "solfeo"],
  },
  {
    term: "Improvisación",
    id: "improvisacion",
    group: "Técnica e interpretación",
    definition:
      "La improvisación es la creación de música en el momento de interpretarla, sin una partitura previa, a partir de una armonía, una escala o un estilo. Es central en el jazz, el blues y muchas músicas tradicionales, y se aprende con escalas, frases aprendidas de oído y mucha escucha.",
    related: ["escala-pentatonica", "arreglo", "composicion"],
  },

  // ─── Instrumentos y voz ──────────────────────────────────────────
  {
    term: "Afinador",
    id: "afinador",
    group: "Instrumentos y voz",
    definition:
      "Un afinador es un aparato o aplicación que detecta la altura de un sonido y muestra si la nota está afinada, por debajo o por encima de la altura correcta. Los hay de pinza, que captan la vibración del instrumento, y de micrófono.",
    example: "Puedes usar un [afinador en línea](/herramientas/afinador) desde el celular o el computador.",
    related: ["afinacion", "la-440", "diapason"],
  },
  {
    term: "Diapasón",
    id: "diapason",
    group: "Instrumentos y voz",
    definition:
      "El diapasón es, en los instrumentos de cuerda, la pieza larga de madera sobre la que se pisan las cuerdas, con trastes en la guitarra y sin ellos en el violín. También se llama diapasón la horquilla metálica que, al golpearla, produce una nota fija, casi siempre La 440, y sirve para afinar.",
    related: ["traste", "afinacion", "la-440"],
  },
  {
    term: "Traste",
    id: "traste",
    group: "Instrumentos y voz",
    definition:
      "Los trastes son las barras metálicas incrustadas en el diapasón de la guitarra, el bajo, el tiple o la bandola, que dividen el mástil en semitonos. Por extensión, se llama traste al espacio donde se pisa: «traste 3» es el espacio entre la segunda y la tercera barra.",
    related: ["diapason", "cejilla", "tablatura", "semitono"],
  },
  {
    term: "Cejilla",
    id: "cejilla",
    group: "Instrumentos y voz",
    definition:
      "La cejilla es la técnica de guitarra en la que un dedo, casi siempre el índice, presiona varias o todas las cuerdas en el mismo traste, como en el acorde de Fa (F). También se llama cejilla, o capotraste, la abrazadera que se pone en el mástil para subir la afinación de todas las cuerdas.",
    example: "Es uno de los primeros retos en [guitarra acústica](/clases/guitarra-acustica): se gana fuerza con práctica corta y frecuente.",
    related: ["traste", "acorde", "digitacion"],
  },
  {
    term: "Arco",
    id: "arco",
    group: "Instrumentos y voz",
    definition:
      "El arco es la vara de madera o fibra de carbono con cerdas tensadas, tradicionalmente de crin de caballo, que se frota sobre las cuerdas del violín, la viola, el violonchelo y el contrabajo para hacerlas sonar. Las cerdas se untan con resina (colofonia) para que agarren la cuerda.",
    example: "Revisa [cómo sostener el arco del violín](/blog/como-sostener-el-arco-del-violin) paso a paso.",
    related: ["pizzicato", "vibrato"],
  },
  {
    term: "Caña",
    id: "cana",
    group: "Instrumentos y voz",
    definition:
      "La caña es una lámina delgada, hecha de una planta llamada caña común, que vibra para producir el sonido en varios instrumentos de viento madera. El clarinete y el saxofón usan caña simple, sujeta a la boquilla con una abrazadera; el oboe y el fagot usan caña doble, dos láminas que vibran entre sí.",
    example: "Las cañas se desgastan con el uso; aquí verás [cómo cuidar el oboe y sus cañas](/blog/como-cuidar-un-oboe-y-sus-canas).",
    related: ["boquilla", "embocadura"],
  },
  {
    term: "Boquilla",
    id: "boquilla",
    group: "Instrumentos y voz",
    definition:
      "La boquilla es la pieza del instrumento de viento que entra en contacto con la boca. En los metales, como la trompeta o el trombón, es una copa en la que vibran los labios; en el clarinete y el saxofón, es la pieza donde se sujeta la caña.",
    related: ["cana", "embocadura"],
  },
  {
    term: "Registro",
    id: "registro",
    group: "Instrumentos y voz",
    definition:
      "El registro es una zona de alturas de un instrumento o de una voz, como el registro grave, medio o agudo. En el canto también se habla de registros como la voz de pecho, la voz de cabeza o el falsete, según cómo vibran las cuerdas vocales.",
    related: ["tesitura", "falsete", "octava"],
  },
  {
    term: "Tesitura",
    id: "tesitura",
    group: "Instrumentos y voz",
    definition:
      "La tesitura es el rango de notas en el que una voz o un instrumento suena cómodo y con buena calidad, sin forzar. Es más estrecha que la extensión, que incluye todas las notas alcanzables, y ayuda a clasificar las voces en soprano, mezzosoprano, contralto, tenor, barítono o bajo.",
    related: ["registro", "tecnica-vocal", "falsete"],
  },
  {
    term: "Falsete",
    id: "falsete",
    group: "Instrumentos y voz",
    definition:
      "El falsete es un modo de producir la voz en el que las cuerdas vocales vibran estiradas y delgadas, sin cerrarse del todo, y el sonido resulta agudo, ligero y aireado. Lo usan hombres y mujeres, y es habitual en el pop, el soul y algunos cantos tradicionales.",
    related: ["registro", "tesitura", "tecnica-vocal"],
  },
  {
    term: "Apoyo (canto)",
    id: "apoyo",
    group: "Instrumentos y voz",
    definition:
      "El apoyo es, en el canto, el control de la salida del aire con la musculatura del abdomen, la espalda y las costillas, que permite sostener un sonido estable sin apretar la garganta. No consiste en empujar ni endurecer el abdomen, sino en dosificar el aire.",
    example: "Se entrena con [ejercicios de respiración para cantar](/blog/ejercicios-de-respiracion-para-cantar).",
    related: ["tecnica-vocal", "embocadura", "falsete"],
  },
  {
    term: "Técnica vocal",
    id: "tecnica-vocal",
    group: "Instrumentos y voz",
    definition:
      "La técnica vocal es el conjunto de habilidades para cantar de forma sana, afinada y expresiva: respiración y apoyo, emisión, resonancia, dicción y manejo de los registros. Se desarrolla con ejercicios constantes, idealmente guiados por un profesor.",
    example: "Empieza cada práctica con unos [ejercicios de calentamiento vocal](/blog/ejercicios-de-calentamiento-vocal).",
    related: ["apoyo", "registro", "tesitura", "falsete"],
  },

  // ─── Formas y estilos ────────────────────────────────────────────
  {
    term: "Ensamble",
    id: "ensamble",
    group: "Formas y estilos",
    definition:
      "Un ensamble es cualquier grupo de músicos que tocan o cantan juntos, desde un dúo hasta una agrupación grande. Tocar en ensamble entrena la escucha, el pulso compartido y la afinación en conjunto.",
    related: ["orquesta", "banda-sinfonica", "cuarteto-de-cuerdas", "trio-andino"],
  },
  {
    term: "Orquesta",
    id: "orquesta",
    group: "Formas y estilos",
    definition:
      "Una orquesta es una agrupación instrumental grande, organizada en familias (cuerdas, maderas, metales y percusión) y guiada por un director. La orquesta sinfónica suele reunir entre 60 y 100 músicos, con las cuerdas como base; la orquesta de cámara es más pequeña.",
    related: ["ensamble", "banda-sinfonica", "cuarteto-de-cuerdas"],
  },
  {
    term: "Banda sinfónica",
    id: "banda-sinfonica",
    group: "Formas y estilos",
    definition:
      "La banda sinfónica es una agrupación grande de instrumentos de viento (maderas y metales) y percusión, sin la sección de violines de la orquesta, aunque puede incluir contrabajo. En Colombia, las bandas municipales y escolares son una puerta de entrada a la música muy tradicional.",
    example: "Si te llama la idea, lee cómo [empezar en las bandas de viento](/blog/bandas-de-viento-en-colombia-como-empezar).",
    related: ["orquesta", "ensamble", "porro"],
  },
  {
    term: "Cuarteto de cuerdas",
    id: "cuarteto-de-cuerdas",
    group: "Formas y estilos",
    definition:
      "El cuarteto de cuerdas es una agrupación de cámara formada por dos violines, una viola y un violonchelo, y también el nombre de las obras escritas para ella. Haydn, Mozart y Beethoven lo convirtieron en uno de los géneros centrales de la música clásica.",
    related: ["ensamble", "orquesta"],
  },
  {
    term: "Trío andino",
    id: "trio-andino",
    group: "Formas y estilos",
    definition:
      "El trío andino colombiano es el formato típico de la música andina de Colombia: bandola, tiple y guitarra. La bandola lleva la melodía, el tiple sostiene la armonía y el ritmo, y la guitarra hace los bajos, sobre todo en bambucos, pasillos y danzas.",
    example: "Para elegir tu papel en el trío, lee esta [guía de música andina colombiana](/blog/musica-andina-colombiana-guia-para-empezar).",
    related: ["bambuco", "pasillo", "ensamble"],
  },
  {
    term: "Bambuco",
    id: "bambuco",
    group: "Formas y estilos",
    definition:
      "El bambuco es un ritmo y género de la región andina colombiana, considerado uno de los símbolos de la música del país. Se escribe en 6/8 o en 3/4 porque combina a la vez la sensación de dos grupos de tres y de tres grupos de dos, un juego llamado sesquiáltera o hemiola.",
    example:
      "Escucha la diferencia en [bambuco, pasillo y cumbia explicados](/blog/ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados).",
    related: ["pasillo", "trio-andino", "compas-simple-y-compuesto"],
  },
  {
    term: "Pasillo",
    id: "pasillo",
    group: "Formas y estilos",
    definition:
      "El pasillo es un ritmo y género andino en compás de 3/4, emparentado con el vals europeo del siglo XIX y transformado en Colombia y otros países andinos. Puede ser instrumental y rápido, de lucimiento para la bandola o el tiple, o cantado y lento.",
    related: ["bambuco", "trio-andino", "compas"],
  },
  {
    term: "Cumbia",
    id: "cumbia",
    group: "Formas y estilos",
    definition:
      "La cumbia es un ritmo y género del Caribe colombiano, asociado a las riberas del bajo Magdalena, que se escribe en 2/4 o en compás partido (2/2). En su formato tradicional la tocan tambores (alegre, llamador y tambora), gaitas o caña de millo y maracas o guache, y se extendió por toda Latinoamérica.",
    related: ["porro", "vallenato", "sincopa"],
  },
  {
    term: "Porro",
    id: "porro",
    group: "Formas y estilos",
    definition:
      "El porro es un ritmo y género del Caribe colombiano, originario de las sabanas de Córdoba y Sucre y ligado a las bandas de viento, como las bandas pelayeras. Es binario, generalmente en compás partido, y tiene variantes como el porro palitiao y el porro tapao.",
    related: ["cumbia", "banda-sinfonica", "vallenato"],
  },
  {
    term: "Vallenato",
    id: "vallenato",
    group: "Formas y estilos",
    definition:
      "El vallenato es un género del Caribe colombiano, nacido en la región del Magdalena Grande (Cesar, La Guajira y Magdalena) y tocado tradicionalmente con acordeón, caja vallenata y guacharaca. Agrupa varios aires, como el paseo, el merengue, el son y la puya, y la UNESCO lo reconoció como patrimonio cultural inmaterial en 2015.",
    example:
      "Conoce sus instrumentos en [instrumentos de la música del Caribe colombiano](/blog/instrumentos-de-la-musica-del-caribe-colombiano).",
    related: ["cumbia", "porro", "improvisacion"],
  },
  {
    term: "Arreglo",
    id: "arreglo",
    group: "Formas y estilos",
    definition:
      "Un arreglo es la adaptación de una obra ya existente a otro formato, estilo o conjunto de instrumentos: decidir quién toca la melodía, qué armonías y ritmos la acompañan y cómo se estructura.",
    example: "Llevar un bambuco escrito para trío andino a una banda sinfónica o a un coro requiere un arreglo.",
    related: ["composicion", "transporte", "ensamble"],
  },
  {
    term: "Composición",
    id: "composicion",
    group: "Formas y estilos",
    definition:
      "La composición es la creación de una obra musical nueva: su melodía, armonía, ritmo, forma e instrumentación. A diferencia de la improvisación, la obra se fija para poder repetirse, normalmente en una partitura o en una grabación.",
    related: ["arreglo", "improvisacion", "contrapunto"],
  },
];
