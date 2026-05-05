export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var theme = localStorage.getItem('tono-theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
      }}
    />
  );
}