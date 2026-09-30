import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-afinar-el-violin",
  title: "¿Cómo afinar el violín? Clavijas, microafinadores y quintas",
  seoTitle: "Cómo afinar el violín paso a paso",
  description:
    "Afina el violín en Sol, Re, La, Mi: cuándo usar clavijas o microafinadores, cómo afinar por quintas de oído y cómo cuidar el puente al hacerlo.",
  excerpt:
    "Las cuerdas del violín son Sol, Re, La y Mi, afinadas en quintas. Aprende a usar clavijas y microafinadores sin forzar nada y a revisar el puente después.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo afinar el violín",
    "notas del violín cuerdas",
    "afinar violín con afinador",
    "microafinadores violín cómo usar",
    "afinar violín por quintas",
    "afinador de violín online",
  ],
  intro: [
    "El violín se afina en quintas: de la cuerda más gruesa a la más delgada, **Sol, Re, La, Mi** (G, D, A, E). Primero se afina el La, que es la nota de referencia de la orquesta, y a partir de ahí las demás. Para ajustes pequeños se usan los microafinadores del cordal; las clavijas, solo cuando la cuerda está muy lejos de su nota.",
    "Con un afinador y algo de cuidado, afinar toma un par de minutos. La parte delicada no es encontrar la nota, sino mover las clavijas sin que se resbalen y no descuidar el puente.",
  ],
  keyTakeaways: [
    "Cuerdas del violín, de grave a aguda: Sol (G3), Re (D4), La (A4) y Mi (E5).",
    "Afina primero el La a 440 Hz; luego Re, Sol y Mi.",
    "Microafinadores para ajustes pequeños; clavijas solo si la nota está lejos, empujándolas hacia adentro mientras giras.",
    "Dos cuerdas vecinas bien afinadas forman una quinta justa que suena quieta, sin ondulaciones.",
    "Después de afinar, revisa que el puente siga derecho: la tensión tiende a inclinarlo hacia el diapasón.",
  ],
  sections: [
    {
      id: "notas-del-violin",
      heading: "Las notas de las cuerdas del violín",
      blocks: [
        {
          type: "table",
          caption: "Afinación del violín (referencia La = 440 Hz)",
          head: ["Cuerda", "Nota", "Cifrado", "Frecuencia"],
          rows: [
            ["4ª (la más gruesa)", "Sol", "G3", "196 Hz"],
            ["3ª", "Re", "D4", "293,66 Hz"],
            ["2ª", "La", "A4", "440 Hz"],
            ["1ª (la más delgada)", "Mi", "E5", "659,25 Hz"],
          ],
        },
        {
          type: "p",
          text: "Entre cada cuerda y la siguiente hay una quinta justa: cinco notas contando ambas (Sol-La-Si-Do-Re). Por eso se dice que el violín \"se afina por quintas\". La viola usa las mismas relaciones, pero una quinta más abajo: Do, Sol, Re, La; si la tocas, usa el [afinador para viola](/herramientas/afinador/viola).",
        },
        {
          type: "p",
          text: "Un detalle de vocabulario que confunde a muchos: en español, \"diapasón\" es tanto el mástil negro donde pisas las cuerdas como la horquilla metálica que da el La. En este artículo, cuando hablamos de la referencia, decimos \"diapasón de horquilla\".",
        },
      ],
    },
    {
      id: "clavijas-o-microafinadores",
      heading: "Clavijas o microafinadores: cuál usar",
      blocks: [
        {
          type: "table",
          caption: "Diferencias entre clavijas y microafinadores",
          head: ["", "Clavijas", "Microafinadores"],
          rows: [
            ["Dónde están", "En el clavijero, junto a la voluta", "En el cordal, al otro extremo de las cuerdas"],
            ["Para qué sirven", "Cambios grandes: cuerda nueva o muy desafinada", "Ajustes pequeños, cuando la nota ya está cerca"],
            ["Cuánto girar", "Muy poco: un milímetro cambia bastante la nota", "Media vuelta o menos"],
            ["Riesgo", "Que se resbalen o que revienten la cuerda", "Llegar al tope y rayar la tapa"],
            ["Quién las usa", "Estudiantes con algo de práctica o el profe", "Cualquiera, incluso niños con ayuda"],
          ],
        },
        {
          type: "p",
          text: "Muchos violines de estudio traen cuatro microafinadores; en violines más avanzados es común tener solo uno, en la cuerda de Mi, porque es de acero y muy sensible. Si tu violín no tiene microafinador en alguna cuerda, esa se afina solo con clavija.",
        },
        { type: "h3", text: "Cómo girar una clavija sin que se resbale" },
        {
          type: "ol",
          items: [
            "Apoya el violín vertical sobre tu pierna, con la voluta hacia arriba, o sosténlo en posición de tocar.",
            "Identifica la clavija correcta siguiendo la cuerda con el dedo. Las de Re y La están más cerca de la cejuela; las de Sol y Mi, más cerca de la voluta.",
            "Toca la cuerda en pizzicato para escuchar dónde está.",
            "Gira la clavija muy poco mientras la **empujas suavemente hacia adentro**, hacia el clavijero. Esa presión es lo que la mantiene en su sitio.",
            "Pasa un poco por debajo de la nota y sube hasta ella; nunca la subas de golpe.",
            "Termina el ajuste fino con el microafinador.",
          ],
        },
        { type: "h3", text: "Cómo usar los microafinadores" },
        {
          type: "p",
          text: "Girando el tornillo en el sentido de las manecillas del reloj (visto desde arriba), la nota sube; al contrario, baja. Revisa cada tanto que no esté enroscado hasta el fondo: si lo está, la palanca de abajo puede tocar y rayar la tapa. En ese caso, afloja el microafinador hasta la mitad de su recorrido y recupera la nota con la clavija.",
        },
      ],
    },
    {
      id: "con-afinador",
      heading: "Cómo afinar el violín con afinador, paso a paso",
      blocks: [
        {
          type: "p",
          text: "Puedes usar un afinador de pinza, que se engancha en la voluta y lee la vibración, o un afinador con micrófono como nuestro [afinador de violín online](/herramientas/afinador/violin), que funciona en el celular o el computador. El mismo [afinador](/herramientas/afinador) tiene modos para viola, violonchelo y contrabajo.",
        },
        {
          type: "ol",
          items: [
            "Busca un lugar silencioso y abre el afinador. Si usas el de la web, permite el micrófono.",
            "Toca la cuerda de La en pizzicato o con el arco, con un sonido parejo y sin presionar de más.",
            "Si el afinador indica que la nota está baja (♭), gira el microafinador en el sentido del reloj; si está alta (♯), en sentido contrario.",
            "Si la cuerda marca una nota distinta, como Sol♯ o La♯, está lejos: usa la clavija primero.",
            "Afina Re, luego Sol y por último Mi.",
            "Haz una segunda pasada: afinar una cuerda cambia un poco la tensión de las demás.",
          ],
        },
        {
          type: "p",
          text: "Cuando ya manejes el arco con soltura, afina con arco en lugar de pizzicato: la nota se sostiene y el afinador la lee más estable. Si todavía estás trabajando el agarre, repasa [cómo sostener el arco del violín](/blog/como-sostener-el-arco-del-violin).",
        },
      ],
    },
    {
      id: "afinar-por-quintas",
      heading: "Cómo afinar el violín de oído, por quintas",
      blocks: [
        {
          type: "p",
          text: "Es como afinan los violinistas en orquesta: toman el La del oboe o del piano y afinan las demás cuerdas tocándolas de a dos, en doble cuerda. Para practicar en casa, la referencia puede ser un piano, un diapasón de horquilla o el afinador solo para el La.",
        },
        {
          type: "table",
          caption: "Orden para afinar por quintas",
          head: ["Paso", "Cuerdas que tocas juntas", "Cuál ajustas"],
          rows: [
            ["1", "La sola, contra la referencia", "La"],
            ["2", "Re + La", "Re"],
            ["3", "Sol + Re", "Sol"],
            ["4", "La + Mi", "Mi"],
          ],
        },
        {
          type: "ol",
          items: [
            "Pasa el arco sobre las dos cuerdas a la vez, con peso repartido entre ambas y un sonido tranquilo.",
            "Escucha: si la quinta está desafinada, oirás una ondulación o \"batido\", como si el sonido temblara.",
            "Ajusta la cuerda que estás afinando. Cuanto más lenta sea la ondulación, más cerca estás.",
            "Cuando el sonido se vuelve quieto y lleno, casi como una sola nota, la quinta está justa.",
          ],
        },
        {
          type: "p",
          text: "Un dato para curiosos: las quintas perfectamente puras son un poquito más amplias que las del piano. Afinando de oído desde el La, el Sol queda unos 4 cents (centésimas de semitono) más bajo y el Mi unos 2 cents más alto que en un afinador. Es normal. Si vas a tocar con piano, tu profe puede pedirte quintas un poco más estrechas.",
        },
      ],
    },
    {
      id: "cuidado-del-puente",
      heading: "El puente: revísalo cada vez que afinas",
      blocks: [
        {
          type: "p",
          text: "El puente no está pegado: se sostiene solo por la presión de las cuerdas. Al subir la tensión con las clavijas, las cuerdas lo arrastran poco a poco hacia el diapasón. Si se inclina mucho, puede deformarse o caerse.",
        },
        {
          type: "ul",
          items: [
            "Mira el violín de lado: la cara del puente que da hacia el cordal debe quedar casi perpendicular a la tapa.",
            "Si notas que se inclina hacia el diapasón, pídele a tu profe que te enseñe a enderezarlo, o llévalo al luthier. No lo intentes a la fuerza con las cuerdas muy tensas.",
            "Nunca aflojes todas las cuerdas al mismo tiempo: sin presión, el alma (la pequeña pieza de madera dentro del violín) puede caerse y hay que llevarlo al luthier.",
            "Si el puente se cae, no lo vuelvas a poner por tu cuenta. Guarda el violín y llévalo a revisar.",
          ],
        },
        {
          type: "callout",
          title: "Para papás de violinistas pequeños",
          text: "Con niños, lo más seguro es que en casa solo se usen los microafinadores. Si una cuerda está tan desafinada que necesita clavija, espera a la clase y que el profe lo haga, o pide que te enseñe con calma.",
        },
      ],
    },
    {
      id: "por-que-se-desafina",
      heading: "Por qué el violín se desafina tan seguido",
      blocks: [
        {
          type: "ul",
          items: [
            "**Clima:** en el frío seco de Bogotá la madera se contrae y las clavijas tienden a aflojarse; en tierra caliente y húmeda se hinchan y pueden atascarse. Si viajas, deja el violín en su estuche un rato antes de abrirlo y afinar.",
            "**Cuerdas nuevas:** se estiran durante los primeros días y bajan de tono varias veces.",
            "**Clavijas que no ajustan bien:** si una se resbala siempre, aunque la empujes, el luthier puede ajustarla o aplicar pasta para clavijas.",
          ],
        },
        {
          type: "p",
          text: "Afinar forma parte de cada sesión de estudio, antes de la escala o del calentamiento. En nuestras [clases de violín](/clases/violin) el profe lo revisa contigo al comienzo hasta que lo hagas con confianza. Para el resto del mantenimiento, lee [cómo limpiar y cuidar un violín](/blog/como-limpiar-y-cuidar-un-violin).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto hay que afinar el violín?",
      answer:
        "Cada vez que lo vayas a tocar. Casi siempre bastará con un pequeño ajuste en los microafinadores; si el violín pasó días guardado o cambió de clima, quizás necesites las clavijas.",
    },
    {
      question: "¿El violín se afina a 440 o a 442 Hz?",
      answer:
        "Para estudiar, 440 Hz es la referencia habitual y la que traen los afinadores por defecto. Algunas orquestas afinan un poco más alto, como 442 Hz; si tocas en una, sigue la indicación del director o del concertino.",
    },
    {
      question: "¿Qué hago si se revienta la cuerda de Mi al afinar?",
      answer:
        "Suele pasar al subir demasiado la clavija o por desgaste de la cuerda en el punto donde se apoya en el microafinador. Cambia la cuerda y súbela despacio, comprobando con el afinador que llegas a Mi y no la pasas. Mientras cambias una cuerda, deja las otras tres tensas para que el puente y el alma no se muevan.",
    },
    {
      question: "¿Se puede afinar un violín sin afinador?",
      answer:
        "Sí, con una referencia para el La (piano, diapasón de horquilla u otro instrumento afinado) y el resto por quintas. Sin ninguna referencia, el violín puede quedar afinado entre sí, pero no coincidirá con otros instrumentos.",
    },
  ],
  relatedCourseIds: ["violin"],
  relatedPostSlugs: [
    "como-limpiar-y-cuidar-un-violin",
    "como-sostener-el-arco-del-violin",
    "como-elegir-tu-primer-violin-y-su-tamano",
  ],
  cta: "clases",
};
