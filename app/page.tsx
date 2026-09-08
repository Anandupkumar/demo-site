import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { FeatureCard } from "@/components/FeatureCard";
import { MeetingTimes } from "@/components/MeetingTimes";
import { Ornament } from "@/components/Ornament";
import { Scripture } from "@/components/Scripture";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteImage } from "@/components/SiteImage";
import { getSiteConfig } from "@/lib/content";
import { media } from "@/lib/media";

export default function HomePage() {
  const site = getSiteConfig();

  return (
    <>
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center text-parchment">
        <div className="absolute inset-0">
          <SiteImage
            src={media.sunset.src}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-leather/70" />
          <div className="absolute inset-0 texture-leather opacity-50" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl py-28">
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

      <section className="texture-parchment">
        <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
          <div className="overflow-hidden border border-leather/10 shadow-sm">
            <SiteImage
              src={media.prayer.src}
              alt={media.prayer.alt}
              className="h-full min-h-[22rem] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading align="left">Welcome</SectionHeading>
            <div className="mt-8 max-w-xl text-lg leading-[1.85] text-ink-soft">
              {site.welcome.map((paragraph) => (
                <p key={paragraph} className="mt-5 first:mt-0">
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 font-semibold text-ink">{site.confession}</p>
              <p className="mt-5">{site.hope}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="grid grid-cols-3">
        {[media.bible, media.glass, media.cross].map((item) => (
          <div key={item.src} className="aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
            <SiteImage
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </section>

      <section className="border-y border-leather/10 bg-parchment-deep/40">
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

      <section className="texture-parchment">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Find your way">Come and see</SectionHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FeatureCard
              href="/visit/"
              image={media.cross.src}
              imageAlt={media.cross.alt}
              eyebrow="First time"
              title="Plan your visit"
            >
              Come as you are. A simple hall, the Scriptures, and a people
              gathered unto His Name. You do not need to book.
            </FeatureCard>
            <FeatureCard
              href="/the-gospel/"
              image={media.sunset.src}
              imageAlt={media.sunset.alt}
              eyebrow="Good news"
              title="The Gospel"
            >
              {site.confession} Hear the gospel we preach, and the Scriptures we
              stand upon.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            src={media.bible.src}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-leather/80" />
        </div>
        <Container className="relative flex flex-col items-center py-24 text-center">
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
