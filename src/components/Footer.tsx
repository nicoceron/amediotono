export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-logo">
        <span style={{ color: "var(--orange)" }}>A</span>
        <span style={{ color: "var(--green)" }}>½</span>
        <span style={{ color: "var(--red)" }}>t</span>
        <span style={{ color: "var(--blue)" }}>o</span>
        <span style={{ color: "var(--pink)" }}>n</span>
        <span style={{ color: "var(--green)" }}>o</span>
      </div>
      <div className="hand" style={{ fontSize: "1.2rem", color: "var(--red)" }}>Escuela de artes</div>
      <p style={{ marginTop: 12 }}>© {new Date().getFullYear()} A medio tono · Hecho con cariño 🎶</p>
    </footer>
  );
}