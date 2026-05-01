export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var theme = localStorage.getItem('tono-theme') || 'dark';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
      }}
    />
  );
}