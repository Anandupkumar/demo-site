import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { SiteImage } from "@/components/SiteImage";
import { getGatherings, getPage } from "@/lib/content";
import { media } from "@/lib/media";

const page = getPage("gatherings");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GatheringsPage() {
  const gatherings = getGatherings();

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        image={media.glass.src}
        imageAlt={media.glass.alt}
      />
      <section className="texture-parchment">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <MarkdownBody content={page.body} />
          </div>
          <div className="mt-12 grid gap-10">
            {gatherings.map((gathering) => (
              <article
                key={gathering.slug}
                className="overflow-hidden border border-leather/15 bg-cream/50 lg:grid lg:grid-cols-2"
              >
                {gathering.image ? (
                  <SiteImage
                    src={gathering.image}
                    alt={gathering.imageAlt}
                    className="h-56 w-full object-cover lg:h-full"
                  />
                ) : null}
                <div className="px-6 py-8 sm:px-8">
                  <p className="font-heading text-[0.68rem] tracking-[0.22em] uppercase text-gold-deep">
                    {gathering.day} · {gathering.time}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl tracking-[0.1em] uppercase text-ink">
                    {gathering.title}
                  </h2>
                  <p className="mt-3 text-ink-soft">{gathering.summary}</p>
                  <div className="mt-6">
                    <MarkdownBody content={gathering.body} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButton href="/visit/">Plan your visit</CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
