type OrnamentProps = {
  tone?: "gold" | "leather"
};

export function Ornament({ tone = "gold" }: OrnamentProps) {
  const line = tone === "gold" ? "bg-gold/55" : "bg-leather/25";
  const mark = tone === "gold" ? "text-gold" : "text-leather-light";

  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`h-px w-10 sm:w-16 ${line}`} />
      <span className={`${mark} text-xs`}>+</span>
      <span className={`h-px w-10 sm:w-16 ${line}`} />
    </div>
  );
}
