import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-entrenar-el-oido-musical",
  title: "Cómo entrenar el oído musical: un plan paso a paso",
  description:
    "Un plan de 12 semanas para entrenar el oído musical: entonación, intervalos, grados, acordes, progresiones y dictados, con apps, herramientas o profe.",
  excerpt:
    "El oído musical se entrena en orden: entonar, reconocer intervalos y grados, distinguir acordes, seguir progresiones y escribir dictados. Aquí tienes un plan de 12 semanas.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo entrenar el oído musical",
    "ejercicios para desarrollar el oído musical",
    "entrenamiento auditivo",
    "cómo reconocer acordes de oído",
    "cómo sacar canciones de oído",
    "app para entrenar el oído musical",
  ],
  intro: [
    "El oído musical se entrena como un músculo: con ejercicios cortos, casi todos los días y en un orden lógico. Primero aprendes a **entonar** lo que oyes, luego a reconocer **intervalos y grados** de la escala, después a distinguir **acordes** y **progresiones**, y al final a escribir **dictados** y sacar canciones completas.",
    "Diez o quince minutos diarios bastan si cantas en voz alta y no solo escuchas. Abajo tienes qué entrenar, cómo hacerlo y un plan de 12 semanas que puedes seguir solo o con tu profe.",
  ],
  keyTakeaways: [
    "El oído no es un don fijo: es un conjunto de habilidades que se entrenan por separado.",
    "Cantar lo que escuchas acelera todo el proceso; las apps de opción múltiple solas se quedan cortas.",
    "Los intervalos sirven para leer y escribir; los grados de la escala, para sacar canciones e improvisar.",
    "Para oír progresiones, sigue primero el bajo y pregúntate si la música está en casa o lejos de ella.",
    "La combinación que mejor funciona: práctica diaria con herramientas y revisión periódica con un profe.",
  ],
  sections: [
    {
      id: "que-se-entrena",
      heading: "Qué se entrena cuando entrenas el oído",
      blocks: [
        {
          type: "p",
          text: "“Tener buen oído” agrupa varias habilidades distintas. Conviene trabajarlas por separado, porque puedes ser muy bueno en una y estar empezando en otra:",
        },
        {
          type: "table",
          caption: "Las siete habilidades del oído musical",
          head: ["Habilidad", "Qué es", "Primer ejercicio"],
          rows: [
            ["Entonación", "Reproducir con la voz una nota que oyes", "Canta una nota del piano y compruébala en el afinador"],
            ["Intervalos", "Reconocer la distancia entre dos notas", "Distinguir una tercera mayor de una quinta justa"],
            ["Grados", "Saber qué lugar ocupa una nota dentro de la tonalidad", "Tras un acorde de Do, decir si suena Do, Mi o Sol"],
            ["Acordes", "Reconocer si un acorde es mayor, menor, disminuido o aumentado", "Mayor contra menor"],
            ["Progresiones", "Seguir el movimiento de los acordes en una canción", "Contar cuántas veces cambia el acorde en un coro"],
            ["Ritmo", "Reproducir y escribir figuras rítmicas", "Repetir con palmas un compás que alguien te toca"],
            ["Memoria melódica", "Retener una frase para cantarla o escribirla", "Cantar de vuelta cuatro notas después de oírlas una vez"],
          ],
        },
        {
          type: "p",
          text: "Ninguna de estas habilidades depende del oído absoluto; todas son de oído relativo y mejoran con práctica. Si tienes dudas sobre esa diferencia, lee [oído absoluto y oído relativo](/blog/oido-absoluto-y-oido-relativo).",
        },
      ],
    },
    {
      id: "intervalos-y-grados",
      heading: "Intervalos y grados: dos caminos que se complementan",
      blocks: [
        {
          type: "p",
          text: "El camino clásico es reconocer intervalos asociándolos con el comienzo de canciones conocidas. Funciona muy bien al principio, y tienes una tabla completa de referencias en [qué es un intervalo musical](/blog/que-es-un-intervalo-musical). Para practicarlos a diario, el [juego de entrenamiento auditivo](/herramientas/entrenamiento-auditivo) te propone intervalos al azar y te dice si acertaste.",
        },
        {
          type: "p",
          text: "Pero las canciones de referencia tienen un límite: son lentas cuando la música va rápido y aíslan dos notas de su contexto. Por eso conviene sumar pronto el entrenamiento por **grados**, que enseña a oír cada nota en relación con la tónica:",
        },
        {
          type: "ol",
          items: [
            "Establece la tonalidad tocando la cadencia Do – Fa – Sol – Do.",
            "Toca una sola nota de la escala de Do, al azar, o pídele a alguien que la toque.",
            "Cántala y camina con la voz, nota por nota, hasta el Do más cercano, nombrando cada paso: “sol, fa, mi, re, do”.",
            "Cuenta los pasos: si bajaste cuatro hasta Do, la nota era el quinto grado. Comprueba en el instrumento.",
            "Cambia de tonalidad cada día, para no memorizar alturas sino funciones.",
          ],
        },
        {
          type: "p",
          text: "Con el tiempo notarás que cada grado tiene su propia “personalidad”: el séptimo quiere subir a la tónica, el cuarto quiere bajar al tercero, el quinto suena firme pero abierto. Esa sensación es la que te permite sacar melodías de oído.",
        },
      ],
    },
    {
      id: "acordes-y-progresiones",
      heading: "Acordes y progresiones: oír la armonía",
      blocks: [
        { type: "h3", text: "Calidad de los acordes" },
        {
          type: "p",
          text: "Empieza solo con mayor contra menor: el mayor suena luminoso y el menor más oscuro, y la diferencia está en la tercera. Toca el acorde, luego arpégialo y canta sus tres notas, de abajo hacia arriba. Cuando aciertes casi siempre, suma el disminuido (tenso, apretado) y el aumentado (suspendido, como sin resolver). Más adelante llegan las séptimas: la séptima mayor suena suave y soñadora; la séptima de dominante, tensa y con ganas de moverse.",
        },
        { type: "h3", text: "Progresiones" },
        {
          type: "ol",
          items: [
            "Encuentra la tónica: tararea la nota que se siente como “casa” al final de una frase.",
            "Sigue el bajo: la nota más grave suele ser la fundamental del acorde.",
            "Marca con la mano cada vez que cambia el acorde, sin preocuparte todavía por cuál es.",
            "Decide si cada acorde es mayor o menor.",
            "Prueba primero con I, IV, V y vi: cubren una enorme cantidad de canciones.",
          ],
        },
        {
          type: "p",
          text: "Un buen punto de partida es cualquier blues de 12 compases, como “Johnny B. Goode”, de Chuck Berry: solo tiene tres acordes y cambian siempre en los mismos lugares. Para entender qué hace cada uno, mira [qué es la armonía musical](/blog/que-es-la-armonia-musical).",
        },
      ],
    },
    {
      id: "dictados-y-ritmo",
      heading: "Memoria, dictados y ritmo",
      blocks: [
        {
          type: "ul",
          items: [
            "**Canta antes de escribir:** si no puedes cantar de vuelta lo que oíste, todavía no lo tienes en la memoria. Empieza con tres notas y crece de a una.",
            "**Dictados de canciones que ya sabes:** escribe la melodía de una canción infantil, como “Los pollitos dicen”, y compruébala en tu instrumento. Conoces la música; solo te falta nombrarla.",
            "**Ecos rítmicos:** alguien te palmea un compás y tú lo repites de inmediato; después, escríbelo. Usa un metrónomo para que el pulso no se mueva.",
            "**Escucha por capas:** pon una canción cuatro veces y atiende cada vez una sola cosa: el bajo, la batería, los acordes y la voz. Luego identifica dónde empieza el coro.",
          ],
        },
        {
          type: "p",
          text: "Si vas a presentar una prueba de admisión, el dictado tiene su propio método de examen, que explicamos en [dictado musical: cómo prepararlo](/blog/dictado-musical-como-prepararlo).",
        },
      ],
    },
    {
      id: "plan-de-12-semanas",
      heading: "Un plan de 12 semanas, 15 minutos al día",
      blocks: [
        {
          type: "table",
          caption: "Ajusta el ritmo a tu nivel: si una etapa todavía no sale, repítela",
          head: ["Semanas", "Enfoque", "Rutina diaria"],
          rows: [
            ["1–4", "Entonación y primeros intervalos", "Cantar notas y comprobarlas; segunda mayor, tercera mayor, quinta justa y octava; mayor contra menor; ecos rítmicos de un compás."],
            ["5–8", "Todos los intervalos ascendentes y grados 1, 3 y 5", "Juego de intervalos; grados después de una cadencia; acordes disminuidos y aumentados; dictados de tres o cuatro notas."],
            ["9–12", "Intervalos descendentes, grados de toda la escala y progresiones", "Intervalos armónicos y descendentes; los siete grados; I, IV, V y vi en canciones reales; dictados de dos compases; sacar una canción completa."],
          ],
        },
        {
          type: "p",
          text: "Anota cada día cuántos aciertos tuviste. Ver la curva subir semana a semana es la mejor motivación, y te muestra con claridad qué habilidad se está quedando atrás.",
        },
      ],
    },
    {
      id: "apps-o-profe",
      heading: "¿Apps o profe? Lo que aporta cada uno",
      blocks: [
        {
          type: "table",
          caption: "Lo ideal es combinarlos",
          head: ["Criterio", "Apps y herramientas en línea", "Con profe"],
          rows: [
            ["Repetición diaria", "Excelente: rápidas y siempre disponibles", "Limitada al tiempo de clase"],
            ["Corrección de tu entonación", "No escuchan cómo cantas", "Te corrige en el momento"],
            ["Contexto musical", "Sonidos aislados, en opción múltiple", "Canciones, repertorio y tu instrumento"],
            ["Plan de avance", "Fijo o elegido por ti", "Ajustado a tus errores concretos"],
            ["Preparación para admisión", "Buena práctica de apoyo", "Estrategia, simulacros y lectura"],
          ],
        },
        {
          type: "p",
          text: "El riesgo de usar solo apps es aprender a adivinar entre cuatro botones sin cantar nunca. El de depender solo de la clase es practicar una vez por semana. En las clases de [teoría musical](/clases/teoria-musical) o de canto, el profe te deja ejercicios para la semana y revisa lo que cuesta; si tu meta es una carrera de música, un preuniversitario trabaja el oído junto con el solfeo y la teoría.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo toma entrenar el oído musical?",
      answer:
        "Con práctica diaria, los primeros cambios se notan en pocas semanas: entonas con más seguridad y distingues mayor de menor. Reconocer todos los intervalos y seguir progresiones con soltura toma meses, y es una habilidad que sigue creciendo toda la vida.",
    },
    {
      question: "¿Puede entrenar el oído alguien que cree que no tiene oído?",
      answer:
        "Sí. Salvo casos poco comunes, quien dice no tener oído simplemente no lo ha entrenado. Empieza por la entonación con una referencia visual, como el afinador, y avanza despacio: los primeros logros suelen llegar antes de lo que esperas.",
    },
    {
      question: "¿Entrenar el oído sirve si toco batería?",
      answer:
        "Mucho. Un baterista necesita reconocer la forma de la canción, anticipar cambios de sección, escuchar al bajo y afinar sus tambores. El trabajo rítmico y la escucha por capas son especialmente útiles.",
    },
    {
      question: "¿Qué conviene más, entrenar intervalos o grados?",
      answer:
        "Las dos cosas. Los intervalos te ayudan a leer y a escribir dictados; los grados, a sacar canciones, transportar e improvisar, porque piensas cada nota en relación con la tónica.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "canto"],
  relatedPostSlugs: [
    "que-es-un-intervalo-musical",
    "oido-absoluto-y-oido-relativo",
    "dictado-musical-como-prepararlo",
  ],
  cta: "clases",
};
