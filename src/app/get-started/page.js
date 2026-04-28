"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

function GetStartedInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [tier, setTier] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    moveOutDate: "",
    moveInDate: "",
    oldAddress: "",
    newAddress: "",
    ssn: "",
    dlNumber: "",
    dlState: "NC",
    consent: false,
    lpoaConsent: false,
  });

  // Pre-select tier from URL parameter
  useEffect(() => {
    const t = searchParams.get("tier");
    if (t === "essentials" || t === "full") {
      setTier(t);
    }
  }, [searchParams]);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const tierLabel = tier === "essentials" ? "Essentials" : tier === "full" ? "Full Move" : "";
  const tierPrice = tier === "essentials" ? "$99" : tier === "full" ? "$199" : "";

  return (
    <div style={{ background: C.parchment, color: C.ink, minHeight: "100vh" }}>
      <Nav />

      <section className="page-head">
        <div className="page-head-inner">
          <div className="eyebrow">Get Started</div>
          <h1>Let&rsquo;s set up your move.</h1>
          <p className="lede">
            Four steps. About five minutes. We&rsquo;ll handle the rest from there.
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="progress">
        <div className="progress-inner">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={`step-dot ${step >= n ? "active" : ""}`}>
              <div className="step-dot-num">{n}</div>
              <div className="step-dot-label">
                {n === 1 ? "Package" : n === 2 ? "Move details" : n === 3 ? "Verification" : "Authorize"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="form">
        <div className="form-inner">
          {/* STEP 1: Choose tier */}
          {step === 1 && (
            <div className="step-panel">
              <h2>Choose your package</h2>
              <p className="step-help">Pick the tier that matches your move.</p>

              <div className="tier-choice-grid">
                <button
                  type="button"
                  className={`tier-choice ${tier === "essentials" ? "selected" : ""}`}
                  onClick={() => setTier("essentials")}
                >
                  <div className="tc-name">Essentials</div>
                  <div className="tc-price">$99</div>
                  <ul>
                    <li>Internet service provider scheduling</li>
                    <li>Alarm setup</li>
                    <li>Pest control setup</li>
                    <li>Bulk trash pickup</li>
                  </ul>
                </button>

                <button
                  type="button"
                  className={`tier-choice ${tier === "full" ? "selected" : ""}`}
                  onClick={() => setTier("full")}
                >
                  <div className="tc-flag">Most chosen</div>
                  <div className="tc-name">Full Move</div>
                  <div className="tc-price">$199</div>
                  <ul>
                    <li>Everything in Essentials</li>
                    <li>Electric activation &amp; disconnect</li>
                    <li>Gas activation &amp; disconnect</li>
                    <li>Water service activation &amp; disconnect</li>
                    <li>
                      <strong>In-state movers:</strong> both directions, one fee
                    </li>
                  </ul>
                </button>
              </div>

              <div className="step-actions">
                <button
                  type="button"
                  className="btn-primary"
                  disabled={!tier}
                  onClick={next}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Move details */}
          {step === 2 && (
            <div className="step-panel">
              <div className="tier-banner">
                <span className="tier-banner-label">Selected:</span>{" "}
                <strong>{tierLabel}</strong> &mdash; {tierPrice} flat
              </div>
              <h2>Tell us about your move</h2>
              <p className="step-help">All fields are required.</p>

              <div className="field-row">
                <label className="field">
                  <span>First name</span>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Last name</span>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                  />
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Move-out date</span>
                  <input
                    type="date"
                    value={form.moveOutDate}
                    onChange={(e) => update("moveOutDate", e.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Move-in date</span>
                  <input
                    type="date"
                    value={form.moveInDate}
                    onChange={(e) => update("moveInDate", e.target.value)}
                  />
                </label>
              </div>

              <label className="field">
                <span>Current address</span>
                <input
                  type="text"
                  value={form.oldAddress}
                  onChange={(e) => update("oldAddress", e.target.value)}
                />
              </label>

              <label className="field">
                <span>New address</span>
                <input
                  type="text"
                  value={form.newAddress}
                  onChange={(e) => update("newAddress", e.target.value)}
                />
              </label>

              <div className="step-actions">
                <button type="button" className="btn-ghost" onClick={back}>
                  Back
                </button>
                <button type="button" className="btn-primary" onClick={next}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Verification */}
          {step === 3 && (
            <div className="step-panel">
              <div className="tier-banner">
                <span className="tier-banner-label">Selected:</span>{" "}
                <strong>{tierLabel}</strong> &mdash; {tierPrice} flat
              </div>
              <h2>Identity verification</h2>
              <p className="step-help">
                Utility providers require government-issued identification before they
                will activate or close an account in your name. Your information is
                encrypted on submission and purged within 24 hours after task completion.
              </p>

              <div className="security-note">
                <Shield size={32} />
                <div>
                  <strong>Encrypted, isolated storage.</strong>
                  <p>
                    Sensitive identifiers are stored in a dedicated PII vault separate
                    from our application systems. They are never sold, never shared with
                    marketing platforms, and are purged from the vault within 24 hours of
                    your task completion.
                  </p>
                </div>
              </div>

              <label className="field">
                <span>Social Security Number</span>
                <input
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="XXX-XX-XXXX"
                  value={form.ssn}
                  onChange={(e) => update("ssn", e.target.value)}
                />
              </label>

              <div className="field-row">
                <label className="field">
                  <span>Driver&rsquo;s License Number</span>
                  <input
                    type="text"
                    value={form.dlNumber}
                    onChange={(e) => update("dlNumber", e.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Issuing State</span>
                  <select
                    value={form.dlState}
                    onChange={(e) => update("dlState", e.target.value)}
                  >
                    <option value="NC">North Carolina</option>
                    <option value="SC">South Carolina</option>
                    <option value="VA">Virginia</option>
                    <option value="GA">Georgia</option>
                    <option value="TN">Tennessee</option>
                    <option value="OTHER">Other</option>
                  </select>
                </label>
              </div>

              <div className="step-actions">
                <button type="button" className="btn-ghost" onClick={back}>
                  Back
                </button>
                <button type="button" className="btn-primary" onClick={next}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Authorization */}
          {step === 4 && (
            <div className="step-panel">
              <div className="tier-banner">
                <span className="tier-banner-label">Selected:</span>{" "}
                <strong>{tierLabel}</strong> &mdash; {tierPrice} flat
              </div>
              <h2>Authorize the work</h2>
              <p className="step-help">
                Review and sign the Limited Power of Attorney that lets a Verity
                concierge complete the tasks you&rsquo;ve selected.
              </p>

              <div className="lpoa-summary">
                <h3>Summary of what you&rsquo;re authorizing</h3>
                <ul>
                  <li>
                    A Verity concierge may contact the providers tied to your selected
                    package and open or close accounts in your name.
                  </li>
                  <li>
                    The authorization covers only the tasks you&rsquo;ve selected at the
                    addresses you&rsquo;ve provided.
                  </li>
                  <li>
                    The authorization does <em>not</em> permit Verity to pay deposits,
                    transfer funds, or incur charges on your behalf.
                  </li>
                  <li>
                    The authorization is revocable at any time with 24 hours&rsquo; notice
                    for tasks already in progress.
                  </li>
                  <li>
                    The authorization expires automatically when the move-related tasks
                    you selected are complete.
                  </li>
                </ul>
                <p className="lpoa-cite">
                  Authorized under N.C.G.S. Chapter 32C (Uniform Power of Attorney Act)
                  and N.C.G.S. Chapter 66, Article 40 (Uniform Electronic Transactions
                  Act).
                </p>
                <p>
                  <Link href="/terms-of-service" target="_blank">
                    Read the full Terms of Service
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={form.lpoaConsent}
                  onChange={(e) => update("lpoaConsent", e.target.checked)}
                />
                <span>
                  I authorize Verity Agentic Services LLC, dba Verity Relocation, to act
                  as my agent under a North Carolina Limited Power of Attorney for the
                  scope and duration described above.
                </span>
              </label>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                />
                <span>
                  I have read and agree to the{" "}
                  <Link href="/terms-of-service" target="_blank">Terms of Service</Link> and{" "}
                  <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>, including
                  the binding arbitration and class action waiver provisions.
                </span>
              </label>

              <div className="step-actions">
                <button type="button" className="btn-ghost" onClick={back}>
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  disabled={!form.consent || !form.lpoaConsent}
                  onClick={() => {
                    /* Stripe checkout handoff goes here */
                    alert("Proceeding to secure payment via Stripe.");
                  }}
                >
                  Continue to payment ({tierPrice})
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-head {
          padding: 64px 24px 32px;
          text-align: center;
        }
        .page-head-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .eyebrow {
          font-family: "DM Sans", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${C.amber};
          margin-bottom: 16px;
        }
        h1 {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: ${C.ink};
          margin: 0 0 16px;
        }
        .lede {
          font-family: "DM Sans", sans-serif;
          font-size: 1.05rem;
          line-height: 1.6;
          color: ${C.ink};
          opacity: 0.8;
          margin: 0;
        }

        .progress {
          padding: 24px;
        }
        .progress-inner {
          max-width: 720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .step-dot {
          text-align: center;
          padding-top: 12px;
          border-top: 3px solid rgba(28, 43, 51, 0.15);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .step-dot.active {
          border-top-color: ${C.action};
          opacity: 1;
        }
        .step-dot-num {
          font-family: Georgia, serif;
          font-size: 0.875rem;
          font-weight: 700;
          color: ${C.primary};
        }
        .step-dot-label {
          font-family: "DM Sans", sans-serif;
          font-size: 0.75rem;
          color: ${C.ink};
          margin-top: 4px;
        }

        .form {
          padding: 32px 24px 96px;
        }
        .form-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .step-panel {
          background: white;
          border: 1px solid rgba(28, 43, 51, 0.08);
          border-radius: 12px;
          padding: 48px 40px;
        }
        @media (max-width: 720px) {
          .step-panel {
            padding: 32px 24px;
          }
        }
        .step-panel h2 {
          font-family: Georgia, serif;
          font-size: 1.75rem;
          color: ${C.ink};
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .step-help {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: ${C.ink};
          opacity: 0.75;
          margin: 0 0 32px;
        }
        .tier-banner {
          background: ${C.parchment};
          border-left: 3px solid ${C.amber};
          padding: 12px 16px;
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          color: ${C.ink};
          margin-bottom: 24px;
          border-radius: 4px;
        }
        .tier-banner-label {
          opacity: 0.7;
        }

        .tier-choice-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        @media (max-width: 600px) {
          .tier-choice-grid {
            grid-template-columns: 1fr;
          }
        }
        .tier-choice {
          background: white;
          border: 2px solid rgba(28, 43, 51, 0.12);
          border-radius: 12px;
          padding: 24px 20px;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          position: relative;
          transition: all 0.2s ease;
        }
        .tier-choice:hover {
          border-color: ${C.action};
        }
        .tier-choice.selected {
          border-color: ${C.action};
          background: rgba(29, 158, 117, 0.05);
        }
        .tc-flag {
          position: absolute;
          top: -10px;
          left: 16px;
          background: ${C.primary};
          color: white;
          font-family: "DM Sans", sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .tc-name {
          font-family: Georgia, serif;
          font-size: 1.25rem;
          color: ${C.primary};
          margin-bottom: 8px;
        }
        .tc-price {
          font-family: Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: ${C.ink};
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .tier-choice ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tier-choice li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
          color: ${C.ink};
          padding: 6px 0 6px 20px;
          position: relative;
        }
        .tier-choice li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 6px;
          color: ${C.action};
          font-weight: 700;
        }

        .field-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 600px) {
          .field-row {
            grid-template-columns: 1fr;
          }
        }
        .field {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
        .field span {
          font-family: "DM Sans", sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: ${C.ink};
          margin-bottom: 6px;
        }
        .field input,
        .field select {
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          padding: 12px 14px;
          border: 1.5px solid rgba(28, 43, 51, 0.15);
          border-radius: 8px;
          background: white;
          color: ${C.ink};
          transition: border 0.2s ease;
        }
        .field input:focus,
        .field select:focus {
          outline: none;
          border-color: ${C.action};
        }

        .security-note {
          background: ${C.parchment};
          border: 1px solid rgba(10, 77, 62, 0.15);
          border-left: 3px solid ${C.primary};
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 28px;
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 16px;
          align-items: start;
        }
        .security-note strong {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          color: ${C.primary};
          display: block;
          margin-bottom: 6px;
        }
        .security-note p {
          font-family: "DM Sans", sans-serif;
          font-size: 0.875rem;
          line-height: 1.55;
          color: ${C.ink};
          opacity: 0.85;
          margin: 0;
        }

        .lpoa-summary {
          background: ${C.parchment};
          border: 1px solid rgba(28, 43, 51, 0.1);
          border-radius: 8px;
          padding: 24px 28px;
          margin-bottom: 28px;
        }
        .lpoa-summary h3 {
          font-family: Georgia, serif;
          font-size: 1.15rem;
          color: ${C.primary};
          margin: 0 0 16px;
        }
        .lpoa-summary ul {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
        }
        .lpoa-summary li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.92rem;
          line-height: 1.55;
          color: ${C.ink};
          padding: 8px 0 8px 20px;
          position: relative;
        }
        .lpoa-summary li::before {
          content: "•";
          position: absolute;
          left: 0;
          top: 8px;
          color: ${C.action};
          font-weight: 700;
        }
        .lpoa-cite {
          font-family: "DM Sans", sans-serif;
          font-size: 0.825rem;
          font-style: italic;
          color: ${C.ink};
          opacity: 0.7;
          margin: 0 0 12px;
        }
        .lpoa-summary a {
          color: ${C.primary};
          font-weight: 600;
        }

        .checkbox {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 12px;
          align-items: start;
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
          color: ${C.ink};
          padding: 14px 16px;
          background: white;
          border: 1px solid rgba(28, 43, 51, 0.1);
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .checkbox input {
          margin-top: 2px;
        }
        .checkbox a {
          color: ${C.primary};
          font-weight: 600;
        }

        .step-actions {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 32px;
        }
        .step-actions .btn-primary {
          margin-left: auto;
        }
        .btn-primary {
          background: ${C.action};
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          font-family: "DM Sans", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .btn-primary:hover:not(:disabled) {
          background: ${C.primary};
        }
        .btn-primary:disabled {
          background: rgba(28, 43, 51, 0.2);
          cursor: not-allowed;
        }
        .btn-ghost {
          background: transparent;
          color: ${C.primary};
          padding: 14px 28px;
          border: 1.5px solid ${C.primary};
          border-radius: 8px;
          font-family: "DM Sans", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-ghost:hover {
          background: ${C.primary};
          color: white;
        }
      `}</style>
    </div>
  );
}

export default function GetStarted() {
  return (
    <Suspense fallback={<div style={{ padding: 64, textAlign: "center" }}>Loading...</div>}>
      <GetStartedInner />
    </Suspense>
  );
}
