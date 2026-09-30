import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cuidar-la-voz-guia-para-cantantes",
  title: "¿Cómo cuidar la voz? Guía práctica para cantantes",
  description:
    "Cómo cuidar la voz si cantas: hidratación, descanso vocal, calentamiento, carraspeo, reflujo, mitos y cuándo consultar a un otorrino o fonoaudiólogo.",
  excerpt:
    "Tu voz no tiene estuche: la cuidas con hábitos diarios. Hidratación, descanso, calentamiento y saber cuándo pedir una valoración profesional.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cuidar la voz para cantar",
    "cuidado de la voz para cantantes",
    "cómo evitar la ronquera al cantar",
    "descanso vocal",
    "carraspeo y voz",
    "cuándo ir al otorrino por la voz",
  ],
  intro: [
    "Cuidar la voz es, sobre todo, una suma de hábitos: tomar agua a lo largo del día, dormir bien, calentar antes de cantar, no gritar ni carraspear por costumbre y darle descanso a la voz después de un uso intenso. Ningún truco de última hora reemplaza esos hábitos.",
    "Esta guía habla de hábitos, no de tratamientos. Si tienes ronquera persistente, dolor o cambios en tu voz, quien debe valorarte es un otorrinolaringólogo, y el fonoaudiólogo es el profesional que acompaña la rehabilitación de la voz.",
  ],
  keyTakeaways: [
    "Lo que hidrata las cuerdas vocales es el agua que tomas durante el día, no el vaso que te tomas justo antes de cantar.",
    "Descanso vocal es hablar menos y más suave; susurrar con fuerza no es descanso.",
    "Cambia el carraspeo por tragar saliva o tomar un sorbo de agua.",
    "Cantar no debería doler: el dolor, la ronquera que no se va o la pérdida de notas son motivo de consulta.",
    "Si la ronquera dura más de dos o tres semanas, consulta a un otorrinolaringólogo.",
  ],
  sections: [
    {
      id: "hidratacion",
      heading: "Hidratación: por dentro y por fuera",
      blocks: [
        {
          type: "p",
          text: "Las cuerdas vocales vibran cientos de veces por segundo y necesitan una capa de mucosa fluida para hacerlo sin roce. Esa hidratación tiene dos fuentes.",
        },
        { type: "h3", text: "Por dentro" },
        {
          type: "p",
          text: "El agua que tomas no pasa por las cuerdas vocales: se va por el esófago. Llega a ellas a través del cuerpo, y eso toma tiempo. Por eso sirve más tomar agua repartida durante el día que un vaso grande justo antes del ensayo.",
        },
        { type: "h3", text: "Por fuera" },
        {
          type: "p",
          text: "El aire que respiras también cuenta. En Bogotá hay temporadas muy secas, y los calentadores eléctricos, el aire acondicionado de oficinas y los aviones resecan aún más el ambiente. Respirar por la nariz cuando no estás cantando ayuda a calentar y humedecer el aire antes de que llegue a la laringe.",
        },
        {
          type: "p",
          text: "Hay sustancias que resecan o irritan: el alcohol, el cigarrillo y el vapeador, y para algunas personas el exceso de café. No se trata de prohibiciones, sino de notar cómo responde tu voz.",
        },
      ],
    },
    {
      id: "descanso-vocal",
      heading: "Descanso vocal y carga de voz en el día",
      blocks: [
        {
          type: "p",
          text: "Tu voz no solo trabaja cuando cantas. Si eres docente, atiendes público, hablas por teléfono muchas horas o sales de rumba y hablas por encima de la música, llegas a la clase de canto con la voz ya cansada.",
        },
        {
          type: "ul",
          items: [
            "Planea el día: si tienes ensayo en la noche, habla menos y más suave en la tarde.",
            "No hables por encima del ruido, sea en el bus, en un bar o en una cancha. Acércate a la persona o espera.",
            "Después de una presentación o un ensayo largo, dale a tu voz unas horas de uso tranquilo.",
            "Susurrar con fuerza no es descanso: también exige a la laringe. Habla poco, en voz suave y natural.",
            "Duerme bien: una voz cansada suele ser un cuerpo cansado.",
          ],
        },
        {
          type: "p",
          text: "Anota en tu cuaderno de práctica los días en que la voz se sintió cansada y qué hiciste antes. Con el tiempo verás patrones que te ayudan a planear mejor.",
        },
      ],
    },
    {
      id: "calentar-y-enfriar",
      heading: "Calentar antes y enfriar después",
      blocks: [
        {
          type: "p",
          text: "Cantar sin calentar es como correr sin estirar: se puede, pero la voz responde peor y te esfuerzas más. Unos diez minutos bastan: cuerpo, respiración, vibración de labios, sirenas suaves y escalas en un registro cómodo. La rutina completa está en [ejercicios de calentamiento vocal](/blog/ejercicios-de-calentamiento-vocal), y la base de todo, en los [ejercicios de respiración para cantar](/blog/ejercicios-de-respiracion-para-cantar).",
        },
        {
          type: "p",
          text: "El enfriamiento se olvida con frecuencia. Después de cantar fuerte o agudo, dedica un par de minutos a bajar: vibración de labios descendente, un zumbido suave con la boca cerrada y unas frases habladas en tu tono natural.",
        },
        {
          type: "p",
          text: "Calentar no vuelve seguro un repertorio inadecuado. Si una canción te obliga a empujar cada vez que llegas al coro, quizá está en una tonalidad que no te conviene: pregúntale a tu profe si se puede bajar.",
        },
      ],
    },
    {
      id: "carraspeo-y-habitos",
      heading: "Carraspeo, gritos y otros hábitos que desgastan",
      blocks: [
        {
          type: "p",
          text: "Carraspear hace chocar las cuerdas vocales con fuerza. Una vez no pasa nada; muchas veces al día, sí. Y se vuelve un círculo: el roce irrita, la irritación da sensación de flema y dan más ganas de carraspear. Cámbialo por alternativas más suaves:",
        },
        {
          type: "ul",
          items: [
            "Tragar saliva.",
            "Tomar un sorbo de agua.",
            "Hacer un zumbido suave con la boca cerrada.",
            "Soplar aire con fuerza pero sin sonido, como cuando empañas un vidrio.",
          ],
        },
        {
          type: "p",
          text: "Si la sensación de tener algo en la garganta no se va, no es un tema de técnica: coméntalo con un médico. Otros hábitos que desgastan la voz:",
        },
        {
          type: "ul",
          items: [
            "Gritar en partidos, conciertos o para llamar a alguien de lejos.",
            "Cantar encima de una banda sin monitor ni micrófono, forzando para escucharte.",
            "Imitar voces muy distintas a la tuya, muy graves o muy roncas, sin guía técnica.",
            "Pasar mucho tiempo en el extremo de tu registro.",
            "Hablar por costumbre en un tono más grave o más agudo que el tuyo.",
          ],
        },
      ],
    },
    {
      id: "reflujo-gripa-y-salud",
      heading: "Reflujo, gripa y otros factores de salud",
      blocks: [
        {
          type: "p",
          text: "Hay condiciones de salud que se notan en la voz. No te corresponde diagnosticarlas, pero sí reconocer las señales para consultar a tiempo.",
        },
        { type: "h3", text: "Reflujo" },
        {
          type: "p",
          text: "El reflujo que llega hasta la garganta puede irritar la laringe. Señales que suelen asociarse con él son la ronquera en las mañanas, el carraspeo frecuente, la sensación de algo atascado en la garganta o un sabor amargo. Si te identificas, consulta a un médico antes de tomar medicamentos o cambiar tu alimentación por tu cuenta: el diagnóstico y el tratamiento son de un profesional de la salud.",
        },
        { type: "h3", text: "Gripa, alergias y días de voz ronca" },
        {
          type: "ul",
          items: [
            "Si estás ronco o con gripa, no fuerces: canta menos, más suave o no cantes, según cómo te sientas y lo que te indique tu médico.",
            "No uses pastillas, sprays o bebidas para aguantar una presentación sin haber consultado. Aliviar la molestia no significa que la voz esté bien.",
            "Avísale a tu profe: puede adaptar la clase con respiración, lectura de la canción o interpretación, sin exigir la voz.",
          ],
        },
        {
          type: "p",
          text: "Los cambios hormonales, algunos medicamentos y la edad también influyen en la voz. Ante cualquier cambio que no entiendas, la consulta es con el médico, no con internet.",
        },
      ],
    },
    {
      id: "mitos-sobre-la-voz",
      heading: "Mitos comunes sobre el cuidado de la voz",
      blocks: [
        {
          type: "table",
          caption: "Lo que se dice y lo que conviene saber",
          head: ["Se dice", "Lo que conviene saber"],
          rows: [
            ["La miel con limón cura la ronquera.", "Puede aliviar la garganta, pero no llega a las cuerdas vocales ni reemplaza el descanso o la consulta."],
            ["Un trago antes de cantar suelta la voz.", "El alcohol reseca y reduce la percepción del esfuerzo: puedes forzar sin notarlo."],
            ["Susurrar es descansar la voz.", "El susurro forzado también exige a la laringe. Mejor hablar poco y suave."],
            ["Si no duele, no hay problema.", "La ronquera que no se va o la pérdida de notas son señales aunque no duela."],
            ["Las bebidas frías dañan la voz.", "Tampoco pasan por las cuerdas vocales. Si te incomodan, evítalas, pero no son la causa habitual de los problemas de voz."],
            ["Con buena técnica se puede cantar enfermo sin riesgo.", "La técnica ayuda, pero no protege una voz inflamada. Si estás mal, lo prudente es parar."],
          ],
        },
      ],
    },
    {
      id: "cuando-consultar",
      heading: "Cuándo ir al otorrino o al fonoaudiólogo",
      blocks: [
        {
          type: "p",
          text: "Tu profe de canto puede notar señales de alerta, pero no puede ver tus cuerdas vocales ni hacer un diagnóstico. Consulta a un otorrinolaringólogo si tienes:",
        },
        {
          type: "ul",
          items: [
            "Ronquera que dura más de dos o tres semanas.",
            "Dolor al hablar o al cantar.",
            "Pérdida repentina de la voz o de notas, sobre todo después de un esfuerzo fuerte como un grito.",
            "Sensación de que cantar cuesta cada vez más, aunque practiques bien.",
            "Voz que se quiebra o cambia de timbre sin explicación.",
          ],
        },
        {
          type: "p",
          text: "El otorrino examina la laringe y hace el diagnóstico. Si hace falta rehabilitar la voz o aprender a usarla de otra manera, el fonoaudiólogo acompaña ese proceso, muchas veces en coordinación con tu profe de canto.",
        },
        {
          type: "callout",
          title: "Escucha las señales",
          text: "Cansancio después de un ensayo largo puede ser normal. Dolor, ronquera que no se va o una voz que no responde como antes no lo son. Detente y consulta antes de seguir cantando.",
        },
        {
          type: "p",
          text: "La mejor prevención es una buena técnica, y se construye con alguien que te escuche cada semana. Si estás empezando, revisa [qué esperar de tus primeras clases de canto](/blog/primeras-clases-de-canto-que-esperar) o mira cómo funcionan las [clases de canto](/clases/canto). Si el cantante de la casa es un niño, lee [canto para niños: cómo cuidar su voz](/blog/canto-para-ninos-como-cuidar-su-voz).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué es bueno tomar antes de cantar?",
      answer:
        "Agua a temperatura ambiente o tibia es suficiente. Lo que realmente hidrata las cuerdas vocales es el agua que tomaste durante el día. Una aromática puede ser agradable para la garganta, pero no reemplaza el calentamiento ni el descanso.",
    },
    {
      question: "¿Cuánto descanso vocal necesito después de cantar mucho?",
      answer:
        "Depende de cuánto y cómo cantaste. Muchas veces bastan unas horas de uso tranquilo y una noche de buen sueño. Si al día siguiente sigues ronco o la voz no responde, no insistas, y si persiste, consulta.",
    },
    {
      question: "¿Es malo cantar con gripa?",
      answer:
        "Cantar con la voz afectada aumenta el riesgo de forzarla. Si estás ronco, lo prudente es bajar la carga o no cantar, y seguir las indicaciones de tu médico.",
    },
    {
      question: "¿Qué diferencia hay entre el otorrino y el fonoaudiólogo?",
      answer:
        "El otorrinolaringólogo es el médico que examina la laringe y hace el diagnóstico. El fonoaudiólogo trabaja la rehabilitación y el uso saludable de la voz. Con frecuencia trabajan juntos, y tu profe de canto puede apoyar ese proceso desde la técnica.",
    },
  ],
  relatedCourseIds: ["canto"],
  relatedPostSlugs: [
    "ejercicios-de-calentamiento-vocal",
    "primeras-clases-de-canto-que-esperar",
    "canto-para-ninos-como-cuidar-su-voz",
  ],
  cta: "clases",
};
