"use client";
import { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C } from "@/components/brand";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mpqkqkbj", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
    setSending(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: C.ink,
    background: C.white,
    border: `1px solid ${C.border}`,
    borderRadius: 6,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: C.ink,
    fontWeight: 500,
    display: "block",
    marginBottom: 6,
  };

  if (submitted) {
    return (
      <div style={{ background: C.light, border: `1px solid ${C.primary}`, borderRadius: 10, padding: "40px 32px", textAlign: "center" }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 16 }}>
          <circle cx="24" cy="24" r="22" stroke={C.primary} strokeWidth="2.5" fill="none" />
          <path d="M14 24L21 31L34 17" stroke={C.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: C.deep, fontWeight: 400, margin: "0 0 8px" }}>Message received</h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.muted, margin: 0, lineHeight: 1.6 }}>We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="contact-form-grid">
        <div>
          <label style={labelStyle}>Full name</label>
          <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="Jane Smith" onFocus={(e) => e.target.style.borderColor = C.primary} onBlur={(e) => e.target.style.borderColor = C.border} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="jane@example.com" onFocus={(e) => e.target.style.borderColor = C.primary} onBlur={(e) => e.target.style.borderColor = C.border} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="contact-form-grid">
        <div>
          <label style={labelStyle}>Phone <span style={{ color: C.muted, fontWeight: 400 }}>(optional)</span></label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="(919) 555-0123" onFocus={(e) => e.target.style.borderColor = C.primary} onBlur={(e) => e.target.style.borderColor = C.border} />
        </div>
        <div>
          <label style={labelStyle}>I'm interested in</label>
          <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237A7A72' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 40 }} onFocus={(e) => e.target.style.borderColor = C.primary} onBlur={(e) => e.target.style.borderColor = C.border}>
            <option value="">Select a service</option>
            <option value="moving-to-nc">Moving to NC (utility activation)</option>
            <option value="leaving-nc">Leaving NC (utility disconnection)</option>
            <option value="moving-within-nc">Moving within NC (both)</option>
            <option value="attorney-partnership">Attorney / broker partnership</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: "vertical" }} placeholder="Tell us about your move or question..." onFocus={(e) => e.target.style.borderColor = C.primary} onBlur={(e) => e.target.style.borderColor = C.border} />
      </div>

      {error && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#c0392b", margin: 0 }}>Something went wrong. Please try again or email us directly at info@verityrelocation.com.</p>
      )}

      <button type="submit" disabled={sending} style={{ background: sending ? C.muted : C.deep, color: C.white, border: "none", borderRadius: 6, padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: sending ? "default" : "pointer", alignSelf: "flex-start", transition: "background 0.2s" }} onMouseEnter={(e) => { if (!sending) e.target.style.background = C.mid; }} onMouseLeave={(e) => { if (!sending) e.target.style.background = C.deep; }}>
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function ContactInfo() {
  const items = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 4H17V15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15V4Z" stroke={C.primary} strokeWidth="1.5" />
          <path d="M3 4L10 11L17 4" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Email",
      value: "info@verityrelocation.com",
      href: "mailto:info@verityrelocation.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H6.5L8.5 7L6.5 8.5C7.57096 10.671 9.329 12.429 11.5 13.5L13 11.5L17 13.5V15C17 16.1046 16.1046 17 15 17C8.37258 17 3 11.6274 3 5Z" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Phone",
      value: "(919) 364-3531",
      href: "tel:+19193643531",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 10.5C11.1046 10.5 12 9.60457 12 8.5C12 7.39543 11.1046 6.5 10 6.5C8.89543 6.5 8 7.39543 8 8.5C8 9.60457 8.89543 10.5 10 10.5Z" stroke={C.primary} strokeWidth="1.5" />
          <path d="M10 18C10 18 16 13 16 8.5C16 5.18629 13.3137 2.5 10 2.5C6.68629 2.5 4 5.18629 4 8.5C4 13 10 18 10 18Z" stroke={C.primary} strokeWidth="1.5" />
        </svg>
      ),
      label: "Location",
      value: "Durham, North Carolina",
      href: null,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: C.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {item.icon}
          </div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.05em", fontWeight: 500, marginBottom: 2 }}>{item.label}</div>
            {item.href ? (
              <a href={item.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink, textDecoration: "none" }}>{item.value}</a>
            ) : (
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink }}>{item.value}</div>
            )}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 12, padding: "20px 24px", background: C.light, borderRadius: 10 }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 16, color: C.deep, fontWeight: 400, marginBottom: 6 }}>Response time</div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>We respond to all inquiries within one business day. For urgent matters related to an upcoming closing, please note your closing date in your message.</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-layout { flex-direction: column !important; gap: 2.5rem !important; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Nav />

      {/* Hero */}
      <section style={{ background: C.deep, padding: "4rem 2.5rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.primary, letterSpacing: "0.15em", fontWeight: 500, marginBottom: 12 }}>GET IN TOUCH</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: C.white, fontWeight: 400, margin: 0 }}>Contact us</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#9FE1CB", marginTop: 12, maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>Whether you're planning a move or interested in partnering with us, we'd love to hear from you.</p>
      </section>
      <div style={{ height: 3, background: `linear-gradient(90deg, ${C.primary}, ${C.amber})` }} />

      {/* Content */}
      <section style={{ background: C.parchment, padding: "4rem 2.5rem 5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: "4rem", alignItems: "flex-start" }} className="contact-layout">
          {/* Form */}
          <div style={{ flex: 1.4 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep, fontWeight: 400, margin: "0 0 8px" }}>Send us a message</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: "0 0 24px", lineHeight: 1.6 }}>Fill out the form below and we'll get back to you promptly.</p>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div style={{ flex: 0.8, minWidth: 260 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep, fontWeight: 400, margin: "0 0 24px" }}>Contact information</h2>
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
