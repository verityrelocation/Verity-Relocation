"use client";

import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

export default function Services() {
  return (
    <div style={{ background: C.parchment, color: C.ink, minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section className="page-head">
        <div className="page-head-inner">
          <div className="eyebrow">Services &amp; Pricing</div>
          <h1>Two flat fees. Every detail handled.</h1>
          <p className="lede">
            Verity covers two clear packages for residential moves across the Triangle and
            RTP. No subscriptions. No hourly billing. No surprise add-ons after the work
            begins.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="tiers">
        <div className="tiers-inner">
          <div className="tier-grid">
            <article className="tier">
              <header className="tier-head">
                <div className="tier-name">Essentials</div>
                <div className="tier-price">
                  <span className="tier-price-amt">$99</span>
                  <span className="tier-price-unit">flat</span>
                </div>
                <p className="tier-tag">
                  Home services scheduled and confirmed before you arrive.
                </p>
              </header>
              <h4 className="tier-section">What&rsquo;s included</h4>
              <ul className="tier-list">
                <li>
                  <strong>Internet service provider scheduling.</strong> We coordinate
                  installation appointments with your chosen internet service provider
                  and confirm the install
                  window in writing.
                </li>
                <li>
                  <strong>Home alarm &amp; monitoring setup.</strong> We schedule
                  installation or transfer of monitored security service for your new home.
                </li>
                <li>
                  <strong>Pest control service setup.</strong> We coordinate the initial
                  inspection and recurring service start with a local provider.
                </li>
                <li>
                  <strong>Bulk trash pickup scheduling.</strong> We arrange municipal or
                  private bulk pickup for the items you can&rsquo;t take with you.
                </li>
              </ul>
              <Link href="/get-started?tier=essentials" className="btn-primary tier-cta">
                Choose Essentials
              </Link>
            </article>

            <article className="tier tier-featured">
              <div className="tier-flag">Most chosen</div>
              <header className="tier-head">
                <div className="tier-name">Full Move</div>
                <div className="tier-price">
                  <span className="tier-price-amt">$199</span>
                  <span className="tier-price-unit">flat</span>
                </div>
                <p className="tier-tag">
                  Everything in Essentials, plus utilities &mdash; in either direction.
                </p>
              </header>
              <h4 className="tier-section">What&rsquo;s included</h4>
              <ul className="tier-list">
                <li>
                  <strong>Everything in Essentials.</strong> Internet, alarm, pest, bulk trash.
                </li>
                <li>
                  <strong>Electric service.</strong> Activation at your new home and
                  disconnection at your old home.
                </li>
                <li>
                  <strong>Natural gas service.</strong> Activation and disconnection
                  scheduled to match your move dates.
                </li>
                <li>
                  <strong>Municipal water service.</strong> City and county water account
                  setup and closure.
                </li>
                <li>
                  <strong>Both directions, one fee.</strong> Whether you&rsquo;re moving
                  into North Carolina, out of North Carolina, or within North Carolina, the
                  $199 covers everything you need on either side of the move.
                </li>
              </ul>
              <Link href="/get-started?tier=full" className="btn-primary tier-cta">
                Choose Full Move
              </Link>
            </article>
          </div>

          <p className="tier-footnote">
            A third tier is in development. Existing Verity customers will be notified
            first when it launches.
          </p>
        </div>
      </section>

      {/* What we don't do */}
      <section className="scope">
        <div className="scope-inner">
          <div className="scope-grid">
            <div>
              <h2>What Verity does</h2>
              <ul className="scope-list scope-list-yes">
                <li>Coordinate with utility, internet, and home service providers on your behalf</li>
                <li>Document every account number, service date, and confirmation in writing</li>
                <li>
                  Operate under a North Carolina Limited Power of Attorney that authorizes
                  only the tasks you select &mdash; nothing more
                </li>
                <li>Verify identity through encrypted, short-retention systems</li>
              </ul>
            </div>
            <div>
              <h2>What Verity doesn&rsquo;t do</h2>
              <ul className="scope-list scope-list-no">
                <li>Move, pack, or transport household goods</li>
                <li>Broker or arrange interstate moving services</li>
                <li>Provide legal, tax, real estate, or insurance advice</li>
                <li>Pay deposits, fees, or charges to providers on your behalf</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <Shield size={56} />
          <h2>Ready to start?</h2>
          <p>The intake takes about five minutes. We handle it from there.</p>
          <Link href="/get-started" className="btn-primary cta-btn">
            Start your move
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-head {
          padding: 80px 24px 48px;
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

        .tiers {
          padding: 48px 24px 96px;
        }
        .tiers-inner {
          max-width: 1080px;
          margin: 0 auto;
        }
        .tier-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 920px;
          margin: 0 auto;
        }
        @media (max-width: 720px) {
          .tier-grid {
            grid-template-columns: 1fr;
          }
        }
        .tier {
          background: white;
          border: 1.5px solid rgba(28, 43, 51, 0.1);
          border-radius: 12px;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .tier-featured {
          border-color: ${C.primary};
          border-width: 2px;
          box-shadow: 0 8px 32px rgba(10, 77, 62, 0.12);
        }
        .tier-flag {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: ${C.primary};
          color: white;
          font-family: "DM Sans", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
        }
        .tier-head {
          margin-bottom: 24px;
        }
        .tier-name {
          font-family: Georgia, serif;
          font-size: 1.5rem;
          color: ${C.primary};
          margin-bottom: 12px;
        }
        .tier-price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 12px;
        }
        .tier-price-amt {
          font-family: Georgia, serif;
          font-size: 3rem;
          font-weight: 700;
          color: ${C.ink};
          letter-spacing: -0.02em;
        }
        .tier-price-unit {
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          color: ${C.ink};
          opacity: 0.6;
        }
        .tier-tag {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          color: ${C.ink};
          opacity: 0.75;
          line-height: 1.5;
          margin: 0;
        }
        .tier-section {
          font-family: "DM Sans", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${C.ink};
          opacity: 0.6;
          margin: 0 0 16px;
        }
        .tier-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          flex: 1;
        }
        .tier-list li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          line-height: 1.55;
          color: ${C.ink};
          padding: 12px 0 12px 28px;
          position: relative;
          border-bottom: 1px solid rgba(28, 43, 51, 0.06);
        }
        .tier-list li:last-child {
          border-bottom: none;
        }
        .tier-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 16px;
          width: 16px;
          height: 16px;
          background: ${C.action};
          mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='black' d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/></svg>") center/contain no-repeat;
          -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='black' d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/></svg>") center/contain no-repeat;
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
        .tier-cta {
          width: 100%;
          text-align: center;
        }
        .tier-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 0.875rem;
          color: ${C.ink};
          opacity: 0.6;
          text-align: center;
          margin: 40px auto 0;
          max-width: 560px;
          font-style: italic;
        }

        .scope {
          background: white;
          padding: 80px 24px;
          border-top: 1px solid rgba(28, 43, 51, 0.08);
          border-bottom: 1px solid rgba(28, 43, 51, 0.08);
        }
        .scope-inner {
          max-width: 1080px;
          margin: 0 auto;
        }
        .scope-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 64px;
        }
        @media (max-width: 720px) {
          .scope-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .scope-grid h2 {
          font-family: Georgia, serif;
          font-size: 1.6rem;
          color: ${C.ink};
          margin: 0 0 24px;
          letter-spacing: -0.01em;
        }
        .scope-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .scope-list li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: ${C.ink};
          padding: 12px 0 12px 32px;
          position: relative;
          border-bottom: 1px solid rgba(28, 43, 51, 0.06);
        }
        .scope-list li::before {
          position: absolute;
          left: 0;
          top: 12px;
          font-family: Georgia, serif;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .scope-list-yes li::before {
          content: "✓";
          color: ${C.action};
        }
        .scope-list-no li::before {
          content: "—";
          color: ${C.ink};
          opacity: 0.4;
        }

        .cta {
          padding: 96px 24px;
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
          margin: 24px 0 12px;
        }
        .cta-inner p {
          font-family: "DM Sans", sans-serif;
          font-size: 1.05rem;
          color: ${C.ink};
          opacity: 0.75;
          margin: 0 0 32px;
        }
        .cta-btn {
          font-size: 1.05rem;
          padding: 16px 36px;
        }
      `}</style>
    </div>
  );
}
