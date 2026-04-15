"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

function PageHero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 100); }, []);
  return (
    <section style={{ background: C.ink, padding: "5rem 2.5rem 4.5rem", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)", transition: "all 0.7s ease" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 16 }}>HOW IT WORKS</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: C.white, lineHeight: 1.2, margin: "0 0 1.25rem", fontWeight: 400 }}>You sign once.<br/>We handle everything else.</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#9FE1CB", lineHeight: 1.7, margin: 0, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>From the moment you authorize Verity, you never wait on hold, navigate a portal, or schedule an appointment. Here's what happens behind the scenes.</p>
      </div>
    </section>
  );
}

function StepSection({ num, title, description, details, visual, reverse }) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 64,
      flexDirection: reverse ? "row-reverse" : "row",
      padding: "4rem 0",
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.6s ease",
    }}>
      <div style={{ flex: 1.1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.light, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.deep }}>{num}</div>
          <div style={{ height: 1, flex: 1, background: C.border }} />
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 12px", fontWeight: 400 }}>{title}</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink, lineHeight: 1.75, margin: "0 0 20px" }}>{description}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {details.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M4 9.5L7.5 13L14 5" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {visual}
      </div>
    </div>
  );
}

function IntakeVisual() {
  return (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, padding: "28px 24px", maxWidth: 360 }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 16 }}>SERVICE SELECTION</div>
      {["Moving to NC", "Leaving NC", "Moving within NC"].map((opt, i) => (
        <label key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 8, border: `1px solid ${i === 0 ? C.primary : C.border}`, background: i === 0 ? C.light : C.white, marginBottom: 8, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${i === 0 ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {i === 0 && <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.primary }} />}
          </div>
          {opt}
        </label>
      ))}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginBottom: 6 }}>Property address</div>
        <div style={{ padding: "10px 14px", borderRadius: 6, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink }}>123 Main St, Durham, NC 27701</div>
      </div>
    </div>
  );
}

