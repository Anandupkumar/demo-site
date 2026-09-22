type OrnamentProps = {
  tone?: "gold" | "gold-deep" | "leather"
  className?: string
};

export function Ornament({ tone = "gold", className = "h-px w-16" }: OrnamentProps) {
  const line =
    tone === "gold" ? "bg-gold" : tone === "gold-deep" ? "bg-gold-deep" : "bg-leather/30";

  return (
    <div className="flex justify-center" aria-hidden="true">
      <span className={`block ${className} ${line}`} />
    </div>
  );
}
