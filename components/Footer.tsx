import Link from "next/link";
import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";
import type { SiteConfig } from "@/lib/content";
import { footerNav } from "@/lib/nav";

type FooterProps = {
  site: SiteConfig
};

export function Footer({ site }: FooterProps) {
  return (
    <footer className="bg-leather text-ivory">
      <Container className="py-16 text-center">
        <p className="font-heading text-sm tracking-[0.2em] uppercase">
          {site.name}
        </p>
        <p className="mt-3 font-heading text-[0.68rem] tracking-[0.28em] uppercase text-gold">
          {site.motto}
        </p>
        <div className="mt-6">
          <Ornament />
        </div>

        <p className="mt-12 font-heading text-[0.68rem] tracking-[0.2em] uppercase text-gold">
          Find us
        </p>
        <p className="mt-3 text-sm text-ivory/80">{site.address}</p>

        <p className="mt-12 text-ivory/80 italic">{site.verse}</p>
        <p className="mt-3 font-heading text-[0.65rem] tracking-[0.22em] uppercase text-gold">
          {site.verseReference}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-[0.68rem] tracking-[0.2em] uppercase text-ivory/80 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {site.charityNumber ? (
          <p className="mt-8 text-sm text-ivory/60">
            Registered charity number: {site.charityNumber}
          </p>
        ) : null}
        <p className="mt-6 text-xs text-ivory/50">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
