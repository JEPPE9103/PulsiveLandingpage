import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pulsive.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PULSIVE — Stockholm's pulse. Live.",
  description:
    "See the pulse. Feel the vibe. PULSIVE shows where the city is alive right now — live map, venues, and social energy in Stockholm.",
  keywords: [
    "PULSIVE",
    "Stockholm",
    "city pulse",
    "live map",
    "real-time discovery",
    "nightlife",
  ],
  openGraph: {
    title: "PULSIVE — Stockholm's pulse. Live.",
    description:
      "See where the city is alive right now. Invite-only beta in Stockholm inner city.",
    url: siteUrl,
    siteName: "PULSIVE",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PULSIVE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSIVE — Stockholm's pulse. Live.",
    description:
      "See where the city is alive right now. Invite-only beta in Stockholm inner city.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
