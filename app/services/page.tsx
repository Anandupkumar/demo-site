import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { MeetingTimes } from "@/components/MeetingTimes";
import { PageHero } from "@/components/PageHero";
import { getPage, getSiteConfig } from "@/lib/content";

const page = getPage("services");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ServicesPage() {
  const doc = getPage("services");
  const site = getSiteConfig();

  return (
    <>
      <PageHero title={page.title} />
      <section className="bg-parchment">
        <Container className="max-w-3xl py-16 sm:py-20 text-center">
          {doc.body ? <MarkdownBody content={doc.body} /> : null}
          <div className={doc.body ? "mt-12" : undefined}>
            <MeetingTimes meetings={site.gatherings} />
          </div>
          <div className="mt-12">
            <CtaButton href="/join-us/">Join us for fellowship</CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
