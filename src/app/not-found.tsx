import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-muted">
          This page doesn&apos;t exist — or it moved. Head back to the home page
          to explore PULZIVE.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
        >
          Back to home
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
