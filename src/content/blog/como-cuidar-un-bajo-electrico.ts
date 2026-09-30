import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-cuidar-un-bajo-electrico",
  title: "¿Cómo cuidar un bajo eléctrico?",
  description:
    "Cómo cuidar un bajo eléctrico: vida útil de las cuerdas, ajuste del alma sin forzarla, electrónica, limpieza del diapasón y uso seguro del amplificador.",
  excerpt:
    "Cuerdas frescas, un mástil bien ajustado y una electrónica sin ruidos hacen que el bajo suene y se toque mejor. Qué puedes hacer en casa y qué es trabajo del luthier.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo cuidar un bajo eléctrico",
    "cada cuánto cambiar las cuerdas del bajo",
    "cómo ajustar el alma del bajo",
    "potenciómetros que suenan en el bajo",
    "cómo limpiar el diapasón del bajo",
    "batería del bajo activo",
  ],
  intro: [
    "Un bajo eléctrico se cuida con cuatro hábitos: limpiar las cuerdas y el mástil después de tocar, cambiar las cuerdas cuando pierden brillo y afinación, revisar la curvatura del mástil cuando cambia el clima y conectar el amplificador siempre con el volumen en cero. Lo único que no conviene hacer a la ligera es girar el alma: forzarla puede salir muy caro.",
    "Aquí separamos lo que puedes hacer en casa de lo que le corresponde a un luthier.",
  ],
  keyTakeaways: [
    "Las cuerdas de entorchado redondo pierden brillo en semanas o meses según el uso; las de entorchado plano duran mucho más.",
    "Antes de cortar una cuerda de bajo, dóblala en el punto de corte para que el entorchado no se suelte.",
    "El alma corrige la curvatura del mástil, no la altura de las cuerdas; se gira máximo un cuarto de vuelta a la vez y nunca a la fuerza.",
    "En un bajo activo, desconecta el cable al terminar: en la mayoría de modelos la batería se gasta mientras está conectado.",
    "Enciende y apaga el amplificador con el volumen en cero, y no subas los graves al máximo para sonar más fuerte.",
  ],
  sections: [
    {
      id: "cuerdas-y-vida-util",
      heading: "Cuerdas: cuánto duran y cuándo cambiarlas",
      blocks: [
        {
          type: "p",
          text: "Las cuerdas nuevas suenan brillantes, con ataque y notas largas. Con el uso, el sudor y la grasa de los dedos se meten entre las espiras del entorchado y el sonido se apaga poco a poco.",
        },
        {
          type: "table",
          caption: "Tipos de cuerdas de bajo",
          head: ["Tipo", "Sonido", "Cuánto dura el brillo"],
          rows: [
            ["Entorchado redondo", "Brillante, con mucho ataque; el más común.", "De semanas a pocos meses, según cuánto toques y cuánto sudes."],
            ["Entorchado plano", "Redondo y oscuro, sin ruido de dedos; clásico en soul y jazz.", "Mucho más; hay bajistas que las usan durante años."],
            ["Semiplano", "Punto medio entre los dos anteriores.", "Intermedio."],
          ],
        },
        {
          type: "ul",
          items: [
            "Suenan opacas y las notas se apagan rápido.",
            "Afinas al aire, pero en los trastes altos suenan desafinadas.",
            "Se ven oscuras, oxidadas o con mugre por debajo.",
            "Se sienten ásperas al deslizar los dedos.",
          ],
        },
        {
          type: "p",
          text: "Para que duren más, lávate las manos antes de tocar y pasa un paño seco por cada cuerda al terminar, por encima y por debajo. El viejo truco de hervirlas devuelve algo de brillo por poco tiempo, pero puede oxidarlas por dentro. Y al comprarlas, revisa la escala de tu bajo (larga, media o corta); lo explicamos en la guía para [elegir tu primer bajo eléctrico](/blog/como-elegir-tu-primer-bajo-electrico).",
        },
      ],
    },
    {
      id: "cambiar-cuerdas-sin-errores",
      heading: "Cambiar las cuerdas sin errores",
      blocks: [
        {
          type: "ol",
          items: [
            "Si estás empezando, cámbialas una por una: el mástil conserva la tensión y no pierdes la referencia de cómo iba cada cuerda. Si las quitas todas para limpiar el diapasón, ponlas de nuevo el mismo día.",
            "Pasa la cuerda nueva por el puente y llévala hasta su clavija sin torcerla.",
            "Estírala hasta la clavija siguiente y dóblala en ángulo recto en ese punto: así quedan dos o tres vueltas en el eje, que es lo ideal.",
            "Corta un poco después del doblez, nunca sin doblar antes: si cortas en recto, el entorchado puede soltarse del núcleo y la cuerda queda inservible.",
            "Mete la punta en el agujero del eje y enrolla hacia abajo, de modo que cada vuelta quede debajo de la anterior.",
            "Afina, estira suavemente cada cuerda a lo largo del mástil y vuelve a afinar varias veces. El [afinador para bajo](/herramientas/afinador/bajo) te ayuda a comprobar cada una.",
          ],
        },
        {
          type: "p",
          text: "El hilo de color del extremo de la cuerda no debe quedar apoyado sobre la cejuela; si pasa, esas cuerdas son de una escala más larga que la de tu bajo. Y si cambias a un calibre distinto, la tensión cambia y el mástil probablemente necesitará ajuste.",
        },
      ],
    },
    {
      id: "el-alma-sin-forzar",
      heading: "El alma: para qué sirve y cómo no dañarla",
      blocks: [
        {
          type: "p",
          text: "El alma (truss rod) es una varilla metálica dentro del mástil que contrarresta la tensión de las cuerdas. Sirve para controlar la curvatura del mástil, no para subir o bajar las cuerdas: eso se hace en las selletas del puente.",
        },
        { type: "h3", text: "Cómo revisar la curvatura" },
        {
          type: "ol",
          items: [
            "Afina el bajo como siempre.",
            "Pon una cejilla en el primer traste de la cuerda más grave, o pide a alguien que la presione, y presiona tú la misma cuerda donde el mástil se une al cuerpo.",
            "Mira el espacio entre la cuerda y los trastes a mitad de camino, entre el séptimo y el noveno traste. Debe ser pequeño, más o menos el grosor de una tarjeta de presentación.",
            "Si la cuerda toca los trastes en el medio, el mástil está muy recto o arqueado hacia atrás; si el espacio es grande, tiene demasiada curvatura.",
          ],
        },
        { type: "h3", text: "Si decides ajustarla" },
        {
          type: "ul",
          items: [
            "Usa la llave exacta de tu bajo: una que no ajusta bien barre la tuerca.",
            "Gira como máximo un cuarto de vuelta, afina y deja reposar el mástil unas horas antes de medir de nuevo.",
            "Mirando la tuerca de frente, en la mayoría de bajos el sentido de las manecillas del reloj endereza el mástil y el contrario le da curvatura. Confírmalo en el manual de tu modelo.",
            "Si la tuerca no gira con una fuerza moderada, detente. Forzar un alma trabada puede romperla, y esa es de las reparaciones más costosas.",
          ],
        },
        {
          type: "p",
          text: "Si nunca lo has hecho, pídele a tu profe o a un luthier que te lo muestre la primera vez. En Bogotá, el paso de temporada seca a temporada de lluvias, o un viaje a tierra caliente, suele pedir un pequeño ajuste; lo explicamos en [cómo guardar instrumentos según el clima en Colombia](/blog/como-guardar-instrumentos-humedad-y-clima-en-colombia).",
        },
      ],
    },
    {
      id: "electronica-y-cables",
      heading: "Electrónica, batería y cables",
      blocks: [
        {
          type: "p",
          text: "Un bajo pasivo no usa batería. Uno activo tiene un preamplificador que funciona con una batería de 9 voltios, y en la mayoría de modelos el conector de entrada hace de interruptor: mientras el cable esté conectado, la batería se gasta. Cuando se agota, el bajo suena débil, distorsionado o con cortes. Desconecta siempre el cable al terminar y lleva una batería de repuesto en el estuche.",
        },
        {
          type: "ul",
          items: [
            "Si un control de volumen o tono raspa al girarlo, gíralo de extremo a extremo varias veces: a veces es solo polvo.",
            "Si sigue raspando, el arreglo es un limpiador de contactos para electrónica o cambiar el potenciómetro. Nunca uses lubricantes multiusos.",
            "Si el conector de entrada está flojo, aprieta su tuerca sosteniéndolo por dentro para que los cables no se tuerzan; si no te sientes seguro, que lo haga el luthier.",
            "Un zumbido que desaparece cuando tocas las cuerdas suele ser normal en bajos de pastillas sencillas. Si es fuerte o intermitente, prueba primero con otro cable.",
          ],
        },
        {
          type: "p",
          text: "Enrolla los cables en círculos amplios, sin envolverlos en el codo, y desconéctalos halando del conector, no del cable.",
        },
      ],
    },
    {
      id: "limpieza-cuerpo-y-diapason",
      heading: "Limpieza del cuerpo y del diapasón",
      blocks: [
        {
          type: "ul",
          items: [
            "Acabado brillante: paño de microfibra seco después de tocar y, de vez en cuando, un limpiador para instrumentos en poca cantidad.",
            "Acabado mate o satinado: solo paño seco. Si lo pules, quedan brillos disparejos.",
            "Diapasón de madera oscura sin barniz (palisandro, ébano o similares): límpialo al cambiar cuerdas con un paño apenas húmedo y, unas pocas veces al año, aplica una capa muy delgada de acondicionador para diapasón y retira el exceso.",
            "Diapasón de maple barnizado (claro y brillante): paño seco o ligeramente húmedo; no necesita aceite.",
            "Nunca uses lana de acero cerca de las pastillas: las partículas de metal se pegan a los imanes.",
          ],
        },
        {
          type: "p",
          text: "Evita los limpiadores de muebles con silicona, el alcohol y el limpiavidrios: el alcohol daña algunos acabados y la silicona deja una capa que complica cualquier reparación futura. Muchos de estos cuidados se comparten con la guitarra; lo ampliamos en [cómo limpiar y cuidar una guitarra eléctrica](/blog/como-limpiar-y-cuidar-una-guitarra-electrica).",
        },
      ],
    },
    {
      id: "el-amplificador",
      heading: "El amplificador también se cuida",
      blocks: [
        {
          type: "ol",
          items: [
            "Conecta el cable al bajo y al amplificador con el amplificador apagado o con el volumen en cero.",
            "Enciende y sube el volumen poco a poco.",
            "Al terminar, baja el volumen a cero, apaga y solo entonces desconecta.",
          ],
        },
        {
          type: "ul",
          items: [
            "No subas los graves al máximo para sonar más fuerte. Si el parlante suena rasposo o como si vibrara suelto en las notas graves, baja graves o volumen de inmediato.",
            "Deja espacio detrás del amplificador para que ventile y no pongas bebidas encima.",
            "Conéctalo a un regulador o protector de voltaje, sobre todo si en tu zona hay bajones de luz.",
            "No lo muevas encendido.",
          ],
        },
        {
          type: "p",
          text: "Para practicar en apartamento, usa la salida de audífonos a volumen moderado: tu oído también es parte del equipo.",
        },
      ],
    },
    {
      id: "luthier-y-errores",
      heading: "Cuándo ir al luthier y errores que salen caros",
      blocks: [
        {
          type: "p",
          text: "Una calibración (alma, altura de cuerdas, octavación y altura de pastillas) una o dos veces al año mantiene el bajo cómodo. Llévalo antes si las cuerdas trastean en varias zonas, si los extremos de los trastes sobresalen por el borde del mástil (señal de sequedad), si el alma no gira o si hay ruidos eléctricos que no se van.",
        },
        {
          type: "ul",
          items: [
            "Forzar el alma o girarla más de un cuarto de vuelta de una vez.",
            "Cortar una cuerda sin doblarla antes.",
            "Dejar el cable conectado en un bajo activo.",
            "Recostar el bajo contra la pared o el amplificador: se resbala, cae de cabeza y el clavijero es la zona que más se quiebra.",
            "Dejarlo en el baúl del carro o junto a una ventana con sol.",
          ],
        },
        {
          type: "p",
          text: "En las [clases de bajo eléctrico](/clases/bajo-electrico), tu profe puede revisar contigo el ajuste del instrumento, algo que vale oro en los primeros meses.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto se cambian las cuerdas del bajo?",
      answer:
        "No hay una fecha fija. Con entorchado redondo y práctica frecuente, muchos bajistas las cambian cada pocos meses, y antes si tocan en vivo o sudan mucho. Las planas pueden durar años. Guíate por el sonido y la afinación, no por el calendario.",
    },
    {
      question: "¿Es peligroso ajustar el alma del bajo?",
      answer:
        "No, si usas la llave correcta, giras poco y no fuerzas. Se vuelve peligroso cuando se gira mucho de una vez o cuando la tuerca está trabada y se insiste. Ante la duda, que lo haga un luthier.",
    },
    {
      question: "¿Por qué mi bajo suena distorsionado aunque el amplificador está bajito?",
      answer:
        "En un bajo activo, la causa más común es la batería agotada. También puede ser el cable, un potenciómetro sucio o el parlante. Prueba con otra batería y otro cable antes de pensar en algo grave.",
    },
    {
      question: "¿Puedo dejar el bajo fuera del estuche?",
      answer:
        "Sí, en un soporte estable, lejos de ventanas, calentadores y zonas de paso. Con niños o mascotas en casa, o si vas a pasar días sin tocar, el estuche o un gancho de pared bien instalado es más seguro.",
    },
  ],
  relatedCourseIds: ["bajo-electrico"],
  relatedPostSlugs: [
    "como-limpiar-y-cuidar-una-guitarra-electrica",
    "como-elegir-tu-primer-bajo-electrico",
    "por-que-aprender-bajo-electrico",
  ],
  cta: "clases",
};
