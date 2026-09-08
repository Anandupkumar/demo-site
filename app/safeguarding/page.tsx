import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { getPage } from "@/lib/content";
import { media } from "@/lib/media";

const page = getPage("safeguarding");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        image={media.cross.src}
        imageAlt={media.cross.alt}
      />
      <section className="texture-parchment">
        <Container className="max-w-3xl py-16 sm:py-20">
          <MarkdownBody content={page.body} />
        </Container>
      </section>
    </>
  );
}
