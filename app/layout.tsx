import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getSiteConfig } from "@/lib/content";
import "./globals.css";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-baskerville",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const site = getSiteConfig();

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.location}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.motto}. A local, independent Christian church in ${site.location}. ${site.confession}`,
  keywords: [
    site.name,
    "church in Atherton",
    "Apostolic Brethren church Manchester",
    "Christian church Atherton",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${baskerville.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-parchment font-body antialiased">
        <JsonLd site={site} />
        <Header name={site.name} />
        <div className="flex-1">{children}</div>
        <Footer site={site} />
      </body>
    </html>
  );
}
