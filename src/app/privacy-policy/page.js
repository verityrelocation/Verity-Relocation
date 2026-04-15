"use client";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C } from "@/components/brand";

const sections = [
  { id: "info-collect", title: "1. Information We Collect" },
  { id: "how-collect", title: "2. How We Collect Information" },
  { id: "use-info", title: "3. How We Use Your Information" },
  { id: "automated-disclosure", title: "4. Automated Processing Disclosure" },
  { id: "data-sharing", title: "5. Information Sharing and Disclosure" },
  { id: "data-security", title: "6. Data Security" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "your-rights", title: "8. Your Rights" },
  { id: "minors", title: "9. Children\u2019s Privacy" },
  { id: "third-party", title: "10. Third-Party Links and Services" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us" },
];

function SectionHeading({ children }) {
  return (
    <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: C.deep, fontWeight: 400, margin: "2.5rem 0 0.75rem", paddingBottom: 8, borderBottom: `2px solid ${C.primary}`, display: "inline-block" }}>{children}</h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: C.ink, fontWeight: 400, margin: "1.5rem 0 0.5rem" }}>{children}</h3>
  );
}

function P({ children }) {
  return (
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink, lineHeight: 1.75, margin: "0 0 1rem" }}>{children}</p>
  );
}

function Bullet({ children }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.ink, lineHeight: 1.7 }}>
      <span style={{ color: C.primary, flexShrink: 0, marginTop: 2 }}>{"\u2022"}</span>
      <span>{children}</span>
    </div>
  );
}

