/** Stable catalog keys keep existing translations through component refactors. */
export function messageKey(text: string) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index++) {
    hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
  }
  return `m${(hash >>> 0).toString(16)}`;
}

export function normalizeMessage(text: string) {
  return text.replace(/\s+/g, " ").trim();
}
