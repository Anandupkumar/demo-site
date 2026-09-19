import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageHero } from "@/components/PageHero";
import { getPage } from "@/lib/content";

type MarkdownPageProps = {
  slug: string
};

export function MarkdownPage({ slug }: MarkdownPageProps) {
  const page = getPage(slug);

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        accent={page.accent}
      />
      <section className="bg-parchment">
        <Container className="max-w-3xl py-16 sm:py-20 text-center">
          {page.lead ? (
            <p className="mx-auto mb-12 max-w-xl text-center font-heading text-lg italic leading-[1.75] text-ink sm:text-xl">
              {page.lead}
            </p>
          ) : null}
          <MarkdownBody content={page.body} />
        </Container>
      </section>
    </>
  );
}
