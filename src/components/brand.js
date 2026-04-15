"use client";

export const C = {
  deep: "#0A4D3E",
  primary: "#1D9E75",
  mid: "#0F6E56",
  light: "#E8F5EF",
  ink: "#1C2B33",
  parchment: "#F7F5F0",
  amber: "#C4883A",
  white: "#FFFFFF",
  muted: "#7A7A72",
  border: "#E0DDD5",
};

export function Shield({ size = 36, color = C.deep, check }) {
  return (
    <svg width={size} height={size * 1.09} viewBox="-4 0 68 70" fill="none">
      <path d="M0 2 L58 2 Q62 2 62 6 L62 38 Q62 56 30 66 Q10 60 2 52" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 36 L23 50 L52 18" stroke={check || color} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
