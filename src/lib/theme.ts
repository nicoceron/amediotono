export type ThemePreference = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "tono-theme";
export const THEME_CHANGE_EVENT = "tono:theme-change";
export const THEME_RESTORE_EVENT = "tono:theme-restore";

// Next.js recommends a synchronous head script so preferences apply before paint.
// Storage access is isolated: blocking it must not override the system theme.
export const THEME_INIT_SCRIPT = `
  (function() {
    var root = document.documentElement;
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var normalize = function(value) {
      return value === 'light' || value === 'dark' ? value : 'system';
    };
    var stored;
    try { stored = localStorage.getItem('${THEME_STORAGE_KEY}'); } catch (error) {}
    var currentPreference = normalize(stored);
    var apply = function(preference) {
      currentPreference = preference;
      root.setAttribute('data-theme-preference', preference);
      root.setAttribute('data-theme', preference === 'system' ? (media.matches ? 'dark' : 'light') : preference);
      window.dispatchEvent(new Event('${THEME_CHANGE_EVENT}'));
    };
    apply(currentPreference);
    requestAnimationFrame(function() { root.setAttribute('data-theme-ready', 'true'); });
    media.addEventListener('change', function() {
      if (currentPreference === 'system') apply('system');
    });
    window.addEventListener('${THEME_CHANGE_EVENT}', function() {
      currentPreference = normalize(root.getAttribute('data-theme-preference'));
    });
    window.addEventListener('${THEME_RESTORE_EVENT}', function() {
      apply(currentPreference);
      root.setAttribute('data-theme-ready', 'true');
    });
    window.addEventListener('storage', function(event) {
      if (event.key === '${THEME_STORAGE_KEY}' || event.key === null) apply(normalize(event.newValue));
    });
  })();
`;

export function getThemePreference(): ThemePreference {
  const preference = document.documentElement.getAttribute("data-theme-preference");
  return preference === "light" || preference === "dark" ? preference : "system";
}

export function setThemePreference(preference: ThemePreference) {
  const root = document.documentElement;
  const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme-preference", preference);
  root.setAttribute("data-theme", preference === "system" ? (systemIsDark ? "dark" : "light") : preference);
  try {
    if (preference === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // The choice still works for this visit when storage is unavailable.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}
