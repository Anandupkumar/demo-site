import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { getPage, getSiteConfig } from "@/lib/content";

const page = getPage("contact");

export const metadata: Metadata = {
  title: page.title,
  ...(page.description ? { description: page.description } : {}),
};

export default function ContactPage() {
  const page = getPage("contact");
  const site = getSiteConfig();

  return (
    <>
      <PageHero title={page.title} />
      <section className="bg-parchment">
        <Container className="max-w-3xl py-16 sm:py-20 text-center">
          <div>
            <MarkdownBody content={page.body} />
            <dl className="mt-8 space-y-4 text-ink-soft">
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
