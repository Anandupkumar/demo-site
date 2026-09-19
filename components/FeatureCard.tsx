import Link from "next/link";
import type { ReactNode } from "react";

type FeatureCardProps = {
  href: string
  eyebrow: string
  title: string
  children: ReactNode
};

export function FeatureCard({ href, eyebrow, title, children }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col border border-leather/15 bg-cream px-6 py-8 text-center transition hover:border-leather/30"
    >
      <p className="font-heading text-[0.65rem] tracking-[0.22em] uppercase text-gold-deep">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-heading text-2xl font-normal leading-[1.15] text-ink">
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{children}</p>
      <p className="mt-5 font-heading text-[0.68rem] tracking-[0.2em] uppercase text-leather">
        Read more
      </p>
    </Link>
  );
}
