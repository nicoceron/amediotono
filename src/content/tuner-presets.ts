// Afinadores por instrumento y afinaciones alternativas de guitarra
// (/herramientas/afinador/<slug>). Las notas van en MIDI (60 = Do4, 69 = La4 a
// 440 Hz). Los textos admiten **negrita** y enlaces internos `[texto](/ruta)`.
// Cada afinación está verificada contra fuentes publicadas: no agregues notas,
// canciones ni datos históricos sin una fuente.
import type { TunerPreset } from "@/lib/music-tools";
import { GUITAR_TUNING_PRESETS } from "./tuner-presets-guitar";

const INSTRUMENT_PRESETS: TunerPreset[] = [
  {
    slug: "guitarra",
    group: "cuerdas",
    name: "guitarra",
    gender: "f",
    headline: "Afinador de guitarra online",
    metaDescription:
      "Afina tu guitarra gratis con el micrófono: afinación estándar Mi La Re Sol Si Mi, notas de referencia y consejos de profes. Para acústica y eléctrica.",
    intro:
      "Toca una cuerda al aire y el afinador te dice qué nota suena y si debes subirla o bajarla. Funciona con guitarra acústica, clásica y eléctrica, directo en tu navegador.",
    strings: [
      { label: "6.ª cuerda", midi: 40 },
      { label: "5.ª cuerda", midi: 45 },
      { label: "4.ª cuerda", midi: 50 },
      { label: "3.ª cuerda", midi: 55 },
      { label: "2.ª cuerda", midi: 59 },
      { label: "1.ª cuerda", midi: 64 },
    ],
    tuningName: "Afinación estándar (Mi La Re Sol Si Mi)",
    sections: [
      {
        heading: "Por qué la guitarra se afina Mi La Re Sol Si Mi",
        blocks: [
          {
            type: "p",
            text: "Entre cuerdas vecinas hay una cuarta justa (cinco semitonos), con una sola excepción: de la 3.ª cuerda (Sol) a la 2.ª (Si) hay una tercera mayor (cuatro semitonos). Esa excepción hace que los acordes más usados quepan bajo la mano. También explica por qué, al comprobar de oído, la 2.ª cuerda se compara con el traste 4 de la 3.ª y no con el traste 5.",
          },
          {
            type: "table",
            caption: "Comprobación de oído entre cuerdas",
            head: ["Pisa", "En el traste", "Debe sonar igual que"],
            rows: [
              ["6.ª cuerda (Mi)", "5", "5.ª al aire (La)"],
              ["5.ª cuerda (La)", "5", "4.ª al aire (Re)"],
              ["4.ª cuerda (Re)", "5", "3.ª al aire (Sol)"],
              ["3.ª cuerda (Sol)", "4", "2.ª al aire (Si)"],
              ["2.ª cuerda (Si)", "5", "1.ª al aire (Mi)"],
            ],
          },
          {
            type: "p",
            text: "Las dos cuerdas de Mi están separadas por dos octavas: la 6.ª vibra a 82,41 Hz y la 1.ª a 329,63 Hz, justo cuatro veces más. Si las tocas juntas y bien afinadas, se funden en un solo sonido.",
          },
        ],
      },
      {
        heading: "Acústica, clásica y eléctrica",
        blocks: [
          {
            type: "p",
            text: "Las tres se afinan con las mismas notas. Lo que cambia es cómo se comportan las cuerdas: las de nailon de la guitarra clásica se estiran más y tardan varios días en estabilizarse, mientras que las metálicas de la acústica y la eléctrica se asientan más rápido. En la eléctrica, si las cuerdas al aire están afinadas pero las notas en los trastes altos suenan desafinadas, el problema suele ser la octavación del puente, un ajuste que conviene hacer con un técnico.",
          },
        ],
      },
      {
        heading: "Afinaciones alternativas",
        blocks: [
          {
            type: "p",
            text: "Muchos estilos cambian una o varias cuerdas para conseguir otro color o tocar acordes con menos dedos. Cada una tiene su propio afinador con las notas exactas:",
          },
          {
            type: "ul",
            items: [
              "[Medio tono abajo](/herramientas/afinador/guitarra-medio-tono-abajo) y [un tono abajo](/herramientas/afinador/guitarra-un-tono-abajo): todas las cuerdas más graves, con las mismas digitaciones.",
              "[Drop D](/herramientas/afinador/guitarra-drop-d) y [Drop C](/herramientas/afinador/guitarra-drop-c): la 6.ª cuerda más grave para acordes de quinta con un solo dedo.",
              "[DADGAD](/herramientas/afinador/guitarra-dadgad): sonido abierto y modal, muy usado en música celta y acústica.",
              "Afinaciones abiertas: [Open G](/herramientas/afinador/guitarra-open-g), [Open D](/herramientas/afinador/guitarra-open-d) y [Open E](/herramientas/afinador/guitarra-open-e), que forman un acorde mayor al aire.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Afina siempre subiendo hacia la nota: si te pasas, baja un poco la cuerda y vuelve a subir. Así el engranaje de la clavija queda firme y la afinación dura más.",
      "Toca la cuerda con fuerza media y deja que suene; el primer golpe siempre sale un poco más agudo.",
      "Las cuerdas nuevas se estiran durante varios días: revisa la afinación más seguido la primera semana.",
      "Después de afinar las seis cuerdas, repasa todas otra vez: el cambio de tensión de unas mueve un poco a las otras.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas de la guitarra al aire?",
        answer:
          "En afinación estándar, de la sexta cuerda (la más gruesa) a la primera: Mi, La, Re, Sol, Si, Mi (E A D G B E en cifrado americano).",
      },
      {
        question: "¿Sirve para guitarra eléctrica?",
        answer:
          "Sí. Toca cerca del micrófono de tu celular o computador con el amplificador a volumen moderado, o sin amplificar si el sonido alcanza a escucharse.",
      },
      {
        question: "¿Por qué se desafina tan rápido mi guitarra?",
        answer:
          "Las causas más comunes son cuerdas nuevas que aún se estiran, cambios de temperatura y humedad, y clavijas flojas. En nuestra [guía para cambiar las cuerdas](/blog/como-cambiar-las-cuerdas-de-la-guitarra) te explicamos cómo estabilizarlas.",
      },
      {
        question: "¿Cómo afino la guitarra medio tono abajo?",
        answer:
          "Baja cada cuerda un semitono: Mi♭, La♭, Re♭, Sol♭, Si♭, Mi♭. Usa el [afinador de guitarra medio tono abajo](/herramientas/afinador/guitarra-medio-tono-abajo), que ya tiene esas notas como referencia.",
      },
    ],
    courseId: "guitarra-acustica",
    relatedPostSlugs: ["como-afinar-la-guitarra", "como-cambiar-las-cuerdas-de-la-guitarra", "acordes-basicos-de-guitarra-para-principiantes"],
  },
  {
    slug: "violin",
    group: "cuerdas",
    name: "violín",
    gender: "m",
    headline: "Afinador de violín online",
    metaDescription:
      "Afina tu violín gratis con el micrófono: cuerdas Sol Re La Mi, notas de referencia y consejos para clavijas y microafinadores. Directo en el navegador.",
    intro:
      "Pasa el arco o pulsa cada cuerda al aire y el afinador te muestra cuánto te falta para llegar a Sol, Re, La o Mi. Ideal para practicar en casa entre clase y clase.",
    strings: [
      { label: "4.ª cuerda", midi: 55 },
      { label: "3.ª cuerda", midi: 62 },
      { label: "2.ª cuerda", midi: 69 },
      { label: "1.ª cuerda", midi: 76 },
    ],
    tuningName: "Afinación estándar en quintas (Sol Re La Mi)",
    sections: [
      {
        heading: "Afinar en quintas, como en la orquesta",
        blocks: [
          {
            type: "p",
            text: "Las cuatro cuerdas del violín están separadas por quintas justas (siete semitonos). Cuando dos cuerdas vecinas suenan juntas y bien afinadas, el sonido es limpio y quieto; si una está un poco desafinada, se oye una ondulación que se acelera cuanto más lejos esté. En la orquesta se afina primero el La, que normalmente da el oboe, y luego cada músico ajusta las demás cuerdas por quintas.",
          },
          {
            type: "p",
            text: "El La de la 2.ª cuerda es el mismo La de referencia de 440 Hz. Si tu orquesta o tu profe afinan en 442 Hz, cámbialo en el selector «La =» antes de empezar.",
          },
        ],
      },
      {
        heading: "Clavijas o microafinadores",
        blocks: [
          {
            type: "ul",
            items: [
              "**Clavijas:** para cambios grandes, por ejemplo al poner una cuerda nueva. Gíralas poco a poco mientras las empujas suavemente hacia adentro para que no se devuelvan.",
              "**Microafinadores:** los tornillos del cordal sirven para ajustes finos de pocos cents. Muchos violines de estudio los tienen en las cuatro cuerdas; otros, solo en la de Mi.",
              "Si un microafinador llega al tope, aflójalo hasta la mitad de su recorrido y recupera la afinación con la clavija.",
            ],
          },
        ],
      },
      {
        heading: "Cómo afinar el violín de oído",
        blocks: [
          {
            type: "p",
            text: "Con el La ya afinado, toca juntas la 2.ª y la 3.ª cuerda (La y Re) con un arco largo y parejo. Si escuchas una ondulación, ajusta el Re con su microafinador hasta que el sonido quede quieto. Repite con Re y Sol, y por último con La y Mi. Al principio cuesta distinguir la ondulación; comprobar con el afinador después de cada ajuste entrena el oído muy rápido. Lo explicamos paso a paso en [cómo afinar el violín](/blog/como-afinar-el-violin).",
          },
        ],
      },
      {
        heading: "Todos los tamaños se afinan igual",
        blocks: [
          {
            type: "p",
            text: "Un violín 1/2, 3/4 o 4/4 usa las mismas notas: Sol, Re, La y Mi. Cambian el tamaño del instrumento y el de las cuerdas, no la afinación. Si estás eligiendo tamaño, mira [cómo elegir tu primer violín](/blog/como-elegir-tu-primer-violin-y-su-tamano).",
          },
        ],
      },
    ],
    tips: [
      "Para ajustes pequeños usa los microafinadores del cordal; deja las clavijas para cambios grandes.",
      "Empuja la clavija ligeramente hacia adentro mientras la giras para que no se devuelva.",
      "Afina primero el La y después Re, Sol y Mi: es el orden que usan las orquestas.",
      "Revisa que el puente siga derecho después de afinar; si se inclina, pide ayuda a tu profe.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las cuerdas del violín?",
        answer:
          "De la más grave a la más aguda: Sol, Re, La y Mi (G D A E). Están separadas por intervalos de quinta.",
      },
      {
        question: "¿Es mejor afinar con arco o pulsando la cuerda?",
        answer:
          "Con arco el sonido es más estable y el afinador lo lee mejor. Si estás empezando y te cuesta, puedes pulsar la cuerda (pizzicato) cerca del micrófono.",
      },
      {
        question: "¿Qué hago si una clavija no se queda quieta?",
        answer:
          "Suele ser por humedad o desgaste. No la fuerces: consulta a tu profe o a un luthier. Te contamos más en la [guía para cuidar tu violín](/blog/como-limpiar-y-cuidar-un-violin).",
      },
    ],
    courseId: "violin",
    relatedPostSlugs: ["como-afinar-el-violin", "como-limpiar-y-cuidar-un-violin", "como-sostener-el-arco-del-violin"],
  },
  {
    slug: "viola",
    group: "cuerdas",
    name: "viola",
    gender: "f",
    headline: "Afinador de viola online",
    metaDescription:
      "Afina tu viola gratis con el micrófono: cuerdas Do Sol Re La, notas de referencia y consejos para afinar en quintas. Sin instalar nada.",
    intro:
      "La viola se afina una quinta por debajo del violín: Do, Sol, Re y La. Toca cada cuerda al aire y sigue la aguja hasta que quede en el centro.",
    strings: [
      { label: "4.ª cuerda", midi: 48 },
      { label: "3.ª cuerda", midi: 55 },
      { label: "2.ª cuerda", midi: 62 },
      { label: "1.ª cuerda", midi: 69 },
    ],
    tuningName: "Afinación estándar en quintas (Do Sol Re La)",
    sections: [
      {
        heading: "La viola, el violín y la clave de Do",
        blocks: [
          {
            type: "p",
            text: "La viola comparte tres cuerdas con el violín, en la misma altura exacta: Sol3, Re4 y La4. En lugar del Mi agudo, tiene un Do grave (Do3), una octava por debajo del Do central. Por eso su música se escribe sobre todo en clave de Do en tercera línea, donde la línea del medio del pentagrama es el Do central.",
          },
          {
            type: "p",
            text: "Como en el violín, las cuerdas están separadas por quintas justas. Afina primero el La con la referencia de 440 Hz (o la que use tu grupo) y luego compara cada pareja de cuerdas vecinas tocándolas juntas.",
          },
        ],
      },
      {
        heading: "Cómo afinar la viola de oído",
        blocks: [
          {
            type: "p",
            text: "Afina primero el La con el afinador o con el La de referencia del grupo; en la orquesta, la viola toma el mismo La del oboe que el resto de las cuerdas. Después toca juntas La y Re con un arco largo y ajusta el Re hasta que desaparezca la ondulación; sigue con Re y Sol, y termina con Sol y Do. La cuerda de Do responde más lento: dale un arco completo y espera a que el sonido se asiente antes de decidir si está alta o baja.",
          },
        ],
      },
      {
        heading: "Tamaños de viola",
        blocks: [
          {
            type: "p",
            text: "A diferencia del violín, las violas no se clasifican en fracciones sino por la longitud del cuerpo, en pulgadas o centímetros (por ejemplo, 15, 15½ o 16 pulgadas). Todas se afinan igual: Do, Sol, Re, La. Una viola más grande suele dar un Do más profundo, pero exige más extensión de brazo y de mano.",
          },
        ],
      },
    ],
    tips: [
      "La cuerda de Do es gruesa y tarda en estabilizarse: pasa el arco con un sonido largo y parejo.",
      "Usa microafinadores para ajustes finos y clavijas solo para cambios grandes.",
      "Comprueba las quintas entre cuerdas vecinas tocándolas juntas: cuando están afinadas el sonido deja de 'vibrar'.",
      "Afina con el instrumento a la temperatura del lugar donde vas a tocar; la madera y las cuerdas reaccionan al clima.",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia la afinación de la viola y el violín?",
        answer:
          "Comparten tres cuerdas (Sol, Re, La), pero la viola cambia el Mi agudo por un Do grave. Lee nuestra comparación [violín o viola](/blog/violin-o-viola-diferencias).",
      },
      {
        question: "¿Puedo usar un afinador de violín para la viola?",
        answer:
          "Sí, si es cromático como este. Solo asegúrate de buscar Do, Sol, Re y La en vez de Sol, Re, La y Mi.",
      },
      {
        question: "¿Cada cuánto debo afinar la viola?",
        answer:
          "Antes de cada práctica. Los cambios de clima, sobre todo entre Bogotá y tierra caliente, mueven la afinación de los instrumentos de madera.",
      },
    ],
    courseId: "viola",
    relatedPostSlugs: ["violin-o-viola-diferencias", "como-limpiar-y-cuidar-un-violin", "como-afinar-el-violin"],
  },
  {
    slug: "violonchelo",
    group: "cuerdas",
    name: "violonchelo",
    gender: "m",
    headline: "Afinador de violonchelo online",
    metaDescription:
      "Afina tu violonchelo (chelo) gratis con el micrófono: cuerdas Do Sol Re La, notas de referencia y consejos de afinación. Directo en el navegador.",
    intro:
      "El violonchelo se afina en quintas: Do, Sol, Re y La. Pasa el arco por cada cuerda al aire cerca del micrófono y ajusta hasta que la aguja quede en el centro.",
    strings: [
      { label: "4.ª cuerda", midi: 36 },
      { label: "3.ª cuerda", midi: 43 },
      { label: "2.ª cuerda", midi: 50 },
      { label: "1.ª cuerda", midi: 57 },
    ],
    tuningName: "Afinación estándar en quintas (Do Sol Re La)",
    sections: [
      {
        heading: "Una octava por debajo de la viola",
        blocks: [
          {
            type: "p",
            text: "Las cuerdas del chelo son Do2, Sol2, Re3 y La3: las mismas notas de la viola, una octava más graves. Su La vibra a 220 Hz, exactamente la mitad del La de referencia de 440 Hz, así que el afinador lo reconoce como La aunque suene más grave. Los chelos de 1/4, 1/2, 3/4 y 4/4 se afinan con las mismas notas.",
          },
        ],
      },
      {
        heading: "Afinar con armónicos",
        blocks: [
          {
            type: "p",
            text: "Los armónicos suenan más estables que la cuerda al aire y son fáciles de comparar. Toca suavemente, sin presionar, en el punto exacto de la mitad de la cuerda: suena una octava más aguda y el afinador la lee como la misma cuerda.",
          },
          {
            type: "p",
            text: "Para comparar dos cuerdas vecinas, toca el armónico a un tercio de la longitud de la cuerda grave y el de la mitad de la cuerda aguda: deben sonar igual. Por ejemplo, el armónico a un tercio de la cuerda de Re da un La4, igual al armónico de la mitad de la cuerda de La. Así se obtienen quintas puras, un poco más abiertas que las del piano; si vas a tocar con piano, termina de ajustar cada cuerda con el afinador.",
          },
        ],
      },
      {
        heading: "Clavijas y microafinadores en el chelo",
        blocks: [
          {
            type: "p",
            text: "Muchos chelos de estudio traen microafinadores en las cuatro cuerdas; otros, solo en la de La. Úsalos para los ajustes finos y deja la clavija para los cambios grandes, girándola mientras la empujas suavemente hacia adentro para que no se devuelva. Si un microafinador llega al tope, aflójalo hasta la mitad de su recorrido y recupera la afinación con la clavija. Y si el puente empieza a inclinarse hacia el diapasón después de varias afinaciones, pide a tu profe que lo revise antes de que se deforme.",
          },
        ],
      },
    ],
    tips: [
      "Las notas graves del chelo necesitan un sonido largo y estable: usa arcos completos al afinar.",
      "Afina primero el La con el microafinador y luego baja cuerda por cuerda comparando las quintas.",
      "Si tienes que girar una clavija, afloja un poco la cuerda antes de subirla y no la sobrepases.",
      "Si el micrófono no capta bien la cuerda de Do, toca su armónico de la mitad de la cuerda.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las cuerdas del violonchelo?",
        answer:
          "De la más grave a la más aguda: Do, Sol, Re y La (C G D A), una octava por debajo de la viola.",
      },
      {
        question: "¿Por qué el afinador no reconoce mi cuerda de Do?",
        answer:
          "Las frecuencias muy graves son difíciles de captar para algunos micrófonos de celular. Acerca el micrófono al instrumento y toca con un arco firme y parejo, o usa el armónico de la mitad de la cuerda: el afinador te avisa que suena una octava arriba.",
      },
      {
        question: "¿Qué hago si el puente se inclina al afinar?",
        answer:
          "Es normal que se mueva un poco con la tensión. Si se inclina de forma visible, pide a tu profe que lo enderece. Más en nuestra [guía de cuidado del violonchelo](/blog/como-cuidar-un-violonchelo).",
      },
    ],
    courseId: "violoncello",
    relatedPostSlugs: ["como-afinar-el-violonchelo", "como-cuidar-un-violonchelo", "violin-o-violonchelo-cual-elegir"],
  },
  {
    slug: "contrabajo",
    group: "cuerdas",
    name: "contrabajo",
    gender: "m",
    headline: "Afinador de contrabajo online",
    metaDescription:
      "Afina tu contrabajo gratis con el micrófono: afinación orquestal Mi La Re Sol, notas de referencia y trucos para notas muy graves. Sin descargar nada.",
    intro:
      "El contrabajo se afina en cuartas: Mi, La, Re y Sol, con las notas más graves de la orquesta. Toca cada cuerda al aire cerca del micrófono y sigue la aguja.",
    strings: [
      { label: "4.ª cuerda", midi: 28 },
      { label: "3.ª cuerda", midi: 33 },
      { label: "2.ª cuerda", midi: 38 },
      { label: "1.ª cuerda", midi: 43 },
    ],
    tuningName: "Afinación orquestal en cuartas (Mi La Re Sol)",
    sections: [
      {
        heading: "Afinación orquestal y afinación solista",
        blocks: [
          {
            type: "p",
            text: "A diferencia del violín, la viola y el chelo, el contrabajo se afina en cuartas. La afinación orquestal es Mi1, La1, Re2 y Sol2; su cuerda de Mi vibra a apenas 41,2 Hz. Muchos solistas usan la afinación solista, un tono más aguda (Fa♯, Si, Mi, La), con cuerdas fabricadas para esa tensión. Algunos contrabajos de orquesta tienen además una extensión o una quinta cuerda para llegar más grave.",
          },
          {
            type: "table",
            caption: "Afinaciones del contrabajo",
            head: ["Afinación", "Notas (4.ª a 1.ª)", "Cuándo se usa"],
            rows: [
              ["Orquestal", "Mi1 · La1 · Re2 · Sol2", "Orquesta, banda, jazz y música popular"],
              ["Solista", "Fa♯1 · Si1 · Mi2 · La2", "Repertorio solista, con cuerdas de solista"],
            ],
          },
        ],
      },
      {
        heading: "Afinar con armónicos",
        blocks: [
          {
            type: "p",
            text: "Es el método más usado por los contrabajistas, porque los armónicos suenan más agudos y claros que las cuerdas al aire. El armónico a un cuarto de la longitud de una cuerda (dos octavas arriba) debe sonar igual que el armónico a un tercio de la cuerda vecina más aguda. Por ejemplo, ese armónico de la cuerda de Mi da un Mi3, el mismo que el armónico a un tercio de la cuerda de La.",
          },
          {
            type: "p",
            text: "Con este afinador también puedes tocar el armónico de la mitad de la cuerda: lo reconoce como la misma cuerda y te avisa que suena una octava arriba.",
          },
        ],
      },
      {
        heading: "Clavijas, cuerdas y temperatura",
        blocks: [
          {
            type: "p",
            text: "Las clavijas del contrabajo son mecánicas, con engranaje, así que no se devuelven como las del violín; aun así, un cuarto de vuelta mueve bastante la nota, por eso conviene girarlas despacio. Las cuerdas largas y gruesas tardan en reaccionar a los cambios de temperatura: si llevas el instrumento de un lugar frío a uno caliente, deja que se aclimate unos minutos antes de afinar. En pizzicato, pulsa con la yema y no con la uña, para que el ataque sea estable y el afinador lea la nota sin saltar.",
          },
        ],
      },
    ],
    tips: [
      "Los armónicos facilitan afinar: toca suavemente el armónico en la mitad de la cuerda y afina esa nota, una octava más aguda y más fácil de leer.",
      "Acerca el micrófono al instrumento: los celulares captan mal las frecuencias muy graves.",
      "Revisa el puente después de afinar; con tanta tensión puede inclinarse.",
      "Afina con el contrabajo en posición de tocar: apoyado en el piso y contra tu cuerpo, como vas a usarlo.",
    ],
    faqs: [
      {
        question: "¿Cuál es la afinación del contrabajo?",
        answer:
          "La afinación orquestal más común es Mi, La, Re, Sol (E A D G), igual a las cuatro cuerdas del bajo eléctrico. Existe también la afinación solista, un tono más aguda.",
      },
      {
        question: "¿Este afinador sirve para contrabajo con arco y pizzicato?",
        answer:
          "Sí. Con arco el sonido es más estable; en pizzicato toca con fuerza y deja sonar la nota.",
      },
      {
        question: "¿Cómo transporto un contrabajo sin desafinarlo?",
        answer:
          "Protégelo con una funda acolchada y evita cambios bruscos de temperatura. Te lo contamos en la [guía de cuidado del contrabajo](/blog/como-cuidar-un-contrabajo).",
      },
    ],
    courseId: "contrabajo",
    relatedPostSlugs: ["como-cuidar-un-contrabajo", "por-que-aprender-contrabajo", "como-elegir-un-contrabajo-para-empezar"],
  },
  {
    slug: "bajo",
    group: "cuerdas",
    name: "bajo eléctrico",
    gender: "m",
    headline: "Afinador de bajo online",
    metaDescription:
      "Afina tu bajo eléctrico gratis con el micrófono: afinación estándar Mi La Re Sol de 4 cuerdas, notas de referencia y consejos para notas graves.",
    intro:
      "El bajo de cuatro cuerdas se afina Mi, La, Re y Sol, una octava por debajo de las cuatro cuerdas graves de la guitarra. Toca cada cuerda al aire y ajusta hasta el centro.",
    strings: [
      { label: "4.ª cuerda", midi: 28 },
      { label: "3.ª cuerda", midi: 33 },
      { label: "2.ª cuerda", midi: 38 },
      { label: "1.ª cuerda", midi: 43 },
    ],
    tuningName: "Afinación estándar de 4 cuerdas (Mi La Re Sol)",
    sections: [
      {
        heading: "El bajo y la guitarra",
        blocks: [
          {
            type: "p",
            text: "Mi1, La1, Re2 y Sol2 son las mismas notas de las cuatro cuerdas graves de la guitarra, una octava más abajo. Por eso un guitarrista reconoce de inmediato las posiciones del bajo, y por eso el bajo y el contrabajo comparten afinación. Entre cada cuerda hay una cuarta justa: la nota del traste 5 de una cuerda es la nota al aire de la siguiente.",
          },
        ],
      },
      {
        heading: "Afinar con armónicos",
        blocks: [
          {
            type: "p",
            text: "Los armónicos son la forma más usada de comprobar el bajo de oído: el armónico del traste 5 de una cuerda debe sonar igual que el armónico del traste 7 de la cuerda siguiente (más aguda). Si se oye una ondulación entre los dos, una de las cuerdas está desafinada.",
          },
          {
            type: "p",
            text: "En este afinador también puedes tocar el armónico del traste 12 (una octava arriba) o el del traste 5 (dos octavas arriba) de cada cuerda: el afinador los reconoce como esa misma cuerda y te avisa cuántas octavas arriba suenan. Es muy útil cuando el micrófono del celular no capta bien la cuerda de Mi al aire. ¿Tienes un bajo de cinco cuerdas? Usa el [afinador de bajo de 5 cuerdas](/herramientas/afinador/bajo-5-cuerdas).",
          },
        ],
      },
      {
        heading: "Cuando el bajo afina al aire pero no en los trastes",
        blocks: [
          {
            type: "p",
            text: "Si cambiaste de calibre de cuerdas o el bajo pasó por un cambio fuerte de clima, revisa la octavación: afina la cuerda al aire y compárala con la nota pisada en el traste 12, que debe ser exactamente la misma nota una octava arriba. Si el traste 12 suena alto, la silleta de esa cuerda en el puente debe alejarse del mástil; si suena bajo, acercarse. Es un ajuste fino que se hace con un destornillador, pero si no estás seguro, déjalo en manos de un técnico.",
          },
        ],
      },
    ],
    tips: [
      "Afina con el bajo conectado al amplificador a volumen moderado: el micrófono capta mejor las notas graves.",
      "Usa el armónico del traste 12 si la nota al aire es muy grave para tu micrófono.",
      "Afina subiendo hacia la nota para que la cuerda se asiente en la clavija.",
      "Si las cuerdas al aire están afinadas pero el traste 12 no da la octava exacta, la octavación del puente necesita ajuste.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas del bajo de 4 cuerdas?",
        answer: "De la más grave a la más aguda: Mi, La, Re y Sol (E A D G).",
      },
      {
        question: "¿Sirve para bajo de 5 cuerdas?",
        answer:
          "Para las cuatro cuerdas que comparten, sí. Para la quinta cuerda grave, en Si (B0), usa el [afinador de bajo de 5 cuerdas](/herramientas/afinador/bajo-5-cuerdas), que amplía el rango de detección hasta esa nota.",
      },
      {
        question: "¿Por qué el afinador salta entre notas en la cuerda de Mi?",
        answer:
          "Las notas muy graves tienen armónicos fuertes. Toca la cuerda con suavidad cerca del mástil y espera a que el sonido se estabilice.",
      },
    ],
    courseId: "bajo-electrico",
    relatedPostSlugs: ["como-afinar-el-bajo-electrico", "como-cuidar-un-bajo-electrico", "como-elegir-tu-primer-bajo-electrico"],
  },
  {
    slug: "bajo-5-cuerdas",
    group: "cuerdas",
    name: "bajo de 5 cuerdas",
    gender: "m",
    headline: "Afinador de bajo de 5 cuerdas online",
    seoTitle: "Afinador de bajo de 5 cuerdas gratis",
    metaDescription:
      "Afina tu bajo de 5 cuerdas gratis con el micrófono: Si Mi La Re Sol, frecuencias de cada cuerda y trucos para que el celular capte la Si grave.",
    intro:
      "El bajo de cinco cuerdas suma una cuerda grave de Si a las cuatro del bajo tradicional: Si, Mi, La, Re, Sol. Esa Si vibra a unos 30,9 Hz, así que en esta página el afinador amplía su rango para poder leerla.",
    strings: [
      { label: "5.ª cuerda", midi: 23 },
      { label: "4.ª cuerda", midi: 28 },
      { label: "3.ª cuerda", midi: 33 },
      { label: "2.ª cuerda", midi: 38 },
      { label: "1.ª cuerda", midi: 43 },
    ],
    tuningName: "Afinación estándar de 5 cuerdas (Si Mi La Re Sol)",
    stringsNote: [
      "Las cinco cuerdas están separadas por cuartas justas, también la nueva: de Si a Mi hay cinco semitonos, igual que entre las demás. Así, las digitaciones que conoces en el bajo de cuatro se repiten una cuerda más abajo, y la Si pisada en el traste 5 suena igual que la 4.ª cuerda al aire.",
    ],
    sections: [
      {
        heading: "Cómo afinar la cuerda Si grave",
        blocks: [
          {
            type: "p",
            text: "Muchos micrófonos de celular y de computador portátil captan mal frecuencias tan bajas: oyen sobre todo los armónicos de la cuerda, no su nota fundamental. Si el afinador no reacciona con la Si al aire, prueba en este orden:",
          },
          {
            type: "ol",
            items: [
              "Conecta el bajo al amplificador a volumen moderado y acerca el celular al parlante.",
              "Toca el armónico del traste 12 (Si1, 61,74 Hz). El afinador lo reconoce como la 5.ª cuerda y te avisa que suena una octava arriba.",
              "Comprueba de oído: la Si pisada en el traste 5 debe sonar igual que la 4.ª cuerda (Mi) al aire.",
            ],
          },
        ],
      },
      {
        heading: "Si grave o Do agudo",
        blocks: [
          {
            type: "p",
            text: "La configuración más común del bajo de cinco cuerdas es Si-Mi-La-Re-Sol, con la cuerda extra en el grave. Algunos bajistas prefieren una cuerda aguda de Do, también a una cuarta: Mi-La-Re-Sol-Do. Si es tu caso, afina las cuatro primeras con el [afinador de bajo](/herramientas/afinador/bajo) y busca Do3 (130,81 Hz) en el [afinador cromático](/herramientas/afinador). Los bajos de seis cuerdas suelen combinar las dos: Si-Mi-La-Re-Sol-Do.",
          },
        ],
      },
    ],
    tips: [
      "Afina primero la 4.ª cuerda (Mi), que el micrófono lee mejor, y usa el traste 5 de la Si para comprobarla.",
      "Silencia con la palma las cuerdas que no estás afinando: las cuerdas graves vibran por simpatía con mucha facilidad.",
      "Si la Si se siente floja o zumba contra los trastes, puede necesitar un calibre más grueso o un ajuste del mástil; consúltalo con un técnico.",
      "Toca con la yema y deja sonar la nota unos segundos: el ataque de una cuerda tan grave dura más en estabilizarse.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas del bajo de 5 cuerdas?",
        answer: "De la más grave a la más aguda: Si, Mi, La, Re y Sol (B E A D G). Las cuatro últimas son las mismas del bajo de cuatro cuerdas.",
      },
      {
        question: "¿Por qué el afinador no detecta mi cuerda Si?",
        answer:
          "Porque su nota fundamental, cerca de 31 Hz, está por debajo de lo que capta bien la mayoría de micrófonos pequeños. Conecta el bajo al amplificador o toca el armónico del traste 12: el afinador lo reconoce como la misma cuerda.",
      },
      {
        question: "¿Necesito cuerdas especiales?",
        answer:
          "Sí: los juegos para bajo de cinco cuerdas traen una Si mucho más gruesa que la Mi, pensada para esa tensión. No intentes afinar una cuerda de Mi hasta Si: quedaría floja y sin sonido definido.",
      },
    ],
    courseId: "bajo-electrico",
    relatedPostSlugs: ["como-afinar-el-bajo-electrico", "como-elegir-tu-primer-bajo-electrico", "guitarra-o-bajo-cual-aprender"],
  },
  {
    slug: "ukelele",
    group: "cuerdas",
    name: "ukelele",
    gender: "m",
    headline: "Afinador de ukelele online",
    metaDescription:
      "Afina tu ukelele gratis con el micrófono: afinación estándar Sol Do Mi La (GCEA), notas de referencia y consejos. Para soprano, concierto y tenor.",
    intro:
      "La afinación estándar del ukelele soprano, concierto y tenor es Sol, Do, Mi, La (G C E A), con la cuarta cuerda más aguda que la tercera. Toca cada cuerda y sigue la aguja.",
    strings: [
      { label: "4.ª cuerda", midi: 67 },
      { label: "3.ª cuerda", midi: 60 },
      { label: "2.ª cuerda", midi: 64 },
      { label: "1.ª cuerda", midi: 69 },
    ],
    tuningName: "Afinación estándar reentrante (Sol Do Mi La)",
    stringsNote: [
      "La 4.ª cuerda (Sol4) suena más aguda que la 3.ª (Do4): es una afinación reentrante. La nota más grave del ukelele está en la 3.ª cuerda, no en la 4.ª.",
    ],
    sections: [
      {
        heading: "Por qué la 4.ª cuerda es aguda",
        blocks: [
          {
            type: "p",
            text: "En la afinación reentrante, las cuatro cuerdas quedan dentro de un registro muy estrecho, menos de una octava entre la más grave y la más aguda. Por eso los acordes del ukelele suenan compactos y brillantes, y por eso el rasgueo no busca un bajo profundo como en la guitarra.",
          },
        ],
      },
      {
        heading: "Cómo comprobar el ukelele de oído",
        blocks: [
          {
            type: "p",
            text: "Con la 3.ª cuerda (Do) afinada, el resto se comprueba con trastes de referencia. Como la afinación es reentrante, la 4.ª cuerda se compara con la 3.ª pisada, no al revés:",
          },
          {
            type: "table",
            caption: "Comprobación de oído del ukelele",
            head: ["Pisa", "En el traste", "Debe sonar igual que"],
            rows: [
              ["3.ª cuerda (Do)", "4", "2.ª al aire (Mi)"],
              ["2.ª cuerda (Mi)", "5", "1.ª al aire (La)"],
              ["3.ª cuerda (Do)", "7", "4.ª al aire (Sol)"],
              ["4.ª cuerda (Sol)", "2", "1.ª al aire (La)"],
            ],
          },
        ],
      },
      {
        heading: "Low G y ukelele barítono",
        blocks: [
          {
            type: "table",
            caption: "Afinaciones del ukelele",
            head: ["Tipo", "Notas (4.ª a 1.ª)", "Qué cambia"],
            rows: [
              ["Soprano, concierto y tenor", "Sol4 · Do4 · Mi4 · La4", "Afinación estándar reentrante"],
              ["Low G (sobre todo en tenor)", "Sol3 · Do4 · Mi4 · La4", "La 4.ª cuerda baja una octava y necesita una cuerda más gruesa"],
              ["Barítono", "Re3 · Sol3 · Si3 · Mi4", "Igual que las cuatro cuerdas agudas de la guitarra"],
            ],
          },
          {
            type: "p",
            text: "Este afinador está configurado para la afinación estándar. Para low G o barítono, usa el [afinador cromático](/herramientas/afinador) y busca las notas de la tabla.",
          },
        ],
      },
    ],
    tips: [
      "La cuarta cuerda (Sol) es más aguda que la tercera: es la afinación 'reentrante' que da el sonido típico del ukelele.",
      "Las cuerdas de nailon se estiran mucho al principio; afina varias veces por práctica la primera semana.",
      "Si el ukelele pasa de un sitio frío a uno caliente, espera unos minutos antes de afinar.",
      "Comprueba el acorde al aire: en afinación estándar, las cuatro cuerdas juntas forman un acorde de Do con sexta (Do, Mi, Sol, La).",
    ],
    faqs: [
      {
        question: "¿Cuál es la afinación estándar del ukelele?",
        answer: "Sol, Do, Mi, La (G C E A), de la cuarta cuerda a la primera.",
      },
      {
        question: "¿Y el ukelele barítono?",
        answer:
          "Se afina Re, Sol, Si, Mi (D G B E), como las cuatro cuerdas agudas de la guitarra. El afinador es cromático, así que funciona igual.",
      },
      {
        question: "¿Aprender ukelele ayuda para la guitarra?",
        answer:
          "Sí: comparte la lógica de acordes y trastes. Si quieres dar el paso, mira nuestras [clases de guitarra](/clases/guitarra-acustica).",
      },
    ],
    relatedPostSlugs: ["acordes-basicos-de-guitarra-para-principiantes", "guitarra-o-tiple", "como-afinar-la-guitarra"],
  },
  {
    slug: "mandolina",
    group: "cuerdas",
    name: "mandolina",
    gender: "f",
    headline: "Afinador de mandolina online",
    metaDescription:
      "Afina tu mandolina gratis con el micrófono: cuatro órdenes dobles en Sol Re La Mi, como el violín, con frecuencias y consejos para igualar cada par.",
    intro:
      "La mandolina se afina igual que el violín: Sol, Re, La y Mi, en cuatro órdenes de dos cuerdas. Las dos cuerdas de cada orden suenan al unísono: afina una, luego la otra, y compáralas.",
    strings: [
      { label: "4.º orden (2 cuerdas)", midi: 55 },
      { label: "3.er orden (2 cuerdas)", midi: 62 },
      { label: "2.º orden (2 cuerdas)", midi: 69 },
      { label: "1.er orden (2 cuerdas)", midi: 76 },
    ],
    tuningName: "Afinación estándar en quintas (Sol Re La Mi)",
    stringsNote: [
      "Las ocho cuerdas metálicas forman cuatro pares, y las dos cuerdas de cada par se afinan en la misma nota. Cuando no coinciden del todo, se oye una ondulación (un batimiento); a medida que las igualas, la ondulación se hace más lenta hasta desaparecer.",
    ],
    sections: [
      {
        heading: "Afinación en quintas, como el violín",
        blocks: [
          {
            type: "p",
            text: "Sol3, Re4, La4 y Mi5 son exactamente las notas del violín, separadas por quintas justas. Quien toca violín reconoce de inmediato las posiciones de la mano izquierda, con la diferencia de que la mandolina tiene trastes y se toca con plectro. Por la misma razón, buena parte del repertorio de violín se puede leer en la mandolina.",
          },
        ],
      },
      {
        heading: "Mandolina, mandola y bandola",
        blocks: [
          {
            type: "table",
            caption: "Instrumentos parecidos, afinaciones distintas",
            head: ["Instrumento", "Afinación", "Intervalo entre órdenes"],
            rows: [
              ["Mandolina", "Sol3 · Re4 · La4 · Mi5", "Quintas, como el violín"],
              ["Mandola", "Do3 · Sol3 · Re4 · La4", "Quintas, como la viola"],
              ["Mandolonchelo", "Do2 · Sol2 · Re3 · La3", "Quintas, como el violonchelo"],
              ["Bandola andina colombiana", "Fa♯3 · Si3 · Mi4 · La4 · Re5 · Sol5", "Cuartas, en seis órdenes"],
            ],
          },
          {
            type: "p",
            text: "Para la mandola y el mandolonchelo usa los afinadores de [viola](/herramientas/afinador/viola) y [violonchelo](/herramientas/afinador/violonchelo); para la bandola, el [afinador de bandola andina](/herramientas/afinador/bandola-andina).",
          },
        ],
      },
    ],
    tips: [
      "Afina las dos cuerdas de cada orden por separado, apagando la otra con un dedo, y después tócalas juntas para escuchar si quedó alguna ondulación.",
      "En muchas mandolinas el puente no va pegado a la tapa: lo sostiene la presión de las cuerdas. Si cambias todas a la vez, marca antes su posición.",
      "Usa el plectro con un ataque suave al afinar; un golpe fuerte sube la nota durante el primer instante.",
      "Las cuerdas del 1.er orden (Mi5) son las más delgadas y tensas: sube despacio y no te pases de la nota.",
    ],
    faqs: [
      {
        question: "¿La mandolina se afina como el violín?",
        answer:
          "Sí: Sol, Re, La y Mi, en las mismas octavas. La diferencia es que cada nota de la mandolina tiene dos cuerdas afinadas al unísono.",
      },
      {
        question: "¿Qué hago si las dos cuerdas de un orden no suenan igual?",
        answer:
          "Afina primero una con el afinador y luego iguala la otra de oído hasta que desaparezca la ondulación. Si al pisarlas en los trastes altos vuelven a separarse, el puente puede estar mal ubicado.",
      },
      {
        question: "¿Sirve para la mandolina brasileña (bandolim)?",
        answer: "Sí: el bandolim del choro brasileño usa la misma afinación, Sol, Re, La, Mi.",
      },
    ],
    relatedPostSlugs: ["como-afinar-el-violin", "como-guardar-instrumentos-humedad-y-clima-en-colombia", "instrumento-nuevo-o-usado-que-revisar-antes-de-comprar"],
  },
];

