import type { SiteConfig } from "@/lib/content";

type JsonLdProps = {
  site: SiteConfig
};

export function JsonLd({ site }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    description: `${site.motto}. A local, independent Christian church in ${site.location}.`,
    url: "/",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.town,
      addressRegion: site.city,
      addressCountry: "GB",
      streetAddress: site.address || undefined,
      postalCode: site.postcode || undefined,
    },
    telephone: site.phone || undefined,
    email: site.email || undefined,
    openingHours: "Su 10:30-19:30",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
