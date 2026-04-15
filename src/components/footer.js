"use client";
import Link from "next/link";
import { C, Shield } from "./brand";

export default function Footer() {
  return (
    <footer style={{ background: C.ink, padding: "3rem 2.5rem" }}>
      <div className="footer-inner">
        <div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, textDecoration: "none" }}>
            <Shield size={28} color="#5DCAA5" check="#E8F5EF" />
            <div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 18, color: C.light, lineHeight: 1 }}>Verity</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 7, color: "#5DCAA5", letterSpacing: "0.18em", fontWeight: 500, marginTop: 1 }}>RELOCATION</div>
            </div>
          </Link>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.6 }}>A DBA of Verity Agentic Services LLC<br/>Durham, North Carolina</p>
        </div>
        <div className="footer-links" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ color: C.muted, fontSize: 11, letterSpacing: "0.1em", fontWeight: 500 }}>COMPANY</span>
            <Link href="/how-it-works" style={{ color: "#9FE1CB", textDecoration: "none" }}>How it works</Link>
            <Link href="/services" style={{ color: "#9FE1CB", textDecoration: "none" }}>Services</Link>
            <Link href="/faq" style={{ color: "#9FE1CB", textDecoration: "none" }}>FAQ</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ color: C.muted, fontSize: 11, letterSpacing: "0.1em", fontWeight: 500 }}>LEGAL</span>
            <Link href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Privacy policy</Link>
            <Link href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Terms of service</Link>
            <Link href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Task Authorization</Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "2rem auto 0", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted }}>
        {"\u00A9"} 2026 Verity Agentic Services LLC. All rights reserved. RESPA Section 8 compliant. UETA-authorized service execution.
      </div>
    </footer>
  );
}
