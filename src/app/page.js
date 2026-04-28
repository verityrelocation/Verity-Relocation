"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <section style={{ background: C.parchment, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
      <div className="hero-section">
        <div className="hero-left">
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 16 }}>RESIDENTIAL MOVE CONCIERGE</div>
          <h1 className="hero-title" style={{ color: C.deep }}>Your move.<br/>Handled.</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: C.ink, lineHeight: 1.7, margin: "1.5rem 0 2rem", maxWidth: 480 }}>We activate utilities, schedule your internet install, set up alarm and pest service, and arrange bulk trash pickup &mdash; so you can focus on moving in, not waiting on hold.</p>
          <div className="hero-cta-row">
            <Link href="/get-started" style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>Get started</Link>
            <span className="hero-cta-sub" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>From $99 &middot; Two flat-fee packages.</span>
          </div>
        </div>
        <div className="hero-right">
          {[{ provider: "Duke Energy", status: "Active", detail: "Account #4821-7739" }, { provider: "Google Fiber", status: "Scheduled", detail: "Install: June 3, 9am\u20131pm" }, { provider: "City of Durham Water", status: "Active", detail: "Account #DWS-0094512" }].map((item, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: `opacity 0.6s ease ${0.3 + i * 0.15}s, transform 0.6s ease ${0.3 + i * 0.15}s` }}>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.ink }}>{item.provider}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 2 }}>{item.detail}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.status === "Active" ? C.primary : C.amber }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: item.status === "Active" ? C.primary : C.amber }}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section style={{ background: C.white }} className="section-padding">
      <div className="section-inner">
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>HOW IT WORKS</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, color: C.deep, margin: "0 0 3rem", fontWeight: 400 }}>Three steps. Zero phone calls.</h2>
        <div className="grid-3">
          {[{ num: "01", title: "Tell us your address", desc: "Choose Essentials or Full Move and enter your address. We identify every provider automatically." }, { num: "02", title: "Authorize and pay", desc: "Sign a Task Authorization, provide SSN and DL for provider verification (encrypted vault), and pay the flat fee." }, { num: "03", title: "We handle everything", desc: "Utilities, internet, alarm, pest, bulk trash \u2014 we activate, schedule, and confirm. You get WhatsApp updates." }].map((step, i) => (
            <div key={i} style={{ borderTop: `3px solid ${i === 2 ? C.primary : C.border}`, paddingTop: 24 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.primary, fontWeight: 500, marginBottom: 8 }}>{step.num}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: C.ink, margin: "0 0 10px", fontWeight: 400 }}>{step.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section style={{ background: C.parchment }} className="section-padding">
      <div className="section-inner" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>SERVICES</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, color: C.deep, margin: "0 0 12px", fontWeight: 400 }}>Two flat fees. Every detail handled.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.muted, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.6 }}>Choose the package that matches your move. Every task is verified by a Verity concierge and confirmed in writing before your move date.</p>
        <div className="grid-2" style={{ maxWidth: 880, margin: "0 auto" }}>
          {[
            {
              label: "ESSENTIALS",
              price: "$99",
              tag: "Home services scheduled before you arrive.",
              services: [
                "Internet service provider scheduling",
                "Home alarm & monitoring setup",
                "Pest control service setup",
                "Bulk trash pickup scheduling"
              ],
              featured: false,
              href: "/get-started?tier=essentials"
            },
            {
              label: "FULL MOVE",
              price: "$199",
              tag: "Everything in Essentials, plus utilities \u2014 either direction.",
              services: [
                "Everything in Essentials",
                "Electric service (Duke Energy)",
                "Natural gas (Piedmont)",
                "Municipal water service",
                "In-state movers: both directions, one fee"
              ],
              featured: true,
              href: "/get-started?tier=full"
            }
          ].map((p, i) => (
            <div key={i} style={{ background: C.white, border: `${p.featured ? 2 : 1}px solid ${p.featured ? C.primary : C.border}`, borderRadius: 12, padding: "32px 28px", textAlign: "left", boxShadow: p.featured ? "0 8px 32px rgba(10, 77, 62, 0.12)" : "none", position: "relative" }}>
              {p.featured && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: C.primary, color: C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", padding: "5px 14px", borderRadius: 999 }}>MOST CHOSEN</div>
              )}
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 8 }}>{p.label}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 400, color: C.deep, letterSpacing: "-0.02em" }}>{p.price}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted }}>flat</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.5, margin: "0 0 20px" }}>{p.tag}</p>
              {p.services.map((s, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, marginBottom: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}><path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{s}</span>
                </div>
              ))}
              <Link href={p.href} style={{ display: "block", marginTop: 24, background: p.featured ? C.deep : "transparent", color: p.featured ? C.white : C.deep, border: p.featured ? "none" : `1.5px solid ${C.deep}`, borderRadius: 6, padding: "12px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, textDecoration: "none", textAlign: "center" }}>Choose {p.label === "ESSENTIALS" ? "Essentials" : "Full Move"}</Link>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, fontStyle: "italic", marginTop: 32, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>A third tier is in development. Existing Verity customers will be notified first when it launches.</p>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section style={{ background: C.deep }} className="section-padding" >
      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40, alignItems: "center", textAlign: "center" }}>
        {[{ num: "From $99", label: "Flat fee, no subscriptions" }, { num: "4\u20137 hrs", label: "Of phone calls eliminated" }, { num: "Triangle & RTP", label: "Residential service area" }].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.white, marginBottom: 6 }}>{s.num}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#9FE1CB" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeFAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What exactly does Verity do?", a: "We coordinate utility activation and disconnection (Duke Energy, Piedmont Gas, city water), internet service provider scheduling, home alarm setup, pest control setup, and bulk trash pickup on your behalf. You sign a simple Task Authorization and we handle every call, portal submission, and scheduling confirmation." },
    { q: "Is my personal information safe?", a: "Yes. Your SSN and driver\u2019s license number are stored in an encrypted PII vault (Skyflow) and automatically purged 24 hours after your engagement is complete. This data is tokenized \u2014 it never enters our standard database. Payments are processed through Stripe\u2019s hosted checkout." },
    { q: "How is this different from a checklist app?", a: "Checklist apps tell you what to do. We do it. You don\u2019t make a single phone call, navigate a single portal, or wait on hold. We execute the provider interactions end-to-end." },
    { q: "Do I need to share my login credentials?", a: "No. We create new accounts or manage service requests directly with providers using your Task Authorization. We never ask for or store your existing login credentials." },
    { q: "My attorney recommended Verity. Why?", a: "Closing attorneys see every client go through the same painful utility setup. Verity gives them a way to solve that problem with a single recommendation. Our co-marketing structure is fully RESPA Section 8 compliant." },
  ];
  return (
    <section style={{ background: C.white }} className="section-padding">
      <div className="section-inner-tight">
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>FAQ</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, color: C.deep, margin: "0 0 2.5rem", fontWeight: 400 }}>Common questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderTop: `1px solid ${C.border}` }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, color: C.ink, textAlign: "left" }}>
              {faq.q}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s" }}><path d="M10 4V16M4 10H16" stroke={C.muted} strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            {open === i && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 20px", paddingRight: 40 }}>{faq.a}</p>}
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C.border}` }} />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <ServicesPreview />
      <TrustBar />
      <HomeFAQ />
      <Footer />
    </div>
  );
}
