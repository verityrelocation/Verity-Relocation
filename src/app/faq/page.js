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
        <a href="#" style={{ color: C.ink, textDecoration: "none" }}>Services</a>
        <a href="#" style={{ color: C.primary, textDecoration: "none", fontWeight: 500 }}>FAQ</a>
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
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 16 }}>FAQ + TRUST</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: C.white, lineHeight: 1.2, margin: "0 0 1.25rem", fontWeight: 400 }}>Questions you should ask.<br/>Answers we're proud of.</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#9FE1CB", lineHeight: 1.7, margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>You're trusting us with your utility accounts. Here's how we earn that trust — with transparency about security, legal compliance, and how your data is handled.</p>
      </div>
    </section>
  );
}

function TrustPillars() {
  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v6c0 5.25 3.75 10.2 9 11.25C17.25 23.2 21 18.25 21 13V7l-9-5z" stroke={C.primary} strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Data security",
      desc: "Your Social Security number, driver\u2019s license, and personal information are stored in an encrypted PII vault with a 24-hour time-to-live purge. SSN and DL are tokenized via Skyflow \u2014 they never enter our application database. We never store credit card information \u2014 payments are processed through Stripe\u2019s PCI-compliant hosted checkout.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke={C.primary} strokeWidth="1.5"/>
          <path d="M3 10h18" stroke={C.primary} strokeWidth="1.5"/>
          <path d="M7 15h4" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Legal compliance",
      desc: "Verity operates under a UETA-compliant Task Authorization — not a power of attorney. Our co-marketing agreements with closing attorneys are structured for full RESPA Section 8 compliance. We do not practice law, provide legal advice, or act as a licensed real estate service.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={C.primary} strokeWidth="1.5"/>
          <path d="M12 7v5l3 3" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Revocation rights",
      desc: "Your Task Authorization includes a 24-hour revocation clause. You can cancel at any time within 24 hours of signing for a full refund, no questions asked. After 24 hours, you can still revoke authorization — we'll stop all pending provider actions immediately.",
    },
  ];

  return (
    <section style={{ background: C.parchment, padding: "4.5rem 2.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>HOW WE PROTECT YOU</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>Built on trust, not fine print</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "28px 24px" }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: C.light, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: C.deep, margin: "0 0 10px", fontWeight: 400 }}>{p.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceBadges() {
  const badges = [
    { code: "RESPA \u00A7 8", title: "Real Estate Settlement Procedures Act", desc: "Our co-marketing structure with closing attorneys is designed for full Section 8 compliance. No per-referral payments. No required-use arrangements." },
    { code: "UETA", title: "Uniform Electronic Transactions Act", desc: "All Task Authorizations are executed under UETA via electronic signature. Legally binding in North Carolina per N.C.G.S. \u00A7 66-311." },
    { code: "N.C.G.S. \u00A7 75-65", title: "NC Identity Theft Protection Act", desc: "Personal information collected during intake is subject to North Carolina\u2019s data protection requirements including breach notification obligations." },
    { code: "PCI SAQ A", title: "Payment Card Industry Compliance", desc: "Payments processed via Stripe hosted checkout. No card data touches our servers. PCI scope limited to SAQ A — the most restrictive compliance tier." },
  ];

  return (
    <section style={{ background: C.white, padding: "4.5rem 2.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>COMPLIANCE FRAMEWORK</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>The legal architecture</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {badges.map((b, i) => (
            <div key={i} style={{ border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ background: C.light, borderRadius: 8, padding: "10px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: C.mid, whiteSpace: "nowrap", flexShrink: 0, letterSpacing: "0.02em" }}>{b.code}</div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink, marginBottom: 6 }}>{b.title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openCat, setOpenCat] = useState(0);
  const [openQ, setOpenQ] = useState(null);

  const categories = [
    {
      label: "General",
      faqs: [
        { q: "What exactly does Verity do?", a: "We contact Duke Energy, Piedmont Gas, your city water department, and internet providers on your behalf to activate, disconnect, or transfer service. You sign a simple Task Authorization and we handle every call, portal submission, and scheduling confirmation. You receive WhatsApp updates at each milestone." },
        { q: "How is this different from a checklist app like Updater?", a: "Checklist apps tell you what to do. We do it. You don\u2019t make a single phone call, navigate a single portal, or wait on hold for a single minute. We execute the provider interactions end-to-end." },
        { q: "Why does this cost $199?", a: "The $199 covers all providers at your address \u2014 electric, gas, water, and internet. The alternative is 3\u20136 hours of your time on hold, navigating portals, and coordinating schedules. For most people, the math is simple: $199 is less than half a day of lost productivity." },
        { q: "What if I only need internet setup, not utilities?", a: "The $199 flat fee covers all providers. We don\u2019t charge per-provider because the coordination is the hard part \u2014 and we handle it all in one engagement regardless of how many services you need." },
      ],
    },
    {
      label: "Security & privacy",
      faqs: [
        { q: "Why do you need my Social Security number?", a: "Utility providers like Duke Energy require your SSN for credit verification when establishing new service. Without it, your activation will be delayed or rejected. We collect it once during the authorization step \u2014 it goes directly into an encrypted PII vault (Skyflow) and is automatically purged 24 hours after your engagement is complete. It never enters our application database." },
        { q: "Do I need to share my login credentials?", a: "No. We create new accounts or manage service requests directly with providers using your Task Authorization. We never ask for or store your existing login credentials." },
        { q: "How is my personal information stored?", a: "Your SSN, driver\u2019s license number, and personal details are stored in an encrypted PII vault (Skyflow or VGS) with a 24-hour time-to-live purge after your engagement is complete. This data is tokenized \u2014 it never sits in our standard database and is only accessible to authorized team members during active engagements." },
        { q: "How do you process payments?", a: "Payments are processed through Stripe\u2019s hosted checkout. Your card information never touches our servers. We maintain PCI SAQ A compliance \u2014 the most restrictive tier \u2014 because we don\u2019t handle card data at all." },
        { q: "What happens to my data after completion?", a: "All personally identifiable information \u2014 including your SSN and driver\u2019s license number \u2014 is automatically purged from our encrypted vault 24 hours after your engagement is marked complete. Confirmation numbers and account details are delivered to you before deletion." },
      ],
    },
    {
      label: "Legal & authorization",
      faqs: [
        { q: "What is a Task Authorization?", a: "A Task Authorization is a limited, UETA-compliant electronic document that authorizes Verity to contact utility and internet providers on your behalf. It contains two checkboxes: one for utilities, one for internet. It is not a power of attorney." },
        { q: "Can I cancel after signing?", a: "Yes. Your Task Authorization includes a 24-hour revocation clause. Within 24 hours of signing, you can cancel for a full refund. After 24 hours, you can still revoke authorization and we\u2019ll stop all pending actions immediately." },
        { q: "Is Verity licensed as a real estate service?", a: "Verity is not a real estate service, broker, or agent. We do not provide legal advice or practice law. We execute utility and internet provider interactions under a limited Task Authorization \u2014 the same way you might authorize a moving company to coordinate on your behalf." },
        { q: "Why does my attorney recommend Verity?", a: "Closing attorneys see every client go through the same painful utility setup. Verity gives them a way to solve that problem with a single recommendation. Our co-marketing structure is designed for full RESPA Section 8 compliance \u2014 no per-referral payments, no required-use arrangements." },
      ],
    },
    {
      label: "For attorneys",
      faqs: [
        { q: "How does the co-marketing partnership work?", a: "Verity offers co-branded marketing materials that attorneys can include in their closing packages. The structure is a co-marketing arrangement \u2014 not a referral fee program. We provide the collateral, you recommend the service. Full details are available in our co-marketing MSA." },
        { q: "Is this RESPA compliant?", a: "Yes. Our structure is designed for full RESPA Section 8 compliance. There are no per-referral payments, no required-use arrangements, and no kickbacks. We recommend obtaining an independent legal opinion letter, which we can facilitate." },
        { q: "What do my clients experience?", a: "Your client visits VerityRelocation.com, selects their move type, enters their address, signs a two-checkbox Task Authorization, and pays $199. From that moment, they receive WhatsApp updates as each provider is activated. They never wait on hold." },
        { q: "Can I see the Task Authorization language?", a: "Yes. A sample Task Authorization is available on request. The document names Verity Relocation, describes outcomes (not mechanisms), and includes a 24-hour revocation clause. We are happy to have your office review the language before you recommend the service." },
      ],
    },
  ];

  const activeCat = categories[openCat];

  return (
    <section style={{ background: C.parchment, padding: "5rem 2.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>FREQUENTLY ASKED QUESTIONS</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.deep, margin: 0, fontWeight: 400 }}>Everything you need to know</h2>
        </div>

        <div style={{ display: "flex", gap: 32 }}>
          <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => { setOpenCat(i); setOpenQ(null); }}
                style={{
                  padding: "10px 16px",
                  background: openCat === i ? C.white : "transparent",
                  border: openCat === i ? `1px solid ${C.border}` : "1px solid transparent",
                  borderRadius: 8,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: openCat === i ? 500 : 400,
                  color: openCat === i ? C.deep : C.muted,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {activeCat.faqs.map((faq, i) => (
                <div key={`${openCat}-${i}`} style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none" }}>
                  <button
                    onClick={() => setOpenQ(openQ === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      background: "none",
                      border: "none",
                      borderBottom: `1px solid ${C.border}`,
                      cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: C.ink,
                      textAlign: "left",
                      gap: 16,
                    }}
                  >
                    <span>{faq.q}</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, transform: openQ === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s ease" }}>
                      <path d="M9 3.5V14.5M3.5 9H14.5" stroke={C.muted} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {openQ === i && (
                    <div style={{ padding: "16px 0 20px", paddingRight: 32 }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AttorneyCallout() {
  return (
    <section style={{ background: C.white, padding: "4.5rem 2.5rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", gap: 40, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>FOR CLOSING ATTORNEYS</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 12px", fontWeight: 400 }}>Partner with Verity</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, lineHeight: 1.75, margin: "0 0 20px" }}>Every closing involves a buyer setting up new services and a seller disconnecting old ones. Verity gives you a single recommendation that solves both sides — and your clients will thank you for it.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              "Co-branded marketing materials provided",
              "RESPA Section 8 compliant structure",
              "Sample Task Authorization available for review",
              "No per-referral payments, no required-use",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3 8.5L6.5 12L13 4" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink }}>{item}</span>
              </div>
            ))}
          </div>
          <button style={{ background: C.deep, color: C.white, border: "none", borderRadius: 6, padding: "12px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Request partnership materials</button>
        </div>
        <div style={{ width: 320, flexShrink: 0, background: C.parchment, borderRadius: 14, border: `1px solid ${C.border}`, padding: "28px 24px" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 20 }}>WHAT YOUR CLIENTS SEE</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "Sign up", detail: "2 minutes", done: true },
              { label: "Authorization signed", detail: "Two checkboxes", done: true },
              { label: "Payment", detail: "$199 via Stripe", done: true },
              { label: "Duke Energy", detail: "Active", done: true },
              { label: "Google Fiber", detail: "Scheduled June 3", done: true },
              { label: "City water", detail: "Active", done: true },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L5 9L9.5 3.5" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink }}>{item.label}</span>
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted }}>{item.detail}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: "12px 16px", background: C.light, borderRadius: 8, textAlign: "center" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.mid }}>Total client time: under 5 minutes</div>
          </div>
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
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: C.white, margin: "1.5rem 0 1rem", fontWeight: 400 }}>Still have questions?</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#9FE1CB", lineHeight: 1.7, margin: "0 0 2rem" }}>Reach us at hello@verityrelocation.com or get started now. $199 flat fee, 24-hour revocation clause, all providers included.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{ background: C.white, color: C.deep, border: "none", borderRadius: 6, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Get started</button>
          <button style={{ background: "transparent", color: C.white, border: `1px solid rgba(255,255,255,0.25)`, borderRadius: 6, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Contact us</button>
        </div>
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
        {"\u00A9"} 2026 Verity Agentic Services LLC. All rights reserved. RESPA Section 8 compliant. UETA-authorized service execution.
      </div>
    </footer>
  );
}

export default function FAQPage() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet"/>
      <Nav />
      <PageHero />
      <TrustPillars />
      <ComplianceBadges />
      <FAQSection />
      <AttorneyCallout />
      <CTASection />
      <Footer />
    </div>
  );
}
