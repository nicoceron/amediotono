import { midiToFrequency, noteLabel, type TunerString } from "@/lib/music-tools";

export function TunerStringsTable({ strings, caption }: { strings: TunerString[]; caption: string }) {
  return (
    <div className="prose-table-wrap">
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
            const label = noteLabel(item.midi);
            return (
              <tr key={`${item.label}-${item.midi}`}>
                <th scope="row">{item.label}</th>
                <td>{label.es}</td>
                <td>{label.scientific}</td>
                <td>{midiToFrequency(item.midi).toFixed(2)} Hz</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
