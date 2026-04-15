"use client";
import { useState, useEffect } from "react";

const C = {
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

function Shield({ size = 36, color = C.deep, check }) {
  return (
    <svg width={size} height={size * 1.09} viewBox="-4 0 68 70" fill="none">
      <path d="M0 2 L58 2 Q62 2 62 6 L62 38 Q62 56 30 66 Q10 60 2 52" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 36 L23 50 L52 18" stroke={check || color} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Nav() {
  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2.5rem", background: C.parchment, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Shield size={36} />
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 22, color: C.deep, lineHeight: 1 }}>Verity</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: C.primary, letterSpacing: "0.18em", fontWeight: 500, marginTop: 1 }}>RELOCATION</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
        <a href="#" style={{ color: C.ink, textDecoration: "none" }}>How it works</a>
        <a href="#" style={{ color: C.primary, textDecoration: "none", fontWeight: 500 }}>Services</a>
        <a href="#" style={{ color: C.ink, textDecoration: "none" }}>FAQ</a>
        <button style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Get started</button>
      </div>
    </nav>
  );
}

function PageHero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 100); }, []);
  return (
    <section style={{ background: C.ink, padding: "5rem 2.5rem 4.5rem", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)", transition: "all 0.7s ease" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 16 }}>SERVICES + PRICING</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: C.white, lineHeight: 1.2, margin: "0 0 1.25rem", fontWeight: 400 }}>One price. Every provider.<br/>Every direction.</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#9FE1CB", lineHeight: 1.7, margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>Whether you're moving to the Triangle, leaving North Carolina, or relocating across town — Verity handles every utility and internet provider for a single flat fee.</p>
      </div>
    </section>
  );
}

