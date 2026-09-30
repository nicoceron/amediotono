import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "equipo-para-clases-virtuales-de-musica-camara-microfono",
  title: "¿Qué equipo necesitas para clases virtuales de música?",
  description:
    "Equipo para clases virtuales de música: celular o computador, micrófono, audífonos y cómo activar el sonido original en la videollamada, paso a paso.",
  excerpt:
    "No necesitas un estudio de grabación. Te explicamos qué equipo sí hace diferencia en una clase virtual y cómo configurar el audio para que tu instrumento suene como es.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "equipo para clases de música virtuales",
    "micrófono para clases de música online",
    "celular o computador para clases virtuales",
    "sonido original videollamada música",
    "audífonos para clases virtuales de canto",
    "configurar audio para clases de piano online",
  ],
  intro: [
    "Para empezar basta un celular, una tableta o un computador con cámara, un soporte para ubicarlo y una conexión estable. Lo que más mejora la clase no es comprar equipo caro, sino configurar bien el audio: desactivar la supresión de ruido de la videollamada y activar el modo de sonido original, si la aplicación lo tiene. Después, las mejoras que más se notan son unos audífonos con cable y un micrófono externo.",
    "Esta guía se enfoca en el equipo y la configuración. Para la luz, la ubicación de la cámara y el atril, revisa [cómo preparar tu espacio para clases virtuales](/blog/como-preparar-tu-espacio-para-clases-virtuales-de-musica); y si aún no decides el formato, empieza por [clases a domicilio o virtuales](/blog/clases-de-musica-a-domicilio-o-virtuales).",
  ],
  keyTakeaways: [
    "Lo mínimo: un dispositivo con cámara, un soporte fijo, conexión estable y el cargador conectado.",
    "Los filtros de ruido de las videollamadas están hechos para la voz hablada y cortan notas largas, sonidos suaves y el inicio de las frases.",
    "Los audífonos con cable evitan el eco y no suman el retraso que agregan muchos audífonos inalámbricos.",
    "Un micrófono externo sencillo mejora sobre todo el canto y los vientos; en piano y guitarra, el del dispositivo suele bastar al comienzo.",
    "En la conexión importa sobre todo la velocidad de subida, porque es la que lleva tu sonido y tu imagen hasta el profe.",
  ],
  sections: [
    {
      id: "lo-minimo",
      heading: "Lo mínimo para empezar (y qué mejorar después)",
      blocks: [
        {
          type: "ul",
          items: [
            "**Un dispositivo con cámara y micrófono**: celular, tableta o computador.",
            "**Un soporte**: trípode, soporte de escritorio o un atril con adaptador. La cámara no puede depender de una pila de libros.",
            "**Conexión estable**, idealmente por cable o cerca del router.",
            "**El cargador conectado**: una videollamada con cámara gasta batería rápido, y un celular recalentado puede bajar la calidad del video.",
          ],
        },
        {
          type: "p",
          text: "Con eso ya puedes tomar clases de [piano](/clases/piano), guitarra o teoría. Todo lo demás es mejora, y conviene hacerla en este orden:",
        },
        {
          type: "table",
          caption: "Mejoras para tus clases virtuales, por prioridad",
          head: ["Prioridad", "Mejora", "Qué resuelve"],
          rows: [
            ["1", "Configurar el audio de la videollamada", "Que el profe escuche tu instrumento completo, sin cortes. No cuesta nada."],
            ["2", "Trípode o soporte ajustable", "Poner la cámara donde el profe la necesita según tu instrumento."],
            ["3", "Audífonos con cable", "Eco, pitidos de acople y el sonido que se corta cuando hablan los dos."],
            ["4", "Micrófono externo", "Claridad y matices, sobre todo en canto y vientos."],
            ["5", "Cable de red o mejor ubicación del router", "Cortes, imagen congelada y audio entrecortado."],
            ["6", "Un segundo dispositivo como cámara", "Un ángulo extra: los pies en piano o batería, la embocadura de cerca."],
          ],
        },
      ],
    },
    {
      id: "celular-tableta-o-computador",
      heading: "¿Celular, tableta o computador?",
      blocks: [
        {
          type: "table",
          caption: "Ventajas y desventajas de cada dispositivo",
          head: ["Dispositivo", "A favor", "En contra"],
          rows: [
            ["Celular", "Buena cámara; fácil de ubicar en un trípode en cualquier ángulo.", "Pantalla pequeña para ver las demostraciones del profe; notificaciones y llamadas pueden interrumpir."],
            ["Tableta", "Pantalla más grande, liviana, fácil de apoyar en un atril.", "Su cámara suele ser más básica; necesita un soporte firme."],
            ["Computador portátil", "Pantalla grande, cómoda para partituras compartidas y teoría.", "La cámara está fija en la pantalla; es difícil lograr un ángulo lateral o elevado."],
            ["Computador de escritorio", "Estable; permite conectar micrófono y cámara externos.", "Poco móvil: el instrumento tiene que acomodarse a él."],
          ],
        },
        {
          type: "p",
          text: "La combinación que mejor funciona para muchos estudiantes es un computador o una tableta frente a ti para ver y escuchar al profe, y el celular en un trípode como segunda cámara. Para eso, conecta el celular a la misma videollamada con el micrófono silenciado y el volumen en cero; si no, aparece eco o un pitido de acople.",
        },
      ],
    },
    {
      id: "microfono",
      heading: "Micrófono: cuándo vale la pena uno externo",
      blocks: [
        {
          type: "p",
          text: "El micrófono de un celular o de un portátil está pensado para captar una voz hablada a poca distancia. Con piano y guitarra se defiende, pero sufre con lo muy suave y con lo muy fuerte. Así cambia la necesidad según el instrumento:",
        },
        {
          type: "ul",
          items: [
            "**[Canto](/clases/canto)**: es donde más se nota un micrófono externo. Uno de tipo USB conectado al computador capta mejor el timbre y los matices. Ubícalo a uno o dos palmos de la boca, un poco por debajo, para que no reciba de lleno el aire de las consonantes.",
            "**Vientos**: no apuntes el micrófono directo a la campana; ubícalo en diagonal y un poco más lejos para que el sonido no se sature. En flauta traversa, evita ponerlo frente a la embocadura, porque capta el soplo del aire.",
            "**Piano acústico**: el micrófono del dispositivo, a un lado del instrumento, suele bastar. Con piano digital, algunos modelos permiten enviar el sonido directo al computador por cable, con un resultado mucho más limpio.",
            "**Guitarra y bajo eléctricos**: con una interfaz de audio, el sonido entra directo al computador en lugar de captar el amplificador con el micrófono.",
            "**Batería y percusión**: el problema no es la falta de sensibilidad, sino el exceso de volumen. Aleja el micrófono y baja su nivel de entrada para que los golpes no se distorsionen.",
          ],
        },
        {
          type: "p",
          text: "Si además quieres grabarte o practicar con pistas, en [cómo elegir micrófono para cantar en casa](/blog/microfono-para-cantar-en-casa-como-elegir) profundizamos en tipos de micrófono e interfaces.",
        },
      ],
    },
    {
      id: "audifonos",
      heading: "Audífonos: por qué ayudan y cuáles usar",
      blocks: [
        {
          type: "p",
          text: "Sin audífonos, el sonido del profe sale por el parlante, vuelve a entrar por tu micrófono y la aplicación intenta cancelarlo. En ese proceso muchas veces también recorta tu instrumento: por eso a veces el profe te escucha a pedazos justo cuando él habla o cuando los dos suenan a la vez.",
        },
        {
          type: "ul",
          items: [
            "**Con cable, mejor que inalámbricos.** Muchos audífonos inalámbricos agregan un retraso que se suma al de la llamada.",
            "**En canto**, usa un solo audífono o unos que dejen el oído libre, para escuchar tu voz de forma natural. Con los dos oídos tapados es común desafinar o empujar la voz.",
            "**En violín y viola**, los audífonos grandes de diadema estorban con la mentonera; funcionan mejor unos pequeños de inserción.",
            "**En piano y guitarra**, casi cualquier audífono con cable sirve.",
            "**En batería**, unos audífonos comunes no reemplazan la protección auditiva: el volumen del set sigue siendo alto.",
          ],
        },
        {
          type: "p",
          text: "Si prefieres no usarlos, baja el volumen del parlante y acuerda con el profe que no hable mientras tocas. Como la clase virtual funciona por turnos, el problema se reduce bastante.",
        },
      ],
    },
    {
      id: "configurar-el-audio",
      heading: "Cómo configurar el audio de la videollamada",
      blocks: [
        {
          type: "p",
          text: "Es la mejora más importante y no cuesta nada. Las aplicaciones de videollamada aplican filtros pensados para reuniones: suprimen ruidos de fondo, igualan el volumen y cancelan el eco. Con música, esos filtros confunden las notas largas con ruido, recortan los finales de frase y aplastan las dinámicas.",
        },
        {
          type: "p",
          text: "Los nombres cambian según la aplicación y la versión, pero la ruta suele ser parecida:",
        },
        {
          type: "ol",
          items: [
            "Abre la configuración de audio de la aplicación antes de la clase, no durante.",
            "Busca la opción de supresión de ruido o de fondo y ponla en el nivel más bajo o desactívala.",
            "Desactiva el ajuste automático del volumen del micrófono, si aparece, y ajusta el nivel a mano: tus pasajes más fuertes no deberían llegar al máximo.",
            "Busca un modo llamado sonido original, audio para músicos o alta fidelidad, y actívalo. En algunas aplicaciones, además, hay que encenderlo dentro de la llamada con un botón que aparece en pantalla.",
            "Si tu celular tiene su propio modo de micrófono, como aislamiento de voz, cámbialo al modo estándar durante la clase.",
            "Haz una prueba con el profe: toca algo muy suave, algo fuerte y una nota larga, y pregúntale si le llegó completo.",
          ],
        },
        {
          type: "callout",
          title: "Señales de que un filtro sigue activo",
          text: "Las notas largas se desvanecen, los primeros sonidos después de un silencio se cortan, el piano suena sin resonancia o el volumen sube y baja solo. Si el profe te describe algo así, revisa de nuevo la configuración.",
        },
      ],
    },
    {
      id: "conexion",
      heading: "Conexión: lo que sí importa",
      blocks: [
        {
          type: "ul",
          items: [
            "La velocidad de subida pesa más que la de bajada, porque es la que lleva tu audio y tu video. Muchas pruebas de velocidad la muestran aparte.",
            "Un cable de red es más estable que el wifi. Si no es posible, acércate al router o evita paredes gruesas entre ambos.",
            "Cierra descargas, actualizaciones automáticas y pestañas con video mientras dura la clase.",
            "Si la conexión falla, apaga tu video un momento: el audio consume mucho menos y la clase puede seguir mientras se estabiliza.",
            "Acuerden con el profe qué hacer si la llamada se cae: esperar unos minutos, reconectarse por otra aplicación o seguir solo con audio.",
          ],
        },
        {
          type: "p",
          text: "Si vas a tomar [clases de música online](/clases-de-musica-online) de forma regular, vale la pena dedicar una tarde a dejar todo esto listo. Una vez configurado, solo tienes que conectarte y tocar.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Sirven los audífonos inalámbricos para clases de música virtuales?",
      answer:
        "Sirven para escuchar indicaciones, pero muchos agregan un retraso que se suma al de la llamada, y su micrófono integrado suele quedarse corto para un instrumento. Si puedes, usa audífonos con cable y el micrófono del dispositivo o uno externo.",
    },
    {
      question: "¿Es mejor tomar la clase virtual desde el celular o desde el computador?",
      answer:
        "Para ver bien al profe y las partituras compartidas, el computador o la tableta son más cómodos; para ubicar la cámara en el ángulo que exige tu instrumento, el celular es más práctico. Usar ambos a la vez suele ser la mejor solución.",
    },
    {
      question: "¿Qué es el sonido original en una videollamada?",
      answer:
        "Es un modo que desactiva los filtros pensados para la voz hablada, como la supresión de ruido y el control automático de volumen, para que la música llegue lo más parecida posible a como suena. No todas las aplicaciones lo tienen ni lo llaman igual.",
    },
    {
      question: "¿Necesito una interfaz de audio para mis clases virtuales?",
      answer:
        "No para empezar. Una interfaz es útil si tocas guitarra o bajo eléctrico, si usas un micrófono de cable profesional o si también quieres grabarte con buena calidad. Para la mayoría de clases, un micrófono USB o el del dispositivo son suficientes.",
    },
  ],
  relatedCourseIds: ["canto", "piano", "guitarra-acustica"],
  relatedPostSlugs: [
    "como-preparar-tu-espacio-para-clases-virtuales-de-musica",
    "microfono-para-cantar-en-casa-como-elegir",
    "por-que-tomar-clases-de-musica-online",
  ],
  cta: "clases",
};
