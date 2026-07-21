import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your personal data.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/" className="text-sm font-medium text-muted hover:text-primary">
            Home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: July 21, 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">1. Who we are</h2>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{" "}
              <a href={SITE_URL} className="text-primary hover:underline">
                {SITE_URL}
              </a>
              . We are building a real-time city discovery product, currently in
              closed beta in Stockholm.
            </p>
            <p>
              Contact:{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">2. What we collect</h2>
            <p>When you join the waitlist or contact us, we may collect:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name (optional)</li>
              <li>Email address (required)</li>
              <li>Consent timestamp and source (e.g. landing page)</li>
              <li>Technical data such as IP address and browser type (for security and abuse prevention)</li>
            </ul>
            <p>
              We do not sell personal data. We do not require an account to join
              the waitlist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">3. Why we process your data</h2>
            <p>We process waitlist data to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Manage early access and beta invitations</li>
              <li>Communicate product updates related to the beta</li>
              <li>Prevent spam and abuse</li>
              <li>Respond to partnership or support requests</li>
            </ul>
            <p>
              Legal basis (GDPR): your consent when you submit the waitlist form,
              and our legitimate interest in securing the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">4. How we store and share data</h2>
            <p>
              Signups are stored with our infrastructure and email/notification
              providers solely for waitlist operations. We may use trusted
              processors (for example hosting, email delivery, or automation
              tools) under appropriate data processing terms.
            </p>
            <p>
              We do not share your email with advertisers. We do not use waitlist
              emails for unrelated marketing without a clear opt-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">5. Retention</h2>
            <p>
              We keep waitlist data until the beta invite process is complete, or
              until you ask us to delete it — whichever comes first. You can
              request deletion at any time by emailing {SITE_EMAIL}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">6. Your rights</h2>
            <p>If you are in the EEA/UK/Switzerland, you may have the right to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Object to certain processing</li>
              <li>Lodge a complaint with your local supervisory authority</li>
            </ul>
            <p>
              To exercise these rights, contact{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
                {SITE_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">7. Cookies</h2>
            <p>
              This marketing site currently does not use non-essential tracking
              cookies. If we add analytics later, we will update this policy and
              obtain consent where required.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">8. Changes</h2>
            <p>
              We may update this policy as the product evolves. Material changes
              will be reflected by updating the &quot;Last updated&quot; date on
              this page.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted">
          Also see our{" "}
          <Link href="/terms" className="font-medium text-primary hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
