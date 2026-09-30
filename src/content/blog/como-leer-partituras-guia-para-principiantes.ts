import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "como-leer-partituras-guia-para-principiantes",
  title: "Cómo leer partituras: guía para principiantes",
  description:
    "Aprende a leer partituras desde cero: pentagrama, clave de sol y de fa, figuras y silencios, compás y alteraciones, con ejercicios de 10 minutos al día.",
  excerpt:
    "Una partitura te dice qué nota tocar y cuánto dura. Te explicamos pentagrama, claves, figuras, compás y alteraciones, con ejercicios diarios para leer con fluidez.",
  category: "tecnica",
  publishedAt: "2026-09-30",
  keywords: [
    "cómo leer partituras",
    "aprender a leer partituras desde cero",
    "notas en clave de sol",
    "figuras musicales y su duración",
    "cómo leer partituras de piano",
    "qué es el compás en música",
  ],
  intro: [
    "Leer una partitura es responder dos preguntas a la vez: **qué nota suena**, según su altura en el pentagrama y la clave, y **cuánto dura**, según la forma de la figura. Todo lo demás, como compás, alteraciones o dinámicas, se construye sobre esas dos ideas.",
    "El orden que recomendamos para empezar es: pentagrama y clave, nombres de las notas, figuras y silencios, compás y, por último, alteraciones. Al final encontrarás una rutina de 10 minutos diarios para que la lectura se vuelva automática.",
  ],
  keyTakeaways: [
    "El pentagrama tiene 5 líneas y 4 espacios que se cuentan de abajo hacia arriba; cuanto más arriba está la nota, más aguda suena.",
    "La clave indica qué nota va en cada línea: la clave de sol fija el Sol en la 2ª línea y la de fa fija el Fa en la 4ª.",
    "La forma de la figura dice cuánto dura: redonda 4 tiempos, blanca 2, negra 1, corchea medio, en compases de negra.",
    "Antes de tocar, revisa clave, armadura y compás, y lee primero el ritmo con palmas.",
    "Diez minutos diarios de lectura rinden más que una hora a la semana.",
  ],
  sections: [
    {
      id: "pentagrama",
      heading: "El pentagrama: dónde se escriben las notas",
      blocks: [
        {
          type: "p",
          text: "El pentagrama es el conjunto de cinco líneas horizontales sobre el que se escribe la música. Líneas y espacios se numeran **de abajo hacia arriba**: la 1ª línea es la de abajo. Una nota puede ir sobre una línea (la línea la atraviesa por la mitad) o en un espacio (entre dos líneas).",
        },
        {
          type: "ul",
          items: [
            "Cuanto más arriba está la nota, más aguda suena; cuanto más abajo, más grave.",
            "Cuando una nota se sale del pentagrama, se escribe con **líneas adicionales**, pequeñas rayitas que prolongan el pentagrama hacia arriba o hacia abajo.",
            "Las **barras de compás** son líneas verticales que dividen la música en compases; la doble barra final indica que la obra terminó.",
          ],
        },
      ],
    },
    {
      id: "clave-de-sol-y-clave-de-fa",
      heading: "Clave de sol y clave de fa: los nombres de las notas",
      blocks: [
        {
          type: "p",
          text: "El pentagrama solo no dice qué nota es cuál. Para eso está la clave, el signo al inicio de cada línea de música. La **clave de sol** se enrosca alrededor de la 2ª línea y le da el nombre de Sol; la usan la voz, el violín, la flauta, la guitarra y la mano derecha del piano. La **clave de fa en cuarta** pone sus dos puntos alrededor de la 4ª línea y la llama Fa; la usan la mano izquierda del piano, el violonchelo, el contrabajo, el bajo y el trombón. Existe también la clave de do, que es la que lee la viola.",
        },
        {
          type: "table",
          caption: "Notas en las líneas y espacios de cada clave",
          head: ["Posición", "Clave de sol", "Clave de fa en 4ª"],
          rows: [
            ["5ª línea", "Fa (F5)", "La (A3)"],
            ["4º espacio", "Mi (E5)", "Sol (G3)"],
            ["4ª línea", "Re (D5)", "Fa (F3)"],
            ["3er espacio", "Do (C5)", "Mi (E3)"],
            ["3ª línea", "Si (B4)", "Re (D3)"],
            ["2º espacio", "La (A4)", "Do (C3)"],
            ["2ª línea", "Sol (G4)", "Si (B2)"],
            ["1er espacio", "Fa (F4)", "La (A2)"],
            ["1ª línea", "Mi (E4)", "Sol (G2)"],
          ],
        },
        {
          type: "p",
          text: "Un truco para la clave de sol: los espacios, de abajo arriba, dicen **Fa-La-Do-Mi**; las líneas, **Mi-Sol-Si-Re-Fa**. El Do central del piano (C4) se escribe en la primera línea adicional por debajo del pentagrama en clave de sol, y en la primera línea adicional por encima en clave de fa: es la nota que une las dos manos.",
        },
        {
          type: "p",
          text: "Si tocas guitarra, ten en cuenta que su música se escribe en clave de sol, pero suena una octava más grave de lo escrito. Para leer, no cambia nada.",
        },
      ],
    },
    {
      id: "figuras-y-silencios",
      heading: "Figuras y silencios: cuánto dura cada nota",
      blocks: [
        {
          type: "p",
          text: "La forma de la nota indica su duración. Cada figura tiene un silencio equivalente, que dura lo mismo pero sin sonar. En compases como 2/4, 3/4 o 4/4, la negra vale un tiempo y las demás se miden a partir de ella.",
        },
        {
          type: "table",
          caption: "Figuras, silencios y duraciones (con la negra como tiempo)",
          head: ["Figura", "Cómo se ve", "Duración", "Su silencio"],
          rows: [
            ["Redonda", "Cabeza blanca, sin plica", "4 tiempos", "Rectángulo colgado de la 4ª línea"],
            ["Blanca", "Cabeza blanca con plica", "2 tiempos", "Rectángulo apoyado sobre la 3ª línea"],
            ["Negra", "Cabeza negra con plica", "1 tiempo", "Signo en zigzag"],
            ["Corchea", "Negra con un corchete o unida por una barra", "½ tiempo", "Como un 7 con un gancho"],
            ["Semicorchea", "Dos corchetes o dos barras", "¼ de tiempo", "Como un 7 con dos ganchos"],
          ],
        },
        {
          type: "ul",
          items: [
            "El **puntillo**, un punto a la derecha de la nota, le suma la mitad de su valor: una blanca con puntillo dura 3 tiempos y una negra con puntillo, 1½.",
            "La **ligadura de prolongación** une dos notas de la misma altura: se toca una sola vez y se sostiene la suma de ambas.",
            "No la confundas con la **ligadura de expresión**, que une notas distintas e indica tocarlas unidas, sin cortar el sonido.",
          ],
        },
      ],
    },
    {
      id: "el-compas",
      heading: "El compás: los dos números del inicio",
      blocks: [
        {
          type: "p",
          text: "Después de la clave aparecen dos números, uno encima del otro. El de arriba dice cuántos tiempos tiene cada compás; el de abajo, qué figura vale un tiempo: 4 es la negra, 2 la blanca y 8 la corchea.",
        },
        {
          type: "table",
          caption: "Compases más comunes para empezar",
          head: ["Compás", "Cómo se cuenta", "Dónde lo encuentras"],
          rows: [
            ["2/4", "2 tiempos de negra: 1-2", "Marchas y muchas piezas para principiantes"],
            ["3/4", "3 tiempos de negra: 1-2-3", "Valses y pasillos"],
            ["4/4 (o una C)", "4 tiempos de negra: 1-2-3-4", "La mayor parte del pop, el rock y las baladas"],
            ["6/8", "2 tiempos, cada uno de tres corcheas: 1-2-3-4-5-6", "Canciones de cuna y muchos ritmos tradicionales"],
          ],
        },
        {
          type: "p",
          text: "El primer tiempo de cada compás suele sentirse más fuerte. Contar en voz alta mientras lees, con el [metrónomo](/herramientas/metronomo) a un tempo lento, es la forma más rápida de interiorizarlo.",
        },
      ],
    },
    {
      id: "alteraciones-y-armadura",
      heading: "Alteraciones y armadura",
      blocks: [
        {
          type: "ul",
          items: [
            "**Sostenido (♯):** sube la nota un semitono. Fa♯ es la tecla negra a la derecha del Fa.",
            "**Bemol (♭):** baja la nota un semitono. Si♭ es la tecla negra a la izquierda del Si.",
            "**Becuadro (♮):** anula el sostenido o el bemol y devuelve la nota a su estado natural.",
          ],
        },
        {
          type: "p",
          text: "Una alteración escrita junto a una nota vale para esa nota, en esa misma línea o espacio, hasta el final del compás. En el compás siguiente, la nota vuelve a ser natural, salvo que la armadura diga lo contrario.",
        },
        {
          type: "p",
          text: "La **armadura** son los sostenidos o bemoles que aparecen justo después de la clave, en cada renglón. Afectan a todas las notas con ese nombre, en cualquier octava, durante toda la obra. Por ejemplo, en Sol mayor la armadura lleva Fa♯: cada Fa que veas se toca Fa♯ aunque no tenga el signo al lado. El [círculo de quintas](/blog/circulo-de-quintas-explicado) te ayuda a reconocer cada armadura de un vistazo.",
        },
      ],
    },
    {
      id: "leer-una-partitura-nueva",
      heading: "Cómo leer una partitura nueva, paso a paso",
      blocks: [
        {
          type: "ol",
          items: [
            "Mira la clave: ¿sol, fa, o las dos, como en el piano?",
            "Revisa la armadura y anota mentalmente qué notas van alteradas.",
            "Identifica el compás y la indicación de tempo o carácter (Allegro, Andante, o un número como ♩ = 80).",
            "Recorre la partitura con los ojos sin tocar: busca saltos grandes, alteraciones sueltas, repeticiones y cambios de compás.",
            "Lee solo el ritmo: da palmas y cuenta en voz alta, sin preocuparte por las notas.",
            "Di los nombres de las notas en ritmo, como en el [solfeo](/blog/que-es-el-solfeo-y-como-practicarlo) hablado.",
            "Toca despacio y sin detenerte, aunque te equivoques. Mantener el pulso importa más que acertar cada nota.",
            "Cuando la lectura sea estable, sube el tempo de a poco.",
          ],
        },
      ],
    },
    {
      id: "ejercicios-diarios",
      heading: "Ejercicios de 10 minutos para leer con fluidez",
      blocks: [
        {
          type: "table",
          caption: "Rutina diaria de lectura",
          head: ["Minutos", "Ejercicio", "Objetivo"],
          rows: [
            ["2", "Tarjetas con notas sueltas en la clave de tu instrumento", "Reconocer cada nota sin contar líneas"],
            ["3", "Leer una línea de ritmo con palmas y metrónomo a 60", "Sentir el pulso y las figuras"],
            ["3", "Leer a primera vista una pieza muy sencilla", "Leer sin parar, mirando un poco adelante"],
            ["2", "Copiar a mano cuatro compases de una partitura", "Fijar claves, figuras y alteraciones"],
          ],
        },
        {
          type: "p",
          text: "Un consejo que marca la diferencia: lee por **distancias**, no solo por nombres. Si una nota pasa de una línea al espacio de al lado, es la nota vecina; si salta de línea a línea, salta una nota. Así tus ojos reconocen dibujos y no tienen que nombrar cada nota.",
        },
        {
          type: "callout",
          title: "Evita escribir el nombre de cada nota",
          text: "Anotar todas las notas con lápiz encima de la partitura parece ayudar, pero hace que leas las letras y no el pentagrama. Márcalas solo en los pasajes donde de verdad te pierdes, y bórralas cuando ya los domines.",
        },
        {
          type: "p",
          text: "En las [clases de teoría musical](/clases/teoria-musical) o en tus [clases de piano](/clases/piano), el profe elige lecturas a tu nivel y corrige los errores de ritmo que por tu cuenta no detectarías. Si te preguntas cuánto vas a tardar, lo explicamos en [cuánto tiempo toma aprender a leer partituras](/blog/cuanto-tiempo-toma-aprender-a-leer-partituras).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué clave debo aprender primero?",
      answer:
        "La de tu instrumento. Guitarra, violín, flauta y voz leen en clave de sol; violonchelo, contrabajo, bajo y trombón, en clave de fa. En piano se aprenden las dos, aunque casi siempre se empieza por la clave de sol.",
    },
    {
      question: "¿Se puede aprender a leer partituras solo?",
      answer:
        "Lo básico, sí, con libros y aplicaciones de lectura. Lo difícil de aprender a solas es el ritmo: es fácil leer mal una figura sin notarlo. Un profe detecta esos errores pronto y te da lecturas del nivel justo.",
    },
    {
      question: "¿Hay que leer partituras para tocar guitarra?",
      answer:
        "No es obligatorio para acompañar canciones: muchos guitarristas empiezan con acordes y tablaturas. Pero la partitura te abre el repertorio clásico, te permite tocar con otros músicos y es indispensable si piensas presentarte a una carrera de música.",
    },
    {
      question: "¿Leer partituras es lo mismo que saber solfeo?",
      answer:
        "Están muy relacionados. Leer es entender lo escrito; el solfeo es leerlo en voz alta, diciendo o cantando las notas en su ritmo. Practicar solfeo es una de las mejores formas de afianzar la lectura.",
    },
  ],
  relatedCourseIds: ["teoria-musical", "piano"],
  relatedPostSlugs: [
    "que-es-el-solfeo-y-como-practicarlo",
    "cuanto-tiempo-toma-aprender-a-leer-partituras",
    "escalas-mayores-y-menores-explicadas",
  ],
  cta: "clases",
};
