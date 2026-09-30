import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  GraduationCap,
  House,
  Languages,
  MapPin,
  MessageCircle,
  Video,
} from "lucide-react";
import { whatsappHref } from "@/lib/contact";
import { shortDisplayName, type Teacher } from "@/lib/teachers";

function splitBioLead(text: string) {
  const trimmed = text.trim();
  const firstSentence = trimmed.match(/^(.+?[.!?])\s+(.+)$/u);

  if (!firstSentence) {
    return { lead: trimmed, rest: "" };
  }

  return { lead: firstSentence[1], rest: firstSentence[2] };
}

export function classFormatIcon(format: string) {
  return format === "A domicilio" ? House : Video;
}

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  const instruments = teacher.skills.map((skill) => skill.label);
  const classFormats = teacher.classFormats ?? [];
  const classLanguages = teacher.classLanguages ?? [];
  const teacherContactHref = whatsappHref(
    `¡Hola! Quiero más información sobre las clases con ${teacher.name}.`,
  );
  const bio = splitBioLead(teacher.longBio);

  return (
    <li className="profe-card-wrap">
      <article
        className="profe-card"
        style={{ ["--profe-color" as string]: teacher.color }}
      >
        <Link
          href={`/profes/${teacher.slug}`}
          className="profe-card-click-target"
          aria-label={`Ver perfil de ${teacher.name}`}
        >
          <span className="visually-hidden">Ver perfil de {teacher.name}</span>
        </Link>

        <div
          className="profe-card-photo"
          style={{ borderColor: teacher.color }}
        >
          <div
            className="profe-card-photo-bg"
            style={{ background: teacher.color }}
          />
          <Image
            src={teacher.photo}
            alt={teacher.name}
            fill
            sizes="(max-width: 380px) 96px, (max-width: 560px) 118px, (max-width: 920px) 160px, 180px"
            style={
              teacher.photoPosition
                ? { objectPosition: teacher.photoPosition }
                : undefined
            }
          />
        </div>

        <div className="profe-card-body">
          <div className="profe-card-head">
            <span className="profe-card-name">
              {shortDisplayName(teacher.name)}
            </span>
            <span
              className="profe-card-badge"
              aria-label="Profesor verificado"
              title="Profesor verificado"
            >
              <BadgeCheck size={17} strokeWidth={2.4} aria-hidden="true" />
            </span>
            {teacher.countryFlag && (
              <span
                className="profe-card-flag"
                aria-label={teacher.country}
                title={teacher.country}
              >
                {teacher.countryFlag}
              </span>
            )}
          </div>

          <ul className="profe-card-meta">
            <li className="profe-card-meta-primary">
              <GraduationCap size={15} strokeWidth={2.4} />
              <ul className="profe-card-instrument-list" aria-label="Cursos que imparte">
                {instruments.map((instrument) => (
                  <li key={instrument}>
                    <strong>{instrument}</strong>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Languages size={15} strokeWidth={2.4} />
              <span>{classLanguages.join(" · ")}</span>
            </li>
          </ul>

          <p className="profe-card-bio">
            <strong>{bio.lead}</strong>
            {bio.rest && <span> {bio.rest}</span>}
          </p>
        </div>

        <div className="profe-card-actions">
          <a
            href={teacherContactHref}
            className="profe-card-chat"
            target="_blank"
            rel="noopener"
            aria-label={`Escribir por WhatsApp sobre ${teacher.name}`}
          >
            <MessageCircle size={22} strokeWidth={2.4} aria-hidden="true" />
            <span className="profe-card-chat-label">WhatsApp</span>
          </a>
          <ul className="profe-card-action-details" aria-label="Detalles de clase">
            <li>
              <MapPin size={20} strokeWidth={2.4} aria-hidden="true" />
              <span>{teacher.location}</span>
            </li>
            {classFormats.map((format) => {
              const FormatIcon = classFormatIcon(format);

              return (
                <li key={format}>
                  <FormatIcon size={20} strokeWidth={2.4} aria-hidden="true" />
                  <span>{format}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </li>
  );
}
