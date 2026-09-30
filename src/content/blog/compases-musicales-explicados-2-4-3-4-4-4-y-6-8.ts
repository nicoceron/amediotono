import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "compases-musicales-explicados-2-4-3-4-4-4-y-6-8",
  title: "Compases musicales explicados: 2/4, 3/4, 4/4 y 6/8",
  description:
    "Qué significan los números del compás, la diferencia entre compás simple y compuesto, cómo contar 2/4, 3/4, 4/4 y 6/8, y ejercicios con metrónomo.",
  excerpt:
    "El 2/4, el 3/4 y el 4/4 dividen cada tiempo en dos; el 6/8 lo divide en tres. Entiende esa diferencia y aprende a contar cada compás con ejemplos y ejercicios.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "compases musicales",
    "qué es el compás 6/8",
    "diferencia entre 3/4 y 6/8",
    "compás simple y compuesto",
    "cómo contar un compás de 4/4",
    "tipos de compás en música",
  ],
  intro: [
    "Un compás agrupa los pulsos de la música en bloques que se repiten, con el primero más fuerte. El **2/4** tiene dos tiempos, el **3/4** tres y el **4/4** cuatro, y en los tres cada tiempo se divide en dos corcheas: son compases simples. El **6/8** es distinto: tiene dos tiempos, pero cada uno se divide en tres corcheas. Es un compás compuesto.",
    "Esa diferencia entre dividir en dos o en tres es lo que hace que una marcha, un vals y una canción de cuna se sientan tan distintos. Aquí aprendes a reconocerla, a contarla y a practicarla con metrónomo.",
  ],
  keyTakeaways: [
    "En los compases simples (2/4, 3/4, 4/4) el número de arriba dice cuántos tiempos hay y el de abajo qué figura vale un tiempo.",
    "En los compuestos (6/8, 9/8, 12/8) el número de arriba cuenta corcheas: divídelo entre tres y tendrás los tiempos.",
    "3/4 y 6/8 tienen seis corcheas, pero el 3/4 las agrupa 2 + 2 + 2 y el 6/8, 3 + 3.",
    "El primer tiempo de cada compás es el más fuerte; en 4/4 el tercero es semifuerte.",
    "Compás no es lo mismo que tempo: el compás organiza los pulsos; el tempo dice qué tan rápido van.",
  ],
  sections: [
    {
      id: "que-es-un-compas",
      heading: "Qué es un compás y qué dicen sus dos números",
      blocks: [
        {
          type: "p",
          text: "Cuando escuchas música, tu pie marca un pulso regular. Si prestas atención, notarás que algunos pulsos pesan más que otros y que ese patrón de fuerte y débil se repite. Cada repetición es un compás, y en la partitura se separa con una barra vertical.",
        },
        {
          type: "p",
          text: "La cifra que aparece al comienzo tiene dos números. En los compases simples, el de arriba dice cuántos tiempos tiene cada compás y el de abajo, qué figura dura un tiempo: 4 es la negra, 2 la blanca y 8 la corchea. Así, 3/4 significa tres tiempos de negra. Si todavía no manejas las figuras, empieza por nuestra guía para [leer partituras](/blog/como-leer-partituras-guia-para-principiantes).",
        },
      ],
    },
    {
      id: "simple-y-compuesto",
      heading: "Compás simple y compuesto: la diferencia clave",
      blocks: [
        {
          type: "p",
          text: "Lo que define un compás no es solo cuántos tiempos tiene, sino cómo se divide cada tiempo:",
        },
        {
          type: "ul",
          items: [
            "**Simple:** cada tiempo se divide en dos. El tiempo es una figura sin puntillo, normalmente la negra.",
            "**Compuesto:** cada tiempo se divide en tres. El tiempo es una figura con puntillo, normalmente la negra con puntillo, que equivale a tres corcheas.",
          ],
        },
        {
          type: "table",
          caption: "Cada compás simple tiene su “pareja” compuesta con el mismo número de tiempos",
          head: ["Número de tiempos", "Simple (tiempo = negra)", "Compuesto (tiempo = negra con puntillo)"],
          rows: [
            ["Dos (binario)", "2/4", "6/8"],
            ["Tres (ternario)", "3/4", "9/8"],
            ["Cuatro (cuaternario)", "4/4", "12/8"],
          ],
        },
        {
          type: "p",
          text: "Un truco rápido: si arriba ves 6, 9 o 12 y abajo un 8, casi siempre es compuesto. Divide el número de arriba entre tres y sabrás cuántos tiempos sientes: el 6/8 va en dos, el 9/8 en tres y el 12/8 en cuatro. La excepción son los tempos muy lentos, donde a veces se cuentan las seis corcheas una por una.",
        },
      ],
    },
    {
      id: "como-contar-cada-compas",
      heading: "Cómo contar 2/4, 3/4, 4/4 y 6/8",
      blocks: [
        {
          type: "table",
          caption: "Cuenta en voz alta y marca más fuerte la sílaba en mayúsculas",
          head: ["Compás", "Cómo contarlo", "Acentos", "Dónde lo encuentras"],
          rows: [
            ["2/4", "UNO y dos y", "Fuerte – débil", "Marchas, polcas, cumbia"],
            ["3/4", "UNO y dos y tres y", "Fuerte – débil – débil", "Vals, pasillo, guabina, “Cumpleaños feliz”"],
            ["4/4", "UNO y dos y TRES y cuatro y", "Fuerte – débil – semifuerte – débil", "Pop, rock, baladas, reguetón"],
            ["6/8", "UNO dos tres CUATRO cinco seis", "Fuerte en 1, semifuerte en 4", "Canciones de cuna, currulao, muchas partituras de bambuco"],
          ],
        },
        {
          type: "p",
          text: "El 4/4 es tan común que tiene su propio símbolo, una C, llamada compasillo. Y si quieres aprender a marcar cada compás con la mano, como en el solfeo, lo explicamos en [qué es el solfeo y cómo practicarlo](/blog/que-es-el-solfeo-y-como-practicarlo).",
        },
      ],
    },
    {
      id: "seis-octavos-o-tres-cuartos",
      heading: "6/8 y 3/4: parecen iguales, pero no lo son",
      blocks: [
        {
          type: "p",
          text: "Los dos compases llenan exactamente el mismo espacio: seis corcheas. La diferencia es cómo se agrupan. Dilo en voz alta, marcando fuerte lo que está en mayúsculas:",
        },
        {
          type: "ul",
          items: [
            "**3/4:** UNO-y DOS-y TRES-y. Tres pulsos, cada uno partido en dos (2 + 2 + 2).",
            "**6/8:** UNO-dos-tres CUA-tro-cinco. Dos pulsos, cada uno partido en tres (3 + 3).",
          ],
        },
        {
          type: "p",
          text: "El 3/4 “camina” en tres; el 6/8 “se mece” en dos. Un ejemplo famoso de las dos sensaciones alternadas es “America”, de West Side Story, de Leonard Bernstein. En Colombia pasa algo parecido con el bambuco, que aparece escrito en 6/8 o en 3/4, y con el joropo llanero, que superpone ambas sensaciones. Lo explicamos, con un ejercicio de palmas, en nuestra guía de [ritmos colombianos](/blog/ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados).",
        },
      ],
    },
    {
      id: "otros-compases",
      heading: "Otros compases que te vas a encontrar",
      blocks: [
        {
          type: "ul",
          items: [
            "**2/2 o compás partido:** dos tiempos de blanca. Se escribe con una C atravesada por una línea. Tiene las mismas notas que un 4/4, pero se siente en dos; es frecuente en marchas, en el porro y en la cumbia escrita para banda u orquesta.",
            "**12/8:** cuatro tiempos, cada uno en tres corcheas. Es el compás del blues lento y de muchas baladas de los cincuenta.",
            "**9/8:** tres tiempos de negra con puntillo, cada uno en tres corcheas. Es menos frecuente y lo verás sobre todo en obras académicas.",
            "**Compases de amalgama o irregulares:** combinan grupos de dos y de tres, como el 5/4 (3 + 2) o el 7/8 (2 + 2 + 3). “Take Five”, del cuarteto de Dave Brubeck, es el ejemplo clásico de 5/4.",
          ],
        },
      ],
    },
    {
      id: "ejercicios-con-metronomo",
      heading: "Ejercicios con metrónomo para sentir cada compás",
      blocks: [
        {
          type: "p",
          text: "Abre el [metrónomo en línea](/herramientas/metronomo), activa el acento en el primer tiempo y haz un ejercicio por día:",
        },
        {
          type: "ol",
          items: [
            "**2/4 a 80 BPM:** marcha en el puesto, pie izquierdo en el UNO y derecho en el dos, y da una palma solo en el acento.",
            "**3/4 a 90 BPM:** canta “Cumpleaños feliz” sobre el clic y descubre en qué sílaba cae el acento. Notarás que la canción empieza antes del primer tiempo: eso es una [anacrusa](/glosario-musical#anacrusa).",
            "**4/4 a 80 BPM:** cuenta en voz alta y da palmas solo en el 1 y el 3; luego solo en el 2 y el 4. Siente cómo la misma cuenta cambia de carácter.",
            "**6/8:** elige 2 pulsos con subdivisión en tresillos. Cuenta las seis corcheas, con palmas en el 1 y el 4. Después camina solo en el 1 y el 4 mientras sigues contando las seis.",
            "**Adivina el compás:** pon tres canciones que te gusten, marca el pulso con el pie y busca dónde cambia el acorde o suena más fuerte el bajo: ahí está el primer tiempo. Cuenta cuántos pulsos hay hasta el siguiente y fíjate si cada uno se divide en dos o en tres.",
          ],
        },
        {
          type: "p",
          text: "Si al principio el 6/8 se te enreda, pon el clic en cada corchea y ve pasando a un clic por tiempo cuando las seis salgan parejas. En las clases de [teoría musical](/clases/teoria-musical) este trabajo de pulso, compás y subdivisión se hace con lectura rítmica gradual, desde lo más simple.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre compás y tempo?",
      answer:
        "El compás dice cómo se agrupan los pulsos (de a dos, de a tres, de a cuatro) y cómo se divide cada uno. El tempo dice qué tan rápido van esos pulsos, en BPM. Un vals y un pasillo rápido pueden estar ambos en 3/4 y tener tempos muy distintos.",
    },
    {
      question: "¿Por qué el 6/8 se cuenta en dos y no en seis?",
      answer:
        "Porque las seis corcheas se agrupan de a tres y el oído percibe dos pulsos, cada uno de negra con puntillo. Solo cuando la música es muy lenta tiene sentido marcar las seis corcheas por separado.",
    },
    {
      question: "¿El 4/4 y el 2/2 son lo mismo?",
      answer:
        "Duran lo mismo, porque ambos caben en cuatro negras, pero no se sienten igual. El 4/4 se marca en cuatro y el 2/2 en dos pulsos de blanca, con una sensación más ágil. Por eso muchas marchas y ritmos rápidos se escriben en compás partido.",
    },
    {
      question: "¿Qué es un compás de amalgama?",
      answer:
        "Es un compás que resulta de unir dos compases distintos, como el 5/4 (un 3/4 más un 2/4) o el 5/8. Tiene acentos irregulares y al principio se cuenta agrupando: “uno-dos-tres, uno-dos”.",
    },
  ],
  relatedCourseIds: ["teoria-musical"],
  relatedPostSlugs: [
    "ritmos-colombianos-bambuco-pasillo-y-cumbia-explicados",
    "como-usar-el-metronomo-para-practicar",
    "como-leer-partituras-guia-para-principiantes",
  ],
  cta: "clases",
};
