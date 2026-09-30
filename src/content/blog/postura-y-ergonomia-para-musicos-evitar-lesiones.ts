import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "postura-y-ergonomia-para-musicos-evitar-lesiones",
  title: "Postura y ergonomía para músicos: cómo evitar lesiones",
  description:
    "Postura y ergonomía para músicos: cómo sentarte y sostener tu instrumento, ajustar silla y atril, calentar el cuerpo y reconocer señales de sobrecarga.",
  excerpt:
    "La postura no es quedarse quieto y derecho: es que el instrumento se adapte a ti. Ajustes por instrumento, calentamiento, pausas y cuándo consultar.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "postura correcta para tocar un instrumento",
    "cómo evitar lesiones al tocar un instrumento",
    "ergonomía para músicos",
    "dolor de espalda al tocar guitarra",
    "dolor de muñeca al tocar piano",
    "calentamiento para músicos",
  ],
  intro: [
    "Una buena postura para tocar es la que te deja respirar libre, mover los brazos sin esfuerzo y mantenerte equilibrado durante toda la práctica. La regla de oro es que el instrumento se acomode a tu cuerpo, y no tu cuerpo al instrumento: silla, atril, correa, banca o hombrera se ajustan hasta que no tengas que torcerte, encogerte ni estirarte para tocar.",
    "Si a eso le sumas un calentamiento corto, pausas frecuentes y atención a las señales de sobrecarga, reduces buena parte del riesgo de molestias. Esta guía no reemplaza una valoración médica: si tienes dolor que persiste, hormigueo o pérdida de fuerza, consulta a un profesional de la salud.",
  ],
  keyTakeaways: [
    "El instrumento se adapta a ti: ajusta silla, atril, banca, correa o hombrera antes de corregir tu cuerpo.",
    "Una buena postura no es rígida; es equilibrada y te permite moverte y respirar.",
    "Cinco minutos de movilidad suave en hombros, brazos, muñecas y manos preparan el cuerpo para tocar.",
    "Las pausas cortas y frecuentes previenen más que un gran descanso al final.",
    "El dolor que vuelve, el hormigueo, el entumecimiento o la pérdida de fuerza son motivo para parar y consultar.",
  ],
  sections: [
    {
      id: "principios-de-una-buena-postura",
      heading: "Principios que sirven para cualquier instrumento",
      blocks: [
        {
          type: "ul",
          items: [
            "**Base estable.** De pie, con el peso repartido entre los dos pies y las rodillas sin bloquear. Sentado, apoyado sobre los huesos de la pelvis y con los pies planos en el piso.",
            "**Columna larga, no rígida.** Ni encorvado ni en posición de firmes. Imagina que la coronilla se eleva sin esfuerzo.",
            "**Cabeza equilibrada** encima de la columna, no adelantada hacia la partitura o el diapasón.",
            "**Hombros sueltos,** sin subir hacia las orejas ni irse hacia adelante.",
            "**Muñecas neutras,** sin quiebres extremos hacia arriba, abajo o los lados durante mucho tiempo.",
            "**Movimiento.** La postura no es una estatua: el cuerpo acompaña la música. Quedarse congelado también genera tensión.",
          ],
        },
        {
          type: "p",
          text: "Una prueba útil: mientras tocas un pasaje sencillo, ¿podrías respirar hondo, girar un poco la cabeza o soltar los hombros sin dejar de tocar? Si no, hay una tensión que no hace falta.",
        },
      ],
    },
    {
      id: "postura-por-instrumento",
      heading: "Postura por instrumento: puntos clave y errores comunes",
      blocks: [
        {
          type: "table",
          caption: "Ajustes principales según el instrumento",
          head: ["Instrumento", "Punto clave", "Error frecuente"],
          rows: [
            ["Piano y teclado", "Banca a una altura en que los antebrazos queden más o menos paralelos al piso, y a una distancia que te deje llegar a los extremos del teclado.", "Sentarse muy bajo o muy cerca, con los codos pegados al cuerpo y las muñecas caídas."],
            ["Guitarra acústica y clásica", "Guitarra estable sin sostenerla con la mano izquierda; apoyapié o soporte si hace falta elevarla.", "Inclinar la guitarra hacia arriba para ver el diapasón y encorvarse sobre ella."],
            ["Guitarra eléctrica y bajo", "Correa a una altura parecida sentado y de pie, con el mástil al alcance sin estirar el brazo.", "Colgarlos muy bajo por estética, con la muñeca izquierda doblada al máximo."],
            ["Violín y viola", "Hombrera y mentonera a la medida de tu cuello, para sostener el instrumento sin apretar la mandíbula ni subir el hombro.", "Levantar el hombro izquierdo y morder con la mandíbula para agarrar el instrumento."],
            ["Violonchelo y contrabajo", "Pica a una altura que deje el instrumento centrado; silla sin brazos y pies firmes.", "Pica muy corta, que obliga a encorvarse, y sentarse al fondo de la silla."],
            ["Flauta traversa", "Cabeza derecha y brazos relajados: la flauta va hacia la boca, no la boca hacia la flauta.", "Torcer el cuello y levantar el hombro derecho."],
            ["Clarinete, oboe y saxofón", "Correa o cordón para repartir el peso; la boquilla llega a la boca sin agachar la cabeza.", "Cargar todo el peso en el pulgar derecho o estirar el cuello hacia la boquilla."],
            ["Trompeta y trombón", "Instrumento sostenido con los brazos, sin hundir el pecho; sentado, la espalda despegada del respaldo.", "Encorvarse para leer y bajar la campana hacia el atril."],
            ["Batería", "Banco a una altura en que los muslos bajen levemente hacia las rodillas; tambores y platillos al alcance.", "Banco muy bajo y platillos muy altos o lejanos."],
          ],
        },
        {
          type: "p",
          text: "Cada instrumento tiene detalles finos que vale la pena revisar con tu profe. Si tocas piano, profundiza en [la posición correcta de las manos](/blog/posicion-correcta-de-las-manos-en-el-piano).",
        },
      ],
    },
    {
      id: "tu-espacio-de-practica",
      heading: "Ajusta tu espacio: silla, atril y luz",
      blocks: [
        {
          type: "ul",
          items: [
            "**Silla firme y sin brazos,** de una altura en que tus muslos queden paralelos al piso o bajen un poco hacia las rodillas. El sofá y la cama no sirven para practicar.",
            "**Atril a la altura de los ojos.** Si lees la partitura en el celular apoyado en la mesa, vas a pasar la práctica mirando hacia abajo. Sube el atril o usa un soporte.",
            "**Buena luz,** para no acercarte a la partitura entrecerrando los ojos.",
            "**Espejo o cámara.** Verte de lado y de frente te muestra lo que no sientes.",
            "**Manos tibias.** En las mañanas frías de Bogotá, lavarte las manos con agua tibia o frotarlas antes de tocar ayuda a que respondan sin forzarlas.",
            "**Instrumento a tu medida.** Los niños necesitan instrumentos de su tamaño, como violines fraccionarios o guitarras más pequeñas, y hay que revisarlos a medida que crecen; lo explicamos en [cómo elegir tu primer violín y su tamaño](/blog/como-elegir-tu-primer-violin-y-su-tamano).",
          ],
        },
      ],
    },
    {
      id: "calentamiento-fisico",
      heading: "Calentamiento del cuerpo antes de tocar",
      blocks: [
        {
          type: "p",
          text: "No es lo mismo que el calentamiento musical con escalas. Son unos cinco minutos para despertar las articulaciones que vas a usar. Todo suave, sin rebotes y sin llegar al dolor:",
        },
        {
          type: "ol",
          items: [
            "**Hombros.** Círculos lentos hacia atrás. Luego súbelos hacia las orejas, sostén un segundo y suéltalos.",
            "**Cuello.** Inclina la cabeza hacia un lado y hacia el otro, y gira para mirar sobre cada hombro, sin forzar.",
            "**Brazos.** Balancéalos sueltos a los lados del cuerpo, como un péndulo, y cruza cada brazo por delante del pecho.",
            "**Muñecas.** Círculos lentos en ambos sentidos.",
            "**Manos y dedos.** Abre y cierra las manos despacio, separa los dedos como un abanico y toca cada yema con el pulgar.",
            "**Respiración.** Tres respiraciones lentas, soltando el aire con los hombros relajados.",
            "**Empieza a tocar suave.** Los primeros minutos, algo lento y fácil, antes del pasaje exigente.",
          ],
        },
        {
          type: "p",
          text: "Si un profesional de la salud te indicó ejercicios específicos, sigue sus indicaciones por encima de esta rutina general.",
        },
      ],
    },
    {
      id: "pausas-y-habitos",
      heading: "Pausas y hábitos que previenen la sobrecarga",
      blocks: [
        {
          type: "p",
          text: "La sobrecarga casi nunca viene de un solo día: se acumula con repeticiones, tensión y poco descanso. Además de repartir bien tu tiempo, como explicamos en [cuántas horas practicar al día](/blog/cuantas-horas-practicar-al-dia), cuida estos hábitos:",
        },
        {
          type: "ul",
          items: [
            "**Micropausas.** Entre repeticiones de un pasaje, suelta las manos y deja caer los brazos unos segundos.",
            "**Varía el trabajo.** Después de un ejercicio técnico repetitivo, cambia a lectura, a una pieza tranquila o a práctica mental.",
            "**Sube la carga de a poco.** Antes de un recital o una audición, la tentación es duplicar las horas de golpe, y ese es el momento de más riesgo.",
            "**Cuida lo que haces fuera del instrumento.** Horas de celular, computador o cargar un estuche pesado de un solo hombro también suman. Usa las dos correas del estuche o uno con ruedas.",
            "**Descansa y muévete.** Un cuerpo que duerme bien y se mantiene activo tolera mejor la práctica.",
          ],
        },
      ],
    },
    {
      id: "senales-de-sobrecarga",
      heading: "Señales de sobrecarga y cuándo consultar",
      blocks: [
        {
          type: "p",
          text: "Un poco de cansancio muscular después de practicar es normal y se va con descanso. Estas otras señales piden detenerte:",
        },
        {
          type: "ul",
          items: [
            "Dolor que vuelve siempre en el mismo sitio, durante o después de tocar.",
            "Molestias que aparecen cada vez más pronto en la práctica.",
            "Hormigueo, entumecimiento o sensación de corriente en manos o brazos.",
            "Pérdida de fuerza, torpeza o dedos que no responden como antes.",
            "Dolor que te despierta en la noche o que sigue al día siguiente.",
          ],
        },
        {
          type: "p",
          text: "Si aparece alguna, para, descansa y cuéntaselo a tu profe para revisar postura y técnica. Si persiste o se repite, consulta a un médico, que según el caso puede remitirte a fisiatría o fisioterapia. No te pongas un diagnóstico por internet ni te automediques para seguir tocando, y vuelve al instrumento de forma gradual, según las indicaciones del profesional.",
        },
        {
          type: "callout",
          title: "Tocar con dolor no es disciplina",
          text: "Seguir tocando con dolor para cumplir la meta del día puede convertir una molestia pasajera en un problema largo. Parar a tiempo también es parte de estudiar bien.",
        },
      ],
    },
    {
      id: "el-papel-del-profe",
      heading: "Cómo te ayuda el profe (y cómo revisarte tú)",
      blocks: [
        {
          type: "p",
          text: "Muchas tensiones no se sienten: se ven. Por eso la mirada externa es tan valiosa. Entre clase y clase, grábate en video unos minutos de lado y de frente, y revisa hombros, cuello, muñecas y espalda.",
        },
        {
          type: "p",
          text: "En clase, el profe corrige detalles que cambian todo, como unos centímetros de altura en la banca o el ángulo de la guitarra. En las [clases a domicilio en Bogotá](/clases-de-musica-a-domicilio-bogota), además, ajusta la silla, el atril y el espacio donde de verdad practicas toda la semana. En clases virtuales, ubica la cámara de lado para que pueda ver tu postura completa. Si estás empezando [violín](/clases/violin), [piano](/clases/piano) o cualquier otro instrumento, pídele desde el principio que revise tu postura.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Es mejor tocar guitarra sentado o de pie?",
      answer:
        "Las dos son válidas si la guitarra queda a una altura y un ángulo parecidos. Para estudiar suele ser más cómodo sentado; si vas a tocar de pie en presentaciones, ajusta la correa para que la posición se parezca a la de tu práctica.",
    },
    {
      question: "¿Es normal que me duela la espalda al tocar?",
      answer:
        "Un cansancio leve después de mucho rato puede pasar, pero el dolor no debería ser parte de la práctica. Revisa la altura de la silla o la banca, el atril y cuánto tiempo pasas sin pausa. Si el dolor sigue, consulta a un médico.",
    },
    {
      question: "¿Sirve hacer ejercicio para tocar mejor?",
      answer:
        "Mantenerte activo ayuda a que el cuerpo tolere mejor las horas de práctica. Para ejercicios específicos de fortalecimiento o estiramiento, pide orientación a un profesional de la salud, sobre todo si ya tienes molestias.",
    },
    {
      question: "¿Los niños necesitan cuidados especiales de postura?",
      answer:
        "Sí: instrumentos de su tamaño, sillas y bancas a su altura y sesiones más cortas. Como crecen rápido, hay que revisar con frecuencia el tamaño del instrumento y los ajustes.",
    },
  ],
  relatedCourseIds: ["piano", "violin", "guitarra-acustica"],
  relatedPostSlugs: [
    "cuantas-horas-practicar-al-dia",
    "posicion-correcta-de-las-manos-en-el-piano",
    "como-proteger-tu-audicion-si-eres-musico",
  ],
  cta: "clases",
};
