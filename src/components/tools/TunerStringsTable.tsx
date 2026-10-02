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
  return (
    <div className="prose-table-wrap" role="region" aria-label={caption} tabIndex={0}>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Cuerda</th>
            <th scope="col">Nota</th>
            <th scope="col">Cifrado</th>
            <th scope="col">Frecuencia (La = 440 Hz)</th>
          </tr>
        </thead>
        <tbody>
          {[...strings].reverse().map((item) => {
            const label = noteLabel(item.midi, flats);
            return (
              <tr key={`${item.label}-${item.midi}`}>
                <th scope="row">{item.label}</th>
                <td>{label.es}</td>
                <td>{label.scientific}</td>
                <td>{formatHz(midiToFrequency(item.midi))}</td>
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
  const caption = `De la afinación estándar a ${tuningLabel}`;
  return (
    <div className="prose-table-wrap" role="region" aria-label={caption} tabIndex={0}>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Cuerda</th>
            <th scope="col">Estándar</th>
            <th scope="col">{tuningLabel}</th>
            <th scope="col">Qué hacer</th>
          </tr>
        </thead>
        <tbody>
          {strings.map((item, index) => {
            const from = noteLabel(standard[index]);
            const to = noteLabel(item.midi, flats);
            return (
              <tr key={item.label}>
                <th scope="row">{item.label}</th>
                <td>
                  {from.es} ({from.scientific})
                </td>
                <td>
                  {to.es} ({to.scientific})
                </td>
                <td>{semitoneChange(item.midi - standard[index])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
