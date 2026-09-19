import { Container } from "@/components/Container";

type PageHeroProps = {
  title: string
  description?: string
  accent?: string
};

export function PageHero({ title, description, accent }: PageHeroProps) {
  return (
    <section className="bg-leather text-ivory">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto w-fit max-w-full">
          <h1 className="text-center font-heading text-4xl font-normal leading-[1.15] sm:text-5xl">
            {title}
          </h1>
          <span className="mt-6 block h-[2.5px] w-full bg-gold" aria-hidden="true" />
        </div>
        {description ? (
          <p
            className={
              accent
                ? "mx-auto mt-8 text-center font-heading text-xl leading-snug text-ivory sm:whitespace-nowrap sm:text-2xl"
                : "mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ivory/88"
            }
          >
            {description}
          </p>
        ) : null}
        {accent ? (
          <p className="mx-auto mt-4 text-center font-heading text-2xl leading-snug text-gold sm:text-3xl">
            {accent}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
