import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cuidar-un-contrabajo",
  title: "¿Cómo cuidar un contrabajo? Transporte, puente y arco",
  description:
    "Cómo cargar y transportar un contrabajo, ajustar el puente según el clima, cuidar las cuerdas y el arco francés o alemán, y elegir una buena funda.",
  excerpt:
    "El contrabajo se daña más en los traslados que tocando. Cómo moverlo, ajustar el puente cuando cambia el clima y cuidar cuerdas, arco y resina.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cuidar un contrabajo",
    "cómo transportar un contrabajo",
    "funda para contrabajo",
    "arco francés o alemán contrabajo",
    "ajuste del puente del contrabajo",
    "resina para contrabajo",
  ],
  intro: [
    "El contrabajo se daña más por los traslados que por el uso. Cuídalo en tres frentes: muévelo siempre sujeto por el mástil cerca del cuerpo y mirando dónde va la voluta, vigila el puente cuando cambia el clima (y ajusta su altura si tiene ruedas de ajuste) y trata el arco y la resina con el mismo cuidado que en cualquier instrumento de arco.",
    "Por su tamaño, es el instrumento que más sufre en puertas, escaleras, ascensores y carros. Esto es lo que un contrabajista con experiencia le enseña a su alumno antes que la primera nota.",
  ],
  keyTakeaways: [
    "Cárgalo por el mástil, cerca del cuerpo, nunca por la voluta, el cordal o las cuerdas; en cada puerta, cuida la voluta y el puente.",
    "Si el puente tiene ruedas de ajuste, puedes subir o bajar la altura de las cuerdas según la temporada, girando ambas por igual.",
    "Las cuerdas de contrabajo duran mucho, pero se cambian de una en una para no mover el puente ni el alma.",
    "Arco francés o alemán se cuidan igual: aflojar las cerdas, no tocarlas y proteger la punta.",
    "La resina de contrabajo es muy blanda: se deforma con el calor, así que va tapada, en un lugar fresco y nunca en el carro.",
  ],
  sections: [
    {
      id: "cargar-y-mover",
      heading: "Cómo cargar y mover un contrabajo",
      blocks: [
        {
          type: "ol",
          items: [
            "Sujétalo por el mástil, cerca de donde se une con el cuerpo, y apóyalo contra tu costado o tu cadera. Nunca lo levantes por la voluta, el cordal o las cuerdas.",
            "Llévalo vertical, con la pica recogida, o con una rueda de transporte si tienes una (hay modelos que se colocan en lugar de la pica).",
            "Antes de cruzar una puerta, mira hacia arriba: la voluta es lo primero que se golpea contra marcos y techos bajos. Pasa de lado y cuida que el puente no roce el marco.",
            "En escaleras, ve despacio y sin cargar otras cosas en la misma mano.",
            "En un ascensor, entra de último, con el contrabajo contra una pared y tu cuerpo protegiendo el puente.",
          ],
        },
        {
          type: "p",
          text: "Si lo dejas en el piso, acuéstalo de lado sobre el aro, lejos del paso, o usa un soporte de contrabajo. De pie y recostado contra la pared es la forma más común de que termine en el suelo.",
        },
      ],
    },
    {
      id: "carro-bus-y-avion",
      heading: "En carro, bus y avión",
      blocks: [
        {
          type: "ul",
          items: [
            "No en todos los carros cabe: normalmente hay que abatir el asiento del copiloto o los de atrás y acostarlo en diagonal, con el puente libre de cualquier presión. Pruébalo antes del día del concierto, no ese día.",
            "Nunca en el baúl con cosas encima, ni dentro de un carro estacionado al sol.",
            "En taxi o aplicaciones de transporte, pide un vehículo grande y avisa que llevas un instrumento que mide cerca de 1,80 metros.",
            "En bus o TransMilenio es posible, pero difícil en hora pico. Si lo vas a hacer seguido, invierte en una funda muy acolchada.",
            "Para avión se necesita un estuche de vuelo rígido, pesado y costoso. Por eso muchos contrabajistas prefieren alquilar o pedir prestado un instrumento en la ciudad de destino.",
          ],
        },
      ],
    },
    {
      id: "puente-y-ajuste-estacional",
      heading: "El puente y el ajuste de altura según el clima",
      blocks: [
        {
          type: "p",
          text: "El contrabajo tiene tapas enormes que se mueven con la humedad, y eso se nota en la altura de las cuerdas: con humedad, la tapa se abomba y las cuerdas suben; con sequedad, bajan y pueden empezar a trastear contra el diapasón.",
        },
        {
          type: "p",
          text: "Por eso muchos contrabajos tienen ruedas de ajuste en las patas del puente: dos discos roscados que permiten subirlo o bajarlo. Si el tuyo las tiene:",
        },
        {
          type: "ol",
          items: [
            "Baja un poco la tensión de las cuerdas, sin aflojarlas del todo.",
            "Gira las dos ruedas la misma cantidad, poco a poco, para que el puente suba o baje parejo.",
            "Comprueba que el puente siga derecho y apoyado en toda su base.",
            "Reafina y prueba. Si algo se siente raro o el puente se inclina, detente y consulta al luthier.",
          ],
        },
        {
          type: "p",
          text: "Si no tiene ruedas, el ajuste lo hace el luthier. En Colombia no hablamos de cuatro estaciones, pero sí de temporadas de lluvia y secas, y de viajes entre climas: si llevas el contrabajo de Bogotá a tierra caliente, es probable que la altura de las cuerdas cambie. Como en el violín y el chelo, el puente también se inclina hacia el diapasón al afinar; revísalo de lado cada semana.",
        },
      ],
    },
    {
      id: "cuerdas-de-contrabajo",
      heading: "Cuerdas: tipos, duración y cambio",
      blocks: [
        {
          type: "table",
          caption: "Tipos de cuerdas de contrabajo y su cuidado",
          head: ["Tipo", "Uso típico", "Cuidado"],
          rows: [
            ["Acero", "Orquesta y arco; también muchos estilos populares", "Secarlas después de tocar: la humedad las oxida"],
            ["Núcleo sintético", "Jazz, pizzicato y uso mixto", "Limpiarlas con paño seco; la grasa de las manos las apaga"],
            ["Tripa", "Música antigua y algunos estilos de jazz", "Muy sensibles a la humedad y la temperatura; se desafinan más"],
          ],
        },
        {
          type: "p",
          text: "Las cuerdas de contrabajo duran mucho más que las de guitarra: según el tipo y el uso, pueden pasar años antes de cambiarlas. Como son costosas, vale la pena cuidarlas: manos limpias, paño seco al terminar y nada de humedad.",
        },
        {
          type: "ul",
          items: [
            "Cambia siempre una cuerda a la vez, para que el puente no se mueva y el alma no se caiga.",
            "Revisa que el extremo de la cuerda nueva quede bien asentado en el cordal antes de tensar.",
            "Las cuerdas nuevas pueden tardar unos días en estabilizarse y en sonar como esperas; mientras tanto, apóyate en el [afinador de contrabajo online](/herramientas/afinador/contrabajo).",
          ],
        },
      ],
    },
    {
      id: "arco-frances-o-aleman",
      heading: "Arco francés o alemán: diferencias y cuidado",
      blocks: [
        {
          type: "table",
          caption: "Arco francés y arco alemán de contrabajo",
          head: ["Aspecto", "Arco francés", "Arco alemán"],
          rows: [
            ["Agarre", "Parecido al del chelo, con la mano por encima de la vara", "La nuez se toma de lado, entre el pulgar y los dedos, como una sierra"],
            ["Nuez (talón)", "Más baja y angosta", "Más alta y ancha"],
            ["Cuidado", "Aflojar cerdas, no tocarlas, proteger la punta", "Exactamente el mismo"],
          ],
        },
        {
          type: "p",
          text: "Ninguno es mejor en sí mismo: ambos se usan en orquestas y en música popular, y la elección suele depender de la escuela de tu profe. Lo importante es no alternar entre uno y otro sin guía mientras aprendes.",
        },
        {
          type: "ul",
          items: [
            "Afloja las cerdas cada vez que guardes el arco.",
            "No las toques: la grasa impide que la resina agarre.",
            "Guárdalo en el bolsillo para arco de la funda o en un estuche propio, nunca suelto en el morral.",
            "Cuida la punta de golpes contra el atril, la silla o el piso.",
          ],
        },
        { type: "h3", text: "La resina de contrabajo" },
        {
          type: "p",
          text: "Es mucho más blanda y pegajosa que la de violín o chelo, porque tiene que agarrar cuerdas muy gruesas. Eso tiene consecuencias prácticas: con el calor se ablanda y se deforma, y en tierra caliente puede volverse casi pastosa si queda al sol o en un carro; en el frío de Bogotá se endurece y le cuesta agarrar al comienzo del ensayo. Guárdala tapada, en su cajita y en un lugar fresco. Pocas pasadas bastan.",
        },
      ],
    },
    {
      id: "funda-y-clima-contrabajo",
      heading: "Funda, estuche y clima",
      blocks: [
        {
          type: "p",
          text: "La mayoría de contrabajistas usa funda acolchada; el estuche rígido de vuelo se reserva para viajes largos o transporte en bodega. Al elegir funda, fíjate en:",
        },
        {
          type: "ul",
          items: [
            "Acolchado grueso, sobre todo en la zona del puente y de la voluta.",
            "Correas tipo morral y manijas en varios puntos para cargarlo y acostarlo.",
            "Cremalleras resistentes y bolsillo para el arco.",
            "Una abertura para la pica o la rueda de transporte.",
          ],
        },
        {
          type: "p",
          text: "La construcción también cuenta: los contrabajos laminados resisten mejor los cambios de humedad y los golpes, por eso son comunes entre estudiantes y en música popular; los tallados son más sensibles y piden más control del clima. Si estás eligiendo uno, lee [cómo elegir un contrabajo para empezar](/blog/como-elegir-un-contrabajo-para-empezar).",
        },
        {
          type: "p",
          text: "Una grieta, una unión abierta o un zumbido nuevo son motivo de visita al luthier. Si estás empezando en el [contrabajo](/clases/contrabajo), tu profe te enseñará a moverlo y dejarlo seguro desde la primera clase; muchos cuidados son los mismos del [violonchelo](/blog/como-cuidar-un-violonchelo).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo se lleva un contrabajo en el carro?",
      answer:
        "Dentro del carro, con asientos abatidos, acostado y con el puente libre de cualquier presión. Prueba antes cómo cabe y nunca lo pongas en el baúl con cosas encima ni lo dejes en el carro al sol.",
    },
    {
      question: "¿Qué es mejor para empezar: arco francés o alemán?",
      answer:
        "Ninguno es mejor en sí mismo. Lo más práctico es usar el que maneja tu profe, porque te enseñará la técnica de ese agarre desde el principio.",
    },
    {
      question: "¿Cada cuánto se cambian las cuerdas del contrabajo?",
      answer:
        "Mucho menos seguido que en otros instrumentos: según el tipo y el uso, pueden durar años. Cámbialas cuando suenen apagadas, no afinen bien o el entorchado se vea gastado.",
    },
    {
      question: "¿Por qué mi contrabajo trastea más en unas épocas que en otras?",
      answer:
        "Porque la tapa se mueve con la humedad y cambia la altura de las cuerdas; en temporadas secas suelen bajar. Si el puente tiene ruedas de ajuste, puedes subirlo un poco; si no, el luthier lo corrige.",
    },
  ],
  relatedCourseIds: ["contrabajo"],
  relatedPostSlugs: [
    "como-elegir-un-contrabajo-para-empezar",
    "como-cuidar-un-violonchelo",
    "por-que-aprender-contrabajo",
  ],
  cta: "clases",
};
