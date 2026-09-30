import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "dictado-musical-como-prepararlo",
  title: "Dictado musical: cómo prepararlo para la prueba de admisión",
  seoTitle: "Dictado musical: cómo prepararlo para la admisión",
  description:
    "Cómo preparar el dictado musical para la prueba de admisión: tipos de dictado, método paso a paso, ejercicios diarios, errores comunes y plan de progreso.",
  excerpt:
    "El dictado es la parte de la prueba que más tarda en madurar. Te damos un método para cada audición, una rutina diaria de 20 minutos y un plan por etapas.",
  category: "estudiar-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "dictado musical",
    "cómo hacer un dictado musical",
    "ejercicios de dictado melódico",
    "dictado rítmico ejercicios",
    "dictado de intervalos y acordes",
    "dictado armónico para examen de música",
  ],
  intro: [
    "Un dictado musical es escuchar un fragmento y escribirlo en partitura: un ritmo, una melodía, unos intervalos o una progresión de acordes. Se prepara como un idioma: con práctica diaria corta, avanzando de lo simple a lo complejo y con un método fijo para cada audición.",
    "La clave es separar los problemas: primero el ritmo, luego las notas de apoyo y al final los detalles. Con ese orden y unos meses de constancia, el dictado deja de ser la parte que más asusta de la prueba.",
  ],
  keyTakeaways: [
    "Los tipos de dictado más frecuentes en las pruebas son rítmico, melódico, de intervalos, de acordes y armónico.",
    "Escribe primero el ritmo y las notas de apoyo; completa los detalles en las siguientes audiciones.",
    "No necesitas oído absoluto: el dictado se resuelve con oído relativo, pensando en grados de la escala.",
    "Quince a veinte minutos diarios rinden más que dos horas el fin de semana.",
    "Pide que otra persona te dicte: si tú tocas el ejercicio, ya sabes la respuesta.",
  ],
  sections: [
    {
      id: "el-dictado-en-las-pruebas",
      heading: "El dictado en las pruebas de admisión",
      blocks: [
        {
          type: "callout",
          title: "Los requisitos cambian cada periodo",
          text: "Los tipos de dictado, su nivel, el formato y cuánto pesan cambian de una convocatoria a otra. Los ejemplos de esta guía vienen de la convocatoria más reciente que revisamos (2026). Confirma lo que te van a evaluar en el instructivo o la guía del aspirante vigente, en el sitio oficial de tu universidad.",
        },
        {
          type: "p",
          text: "Casi todas las pruebas de música incluyen dictado, dentro del examen teórico o de la prueba auditiva. En la convocatoria más reciente que revisamos:",
        },
        {
          type: "ul",
          items: [
            "La **Universidad Nacional** incluía dictado melódico y dictado de intervalos armónicos en la parte escrita de su prueba de Teoría, Audición y Lectura.",
            "La **Distrital ASAB** evaluaba dictado de intervalos, de acordes, melódico, rítmico y armónico, dentro de su componente de dictado y lectura.",
            "La **Pedagógica Nacional** incluía dictado en su prueba de aptitud y conocimiento musical.",
            "**Univalle** incluía dictado melódico en su examen teórico.",
          ],
        },
        {
          type: "p",
          text: "El nivel cambia mucho entre programas: no es lo mismo reconocer si un acorde es mayor o menor que escribir una progresión completa con su bajo. Revisa hasta dónde llega el tuyo en el instructivo oficial, como el que publica la [página de admisiones de Artes Musicales de la ASAB](https://fartes.udistrital.edu.co/artes-musicales/index.php/admisiones).",
        },
      ],
    },
    {
      id: "tipos-de-dictado",
      heading: "Tipos de dictado y cómo resolver cada uno",
      blocks: [
        {
          type: "table",
          caption: "Los tipos de dictado más comunes",
          head: ["Tipo", "Qué escuchas", "Qué escribes", "Clave para resolverlo"],
          rows: [
            ["Rítmico", "Un ritmo sobre una sola nota o percutido", "Figuras y silencios en el compás indicado", "Marca el pulso con el pie y ubica cada ataque respecto a ese pulso"],
            ["Melódico", "Una melodía de algunos compases", "Ritmo y alturas en el pentagrama", "Canta por dentro en grados de la escala (1, 3, 5…) y no pierdas la tónica"],
            ["Intervalos melódicos", "Dos notas, una después de otra", "El nombre del intervalo o las dos notas", "Asócialos al comienzo de canciones conocidas mientras aprendes su color"],
            ["Intervalos armónicos", "Dos notas a la vez", "El intervalo", "Canta la nota grave, luego la aguda, y mide la distancia"],
            ["Acordes", "Tres o cuatro notas simultáneas", "Tipo de acorde (mayor, menor, disminuido, aumentado, séptimas) y a veces la inversión", "Arpégialo con la voz empezando por el bajo"],
            ["Armónico", "Una progresión de acordes", "Grados o funciones (I, IV, V…) y a veces el bajo", "Escucha primero la línea del bajo; la cadencia final te orienta"],
          ],
        },
        {
          type: "p",
          text: "Para los intervalos, las canciones de referencia ayudan mucho al principio; tienes ejemplos en [qué es un intervalo musical](/blog/que-es-un-intervalo-musical). Con el tiempo, la meta es reconocer el color de cada intervalo sin pasar por la canción, porque en el examen no hay tiempo para cantarla entera. Para practicar a diario, usa nuestro [entrenamiento auditivo de intervalos](/herramientas/entrenamiento-auditivo).",
        },
      ],
    },
    {
      id: "metodo-paso-a-paso",
      heading: "Método paso a paso para un dictado melódico",
      blocks: [
        {
          type: "p",
          text: "El dictado melódico es el más común y reúne a casi todos los demás. Usa este orden en cada ejercicio hasta que se vuelva automático:",
        },
        {
          type: "ol",
          items: [
            "**Antes de que suene:** anota lo que te den (tonalidad, compás, número de compases, primera nota). Canta mentalmente la escala y el acorde de tónica.",
            "**Primera audición: solo escucha.** No escribas. Sigue el pulso, cuenta los compases y fíjate en la forma: ¿sube, baja, se repite algún motivo?",
            "**Segunda audición: el ritmo.** Escríbelo encima del pentagrama, con rayitas si hace falta, y marca las barras de compás.",
            "**Tercera audición: las notas de apoyo.** Escribe la primera nota de cada compás, las que caen en tiempo fuerte y la final. Piensa en grados: tónica, dominante, sensible.",
            "**Siguientes audiciones: rellena.** Completa notas de paso y saltos. Si un salto te cuesta, cántalo desde la tónica.",
            "**Última audición: revisa.** Sigue con los ojos lo que escribiste mientras suena. Verifica que cada compás sume bien y que aplicaste las alteraciones de la armadura.",
          ],
        },
        {
          type: "p",
          text: "Si te pierdes, no te quedes pegado en el compás difícil: sigue con el resto y vuelve después. Un compás vacío en la mitad cuesta menos que medio dictado en blanco.",
        },
        {
          type: "p",
          text: "El número de audiciones y el tiempo entre ellas los define cada universidad o el jurado. Practica con pocas repeticiones para que el día de la prueba te sobre tiempo.",
        },
      ],
    },
    {
      id: "ejercicios-diarios",
      heading: "Ejercicios diarios de 20 minutos",
      blocks: [
        {
          type: "table",
          caption: "Una rutina diaria de entrenamiento auditivo",
          head: ["Bloque", "Tiempo", "Ejercicio"],
          rows: [
            ["Canto", "5 min", "Escala mayor y menor, arpegios y saltos desde la tónica (1-3, 1-5, 1-6, 1-8), con nombre de notas"],
            ["Intervalos", "4 min", "Diez intervalos al azar: ascendentes, descendentes y armónicos"],
            ["Ritmo", "4 min", "Dos dictados rítmicos cortos, de cuatro compases"],
            ["Melodía", "5 min", "Un dictado melódico de cuatro a ocho compases, con el método de arriba"],
            ["Acordes", "2 min", "Reconocer tríadas o acordes de séptima al piano o en una aplicación"],
          ],
        },
        { type: "h3", text: "De dónde sacar dictados" },
        {
          type: "ul",
          items: [
            "Pídele a tu profe, a un compañero o a alguien de tu casa que toque ejercicios de un libro de dictado o de solfeo.",
            "Usa aplicaciones o páginas de entrenamiento auditivo para intervalos y acordes.",
            "Transcribe melodías que conoces: una canción infantil, un bambuco, el coro de una canción que te guste. Después compruébalo en el piano.",
            "Graba tú mismo ejercicios al azar y escúchalos días después, cuando ya no recuerdes cuáles eran.",
          ],
        },
        {
          type: "p",
          text: "Cantar es parte del entrenamiento, no un extra: si no puedes cantar lo que escuchas, difícilmente lo vas a escribir. Tienes ejercicios de entonación en [qué es el solfeo y cómo practicarlo](/blog/que-es-el-solfeo-y-como-practicarlo).",
        },
      ],
    },
    {
      id: "errores-comunes",
      heading: "Errores comunes en el dictado",
      blocks: [
        {
          type: "ul",
          items: [
            "Escribir notas desde la primera audición y perder el ritmo por el camino.",
            "Perder el pulso: si no sabes dónde está el tiempo uno, todo lo demás se corre.",
            "Olvidar las alteraciones de la armadura al pasar las notas al papel.",
            "Practicar solo intervalos ascendentes, cuando en la prueba también hay descendentes y armónicos.",
            "Entrenar solo con piano. Escucha también voz, guitarra o violín: el timbre cambia la percepción.",
            "Dictarte a ti mismo y creer que vas mejor de lo que vas.",
            "Obsesionarte con el [oído absoluto](/blog/oido-absoluto-y-oido-relativo): lo que cuenta es entender las relaciones entre las notas.",
            "Quedarte trabado en un compás y dejar el resto en blanco.",
          ],
        },
      ],
    },
    {
      id: "plan-de-progresion",
      heading: "Plan de progresión: de lo simple al nivel de examen",
      blocks: [
        {
          type: "table",
          caption: "Etapas orientativas con práctica diaria",
          head: ["Etapa", "Rítmico", "Melódico", "Intervalos y acordes"],
          rows: [
            ["Semanas 1 a 4", "Blancas, negras y corcheas en 2/4, 3/4 y 4/4", "Dos a cuatro compases por grado conjunto en do mayor", "Segundas, terceras, quintas y octavas; tríada mayor frente a menor"],
            ["Semanas 5 a 8", "Puntillos, semicorcheas y silencios", "Saltos por las notas de la tríada; sol mayor y fa mayor", "Todos los intervalos simples ascendentes; tríadas disminuida y aumentada"],
            ["Semanas 9 a 16", "Síncopas, tresillos y compases compuestos como 6/8", "Tonalidades menores con sensible, frases de ocho compases", "Intervalos descendentes y armónicos; acordes de séptima"],
            ["Semana 17 en adelante", "Ritmos mixtos al nivel de tu programa", "Cromatismos y modulaciones sencillas, si tu programa los pide", "Progresiones con I, IV, V, ii y vi; dictado armónico con bajo"],
          ],
        },
        {
          type: "p",
          text: "Los tiempos son orientativos: pasa a la siguiente etapa cuando aciertes la mayoría de ejercicios de la actual sin esfuerzo, no cuando se acabe la semana. En el último mes antes de la prueba, haz dictados cronometrados con el formato de tu universidad.",
        },
        {
          type: "p",
          text: "Un profe que te dicte, corrija y suba el nivel a tiempo marca la diferencia. En A medio tono puedes tomar [clases de teoría musical](/clases/teoria-musical) con dictado y solfeo, virtuales o a domicilio en Bogotá, como parte de tu [preparación para la admisión](/preuniversitario-musica). Para organizar el resto de la prueba, mira [cómo prepararte para la prueba de admisión de música](/blog/como-prepararte-para-la-prueba-de-admision-de-musica).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Necesito oído absoluto para hacer bien los dictados?",
      answer:
        "No. El dictado se resuelve con oído relativo: reconocer cómo se relaciona cada nota con la tónica y con las demás. El oído relativo se entrena con práctica, y es el que usa la gran mayoría de músicos.",
    },
    {
      question: "¿Cuántas veces tocan el dictado en el examen?",
      answer:
        "Depende de la universidad y del tipo de dictado; lo indica el instructivo o el jurado al comenzar. Por eso conviene practicar con pocas repeticiones: si en casa necesitas diez audiciones, en la prueba te va a faltar tiempo.",
    },
    {
      question: "¿Puedo practicar dictado yo solo?",
      answer:
        "En parte. Los intervalos y los acordes se entrenan bien con aplicaciones, y transcribir canciones también ayuda. Para dictados melódicos y armónicos necesitas que alguien te dicte o grabaciones que no conozcas.",
    },
    {
      question: "¿En cuánto tiempo mejora el dictado?",
      answer:
        "Con práctica diaria, los intervalos y los ritmos suelen mejorar en pocas semanas. El dictado melódico largo y el armónico toman más tiempo, así que empieza varios meses antes de la prueba.",
    },
  ],
  relatedCourseIds: ["teoria-musical"],
  relatedPostSlugs: [
    "lectura-ritmica-y-melodica-para-la-prueba-de-admision",
    "como-prepararte-para-la-prueba-de-admision-de-musica",
    "que-es-un-intervalo-musical",
  ],
  cta: "clases",
};
