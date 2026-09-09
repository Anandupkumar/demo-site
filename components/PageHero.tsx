import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";

type PageHeroProps = {
  title: string
  description?: string
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-leather text-parchment">
      <Container className="py-16 sm:py-20">
        <h1 className="text-center font-heading text-3xl tracking-[0.16em] uppercase sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6">
          <Ornament />
        </div>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-parchment/88">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
