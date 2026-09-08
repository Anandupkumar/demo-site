import { Container } from "@/components/Container";
import { Ornament } from "@/components/Ornament";
import { SiteImage } from "@/components/SiteImage";

type PageHeroProps = {
  title: string
  description?: string
  image?: string
  imageAlt?: string
};

export function PageHero({ title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden texture-leather text-parchment">
      {image ? (
        <div className="absolute inset-0">
          <SiteImage
            src={image}
            alt={imageAlt ?? ""}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-leather/72" />
        </div>
      ) : null}
      <Container className="relative py-20 sm:py-24">
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
