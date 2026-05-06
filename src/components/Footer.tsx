import Image from "next/image";

export function Footer() {
  return (
    <footer className="foot" style={{ textAlign: "center", padding: "48px 20px" }}>
      <Image
        src="/logo.svg"
        alt="A ½ tono — Escuela de artes"
        width={160}
        height={120}
        style={{ height: "100px", width: "auto", display: "inline-block" }}
      />
      <p style={{ marginTop: 12 }}>© {new Date().getFullYear()} A medio tono · Hecho con cariño 🎶</p>
    </footer>
  );
}
