import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${SITE_NAME} website and closed beta waitlist.`,
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: July 21, 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">1. Agreement</h2>
            <p>
              By using {SITE_URL} (the &quot;Site&quot;) or joining the {SITE_NAME}{" "}
              waitlist, you agree to these Terms of Service. If you do not agree,
              do not use the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">2. What PULZIVE is</h2>
            <p>
              {SITE_NAME} is a real-time city discovery product currently offered
              as an invite-only closed beta. The Site is a marketing and waitlist
              experience. Access to the mobile app is not guaranteed by joining
              the waitlist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">3. Waitlist &amp; beta</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Waitlist spots are limited and invitations are discretionary.</li>
              <li>We may accept, delay, or decline beta access without obligation.</li>
              <li>Beta features may change, break, or be removed without notice.</li>
              <li>You must provide accurate contact information.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">4. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Submit false information or spam the waitlist</li>
              <li>Attempt to disrupt or reverse engineer the Site</li>
              <li>Scrape, harvest, or misuse content or personal data</li>
              <li>Use the Site for unlawful purposes</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">5. Intellectual property</h2>
            <p>
              All branding, design, copy, product screenshots, and other Site
              content belong to {SITE_NAME} or its licensors. You may not copy or
              redistribute them without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">6. Venue &amp; partner inquiries</h2>
            <p>
              Demo and partnership requests submitted via the Site are
              informational only and do not create a commercial contract until a
              separate written agreement is signed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">7. Disclaimers</h2>
            <p>
              The Site is provided &quot;as is&quot; without warranties of any
              kind. We do not warrant uninterrupted availability or that
              marketing descriptions will match final product features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, {SITE_NAME} is not liable
              for indirect, incidental, or consequential damages arising from use
              of the Site or waitlist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">9. Privacy</h2>
            <p>
              Personal data is handled according to our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">10. Changes</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark">11. Contact</h2>
            <p>
              Questions:{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
