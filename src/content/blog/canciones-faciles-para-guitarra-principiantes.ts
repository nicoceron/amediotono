import type { BlogPost } from "@/lib/content-types";

export const post: BlogPost = {
  slug: "canciones-faciles-para-guitarra-principiantes",
  title: "Canciones fáciles para guitarra según cuántos acordes sabes",
  seoTitle: "Canciones fáciles para guitarra para principiantes",
  description:
    "Canciones fáciles para guitarra ordenadas por número de acordes: pop, rock, reggae, latinas y colombianas, con sus progresiones y cómo montarlas.",
  excerpt:
    "De dos a cuatro acordes: una lista de canciones conocidas, latinas y colombianas incluidas, con la progresión que se repite y qué practicas con cada una.",
  category: "aprender-musica",
  publishedAt: "2026-09-30",
  keywords: [
    "canciones fáciles para guitarra",
    "canciones fáciles para guitarra para principiantes",
    "canciones con pocos acordes guitarra",
    "canciones de 3 acordes guitarra",
    "canciones en español fáciles para guitarra",
    "canciones colombianas fáciles en guitarra",
  ],
  intro: [
    "Las canciones más fáciles para empezar en guitarra son las que repiten dos, tres o cuatro acordes abiertos: “Oye como va” se toca con dos, “La Bamba” o “Guantanamera” con tres, y “Let It Be” o “Los caminos de la vida” con cuatro. Lo que las hace fáciles no es solo el número de acordes: también que los cambios sean lentos, que el rasgueo se repita y que la conozcas bien de oído.",
    "Abajo las tienes organizadas por número de acordes, con el artista o autor, la progresión que se repite y qué practicas con cada una. No incluimos letras; las progresiones están en la forma más común y cómoda de tocarlas, y cuando la grabación está en otro tono te indicamos el capo. Si todavía no dominas los acordes abiertos, empieza por los [acordes básicos de guitarra](/blog/acordes-basicos-de-guitarra-para-principiantes).",
  ],
  keyTakeaways: [
    "Una canción es fácil si tiene pocos acordes abiertos, cambios lentos y un rasgueo que se repite.",
    "Con Sol, Re, Mim y Do puedes tocar decenas de canciones, porque muchas comparten la misma progresión.",
    "El capo te permite sonar en el tono de la grabación sin cambiar las formas de los acordes.",
    "Aprende primero los cambios sin rasgueo, luego un rasgueo simple y, al final, el de la grabación.",
    "El Fa aparece pronto: usa la versión simplificada mientras trabajas la cejilla.",
  ],
  sections: [
    {
      id: "que-hace-facil-una-cancion",
      heading: "Qué hace fácil una canción para guitarra",
      blocks: [
        {
          type: "ul",
          items: [
            "**Pocos acordes y abiertos.** Sin cejilla, o con un solo acorde difícil que se pueda simplificar.",
            "**Cambios lentos.** Un acorde por compás, o incluso cada dos compases. Dos cambios por compás ya exigen más.",
            "**Una progresión que se repite.** Si el verso y el coro usan los mismos acordes, aprendes una vez y tocas toda la canción.",
            "**Un tempo moderado.** Las canciones muy rápidas desordenan los cambios; las muy lentas exponen cada error.",
            "**Que la conozcas de oído.** Si puedes tararearla, sabes cuándo viene el cambio aunque no lo cuentes.",
            "**Que puedas cantarla en ese tono.** Si no, usa el capo o cambia de tonalidad antes de rendirte.",
          ],
        },
      ],
    },
    {
      id: "canciones-de-2-y-3-acordes",
      heading: "Canciones con dos y tres acordes",
      blocks: [
        {
          type: "table",
          caption: "Con dos acordes",
          head: ["Canción", "Artista o autor", "Acordes", "Qué practicas"],
          rows: [
            ["“Oye como va”", "Tito Puente; famosa en la versión de Santana", "Lam – Re (en la grabación, Lam7 y Re9)", "Un solo cambio sobre un ritmo de chachachá"],
            ["“La pollera colorá”", "Juan Madera y Wilson Choperena", "Sol – Re7 (la tonalidad cambia según la versión)", "Cumbia: tónica y dominante, marcando el contratiempo"],
            ["“Eleanor Rigby”", "The Beatles", "Mim – Do", "Tonalidad menor y corcheas parejas"],
          ],
        },
        {
          type: "table",
          caption: "Con tres acordes",
          head: ["Canción", "Artista o autor", "Acordes", "Qué practicas"],
          rows: [
            ["“La Bamba”", "Tradicional mexicana, popularizada por Ritchie Valens", "Do – Fa – Sol (o Sol – Do – Re si aún no tienes el Fa)", "Cambios rápidos y un rasgueo con energía"],
            ["“Guantanamera”", "Tradicional cubana", "Sol – Do – Re", "La progresión I–IV–V, base de miles de canciones"],
            ["“Sweet Home Alabama”", "Lynyrd Skynyrd", "Re – Do – Sol", "Rock tranquilo; con Do add9 (x-3-2-0-3-3) el anular no se mueve de la 2ª cuerda"],
            ["“Three Little Birds”", "Bob Marley", "La – Re – Mi", "El golpe corto del reggae en el 2 y el 4"],
            ["“Riptide”", "Vance Joy", "Lam – Sol – Do", "Cambios ágiles con rasgueo movido"],
            ["“La camisa negra”", "Juanes", "Mim – Si7 – Lam (capo en el traste 2 para sonar como la grabación)", "Tu primer acorde de séptima: Si7 (x-2-1-2-0-2)"],
            ["“Feliz cumpleaños”", "Melodía popular", "Sol – Re7 – Do", "Ritmo de vals en 3/4"],
          ],
        },
        {
          type: "p",
          text: "Si una canción de dos acordes te parece “muy poco”, recuerda que el reto ahí es otro: sostener el ritmo sin acelerar. Es el mejor lugar para estrenar los [rasgueos básicos](/blog/ritmos-de-guitarra-rasgueos-basicos), desde las negras hasta el patrón pop.",
        },
      ],
    },
    {
      id: "canciones-de-4-acordes",
      heading: "Canciones con cuatro acordes",
      blocks: [
        {
          type: "table",
          caption: "Con cuatro acordes",
          head: ["Canción", "Artista o autor", "Acordes", "Qué practicas"],
          rows: [
            ["“Let It Be”", "The Beatles", "Do – Sol – Lam – Fa", "Tu primer Fa, simplificado o con cejilla"],
            ["“No Woman, No Cry”", "Bob Marley", "Do – Sol – Lam – Fa", "La misma progresión en clave de reggae"],
            ["“Knockin’ on Heaven’s Door”", "Bob Dylan", "Sol – Re – Lam / Sol – Re – Do", "Balada lenta y cambios limpios"],
            ["“Zombie”", "The Cranberries", "Mim – Do – Sol – Re", "Rasgueo con fuerza y contraste entre partes"],
            ["“Los caminos de la vida”", "Omar Geles; famosa en la voz de Los Diablitos", "Sol – Mim – Re – Do", "Vallenato en guitarra y cambios a buen ritmo"],
            ["“Stand by Me”", "Ben E. King", "Sol – Mim – Do – Re (en el tono original: La – Fa♯m – Re – Mi)", "La progresión I–vi–IV–V"],
            ["“Perfect”", "Ed Sheeran", "Sol – Mim – Do – Re (capo en el traste 1)", "Balada suave, ideal para arpegiar"],
            ["“Despacito”", "Luis Fonsi y Daddy Yankee", "Mim – Do – Sol – Re con capo en el traste 7 (en el tono original: Sim – Sol – Re – La)", "Rasgueo de pop latino y uso del capo"],
          ],
        },
        {
          type: "p",
          text: "Con “Let It Be” llega el Fa. Mientras la cejilla completa madura, usa la versión en cuatro cuerdas: índice en la 1ª y la 2ª cuerda en el traste 1, dedo 2 en la 3ª en el traste 2 y dedo 3 en la 4ª en el traste 3. Cuando quieras dar el paso, sigue nuestra guía para [hacer la cejilla](/blog/como-hacer-la-cejilla-en-guitarra).",
        },
        { type: "h3", text: "Cuando ya tengas cejilla" },
        {
          type: "ul",
          items: [
            "**“Chan chan”** (Compay Segundo): Rem – Fa – Solm – La, repetido toda la canción. Dos cejillas seguidas, Fa y Solm, en un son cubano tranquilo.",
            "**“Colombia tierra querida”** (Lucho Bermúdez): está en tonalidad menor y pide varios acordes con cejilla, como Solm, Dom y Mi♭. Un buen reto para cuando los cambios con cejilla ya fluyan.",
          ],
        },
      ],
    },
    {
      id: "una-progresion-muchas-canciones",
      heading: "Una progresión, muchas canciones",
      blocks: [
        {
          type: "p",
          text: "¿Notaste que varias canciones de la lista usan los mismos acordes en distinto orden? No es casualidad. Los músicos numeran los acordes de una tonalidad con números romanos (I, IV, V…), y unas pocas combinaciones aparecen una y otra vez. Cuando reconoces la progresión, aprender una canción nueva se reduce a escuchar en qué orden van.",
        },
        {
          type: "table",
          caption: "Progresiones frecuentes en Sol y en Do",
          head: ["Progresión", "En Sol", "En Do", "Canciones de esta lista"],
          rows: [
            ["I – IV – V", "Sol – Do – Re", "Do – Fa – Sol", "“La Bamba”, “Guantanamera”"],
            ["I – V – vi – IV", "Sol – Re – Mim – Do", "Do – Sol – Lam – Fa", "“Let It Be”, “No Woman, No Cry”"],
            ["vi – IV – I – V", "Mim – Do – Sol – Re", "Lam – Fa – Do – Sol", "“Zombie”, “Despacito”"],
            ["I – vi – IV – V", "Sol – Mim – Do – Re", "Do – Lam – Fa – Sol", "“Stand by Me”, “Perfect”"],
            ["I – vi – V – IV", "Sol – Mim – Re – Do", "Do – Lam – Sol – Fa", "“Los caminos de la vida”"],
          ],
        },
        {
          type: "p",
          text: "Un ejercicio que recomiendan muchos profes: toma la progresión I – V – vi – IV en Sol, ponle el patrón pop de rasgueo y trata de cantar encima distintas canciones que conozcas. Vas a descubrir cuántas encajan.",
        },
      ],
    },
    {
      id: "musica-colombiana-y-latina",
      heading: "Música colombiana y latina: por dónde empezar",
      blocks: [
        {
          type: "p",
          text: "La cumbia tradicional es una gran puerta de entrada porque muchas se acompañan con dos acordes, tónica y dominante, como “La pollera colorá”. El reto no está en la mano izquierda sino en la derecha: el acento del contratiempo, que en un grupo tradicional lleva el llamador. En el vallenato, canciones como “Los caminos de la vida” se mueven sobre tres o cuatro acordes con un pulso binario ágil.",
        },
        {
          type: "p",
          text: "Los bambucos y pasillos son otra historia: su armonía suele tener más acordes, con dominantes de paso y cambios de tonalidad, y su ritmo pide un acompañamiento propio. Si te llaman, mira nuestra selección de [canciones colombianas para tiple o guitarra](/blog/canciones-colombianas-para-aprender-en-tiple-o-guitarra), ordenadas por dificultad.",
        },
      ],
    },
    {
      id: "como-montar-una-cancion",
      heading: "Cómo montar una canción en una semana",
      blocks: [
        {
          type: "ol",
          items: [
            "**Escúchala contando.** Descubre si va en grupos de tres (3/4) o de cuatro (4/4) y dónde cambia el acorde.",
            "**Aprende los cambios sin rasgueo.** Un golpe por acorde, siguiendo la canción, hasta que la mano izquierda llegue a tiempo.",
            "**Pon un rasgueo simple.** Cuatro golpes hacia abajo por compás, con el [metrónomo](/herramientas/metronomo) más lento que la grabación.",
            "**Toca por partes.** Primero el coro, que suele ser lo más reconocible; después los versos.",
            "**Sube el tempo y complica el rasgueo** solo cuando todo lo anterior salga sin pausas.",
            "**Canta o tararea encima.** Es la prueba final: si puedes cantar mientras tocas, la mano derecha ya va sola.",
          ],
        },
        {
          type: "p",
          text: "Un truco para el tono: el capo acorta las cuerdas y sube todo por igual. Si una canción te queda grave para cantar, prueba el capo en el traste 2 o 3 con las mismas formas. Si quieres que alguien te ayude a elegir repertorio a tu medida, un profe de [guitarra acústica](/clases/guitarra-acustica) puede armarte una lista según tus gustos y tu nivel.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es la canción más fácil para aprender guitarra?",
      answer:
        "Una de dos acordes que conozcas bien, como “Oye como va” (Lam y Re) o una cumbia con tónica y dominante. Si prefieres empezar con tres, “Guantanamera” (Sol, Do y Re) es un clásico de las primeras clases.",
    },
    {
      question: "¿Qué hago si una canción tiene un acorde que no sé?",
      answer:
        "Busca una versión simplificada: el Fa en cuatro cuerdas, Fa7M (x-x-3-2-1-0) en lugar de Fa en algunas baladas, o un capo que lleve la canción a tonos con acordes abiertos. Muchas canciones con Sim, por ejemplo, se pueden tocar con capo y formas más fáciles.",
    },
    {
      question: "¿Para qué sirve el capo?",
      answer:
        "Para cambiar la tonalidad sin cambiar las formas de los acordes. Si pones el capo en el traste 2 y haces un Mim, suena Fa♯m. Sirve para sonar como la grabación o para acomodar la canción a tu voz.",
    },
    {
      question: "¿Dónde encuentro las letras con acordes?",
      answer:
        "En cancioneros y sitios de acordes hay versiones de casi todo, pero muchas tienen errores. Compáralas siempre con la grabación y confía en tu oído: si un acorde suena raro, probablemente está mal escrito.",
    },
  ],
  relatedCourseIds: ["guitarra-acustica"],
  relatedPostSlugs: [
    "acordes-basicos-de-guitarra-para-principiantes",
    "ritmos-de-guitarra-rasgueos-basicos",
    "canciones-colombianas-para-aprender-en-tiple-o-guitarra",
  ],
  cta: "clases",
};
