"use client";
import { useState, useEffect, useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

// Stripe.js loaded once at module scope (recommended pattern).
// Falls back to a no-op promise if the env var is missing so the page still renders in dev.
const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

// Tier definitions — keep in sync with PRICES in /api/create-payment-intent/route.js
const TIERS = [
  {
    id: "essentials",
    name: "Essentials",
    price: 99,
    tagline: "ISP, alarm, pest, bulk trash",
    includes: [
      "ISP scheduling (Google Fiber, AT&T, Spectrum)",
      "Alarm service setup",
      "Pest control setup",
      "Bulk trash pickup scheduling",
    ],
  },
  {
    id: "full_move",
    name: "Full Move",
    price: 199,
    tagline: "Everything in Essentials plus utilities",
    includes: [
      "Everything in Essentials",
      "Duke Energy activation / disconnection",
      "Piedmont Gas service",
      "City water (Durham, Raleigh, Cary)",
    ],
    recommended: true,
  },
];

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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, padding: "24px 0 8px", flexWrap: "wrap" }}>
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

function Step1({ formData, setFormData, onNext }) {
  const moveTypes = [
    { label: "Moving to NC", desc: "Out-of-state buyer relocating to the Triangle" },
    { label: "Leaving NC", desc: "Selling your Triangle home, moving out of state" },
    { label: "Moving within NC", desc: "Relocating within the Triangle market" },
  ];

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const canProceed =
    formData.tier &&
    formData.address.length > 5 &&
    formData.name.length > 2 &&
    formData.email.includes("@");

  const selectedTier = TIERS.find(t => t.id === formData.tier);

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 8px", fontWeight: 400 }}>Tell us about your move</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: 0 }}>Choose your service tier and we&apos;ll identify every provider at your address.</p>
      </div>

      {/* TIER SELECTION */}
      <div style={{ marginBottom: 32 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 12 }}>Choose your service tier</label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {TIERS.map((t) => {
            const selected = formData.tier === t.id;
            return (
              <div
                key={t.id}
                onClick={() => update("tier", t.id)}
                style={{
                  position: "relative",
                  padding: "20px 18px",
                  borderRadius: 12,
                  border: `1.5px solid ${selected ? C.primary : C.border}`,
                  background: selected ? C.light : C.white,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {t.recommended && (
                  <div style={{ position: "absolute", top: -10, right: 14, background: C.amber, color: C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 4 }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Radio selected={selected} />
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 18, color: C.deep }}>{t.name}</div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep }}>${t.price}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted }}>flat fee</span>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{t.tagline}</div>
              </div>
            );
          })}
        </div>
        {selectedTier && (
          <div style={{ marginTop: 14, padding: "12px 16px", background: C.parchment, borderRadius: 8 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid, fontWeight: 500, letterSpacing: "0.08em", marginBottom: 8 }}>WHAT&apos;S INCLUDED</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {selectedTier.includes.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7L6 10L11 4" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 10 }}>What type of move?</label>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {moveTypes.map((m, i) => (
            <div key={i} onClick={() => update("moveType", i)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 10, border: `1.5px solid ${formData.moveType === i ? C.primary : C.border}`, background: formData.moveType === i ? C.light : C.white, cursor: "pointer", transition: "all 0.15s ease" }}>
              <Radio selected={formData.moveType === i} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>{m.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 1 }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>{formData.moveType === 1 ? "Current address (to disconnect)" : "New address (to activate)"}</label>
        <input value={formData.address} onChange={e => update("address", e.target.value)} placeholder="123 Main St, Durham, NC 27701" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Full name</label>
          <input value={formData.name} onChange={e => update("name", e.target.value)} placeholder="Jane Smith" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Email</label>
          <input value={formData.email} onChange={e => update("email", e.target.value)} placeholder="jane@example.com" type="email" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Phone</label>
          <input value={formData.phone} onChange={e => update("phone", e.target.value)} placeholder="(919) 555-0172" type="tel" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Closing date (approximate)</label>
          <input value={formData.closing} onChange={e => update("closing", e.target.value)} type="date" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box" }}/>
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 10 }}>Preferred communication channel</label>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["WhatsApp", "SMS", "Email"].map((ch, i) => (
            <button key={i} onClick={() => update("comm", i)} style={{ padding: "10px 20px", borderRadius: 8, border: `1.5px solid ${formData.comm === i ? C.primary : C.border}`, background: formData.comm === i ? C.light : C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: formData.comm === i ? 500 : 400, color: formData.comm === i ? C.deep : C.muted, cursor: "pointer", transition: "all 0.15s ease" }}>{ch}</button>
          ))}
        </div>
      </div>

      {formData.address.length > 5 && (
        <div style={{ background: C.light, borderRadius: 10, padding: "16px 20px", marginBottom: 28, transition: "all 0.3s ease" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.mid, fontWeight: 500, letterSpacing: "0.08em", marginBottom: 10 }}>PROVIDERS DETECTED AT YOUR ADDRESS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {(formData.tier === "essentials"
              ? ["Google Fiber", "AT&T Fiber", "Spectrum"]
              : ["Duke Energy", "Piedmont Gas", "Durham Water", "Google Fiber", "AT&T Fiber", "Spectrum"]
            ).map((p, i) => (
              <span key={i} style={{ padding: "5px 12px", borderRadius: 6, background: C.white, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.ink }}>{p}</span>
            ))}
          </div>
        </div>
      )}

      <button onClick={canProceed ? onNext : undefined} style={{ width: "100%", padding: "14px", borderRadius: 8, background: canProceed ? C.deep : C.border, color: canProceed ? C.white : C.muted, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: canProceed ? "pointer" : "default", transition: "all 0.2s ease" }}>
        {selectedTier ? `Continue to payment — $${selectedTier.price}` : "Continue to payment"}
      </button>
    </div>
  );
}

