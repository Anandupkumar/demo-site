import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { SiteImage } from "@/components/SiteImage";
import { getPage } from "@/lib/content";
import { media } from "@/lib/media";

const page = getPage("gospel");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GospelPage() {
  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        image={media.sunset.src}
        imageAlt={media.sunset.alt}
      />
      <section className="texture-parchment">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-start">
          <div>
            <MarkdownBody content={page.body} />
            <div className="mt-12 flex flex-wrap gap-4">
              <CtaButton href="/gatherings/">Gospel meeting</CtaButton>
              <CtaButton href="/contact/">Speak with us</CtaButton>
            </div>
          </div>
          <div className="overflow-hidden border border-leather/10">
            <SiteImage
              src={media.crucifixion.src}
              alt={media.crucifixion.alt}
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
