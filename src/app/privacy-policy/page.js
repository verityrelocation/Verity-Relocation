"use client";

import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C, Shield } from "@/components/brand";

export default function Privacy() {
  return (
    <div style={{ background: C.parchment, color: C.ink, minHeight: "100vh" }}>
      <Nav />

      <section className="page-head">
        <div className="page-head-inner">
          <Shield size={56} />
          <div className="eyebrow">Privacy Policy</div>
          <h1>How Verity collects, uses, and protects your information.</h1>
          <p className="meta">
            <strong>Effective:</strong> April 28, 2026 &nbsp;&middot;&nbsp;
            <strong>Last updated:</strong> April 28, 2026
          </p>
        </div>
      </section>

      <article className="legal">
        <div className="legal-inner">

          <section className="intro">
            <p>
              This Privacy Policy explains how Verity Agentic Services LLC, a North
              Carolina limited liability company doing business as Verity Relocation
              (&ldquo;Verity,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), collects, uses, stores, shares, and protects personal
              information when you use our website at verityrelocation.com or our
              relocation concierge service (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p>
              We aim for plain language. Where we use a defined term, we capitalize it.
              If anything in this Policy is unclear, contact us using the information at
              the end of this document.
            </p>
          </section>

          <h2 id="summary">At a glance</h2>
          <ul>
            <li>
              We collect only what we need to coordinate your move-related services.
            </li>
            <li>
              Sensitive identifiers (Social Security number and driver&rsquo;s license)
              are stored in an encrypted, isolated vault and purged within 24 hours after
              your task is complete.
            </li>
            <li>
              Standard contact and service-history information is retained for normal
              business purposes and disposed of when it&rsquo;s no longer needed.
            </li>
            <li>
              Payment information is handled directly by Stripe. Verity does not see,
              store, or process your full card number.
            </li>
            <li>
              We do not sell your personal information. We do not share it with
              advertising networks for cross-context behavioral advertising.
            </li>
            <li>
              You can request access, correction, or deletion of your personal information
              at any time.
            </li>
          </ul>

          <h2 id="who">1. Who we are</h2>
          <p>
            <strong>Verity Relocation</strong> is the consumer-facing brand of Verity
            Agentic Services LLC, a North Carolina limited liability company and a
            wholly-owned subsidiary of Islandia Investments LLC. Our principal place of
            business is in Durham, North Carolina. For purposes of this Privacy Policy,
            Verity Agentic Services LLC is the controller of personal information
            collected through the Service.
          </p>

          <h2 id="what">2. Information we collect</h2>

          <h3>2.1 Information you provide directly</h3>
          <p>
            When you use the Service, we collect the following categories of information:
          </p>
          <ul>
            <li>
              <strong>Identity and contact information:</strong> first and last name,
              email address, telephone number.
            </li>
            <li>
              <strong>Move information:</strong> current address, new address, move-out
              and move-in dates, the package and services you have selected.
            </li>
            <li>
              <strong>Sensitive verification information:</strong> Social Security number
              and driver&rsquo;s license number and issuing state. We collect these only
              where utility, telecommunications, or other service providers require them
              to open or close an account in your name.
            </li>
            <li>
              <strong>Authorization records:</strong> the executed Limited Power of
              Attorney, the consents you provide at intake, and the timestamped record of
              your electronic signature.
            </li>
            <li>
              <strong>Communications:</strong> messages you send to us by email, web form,
              text, or phone, and our responses.
            </li>
          </ul>

          <h3>2.2 Information from payment processing</h3>
          <p>
            Payments are processed by Stripe, Inc. through Stripe&rsquo;s hosted checkout.
            Verity does not collect, store, or transmit your full payment card number,
            CVV, or full bank account number. From Stripe we receive a transaction
            identifier, the last four digits of your payment instrument, the
            authorization status, and the billing zip code, all of which we use for
            recordkeeping, dispute response, and accounting.
          </p>

          <h3>2.3 Information collected automatically</h3>
          <p>
            When you visit our website, we and our hosting and analytics providers
            automatically collect limited technical information, including your IP
            address, browser type and version, operating system, the pages you view, the
            referring URL, and timestamps. We use this information to operate, secure,
            and improve the Service. We do not use cookies for cross-context behavioral
            advertising.
          </p>

          <h3>2.4 Information from third parties</h3>
          <p>
            If you reach Verity through a partner (for example, a closing attorney
            participating in our flat-fee co-marketing program), we may receive your name
            and contact information from that partner so that we can follow up with you.
            Use of that information is governed by this Privacy Policy.
          </p>

          <h2 id="how">3. How we use information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide the Service you have requested and complete the tasks you have authorized;</li>
            <li>Verify your identity with utility and service providers;</li>
            <li>Process payments and maintain transaction records;</li>
            <li>Confirm completed work to you in writing;</li>
            <li>Respond to your questions, complaints, and dispute requests;</li>
            <li>Operate, secure, and improve the website and the Service;</li>
            <li>
              Comply with our legal and regulatory obligations, including tax recordkeeping,
              consumer protection laws, and breach notification laws;
            </li>
            <li>
              Defend ourselves against, and investigate, fraud, abuse, and other
              violations of our Terms of Service.
            </li>
          </ul>

          <h2 id="legal-basis">4. Legal basis for processing</h2>
          <p>
            We process your personal information based on (a) your consent at intake;
            (b) the performance of the contract between you and Verity; (c) compliance
            with our legal obligations under federal and North Carolina law; and (d) our
            legitimate interest in operating, securing, and improving the Service, where
            that interest is not overridden by your rights.
          </p>

          <h2 id="sensitive">5. How we protect sensitive identifiers</h2>
          <p>
            Social Security numbers and driver&rsquo;s license information receive
            heightened protection. We:
          </p>
          <ul>
            <li>
              <strong>Store them in an isolated PII vault</strong> operated by Skyflow,
              Inc., separate from our application database. Sensitive identifiers never
              touch our application servers in plaintext.
            </li>
            <li>
              <strong>Encrypt them at rest and in transit</strong> using industry-standard
              encryption.
            </li>
            <li>
              <strong>Use them only for the purpose collected</strong> &mdash; satisfying
              utility and service provider identity verification requirements.
            </li>
            <li>
              <strong>Purge them from the vault within 24 hours</strong> after the
              completion of the task or tasks for which they were collected. After purge,
              the information is no longer recoverable from Verity systems.
            </li>
            <li>
              <strong>Do not sell, license, or share them with marketing platforms.</strong>
            </li>
          </ul>

          <h2 id="retention">6. How long we keep information</h2>
          <p>
            We retain different categories of information for different periods, based on
            the purpose for which we collected the information and applicable legal
            requirements:
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Retention period</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Social Security number, driver&rsquo;s license</td>
                  <td>Purged within 24 hours of task completion</td>
                  <td>No ongoing business need; reduce breach exposure</td>
                </tr>
                <tr>
                  <td>Name, email, phone, addresses</td>
                  <td>Active account + 3 years</td>
                  <td>Customer service, fraud, repeat business</td>
                </tr>
                <tr>
                  <td>Stripe transaction records</td>
                  <td>7 years</td>
                  <td>IRS recordkeeping, dispute defense</td>
                </tr>
                <tr>
                  <td>Limited Power of Attorney records</td>
                  <td>7 years</td>
                  <td>UETA evidentiary requirement, dispute defense</td>
                </tr>
                <tr>
                  <td>Marketing communications consent records</td>
                  <td>Until revoked + 1 year</td>
                  <td>TCPA defense</td>
                </tr>
                <tr>
                  <td>Website analytics and security logs</td>
                  <td>13 months</td>
                  <td>Site operation and security</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            When the applicable retention period ends, we delete or de-identify the
            information using reasonable measures designed to make it unrecoverable, in
            accordance with N.C.G.S. § 75-64.
          </p>

          <h2 id="share">7. Who we share information with</h2>
          <p>We share personal information only with the following categories of recipients:</p>
          <ul>
            <li>
              <strong>Service providers and platform partners,</strong> including utility
              companies, internet service providers, alarm and pest control providers,
              and municipal water authorities, where you have authorized us to contact
              them on your behalf.
            </li>
            <li>
              <strong>Verity infrastructure vendors,</strong> including Skyflow (PII
              vault), Stripe (payments), our website hosting and email vendors, and our
              analytics provider, each of whom processes information only on our behalf
              under written contract.
            </li>
            <li>
              <strong>Legal and regulatory authorities,</strong> when required by valid
              legal process or to protect the rights, property, or safety of Verity, our
              customers, or others.
            </li>
            <li>
              <strong>Successors,</strong> in connection with a merger, acquisition, or
              sale of assets, subject to confidentiality obligations.
            </li>
          </ul>
          <p>
            <strong>We do not sell personal information.</strong> We do not share
            personal information with third-party advertising networks for cross-context
            behavioral advertising.
          </p>

          <h2 id="rights">8. Your rights</h2>
          <p>
            Subject to verification and applicable law, you may exercise the following
            rights:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> request a copy of the personal information we hold
              about you.
            </li>
            <li>
              <strong>Correction:</strong> request that we correct inaccurate or
              incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> request that we delete personal information
              about you, subject to legal and contractual retention obligations.
            </li>
            <li>
              <strong>Portability:</strong> request a copy of your information in a
              portable format.
            </li>
            <li>
              <strong>Opt-out of marketing:</strong> unsubscribe from marketing emails at
              any time using the link in the email or by contacting us.
            </li>
            <li>
              <strong>Revoke authorization:</strong> revoke the Limited Power of Attorney
              at any time, with a 24-hour notice window for tasks already in progress.
            </li>
          </ul>
          <p>
            Residents of California, Virginia, Colorado, Connecticut, Texas, and other
            jurisdictions with consumer privacy statutes may have additional or analogous
            rights, including the right to appeal a denied request and the right not to
            be discriminated against for exercising a right. To exercise any right,
            contact us using the details below. We will respond within the time required
            by applicable law.
          </p>

          <h2 id="security">9. Security</h2>
          <p>
            We use administrative, technical, and physical safeguards designed to protect
            personal information from loss, misuse, and unauthorized access. These
            include encryption at rest and in transit for sensitive identifiers, access
            controls, vendor due diligence, and the minimum-retention practices described
            above. No system is perfectly secure, and we cannot guarantee that
            unauthorized access will never occur.
          </p>
          <p>
            In the event of a breach of unencrypted personal information that is
            reasonably likely to result in harm, we will notify you in accordance with
            North Carolina&rsquo;s Identity Theft Protection Act, N.C.G.S. § 75-65, and
            other applicable breach notification laws.
          </p>

          <h2 id="children">10. Children</h2>
          <p>
            The Service is not directed to children under 16, and we do not knowingly
            collect personal information from children under 16. If you believe a child
            has provided us with personal information, contact us and we will delete the
            information.
          </p>

          <h2 id="cookies">11. Cookies and tracking technologies</h2>
          <p>
            Our website uses a small number of cookies and similar technologies that are
            either strictly necessary for the site to function or that help us measure
            site performance in aggregate. We do not use cookies for cross-context
            behavioral advertising, and we do not participate in third-party advertising
            networks. Most browsers allow you to disable cookies in your browser
            settings.
          </p>
          <p>
            We honor Global Privacy Control (GPC) signals as opt-out preference signals
            for the sale or sharing of personal information for cross-context behavioral
            advertising, where applicable.
          </p>

          <h2 id="changes">12. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will
            update the &ldquo;Last updated&rdquo; date at the top of this page. If the
            change is material, we will provide notice through the Service or by email
            before the change takes effect. Your continued use of the Service after the
            effective date constitutes acceptance of the updated Policy.
          </p>

          <h2 id="contact">13. How to contact us</h2>
          <p>
            For privacy questions or requests, contact us at:
          </p>
          <p className="contact-block">
            <strong>Verity Agentic Services LLC</strong>
            <br />
            d/b/a Verity Relocation
            <br />
            Attn: Privacy
            <br />
            Durham, North Carolina
            <br />
            <a href="mailto:privacy@verityrelocation.com">privacy@verityrelocation.com</a>
          </p>

          <p className="related">
            See also our <Link href="/terms-of-service">Terms of Service</Link>.
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
        .legal :global(h2:first-child) {
          padding-top: 0;
          border-top: none;
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

        .table-wrap {
          overflow-x: auto;
          margin: 24px 0;
          border-radius: 8px;
          border: 1px solid rgba(28, 43, 51, 0.1);
        }
        .legal :global(table) {
          width: 100%;
          border-collapse: collapse;
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          background: white;
        }
        .legal :global(thead) {
          background: ${C.primary};
        }
        .legal :global(thead th) {
          color: white;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
        }
        .legal :global(tbody td) {
          padding: 12px 16px;
          border-top: 1px solid rgba(28, 43, 51, 0.08);
          color: ${C.ink};
          line-height: 1.5;
          vertical-align: top;
        }
        .legal :global(tbody tr:nth-child(even)) {
          background: rgba(247, 245, 240, 0.4);
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
