import { FaqList } from "@/components/editorial/FaqList";
import type { FaqItem } from "@/lib/content-types";

export const HOME_FAQS: FaqItem[] = [
  {
    question: "¿Las clases son virtuales o presenciales?",
    answer:
      "Las dos. Puedes tomar [clases de música online](/clases-de-musica-online) en vivo desde cualquier ciudad, o [clases a domicilio en Bogotá](/clases-de-musica-a-domicilio-bogota) y alrededores, según la disponibilidad de cada profe.",
  },
  {
    question: "¿Necesito saber música para empezar?",
    answer:
      "No. La mayoría de estudiantes empieza desde cero y el profe arma la clase según tu nivel y tus objetivos. Si aún no sabes qué tocar, lee [cómo elegir entre piano o guitarra](/blog/piano-o-guitarra-primer-instrumento).",
  },
  {
    question: "¿Desde qué edad pueden empezar los niños?",
    answer:
      "Los más pequeños empiezan con [iniciación musical](/clases/iniciacion-musical): juego, ritmo y canto antes de un instrumento. Te lo explicamos en [a qué edad empezar a estudiar música](/blog/a-que-edad-empezar-a-estudiar-musica).",
  },
  {
    question: "¿Hay clases para adultos y adultos mayores?",
    answer:
      "Sí, nunca es tarde. Adaptamos el ritmo y el repertorio a cada persona. Mira los [beneficios de aprender un instrumento después de los 60](/blog/beneficios-de-aprender-un-instrumento-para-adultos-mayores).",
  },
  {
    question: "¿Cómo eligen a los profes?",
    answer:
      "Cada profe pasa por una evaluación de su nivel musical, su forma de enseñar y su trato con los estudiantes antes de dar clases. Te contamos los criterios en [cómo elegimos a los profes](/nosotros#como-elegimos).",
  },
  {
    question: "¿Preparan para las pruebas de admisión a música?",
    answer:
      "Sí. Nuestro [preuniversitario de música](/preuniversitario-musica) trabaja teoría, solfeo, dictado e instrumento para las pruebas de admisión de las universidades.",
  },
  {
    question: "¿Cuánto cuestan las clases?",
    answer:
      "El valor depende del formato, la duración y la frecuencia de las clases. Escríbenos por WhatsApp y te enviamos las opciones.",
  },
];

export function HomeFaqSection() {
  return (
    <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes" aria-labelledby="faq-home-title">
      <div className="container">
        <div className="sec-head ed-sec-head">
          <h2 id="faq-home-title">Preguntas frecuentes</h2>
          <p className="sec-sub">Lo que más nos preguntan antes de la primera clase.</p>
        </div>
        <FaqList items={HOME_FAQS} />
      </div>
    </section>
  );
}
