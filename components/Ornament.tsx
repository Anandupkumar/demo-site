type OrnamentProps = {
  tone?: "gold" | "leather"
};

export function Ornament({ tone = "gold" }: OrnamentProps) {
  const line = tone === "gold" ? "bg-gold" : "bg-leather/30";

  return (
    <div className="flex justify-center" aria-hidden="true">
      <span className={`block h-px w-16 ${line}`} />
    </div>
  );
}
