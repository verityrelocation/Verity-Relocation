"use client";
import { useState } from "react";
import Link from "next/link";
import { C, Shield } from "./brand";

export default function Nav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
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
      <div className="nav-links" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={{ color: active === l.href ? C.primary : C.ink, textDecoration: "none", fontWeight: active === l.href ? 500 : 400 }}>{l.label}</Link>
        ))}
        <Link href="/get-started" style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Get started</Link>
      </div>
      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {menuOpen ? (
            <path d="M6 6L18 18M18 6L6 18" stroke={C.ink} strokeWidth="2" strokeLinecap="round"/>
          ) : (
            <>
              <path d="M4 7H20" stroke={C.ink} strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12H20" stroke={C.ink} strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 17H20" stroke={C.ink} strokeWidth="2" strokeLinecap="round"/>
            </>
          )}
        </svg>
      </button>
      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/get-started" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Get started</Link>
      </div>
    </nav>
  );
}
