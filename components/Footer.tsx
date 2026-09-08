import Link from "next/link";
import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";
import { SiteImage } from "@/components/SiteImage";
import type { SiteConfig } from "@/lib/content";
import { footerNav, mainNav } from "@/lib/nav";
import { media } from "@/lib/media";

type FooterProps = {
  site: SiteConfig
};

export function Footer({ site }: FooterProps) {
  return (
    <footer className="texture-leather text-parchment">
      <div className="grid grid-cols-3">
        {[media.prayer, media.bible, media.sunset].map((item) => (
          <div key={item.src} className="h-20 overflow-hidden opacity-40 sm:h-28">
            <SiteImage
              src={item.src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <Container className="py-16">
        <p className="text-center font-heading text-sm tracking-[0.2em] uppercase">
          {site.name}
        </p>
        <p className="mt-3 text-center font-heading text-[0.68rem] tracking-[0.28em] uppercase text-gold">
          {site.motto}
        </p>
        <div className="mt-6">
          <Ornament />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold">
              Visit
            </p>
            <ul className="mt-3 space-y-2">
              {mainNav.slice(1, 3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-parchment/80 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold">
              About
            </p>
            <ul className="mt-3 space-y-2">
              {mainNav.slice(3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-parchment/80 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/the-gospel/" className="text-parchment/80 hover:text-gold">
                  The Gospel
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold">
              Find us
            </p>
            <p className="mt-3 text-sm text-parchment/80">{site.address}</p>
          </div>
        </div>

        <p className="mt-12 text-center text-parchment/80 italic">{site.verse}</p>
        <p className="mt-3 text-center font-heading text-[0.65rem] tracking-[0.22em] uppercase text-gold">
          {site.verseReference}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-parchment/80 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {site.charityNumber ? (
          <p className="mt-8 text-center text-sm text-parchment/60">
            Registered charity number: {site.charityNumber}
          </p>
        ) : null}
        <p className="mt-6 text-center text-xs text-parchment/50">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
