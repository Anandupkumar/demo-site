import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string
  children: ReactNode
  variant?: "dark" | "light" | "outline"
};

export function CtaButton({ href, children, variant = "dark" }: CtaButtonProps) {
  const styles = {
    dark: "bg-leather text-parchment hover:bg-leather-mid",
    light: "bg-parchment text-leather hover:bg-cream",
    outline:
      "border border-gold/70 text-parchment hover:bg-white/10",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3 font-heading text-[0.72rem] tracking-[0.22em] uppercase transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
