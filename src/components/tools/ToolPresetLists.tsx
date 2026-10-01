import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  RHYTHM_PRESETS,
  TUNER_GROUPS,
  noteLabel,
  rhythmPresetPath,
  tunerPresetPath,
  tunerPresetTitle,
  tunerPresetsInGroup,
  type TunerPreset,
} from "@/lib/music-tools";

/** "Re · Sol · Si · Mi": open-string notes, without repeating a course's octave strings. */
export function tunerPresetNotes(preset: TunerPreset) {
  return preset.strings
    .map((item) => noteLabel(item.midi, preset.flats).es)
    .filter((name, index, names) => name !== names[index - 1])
    .join(" · ");
}

/** Every tuner preset, grouped so the hub doesn't turn into a wall of cards. */
export function TunerPresetGroups({
  title = "Afinador por instrumento",
  detail = "notes",
}: {
  title?: string;
  /** Second line of each card: the open-string notes or the tuning's name. */
  detail?: "notes" | "tuning";
}) {
  return (
    <nav className="tuner-presets" aria-label={title}>
      <h2 className="ed-h2">{title}</h2>
      {TUNER_GROUPS.map((group) => (
        <div className="tuner-presets-group" key={group.id}>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
          <ul>
            {tunerPresetsInGroup(group.id).map((preset) => (
              <li key={preset.slug}>
                <Link href={tunerPresetPath(preset.slug)} prefetch={false}>
                  <strong>{tunerPresetTitle(preset)}</strong>
                  <span>{detail === "notes" ? tunerPresetNotes(preset) : preset.tuningName}</span>
                  <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

/** Metronome presets for Colombian rhythms. */
export function RhythmPresetList({ title = "Metrónomo para ritmos colombianos" }: { title?: string }) {
  return (
    <nav className="tuner-presets" aria-label={title}>
      <h2 className="ed-h2">{title}</h2>
      <ul>
        {RHYTHM_PRESETS.map((preset) => (
          <li key={preset.slug}>
            <Link href={rhythmPresetPath(preset.slug)} prefetch={false}>
              <strong>{preset.headline}</strong>
              <span>{preset.summary}</span>
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
