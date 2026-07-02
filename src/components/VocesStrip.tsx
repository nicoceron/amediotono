import Image from "next/image";

type StripItem =
  | { type: "asset"; icon: string }
  | { type: "offer"; title: string; subtitle: string };

const ITEMS: StripItem[] = [
  { type: "asset", icon: "/instruments/blue-note.webp" },
  { type: "offer", title: "Clases a domicilio", subtitle: "En tu espacio" },
  { type: "asset", icon: "/instruments/orange-note.webp" },
  { type: "offer", title: "Clases virtuales", subtitle: "Desde casa" },
  { type: "asset", icon: "/instruments/pink-treble.webp" },
  { type: "offer", title: "Todas las edades", subtitle: "Música y arte" },
];

function VocesItems() {
  return ITEMS.map((item, i) => (
    <span className={`voces-badge ${item.type === "asset" ? "voces-badge-asset" : ""}`} key={i}>
      {item.type === "asset" ? (
        <Image
          src={item.icon}
          alt=""
          width={96}
          height={96}
          className="voces-strip-icon"
        />
      ) : (
        <span className="voces-offer">
          <span className="voces-offer-title">{item.title}</span>
          <span className="voces-offer-sub">{item.subtitle}</span>
        </span>
      )}
    </span>
  ));
}

export function VocesStrip() {
  return (
    <section className="voces-strip" aria-hidden="true">
      <div className="voces-marquee-wrap">
        <div className="voces-marquee-row">
          <div className="voces-marquee-group">
            <VocesItems />
          </div>
          <div className="voces-marquee-group" aria-hidden="true">
            <VocesItems />
          </div>
        </div>
      </div>
    </section>
  );
}
