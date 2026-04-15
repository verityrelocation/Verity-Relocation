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

function Check({ checked }) {
  return (
    <div style={{ width: 22, height: 22, borderRadius: 5, background: checked ? C.primary : C.white, border: `1.5px solid ${checked ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer", transition: "all 0.15s ease" }}>
      {checked && <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 7L5.5 10L10.5 3.5" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
    </div>
  );
}

function Radio({ selected }) {
  return (
    <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${selected ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer", transition: "all 0.15s ease" }}>
      {selected && <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.primary }} />}
    </div>
  );
}

function StepIndicator({ current }) {
  const steps = ["Service agreement", "Payment", "E-sign authorization"];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, padding: "24px 0 8px" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: i < current ? C.primary : i === current ? C.deep : C.white,
              border: i <= current ? "none" : `1.5px solid ${C.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
              color: i <= current ? C.white : C.muted,
              transition: "all 0.3s ease",
            }}>
              {i < current ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5L6 10.5L11 4" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : i + 1}
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: i === current ? C.deep : C.muted, fontWeight: i === current ? 500 : 400, whiteSpace: "nowrap" }}>{s}</span>
          </div>
          {i < 2 && <div style={{ width: 48, height: 1, background: i < current ? C.primary : C.border, margin: "0 16px", transition: "background 0.3s ease" }} />}
        </div>
      ))}
    </div>
  );
}

function Step1({ onNext }) {
  const [moveType, setMoveType] = useState(0);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [closing, setClosing] = useState("");
  const [comm, setComm] = useState(0);

  const moveTypes = [
    { label: "Moving to NC", desc: "Out-of-state buyer relocating to the Triangle" },
    { label: "Leaving NC", desc: "Selling your Triangle home, moving out of state" },
    { label: "Moving within NC", desc: "Relocating within the Triangle market" },
  ];

  const canProceed = address.length > 5 && name.length > 2 && email.includes("@");

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 8px", fontWeight: 400 }}>Tell us about your move</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: 0 }}>We'll identify every utility and internet provider at your address.</p>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 10 }}>What type of move?</label>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {moveTypes.map((m, i) => (
            <div key={i} onClick={() => setMoveType(i)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 10, border: `1.5px solid ${moveType === i ? C.primary : C.border}`, background: moveType === i ? C.light : C.white, cursor: "pointer", transition: "all 0.15s ease" }}>
              <Radio selected={moveType === i} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>{m.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 1 }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>{moveType === 1 ? "Current address (to disconnect)" : "New address (to activate)"}</label>
        <input value={address} onChange={e => setAddress(e.target.value)} placeholder="123 Main St, Durham, NC 27701" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Full name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Jane Smith" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@example.com" type="email" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="(919) 555-0172" type="tel" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Closing date (approximate)</label>
          <input value={closing} onChange={e => setClosing(e.target.value)} type="date" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 10 }}>Preferred communication channel</label>
        <div style={{ display: "flex", gap: 10 }}>
          {["WhatsApp", "SMS", "Email"].map((ch, i) => (
            <button key={i} onClick={() => setComm(i)} style={{ padding: "10px 20px", borderRadius: 8, border: `1.5px solid ${comm === i ? C.primary : C.border}`, background: comm === i ? C.light : C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: comm === i ? 500 : 400, color: comm === i ? C.deep : C.muted, cursor: "pointer", transition: "all 0.15s ease" }}>{ch}</button>
          ))}
        </div>
      </div>

      {address.length > 5 && (
        <div style={{ background: C.light, borderRadius: 10, padding: "16px 20px", marginBottom: 28, transition: "all 0.3s ease" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid, fontWeight: 500, letterSpacing: "0.08em", marginBottom: 10 }}>PROVIDERS DETECTED AT YOUR ADDRESS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Duke Energy", "Piedmont Gas", "Durham Water", "Google Fiber", "AT&T Fiber", "Spectrum"].map((p, i) => (
              <span key={i} style={{ padding: "5px 12px", borderRadius: 6, background: C.white, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.ink }}>{p}</span>
            ))}
          </div>
        </div>
      )}

      <button onClick={canProceed ? onNext : undefined} style={{ width: "100%", padding: "14px", borderRadius: 8, background: canProceed ? C.deep : C.border, color: canProceed ? C.white : C.muted, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: canProceed ? "pointer" : "default", transition: "all 0.2s ease" }}>
        Continue to payment — $199
      </button>
    </div>
  );
}

