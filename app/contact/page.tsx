import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { getPage, getSiteConfig, mapsEmbedUrl, mapsUrl } from "@/lib/content";

const page = getPage("contact");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ContactPage() {
  const page = getPage("contact");
  const site = getSiteConfig();

  return (
    <>
      <PageHero title={page.title} description={page.description} />
      <section className="bg-parchment">
        <Container className="max-w-3xl py-16 sm:py-20 text-center">
          <div>
            <MarkdownBody content={page.body} />
            <dl className="mt-8 space-y-4 text-ink-soft">
              <div>
                <dt className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">
                  Address
                </dt>
                <dd className="mt-1">
                  {site.address}
                  {site.postcode ? `, ${site.postcode}` : ""}
                </dd>
              </div>
              {site.phone ? (
                <div>
                  <dt className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">
                    Telephone
                  </dt>
                  <dd className="mt-1">
                    <a href={`tel:${site.phone}`} className="hover:text-ink">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {site.email ? (
                <div>
                  <dt className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="hover:text-ink">
                      {site.email}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
            <a
              href={mapsUrl(site.mapQuery)}
              className="mt-6 inline-block font-heading text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
            <div className="mt-8 overflow-hidden border border-leather/15">
              <iframe
                title={`Map of ${site.name}`}
                src={mapsEmbedUrl(site.mapQuery)}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-normal leading-[1.15] text-ink">
              Write to us
            </h2>
            <div className="mx-auto mt-6 max-w-xl">
              <ContactForm email={site.email} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
