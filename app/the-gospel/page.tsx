import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { getPage } from "@/lib/content";

const page = getPage("gospel");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GospelPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} />
      <section className="bg-parchment">
        <Container className="max-w-3xl py-16 sm:py-20">
          <MarkdownBody content={page.body} />
          <div className="mt-12 flex flex-wrap gap-4">
            <CtaButton href="/gatherings/">Gospel meeting</CtaButton>
            <CtaButton href="/contact/">Speak with us</CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