function Step2({ onNext, onBack }) {
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => { setProcessing(false); onNext(); }, 1500);
  };

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 8px", fontWeight: 400 }}>Payment</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: 0 }}>Secure checkout via Stripe. Your card information never touches our servers.</p>
      </div>

      <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.ink }}>Order summary</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted, display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 4v4c0 3.5 2.1 6.4 5 7 2.9-.6 5-3.5 5-7V4L7 1z" stroke={C.primary} strokeWidth="1" strokeLinejoin="round"/></svg>
            Secured by Stripe
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink }}>Verity Relocation — full service</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 2 }}>All utility + internet providers</div>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>$199.00</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted }}>Processing fee</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted }}>$0.00</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.deep }}>Total</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep }}>$199.00</div>
        </div>
      </div>

      <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px", marginBottom: 24 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, marginBottom: 16 }}>Card details</div>
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, display: "block", marginBottom: 6 }}>Card number</label>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input placeholder="4242 4242 4242 4242" style={{ flex: 1, padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box", letterSpacing: "0.05em" }}/>
            <div style={{ display: "flex", gap: 4 }}>
              {["#1A1F71", "#FF5F00", "#EB001B"].map((col, i) => (
                <div key={i} style={{ width: 28, height: 18, borderRadius: 3, background: col, opacity: 0.7 }} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, display: "block", marginBottom: 6 }}>Expiration</label>
            <input placeholder="MM / YY" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
          </div>
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, display: "block", marginBottom: 6 }}>CVC</label>
            <input placeholder="123" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
          </div>
        </div>
      </div>

      <div style={{ background: C.light, borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", alignItems: "flex-start", gap: 12 }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="9" cy="9" r="7.5" stroke={C.mid} strokeWidth="1.2"/>
          <path d="M9 5.5v4" stroke={C.mid} strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="9" cy="12.5" r="0.6" fill={C.mid}/>
        </svg>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.mid, lineHeight: 1.6 }}>Your ISP scheduling begins immediately after payment. Utility activations begin after you complete the e-sign authorization in the next step.</div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={onBack} style={{ padding: "14px 24px", borderRadius: 8, background: C.white, color: C.ink, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>Back</button>
        <button onClick={handlePay} disabled={processing} style={{ flex: 1, padding: "14px", borderRadius: 8, background: processing ? C.mid : C.deep, color: C.white, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: processing ? "default" : "pointer", transition: "all 0.2s ease" }}>
          {processing ? "Processing..." : "Pay $199.00"}
        </button>
      </div>
    </div>
  );
}

function Step3({ onBack }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [dl, setDl] = useState("");
  const [ssn, setSsn] = useState("");
  const [signed, setSigned] = useState(false);

  const canSign = check1 && check2 && dl.length > 4 && ssn.length > 4;

  const handleSign = () => {
    if (canSign) setSigned(true);
  };

  if (signed) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 15L12 21L22 8" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 12px", fontWeight: 400 }}>You're all set.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>Your authorization is signed. We're redirecting you to Notarize.com to complete identity verification — it takes about 5 minutes on your phone.</p>

        <div style={{ background: C.light, borderRadius: 12, padding: "20px 24px", maxWidth: 400, margin: "0 auto 28px", textAlign: "left" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid, fontWeight: 500, letterSpacing: "0.08em", marginBottom: 14 }}>WHAT HAPPENS NEXT</div>
          {[
            { label: "ISP scheduling", status: "In progress", color: C.amber },
            { label: "Notarize.com verification", status: "Action needed", color: C.amber },
            { label: "Utility activations", status: "Waiting on notarization", color: C.muted },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: i > 0 ? `1px solid ${C.border}` : "none" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink }}>{item.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: item.color }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: item.color, fontWeight: 500 }}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>

        <button style={{ background: C.deep, color: C.white, border: "none", borderRadius: 8, padding: "14px 36px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>Continue to Notarize.com</button>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 12 }}>You'll also receive a WhatsApp message with this link.</div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 8px", fontWeight: 400 }}>Authorize Verity to act on your behalf</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: 0 }}>This is a limited Task Authorization — not a power of attorney. Review each item and check to confirm.</p>
      </div>

      <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "28px 24px", marginBottom: 24 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.primary, letterSpacing: "0.1em", fontWeight: 500, marginBottom: 20 }}>TASK AUTHORIZATION AGREEMENT</div>

        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, lineHeight: 1.7, marginBottom: 20, padding: "16px 20px", background: C.parchment, borderRadius: 8 }}>
          I, the undersigned, authorize Verity Relocation (a DBA of Verity Agentic Services LLC) to contact utility and internet service providers on my behalf for the purpose of activating, disconnecting, or transferring services at the address provided. This authorization is executed under the Uniform Electronic Transactions Act (UETA) and is subject to a 24-hour revocation clause.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
          <div onClick={() => setCheck1(!check1)} style={{ display: "flex", alignItems: "flex-start", gap: 14, cursor: "pointer", padding: "14px 16px", borderRadius: 10, border: `1.5px solid ${check1 ? C.primary : C.border}`, background: check1 ? C.light : C.white, transition: "all 0.15s ease" }}>
            <Check checked={check1} />
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>Authorize utility provider contact</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 4, lineHeight: 1.5 }}>I authorize Verity Relocation to contact Duke Energy, Piedmont Natural Gas, and my city water department to activate, disconnect, or transfer service on my behalf.</div>
            </div>
          </div>

          <div onClick={() => setCheck2(!check2)} style={{ display: "flex", alignItems: "flex-start", gap: 14, cursor: "pointer", padding: "14px 16px", borderRadius: 10, border: `1.5px solid ${check2 ? C.primary : C.border}`, background: check2 ? C.light : C.white, transition: "all 0.15s ease" }}>
            <Check checked={check2} />
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>Authorize internet service scheduling</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 4, lineHeight: 1.5 }}>I authorize Verity Relocation to schedule internet service installation with Google Fiber, AT&T Fiber, or Spectrum on my behalf.</div>
            </div>
          </div>
        </div>

        <div style={{ background: C.parchment, borderRadius: 10, padding: "20px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 4.5v4c0 3.25 2.5 6.3 6 7 3.5-.7 6-3.75 6-7v-4L8 1z" stroke={C.mid} strokeWidth="1.2" strokeLinejoin="round"/></svg>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid, fontWeight: 500, letterSpacing: "0.08em" }}>IDENTITY VERIFICATION — ENCRYPTED VAULT</span>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.6, marginBottom: 16 }}>Utility providers like Duke Energy require identity verification to activate service. Your SSN and driver's license number are stored in an encrypted PII vault and automatically purged 24 hours after your engagement is complete. This data never enters our standard database.</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 0 }}>
            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Social Security number</label>
              <input value={ssn} onChange={e => setSsn(e.target.value)} placeholder="XXX-XX-XXXX" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box", letterSpacing: "0.05em" }}/>
            </div>
            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Driver's license number</label>
              <input value={dl} onChange={e => setDl(e.target.value)} placeholder="License number" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
            </div>
          </div>
        </div>

        <div style={{ background: C.light, borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <path d="M8 1L2 4.5v4c0 3.25 2.5 6.3 6 7 3.5-.7 6-3.75 6-7v-4L8 1z" stroke={C.mid} strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.mid, lineHeight: 1.5 }}>This authorization includes a 24-hour revocation clause. You may revoke at any time within 24 hours for a full refund. SSN and DL stored via Skyflow encrypted vault — never in our application database.</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={onBack} style={{ padding: "14px 24px", borderRadius: 8, background: C.white, color: C.ink, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>Back</button>
        <button onClick={handleSign} style={{ flex: 1, padding: "14px", borderRadius: 8, background: canSign ? C.deep : C.border, color: canSign ? C.white : C.muted, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: canSign ? "pointer" : "default", transition: "all 0.2s ease" }}>
          Sign authorization
        </button>
      </div>
    </div>
  );
}

export default function IntakeFlow() {
  const [step, setStep] = useState(0);

  return (
    <div style={{ background: C.parchment, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.25rem 2.5rem", background: C.parchment, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Shield size={32} />
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 20, color: C.deep, lineHeight: 1 }}>Verity</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 7, color: C.primary, letterSpacing: "0.18em", fontWeight: 500, marginTop: 1 }}>RELOCATION</div>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 2rem 4rem" }}>
        <StepIndicator current={step} />

        <div style={{ marginTop: 32 }}>
          {step === 0 && <Step1 onNext={() => setStep(1)} />}
          {step === 1 && <Step2 onNext={() => setStep(2)} onBack={() => setStep(0)} />}
          {step === 2 && <Step3 onBack={() => setStep(1)} />}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <span>Encrypted PII vault</span>
            <span style={{ color: C.border }}>|</span>
            <span>PCI SAQ A compliant</span>
            <span style={{ color: C.border }}>|</span>
            <span>24-hour revocation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
