import { Container } from "@/components/Container";

type PageHeroProps = {
  title: string
  description?: string
  accent?: string
};

export function PageHero({ title, description, accent }: PageHeroProps) {
  const descriptionLines = description
    ?.split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean) ?? [];
  const stacked = descriptionLines.length > 1;

  return (
    <section className="bg-leather text-ivory">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto w-fit max-w-full">
          <h1 className="text-center font-heading text-4xl font-bold uppercase tracking-[0.04em] leading-[1.15] sm:text-5xl">
            {title}
          </h1>
          <span className="mt-6 block h-[2.5px] w-full bg-gold-deep" aria-hidden="true" />
        </div>
        {descriptionLines.length > 0 ? (
          <p
            className={
              accent
                ? `mx-auto mt-8 text-center font-heading text-xl leading-snug text-ivory sm:text-2xl${stacked ? " uppercase tracking-[0.04em]" : " sm:whitespace-nowrap"}`
                : "mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ivory/88"
            }
          >
            {descriptionLines.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
        ) : null}
        {accent ? (
          <p className="mx-auto mt-4 text-center font-heading text-2xl leading-snug text-gold-deep sm:text-3xl">
            {accent}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
