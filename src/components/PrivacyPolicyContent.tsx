const LAST_UPDATED = "May 27, 2026";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-reveal border-b-hairline pb-12">
      <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
        {title}
      </h2>
      <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}

export default function PrivacyPolicyContent() {
  return (
    <article className="space-y-12">
      <header className="scroll-reveal border-b-hairline pb-12">
        <p className="font-meta-technical text-meta-technical text-mint-green">
          [ LEGAL / PRIVACY ]
        </p>
        <h1 className="mt-4 font-headline-lg text-headline-lg text-on-surface">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          This policy describes how Arnav Prabhu (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information when you
          visit this portfolio website. It is written to meet common transparency
          expectations under the EU General Data Protection Regulation (GDPR),
          UK GDPR, California Consumer Privacy Act as amended by the California
          Privacy Rights Act (CCPA/CPRA), the U.S. Children&apos;s Online Privacy
          Protection Act (COPPA), and leading Asia-Pacific frameworks including
          Japan&apos;s APPI, South Korea&apos;s PIPA, Singapore&apos;s PDPA, and
          comparable notice requirements elsewhere.
        </p>
        <p className="mt-4 font-meta-technical text-meta-technical text-on-surface-variant">
          Last updated: {LAST_UPDATED}
        </p>
        <p className="mt-6 max-w-3xl font-body-md text-body-md text-on-surface-variant/80">
          This document is provided for transparency and is not legal advice. If
          you need advice about your specific situation, consult a qualified
          attorney in your jurisdiction.
        </p>
      </header>

      <Section id="controller" title="1. Who we are">
        <P>
          <strong className="text-on-surface">Data controller:</strong> Arnav
          Prabhu (individual operator of this personal portfolio site).
        </P>
        <P>
          <strong className="text-on-surface">Contact:</strong> To exercise
          privacy rights or ask questions about this policy, reach out via the{" "}
          <a
            className="link-fill-hover text-mint-green underline-offset-4 hover:underline"
            href="/#contact"
          >
            Contact
          </a>{" "}
          section on the homepage (LinkedIn or GitHub).
        </P>
      </Section>

      <Section id="scope" title="2. Scope">
        <P>
          This policy applies to visitors who access this website. We do not
          operate user accounts, checkout, newsletters, or contact forms that
          collect personal information on this site. External links (for example,
          LinkedIn or GitHub) are governed by those services&apos; own policies.
        </P>
      </Section>

      <Section id="collect" title="3. What we collect">
        <P>
          We designed this site to collect only limited, aggregated usage
          information to understand how the portfolio is used. We do{" "}
          <strong className="text-on-surface">not</strong> intentionally collect
          your name, email address, postal address, phone number, government ID,
          payment details, precise geolocation, browsing history across other
          sites, or other profile information through this website.
        </P>
        <P>
          Through privacy-oriented web analytics (provided by our hosting
          platform, Vercel Web Analytics), we receive only:
        </P>
        <Ul>
          <li>
            <strong className="text-on-surface">Visitor counts</strong> —
            aggregated numbers of visits and page views, not individualized
            profiles for advertising.
          </li>
          <li>
            <strong className="text-on-surface">Operating system</strong> —
            general device/OS category (for example, Windows, macOS, iOS,
            Android) to understand technical compatibility.
          </li>
          <li>
            <strong className="text-on-surface">Country</strong> — country or
            region inferred from network connection (for example, via IP
            geolocation at country level) to understand geographic reach.
          </li>
        </Ul>
        <P>
          Our analytics provider may process technical data (such as IP address
          or browser user agent) temporarily to derive the metrics above; we do
          not use that data to identify you by name or to build marketing
          profiles.
        </P>
      </Section>

      <Section id="not-collect" title="4. What we do not do">
        <Ul>
          <li>We do not sell or share personal information for cross-context behavioral advertising.</li>
          <li>We do not use advertising or social-media tracking pixels on this site.</li>
          <li>We do not knowingly collect personal information from children under 13 (see COPPA section below).</li>
          <li>We do not require you to create an account to browse this site.</li>
        </Ul>
      </Section>

      <Section id="purposes" title="5. Why we use this information">
        <P>We use the limited metrics above solely to:</P>
        <Ul>
          <li>Measure overall traffic and interest in the portfolio;</li>
          <li>Maintain and improve site reliability and performance; and</li>
          <li>Understand broad geographic and platform distribution of visitors.</li>
        </Ul>
        <P>
          <strong className="text-on-surface">Legal bases (EEA/UK):</strong> Where
          GDPR or UK GDPR applies, we rely on{" "}
          <strong className="text-on-surface">legitimate interests</strong> (Article
          6(1)(f)) in operating and securing a low-risk personal portfolio with
          minimal analytics, balanced against your rights. Where local law
          requires consent for non-essential analytics, you may disable
          analytics in your browser or contact us to discuss opt-out.
        </P>
      </Section>

      <Section id="cookies" title="6. Cookies and similar technologies">
        <P>
          This site does not set first-party marketing cookies. Our hosting and
          analytics provider may use strictly necessary or analytics-related
          technologies to deliver the service and produce aggregated statistics.
          Because we do not run advertising or third-party marketing tags, we do
          not use non-essential cookies for ad targeting.
        </P>
        <P>
          You can limit cookies through your browser settings. Blocking all
          cookies may affect how some features load.
        </P>
      </Section>

      <Section id="sharing" title="7. Service providers and transfers">
        <P>
          We use <strong className="text-on-surface">Vercel, Inc.</strong> to
          host this website and provide Web Analytics. Vercel may process data in
          the United States and other countries. Where required, transfers rely
          on appropriate safeguards (such as Standard Contractual Clauses or
          equivalent mechanisms under GDPR).
        </P>
        <P>
          We do not disclose your information to other third parties except: (a)
          as needed to operate the site through our processor; (b) if required by
          law; or (c) to protect rights, safety, or security.
        </P>
      </Section>

      <Section id="retention" title="8. How long we keep information">
        <P>
          Aggregated analytics are retained according to our processor&apos;s
          retention schedule (typically on the order of months, not indefinitely).
          We do not maintain a separate database of identifiable visitors on this
          site.
        </P>
      </Section>

      <Section id="security" title="9. Security">
        <P>
          We use industry-standard hosting and HTTPS. No method of transmission
          over the Internet is completely secure; we cannot guarantee absolute
          security.
        </P>
      </Section>

      <Section id="rights-eu" title="10. Rights for EEA, UK, and Switzerland">
        <P>
          Depending on where you live, you may have rights to access, rectify,
          erase, restrict, or object to processing, and to data portability.
          You may lodge a complaint with your local supervisory authority.
        </P>
        <P>
          To make a request, contact us via the{" "}
          <a
            className="link-fill-hover text-mint-green underline-offset-4 hover:underline"
            href="/#contact"
          >
            Contact
          </a>{" "}
          section. We will respond within timeframes required by applicable law
          (often within one month under GDPR).
        </P>
      </Section>

      <Section id="rights-california" title="11. California residents (CCPA/CPRA)">
        <P>
          If you are a California resident, you may have rights to know, access,
          delete, and correct personal information, and to opt out of sale or
          sharing. <strong className="text-on-surface">We do not sell or share</strong>{" "}
          personal information as those terms are defined under California law.
        </P>
        <P>
          In the preceding 12 months, the categories of personal information we
          collect are limited to internet or other electronic network activity
          information (aggregated visit metrics, OS category, and country-level
          location) for the business purposes described above.
        </P>
        <P>
          Many small personal sites are not subject to the CCPA/CPRA business
          thresholds (for example, annual revenue, volume of California
          consumers, or revenue from selling data). We provide these disclosures
          voluntarily for transparency. To exercise rights, contact us via{" "}
          <a
            className="link-fill-hover text-mint-green underline-offset-4 hover:underline"
            href="/#contact"
          >
            Contact
          </a>
          .
        </P>
        <P>
          We do not discriminate against you for exercising privacy rights.
        </P>
      </Section>

      <Section id="coppa" title="12. Children (COPPA)">
        <P>
          This website is a general-audience professional portfolio and is{" "}
          <strong className="text-on-surface">not directed to children</strong>{" "}
          under 13 years of age. We do not knowingly collect personal information
          from children under 13.
        </P>
        <P>
          If you are a parent or guardian and believe your child under 13 has
          provided personal information to us, contact us promptly via{" "}
          <a
            className="link-fill-hover text-mint-green underline-offset-4 hover:underline"
            href="/#contact"
          >
            Contact
          </a>
          . We will take steps to delete such information where required.
        </P>
      </Section>

      <Section id="rights-asia" title="13. Asia-Pacific">
        <P>
          If you are in Japan, South Korea, Singapore, China, India, or other
          jurisdictions with personal-data laws, you may have rights to notice,
          access, correction, deletion, withdrawal of consent, or restriction of
          processing, subject to local law.
        </P>
        <Ul>
          <li>
            <strong className="text-on-surface">Japan (APPI):</strong> We specify
            purposes of use in this policy and limit collection to what is
            described above.
          </li>
          <li>
            <strong className="text-on-surface">South Korea (PIPA):</strong> We
            collect minimal data for stated purposes and honor requests to
            access or delete where applicable.
          </li>
          <li>
            <strong className="text-on-surface">Singapore (PDPA):</strong> We
            collect data only with appropriate notice and for reasonable purposes
            aligned with this policy.
          </li>
        </Ul>
        <P>
          For cross-border transfers from these regions, we rely on contractual
          and technical safeguards through our hosting provider where required.
        </P>
      </Section>

      <Section id="changes" title="14. Changes to this policy">
        <P>
          We may update this policy from time to time. The &ldquo;Last
          updated&rdquo; date at the top will change when we do. Material changes
          will be posted on this page.
        </P>
      </Section>

      <Section id="contact" title="15. Contact">
        <P>
          Questions about this Privacy Policy or your data: use the{" "}
          <a
            className="link-fill-hover text-mint-green underline-offset-4 hover:underline"
            href="/#contact"
          >
            Contact
          </a>{" "}
          links on the homepage.
        </P>
      </Section>
    </article>
  );
}