function Callout({ children }) {
  return (
    <div style={{ background: C.light, borderLeft: `3px solid ${C.primary}`, padding: "16px 20px", margin: "1.25rem 0", borderRadius: "0 6px 6px 0" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.deep, margin: 0, lineHeight: 1.7 }}>{children}</p>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: C.deep, padding: "4rem 2.5rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: C.white, fontWeight: 400, margin: 0 }}>Privacy Policy</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.primary, marginTop: 8 }}>Effective Date: April 14, 2026 &middot; Last Updated: April 14, 2026</p>
      </section>
      <div style={{ height: 3, background: `linear-gradient(90deg, ${C.primary}, ${C.amber})` }} />

      {/* Content */}
      <section style={{ background: C.parchment, padding: "3rem 2.5rem 5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Intro */}
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${C.border}` }}>
            This Privacy Policy describes how <strong style={{ color: C.ink }}>Verity Agentic Services LLC</strong>, doing business as <strong style={{ color: C.ink }}>Verity Relocation</strong>, a subsidiary of Islandia Investments LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), collects, uses, discloses, and protects your personal information when you use our utility activation, disconnection, and Internet service provider scheduling services (the &ldquo;Services&rdquo;). We are headquartered in North Carolina and serve clients in the Research Triangle/Raleigh-Durham-Chapel Hill metropolitan area.
          </p>

          {/* TOC */}
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: "20px 24px", marginBottom: "2.5rem" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 16, color: C.deep, fontWeight: 400, marginBottom: 12 }}>Contents</div>
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.primary, textDecoration: "none", padding: "4px 0" }}>{s.title}</a>
            ))}
          </div>

          {/* Section 1 */}
          <div id="info-collect">
            <SectionHeading>1. Information We Collect</SectionHeading>
            <SubHeading>Personal Identification Information</SubHeading>
            <P>To execute utility activation, disconnection, and ISP scheduling on your behalf, we may collect:</P>
            <Bullet>Full legal name and contact information (email address, phone number, mailing address)</Bullet>
            <Bullet>Current and new residential addresses</Bullet>
            <Bullet>Social Security Number (SSN) or the last four digits thereof, as required by certain utility providers for account activation and identity verification</Bullet>
            <Bullet>Date of birth</Bullet>
            <Bullet>Government-issued identification number (when required by a specific provider)</Bullet>
            <Bullet>Payment information for Verity service fees</Bullet>

            <SubHeading>Service-Related Information</SubHeading>
            <Bullet>Utility and ISP account numbers (existing or newly created)</Bullet>
            <Bullet>Move-in and move-out dates</Bullet>
            <Bullet>Service preferences and scheduling selections</Bullet>
            <Bullet>Real estate transaction details relevant to service execution (e.g., closing date, property address)</Bullet>
            <Bullet>Records of authorization and consent (including Limited Power of Attorney execution records)</Bullet>

            <SubHeading>Technical and Usage Information</SubHeading>
            <Bullet>Browser type, device information, and IP address</Bullet>
            <Bullet>Pages visited and interactions with our website</Bullet>
            <Bullet>Service request metadata and timestamps</Bullet>
          </div>

          {/* Section 2 */}
          <div id="how-collect">
            <SectionHeading>2. How We Collect Information</SectionHeading>
            <Bullet><strong>Direct submission:</strong> Information you provide when completing our Service Election form, executing our Master Service Agreement, and granting a Limited Power of Attorney under North Carolina law (N.C.G.S. &sect; 66-311 / UETA)</Bullet>
            <Bullet><strong>Referral partners:</strong> Information shared by closing attorneys, title companies, or real estate brokers who refer you to our Services, with your consent</Bullet>
            <Bullet><strong>Automated collection:</strong> Technical data collected via cookies, analytics tools, and server logs when you interact with our website</Bullet>
            <Bullet><strong>Third-party service providers:</strong> Confirmation data received from utility companies and ISPs during service execution</Bullet>
          </div>

          {/* Section 3 */}
          <div id="use-info">
            <SectionHeading>3. How We Use Your Information</SectionHeading>
            <Bullet>Executing utility activations, disconnections, and ISP scheduling on your behalf pursuant to the Limited Power of Attorney you grant us</Bullet>
            <Bullet>Verifying your identity with utility providers and ISPs as required for account setup</Bullet>
            <Bullet>Processing payment for our Services</Bullet>
            <Bullet>Communicating with you about service status, confirmations, and any exceptions requiring your input</Bullet>
            <Bullet>Maintaining records of completed service actions for your reference</Bullet>
            <Bullet>Improving and optimizing our Services and platform</Bullet>
            <Bullet>Complying with legal obligations and resolving disputes</Bullet>
          </div>

          {/* Section 4 */}
          <div id="automated-disclosure">
            <SectionHeading>4. Automated Processing Disclosure</SectionHeading>
            <Callout><strong>Transparency commitment:</strong> Verity Relocation uses automated technology to execute utility and ISP service actions on your behalf. We believe you have the right to understand how your data is processed.</Callout>
            <P>Our platform uses specialized software to perform the following functions on your behalf:</P>
            <Bullet>Initiating utility activation and disconnection requests with providers (including Duke Energy, City of Raleigh Public Utilities, PSNC Energy/Dominion Energy, Town of Cary, Republic Services, AT&T Fiber, and Google Fiber)</Bullet>
            <Bullet>Scheduling ISP installation appointments</Bullet>
            <Bullet>Navigating provider portals and online forms</Bullet>
            <Bullet>Parsing confirmation data and generating your completion reports</Bullet>
            <P>All automated actions operate within defined technical guardrails. These include authorization verification gates (confirming your LPOA is on file before any provider interaction), spend limits, and escalation protocols that route exceptions to human oversight staff. No automated process may exceed the scope of authority granted in your Limited Power of Attorney.</P>

            <SubHeading>Human Oversight</SubHeading>
            <P>While the majority of service actions are executed by our platform, human exception monitors review flagged transactions, handle provider-side errors, and manage any situation that falls outside automated parameters. You may request human review of any completed action by contacting us.</P>

            <SubHeading>SSN Processing</SubHeading>
            <P>When a utility provider requires your Social Security Number for identity verification, your SSN is transmitted through a tokenized vault infrastructure. The full SSN is never stored in plaintext on our servers. Tokenized values are used to complete provider verification, after which the active token is retired in accordance with our data retention policy.</P>
          </div>

          {/* Section 5 */}
          <div id="data-sharing">
            <SectionHeading>5. Information Sharing and Disclosure</SectionHeading>
            <P>We share your personal information only as necessary to deliver the Services you have authorized.</P>

            <SubHeading>Utility Providers and ISPs</SubHeading>
            <P>We disclose your name, address, date of birth, and (where required) SSN to utility companies and ISPs solely for the purpose of account activation, disconnection, or scheduling as authorized under your Limited Power of Attorney.</P>

            <SubHeading>Referral Partners</SubHeading>
            <P>We may share limited, non-sensitive service status information (e.g., &ldquo;services activated&rdquo; / &ldquo;pending&rdquo;) with the closing attorney or real estate professional who referred you, solely for closing coordination purposes. We do not share your SSN, financial information, or detailed account data with referral partners.</P>

            <SubHeading>Service Providers</SubHeading>
            <P>We engage third-party service providers for payment processing, data tokenization and vaulting, document management, and platform infrastructure. These providers are contractually obligated to use your data only as directed by us and to maintain appropriate security controls.</P>

            <SubHeading>Legal Obligations</SubHeading>
            <P>We may disclose information when required by law, subpoena, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</P>

            <SubHeading>What We Do Not Do</SubHeading>
            <P>We do not sell, rent, or trade your personal information to third parties for marketing purposes. We do not use your information for advertising or profiling. We do not share your data with any party not directly involved in delivering the Services you authorized.</P>
          </div>

          {/* Section 6 */}
          <div id="data-security">
            <SectionHeading>6. Data Security</SectionHeading>
            <P>We implement administrative, technical, and physical safeguards designed to protect your personal information, including:</P>
            <Bullet>Encryption in transit (TLS 1.2+) and at rest for all sensitive personal data</Bullet>
            <Bullet>Tokenized vault infrastructure for SSN and sensitive identity data, ensuring plaintext values are never stored on our application servers</Bullet>
            <Bullet>Role-based access controls limiting staff access to personal data on a need-to-know basis</Bullet>
            <Bullet>Audit logging of all data access events and service actions within our platform</Bullet>
            <Bullet>Regular security assessments of our platform and third-party integrations</Bullet>
            <P>While we strive to protect your information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security, but we are committed to promptly addressing any breach in accordance with North Carolina&rsquo;s Identity Theft Protection Act (N.C.G.S. &sect; 75-61 et seq.).</P>
          </div>

          {/* Section 7 */}
          <div id="data-retention">
            <SectionHeading>7. Data Retention</SectionHeading>
            <Bullet><strong>Service records:</strong> Retained for one (1) year following service completion, after which they are archived or deleted</Bullet>
            <Bullet><strong>SSN tokens:</strong> Active tokens are retired promptly upon completion of the utility provider verification for which they were created</Bullet>
            <Bullet><strong>LPOA and authorization records:</strong> Retained for the duration specified in the Limited Power of Attorney (through the termination date, currently September 1, 2026 for initial-phase clients) and for two (2) years thereafter for legal compliance</Bullet>
            <Bullet><strong>Payment records:</strong> Retained as required by applicable tax and financial regulations</Bullet>
            <Bullet><strong>Website analytics:</strong> Aggregated and anonymized within ninety (90) days of collection</Bullet>
            <P>You may request early deletion of your data by contacting us, subject to our legal retention obligations.</P>
          </div>

          {/* Section 8 */}
          <div id="your-rights">
            <SectionHeading>8. Your Rights</SectionHeading>
            <Bullet><strong>Access:</strong> You may request a copy of the personal information we hold about you</Bullet>
            <Bullet><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information</Bullet>
            <Bullet><strong>Deletion:</strong> You may request deletion of your personal information, subject to legal retention requirements</Bullet>
            <Bullet><strong>Revocation of authorization:</strong> You may revoke your Limited Power of Attorney at any time by providing written notice, which will halt all future service actions on your behalf</Bullet>
            <Bullet><strong>Human review:</strong> You may request human review of any action taken by our automated systems</Bullet>
            <Bullet><strong>Data portability:</strong> You may request your data in a commonly used, machine-readable format</Bullet>
            <P>To exercise any of these rights, please contact us using the information in Section 12. We will respond to verified requests within thirty (30) days.</P>
          </div>

          {/* Section 9 */}
          <div id="minors">
            <SectionHeading>9. Children&rsquo;s Privacy</SectionHeading>
            <P>Our Services are not directed to individuals under the age of eighteen (18). We do not knowingly collect personal information from minors. If we become aware that we have collected information from a person under 18, we will promptly delete that information.</P>
          </div>

          {/* Section 10 */}
          <div id="third-party">
            <SectionHeading>10. Third-Party Links and Services</SectionHeading>
            <P>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party services you access.</P>
          </div>

          {/* Section 11 */}
          <div id="changes">
            <SectionHeading>11. Changes to This Policy</SectionHeading>
            <P>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Material changes will be communicated via email to active clients and posted on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued use of the Services after any changes constitutes acceptance of the revised policy.</P>
          </div>

          {/* Section 12 */}
          <div id="contact">
            <SectionHeading>12. Contact Us</SectionHeading>
            <P>If you have questions about this Privacy Policy or wish to exercise your rights:</P>
            <P>
              <strong>Verity Relocation</strong><br/>
              A DBA of Verity Agentic Services LLC<br/>
              A subsidiary of Islandia Investments LLC<br/>
              North Carolina, United States<br/>
              Email: <a href="mailto:privacy@verityrelocation.com" style={{ color: C.primary }}>privacy@verityrelocation.com</a>
            </P>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
