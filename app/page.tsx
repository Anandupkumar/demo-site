import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { FeatureCard } from "@/components/FeatureCard";
import { MeetingTimes } from "@/components/MeetingTimes";
import { Ornament } from "@/components/Ornament";
import { Scripture } from "@/components/Scripture";
import { SectionHeading } from "@/components/SectionHeading";
import { getSiteConfig } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center bg-leather px-6 text-center text-parchment">
        <div className="mx-auto max-w-3xl py-28">
          <h1 className="font-heading text-[1.65rem] leading-[1.25] tracking-[0.16em] uppercase sm:text-5xl sm:leading-[1.2] sm:tracking-[0.18em]">
            Manchester
            <br />
            Apostolic
            <br />
            Brethren Church
          </h1>
          <div className="mt-8">
            <Ornament />
          </div>
          <p className="mt-8 font-heading text-[0.78rem] tracking-[0.32em] uppercase text-parchment/90 sm:text-sm">
            {site.motto}
          </p>
          <p className="mt-4 font-heading text-[0.65rem] tracking-[0.28em] uppercase text-gold">
            {site.verseReference}
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <Container className="flex flex-col items-center py-20 sm:py-24">
          <SectionHeading>Welcome</SectionHeading>
          <div className="mt-10 max-w-2xl text-center text-lg leading-[1.85] text-ink-soft">
            {site.welcome.map((paragraph) => (
              <p key={paragraph} className="mt-5 first:mt-0">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-semibold text-ink">{site.confession}</p>
            <p className="mt-5">{site.hope}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-leather/10 bg-parchment-deep">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="This week">Gatherings</SectionHeading>
          <div className="mt-12">
            <MeetingTimes meetings={site.gatherings} note={site.timesNote} />
          </div>
          <div className="mt-10 text-center">
            <CtaButton href="/gatherings/">View gatherings</CtaButton>
          </div>
        </Container>
      </section>

      <section className="bg-parchment">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Find your way">Come and see</SectionHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FeatureCard
              href="/visit/"
              eyebrow="First time"
              title="Plan your visit"
            >
              Come as you are. A simple hall, the Scriptures, and a people
              gathered unto His Name. You do not need to book.
            </FeatureCard>
            <FeatureCard
              href="/the-gospel/"
              eyebrow="Good news"
              title="The Gospel"
            >
              {site.confession} Hear the gospel we preach, and the Scriptures we
              stand upon.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-leather">
        <Container className="flex flex-col items-center py-20 text-center">
          <Scripture
            text={site.verse}
            reference={site.verseReference}
            tone="light"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href="/contact/" variant="light">
              Find us
            </CtaButton>
            <CtaButton href="/visit/" variant="outline">
              Plan a visit
            </CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
