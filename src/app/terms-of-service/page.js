"use client";

import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

export default function Terms() {
  return (
    <div style={{ background: C.parchment, color: C.ink, minHeight: "100vh" }}>
      <Nav />

      <section className="page-head">
        <div className="page-head-inner">
          <Shield size={56} />
          <div className="eyebrow">Terms of Service</div>
          <h1>The agreement between you and Verity.</h1>
          <p className="meta">
            <strong>Effective:</strong> April 28, 2026 &nbsp;&middot;&nbsp;
            <strong>Last updated:</strong> April 28, 2026
          </p>
        </div>
      </section>

      <article className="legal">
        <div className="legal-inner">

          <div className="callout">
            <strong>Important.</strong> These Terms include a binding arbitration clause
            and a class action waiver in Section 16. By using the Service, you agree to
            resolve disputes with Verity through individual arbitration and to waive your
            right to participate in a class action. Please read carefully.
          </div>

          <section className="intro">
            <p>
              These Terms of Service (the &ldquo;Terms&rdquo;) form a legally binding
              agreement between you (&ldquo;you,&rdquo; &ldquo;your,&rdquo; or
              &ldquo;Customer&rdquo;) and <strong>Verity Agentic Services LLC</strong>, a
              North Carolina limited liability company doing business as <strong>Verity
              Relocation</strong> (&ldquo;Verity,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;), governing your access to and use of our website at
              verityrelocation.com and the relocation concierge services we provide
              (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p>
              By using the Service, you confirm that you are at least 18 years old, that
              you have read these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>,
              and that you agree to be bound by them.
            </p>
          </section>

          <h2 id="service">1. The Service</h2>
          <p>
            Verity is a residential relocation concierge. We coordinate utility
            activation and disconnection, internet service provider scheduling, alarm
            and pest control setup, bulk trash pickup scheduling, and related home
            service tasks for residential movers in the North Carolina Triangle and
            Research Triangle Park region. Two service packages are available:
          </p>
          <ul>
            <li>
              <strong>Essentials &mdash; $99 flat:</strong> internet service provider scheduling, alarm setup,
              pest control setup, and bulk trash pickup scheduling.
            </li>
            <li>
              <strong>Full Move &mdash; $199 flat:</strong> All Essentials services, plus
              activation and disconnection of electric service, natural gas service,
              and municipal water service. For in-state moves, both
              directions (disconnect and activate) are included at the same flat fee.
            </li>
          </ul>
          <p>
            Verity is <strong>not</strong> a moving company, a household goods broker,
            an interstate moving service, a real estate broker, a law firm, an insurance
            agent, or a financial institution. We do not transport, pack, or store
            household goods. We do not pay deposits, fees, or other charges to
            third-party providers on your behalf.
          </p>

          <h2 id="eligibility">2. Eligibility and accounts</h2>
          <p>
            To use the Service you must (a) be at least 18 years old; (b) be a
            resident of, or relocating to or from, the United States; (c) provide
            accurate and complete information at intake; and (d) keep your contact
            information current so that we can deliver service confirmations.
          </p>

          <h2 id="lpoa">3. Limited Power of Attorney</h2>
          <p>
            To complete the tasks you request, Verity must contact utility, internet,
            alarm, pest control, municipal, and similar service providers in your name
            and on your behalf. To authorize that activity, you will execute a North
            Carolina Limited Power of Attorney (the &ldquo;LPOA&rdquo;) at intake. The
            LPOA:
          </p>
          <ul>
            <li>
              Is granted under the North Carolina Uniform Power of Attorney Act, N.C.G.S.
              Chapter 32C, and signed electronically under the North Carolina Uniform
              Electronic Transactions Act, N.C.G.S. Chapter 66, Article 40 (&ldquo;UETA&rdquo;).
            </li>
            <li>
              Authorizes Verity, as your agent, only to perform the specific tasks you
              have selected and only with respect to the addresses you have provided.
            </li>
            <li>
              <strong>Does not authorize Verity to incur charges, post deposits,
              transfer funds, or take any financial action</strong> on your behalf.
            </li>
            <li>
              Is revocable by you at any time, with a 24-hour notice window so that
              tasks already in progress can be wound down in an orderly fashion.
            </li>
            <li>
              Expires automatically upon completion of the move-related tasks for which
              it was granted.
            </li>
          </ul>
          <p>
            You are responsible for the accuracy of the information you provide to us
            for execution under the LPOA. Verity may decline to act under the LPOA, in
            whole or in part, where information is incomplete, where a third-party
            provider declines to recognize the authorization, or where doing so would
            violate applicable law.
          </p>

          <h2 id="electronic">4. Electronic signatures and records</h2>
          <p>
            You agree that the LPOA, these Terms, the Privacy Policy, and any other
            agreement with Verity may be executed and delivered electronically. Under
            UETA, your electronic signature has the same legal effect as a handwritten
            signature. You consent to receive all notices, disclosures, and records
            from Verity in electronic form and acknowledge that you have the technical
            ability to access and retain those records.
          </p>

          <h2 id="fees">5. Fees and payment</h2>
          <p>
            Fees are charged at the flat rates set out in Section 1 above. Payment is
            collected at the time you authorize the work, through Stripe&rsquo;s hosted
            checkout. Verity does not see, store, or transmit your full payment card
            number. By providing payment information through Stripe, you authorize
            Verity to charge the applicable flat fee.
          </p>
          <p>
            Verity does not collect deposits, third-party provider activation fees,
            installation fees, equipment charges, or recurring service charges from
            providers like utilities, internet providers, or alarm companies. Those
            charges are billed directly by the providers to you.
          </p>

          <h2 id="cancellation">6. Cancellation and refunds</h2>
          <ul>
            <li>
              <strong>Before work begins:</strong> If you cancel before any task has been
              initiated with a third-party provider, you will receive a full refund.
            </li>
            <li>
              <strong>After partial completion:</strong> If you cancel after one or more
              tasks have been completed, no refund is due for completed tasks. Verity
              will, in its sole discretion, prorate or refund fees for tasks not yet
              initiated.
            </li>
            <li>
              <strong>Service failures:</strong> If Verity is unable to complete a task
              you have selected for reasons within its reasonable control, Verity will
              refund the portion of the fee allocated to that task.
            </li>
            <li>
              <strong>Chargebacks:</strong> Initiating a chargeback for charges that are
              valid and undisputed under these Terms will be considered a breach of
              these Terms.
            </li>
          </ul>

          <h2 id="responsibilities">7. Your responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information at intake;</li>
            <li>Provide identity verification information promptly when requested;</li>
            <li>
              Pay any deposits, activation fees, equipment charges, or recurring
              service charges that are billed by third-party providers directly to you;
            </li>
            <li>
              Notify Verity of any changes to your move dates, addresses, or contact
              information as soon as practicable;
            </li>
            <li>Use the Service only for lawful purposes and in compliance with these Terms.</li>
          </ul>

          <h2 id="prohibited">8. Prohibited uses</h2>
          <p>You may not use the Service to:</p>
          <ul>
            <li>Open or close accounts in the name of any person other than yourself;</li>
            <li>
              Submit false, fraudulent, or stolen identity information, including
              another person&rsquo;s Social Security number or driver&rsquo;s license;
            </li>
            <li>
              Circumvent or attempt to circumvent any security or access control
              mechanism of the Service;
            </li>
            <li>
              Reverse engineer, decompile, scrape, or otherwise misuse the Service or
              any related software;
            </li>
            <li>Engage in any conduct that violates applicable federal, state, or local law.</li>
          </ul>

          <h2 id="third-party">9. Third-party providers</h2>
          <p>
            The Service depends on the cooperation, availability, and policies of
            third-party providers (utilities, internet providers, alarm companies,
            municipalities, and others). Verity is not responsible for the acts,
            omissions, billing decisions, service quality, outage, or pricing of those
            providers. Verity does not represent or warrant any specific outcome,
            install date, or service level from any third-party provider.
          </p>

          <h2 id="affiliates">10. Affiliate and co-marketing relationships</h2>
          <p>
            Verity participates in flat-fee co-marketing relationships with closing
            attorneys and other professionals in the North Carolina Triangle and RTP
            region. Under these arrangements, Verity pays partners a fixed,
            market-rate fee for marketing services provided to Verity that is not
            tied to whether or how often the partner&rsquo;s clients use the Service.
            Verity does not pay referral fees, kickbacks, or things of value in
            exchange for the referral of business. Our practices are designed to
            comply with the federal Real Estate Settlement Procedures Act, 12 U.S.C.
            § 2607 (&ldquo;RESPA &sect; 8&rdquo;), where applicable, and with North
            Carolina State Bar Formal Ethics Opinion 99 FEO 1 governing attorney
            referrals.
          </p>
          <p>
            You are never required to use the Service because of a partner
            relationship. Your decision to use Verity is independent of any
            relationship with a closing attorney or other partner who may have told
            you about us.
          </p>

          <h2 id="ip">11. Intellectual property</h2>
          <p>
            The Service, including the verityrelocation.com website, the Verity
            Relocation name and shield logo, and all related content (excluding your
            personal information), is owned by Verity Agentic Services LLC or our
            licensors and is protected by copyright, trademark, and other laws. We
            grant you a limited, revocable, non-exclusive, non-transferable license to
            access and use the Service for your personal, non-commercial use, subject
            to these Terms.
          </p>

          <h2 id="disclaimers">12. Disclaimers</h2>
          <p>
            <strong>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
            </strong>{" "}
            Verity expressly disclaims all warranties of any kind, whether express,
            implied, or statutory, including without limitation the implied warranties
            of merchantability, fitness for a particular purpose, title, and
            non-infringement. Verity does not warrant that the Service will be
            uninterrupted, error-free, secure, or free from viruses or other harmful
            code, or that any specific result will be achieved.
          </p>
          <p>
            Verity does not provide legal, tax, real estate, insurance, or financial
            advice. Information provided by or through the Service is for informational
            purposes only and is not a substitute for advice from a qualified
            professional.
          </p>

          <h2 id="liability">13. Limitation of liability</h2>
          <p>
            <strong>
              To the maximum extent permitted by applicable law, in no event will Verity,
              its parents, affiliates, members, managers, officers, employees, agents,
              or licensors be liable for any indirect, incidental, special, consequential,
              exemplary, or punitive damages, or for any loss of profits, data, use,
              goodwill, or other intangible losses, arising out of or related to your
              use of, or inability to use, the Service.
            </strong>
          </p>
          <p>
            <strong>
              In no event will Verity&rsquo;s aggregate liability arising out of or
              related to these Terms or the Service exceed the greater of (a) the total
              fees you paid Verity in the twelve (12) months preceding the event giving
              rise to the claim or (b) one hundred U.S. dollars ($100.00).
            </strong>
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain
            damages. To the extent any such limitation is unenforceable, Verity&rsquo;s
            liability will be limited to the maximum extent permitted by law.
          </p>

          <h2 id="indemnity">14. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Verity and its parents,
            affiliates, members, managers, officers, employees, and agents from and
            against any claims, demands, losses, damages, liabilities, costs, and
            expenses (including reasonable attorneys&rsquo; fees) arising out of or
            related to (a) your breach of these Terms; (b) your violation of any
            applicable law; (c) your provision of inaccurate, incomplete, or
            unauthorized information to Verity; or (d) any third-party claim that your
            use of the Service caused harm to that third party.
          </p>

          <h2 id="termination">15. Termination</h2>
          <p>
            You may stop using the Service and revoke the LPOA at any time, subject to
            the 24-hour wind-down notice described in Section 3. Verity may suspend or
            terminate your access to the Service at any time, with or without notice,
            if Verity reasonably believes that you have breached these Terms or that
            your use of the Service may harm Verity, other customers, or third
            parties. Sections 3, 5, 6, 9, 11, 12, 13, 14, 16, 17, 18, and 19 will
            survive termination.
          </p>

          <h2 id="arbitration">
            16. Binding arbitration and class action waiver
          </h2>
          <div className="callout">
            <strong>Please read this section carefully.</strong> It requires you to
            arbitrate disputes with Verity individually and limits the manner in which
            you can seek relief. It affects your rights.
          </div>

          <h3>16.1 Agreement to arbitrate</h3>
          <p>
            You and Verity agree that any dispute, claim, or controversy arising out of
            or relating to these Terms, the Service, or the LPOA &mdash; whether based
            in contract, tort, statute, fraud, misrepresentation, or any other legal
            theory &mdash; will be resolved exclusively through final and binding
            individual arbitration administered by the American Arbitration Association
            (&ldquo;AAA&rdquo;) under its Consumer Arbitration Rules, rather than in
            court. The Federal Arbitration Act, 9 U.S.C. § 1 et seq., governs the
            interpretation and enforcement of this Section 16.
          </p>

          <h3>16.2 Class action waiver</h3>
          <p>
            <strong>
              You and Verity agree that each may bring claims against the other only on
              an individual basis and not as a plaintiff or class member in any
              purported class, collective, or representative action.
            </strong>{" "}
            The arbitrator may not consolidate more than one person&rsquo;s claims and
            may not preside over any form of representative or class proceeding. If
            this class action waiver is found unenforceable, then the entirety of this
            Section 16 will be null and void, but the remainder of these Terms will
            remain in effect.
          </p>

          <h3>16.3 Procedures</h3>
          <p>
            Arbitration will be conducted in Durham County, North Carolina, or, at your
            election, by telephone, video, or written submission. The arbitrator&rsquo;s
            decision will be final and may be entered as a judgment in any court of
            competent jurisdiction. Each party will bear its own costs of arbitration
            except as the AAA Consumer Arbitration Rules or applicable law provide
            otherwise. Nothing in this Section prevents either party from bringing an
            individual action in small claims court for disputes that qualify.
          </p>

          <h3>16.4 30-day right to opt out</h3>
          <p>
            You may opt out of this Section 16 by sending written notice to{" "}
            <a href="mailto:legal@verityrelocation.com">legal@verityrelocation.com</a>{" "}
            within thirty (30) days of first accepting these Terms. Your notice must
            include your full name, the email address associated with your Verity
            account, and a clear statement that you wish to opt out of arbitration. If
            you opt out, neither you nor Verity will be bound by Sections 16.1 through
            16.3, but the remainder of these Terms will continue to apply.
          </p>

          <h2 id="governing-law">17. Governing law and venue</h2>
          <p>
            These Terms are governed by the laws of the State of North Carolina, without
            regard to its conflict of laws principles. Subject to Section 16, any action
            arising out of or relating to these Terms or the Service that is not subject
            to arbitration will be brought exclusively in the state or federal courts
            located in Durham County, North Carolina, and you consent to the personal
            jurisdiction of those courts.
          </p>

          <h2 id="changes">18. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will update the
            &ldquo;Last updated&rdquo; date at the top of this page. If a change is
            material, we will provide notice through the Service or by email before the
            change takes effect. Your continued use of the Service after the effective
            date constitutes acceptance of the updated Terms. If you do not agree to
            the updated Terms, you must stop using the Service.
          </p>

          <h2 id="general">19. General</h2>
          <ul>
            <li>
              <strong>Entire agreement.</strong> These Terms, the Privacy Policy, and
              the LPOA constitute the entire agreement between you and Verity regarding
              the Service.
            </li>
            <li>
              <strong>Severability.</strong> If any provision of these Terms is held
              unenforceable, the remaining provisions will remain in full force and
              effect.
            </li>
            <li>
              <strong>No waiver.</strong> Verity&rsquo;s failure to enforce any provision
              is not a waiver of that provision.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign these Terms without our
              prior written consent. We may assign these Terms to an affiliate or in
              connection with a merger, acquisition, or sale of assets.
            </li>
            <li>
              <strong>Force majeure.</strong> Neither party is liable for failure to
              perform due to causes beyond its reasonable control.
            </li>
            <li>
              <strong>Notices.</strong> Notices to Verity must be sent to{" "}
              <a href="mailto:legal@verityrelocation.com">legal@verityrelocation.com</a>.
              Notices to you may be sent by email or through the Service.
            </li>
          </ul>

          <h2 id="contact">20. How to contact us</h2>
          <p className="contact-block">
            <strong>Verity Agentic Services LLC</strong>
            <br />
            d/b/a Verity Relocation
            <br />
            Attn: Legal
            <br />
            Durham, North Carolina
            <br />
            <a href="mailto:legal@verityrelocation.com">legal@verityrelocation.com</a>
          </p>

          <p className="related">
            See also our <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </article>

      <Footer />

      <style jsx>{`
        .page-head {
          padding: 80px 24px 48px;
          text-align: center;
          background: linear-gradient(180deg, ${C.parchment} 0%, #fbf9f3 100%);
          border-bottom: 1px solid rgba(28, 43, 51, 0.08);
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
          margin: 24px 0 12px;
        }
        h1 {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: ${C.ink};
          margin: 0 0 16px;
        }
        .meta {
          font-family: "DM Sans", sans-serif;
          font-size: 0.875rem;
          color: ${C.ink};
          opacity: 0.7;
          margin: 0;
        }

        .legal {
          padding: 64px 24px 96px;
        }
        .legal-inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .callout {
          background: rgba(196, 136, 58, 0.08);
          border-left: 3px solid ${C.amber};
          padding: 16px 20px;
          border-radius: 4px;
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: ${C.ink};
          margin: 24px 0 32px;
        }
        .intro {
          margin-bottom: 48px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(28, 43, 51, 0.1);
        }
        .legal :global(h2) {
          font-family: Georgia, serif;
          font-size: 1.5rem;
          color: ${C.primary};
          margin: 48px 0 16px;
          letter-spacing: -0.01em;
          padding-top: 16px;
          border-top: 1px solid rgba(28, 43, 51, 0.06);
        }
        .legal :global(h3) {
          font-family: Georgia, serif;
          font-size: 1.15rem;
          color: ${C.ink};
          margin: 28px 0 12px;
        }
        .legal :global(p) {
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: ${C.ink};
          margin: 0 0 16px;
        }
        .legal :global(ul) {
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: ${C.ink};
          padding-left: 24px;
          margin: 0 0 20px;
        }
        .legal :global(li) {
          margin-bottom: 10px;
        }
        .legal :global(a) {
          color: ${C.primary};
          font-weight: 600;
        }
        .legal :global(strong) {
          color: ${C.ink};
        }

        .contact-block {
          background: ${C.parchment};
          border-left: 3px solid ${C.primary};
          padding: 20px 24px;
          border-radius: 4px;
        }

        .related {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid rgba(28, 43, 51, 0.1);
          font-style: italic;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
