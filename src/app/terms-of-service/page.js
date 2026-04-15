"use client";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { C } from "@/components/brand";

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

function P({ children, caps }) {
  return (
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: caps ? 13 : 15, color: C.ink, lineHeight: 1.75, margin: "0 0 1rem", ...(caps ? { textTransform: "uppercase", fontWeight: 500 } : {}) }}>{children}</p>
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

function Callout({ children, warning }) {
  return (
    <div style={{ background: warning ? "rgba(196,136,58,0.06)" : C.light, borderLeft: `3px solid ${warning ? C.amber : C.primary}`, padding: "16px 20px", margin: "1.25rem 0", borderRadius: "0 6px 6px 0" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.deep, margin: 0, lineHeight: 1.7 }}>{children}</p>
    </div>
  );
}

const tocSections = [
  "1. Description of Services", "2. Eligibility", "3. Authorization and Limited Power of Attorney",
  "4. Automated Services Disclosure", "5. Service Tiers and Fees", "6. Client Obligations",
  "7. Service Execution and Limitations", "8. Cancellation and Refunds", "9. Limitation of Liability",
  "10. Indemnification", "11. Dispute Resolution and Binding Arbitration", "12. Intellectual Property",
  "13. Regulatory Disclosures", "14. Privacy", "15. Modifications to Terms", "16. Governing Law",
  "17. Severability", "18. Entire Agreement", "19. Contact",
];

const tocIds = [
  "description", "eligibility", "authorization", "automated-services", "service-tiers",
  "client-obligations", "service-execution", "cancellation", "liability", "indemnification",
  "arbitration", "intellectual-property", "regulatory", "privacy", "modifications",
  "governing-law", "severability", "entire-agreement", "tos-contact",
];

