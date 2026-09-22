import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";

export default function NotFound() {
  return (
    <section className="bg-parchment">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-heading text-[0.7rem] tracking-[0.28em] uppercase text-gold-deep">
          404
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold uppercase tracking-[0.04em] leading-[1.15] text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-ink-soft">
          This page is not on the site. You may have followed an old link.
        </p>
        <div className="mt-8">
          <CtaButton href="/">Return home</CtaButton>
        </div>
      </Container>
    </section>
  );
}
