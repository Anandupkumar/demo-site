import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";
import { getSiteConfig } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();

  return (
    <>
      <section className="relative bg-leather px-6 pb-16 pt-20 text-parchment sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-fit max-w-full">
            <h1 className="font-heading text-4xl leading-[1.15] sm:text-5xl">
              <span className="block">Manchester Apostolic</span>
              <span className="block">Brethren Church</span>
            </h1>
            <span className="mt-6 block h-px w-full bg-gold" aria-hidden="true" />
          </div>
          <p className="mt-8 font-heading text-sm tracking-[0.22em] uppercase text-parchment/90 sm:text-base">
            {site.motto}
          </p>
          <p className="mt-4 font-heading text-xs tracking-[0.18em] uppercase text-gold sm:text-sm">
            {site.verseReference}
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <Container className="flex flex-col items-center py-16 sm:py-24">
          <h2 className="text-center font-heading text-3xl tracking-[0.14em] uppercase text-ink sm:text-4xl">
            Welcome
          </h2>
          <div className="mt-4">
            <Ornament />
          </div>
          <div className="mt-10 max-w-2xl text-center text-lg leading-[1.85] text-ink-soft">
            {site.welcome.map((paragraph) => (
              <p key={paragraph} className="mt-5 first:mt-0">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-semibold text-ink">{site.confession}</p>
            <p className="mt-3">{site.hope}</p>
            {site.ministry ? <p className="mt-6">{site.ministry}</p> : null}
            {site.inclusion ? <p className="mt-6">{site.inclusion}</p> : null}
            {site.acts242 ? (
              <p className="mt-8 italic">
                {site.acts242}{" "}
                <span className="not-italic">{site.acts242Ref}</span>
              </p>
            ) : null}
            {site.sundayHighlight ? (
              <p className="mt-10 font-semibold text-ink">{site.sundayHighlight}</p>
            ) : null}
            {site.sundayInvite ? <p className="mt-4">{site.sundayInvite}</p> : null}
          </div>
        </Container>
      </section>
    </>
  );
}
