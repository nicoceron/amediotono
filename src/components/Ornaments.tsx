export function Squiggle({ color = "var(--accent)", style }: { color?: string; style?: React.CSSProperties }) {
  return (
    <svg className="squiggle" viewBox="0 0 400 24" preserveAspectRatio="none" style={{ color, ...style }}>
      <path d="M2 12 C 30 2, 60 22, 90 12 S 150 2, 180 12 S 240 22, 270 12 S 330 2, 360 12 S 398 18, 398 12"
            fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Star({ size = 40, color = "var(--yellow)", rotate = 0, style }: { size?: number; color?: string; rotate?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotate}deg)`, ...style }} className="ornament">
      <path d="M12 2 L14 9 L21 10 L15.5 14.5 L17 21 L12 17.2 L7 21 L8.5 14.5 L3 10 L10 9 Z"
            fill={color} stroke="var(--line)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ size = 22, color = "var(--orange)", rotate = 0, style }: { size?: number; color?: string; rotate?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotate}deg)`, ...style }} className="ornament">
      <path d="M12 2 C12 7 13 11 22 12 C13 13 12 17 12 22 C12 17 11 13 2 12 C11 11 12 7 12 2 Z"
            fill={color} stroke="var(--line)" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function Note({ size = 26, color = "var(--blue)", rotate = 0, style }: { size?: number; color?: string; rotate?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotate}deg)`, ...style }} className="ornament">
      <path d="M9 17a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm12-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"
            fill={color} stroke="var(--line)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 17V5l12-2v12" fill="none" stroke="var(--line)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Heart({ size = 22, color = "var(--red)", rotate = 0, style }: { size?: number; color?: string; rotate?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotate}deg)`, ...style }} className="ornament">
      <path d="M12 21s-7-4.5-9.3-9.2C1.2 8.6 3 5 6.5 5c2 0 3.4 1.1 4.5 2.6C12.1 6.1 13.5 5 15.5 5c3.5 0 5.3 3.6 3.8 6.8C19 16.5 12 21 12 21Z"
            fill={color} stroke="var(--line)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}