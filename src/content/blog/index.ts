import type { BlogPost } from "@/lib/content-types";
import { post as aQueEdadEmpezar } from "./a-que-edad-empezar-a-estudiar-musica";
import { post as domicilioOVirtual } from "./clases-de-musica-a-domicilio-o-virtuales";
import { post as elegirProfesor } from "./como-elegir-profesor-de-musica";
import { post as pianoOGuitarra } from "./piano-o-guitarra-primer-instrumento";
import { post as practicarEnCasa } from "./como-practicar-musica-en-casa";
import { post as iniciacionMusical } from "./que-es-la-iniciacion-musical";
import { post as primerasClasesCanto } from "./primeras-clases-de-canto-que-esperar";
import { post as contratarProfesores } from "./como-contratar-profesores-de-musica-para-tu-academia";
import { post as claseMuestra } from "./clase-muestra-como-evaluar-a-un-profesor-de-musica";
import { post as verificaciones } from "./verificaciones-antes-de-contratar-profesores-colombia";

/** Add new articles here. Order doesn't matter: the blog sorts by date. */
export const BLOG_POST_ENTRIES: BlogPost[] = [
  aQueEdadEmpezar,
  domicilioOVirtual,
  elegirProfesor,
  pianoOGuitarra,
  practicarEnCasa,
  iniciacionMusical,
  primerasClasesCanto,
  contratarProfesores,
  claseMuestra,
  verificaciones,
];
