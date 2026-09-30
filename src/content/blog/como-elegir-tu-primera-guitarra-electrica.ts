import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-elegir-tu-primera-guitarra-electrica",
  title: "¿Cómo elegir tu primera guitarra eléctrica y su amplificador?",
  seoTitle: "Cómo elegir guitarra eléctrica y amplificador",
  description:
    "Cuerpo sólido o semihueco, pastillas simples o dobles, amplificador con audífonos, cables y cuándo pensar en pedales: guía para tu primera eléctrica.",
  excerpt:
    "La eléctrica es un sistema: guitarra, cable y amplificador. Qué mirar en cada uno, qué probar antes de pagar y por qué los pedales pueden esperar.",
  category: "cuidado-y-compra",
  publishedAt: "2026-09-30",
  keywords: [
    "qué guitarra eléctrica comprar para empezar",
    "guitarra eléctrica para principiantes",
    "qué amplificador comprar para guitarra eléctrica",
    "pastillas single coil o humbucker",
    "amplificador de guitarra con audífonos",
    "guitarra eléctrica para niños",
  ],
  intro: [
    "Para empezar, busca una guitarra eléctrica de cuerpo sólido, con puente fijo o un trémolo sencillo, un mástil cómodo para tu mano y un amplificador pequeño de práctica con salida de audífonos. Con eso, un buen cable y un afinador tienes todo lo necesario para los primeros meses. Los pedales pueden esperar.",
    "La eléctrica es un sistema: guitarra, cable y amplificador. Si uno de los tres falla, todo suena mal. Te explicamos qué mirar en cada pieza y qué probar antes de comprar.",
  ],
  keyTakeaways: [
    "Una buena guitarra conectada a un mal amplificador suena mal: evalúa el conjunto.",
    "Para la casa, un amplificador de práctica pequeño con salida de audífonos es más útil que uno grande.",
    "Las pastillas de bobina simple suenan más brillantes; las de doble bobina, más gruesas y sin zumbido.",
    "Evita los puentes flotantes de doble traba como primera guitarra: complican afinar y cambiar cuerdas.",
    "Los pedales se compran cuando ya sabes qué sonido te falta, no el primer día.",
  ],
  sections: [
    {
      id: "tipos-de-cuerpo",
      heading: "Tipos de cuerpo: sólido, semihueco o hueco",
      blocks: [
        {
          type: "table",
          head: ["Cuerpo", "Cómo suena", "Ventajas", "Ten en cuenta"],
          rows: [
            ["Sólido", "Definido y con mucho sustain", "El más versátil; aguanta volumen alto sin acoplarse", "Algunos pesan bastante: pruébalo colgado"],
            ["Semihueco", "Más cálido y con aire", "Muy usado en blues, jazz, funk y rock clásico", "Con distorsión alta puede acoplarse (pitar)"],
            ["Hueco", "Redondo, casi acústico", "Pensado para jazz tradicional", "Grande, delicado y poco práctico para empezar"],
          ],
        },
        {
          type: "p",
          text: "Entre los sólidos verás cuerpos de doble corte, con dos «cuernos» que dejan llegar a los trastes altos, y de corte simple, más compactos y a menudo más pesados. Elige por comodidad: siéntate y luego ponte de pie con la guitarra colgada. Si al soltarla la cabeza se va hacia el piso, está desbalanceada y te va a cansar el brazo izquierdo.",
        },
        { type: "h3", text: "Mástil, escala y tamaño" },
        {
          type: "p",
          text: "Fíjate en el grosor del mástil más que en el nombre de su perfil: agárralo en el primer traste y en el quinto y nota si la mano se cierra cómoda. Las manos pequeñas agradecen un mástil delgado y una escala un poco más corta, que deja las cuerdas algo menos tensas. Para niños existen eléctricas de tamaño 3/4 o de escala corta, buena opción si una guitarra completa les queda grande o pesada.",
        },
      ],
    },
    {
      id: "pastillas-y-puente",
      heading: "Pastillas y puente: sonido y estabilidad",
      blocks: [
        {
          type: "p",
          text: "Las pastillas son los imanes con bobinas que captan la vibración de las cuerdas. Su tipo define buena parte del carácter de la guitarra:",
        },
        {
          type: "table",
          head: ["Pastillas", "Sonido", "Donde brillan"],
          rows: [
            ["Bobina simple (single coil)", "Brillante, claro y con ataque; algo de zumbido es normal", "Funk, pop, blues, rock clásico"],
            ["Doble bobina (humbucker)", "Grueso, cálido y sin zumbido", "Rock, hard rock, metal, jazz"],
            ["Combinación de simples y doble", "De limpio brillante a distorsión gruesa", "Si todavía no tienes un género definido"],
          ],
        },
        {
          type: "p",
          text: "Las pastillas pasivas, que no usan batería, son lo normal y bastan para aprender. Las activas se asocian a estilos de mucha ganancia y no hacen falta al empezar.",
        },
        { type: "h3", text: "El puente" },
        {
          type: "ul",
          items: [
            "**Fijo:** el más estable. Afina fácil y cambiar cuerdas es sencillo. Ideal para empezar.",
            "**Trémolo sencillo, con palanca:** permite ondular el tono. Bien ajustado mantiene la afinación; úsalo con moderación al principio.",
            "**Flotante de doble traba:** sujeta las cuerdas con tornillos en la cejuela y en el puente. Es muy estable en manos expertas, pero afinarlo y cambiar cuerdas puede ser una pesadilla para un principiante.",
          ],
        },
      ],
    },
    {
      id: "amplificador",
      heading: "El amplificador: pequeño, con audífonos y bien probado",
      blocks: [
        {
          type: "p",
          text: "En casa no necesitas potencia. Un amplificador de práctica pequeño llena de sobra una habitación, y lo que importa es que suene bien a volumen bajo. Los vatios no indican calidad.",
        },
        {
          type: "table",
          head: ["Opción", "Para qué sirve", "Ten en cuenta"],
          rows: [
            ["Amplificador de práctica con efectos", "Casa y clases: limpio, distorsión, reverb, delay", "Que tenga salida de audífonos y entrada auxiliar para tocar sobre canciones"],
            ["Amplificador de audífonos", "Se conecta directo a la guitarra; practicar de noche o viajar", "Buen complemento, pero no sirve para tocar con otros"],
            ["Interfaz de audio y computador", "Grabar, usar simuladores y sonar bien en clases virtuales", "Requiere configuración y audífonos o parlantes de estudio"],
            ["Amplificador de tubos o de gran potencia", "Ensayos con banda y tarimas", "Innecesario al empezar; en apartamento no lo aprovechas"],
          ],
        },
        {
          type: "p",
          text: "Los paquetes que traen guitarra, amplificador, cable y funda son cómodos, pero el amplificador suele ser su punto débil: pruébalo con la misma atención que la guitarra. Si vas a tomar [clases de música online](/clases-de-musica-online), conectar la guitarra a una interfaz mejora mucho lo que escucha el profe al otro lado.",
        },
      ],
    },
    {
      id: "cables-y-accesorios",
      heading: "Cables y accesorios para el primer día",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cable de instrumento:** de unos 3 metros, con conectores de 6,3 mm (el plug de 1/4 de pulgada). Si un extremo es en ángulo, se engancha menos. Un cable que cruje cuando lo mueves está dañado.",
            "**Afinador:** de clip, el del amplificador o nuestro [afinador de guitarra](/herramientas/afinador/guitarra).",
            "**Correa:** acolchada si la guitarra es pesada. Ajústala para que la guitarra quede a la misma altura sentado y de pie.",
            "**Púas:** compra varias de distinto grosor; una delgada o mediana facilita el rasgueo al empezar.",
            "**Cuerdas:** calibre 9 o 10 es lo habitual; las de 9 son más fáciles de presionar.",
            "**Funda acolchada, soporte y audífonos cerrados:** la guitarra a la vista en su soporte se toca más que guardada, y los audífonos te dejan practicar de noche.",
          ],
        },
        { type: "h3", text: "¿Y la pedalera?" },
        {
          type: "p",
          text: "Espera. En los primeros meses, el canal limpio y la distorsión del amplificador bastan para aprender acordes, riffs y ritmo. Cuando tengas claro qué sonido te falta, como un delay para baladas o una distorsión distinta, una pedalera multiefectos es una forma práctica de explorar antes de comprar pedales sueltos. Tu profe te ayuda a no gastar en efectos que no vas a usar.",
        },
      ],
    },
    {
      id: "que-probar-antes-de-comprar",
      heading: "Qué probar antes de pagar, nueva o usada",
      blocks: [
        {
          type: "ol",
          items: [
            "Afínala y toca cada cuerda al aire y pisada en varios trastes: no debe haber zumbidos contra los trastes.",
            "Recorre el selector por todas sus posiciones. Cada una debe sonar distinta y sin cortes.",
            "Gira las perillas de volumen y tono con la guitarra conectada. Si crujen, los potenciómetros están sucios o gastados.",
            "Mueve suavemente el cable en el conector de la guitarra. Si el sonido se corta, el jack está flojo.",
            "Con distorsión, un poco de ruido es normal en bobinas simples. Si el zumbido es muy fuerte o cambia mucho al tocar las cuerdas, puede haber un problema de tierra.",
            "Pasa la mano por el borde del mástil: los extremos de los trastes no deben raspar.",
            "Compara el armónico del traste 12 con la nota pisada ahí mismo. Si difieren bastante, necesita ajuste de octavación.",
            "Si tiene palanca, úsala y revisa que la guitarra vuelva a quedar afinada.",
          ],
        },
        {
          type: "p",
          text: "En una usada, revisa además el desgaste de los trastes bajo las primeras cuerdas y pregunta si el alma del mástil tiene recorrido para ajustarse. Esto último lo sabe un luthier. Te contamos más en [instrumento nuevo o usado](/blog/instrumento-nuevo-o-usado-que-revisar-antes-de-comprar).",
        },
        {
          type: "callout",
          title: "Lleva a tu profe, o mándale un video",
          text: "Si vas a tomar [clases de guitarra eléctrica](/clases/guitarra-electrica), pídele a tu profe que la pruebe contigo o mándale un video recorriendo el selector y las perillas. Sabrá si el problema es de ajuste, que se arregla, o de la guitarra misma.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Es más fácil empezar con guitarra eléctrica que con acústica?",
      answer:
        "En algunos aspectos sí: las cuerdas son más delgadas, la acción suele ser más baja y los acordes cuestan menos. Pero necesita equipo adicional y tiene su propia técnica, como apagar las cuerdas que no suenan. Las comparamos en [guitarra acústica o eléctrica](/blog/guitarra-acustica-o-electrica-cual-aprender-primero).",
    },
    {
      question: "¿Puedo practicar guitarra eléctrica sin amplificador?",
      answer:
        "Puedes repasar digitaciones sin conectarla, pero no escuchas cómo suena de verdad y se te escapan errores como cuerdas que zumban o notas que no se apagan. Con un amplificador de audífonos o una interfaz no molestas a nadie y lo escuchas todo.",
    },
    {
      question: "¿Una guitarra eléctrica sirve para un niño?",
      answer:
        "Sí, si el tamaño y el peso le sirven. Hay modelos 3/4 o de escala corta. Revisa que la guitarra colgada no le hale el hombro, que alcance el primer traste sin estirar el brazo y que el volumen se mantenga bajo para cuidar sus oídos.",
    },
    {
      question: "¿Qué hago si mi guitarra zumba cuando la conecto?",
      answer:
        "Primero cambia el cable para descartarlo. Aleja la guitarra del computador, de las luces LED y de los reguladores de voltaje, que meten ruido en las pastillas de bobina simple. Si el zumbido sigue, puede ser una conexión de tierra suelta: eso lo revisa un luthier.",
    },
  ],
  relatedCourseIds: ["guitarra-electrica"],
  relatedPostSlugs: [
    "guitarra-acustica-o-electrica-cual-aprender-primero",
    "como-limpiar-y-cuidar-una-guitarra-electrica",
    "como-leer-tablaturas-de-guitarra-y-bajo",
  ],
  cta: "clases",
};
