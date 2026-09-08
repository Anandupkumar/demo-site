import type { ReactNode } from "react";
import { Ornament } from "@/components/Ornament";

type SectionHeadingProps = {
  eyebrow?: string
  children: ReactNode
  align?: "center" | "left"
};

export function SectionHeading({
  eyebrow,
  children,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="font-heading text-[0.7rem] tracking-[0.28em] uppercase text-gold-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl sm:text-4xl tracking-[0.14em] uppercase text-ink">
        {children}
      </h2>
      <Ornament tone="leather" />
    </div>
  );
}
