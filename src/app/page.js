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
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 16 }}>UTILITY + INTERNET ACTIVATION</div>
          <h1 className="hero-title" style={{ color: C.deep }}>Your utilities.<br/>Handled.</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: C.ink, lineHeight: 1.7, margin: "1.5rem 0 2rem", maxWidth: 480 }}>We activate your Duke Energy, schedule your Google Fiber installation, and coordinate your city water — so you can focus on moving in, not waiting on hold.</p>
          <div className="hero-cta-row">
            <Link href="/get-started" style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>Get started — $199 flat fee</Link>
            <span className="hero-cta-sub" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>No hidden fees. All providers included.</span>
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
          {[{ num: "01", title: "Tell us your address", desc: "Select your service type and enter your address. We identify every provider automatically." }, { num: "02", title: "Authorize and pay", desc: "Sign a Task Authorization, provide SSN and DL for provider verification (encrypted vault), and pay $199." }, { num: "03", title: "We handle everything", desc: "Duke Energy, Google Fiber, Piedmont Gas, city water \u2014 we activate, schedule, and confirm. You get WhatsApp updates." }].map((step, i) => (
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
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, color: C.deep, margin: "0 0 12px", fontWeight: 400 }}>One flat fee. Every provider.</h2>
        <div style={{ display: "inline-flex", alignItems: "baseline", gap: 8, marginTop: 8, marginBottom: 48 }}>
          <span className="price-display" style={{ color: C.deep }}>$199</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.muted }}>per engagement</span>
        </div>
        <div className="grid-3">
          {[{ label: "MOVING TO NC", who: "Out-of-state buyer", services: ["Duke Energy activation", "Gas service setup", "City water activation", "ISP scheduling"], time: "3\u20135 hours replaced" }, { label: "LEAVING NC", who: "Outbound seller", services: ["Duke Energy disconnection", "Gas service close", "City water final billing", "ISP disconnection"], time: "1\u20132 hours replaced" }, { label: "MOVING WITHIN NC", who: "In-state mover", services: ["Old address disconnection", "New address activation", "ISP transfer or new install", "All providers coordinated"], time: "4\u20136 hours replaced" }].map((p, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "28px 24px", textAlign: "left" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 4 }}>{p.label}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: C.ink, margin: "0 0 16px", fontWeight: 400 }}>{p.who}</h3>
              {p.services.map((s, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, marginBottom: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{s}
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 14, marginTop: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>{p.time}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Link href="/get-started" style={{ background: C.deep, color: C.white, borderRadius: 6, padding: "14px 40px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", display: "inline-block" }}>Get started</Link>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section style={{ background: C.deep }} className="section-padding" >
      <div className="grid-4" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {[{ num: "$199", label: "Flat fee, all providers" }, { num: "3\u20136 hrs", label: "Of phone calls eliminated" }, { num: "100%", label: "UETA-compliant authorization" }, { num: "24 hr", label: "PII purge after completion" }].map((s, i) => (
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
    { q: "What exactly does Verity do?", a: "We contact Duke Energy, Piedmont Gas, your city water department, and internet providers on your behalf to activate, disconnect, or transfer service. You sign a simple Task Authorization and we handle every call, portal submission, and scheduling confirmation." },
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
