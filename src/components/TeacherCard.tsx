import {useText} from "@/i18n/use-text";
import Image from "next/image";
import Link from "@/i18n/navigation";
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
  const tx = useText();
  const instruments = teacher.skills.map((skill) => skill.label);
  const classFormats = teacher.classFormats ?? [];
  const classLanguages = teacher.classLanguages ?? [];
  const teacherContactHref = whatsappHref(
    tx.template("¡Hola! Quiero más información sobre las clases con {p0}.", {p0: tx(teacher.name)}),
  );
  const bio = splitBioLead(tx(teacher.longBio));

  return (
    <li className="profe-card-wrap">
      <article
        className="profe-card"
        style={{ ["--profe-color" as string]: teacher.color }}
      >
        <Link
          href={`/profes/${teacher.slug}`}
          className="profe-card-click-target"
          aria-label={tx(tx.template("Ver perfil de {p0}", {p0: teacher.name}))}
        >
          <span className="visually-hidden">{tx("Ver perfil de ")}{teacher.name}</span>
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
              role="img"
              aria-label={tx("Profesor verificado")}
              title={tx("Profesor verificado")}
            >
              <BadgeCheck size={17} strokeWidth={2.4} aria-hidden="true" />
            </span>
            {teacher.countryFlag && (
              <span
                className="profe-card-flag"
                aria-label={tx(teacher.country)}
                title={tx(teacher.country)}
              >
                {tx(teacher.countryFlag)}
              </span>
            )}
          </div>

          <ul className="profe-card-meta">
            <li className="profe-card-meta-primary">
              <GraduationCap size={15} strokeWidth={2.4} />
              <ul className="profe-card-instrument-list" aria-label={tx("Cursos que imparte")}>
                {instruments.map((instrument) => (
                  <li key={instrument}>
                    <strong>{tx(instrument)}</strong>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Languages size={15} strokeWidth={2.4} />
              <span>{tx(classLanguages.map(tx).join(" · "))}</span>
            </li>
          </ul>

          <p className="profe-card-bio">
            <strong>{tx(bio.lead)}</strong>
            {bio.rest && <span> {tx(bio.rest)}</span>}
          </p>
        </div>

        <div className="profe-card-actions">
          <a
            href={teacherContactHref}
            className="profe-card-chat"
            target="_blank"
            rel="noopener"
            aria-label={tx(tx.template("Escribir por WhatsApp sobre {p0}", {p0: teacher.name}))}
          >
            <MessageCircle size={22} strokeWidth={2.4} aria-hidden="true" />
            <span className="profe-card-chat-label">{tx("WhatsApp")}</span>
          </a>
          <ul className="profe-card-action-details" aria-label={tx("Detalles de clase")}>
            <li>
              <MapPin size={20} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx(teacher.location)}</span>
            </li>
            {classFormats.map((format) => {
              const FormatIcon = classFormatIcon(format);

              return (
                <li key={format}>
                  <FormatIcon size={20} strokeWidth={2.4} aria-hidden="true" />
                  <span>{tx(format)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </li>
  );
}
