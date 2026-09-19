import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";
import { getSiteConfig } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();

  return (
    <>
      <section className="relative flex min-h-[75vh] items-center bg-leather px-6 py-20 text-ivory sm:py-24">
        <div className="mx-auto w-full max-w-6xl text-left">
          <div className="w-fit max-w-full">
            <h1 className="font-heading text-4xl font-normal leading-[1.15] sm:text-5xl">
              <span className="block">Manchester</span>
              <span className="block">Apostolic Brethren</span>
              <span className="block">Church</span>
            </h1>
            <span className="mt-6 block h-[2.5px] w-full bg-gold" aria-hidden="true" />
          </div>
          <p className="mt-8 font-heading text-sm tracking-[0.22em] uppercase text-ivory sm:text-base">
            {site.motto}
          </p>
          <p className="mt-4 font-heading text-xs tracking-[0.18em] uppercase text-gold sm:text-sm">
            {site.verseReference}
          </p>
        </div>
      </section>

      <section id="welcome" className="bg-parchment">
        <Container className="flex flex-col items-center py-16 sm:py-24">
          <h2 className="text-center font-heading text-3xl font-normal leading-[1.15] text-ink sm:text-4xl">
            Welcome
          </h2>
          <div className="mt-4">
            <Ornament />
          </div>
          <div className="mt-10 max-w-2xl text-center text-lg leading-[1.85] text-ink">
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
