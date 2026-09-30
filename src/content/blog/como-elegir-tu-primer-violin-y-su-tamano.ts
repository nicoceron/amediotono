import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-elegir-tu-primer-violin-y-su-tamano",
  title: "¿Qué tamaño de violín necesitas? Cómo elegir el primero",
  description:
    "Tabla de tamaños de violín de 1/16 a 4/4, cómo medir el brazo, qué trae un violín de estudio y cómo revisar puente, clavijas, arco y colofonia.",
  excerpt:
    "El tamaño del violín se elige midiendo el brazo, no por la edad. Tabla de tamaños, cómo confirmarlo con el violín en la mano y qué revisar antes de pagar.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "qué tamaño de violín necesito",
    "tamaños de violín por edad",
    "cómo medir el tamaño del violín",
    "violín 3/4 para qué edad",
    "qué violín comprar para principiantes",
    "violín de estudio",
  ],
  intro: [
    "El tamaño del violín se elige midiendo el brazo extendido, no por la edad: con el brazo izquierdo estirado hacia un lado, mide desde el cuello hasta el centro de la palma y busca esa medida en la tabla. Si quedas entre dos tamaños, elige el más pequeño. El violín grande «para que le dure» es el error más común y el que más frena a los niños.",
    "Después del tamaño viene el ajuste: puente, clavijas, cuerdas y un arco decente pesan más en un principiante que la madera o la marca. Aquí tienes qué revisar.",
  ],
  keyTakeaways: [
    "Mide del cuello al centro de la palma con el brazo extendido; entre dos tamaños, elige el menor.",
    "Los adultos y los niños desde unos 11 o 12 años suelen usar 4/4.",
    "Un violín de estudio sin ajuste de luthier puede ser casi imposible de tocar, incluso para un profe.",
    "El arco importa tanto como el violín: debe estar recto, con curva, cerdas parejas y un tornillo que funcione.",
    "Un arco nuevo no suena sin colofonia: aplicarla es el primer paso antes de tocar.",
  ],
  sections: [
    {
      id: "tabla-de-tamanos",
      heading: "Tabla de tamaños del violín, de 1/16 a 4/4",
      blocks: [
        {
          type: "table",
          caption: "Medida del cuello al centro de la palma, con el brazo extendido. Es orientativa.",
          head: ["Tamaño", "Medida del brazo", "Edad aproximada", "Largo del cuerpo"],
          rows: [
            ["1/16", "Menos de 42 cm", "3 a 4 años", "Unos 23 cm"],
            ["1/10", "42 a 44 cm", "4 a 5 años", "Unos 24 cm"],
            ["1/8", "44 a 47 cm", "5 a 6 años", "Unos 26 cm"],
            ["1/4", "47 a 51 cm", "6 a 7 años", "Unos 28 cm"],
            ["1/2", "51 a 56 cm", "7 a 9 años", "Unos 31 cm"],
            ["3/4", "56 a 58,5 cm", "9 a 11 años", "Unos 33 cm"],
            ["4/4", "58,5 cm o más", "Desde 11 o 12 años y adultos", "Unos 35,5 cm"],
          ],
        },
        {
          type: "p",
          text: "Existe también el 7/8, pensado para adolescentes o adultos con brazos cortos o manos pequeñas. Si en realidad te interesa la viola, el sistema de medidas es otro; lo explicamos en [violín o viola](/blog/violin-o-viola-diferencias).",
        },
      ],
    },
    {
      id: "como-medir",
      heading: "Cómo medir, y cómo confirmarlo con el violín en la mano",
      blocks: [
        {
          type: "ol",
          items: [
            "Pide al estudiante que extienda el brazo izquierdo hacia el lado, a la altura del hombro, con la palma hacia arriba.",
            "Con un metro de costura, mide desde el lado del cuello, donde se apoyará el violín, hasta el centro de la palma.",
            "Busca la medida en la tabla. Si queda en el límite, elige el tamaño menor.",
          ],
        },
        {
          type: "p",
          text: "La confirmación definitiva es con el instrumento. Con el violín en posición de tocar, apoyado en el hombro y sostenido con la mandíbula, el estudiante estira el brazo izquierdo por debajo. La voluta, el caracol del final, debe quedar en la palma, con los dedos envolviéndola y el codo ligeramente doblado. Si solo la alcanza con la punta de los dedos, el violín es grande.",
        },
        { type: "h3", text: "¿Cuándo cambiar de tamaño?" },
        {
          type: "p",
          text: "Cuando el codo queda muy doblado y la mano se siente apretada en la primera posición, cuando los dedos se chocan entre sí o cuando el profe nota que la postura se encoge. En niños que crecen rápido, revisa la medida más o menos cada seis meses. Por eso muchas familias compran usado, alquilan o intercambian los tamaños pequeños.",
        },
      ],
    },
    {
      id: "violin-de-estudio",
      heading: "Qué es un violín de estudio y qué debe traer",
      blocks: [
        {
          type: "p",
          text: "Un violín de estudio es un instrumento hecho en serie para estudiantes, que suele venderse como kit: violín, arco, estuche y colofonia. Entre dos kits que se ven iguales, la diferencia está en el ajuste y en el material de algunas piezas clave.",
        },
        {
          type: "table",
          head: ["Parte", "Lo que buscas", "Señal de alerta"],
          rows: [
            ["Tapa y fondo", "Madera tallada: abeto en la tapa, arce en el fondo", "Madera prensada o laminada; uniones mal pegadas"],
            ["Diapasón", "Ébano u otra madera dura, liso y sin pintura", "Diapasón pintado de negro que se descascara"],
            ["Clavijas", "Giran suave y se quedan en su lugar", "Patinan, se atascan o tienen juego"],
            ["Microafinadores", "En las cuatro cuerdas, o un cordal con afinadores integrados", "Tornillos que rozan la tapa al bajarlos"],
            ["Cuerdas", "Nuevas y de sonido parejo", "Oxidadas o de sonido metálico y áspero"],
            ["Estuche", "Rígido, con soportes para el arco y cierres firmes", "Estuche blando que no protege el puente"],
          ],
        },
        {
          type: "p",
          text: "Pregunta siempre si el violín viene ajustado por un luthier. Muchos llegan de fábrica con el puente sin tallar, el alma mal ubicada o las cuerdas muy altas, y así sonar bien es casi imposible.",
        },
        { type: "h3", text: "Lo que casi nunca viene en el kit" },
        {
          type: "ul",
          items: [
            "Una hombrera (almohadilla) del tamaño del violín, que se prueba en el hombro del estudiante.",
            "Un afinador; también puedes usar nuestro [afinador de violín](/herramientas/afinador/violin).",
            "Un atril y un paño suave para limpiar la colofonia después de tocar.",
          ],
        },
      ],
    },
    {
      id: "arco-y-colofonia",
      heading: "El arco y la colofonia",
      blocks: [
        {
          type: "p",
          text: "Un arco malo hace sonar mal un buen violín. Antes de aceptar el que viene en el kit, revisa:",
        },
        {
          type: "ul",
          items: [
            "**Que esté recto:** míralo desde la punta hacia el talón. La vara no debe torcerse hacia los lados.",
            "**Que tenga curva:** con las cerdas flojas, la vara se curva hacia las cerdas. Si está plana o se dobla hacia afuera, perdió su curvatura.",
            "**Cerdas parejas:** una cinta uniforme, sin huecos ni muchas cerdas rotas.",
            "**Tornillo y nuez:** el tornillo debe tensar y aflojar sin trabarse, y la nuez, la pieza donde apoya el pulgar, no debe tener juego.",
            "**Material:** para niños, la fibra de carbono resiste golpes y caídas; la madera de Brasil es la opción clásica de estudio. Los arcos de fibra de vidrio muy flexibles son difíciles de controlar.",
          ],
        },
        { type: "h3", text: "La colofonia" },
        {
          type: "p",
          text: "Las cerdas nuevas no suenan: necesitan colofonia (resina) para agarrar la cuerda. Si el arco es nuevo, pásala varias veces a lo largo de toda la cinta antes de tocar. Una pastilla nueva a veces está tan lisa que no suelta polvo; tu profe te puede mostrar cómo abrirla con un rayado leve. Después bastan unas pasadas antes de cada práctica.",
        },
        {
          type: "p",
          text: "Para empezar sirve cualquier colofonia de violín de calidad razonable. No uses la de contrabajo, que es demasiado blanda. Y para tomar el arco sin tensión, revisa [cómo sostener el arco del violín](/blog/como-sostener-el-arco-del-violin).",
        },
      ],
    },
    {
      id: "que-revisar-antes-de-pagar",
      heading: "Qué revisar antes de pagar: puente, clavijas y más",
      blocks: [
        {
          type: "ol",
          items: [
            "**Puente:** derecho, perpendicular a la tapa y alineado con las muescas de las efes. Mirado de lado, no debe inclinarse hacia el diapasón ni estar combado, y sus patas deben apoyar completas.",
            "**Altura de cuerdas:** al final del diapasón, las cuerdas no deben quedar tan altas que cueste presionarlas ni tan bajas que rocen.",
            "**Clavijas:** gira cada una un poco. Deben moverse con firmeza y quedarse quietas al soltarlas.",
            "**Alma:** es un palito dentro del violín, cerca del pie del puente del lado de la cuerda Mi. Si al mover el violín con suavidad algo suena suelto por dentro, puede haberse caído: no lo toques y llévalo a un luthier.",
            "**Grietas y costuras:** revisa la tapa alrededor de las efes y en los bordes. Da golpecitos suaves con los nudillos por el contorno: un zumbido puede indicar una costura abierta.",
            "**Cordal y microafinadores:** que no toquen la tapa y que los tornillos giren.",
            "**Sonido:** afínalo y toca las cuatro cuerdas al aire con el arco. Si algo vibra o zumba, encuentra el origen antes de comprar.",
          ],
        },
        {
          type: "callout",
          title: "Que lo vea tu profe",
          text: "Si el violín es usado o lo compras por internet, pídele a tu profe que lo revise o mándale fotos del puente de perfil y un video tocando las cuerdas al aire. Si tomas [clases de violín](/clases/violin) a domicilio, el profe puede revisarlo en tu propia casa.",
        },
      ],
    },
    {
      id: "nuevo-usado-o-alquilado",
      heading: "Nuevo, usado o alquilado",
      blocks: [
        {
          type: "table",
          head: ["Opción", "Conviene cuando", "Cuidado con"],
          rows: [
            ["Nuevo con ajuste de luthier", "Empiezas un tamaño que usarás varios años, como el 4/4", "Kits sin ajuste, que suenan mal de fábrica"],
            ["Usado", "El niño cambiará pronto de tamaño", "Grietas, puente torcido o alma caída: hazlo revisar"],
            ["Alquiler o préstamo", "Están probando si el instrumento le gusta, o el niño crece rápido", "Condiciones en caso de daño y estado del arco"],
          ],
        },
        {
          type: "p",
          text: "Sea cual sea la opción, el violín vive mejor en su estuche, lejos del sol y de las ventanas. Para el cuidado diario, sigue la guía de [cómo limpiar y cuidar un violín](/blog/como-limpiar-y-cuidar-un-violin).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué tamaño de violín usa un adulto?",
      answer:
        "La gran mayoría de adultos usa 4/4. Algunas personas con brazos cortos o manos pequeñas están más cómodas con un 7/8. Si dudas, prueba ambos en posición de tocar con ayuda de tu profe.",
    },
    {
      question: "¿Puedo comprar un violín más grande para que mi hijo crezca con él?",
      answer:
        "No es buena idea. Un violín grande obliga a estirar el brazo y los dedos, genera tensión y complica la afinación, que ya es un reto en un instrumento sin trastes. Es mejor cambiar de tamaño cuando toque. Más consejos en [violín para niños: guía para padres](/blog/violin-para-ninos-guia-para-padres).",
    },
    {
      question: "¿Por qué mi violín nuevo no suena?",
      answer:
        "Casi siempre es falta de colofonia en el arco o cerdas demasiado flojas. Tensa el arco hasta que, en el centro, quede entre la vara y las cerdas un espacio parecido al grosor de un lápiz, y pasa colofonia. Si aun así no suena, revisa que el puente esté en su sitio.",
    },
    {
      question: "¿Violín con microafinadores en todas las cuerdas o solo en la Mi?",
      answer:
        "Para un principiante, los microafinadores en las cuatro cuerdas facilitan mucho la afinación diaria. Con el tiempo, muchos violinistas dejan solo el de la cuerda Mi y afinan las demás con las clavijas.",
    },
  ],
  relatedCourseIds: ["violin"],
  relatedPostSlugs: [
    "violin-para-ninos-guia-para-padres",
    "como-limpiar-y-cuidar-un-violin",
    "como-afinar-el-violin",
  ],
  cta: "clases",
};
