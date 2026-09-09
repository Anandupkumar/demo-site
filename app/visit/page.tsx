import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { getPage, getSiteConfig } from "@/lib/content";

const page = getPage("visit");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VisitPage() {
  const site = getSiteConfig();

  return (
    <>
      <PageHero title={page.title} description={page.description} />
      <section className="bg-parchment">
        <Container className="max-w-3xl py-16 sm:py-20">
          <MarkdownBody content={page.body} />
          <div className="mt-12 flex flex-wrap gap-4">
            <CtaButton href="/gatherings/">Gathering times</CtaButton>
            <CtaButton href="/contact/">Contact us</CtaButton>
          </div>
          <p className="mt-10 text-sm text-ink-soft">
            {site.location}
            {site.timesNote ? ` — ${site.timesNote}` : ""}
          </p>
        </Container>
      </section>
    </>
  );
}
