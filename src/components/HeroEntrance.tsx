import Image from "next/image";

export function HeroEntrance() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 150px)",
      padding: "20px"
    }}>
      <Image
        src="/logo.svg"
        alt="A ½ tono — Escuela de artes"
        width={1448}
        height={1086}
        priority
        sizes="(max-width: 768px) 85vw, 500px"
        style={{ maxWidth: "500px", width: "100%", height: "auto" }}
      />
    </div>
  );
}