// Inner payment form — must be rendered inside <Elements> to access Stripe context.
function PaymentForm({ formData, onSuccess, onBack, amount, label }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setErrorMessage(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Stripe needs a return_url for redirect-based methods (e.g. Cash App, Klarna).
        // For card payments this won't actually redirect — Stripe stays on-page.
        return_url: `${window.location.origin}/get-started?payment=success`,
        receipt_email: formData.email,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed. Please try again.");
      setProcessing(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      onSuccess();
    } else {
      // Edge case: payment requires action handled by Stripe's redirect flow
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink }}>{label}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 2 }}>One-time service fee</div>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink }}>${(amount / 100).toFixed(2)}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted }}>Processing fee</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted }}>$0.00</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.deep }}>Total</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep }}>${(amount / 100).toFixed(2)}</div>
        </div>
      </div>

      <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px", marginBottom: 24 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, marginBottom: 16 }}>Payment details</div>
        <PaymentElement options={{ layout: "tabs" }} />
      </div>

      {errorMessage && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "12px 16px", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#991B1B" }}>
          {errorMessage}
        </div>
      )}

      <div style={{ background: C.light, borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", alignItems: "flex-start", gap: 12 }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="9" cy="9" r="7.5" stroke={C.mid} strokeWidth="1.2"/>
          <path d="M9 5.5v4" stroke={C.mid} strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="9" cy="12.5" r="0.6" fill={C.mid}/>
        </svg>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.mid, lineHeight: 1.6 }}>Your ISP scheduling begins immediately after payment. Utility activations begin after you complete the e-sign authorization in the next step.</div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button type="button" onClick={onBack} disabled={processing} style={{ padding: "14px 24px", borderRadius: 8, background: C.white, color: C.ink, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: processing ? "default" : "pointer", opacity: processing ? 0.5 : 1 }}>Back</button>
        <button type="submit" disabled={processing || !stripe} style={{ flex: 1, padding: "14px", borderRadius: 8, background: processing ? C.mid : C.deep, color: C.white, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: processing ? "default" : "pointer", transition: "all 0.2s ease" }}>
          {processing ? "Processing…" : `Pay $${(amount / 100).toFixed(2)}`}
        </button>
      </div>
    </form>
  );
}

