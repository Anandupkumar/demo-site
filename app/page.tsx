import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";
import { getSiteConfig } from "@/lib/content";

function splitAfter(text: string, marker: string): [string, string] | null {
  const index = text.indexOf(marker);
  if (index === -1) return null;
  const first = text.slice(0, index + marker.length).trim();
  const second = text.slice(index + marker.length).trim();
  if (!first || !second) return null;
  return [first, second];
}

export default function HomePage() {
  const site = getSiteConfig();
  const welcomeText = site.welcome.join(" ");
  const welcomeLines = welcomeText
    ? splitAfter(welcomeText, "Manchester. We are")
    : null;
  const ministryLines = site.ministry
    ? splitAfter(site.ministry, "pray together,")
    : null;
  const inclusionLines = site.inclusion
    ? splitAfter(site.inclusion, "background.")
    : null;

  return (
    <>
      <section className="relative flex min-h-[60vh] items-center bg-leather px-6 py-20 text-ivory sm:py-24">
        <div className="mx-auto w-full max-w-6xl text-left">
          <div className="w-fit max-w-full">
            <h1 className="font-heading text-[clamp(1.85rem,8vw,2.7rem)] font-bold leading-[1.15] sm:text-[3.45rem]">
              <span className="block">Manchester</span>
              <span className="block whitespace-nowrap">Apostolic Brethren</span>
              <span className="block">Church</span>
            </h1>
            <span className="mt-6 block h-[2.5px] w-36 bg-gold-deep" aria-hidden="true" />
          </div>
          <p className="mt-8 font-heading text-base tracking-[0.22em] uppercase text-ivory sm:text-lg">
            {site.motto}
          </p>
          <p className="mt-4 font-heading text-[0.78rem] tracking-[0.18em] uppercase text-gold-deep sm:text-[0.88rem]">
            {site.verseReference}
          </p>
        </div>
      </section>

      <section id="welcome" className="bg-parchment">
        <Container className="flex flex-col items-center py-16 sm:py-24">
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-[0.04em] leading-[1.15] text-ink sm:text-4xl">
            Welcome
          </h2>
          <div className="mt-4">
            <Ornament tone="gold-deep" className="h-[2.5px] w-24" />
          </div>
          <div className="mt-8 max-w-4xl text-center text-lg leading-relaxed text-ink">
            {welcomeLines ? (
              <p>
                {welcomeLines[0]}
                <br />
                {welcomeLines[1]}
              </p>
            ) : welcomeText ? (
              <p>{welcomeText}</p>
            ) : null}
            {site.confession ? (
              <p className="mt-6 font-bold text-ink">{site.confession}</p>
            ) : null}
            {site.hope ? (
              <p className="font-bold text-ink">{site.hope}</p>
            ) : null}
            {ministryLines ? (
              <p className="mt-6">
                {ministryLines[0]}
                <br />
                {ministryLines[1]}
              </p>
            ) : site.ministry ? (
              <p className="mt-6">{site.ministry}</p>
            ) : null}
            {inclusionLines ? (
              <>
                <p className="mt-6">{inclusionLines[0]}</p>
                <p className="mt-6">{inclusionLines[1]}</p>
              </>
            ) : site.inclusion ? (
              <p className="mt-6">{site.inclusion}</p>
            ) : null}
            {site.acts242 ? <p className="mt-6 italic">{site.acts242}</p> : null}
            {site.acts242Ref ? (
              <p className="text-[0.85em] italic">{site.acts242Ref}</p>
            ) : null}
            {site.sundayHighlight ? (
              <p className="mt-6">{site.sundayHighlight}</p>
            ) : null}
            {site.sundayInvite ? <p className="mt-6">{site.sundayInvite}</p> : null}
          </div>
        </Container>
      </section>
    </>
  );
}
