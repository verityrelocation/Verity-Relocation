"use client";

import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

export default function HowItWorks() {
  return (
    <div style={{ background: C.parchment, color: C.ink, minHeight: "100vh" }}>
      <Nav />

      <section className="page-head">
        <div className="page-head-inner">
          <div className="eyebrow">How it works</div>
          <h1>Three steps. One concierge. Everything documented.</h1>
          <p className="lede">
            Verity coordinates utility, internet, and home services for residential movers
            in the Triangle and RTP. Here&rsquo;s exactly what happens from intake to
            confirmation.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="steps">
        <div className="steps-inner">
          <article className="step">
            <div className="step-num">01</div>
            <div className="step-body">
              <h2>Tell us about your move</h2>
              <p>
                A short intake form captures your move dates, current address, new address,
                and the package you&rsquo;ve chosen &mdash; Essentials at $99 or Full Move
                at $199. The form takes about five minutes.
              </p>
              <div className="step-detail">
                <h4>What we ask for</h4>
                <ul>
                  <li>Move-out and move-in dates</li>
                  <li>Old and new addresses</li>
                  <li>Which services you need (internet, alarm, pest, trash, utilities)</li>
                  <li>Contact information for confirmations</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="step">
            <div className="step-num">02</div>
            <div className="step-body">
              <h2>Verify identity, securely</h2>
              <p>
                Utility providers require government-issued identification before they
                will activate or close an account. We collect your Social Security number
                and driver&rsquo;s license through an encrypted, isolated vault and use
                them only for the providers who require them.
              </p>
              <div className="step-detail">
                <h4>How your sensitive data is handled</h4>
                <ul>
                  <li>
                    Encrypted at rest in a dedicated PII vault separate from our
                    application systems
                  </li>
                  <li>
                    Used only to satisfy provider identity verification &mdash; never sold,
                    never shared with marketing platforms
                  </li>
                  <li>
                    Sensitive identifiers (SSN, driver&rsquo;s license) are purged within
                    24 hours of task completion
                  </li>
                  <li>
                    Payment information is handled directly by Stripe; Verity never sees
                    or stores your card number
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="step">
            <div className="step-num">03</div>
            <div className="step-body">
              <h2>Authorize the work</h2>
              <p>
                You sign a North Carolina Limited Power of Attorney that lets a Verity
                concierge contact your selected providers and complete only the tasks
                you&rsquo;ve authorized. The authorization is narrowly scoped, time-bound,
                and revocable.
              </p>
              <div className="step-detail">
                <h4>What the authorization covers &mdash; and what it doesn&rsquo;t</h4>
                <ul>
                  <li>
                    <strong>Covers:</strong> Contacting your selected providers, opening or
                    closing accounts in your name, and scheduling service for the dates
                    and addresses you provided.
                  </li>
                  <li>
                    <strong>Doesn&rsquo;t cover:</strong> Anything financial. Verity does
                    not pay deposits, post-pay bills, or move money on your behalf.
                  </li>
                  <li>
                    <strong>Revocable:</strong> You can revoke the authorization at any
                    time, with a 24-hour notice window for tasks already in progress.
                  </li>
                  <li>
                    <strong>Time-bound:</strong> The authorization expires at the
                    completion of the move-related tasks you selected.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="step">
            <div className="step-num">04</div>
            <div className="step-body">
              <h2>Get written confirmation</h2>
              <p>
                We send confirmation of every task we complete &mdash; account numbers,
                activation dates, install windows, customer service contacts. Your
                move-in day is unblocked.
              </p>
              <div className="step-detail">
                <h4>What you receive</h4>
                <ul>
                  <li>Account numbers for every utility set up</li>
                  <li>Internet installation appointment confirmation</li>
                  <li>Alarm, pest, and bulk trash service start dates</li>
                  <li>A summary email you can forward to a spouse or co-mover</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="compliance">
        <div className="compliance-inner">
          <Shield size={48} />
          <h2>Built on North Carolina compliance</h2>
          <p>
            Verity Relocation operates as a DBA of Verity Agentic Services LLC, a North
            Carolina limited liability company. Our authorization framework is structured
            under North Carolina&rsquo;s Limited Power of Attorney statutes (N.C.G.S.
            Chapter 32C), the Uniform Electronic Transactions Act (N.C.G.S. Chapter 66,
            Article 40), and the Identity Theft Protection Act (N.C.G.S. § 75-65). We
            don&rsquo;t broker moves, we don&rsquo;t hold customer funds, and we
            don&rsquo;t practice law.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <h2>Start when you&rsquo;re ready</h2>
          <p>The intake takes about five minutes.</p>
          <Link href="/get-started" className="btn-primary cta-btn">
            Start your move
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-head {
          padding: 80px 24px 56px;
          text-align: center;
        }
        .page-head-inner {
          max-width: 760px;
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
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: ${C.ink};
          margin: 0 0 20px;
        }
        .lede {
          font-family: "DM Sans", sans-serif;
          font-size: 1.1rem;
          line-height: 1.6;
          color: ${C.ink};
          opacity: 0.8;
          margin: 0;
        }

        .steps {
          padding: 32px 24px 80px;
        }
        .steps-inner {
          max-width: 880px;
          margin: 0 auto;
        }
        .step {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 32px;
          padding: 40px 0;
          border-top: 1px solid rgba(28, 43, 51, 0.1);
        }
        .step:first-child {
          border-top: none;
        }
        @media (max-width: 720px) {
          .step {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        .step-num {
          font-family: Georgia, serif;
          font-size: 3rem;
          font-weight: 700;
          color: ${C.amber};
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .step-body h2 {
          font-family: Georgia, serif;
          font-size: 1.75rem;
          color: ${C.ink};
          margin: 0 0 16px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .step-body p {
          font-family: "DM Sans", sans-serif;
          font-size: 1.05rem;
          line-height: 1.65;
          color: ${C.ink};
          opacity: 0.85;
          margin: 0 0 24px;
        }
        .step-detail {
          background: white;
          border: 1px solid rgba(28, 43, 51, 0.08);
          border-left: 3px solid ${C.primary};
          border-radius: 8px;
          padding: 24px 28px;
        }
        .step-detail h4 {
          font-family: "DM Sans", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${C.primary};
          margin: 0 0 16px;
        }
        .step-detail ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .step-detail li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          line-height: 1.55;
          color: ${C.ink};
          padding: 8px 0 8px 24px;
          position: relative;
        }
        .step-detail li::before {
          content: "→";
          position: absolute;
          left: 0;
          top: 8px;
          color: ${C.action};
          font-weight: 600;
        }

        .compliance {
          background: ${C.primary};
          padding: 64px 24px;
          color: white;
        }
        .compliance-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .compliance-inner h2 {
          font-family: Georgia, serif;
          font-size: 1.75rem;
          color: white;
          margin: 20px 0 16px;
          letter-spacing: -0.01em;
        }
        .compliance-inner p {
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: white;
          opacity: 0.9;
          margin: 0;
        }

        .cta {
          padding: 80px 24px;
          text-align: center;
        }
        .cta-inner {
          max-width: 560px;
          margin: 0 auto;
        }
        .cta-inner h2 {
          font-family: Georgia, serif;
          font-size: 2rem;
          color: ${C.ink};
          margin: 0 0 12px;
        }
        .cta-inner p {
          font-family: "DM Sans", sans-serif;
          font-size: 1.05rem;
          color: ${C.ink};
          opacity: 0.75;
          margin: 0 0 32px;
        }
        .btn-primary {
          background: ${C.action};
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          font-family: "DM Sans", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: background 0.2s ease;
          display: inline-block;
        }
        .btn-primary:hover {
          background: ${C.primary};
        }
        .cta-btn {
          font-size: 1.05rem;
          padding: 16px 36px;
        }
      `}</style>
    </div>
  );
}
