"use client";
import Link from "next/link";
import { C, Shield } from "./brand";

export default function Nav({ active }) {
  const links = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
  ];
  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2.5rem", background: C.parchment, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 100 }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <Shield size={36} />
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 22, color: C.deep, lineHeight: 1 }}>Verity</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: C.primary, letterSpacing: "0.18em", fontWeight: 500, marginTop: 1 }}>RELOCATION</div>
        </div>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={{ color: active === l.href ? C.primary : C.ink, textDecoration: "none", fontWeight: active === l.href ? 500 : 400 }}>{l.label}</Link>
        ))}
        <Link href="/get-started" style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Get started</Link>
      </div>
    </nav>
  );
}
