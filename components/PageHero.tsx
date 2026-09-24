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
          stacked ? (
            <div className="mx-auto mt-8 max-w-full text-center font-heading text-xl uppercase leading-snug tracking-[0.04em] text-ivory sm:text-2xl">
              {descriptionLines.slice(0, -1).map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="mx-auto mt-3 w-fit max-w-full">
                <p>{descriptionLines[descriptionLines.length - 1]}</p>
                {accent ? (
                  <p className="mt-4 w-full whitespace-nowrap uppercase tracking-[0.04em] text-gold-deep [font-size:0.58em]">
                    {accent}
                  </p>
                ) : null}
              </div>
            </div>
          ) : (
            <p
              className={
                accent
                  ? "mx-auto mt-8 text-center font-heading text-xl leading-snug text-ivory sm:text-2xl sm:whitespace-nowrap"
                  : "mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ivory/88"
              }
            >
              {descriptionLines[0]}
            </p>
          )
        ) : null}
        {accent && !stacked ? (
          <p className="mx-auto mt-4 text-center font-heading text-2xl uppercase leading-snug tracking-[0.04em] text-gold-deep sm:text-3xl">
            {accent}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