export default function TermsOfServicePage() {
  return (
    <div style={{ background: C.parchment, minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: C.deep, padding: "4rem 2.5rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: C.white, fontWeight: 400, margin: 0 }}>Terms of Service</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.primary, marginTop: 8 }}>Effective Date: April 14, 2026 &middot; Last Updated: April 14, 2026</p>
      </section>
      <div style={{ height: 3, background: `linear-gradient(90deg, ${C.primary}, ${C.amber})` }} />

      {/* Content */}
      <section style={{ background: C.parchment, padding: "3rem 2.5rem 5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Intro */}
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${C.border}` }}>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the utility activation, disconnection, and Internet service provider scheduling services (the &ldquo;Services&rdquo;) provided by <strong style={{ color: C.ink }}>Verity Agentic Services LLC</strong>, doing business as <strong style={{ color: C.ink }}>Verity Relocation</strong>, a subsidiary of Islandia Investments LLC (&ldquo;Verity,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By engaging our Services, you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;) agree to be bound by these Terms in their entirety. If you do not agree, do not use the Services.
          </p>

          {/* TOC */}
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: "20px 24px", marginBottom: "2.5rem" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 16, color: C.deep, fontWeight: 400, marginBottom: 12 }}>Contents</div>
            {tocSections.map((s, i) => (
              <a key={tocIds[i]} href={`#${tocIds[i]}`} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.primary, textDecoration: "none", padding: "4px 0" }}>{s}</a>
            ))}
          </div>

          {/* 1 */}
          <div id="description">
            <SectionHeading>1. Description of Services</SectionHeading>
            <P>Verity Relocation provides a utility concierge service for residential movers in the North Carolina Research Triangle / Raleigh-Durham-Chapel Hill metropolitan area. Our Services include:</P>
            <Bullet>Activation of utility services (electricity, gas, water/sewer, waste collection) at your new residence</Bullet>
            <Bullet>Disconnection or transfer of utility services at your previous residence</Bullet>
            <Bullet>Scheduling of Internet service provider (ISP) installation at your new residence</Bullet>
            <P>Services are executed on your behalf under the authorization you grant through a Limited Power of Attorney. All actions are limited to the scope defined in that authorization instrument and are subject to technical guardrails and human exception monitoring.</P>
            <P>Verity Relocation is a utility concierge service. We do not provide, sell, distribute, or broker utility services themselves. We act solely as your authorized agent for the purpose of interacting with utility providers and ISPs on your behalf.</P>
          </div>

          {/* 2 */}
          <div id="eligibility">
            <SectionHeading>2. Eligibility</SectionHeading>
            <P>To use our Services, you must be at least eighteen (18) years of age, a legal resident of the United States, capable of entering into a binding legal agreement, and either moving into, out of, or within the NC Triangle/RTP service area. You must have the legal authority to establish or terminate utility accounts at the addresses you provide.</P>
          </div>

          {/* 3 */}
          <div id="authorization">
            <SectionHeading>3. Authorization and Limited Power of Attorney</SectionHeading>
            <Callout warning><strong>Important:</strong> Our Services require you to execute a North Carolina Limited Power of Attorney (&ldquo;LPOA&rdquo;) granting Verity Relocation the authority to act on your behalf with utility providers and ISPs. Please read this section carefully.</Callout>
            <P>Before any service actions are initiated, you will be required to execute the following documents:</P>
            <Bullet><strong>Master Service Agreement (MSA):</strong> The comprehensive agreement governing the scope, terms, and conditions of our engagement</Bullet>
            <Bullet><strong>Limited Power of Attorney:</strong> An LPOA executed in accordance with North Carolina law (N.C.G.S. &sect; 66-311 and the Uniform Electronic Transactions Act) authorizing Verity to interact with utility providers and ISPs on your behalf</Bullet>
            <Bullet><strong>Agent Authorization Certificate:</strong> A provider-facing credential confirming our authority to act as your authorized representative</Bullet>
            <Bullet><strong>Service Election Form (Exhibit A):</strong> Your specific selections for which utilities and ISPs to activate, disconnect, or schedule</Bullet>
            <P>The LPOA is limited in scope to the utility and ISP actions you authorize and has a defined termination date (currently September 1, 2026 for initial-phase clients). You may revoke the LPOA at any time by providing written notice. Revocation takes effect upon our receipt and halts all future actions, but does not reverse actions already completed.</P>
            <SubHeading>Electronic Execution</SubHeading>
            <P>All documents may be executed electronically. Electronic signatures are valid and enforceable under the North Carolina Uniform Electronic Transactions Act (N.C.G.S. &sect; 66-311 et seq.) and the federal E-SIGN Act (15 U.S.C. &sect; 7001 et seq.).</P>
          </div>

          {/* 4 */}
          <div id="automated-services">
            <SectionHeading>4. Automated Services Disclosure</SectionHeading>
            <Callout><strong>Transparency:</strong> Verity Relocation uses automated technology to execute the utility and ISP actions you authorize. By engaging our Services, you acknowledge and consent to the use of automated systems acting on your behalf.</Callout>
            <P>Our platform deploys specialized software to execute service actions including navigating provider portals, submitting online forms, and parsing confirmation data. These systems operate within defined technical guardrails:</P>
            <Bullet>An LPOA recording gate requiring confirmed authorization before any provider interaction</Bullet>
            <Bullet>Predefined action boundaries that prevent systems from exceeding the scope of your Service Election</Bullet>
            <Bullet>Automated escalation to human exception monitors for any out-of-bounds condition or provider-side error</Bullet>
            <Bullet>Complete audit logging of all service actions for your post-service review</Bullet>
          </div>

          {/* 5 */}
          <div id="service-tiers">
            <SectionHeading>5. Service Tiers and Fees</SectionHeading>
            <P>Verity Relocation offers three service tiers based on your relocation scenario:</P>

            {/* Table */}
            <div style={{ overflowX: "auto", margin: "1rem 0 1.5rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: C.deep }}>
                    {["Tier", "Scenario", "Scope", "Fee"].map((h) => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: C.white, fontWeight: 600, fontSize: 13 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "Persona A", scenario: "Out-of-state buyer moving into NC", scope: "Full activation at new address (utilities + ISP)", fee: "$149" },
                    { tier: "Persona B", scenario: "In-state seller leaving NC", scope: "Disconnection at departing address", fee: "$99" },
                    { tier: "Persona C", scenario: "In-state mover within NC", scope: "Disconnection at departing + activation at new address", fee: "$179" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 1 ? C.light : "transparent" }}>
                      <td style={{ padding: "10px 16px", fontWeight: 600, color: C.deep }}>{row.tier}</td>
                      <td style={{ padding: "10px 16px", color: C.ink }}>{row.scenario}</td>
                      <td style={{ padding: "10px 16px", color: C.ink }}>{row.scope}</td>
                      <td style={{ padding: "10px 16px", color: C.ink }}>{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <P>Fees are due upon execution of the Master Service Agreement and Service Election. All fees are in U.S. dollars. Payment is processed through our third-party payment processor. Verity Relocation does not store your credit card or payment account details on our servers.</P>
            <P>Fees cover the concierge service of coordinating with providers on your behalf. They do not include and are separate from any deposits, connection fees, or service charges imposed by the utility providers or ISPs themselves. You are responsible for all provider charges.</P>
          </div>

          {/* 6 */}
          <div id="client-obligations">
            <SectionHeading>6. Client Obligations</SectionHeading>
            <Bullet>Provide accurate, complete, and current information, including your legal name, addresses, date of birth, and (where required by providers) Social Security Number</Bullet>
            <Bullet>Execute the required authorization documents (MSA, LPOA, Service Election) before service commencement</Bullet>
            <Bullet>Respond promptly to any requests for additional information or exception approvals</Bullet>
            <Bullet>Not use the Services for any unlawful purpose or to establish utility accounts at addresses where you lack legal authority</Bullet>
            <Bullet>Comply with the 10-Day Rule: submit your service request at least ten (10) business days before your move date to ensure timely execution, particularly for moves occurring near the June 1 Homestead Exclusion deadline or other time-sensitive dates</Bullet>
            <P>Providing false or misleading information may result in immediate termination of Services without refund, and may be reported to appropriate authorities.</P>
          </div>

          {/* 7 */}
          <div id="service-execution">
            <SectionHeading>7. Service Execution and Limitations</SectionHeading>
            <P>We will use commercially reasonable efforts to complete all service actions specified in your Service Election within the timeframe discussed at intake. However, you acknowledge the following limitations:</P>
            <Bullet><strong>Provider dependency:</strong> Service activation and disconnection are ultimately controlled by the utility providers and ISPs. We cannot guarantee specific activation dates, appointment times, or service terms set by providers.</Bullet>
            <Bullet><strong>Provider cooperation:</strong> Some providers may not accept third-party authorization or may impose additional verification requirements beyond our control.</Bullet>
            <Bullet><strong>Service area:</strong> Phase 1 services are limited to the NC Triangle/RTP market and the following providers: Duke Energy, City of Raleigh Public Utilities, PSNC Energy / Dominion Energy, Town of Cary, Republic Services, AT&T Fiber, and Google Fiber.</Bullet>
            <Bullet><strong>Force majeure:</strong> We are not liable for delays or failures caused by events beyond our reasonable control, including natural disasters, provider system outages, government actions, or labor disputes.</Bullet>
          </div>

          {/* 8 */}
          <div id="cancellation">
            <SectionHeading>8. Cancellation and Refunds</SectionHeading>
            <SubHeading>Client-Initiated Cancellation</SubHeading>
            <Bullet><strong>Before service execution begins:</strong> Full refund of the service fee</Bullet>
            <Bullet><strong>After partial execution:</strong> Prorated refund based on the number of provider actions not yet initiated, minus a $25 administrative fee</Bullet>
            <Bullet><strong>After full execution:</strong> No refund, as Services have been substantially performed</Bullet>
            <SubHeading>Verity-Initiated Cancellation</SubHeading>
            <P>We reserve the right to cancel or suspend Services if we determine that you have provided false information, if your LPOA or authorization documents are invalid or revoked, or if continuing service would violate applicable law.</P>
          </div>

          {/* 9 */}
          <div id="liability">
            <SectionHeading>9. Limitation of Liability</SectionHeading>
            <P caps>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: VERITY RELOCATION, VERITY AGENTIC SERVICES LLC, ISLANDIA INVESTMENTS LLC, AND THEIR RESPECTIVE OFFICERS, MEMBERS, MANAGERS, EMPLOYEES, AGENTS, AND AFFILIATES (COLLECTIVELY, THE &ldquo;VERITY PARTIES&rdquo;) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.</P>
            <P caps>THE AGGREGATE LIABILITY OF THE VERITY PARTIES FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU FOR THE SPECIFIC SERVICE ENGAGEMENT GIVING RISE TO THE CLAIM.</P>
          </div>

          {/* 10 */}
          <div id="indemnification">
            <SectionHeading>10. Indemnification</SectionHeading>
            <P>You agree to indemnify, defend, and hold harmless the Verity Parties from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees) arising from or related to: (a) your breach of these Terms, (b) your provision of false or misleading information, (c) your violation of any applicable law or regulation, or (d) any dispute between you and a utility provider or ISP that is not caused by Verity&rsquo;s negligence or willful misconduct.</P>
          </div>

          {/* 11 */}
          <div id="arbitration">
            <SectionHeading>11. Dispute Resolution and Binding Arbitration</SectionHeading>
            <Callout warning><strong>Please read this section carefully. It affects your legal rights, including your right to file a lawsuit in court.</strong></Callout>
            <SubHeading>Informal Resolution</SubHeading>
            <P>Before initiating formal dispute resolution, you agree to contact us and attempt to resolve any dispute informally for at least thirty (30) days.</P>
            <SubHeading>Binding Arbitration</SubHeading>
            <P>Any dispute, claim, or controversy arising from or relating to these Terms or the Services that is not resolved informally shall be resolved by binding arbitration administered by the American Arbitration Association (&ldquo;AAA&rdquo;) under its Consumer Arbitration Rules. Arbitration shall take place in <strong>Durham County, North Carolina</strong>, unless the parties mutually agree to an alternative location or virtual proceedings.</P>
            <SubHeading>Class Action Waiver</SubHeading>
            <P caps>YOU AND VERITY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.</P>
            <SubHeading>Exceptions</SubHeading>
            <P>Either party may bring a claim in small claims court in Durham County, North Carolina, if the claim qualifies. Either party may seek injunctive relief in a court of competent jurisdiction to prevent irreparable harm pending arbitration.</P>
          </div>

          {/* 12 */}
          <div id="intellectual-property">
            <SectionHeading>12. Intellectual Property</SectionHeading>
            <P>All content, technology, trademarks, trade names, logos, and proprietary systems associated with Verity Relocation are the exclusive property of Verity Agentic Services LLC or its licensors. You may not copy, modify, distribute, or create derivative works from any of our proprietary materials without our prior written consent.</P>
          </div>

          {/* 13 */}
          <div id="regulatory">
            <SectionHeading>13. Regulatory Disclosures</SectionHeading>
            <Bullet><strong>Non-brokerage status:</strong> We are not a broker of utility services, transportation services, or household goods. We are not subject to FMCSA brokerage registration requirements or the associated $75,000 surety bond requirement.</Bullet>
            <Bullet><strong>Not a utility provider:</strong> We do not generate, transmit, distribute, or sell electricity, gas, water, waste collection, or internet services.</Bullet>
            <Bullet><strong>Not a licensed agent of any utility company:</strong> We act solely under the authority granted by your Limited Power of Attorney, not as an employee, contractor, or licensed agent of any utility provider or ISP.</Bullet>
            <Bullet><strong>Referral fee compliance:</strong> In accordance with North Carolina State Bar 99 Formal Ethics Opinion 1, no closing attorney or title company is paid a referral fee for directing clients to Verity Relocation. Any co-marketing relationships are structured as flat-fee marketing services agreements.</Bullet>
          </div>

          {/* 14 */}
          <div id="privacy">
            <SectionHeading>14. Privacy</SectionHeading>
            <P>Your use of the Services is subject to our <Link href="/privacy-policy" style={{ color: C.primary, textDecoration: "underline" }}>Privacy Policy</Link>, which describes how we collect, use, and protect your personal information. By using the Services, you consent to the practices described in the Privacy Policy.</P>
          </div>

          {/* 15 */}
          <div id="modifications">
            <SectionHeading>15. Modifications to Terms</SectionHeading>
            <P>We may modify these Terms at any time by posting the revised version on our website with an updated effective date. Material changes will be communicated to active clients via email at least fifteen (15) days before taking effect.</P>
          </div>

          {/* 16 */}
          <div id="governing-law">
            <SectionHeading>16. Governing Law</SectionHeading>
            <P>These Terms are governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict-of-laws provisions. Subject to the arbitration provisions in Section 11, any legal action arising from these Terms shall be brought in the state or federal courts located in Durham County, North Carolina.</P>
          </div>

          {/* 17 */}
          <div id="severability">
            <SectionHeading>17. Severability</SectionHeading>
            <P>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from these Terms. The remaining provisions continue in full force and effect.</P>
          </div>

          {/* 18 */}
          <div id="entire-agreement">
            <SectionHeading>18. Entire Agreement</SectionHeading>
            <P>These Terms, together with the Master Service Agreement, Limited Power of Attorney, Agent Authorization Certificate, Service Election (Exhibit A), Automated Service Disclosure, and Privacy Policy, constitute the entire agreement between you and Verity Relocation with respect to the Services and supersede all prior or contemporaneous communications, whether oral or written.</P>
          </div>

          {/* 19 */}
          <div id="tos-contact">
            <SectionHeading>19. Contact</SectionHeading>
            <P>For questions about these Terms of Service:</P>
            <P>
              <strong>Verity Relocation</strong><br/>
              A DBA of Verity Agentic Services LLC<br/>
              A subsidiary of Islandia Investments LLC<br/>
              North Carolina, United States<br/>
              Email: <a href="mailto:legal@verityrelocation.com" style={{ color: C.primary }}>legal@verityrelocation.com</a>
            </P>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