const COLOMBIAN_PRESETS: TunerPreset[] = [
  {
    slug: "tiple",
    group: "colombianos",
    name: "tiple",
    gender: "m",
    headline: "Afinador de tiple online",
    seoTitle: "Afinador de tiple colombiano online gratis",
    metaDescription:
      "Afina tu tiple colombiano gratis con el micrófono: Re Sol Si Mi en 4 órdenes, con las cuerdas centrales en octava separadas para afinar una por una.",
    intro:
      "El tiple tiene 12 cuerdas metálicas en cuatro órdenes de tres, afinados Re, Sol, Si y Mi. Este afinador separa cada nota real, porque en tres de los órdenes la cuerda del centro suena una octava más grave que las laterales.",
    strings: [
      { label: "4.º orden: cuerda central", midi: 50 },
      { label: "4.º orden: cuerdas laterales", midi: 62 },
      { label: "3.er orden: cuerda central", midi: 55 },
      { label: "3.er orden: cuerdas laterales", midi: 67 },
      { label: "2.º orden: cuerda central", midi: 59 },
      { label: "2.º orden: cuerdas laterales", midi: 71 },
      { label: "1.er orden: las 3 cuerdas", midi: 64 },
    ],
    tuningName: "Afinación del tiple colombiano (Re Sol Si Mi)",
    stringsNote: [
      "**1.er orden (Mi):** sus tres cuerdas son lisas y suenan al unísono, en Mi4.",
      "**2.º, 3.er y 4.º orden (Si, Sol, Re):** las dos cuerdas laterales son lisas y suenan igual; la del centro, más gruesa y entorchada, suena una octava más grave. Por eso cada uno de esos órdenes aparece dos veces en la tabla.",
      "Ojo con un detalle que confunde a muchos: las laterales del 2.º orden (Si4) suenan más agudas que el 1.er orden (Mi4). Es la afinación normal del tiple, la misma que indican los fabricantes de cuerdas para este instrumento. Algunos tiples antiguos o con encordados especiales cambian la posición de la cuerda en octava; si el tuyo viene distinto, confírmalo con tu profe antes de tensar.",
    ],
    sections: [
      {
        heading: "Cómo afinar el tiple orden por orden",
        blocks: [
          {
            type: "ol",
            items: [
              "Deja el afinador en **Auto** o toca el botón de la nota que vas a afinar. Apaga con la mano las cuerdas que no estás tocando.",
              "Empieza por el 1.er orden: afina una cuerda en Mi4 y luego las otras dos hasta que las tres suenen como una sola.",
              "En el 2.º orden, afina las dos laterales en Si4 y después la central, la gruesa, en Si3.",
              "Repite con el 3.er orden (laterales en Sol4, central en Sol3) y el 4.º (laterales en Re4, central en Re3).",
              "Da una segunda vuelta completa: doce cuerdas metálicas suman mucha tensión y, al afinar un orden, los demás se mueven.",
            ],
          },
          {
            type: "p",
            text: "Si quieres aprender a comprobarlo de oído, con batimientos y trastes de referencia, sigue la guía paso a paso de [cómo afinar el tiple](/blog/como-afinar-el-tiple).",
          },
        ],
      },
      {
        heading: "Tiple y guitarra: qué notas comparten",
        blocks: [
          {
            type: "p",
            text: "El tiple usa los mismos nombres de nota que las cuatro cuerdas agudas de la guitarra: Re, Sol, Si y Mi. Más aún, las cuerdas centrales del 2.º, 3.er y 4.º orden (Si3, Sol3 y Re3) y el 1.er orden (Mi4) suenan exactamente a la misma altura que las cuerdas 2.ª, 3.ª, 4.ª y 1.ª de la guitarra. Si tienes una guitarra bien afinada, puedes usarla para comprobar esas cuerdas al unísono, y las laterales, una octava arriba.",
          },
        ],
      },
      {
        heading: "La afinación tradicional, un tono más abajo",
        blocks: [
          {
            type: "p",
            text: "Además del temple Re-Sol-Si-Mi, el más usado hoy, existe una afinación tradicional un tono más grave: Do, Fa, La, Re, con las mismas cuerdas en octava. También se la conoce como afinación en si bemol. Si tu profe o tu grupo la usan, el [afinador cromático](/herramientas/afinador) te sirve: toca cada cuerda y busca Do, Fa, La y Re.",
          },
        ],
      },
    ],
    tips: [
      "Sigue cada cuerda con el dedo hasta su clavija antes de girar: son 12 clavijas y es fácil mover la equivocada.",
      "Si una cuerda central se siente durísima, detente: probablemente la estás subiendo a la octava de las laterales y puede reventarse.",
      "Pulsa una sola cuerda a la vez; con varias sonando, el micrófono no sabe cuál escuchar.",
      "Llega a la nota siempre desde abajo; si te pasaste, baja un poco y vuelve a subir.",
    ],
    faqs: [
      {
        question: "¿Por qué el afinador muestra dos notas para el mismo orden?",
        answer:
          "Porque en el 2.º, 3.er y 4.º orden las cuerdas no suenan en la misma octava: las dos laterales van una octava por encima de la central. Cada botón corresponde a una altura distinta para que afines cada cuerda con precisión.",
      },
      {
        question: "¿Cuáles son las notas del tiple?",
        answer:
          "Del 4.º orden al 1.º: Re, Sol, Si y Mi. En octavas: Re4-Re3-Re4, Sol4-Sol3-Sol4, Si4-Si3-Si4 y Mi4-Mi4-Mi4.",
      },
      {
        question: "¿El requinto se afina igual que el tiple?",
        answer:
          "Usa las mismas notas, pero sin cuerdas en octava: las tres cuerdas de cada orden suenan al unísono. Usa el [afinador de tiple requinto](/herramientas/afinador/tiple-requinto).",
      },
      {
        question: "¿Cada cuánto debo afinar el tiple?",
        answer:
          "Cada vez que vayas a tocar. Los cambios de clima mueven mucho la afinación de tantas cuerdas metálicas; te contamos cómo protegerlo en la guía para [cuidar el tiple y la bandola](/blog/como-cuidar-un-tiple-y-una-bandola).",
      },
    ],
    courseId: "tiple",
    relatedPostSlugs: ["como-afinar-el-tiple", "como-cuidar-un-tiple-y-una-bandola", "guitarra-o-tiple"],
  },
  {
    slug: "tiple-requinto",
    group: "colombianos",
    name: "tiple requinto",
    gender: "m",
    headline: "Afinador de tiple requinto online",
    seoTitle: "Afinador de requinto colombiano (tiple requinto)",
    metaDescription:
      "Afina tu tiple requinto o requinto colombiano gratis con el micrófono: Re Sol Si Mi, doce cuerdas al unísono por orden, sin cuerdas en octava.",
    intro:
      "El tiple requinto, o requinto colombiano, usa las mismas notas que el tiple —Re, Sol, Si y Mi— pero sus 12 cuerdas suenan al unísono dentro de cada orden: no lleva cuerdas en octava. Toca cada orden y ajusta hasta el centro.",
    strings: [
      { label: "4.º orden (3 cuerdas)", midi: 62 },
      { label: "3.er orden (3 cuerdas)", midi: 67 },
      { label: "2.º orden (3 cuerdas)", midi: 71 },
      { label: "1.er orden (3 cuerdas)", midi: 64 },
    ],
    tuningName: "Afinación del tiple requinto (Re Sol Si Mi al unísono)",
    stringsNote: [
      "Cada orden tiene tres cuerdas lisas afinadas en la misma nota: Re4, Sol4, Si4 y Mi4, las mismas alturas de las cuerdas laterales del tiple.",
      "Es una afinación reentrante: el 2.º orden (Si4) suena más agudo que el 1.º (Mi4). Ese registro compacto y brillante es el que hace del requinto un instrumento de melodía.",
    ],
    sections: [
      {
        heading: "Qué es el tiple requinto",
        blocks: [
          {
            type: "p",
            text: "Es una variante más pequeña del tiple, de sonido más brillante, que se toca con plectro y suele llevar la melodía. En algunas zonas andinas cumple el papel melódico que en otras tiene la bandola, y es uno de los instrumentos de la carranga de Boyacá, la música popularizada por Jorge Velosa, junto al tiple, la guitarra y la guacharaca.",
          },
        ],
      },
      {
        heading: "Requinto colombiano y requinto de trío",
        blocks: [
          {
            type: "p",
            text: "En los tríos de boleros se llama requinto a una guitarra pequeña de seis cuerdas, que se afina distinto. Este afinador es para el tiple requinto colombiano de 12 cuerdas en cuatro órdenes. Si tienes un requinto de seis cuerdas, usa el [afinador cromático](/herramientas/afinador) con las notas que te indique tu profe.",
          },
        ],
      },
      {
        heading: "Del tiple al requinto",
        blocks: [
          {
            type: "table",
            caption: "Tiple y tiple requinto, orden por orden",
            head: ["Orden", "Tiple", "Tiple requinto"],
            rows: [
              ["4.º", "Re4 · Re3 · Re4", "Re4 · Re4 · Re4"],
              ["3.º", "Sol4 · Sol3 · Sol4", "Sol4 · Sol4 · Sol4"],
              ["2.º", "Si4 · Si3 · Si4", "Si4 · Si4 · Si4"],
              ["1.º", "Mi4 · Mi4 · Mi4", "Mi4 · Mi4 · Mi4"],
            ],
          },
          {
            type: "p",
            text: "Las posiciones de acordes y escalas son las mismas en los dos instrumentos. Lo que cambia es el sonido: sin las cuerdas centrales graves, el requinto pierde cuerpo en los bajos y gana claridad para puntear.",
          },
        ],
      },
    ],
    tips: [
      "Afina primero una cuerda de cada orden y luego iguala las otras dos de oído, hasta que las tres suenen como una sola.",
      "Las cuerdas del 2.º orden (Si4) son las más delgadas y agudas: súbelas despacio.",
      "Pulsa cada cuerda por separado con el plectro y un ataque suave.",
      "Repasa todos los órdenes al final: la tensión de doce cuerdas mueve la afinación de las demás.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas del requinto colombiano?",
        answer: "Del 4.º orden al 1.º: Re4, Sol4, Si4 y Mi4, con las tres cuerdas de cada orden al unísono.",
      },
      {
        question: "¿En qué se diferencia de la afinación del tiple?",
        answer:
          "En el tiple, la cuerda central del 2.º, 3.er y 4.º orden suena una octava más grave. En el requinto, las tres cuerdas de cada orden suenan igual. Si tocas tiple, usa el [afinador de tiple](/herramientas/afinador/tiple).",
      },
      {
        question: "¿Puedo usar cuerdas de tiple en el requinto?",
        answer:
          "No es lo ideal: los juegos de requinto no traen cuerdas entorchadas para el centro de los órdenes, porque todas suenan en la octava aguda. Pide un juego hecho para requinto.",
      },
    ],
    relatedPostSlugs: ["como-afinar-el-tiple", "musica-andina-colombiana-guia-para-empezar", "instrumentos-tipicos-de-colombia"],
  },
  {
    slug: "bandola-andina",
    group: "colombianos",
    name: "bandola andina",
    gender: "f",
    headline: "Afinador de bandola andina online",
    seoTitle: "Afinador de bandola andina colombiana gratis",
    metaDescription:
      "Afina tu bandola andina colombiana gratis con el micrófono: seis órdenes en cuartas, Sol Re La Mi Si Fa♯, con frecuencias y consejos de afinación.",
    intro:
      "La bandola andina colombiana se afina por cuartas en seis órdenes: Sol, Re, La, Mi, Si y Fa♯, del primero al sexto. Todas las cuerdas de un mismo orden suenan al unísono, así que basta con afinar seis notas.",
    strings: [
      { label: "6.º orden", midi: 54 },
      { label: "5.º orden", midi: 59 },
      { label: "4.º orden", midi: 64 },
      { label: "3.er orden", midi: 69 },
      { label: "2.º orden", midi: 74 },
      { label: "1.er orden", midi: 79 },
    ],
    tuningName: "Afinación de la bandola andina en cuartas (Sol Re La Mi Si Fa♯)",
    stringsNote: [
      "Según el instrumento, la bandola tiene 12, 14, 16 o 18 cuerdas, en órdenes dobles, triples o una mezcla de los dos; por ejemplo, la de 16 cuerdas suele llevar triples los cuatro primeros órdenes y dobles los dos últimos. En todos los casos, las cuerdas de un mismo orden se afinan en la misma nota.",
      "El 3.er orden es el La de 440 Hz, el mismo La de referencia del diapasón. Por eso muchos bandolistas afinan primero ese orden y luego los demás por cuartas.",
    ],
    sections: [
      {
        heading: "Cómo comprobar las cuartas de oído",
        blocks: [
          {
            type: "p",
            text: "Entre un orden y el siguiente hay siempre una cuarta justa (cinco semitonos). Para comprobarlo, pisa un orden en el traste 5: debe sonar igual que el orden siguiente al aire, que es más agudo.",
          },
          {
            type: "table",
            caption: "Comprobación con el traste 5",
            head: ["Pisa", "En el traste", "Debe sonar igual que"],
            rows: [
              ["6.º orden (Fa♯)", "5", "5.º al aire (Si)"],
              ["5.º orden (Si)", "5", "4.º al aire (Mi)"],
              ["4.º orden (Mi)", "5", "3.º al aire (La)"],
              ["3.er orden (La)", "5", "2.º al aire (Re)"],
              ["2.º orden (Re)", "5", "1.º al aire (Sol)"],
            ],
          },
          {
            type: "p",
            text: "A diferencia de la guitarra, aquí no hay excepción de tercera mayor: la distancia entre órdenes es la misma en todo el instrumento, lo que hace que las escalas y los acordes se repitan con la misma forma.",
          },
        ],
      },
      {
        heading: "De cuatro a seis órdenes: un poco de historia",
        blocks: [
          {
            type: "p",
            text: "Según el bandolista y pedagogo Jairo Rincón Gómez (revista «A Contratiempo», 1989), la bandola empezó con cuatro órdenes pareados afinados Sol, Re, La y Mi. Hacia 1860 Diego Fallón le agregó el orden de Si y hacia 1890 el maestro Pedro Morales Pino, el de Fa♯, hasta llegar a los seis órdenes actuales.",
          },
          {
            type: "p",
            text: "Rincón cuenta también que, al pasar a bandolas de 16 y 18 cuerdas, la tensión aumentó y muchos músicos empezaron a afinarlas más grave, de forma «relativa», como un instrumento transpositor en si bemol, es decir, un tono más abajo. Si tu grupo usa esa afinación, el afinador cromático te sirve igual: busca cada nota un tono por debajo.",
          },
        ],
      },
    ],
    tips: [
      "Afina primero el 3.er orden (La) y luego los demás por cuartas, hacia el grave y hacia el agudo.",
      "Pulsa cada cuerda por separado con el plectro: si tocas el orden completo, el afinador recibe dos o tres cuerdas a la vez.",
      "Las cuerdas del 1.er orden (Sol5) son muy delgadas y tensas: sube despacio y nunca pases de la nota.",
      "Si la bandola está afinada al aire pero el traste 12 no da la octava exacta, puede necesitar calibración con un luthier.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas de la bandola andina colombiana?",
        answer:
          "Del 1.er orden al 6.º: Sol, Re, La, Mi, Si y Fa♯. En octavas: Sol5, Re5, La4, Mi4, Si3 y Fa♯3, separadas por cuartas justas.",
      },
      {
        question: "¿La bandola se afina como la mandolina?",
        answer:
          "No. La mandolina tiene cuatro órdenes afinados en quintas (Sol, Re, La, Mi, como el violín); la bandola andina tiene seis órdenes afinados en cuartas. Si tienes una mandolina, usa el [afinador de mandolina](/herramientas/afinador/mandolina).",
      },
      {
        question: "¿Cuántas cuerdas tiene la bandola andina?",
        answer:
          "Depende del instrumento: hay bandolas de 12, 14, 16 y 18 cuerdas. Siempre son seis órdenes, y las cuerdas de cada orden se afinan al unísono.",
      },
      {
        question: "¿Cada cuánto cambio las cuerdas de la bandola?",
        answer:
          "Cuando ya no se sostienen afinadas, suenan opacas o se ven oxidadas. Te lo explicamos en la guía para [cuidar el tiple y la bandola](/blog/como-cuidar-un-tiple-y-una-bandola).",
      },
    ],
    courseId: "bandola-andina",
    relatedPostSlugs: ["como-cuidar-un-tiple-y-una-bandola", "como-elegir-un-tiple-o-una-bandola", "por-que-aprender-tiple-y-bandola-musica-andina"],
  },
  {
    slug: "cuatro-llanero",
    group: "colombianos",
    name: "cuatro llanero",
    gender: "m",
    headline: "Afinador de cuatro llanero online",
    seoTitle: "Afinador de cuatro llanero gratis con micrófono",
    metaDescription:
      "Afina tu cuatro llanero o venezolano gratis con el micrófono: temple natural La Re Fa♯ Si, frecuencias de cada cuerda y otras afinaciones del cuatro.",
    intro:
      "El cuatro llanero se afina La, Re, Fa♯, Si, de la 4.ª cuerda a la 1.ª: la afinación que en Colombia se conoce como temple natural y en Venezuela como «cambur pintón». La 1.ª cuerda es más grave que la 2.ª: es una afinación reentrante.",
    strings: [
      { label: "4.ª cuerda", midi: 57 },
      { label: "3.ª cuerda", midi: 62 },
      { label: "2.ª cuerda", midi: 66 },
      { label: "1.ª cuerda", midi: 59 },
    ],
    tuningName: "Temple natural del cuatro (La Re Fa♯ Si)",
    stringsNote: [
      "El cuatro tiene cuatro cuerdas sencillas de nailon. La 1.ª, Si3, suena una quinta por debajo de la 2.ª (Fa♯4) y apenas un tono por encima de la 4.ª (La3). Por eso los acordes del cuatro quedan tan juntos y su rasgueo suena compacto.",
      "Al aire, las cuatro cuerdas forman un acorde de Si menor con séptima (Si, Re, Fa♯, La): un rasgueo suave es una buena forma de comprobar que todo quedó en su sitio.",
    ],
    sections: [
      {
        heading: "Otras afinaciones del cuatro",
        blocks: [
          {
            type: "table",
            caption: "Afinaciones del cuatro llanero",
            head: ["Afinación", "Notas (4.ª a 1.ª)", "Para qué se usa"],
            rows: [
              ["Temple natural o cambur pintón", "La · Re · Fa♯ · Si", "La estándar para acompañar joropo y música llanera"],
              ["Cuarta en sol o «falso transporte»", "Sol · Re · Fa♯ · Si", "Se baja un tono la 4.ª cuerda; la usaban cuatristas antiguos de los Llanos colombianos"],
              ["Afinación Fredy Reyna", "Sol · Do · Mi · La, con la 1.ª una octava más aguda", "Creada por el cuatrista venezolano Fredy Reyna para puntear melodías"],
            ],
          },
          {
            type: "p",
            text: "Este afinador está configurado en temple natural. Para las otras dos, usa el [afinador cromático](/herramientas/afinador) y busca las notas de la tabla.",
          },
        ],
      },
      {
        heading: "El cuatro en el joropo",
        blocks: [
          {
            type: "p",
            text: "En el conjunto llanero, el cuatro acompaña al arpa (o a la bandola llanera) y a las maracas con un rasgueo seco y rápido que sostiene la armonía y el ritmo. Si quieres trabajar el pulso del joropo, practica con el [metrónomo para joropo](/herramientas/metronomo/joropo).",
          },
        ],
      },
    ],
    tips: [
      "La 1.ª cuerda (Si) es más grave que la 2.ª: no la subas buscando un Si agudo, porque puedes reventarla.",
      "Las cuerdas de nailon se estiran mucho: con cuerdas nuevas, afina varias veces en cada sesión.",
      "Si el cuatro viaja entre tierra caliente y tierra fría, espera unos minutos antes de afinar: el nailon reacciona rápido a la temperatura.",
      "Afina pulsando cada cuerda con el dedo, no rasgueando: el afinador necesita escuchar una sola nota.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas del cuatro llanero?",
        answer: "De la 4.ª cuerda a la 1.ª: La3, Re4, Fa♯4 y Si3 (A D F♯ B). La 1.ª cuerda es más grave que la 2.ª.",
      },
      {
        question: "¿Sirve para el cuatro venezolano?",
        answer:
          "Sí. El cuatro llanero y el cuatro venezolano son el mismo instrumento, con la misma afinación tradicional: La, Re, Fa♯, Si.",
      },
      {
        question: "¿El cuatro puertorriqueño se afina igual?",
        answer:
          "No. El cuatro puertorriqueño tiene diez cuerdas en cinco órdenes, afinados Si, Mi, La, Re, Sol. Para ese instrumento usa el [afinador cromático](/herramientas/afinador).",
      },
    ],
    relatedPostSlugs: ["instrumentos-tipicos-de-colombia", "como-guardar-instrumentos-humedad-y-clima-en-colombia", "ritmos-de-guitarra-rasgueos-basicos"],
  },
  {
    slug: "charango",
    group: "colombianos",
    name: "charango",
    gender: "m",
    headline: "Afinador de charango online",
    metaDescription:
      "Afina tu charango gratis con el micrófono: Sol Do Mi La Mi en cinco órdenes dobles, con la cuerda en octava del tercer orden separada para afinarla.",
    intro:
      "El charango tiene diez cuerdas en cinco órdenes dobles, afinados Sol, Do, Mi, La y Mi, del 5.º al 1.º. Es una afinación reentrante: la nota más grave está en el centro, en una de las cuerdas del 3.er orden.",
    strings: [
      { label: "5.º orden (Sol)", midi: 67 },
      { label: "4.º orden (Do)", midi: 72 },
      { label: "3.er orden: cuerda grave", midi: 64 },
      { label: "3.er orden: cuerda aguda", midi: 76 },
      { label: "2.º orden (La)", midi: 69 },
      { label: "1.er orden (Mi)", midi: 76 },
    ],
    tuningName: "Afinación estándar del charango (Sol Do Mi La Mi)",
    stringsNote: [
      "Cuatro de los cinco órdenes llevan sus dos cuerdas al unísono. El 3.er orden (Mi) lleva una cuerda en Mi5 y otra una octava más grave, en Mi4: es la nota más baja del instrumento. La cuerda aguda del 3.er orden y el 1.er orden suenan igual, por eso comparten un mismo botón en el afinador.",
      "Algunos charanguistas usan cuerdas en octava también en otros órdenes. Si tu charango viene así, confírmalo con tu profe antes de afinarlo.",
    ],
    sections: [
      {
        heading: "Una afinación reentrante",
        blocks: [
          {
            type: "p",
            text: "Del 5.º al 1.er orden las notas no suben de forma continua: el Sol4 y el Do5 de los primeros órdenes están por encima del Mi4 del centro. Por eso los acordes del charango suenan brillantes y apretados, y su rasgueo tiene el timbre agudo que lo identifica en la música andina de Bolivia y Perú.",
          },
          {
            type: "p",
            text: "Al aire, el charango forma un acorde de La menor con séptima (La, Do, Mi, Sol). Algunos músicos bajan todo el instrumento medio tono o un tono para acompañar ciertas canciones; el afinador es cromático, así que en ese caso usa el [afinador cromático](/herramientas/afinador) y busca cada nota medio tono o un tono más abajo.",
          },
        ],
      },
      {
        heading: "Charango y ukelele",
        blocks: [
          {
            type: "p",
            text: "Los cuatro órdenes más graves del charango en posición (del 5.º al 2.º) usan los mismos nombres de nota del ukelele estándar: Sol, Do, Mi, La. Pero las octavas no coinciden y el charango agrega un 5.º orden en Mi, así que no se afinan igual. Para el ukelele usa el [afinador de ukelele](/herramientas/afinador/ukelele).",
          },
        ],
      },
    ],
    tips: [
      "Afina las dos cuerdas de cada orden por separado y después tócalas juntas para escuchar si quedó alguna ondulación.",
      "En el 3.er orden, la cuerda grave es la más gruesa: no la subas a Mi5, porque puede reventarse.",
      "Pulsa cerca del micrófono: las cuerdas del charango son cortas y su sonido se apaga rápido.",
      "Con cuerdas de nailon nuevas, repasa la afinación varias veces durante la primera semana.",
    ],
    faqs: [
      {
        question: "¿Cuáles son las notas del charango?",
        answer:
          "Del 5.º orden al 1.º: Sol4, Do5, Mi5 y Mi4 (3.er orden en octava), La4 y Mi5. En cifrado americano, G C E A E.",
      },
      {
        question: "¿Qué cuerda del charango va en octava?",
        answer:
          "En la afinación estándar, la del 3.er orden: una de sus dos cuerdas suena en Mi4 y la otra en Mi5. Los demás órdenes van al unísono.",
      },
      {
        question: "¿Por qué el afinador marca la misma nota en dos órdenes?",
        answer:
          "Porque la cuerda aguda del 3.er orden y las del 1.er orden suenan exactamente igual, en Mi5. Afínalas con el mismo botón.",
      },
    ],
    relatedPostSlugs: ["instrumentos-tipicos-de-colombia", "ritmos-de-guitarra-rasgueos-basicos", "como-guardar-instrumentos-humedad-y-clima-en-colombia"],
  },
];

export const TUNER_PRESETS: TunerPreset[] = [...INSTRUMENT_PRESETS, ...COLOMBIAN_PRESETS, ...GUITAR_TUNING_PRESETS];
