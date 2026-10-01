import Link from "next/link";
import { ChordDiagram } from "@/components/music/ChordDiagram";
import { GUITAR_TUNING, guitarVoicings } from "@/lib/chord-voicings";
import { chordPath, voicingNoteNames, voicingRootStrings } from "@/lib/music-pages";
import { getChord, type Chord } from "@/lib/music-theory";

/** Guitar chord boxes inside an article, each linking to its dictionary page. */
export function ChordsBlock({ slugs, caption }: { slugs: string[]; caption?: string }) {
  const chords = slugs.map((slug) => getChord(slug)).filter((chord): chord is Chord => Boolean(chord));

  return (
    <figure className="chords-block">
      <ul className="voicing-grid voicing-grid--compact">
        {chords.map((chord) => {
          const voicing = guitarVoicings(chord)[0];
          return (
            <li key={chord.slug}>
              <Link href={chordPath(chord)} prefetch={false}>
                <figure>
                  <strong>
                    {chord.name} ({chord.displaySymbol})
                  </strong>
                  <ChordDiagram
                    voicing={voicing}
                    noteNames={voicingNoteNames(chord, voicing, GUITAR_TUNING)}
                    rootStrings={voicingRootStrings(chord, voicing, GUITAR_TUNING)}
                    title={`${chord.name} en guitarra`}
                  />
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
