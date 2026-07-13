import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Best Online Poker Bonuses 2026 — US & Canada | OnlinePokerBonuses.com",
    template: "%s | OnlinePokerBonuses.com",
  },
  description: site.description,
  keywords: [
    "online poker bonuses",
    "poker welcome bonus",
    "poker bonus codes",
    "US poker bonuses",
    "Canada poker bonuses",
    "poker rakeback",
    "Americas Cardroom bonus",
    "BetOnline poker bonus",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Best Online Poker Bonuses 2026 — US & Canada",
    description: site.description,
    url: site.url,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Poker Bonuses 2026 — US & Canada",
    description: site.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    logo: `${site.url}/favicon.svg`,
  };
  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={[orgLd, siteLd]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