// Outer Step2 — fetches the PaymentIntent client_secret from our API, then mounts <Elements>.
function Step2({ formData, onNext, onBack }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [paymentMeta, setPaymentMeta] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function createIntent() {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tier: formData.tier,
            email: formData.email,
            name: formData.name,
            moveType: ["moving_to_nc", "leaving_nc", "within_nc"][formData.moveType] || "",
            address: formData.address,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not start payment");
        if (!cancelled) {
          setClientSecret(data.clientSecret);
          setPaymentMeta({ amount: data.amount, label: data.label });
        }
      } catch (err) {
        if (!cancelled) setFetchError(err.message);
      }
    }
    createIntent();
    return () => { cancelled = true; };
  }, [formData.tier, formData.email, formData.name, formData.moveType, formData.address]);

  const appearance = useMemo(() => ({
    theme: "stripe",
    variables: {
      colorPrimary: C.primary,
      colorBackground: C.white,
      colorText: C.ink,
      colorDanger: "#991B1B",
      fontFamily: "DM Sans, system-ui, sans-serif",
      borderRadius: "8px",
    },
  }), []);

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 8px", fontWeight: 400 }}>Payment</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, margin: 0 }}>Secure checkout via Stripe. Your card information never touches our servers.</p>
      </div>

      {fetchError && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "16px 20px", marginBottom: 20, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#991B1B" }}>
          {fetchError}
          <div style={{ marginTop: 12 }}>
            <button onClick={onBack} style={{ padding: "10px 20px", borderRadius: 8, background: C.white, color: C.ink, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Back</button>
          </div>
        </div>
      )}

      {!fetchError && !clientSecret && (
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "48px 24px", textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted }}>
          Preparing secure checkout…
        </div>
      )}

      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <PaymentForm
            formData={formData}
            onSuccess={onNext}
            onBack={onBack}
            amount={paymentMeta.amount}
            label={paymentMeta.label}
          />
        </Elements>
      )}

      {clientSecret && !stripePromise && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "16px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#991B1B" }}>
          Stripe publishable key not configured. Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your environment.
        </div>
      )}
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
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: C.deep, margin: "0 0 12px", fontWeight: 400 }}>You&apos;re all set.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>Your authorization is signed. We&apos;re redirecting you to Notarize.com to complete identity verification — it takes about 5 minutes on your phone.</p>

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
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, marginTop: 12 }}>You&apos;ll also receive a WhatsApp message with this link.</div>
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
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.6, marginBottom: 16 }}>Utility providers like Duke Energy require identity verification to activate service. Your SSN and driver&apos;s license number are stored in an encrypted PII vault and automatically purged 24 hours after your engagement is complete. This data never enters our standard database.</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 0 }}>
            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Social Security number</label>
              <input value={ssn} onChange={e => setSsn(e.target.value)} placeholder="XXX-XX-XXXX" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, outline: "none", background: C.white, boxSizing: "border-box", letterSpacing: "0.05em" }}/>
            </div>
            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.ink, display: "block", marginBottom: 6 }}>Driver&apos;s license number</label>
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
  const [formData, setFormData] = useState({
    tier: "",
    moveType: 0,
    address: "",
    name: "",
    email: "",
    phone: "",
    closing: "",
    comm: 0,
  });

  return (
    <div style={{ background: C.parchment, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Nav />

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 2rem 4rem" }}>
        <StepIndicator current={step} />

        <div style={{ marginTop: 32 }}>
          {step === 0 && <Step1 formData={formData} setFormData={setFormData} onNext={() => setStep(1)} />}
          {step === 1 && <Step2 formData={formData} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
          {step === 2 && <Step3 onBack={() => setStep(1)} />}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <span>Encrypted PII vault</span>
            <span style={{ color: C.border }}>|</span>
            <span>PCI SAQ A compliant</span>
            <span style={{ color: C.border }}>|</span>
            <span>24-hour revocation</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
