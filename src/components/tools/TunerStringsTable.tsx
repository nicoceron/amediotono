import { midiToFrequency, noteLabel, type TunerString } from "@/lib/music-core";

/** Hz with a decimal comma, as written in Colombia: "82,41 Hz". */
export function formatHz(frequency: number) {
  return `${frequency.toFixed(2).replace(".", ",")} Hz`;
}

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

/** "Baja 1 tono", "Sube ½ tono", "Baja 1 ½ tonos", "No cambia" */
export function semitoneChange(semitones: number) {
  if (semitones === 0) return "No cambia";
  const size = Math.abs(semitones);
  const whole = Math.floor(size / 2);
  const half = size % 2 === 1;
  const amount = whole === 0 ? "½ tono" : `${whole}${half ? " ½" : ""} ${whole === 1 && !half ? "tono" : "tonos"}`;
  return `${semitones < 0 ? "Baja" : "Sube"} ${amount}`;
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
