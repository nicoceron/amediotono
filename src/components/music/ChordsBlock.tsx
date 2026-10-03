import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import { ChordDiagram } from "@/components/music/ChordDiagram";
import { GUITAR_TUNING, guitarVoicings } from "@/lib/chord-voicings";
import { chordPath, voicingNoteNames, voicingRootStrings } from "@/lib/music-pages";
import { getChord, type Chord } from "@/lib/music-theory";

/** Guitar chord boxes inside an article, each linking to its dictionary page. */
export function ChordsBlock({ slugs, caption }: { slugs: string[]; caption?: string }) {
  const tx = useText();
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
                    {tx(chord.name)} {tx(" (")}{tx(chord.displaySymbol)}{tx(")")}</strong>
                  <ChordDiagram
                    voicing={voicing}
                    noteNames={voicingNoteNames(chord, voicing, GUITAR_TUNING)}
                    rootStrings={voicingRootStrings(chord, voicing, GUITAR_TUNING)}
                    title={tx(tx.template("{p0} en guitarra", {p0: tx(chord.name)}))}
                  />
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
      {caption && <figcaption>{tx(caption)}</figcaption>}
    </figure>
  );
}