function AuthVisual() {
  return (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, padding: "28px 24px", maxWidth: 360 }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 20 }}>TASK AUTHORIZATION</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { text: "Authorize Verity to contact utility providers on my behalf", checked: true },
          { text: "Authorize Verity to schedule internet installation on my behalf", checked: true },
        ].map((item, i) => (
          <label key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, lineHeight: 1.5, cursor: "pointer" }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: item.checked ? C.primary : C.white, border: `1.5px solid ${item.checked ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
              {item.checked && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L5 9L9.5 3.5" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            {item.text}
          </label>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: "12px 16px", background: C.light, borderRadius: 8 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid, fontWeight: 500, marginBottom: 4 }}>NOT a power of attorney</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.5 }}>This is a limited Task Authorization executed under UETA with a 24-hour revocation clause.</div>
      </div>
      <button style={{ marginTop: 16, width: "100%", background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Sign and continue — $199</button>
    </div>
  );
}

function TrackingVisual() {
  const items = [
    { provider: "Duke Energy", status: "Active", detail: "Confirmed 11:42am", color: C.primary },
    { provider: "Google Fiber", status: "Scheduled", detail: "June 3, 9am–1pm", color: C.amber },
    { provider: "Piedmont Gas", status: "Active", detail: "Confirmed 2:18pm", color: C.primary },
    { provider: "Durham Water", status: "In progress", detail: "Submitted, awaiting confirm", color: C.amber },
  ];
  return (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, padding: "28px 24px", maxWidth: 380 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500 }}>YOUR STATUS</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted }}>Via WhatsApp</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: i > 0 ? `1px solid ${C.border}` : "none" }}>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>{item.provider}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted, marginTop: 2 }}>{item.detail}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: item.color }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, color: item.color }}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <section style={{ background: C.parchment, padding: "4rem 2.5rem 2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>TYPICAL TIMELINE</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>From sign-up to lights on</h2>
        </div>
        <div style={{ display: "flex", gap: 0, position: "relative" }}>
          <div style={{ position: "absolute", top: 20, left: "10%", right: "10%", height: 2, background: C.border }} />
          {[
            { time: "Day 0", label: "Sign up + pay", detail: "ISP scheduling begins immediately" },
            { time: "Day 0–1", label: "Notarization", detail: "5 minutes on your phone" },
            { time: "Day 1–2", label: "Utilities activated", detail: "Duke, gas, water confirmed" },
            { time: "Day 3–14", label: "ISP installed", detail: "Technician visit confirmed" },
          ].map((step, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === 3 ? C.primary : C.white, border: `2px solid ${i === 3 ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                {i === 3 ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9.5L7.5 13L14 5" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.primary }} />
                )}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, fontWeight: 500, marginBottom: 4 }}>{step.time}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink, textAlign: "center", marginBottom: 4 }}>{step.label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, textAlign: "center", maxWidth: 160 }}>{step.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeHandle() {
  const providers = [
    { name: "Duke Energy", type: "Electric", actions: "New service, transfers, disconnection" },
    { name: "Piedmont Natural Gas", type: "Gas", actions: "New service, transfers, disconnection" },
    { name: "City of Durham Water", type: "Water", actions: "Activation, final billing" },
    { name: "City of Raleigh Utilities", type: "Water", actions: "Activation, final billing" },
    { name: "Google Fiber", type: "Internet", actions: "New install scheduling" },
    { name: "AT&T Fiber", type: "Internet", actions: "New install scheduling" },
    { name: "Spectrum", type: "Internet", actions: "New install, transfers" },
  ];

  return (
    <section style={{ background: C.white, padding: "4.5rem 2.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>PROVIDERS WE HANDLE</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: "0 0 2rem", fontWeight: 400 }}>Every provider at your Triangle address</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {providers.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderBottom: `1px solid ${C.border}`, borderRight: i % 2 === 0 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: C.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>{p.name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted }}>{p.actions}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: C.deep, padding: "4.5rem 2.5rem", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <Shield size={48} color="#5DCAA5" check="#E8F5EF" />
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.white, margin: "1.5rem 0 1rem", fontWeight: 400 }}>Ready to skip the hold music?</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#9FE1CB", lineHeight: 1.7, margin: "0 0 2rem" }}>$199 flat fee. All providers. No phone calls. We handle everything from sign-up to confirmation.</p>
        <button style={{ background: C.white, color: C.deep, border: "none", borderRadius: 6, padding: "14px 40px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Get started</button>
      </div>
    </section>
  );
}

export default function HowItWorks() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Nav />
      <PageHero />

      <section style={{ background: C.parchment, padding: "0 2.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <StepSection
            num="1"
            title="Tell us where you're moving"
            description="Select whether you're moving to NC, leaving NC, or moving within the Triangle. Enter your property address and we automatically identify every utility and internet provider that serves it."
            details={[
              "Duke Energy, Piedmont Gas, city water detected by address",
              "Google Fiber, AT&T Fiber, or Spectrum availability checked",
              "Service type pre-selected based on your move direction",
            ]}
            visual={<IntakeVisual />}
          />
          <div style={{ height: 1, background: C.border }} />
          <StepSection
            num="2"
            title="Authorize and pay"
            description="Review and sign a two-checkbox Task Authorization — not a power of attorney. Provide your SSN and driver's license for provider verification (encrypted vault, 24-hour purge). Pay the $199 flat fee through our secure Stripe checkout."
            details={[
              "UETA-compliant electronic signature",
              "SSN + DL stored in encrypted Skyflow vault only",
              "24-hour revocation clause included",
              "ISP scheduling begins the moment you pay",
            ]}
            visual={<AuthVisual />}
            reverse
          />
          <div style={{ height: 1, background: C.border }} />
          <StepSection
            num="3"
            title="We handle every provider"
            description="Our team contacts Duke Energy, Piedmont Gas, your city water department, and coordinates your internet installation. You receive WhatsApp status updates at each milestone — you never make a single phone call."
            details={[
              "Portal submissions, phone calls, and scheduling handled",
              "Real-time WhatsApp / SMS status updates",
              "Exception handling if a provider needs additional info",
              "All PII purged 24 hours after completion",
            ]}
            visual={<TrackingVisual />}
          />
        </div>
      </section>

      <Timeline />
      <WhatWeHandle />
      <CTASection />
      <Footer />
    </div>
  );
}