function PricingHero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 300); }, []);
  return (
    <section style={{ background: C.parchment, padding: "4rem 2.5rem 1rem" }}>
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center", opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.95)", transition: "all 0.5s ease" }}>
        <div style={{ background: C.white, border: `2px solid ${C.primary}`, borderRadius: 16, padding: "40px 32px 36px", position: "relative" }}>
          <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.primary, color: C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", padding: "5px 16px", borderRadius: 20 }}>FLAT FEE — ALL SERVICES</div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6, marginBottom: 8 }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 72, color: C.deep, lineHeight: 1 }}>$199</span>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.muted, marginBottom: 24 }}>per engagement, all providers included</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left", marginBottom: 28 }}>
            {[
              "Duke Energy, Piedmont Gas, city water",
              "Google Fiber, AT\u0026T Fiber, or Spectrum",
              "WhatsApp status updates at every milestone",
              "UETA-compliant Task Authorization",
              "SSN + DL encrypted via Skyflow, 24-hour purge",
              "No hidden fees, no per-provider charges",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M4 9.5L7.5 13L14 5" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
          <button style={{ width: "100%", background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Get started</button>
        </div>
      </div>
    </section>
  );
}

function PersonaCards() {
  const [active, setActive] = useState(0);
  const personas = [
    {
      tab: "Moving to NC",
      title: "Out-of-state buyer",
      subtitle: "Relocating to the Triangle from another state",
      situation: "You've closed on a home in Wake, Durham, or Orange County. You don't know which utility providers serve your address, you can't navigate their portals with an out-of-state ID, and you need internet on Day 1 for remote work.",
      weHandle: [
        "Duke Energy new service activation",
        "Piedmont Natural Gas new account",
        "City water department activation (Durham, Raleigh, or Chapel Hill)",
        "Google Fiber, AT&T Fiber, or Spectrum installation scheduling",
      ],
      youGet: [
        "All utilities active before you arrive",
        "Internet installation scheduled for your first week",
        "Confirmation numbers for every account",
        "Zero phone calls, zero portal navigation",
      ],
      time: "3–5 hours of phone calls eliminated",
      pain: "Unfamiliar providers, out-of-state ID friction, remote logistics",
    },
    {
      tab: "Leaving NC",
      title: "Outbound seller",
      subtitle: "Selling your Triangle home and moving out of state",
      situation: "You've sold your home and you're moving out of North Carolina. Every provider needs a disconnection request, final meter reading, and deposit refund coordination — and you're juggling a move at the same time.",
      weHandle: [
        "Duke Energy disconnection and final billing",
        "Piedmont Natural Gas service close",
        "City water department final reading request",
        "ISP disconnection and equipment return coordination",
      ],
      youGet: [
        "All services disconnected on your schedule",
        "Final bills routed to your forwarding address",
        "Deposit refunds initiated where applicable",
        "No surprise charges after you leave",
      ],
      time: "1–2 hours of phone calls eliminated",
      pain: "Multiple disconnection processes while packing and moving",
    },
    {
      tab: "Moving within NC",
      title: "In-state mover",
      subtitle: "Relocating within the Triangle market",
      situation: "You're moving from one Triangle address to another. Every provider needs a service transfer or a disconnect-and-reconnect — that's double the calls, double the portals, double the scheduling headaches.",
      weHandle: [
        "Duke Energy transfer or disconnect/reconnect",
        "Piedmont Gas transfer to new address",
        "City water activation at new address + close at old",
        "ISP transfer or new installation at new address",
      ],
      youGet: [
        "Seamless transition with no service gaps",
        "Old address disconnected on your move-out date",
        "New address activated on your move-in date",
        "Single point of coordination for all providers",
      ],
      time: "4–6 hours of phone calls eliminated",
      pain: "Double the provider interactions — disconnect old, activate new",
    },
  ];

  const p = personas[active];

  return (
    <section style={{ background: C.parchment, padding: "3rem 2.5rem 5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>WHO WE SERVE</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>Same price. Tailored to your move.</h2>
        </div>

        <div style={{ display: "flex", gap: 0, marginBottom: 32, background: C.white, borderRadius: 10, border: `1px solid ${C.border}`, overflow: "hidden" }}>
          {personas.map((per, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: "14px 16px",
                background: active === i ? C.deep : "transparent",
                color: active === i ? C.white : C.ink,
                border: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                borderRight: i < 2 ? `1px solid ${C.border}` : "none",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {per.tab}
            </button>
          ))}
        </div>

        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "32px 36px", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep, margin: "0 0 4px", fontWeight: 400 }}>{p.title}</h3>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>{p.subtitle}</div>
              </div>
              <div style={{ background: C.light, borderRadius: 8, padding: "8px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep }}>$199</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid }}>flat fee</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, lineHeight: 1.7, margin: 0 }}>{p.situation}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            <div style={{ padding: "28px 36px", borderRight: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 16 }}>WHAT WE HANDLE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {p.weHandle.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "28px 36px" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.amber, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 16 }}>WHAT YOU GET</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {p.youGet.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M3 8.5L6.5 12L13 4" stroke={C.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 36px", background: C.light, borderTop: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.mid }}>
                <span style={{ fontWeight: 500 }}>{p.time}</span>
              </div>
              <div style={{ width: 1, height: 16, background: C.border }} />
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>{p.pain}</div>
            </div>
            <button style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section style={{ background: C.white, padding: "5rem 2.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>WHY VERITY</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>What $199 replaces</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: "#FDF6F0", padding: "20px 28px", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.1em", fontWeight: 500, color: "#B85042", marginBottom: 4 }}>WITHOUT VERITY</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 20, color: C.ink }}>The DIY experience</div>
            </div>
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "45 min on hold with Duke Energy",
                "Navigate Duke's portal with out-of-state ID",
                "Call Piedmont Gas, wait for callback",
                "Visit city water office or mail forms",
                "Schedule Google Fiber — 2 week wait",
                "Reschedule when ISP conflicts with move date",
                "Track 4 separate confirmation numbers",
                "3–6 hours total, spread across a week",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M4 4L12 12M12 4L4 12" stroke="#B85042" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: `2px solid ${C.primary}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: C.light, padding: "20px 28px", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.1em", fontWeight: 500, color: C.mid, marginBottom: 4 }}>WITH VERITY</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 20, color: C.deep }}>The handled experience</div>
            </div>
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Enter your address",
                "Sign two checkboxes",
                "Pay $199",
                "Receive WhatsApp confirmation",
                "Receive \"Duke Energy active\" update",
                "Receive \"Google Fiber scheduled\" update",
                "Receive \"All providers confirmed\" update",
                "Move in. Lights on. Internet ready.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsIncluded() {
  const categories = [
    {
      label: "EXECUTION",
      items: [
        { title: "Provider portal submissions", desc: "We navigate Duke Energy, Piedmont Gas, and city water portals on your behalf" },
        { title: "Phone-based activations", desc: "For providers requiring phone interaction, we handle IVR navigation and wait times" },
        { title: "ISP installation scheduling", desc: "We coordinate Google Fiber, AT&T, or Spectrum install windows around your move date" },
      ],
    },
    {
      label: "COMMUNICATION",
      items: [
        { title: "WhatsApp status updates", desc: "Real-time notifications at each milestone — account confirmed, install scheduled, all done" },
        { title: "SMS fallback", desc: "If WhatsApp isn't available, all updates sent via SMS" },
        { title: "Confirmation documentation", desc: "Account numbers, confirmation codes, and install details delivered to you" },
      ],
    },
    {
      label: "SECURITY",
      items: [
        { title: "Encrypted PII vault", desc: "Your SSN and driver\u2019s license are tokenized via Skyflow \u2014 never stored in our application database. 24-hour TTL purge after completion." },
        { title: "No credential storage", desc: "We never ask for or store your existing login credentials for any provider. SSN and DL are used only for provider verification." },
        { title: "UETA-compliant authorization", desc: "Legally valid electronic signature with 24-hour revocation clause" },
      ],
    },
  ];

  return (
    <section style={{ background: C.parchment, padding: "5rem 2.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>WHAT'S INCLUDED</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>Everything in the $199 flat fee</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {categories.map((cat, ci) => (
            <div key={ci}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.12em", fontWeight: 500, marginBottom: 16 }}>{cat.label}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {cat.items.map((item, i) => (
                  <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: "20px" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: C.light, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
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
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.white, margin: "1.5rem 0 1rem", fontWeight: 400 }}>Your move is complicated enough.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#9FE1CB", lineHeight: 1.7, margin: "0 0 2rem" }}>$199. All providers. All directions. We handle the utilities so you can handle the move.</p>
        <button style={{ background: C.white, color: C.deep, border: "none", borderRadius: 6, padding: "14px 40px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Get started</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.ink, padding: "3rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Shield size={28} color="#5DCAA5" check="#E8F5EF" />
            <div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 18, color: C.light, lineHeight: 1 }}>Verity</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 7, color: "#5DCAA5", letterSpacing: "0.18em", fontWeight: 500, marginTop: 1 }}>RELOCATION</div>
            </div>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.6 }}>A DBA of Verity Agentic Services LLC<br/>Durham, North Carolina</p>
        </div>
        <div style={{ display: "flex", gap: 48, fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ color: C.muted, fontSize: 11, letterSpacing: "0.1em", fontWeight: 500 }}>COMPANY</span>
            <a href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>How it works</a>
            <a href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Services</a>
            <a href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>FAQ</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ color: C.muted, fontSize: 11, letterSpacing: "0.1em", fontWeight: 500 }}>LEGAL</span>
            <a href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Privacy policy</a>
            <a href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Terms of service</a>
            <a href="#" style={{ color: "#9FE1CB", textDecoration: "none" }}>Task Authorization</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "2rem auto 0", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted }}>
        {"\u00A9"} 2026 Verity Agentic Services LLC. All rights reserved.
      </div>
    </footer>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Nav />
      <PageHero />
      <PricingHero />
      <PersonaCards />
      <Comparison />
      <WhatsIncluded />
      <CTASection />
      <Footer />
    </div>
  );
}
