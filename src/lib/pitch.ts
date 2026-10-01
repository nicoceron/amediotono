/**
 * Pitch detection shared by the tuner and the voice-type test.
 *
 * McLeod pitch method (normalized square difference function): robust for
 * voices and string instruments, and cheap enough to run ~20 times a second
 * because it only evaluates lags inside the playable frequency range.
 */
export const MIN_FREQUENCY = 38;
export const MAX_FREQUENCY = 1400;
/**
 * Lowest floor a caller may ask for (5-string bass low B is ≈ 30.9 Hz). A
 * 4096-sample buffer still holds over two periods at 25 Hz, which the method
 * needs; lower floors cost more lags per frame, so only tuners that need them
 * pass one.
 */
export const LOWEST_MIN_FREQUENCY = 25;
const CLARITY_THRESHOLD = 0.82;
const RMS_THRESHOLD = 0.008;

export function detectPitch(buffer: Float32Array, sampleRate: number, minFrequency = MIN_FREQUENCY) {
  let rms = 0;
  for (let i = 0; i < buffer.length; i += 1) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / buffer.length);
  if (rms < RMS_THRESHOLD) return null;

  const minLag = Math.floor(sampleRate / MAX_FREQUENCY);
  const floor = Math.max(LOWEST_MIN_FREQUENCY, minFrequency);
  const maxLag = Math.min(Math.floor(sampleRate / floor), Math.floor(buffer.length / 2));
  const nsdf = new Float32Array(maxLag + 1);

  for (let tau = minLag; tau <= maxLag; tau += 1) {
    let acf = 0;
    let energy = 0;
    const limit = buffer.length - tau;
    for (let i = 0; i < limit; i += 1) {
      const a = buffer[i];
      const b = buffer[i + tau];
      acf += a * b;
      energy += a * a + b * b;
    }
    nsdf[tau] = energy > 0 ? (2 * acf) / energy : 0;
  }

  // Key maxima: the highest point of each positive lobe after the first dip.
  const peaks: number[] = [];
  let tau = minLag;
  while (tau < maxLag && nsdf[tau] > 0) tau += 1;
  while (tau < maxLag) {
    while (tau < maxLag && nsdf[tau] <= 0) tau += 1;
    let best = tau;
    while (tau < maxLag && nsdf[tau] > 0) {
      if (nsdf[tau] > nsdf[best]) best = tau;
      tau += 1;
    }
    if (best < maxLag && nsdf[best] > 0) peaks.push(best);
  }
  if (peaks.length === 0) return null;

  const highest = Math.max(...peaks.map((peak) => nsdf[peak]));
  const chosen = peaks.find((peak) => nsdf[peak] >= highest * 0.9) ?? peaks[0];
  if (nsdf[chosen] < CLARITY_THRESHOLD) return null;

  const left = nsdf[chosen - 1] ?? nsdf[chosen];
  const right = nsdf[chosen + 1] ?? nsdf[chosen];
  const denominator = left - 2 * nsdf[chosen] + right;
  const shift = denominator ? (0.5 * (left - right)) / denominator : 0;
  const period = chosen + shift;

  return period > 0 ? sampleRate / period : null;
}

export function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

export function createAudioContext() {
  const AudioContextClass =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  return new AudioContextClass();
}

/** Opens the microphone with processing off so pitch is not distorted. */
export async function openMicrophone(context: AudioContext, fftSize = 4096) {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
  });
  const source = context.createMediaStreamSource(stream);
  const analyser = context.createAnalyser();
  analyser.fftSize = fftSize;
  source.connect(analyser);
  return { stream, analyser, buffer: new Float32Array(analyser.fftSize) };
}

export function microphoneErrorMessage(error: unknown) {
  return error instanceof DOMException && error.name === "NotAllowedError"
    ? "Necesitamos permiso para usar el micrófono. Actívalo en la configuración del navegador y vuelve a intentar."
    : "No pudimos acceder al micrófono. Revisa que esté conectado y que ninguna otra app lo esté usando.";
}

/** Plays a soft reference tone. */
export function playTone(context: AudioContext, frequency: number, start = context.currentTime, duration = 1.2, volume = 0.3) {
  const oscillator = context.createOscillator();
  const overtone = context.createOscillator();
  const gain = context.createGain();
  const overtoneGain = context.createGain();
  oscillator.type = "triangle";
  overtone.type = "sine";
  oscillator.frequency.value = frequency;
  overtone.frequency.value = frequency * 2;
  overtoneGain.gain.value = 0.25;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  overtone.connect(overtoneGain).connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  overtone.start(start);
  oscillator.stop(start + duration + 0.05);
  overtone.stop(start + duration + 0.05);
}
