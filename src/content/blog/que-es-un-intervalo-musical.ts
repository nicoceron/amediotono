import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "que-es-un-intervalo-musical",
  title: "¿Qué es un intervalo musical? Explicación con ejemplos",
  description:
    "Qué es un intervalo musical: semitono y tono, cómo nombrar intervalos mayores, menores y justos, tabla completa y canciones para reconocerlos de oído.",
  excerpt:
    "Un intervalo es la distancia entre dos notas. Aprende a medirlo en semitonos, a nombrarlo y a reconocerlo de oído con canciones que ya conoces.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "qué es un intervalo musical",
    "intervalos musicales ejemplos",
    "tabla de intervalos musicales",
    "diferencia entre tono y semitono",
    "intervalos mayores menores y justos",
    "canciones para reconocer intervalos",
  ],
  intro: [
    "Un intervalo musical es la distancia en altura entre dos notas. Se nombra con un número, como segunda, tercera o quinta, que cuenta cuántos nombres de nota abarca, y con una calidad (mayor, menor, justa, aumentada o disminuida) que depende de cuántos semitonos hay entre ellas. Por ejemplo, de do a mi hay una tercera mayor: abarca tres nombres de nota (do, re, mi) y cuatro semitonos.",
    "Los intervalos son la base para entender escalas y acordes, leer música con sentido y reconocer melodías de oído. Aquí los ves paso a paso, con una tabla completa y canciones de referencia para entrenar el oído.",
  ],
  keyTakeaways: [
    "Un intervalo es la distancia entre dos notas; se nombra con un número y una calidad.",
    "El semitono es la distancia más pequeña del sistema occidental: una tecla a la siguiente en el piano o un traste en la guitarra. Un tono son dos semitonos.",
    "Entre notas naturales, solo mi-fa y si-do están a un semitono; las demás están a un tono.",
    "Unísono, cuarta, quinta y octava son justos; segundas, terceras, sextas y séptimas son mayores o menores.",
    "Asociar cada intervalo con el comienzo de una canción conocida es la forma más práctica de reconocerlo de oído.",
  ],
  sections: [
    {
      id: "semitono-y-tono",
      heading: "Semitono y tono: las unidades de medida",
      blocks: [
        {
          type: "p",
          text: "En la música occidental, la distancia más pequeña entre dos notas es el **semitono**, también llamado medio tono. En el piano es el paso de una tecla a la siguiente, sea blanca o negra; en la guitarra, de un traste al siguiente. Dos semitonos forman un **tono**. Sí: el “medio tono” que le da nombre a A medio tono es justamente un semitono.",
        },
        {
          type: "table",
          caption: "Distancias entre notas naturales",
          head: ["Par de notas", "Distancia", "Semitonos"],
          rows: [
            ["Do – Re", "Tono", "2"],
            ["Re – Mi", "Tono", "2"],
            ["Mi – Fa", "Semitono", "1"],
            ["Fa – Sol", "Tono", "2"],
            ["Sol – La", "Tono", "2"],
            ["La – Si", "Tono", "2"],
            ["Si – Do", "Semitono", "1"],
          ],
        },
        {
          type: "p",
          text: "Míralo en el teclado: entre mi y fa, y entre si y do, no hay tecla negra. Ese detalle explica buena parte de la teoría, incluida la estructura de las [escalas mayores y menores](/blog/escalas-mayores-y-menores-explicadas).",
        },
      ],
    },
    {
      id: "como-nombrar-un-intervalo",
      heading: "Cómo se nombra un intervalo en dos pasos",
      blocks: [
        {
          type: "ol",
          items: [
            "**Número:** cuenta los nombres de nota desde la primera hasta la última, incluyendo ambas. De do a sol: do, re, mi, fa, sol. Son cinco, así que es una quinta. Los sostenidos y bemoles no cambian el número: do–mi♭ sigue siendo una tercera.",
            "**Calidad:** cuenta los semitonos y compáralos con la tabla de abajo. Do–mi♭ tiene tres semitonos, así que es una tercera menor; do–mi tiene cuatro, así que es una tercera mayor.",
          ],
        },
        {
          type: "p",
          text: "Algunos ejemplos para practicar el método:",
        },
        {
          type: "ul",
          items: [
            "Re–fa: tres nombres y 3 semitonos, tercera menor.",
            "Fa–la: tres nombres y 4 semitonos, tercera mayor.",
            "Mi–si: cinco nombres y 7 semitonos, quinta justa.",
            "Si–fa: cinco nombres y 6 semitonos, quinta disminuida.",
            "Do–fa♯: cuatro nombres y 6 semitonos, cuarta aumentada.",
          ],
        },
        {
          type: "p",
          text: "Un intervalo es **melódico** si las notas suenan una después de otra, y **armónico** si suenan juntas. Además, el melódico puede ser ascendente o descendente.",
        },
      ],
    },
    {
      id: "tabla-de-intervalos",
      heading: "Tabla de intervalos: mayores, menores y justos",
      blocks: [
        {
          type: "table",
          caption: "Intervalos simples medidos desde do",
          head: ["Semitonos", "Intervalo", "Ejemplo desde do", "Carácter sonoro"],
          rows: [
            ["0", "Unísono", "Do – Do", "Idéntico"],
            ["1", "Segunda menor", "Do – Re♭", "Muy tenso"],
            ["2", "Segunda mayor", "Do – Re", "Paso de escala"],
            ["3", "Tercera menor", "Do – Mi♭", "Estable, color menor"],
            ["4", "Tercera mayor", "Do – Mi", "Estable, color mayor"],
            ["5", "Cuarta justa", "Do – Fa", "Abierto"],
            ["6", "Cuarta aumentada o quinta disminuida (tritono)", "Do – Fa♯ o Do – Sol♭", "Inestable, pide resolver"],
            ["7", "Quinta justa", "Do – Sol", "Muy estable y hueco"],
            ["8", "Sexta menor", "Do – La♭", "Dulce, algo melancólico"],
            ["9", "Sexta mayor", "Do – La", "Amplio y luminoso"],
            ["10", "Séptima menor", "Do – Si♭", "Tenso, suave"],
            ["11", "Séptima mayor", "Do – Si", "Muy tenso"],
            ["12", "Octava justa", "Do – Do agudo", "La misma nota, más aguda"],
          ],
        },
        {
          type: "p",
          text: "Las reglas para cambiar de calidad son sencillas. Un intervalo mayor con un semitono menos se vuelve menor; uno menor con un semitono menos, disminuido; uno mayor con un semitono más, aumentado. Los justos, con un semitono más o menos, pasan directamente a aumentados o disminuidos.",
        },
      ],
    },
    {
      id: "compuestos-e-inversiones",
      heading: "Intervalos compuestos e inversiones",
      blocks: [
        {
          type: "p",
          text: "Los intervalos mayores que una octava se llaman **compuestos**: la novena es una octava más una segunda; la décima, una octava más una tercera. Para saber su equivalente simple, réstale 7 al número.",
        },
        {
          type: "p",
          text: "**Invertir** un intervalo es pasar la nota de abajo una octava arriba. Do–mi, una tercera mayor, se convierte en mi–do, una sexta menor. Hay dos reglas:",
        },
        {
          type: "ul",
          items: [
            "Los números suman 9: la segunda se vuelve séptima, la tercera sexta y la cuarta quinta.",
            "La calidad se invierte: mayor pasa a menor, aumentado a disminuido, y los justos siguen siendo justos.",
          ],
        },
        {
          type: "p",
          text: "Esto tiene aplicación directa: un acorde mayor se forma con una tercera mayor y encima una tercera menor (do–mi–sol); el menor, al revés (do–mi♭–sol).",
        },
      ],
    },
    {
      id: "reconocer-intervalos-de-oido",
      heading: "Cómo reconocer intervalos de oído con canciones",
      blocks: [
        {
          type: "p",
          text: "El truco más usado es asociar cada intervalo con el comienzo de una melodía conocida. Estas son referencias ascendentes habituales:",
        },
        {
          type: "table",
          caption: "Canciones de referencia para intervalos ascendentes",
          head: ["Intervalo", "Canción de referencia", "Dónde está"],
          rows: [
            ["Segunda menor", "Tema de la película “Tiburón”", "Las dos notas del motivo"],
            ["Segunda mayor", "“Martinillo”", "“Mar-ti”"],
            ["Tercera menor", "“Smoke on the Water”", "Primeras dos notas del riff"],
            ["Tercera mayor", "“When the Saints Go Marching In”", "“Oh when”"],
            ["Cuarta justa", "“La cucaracha”", "De “ca” a “ra”"],
            ["Tritono", "Tema de “Los Simpson”", "Primeras dos notas"],
            ["Quinta justa", "“Estrellita, ¿dónde estás?”", "De “tre” a “lli”"],
            ["Sexta menor", "“The Entertainer”", "El salto después de las tres notas iniciales"],
            ["Sexta mayor", "“My Bonnie Lies over the Ocean”", "“My Bon-”"],
            ["Séptima menor", "Tema original de “Star Trek”", "Primeras dos notas"],
            ["Octava", "“Over the Rainbow”", "“Some-where”"],
          ],
        },
        {
          type: "p",
          text: "Para intervalos descendentes sirven “Para Elisa” de Beethoven (segunda menor), “Yesterday” de los Beatles (segunda mayor), “Hey Jude” (tercera menor), el comienzo de la Quinta Sinfonía de Beethoven (tercera mayor) y la “Pequeña serenata nocturna” de Mozart (cuarta justa). Si alguna no te suena, reemplázala por una canción tuya: una referencia propia funciona mejor que una ajena.",
        },
      ],
    },
    {
      id: "rutina-de-entrenamiento",
      heading: "Rutina de 10 minutos para entrenar intervalos",
      blocks: [
        {
          type: "ol",
          items: [
            "Empieza con pocos intervalos muy distintos entre sí: segunda mayor, tercera mayor, quinta justa y octava.",
            "Toca una nota en un piano o una aplicación, canta el intervalo pensando en su canción de referencia y comprueba tocando la segunda nota.",
            "Repite desde otras notas de partida. Para verificar que llegaste a la nota correcta, puedes cantarla frente al [afinador](/herramientas/afinador).",
            "Pídele a alguien, o a una aplicación de entrenamiento auditivo, que toque intervalos al azar, y anota cuántos aciertas.",
            "Cuando reconozcas bien los primeros, suma terceras menores, cuartas y sextas; luego séptimas y el tritono.",
            "Pasa a intervalos armónicos, con las dos notas sonando juntas, y a intervalos descendentes.",
            "Llévalo al repertorio: busca qué intervalos aparecen en las melodías que tocas o cantas.",
          ],
        },
        {
          type: "p",
          text: "El reconocimiento de intervalos es parte del [solfeo](/blog/que-es-el-solfeo-y-como-practicarlo) y suele evaluarse en las pruebas de admisión a carreras de música, junto con el dictado. Si te estás preparando, mira el [preuniversitario de música](/preuniversitario-musica); y si quieres construir esta base desde cero, las clases de [teoría musical](/clases/teoria-musical) la trabajan paso a paso.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Do–re♯ y do–mi♭ son el mismo intervalo?",
      answer:
        "Suenan igual, porque ambos tienen 3 semitonos, pero se llaman distinto: do–re♯ es una segunda aumentada y do–mi♭ una tercera menor. Esto se llama enarmonía, y el nombre correcto depende de la escala o el acorde en que aparezcan.",
    },
    {
      question: "¿Por qué la cuarta, la quinta y la octava se llaman justas?",
      answer:
        "Porque no tienen versión mayor y menor: en su forma natural hay una sola, que históricamente se consideró la más consonante. Si les sumas o restas un semitono pasan directamente a aumentadas o disminuidas.",
    },
    {
      question: "¿Qué es el tritono y por qué suena tan tenso?",
      answer:
        "Es el intervalo de tres tonos, o seis semitonos, que divide la octava justo por la mitad. Suena inestable y pide resolver hacia un intervalo más estable. Por eso aparece en los acordes de dominante, que empujan la música hacia el reposo.",
    },
    {
      question: "¿Necesito oído absoluto para reconocer intervalos?",
      answer:
        "No. Reconocer intervalos es una habilidad de oído relativo, que se entrena con práctica constante a cualquier edad. Te explicamos la diferencia en [oído absoluto y oído relativo](/blog/oido-absoluto-y-oido-relativo).",
    },
  ],
  relatedCourseIds: ["teoria-musical"],
  relatedPostSlugs: [
    "escalas-mayores-y-menores-explicadas",
    "que-es-el-solfeo-y-como-practicarlo",
    "oido-absoluto-y-oido-relativo",
  ],
  cta: "clases",
};
