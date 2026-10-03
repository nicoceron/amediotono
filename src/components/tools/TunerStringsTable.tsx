import {useText} from "@/i18n/use-text";
import { formatHz, midiToFrequency, noteLabel, semitoneChange, type TunerString } from "@/lib/music-core";

export function TunerStringsTable({
  strings,
  caption,
  flats = false,
}: {
  strings: TunerString[];
  caption: string;
  flats?: boolean;
}) {
  const tx = useText();
  return (
    <div className="prose-table-wrap" role="region" aria-label={tx(caption)} tabIndex={0}>
      <table>
        <caption>{tx(caption)}</caption>
        <thead>
          <tr>
            <th scope="col">{tx("Cuerda")}</th>
            <th scope="col">{tx("Nota")}</th>
            <th scope="col">{tx("Cifrado")}</th>
            <th scope="col">{tx("Frecuencia (La = 440 Hz)")}</th>
          </tr>
        </thead>
        <tbody>
          {[...strings].reverse().map((item) => {
            const label = noteLabel(item.midi, flats);
            return (
              <tr key={`${item.label}-${item.midi}`}>
                <th scope="row">{tx(item.label)}</th>
                <td>{tx(label.es)}</td>
                <td>{tx(label.scientific)}</td>
                <td>{tx(formatHz(midiToFrequency(item.midi)))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** How to get from standard guitar tuning to an alternate tuning, string by string. */
export function TuningChangesTable({
  standard,
  strings,
  tuningLabel,
  flats = false,
}: {
  standard: number[];
  strings: TunerString[];
  tuningLabel: string;
  flats?: boolean;
}) {
  const tx = useText();
  const caption = `De la afinación estándar a ${tuningLabel}`;
  return (
    <div className="prose-table-wrap" role="region" aria-label={tx(caption)} tabIndex={0}>
      <table>
        <caption>{tx(caption)}</caption>
        <thead>
          <tr>
            <th scope="col">{tx("Cuerda")}</th>
            <th scope="col">{tx("Estándar")}</th>
            <th scope="col">{tx(tuningLabel)}</th>
            <th scope="col">{tx("Qué hacer")}</th>
          </tr>
        </thead>
        <tbody>
          {strings.map((item, index) => {
            const from = noteLabel(standard[index]);
            const to = noteLabel(item.midi, flats);
            return (
              <tr key={item.label}>
                <th scope="row">{tx(item.label)}</th>
                <td>
                  {tx(from.es)} {tx(" (")}{tx(from.scientific)}{tx(")")}</td>
                <td>
                  {tx(to.es)} {tx(" (")}{tx(to.scientific)}{tx(")")}</td>
                <td>{tx(semitoneChange(item.midi - standard[index]))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
