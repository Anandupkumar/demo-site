import Link from "next/link";
import type { ReactNode } from "react";
import { SiteImage } from "@/components/SiteImage";

type FeatureCardProps = {
  href: string
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  children: ReactNode
};

export function FeatureCard({
  href,
  image,
  imageAlt,
  eyebrow,
  title,
  children,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden border border-leather/12 bg-cream/80 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <SiteImage
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-7">
        <p className="font-heading text-[0.65rem] tracking-[0.22em] uppercase text-gold-deep">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-heading text-2xl tracking-[0.1em] uppercase text-ink">
          {title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{children}</p>
        <p className="mt-5 font-heading text-[0.68rem] tracking-[0.2em] uppercase text-leather">
          Read more
        </p>
      </div>
    </Link>
  );
}
