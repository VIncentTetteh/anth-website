import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "../components/site-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The ANTH — Ananse Ntentan Technology Hub",
    template: "%s · The ANTH",
  },
  description:
    "Delivering engineering innovation across a connected world – The ANTH (Ananse Ntentan Technology Hub) engineers bank-grade platforms, secure infrastructure, and resilient experiences for Africa and beyond.",
  metadataBase: new URL("https://theanth.io"),
  openGraph: {
    title: "The ANTH — Delivering engineering innovation across a connected world",
    description:
      "Afro-futurist engineering hub specialising in bank-grade payments, full-stack platforms, and secure, governed delivery.",
    url: "https://theanth.io",
    siteName: "The ANTH",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The ANTH — Ananse Ntentan Technology Hub",
    description:
      "Delivering engineering innovation across a connected world with bank-grade platforms and resilient networks.",
  },
  keywords: [
    "The ANTH",
    "Ananse Ntentan Technology Hub",
    "Fintech Engineering Ghana",
    "Bank-grade Platforms",
    "Software Engineering Africa",
    "Financial Technology Infrastructure",
    "Secure Payment Systems",
    "Enterprise Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The ANTH",
    "alternateName": "Ananse Ntentan Technology Hub",
    "url": "https://theanth.io",
    "logo": "https://theanth.io/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/the-anth"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "description": "Afro-futurist engineering hub specialising in bank-grade payments, full-stack platforms, and secure, governed delivery."
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
