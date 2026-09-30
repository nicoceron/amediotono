import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cambiar-las-cuerdas-de-la-guitarra",
  title: "¿Cómo cambiar las cuerdas de la guitarra? Paso a paso",
  description:
    "Paso a paso para cambiar cuerdas de nylon y de metal, cada cuánto hacerlo, qué calibre elegir y cómo estirarlas y afinarlas para que no se desafinen.",
  excerpt:
    "Cuerdas de nylon y de metal, acústica, clásica y eléctrica: cuándo cambiarlas, qué calibre usar y cómo ponerlas para que afinen y se queden afinadas.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cambiar las cuerdas de la guitarra",
    "cómo poner cuerdas de nylon",
    "cada cuánto cambiar las cuerdas de la guitarra",
    "qué calibre de cuerdas usar",
    "cuerdas nuevas se desafinan",
    "cómo cambiar cuerdas guitarra eléctrica",
  ],
  intro: [
    "Cambiar cuerdas es sencillo: aflojas y retiras la vieja, sujetas la nueva en el puente, la pasas por la clavija dejando holgura para unas pocas vueltas, afinas, estiras con suavidad y vuelves a afinar. Lo que cambia es el puente: las cuerdas de nylon se anudan, las acústicas de metal se sujetan con pines y las eléctricas pasan por el puente o por detrás del cuerpo.",
    "Como referencia, si tocas unas horas por semana, cámbialas cada tres o cuatro meses; si tocas a diario o te sudan mucho las manos, antes. Tu oído te avisa: las cuerdas viejas suenan opacas y no afinan bien.",
  ],
  keyTakeaways: [
    "Cambia las cuerdas cuando suenen apagadas, se vean oscuras o ásperas, o dejen de afinar en el traste 12.",
    "Nunca pongas cuerdas de metal en una guitarra clásica de nylon: su puente y su mástil no soportan esa tensión.",
    "Afloja siempre la cuerda antes de cortarla: una cuerda de metal tensa salta con fuerza.",
    "Deja holgura para dos o tres vueltas en las cuerdas gruesas y algunas más en las delgadas, con las vueltas bajando por el poste.",
    "Afina subiendo hacia la nota y estira cada cuerda con suavidad; el nylon tarda días en estabilizarse, el metal unas horas.",
  ],
  sections: [
    {
      id: "cada-cuanto-cambiarlas",
      heading: "Cada cuánto cambiar las cuerdas",
      blocks: [
        {
          type: "p",
          text: "No hay una fecha fija: depende de cuánto tocas, de tu sudor y del clima. En la costa o en tierra caliente, la humedad y el salitre oxidan las cuerdas de metal más rápido que en Bogotá.",
        },
        {
          type: "table",
          caption: "Frecuencia orientativa para cambiar cuerdas",
          head: ["Cómo tocas", "Metal (acústica y eléctrica)", "Nylon (clásica)"],
          rows: [
            ["Pocas horas a la semana", "Cada 3 o 4 meses", "Cada 4 a 6 meses"],
            ["Todos los días", "Cada 1 o 2 meses", "Cada 2 o 3 meses"],
            ["Antes de una presentación o grabación", "Unos días antes", "Una o dos semanas antes, para que se estabilicen"],
          ],
        },
        { type: "h3", text: "Señales de que ya toca" },
        {
          type: "ul",
          items: [
            "Suenan opacas, sin brillo ni sostenido, sobre todo las graves.",
            "No se quedan afinadas o, afinadas al aire, suenan desafinadas en el traste 12.",
            "Se ven oscuras, con puntos de óxido, o se sienten ásperas al deslizar los dedos.",
            "En nylon, el entorchado de las bordonas se ve gastado o abierto en los trastes que más usas.",
          ],
        },
      ],
    },
    {
      id: "calibres-y-tipos",
      heading: "Calibres y tipos de cuerdas",
      blocks: [
        {
          type: "p",
          text: "En metal, el calibre se nombra por el grosor de la primera y la sexta cuerda, en milésimas de pulgada. Las más delgadas son más fáciles de pisar; las más gruesas dan más volumen y cuerpo, pero exigen más a los dedos.",
        },
        {
          type: "table",
          caption: "Calibres comunes y recomendación para empezar",
          head: ["Guitarra", "Opciones comunes", "Para empezar"],
          rows: [
            ["Eléctrica", "Juegos 9-42, 10-46 u 11-49", "9 o 10"],
            ["Acústica de metal", "Juegos 10-47 (extra light), 11-52 (custom light) o 12-53 (light)", "10 u 11"],
            ["Clásica de nylon", "Se venden por tensión: baja, normal o alta", "Normal, o baja si cuesta pisar"],
          ],
        },
        {
          type: "p",
          text: "Si saltas varios calibres, cambia la tensión sobre el mástil y puede hacer falta ajustar el alma, la altura de las cuerdas o las ranuras de la cejuela. Consúltalo antes con tu profe o tu luthier.",
        },
        {
          type: "callout",
          title: "Nunca metal en una guitarra de nylon",
          text: "Una guitarra clásica no tiene alma ajustable ni un puente pensado para la tensión de las cuerdas metálicas. Ponérselas puede despegar el puente, levantar la tapa o curvar el mástil. Lo contrario tampoco funciona: el nylon no suena bien en una acústica de metal y no se sujeta en sus pines.",
        },
      ],
    },
    {
      id: "antes-de-empezar",
      heading: "Qué necesitas y cómo prepararte",
      blocks: [
        {
          type: "ul",
          items: [
            "El juego nuevo, del tipo correcto para tu guitarra.",
            "Un alicate cortafrío o un cortaúñas grande para el sobrante.",
            "Una manivela para clavijas: opcional, pero ahorra tiempo, y muchas traen saca-pines para acústicas.",
            "Un afinador; puedes usar el [afinador de guitarra online](/herramientas/afinador/guitarra).",
            "Un paño, y lo necesario si vas a limpiar el diapasón.",
          ],
        },
        { type: "h3", text: "¿Todas a la vez o una por una?" },
        {
          type: "p",
          text: "Una por una mantiene la tensión sobre el mástil y te deja ver cómo iba la anterior; es lo más cómodo si estás empezando y es obligatorio en eléctricas con puente flotante. Quitar todas te permite limpiar a fondo el diapasón, y en una guitarra de puente fijo no pasa nada si no la dejas días sin cuerdas. Te contamos cómo limpiarlo en [cómo limpiar y cuidar una guitarra acústica](/blog/como-limpiar-y-cuidar-una-guitarra-acustica).",
        },
        {
          type: "p",
          text: "Una regla de seguridad: afloja siempre la cuerda antes de cortarla. Una cuerda de metal cortada con tensión salta con fuerza y puede lastimarte la cara o los ojos.",
        },
      ],
    },
    {
      id: "paso-a-paso-cuerdas-de-metal",
      heading: "Paso a paso: acústica y eléctrica (metal)",
      blocks: [
        {
          type: "ol",
          items: [
            "Afloja la cuerda con la clavija hasta que quede suelta y desenróllala del poste.",
            "Retírala del puente. En acústicas con pines, sácalos con el saca-pines y no con alicate, para no rayar el puente. En eléctricas, la cuerda sale por el puente o por la parte de atrás del cuerpo.",
            "Pasa la cuerda nueva. En acústica, mete la bolita (el extremo con anillo) en el agujero, pon el pin con su ranura mirando hacia la cuerda y, mientras lo empujas, tira un poco de la cuerda hacia arriba para que la bolita se asiente contra la madera interna y no quede montada en la punta del pin.",
            "Lleva la cuerda a su clavija, pásala por el agujero del poste y tensa hasta que quede recta. Luego devuelve unos 5 a 7 centímetros de holgura para las cuerdas gruesas, algo más para las delgadas.",
            "Dobla la punta y gira la clavija para que las vueltas bajen en espiral por el poste. La cuerda debe llegar en línea recta desde la cejuela, sin rozar otros postes; en clavijeros de tres y tres, pasa por el lado interior, entre las dos filas de clavijas.",
            "Afina cerca de la nota, revisa que la cuerda esté en su ranura de la cejuela y del puente, y corta el sobrante dejando medio centímetro.",
          ],
        },
        {
          type: "p",
          text: "Dos o tres vueltas en las cuerdas entorchadas y cuatro o cinco en las primas son suficientes. Con muy pocas la cuerda resbala; con demasiadas se montan unas sobre otras y la afinación se mueve.",
        },
        { type: "h3", text: "Si tu eléctrica tiene puente flotante" },
        {
          type: "p",
          text: "Cambia una cuerda a la vez y reafina todas varias veces, porque al tensar una el puente se inclina y baja las demás. Si es un sistema tipo Floyd Rose, con tornillos que traban las cuerdas en la cejuela, pide que la primera vez tu profe o un luthier te muestre el proceso.",
        },
      ],
    },
    {
      id: "paso-a-paso-cuerdas-de-nylon",
      heading: "Paso a paso: guitarra clásica (nylon)",
      blocks: [
        {
          type: "ol",
          items: [
            "Afloja y retira la cuerda vieja. Deshaz el nudo del puente en lugar de cortarlo sobre la madera.",
            "Pasa la cuerda nueva por el agujero del puente, desde el lado de la boca hacia atrás, dejando unos 6 a 8 centímetros de sobra.",
            "Devuelve ese extremo por encima del puente, pásalo por debajo de la propia cuerda formando un lazo y mételo una o dos veces más por debajo de sí mismo, pegado al borde trasero del puente. En las primas (1.ª, 2.ª y 3.ª), que son lisas y resbalan, da tres pasadas o haz un nudo pequeño en la punta.",
            "Tira de la cuerda larga para que el nudo se ajuste contra el borde del puente, sin que la punta toque la tapa.",
            "En el clavijero, pasa la cuerda por el agujero del rodillo, dale una vuelta alrededor de sí misma para trabarla y enrolla de modo que la cuerda salga por encima del rodillo y las vueltas pisen el extremo trabado.",
            "Afina, verifica que esté en su ranura y corta los sobrantes dejando un centímetro.",
          ],
        },
        {
          type: "p",
          text: "La tapa de la clásica es delgada: evita que el extremo del nudo golpee la madera al tensar y nunca dejes que una cuerda suelta azote la tapa.",
        },
      ],
    },
    {
      id: "estirar-y-afinar",
      heading: "Cómo estirar y afinar cuerdas nuevas",
      blocks: [
        {
          type: "p",
          text: "Las cuerdas nuevas se estiran durante las primeras horas y por eso se desafinan una y otra vez. Puedes acelerar el proceso:",
        },
        {
          type: "ol",
          items: [
            "Afina todas a su nota, siempre subiendo hacia ella: si te pasas, baja un poco y vuelve a subir. Así el engranaje de la clavija queda firme.",
            "Toma cada cuerda cerca de la mitad con el pulgar y el índice y sepárala suavemente del diapasón unos centímetros, recorriendo su largo. Sin tirones y sin halar junto al puente.",
            "Reafina: verás que bajó.",
            "Repite dos o tres veces, hasta que casi no se mueva.",
          ],
        },
        {
          type: "p",
          text: "Con metal, la afinación se estabiliza en una o dos sesiones. Con nylon, cuenta con varios días de reafinar a menudo; las primas son las que más se estiran. Si la afinación estándar todavía te cuesta, te la explicamos cuerda por cuerda en [cómo afinar la guitarra](/blog/como-afinar-la-guitarra).",
        },
        { type: "h3", text: "Errores comunes" },
        {
          type: "ul",
          items: [
            "Calcular mal la holgura: con muy poca la cuerda resbala; con mucha, el poste se llena de vueltas.",
            "Enrollar al revés: la cuerda queda cruzada y esa clavija gira al contrario de las demás.",
            "No revisar que la cuerda entró en su ranura de la cejuela.",
            "Halar con fuerza una cuerda nueva para “estirarla rápido”: se rompe o mueve el puente.",
          ],
        },
        {
          type: "p",
          text: "La primera vez, tu profe de [guitarra acústica](/clases/guitarra-acustica) o de [guitarra eléctrica](/clases/guitarra-electrica) puede acompañarte en clase; después de dos o tres cambios, lo harás en un cuarto de hora.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Por qué se desafinan tanto las cuerdas nuevas?",
      answer:
        "Porque se estiran durante las primeras horas y porque las vueltas en la clavija y el nudo, en el caso del nylon, terminan de asentarse. Estirarlas con suavidad y reafinar varias veces acorta mucho ese periodo.",
    },
    {
      question: "¿Puedo cambiar solo la cuerda que se rompió?",
      answer:
        "Sí, sobre todo si las demás son recientes. Si el juego ya tiene meses, la cuerda nueva sonará mucho más brillante que el resto; en ese caso conviene cambiar todas.",
    },
    {
      question: "¿Qué cuerdas son mejores para principiantes?",
      answer:
        "En eléctrica, calibres 9 o 10; en acústica de metal, 10 u 11; en clásica, tensión normal o baja. Son más fáciles de pisar mientras se forman los callos. Consulta con tu profe antes de cambiar mucho de calibre.",
    },
    {
      question: "¿Por qué se me rompe siempre la misma cuerda?",
      answer:
        "Si se rompe siempre en el mismo punto, suele haber un borde filoso en la silleta del puente, en la cejuela o en el agujero del poste. También pasa al afinar muy por encima de la nota. Si se repite, pide al luthier que revise ese punto.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica", "guitarra-electrica"],
  relatedPostSlugs: [
    "como-afinar-la-guitarra",
    "como-limpiar-y-cuidar-una-guitarra-acustica",
    "como-limpiar-y-cuidar-una-guitarra-electrica",
  ],
  cta: "clases",
};
