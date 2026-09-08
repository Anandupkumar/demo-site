import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { SiteImage } from "@/components/SiteImage";
import { getPage, getSiteConfig } from "@/lib/content";
import { media } from "@/lib/media";

const page = getPage("visit");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VisitPage() {
  const site = getSiteConfig();

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        image={media.cross.src}
        imageAlt={media.cross.alt}
      />
      <section className="texture-parchment">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <MarkdownBody content={page.body} />
            <div className="mt-12 flex flex-wrap gap-4">
              <CtaButton href="/gatherings/">Gathering times</CtaButton>
              <CtaButton href="/contact/">Contact us</CtaButton>
            </div>
            <p className="mt-10 text-sm text-ink-soft">
              {site.location}
              {site.timesNote ? ` — ${site.timesNote}` : ""}
            </p>
          </div>
          <aside className="space-y-6">
            <div className="overflow-hidden border border-leather/10">
              <SiteImage
                src={media.prayer.src}
                alt={media.prayer.alt}
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden border border-leather/10">
              <SiteImage
                src={media.bible.src}
                alt={media.bible.alt}
                className="h-72 w-full object-cover"
              />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
