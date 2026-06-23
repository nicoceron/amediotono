export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
            var systemTheme = function() { return media && media.matches ? 'dark' : 'light'; };
            var applyTheme = function() {
              document.documentElement.setAttribute('data-theme', localStorage.getItem('tono-theme') || systemTheme());
            };
            applyTheme();
            if (media && media.addEventListener) {
              media.addEventListener('change', function() {
                if (!localStorage.getItem('tono-theme')) applyTheme();
              });
            }
          })();
        `,
      }}
    />
  );
}
