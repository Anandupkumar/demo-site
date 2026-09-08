import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { SiteImage } from "@/components/SiteImage";
import { getPage } from "@/lib/content";
import { media } from "@/lib/media";

const page = getPage("about");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        image={media.bible.src}
        imageAlt={media.bible.alt}
      />
      <section className="texture-parchment">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden border border-leather/10">
              <SiteImage
                src={media.prayer.src}
                alt={media.prayer.alt}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden border border-leather/10">
              <SiteImage
                src={media.cross.src}
                alt={media.cross.alt}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
          <div>
            <MarkdownBody content={page.body} />
            <div className="mt-12">
              <CtaButton href="/the-gospel/">The Gospel</CtaButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
