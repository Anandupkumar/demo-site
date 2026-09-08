type ScriptureProps = {
  text: string
  reference: string
  tone?: "light" | "dark"
};

export function Scripture({ text, reference, tone = "dark" }: ScriptureProps) {
  const color = tone === "light" ? "text-parchment/90" : "text-ink";
  const refColor = tone === "light" ? "text-gold" : "text-gold-deep";

  return (
    <figure className={`max-w-2xl ${color}`}>
      <blockquote className="font-body text-lg sm:text-xl italic leading-relaxed">
        {text}
      </blockquote>
      <figcaption
        className={`mt-4 font-heading text-[0.68rem] tracking-[0.24em] uppercase ${refColor}`}
      >
        {reference}
      </figcaption>
    </figure>
  );
}
