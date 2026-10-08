"use client";

import Link from "next/link";
import { Ornament } from "@/components/Ornament";

type CookieBannerProps = {
  onAccept: () => void
};

export function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        className="w-full max-w-lg border border-leather/15 bg-cream px-8 py-10 text-center shadow-[0_20px_60px_rgba(53,23,15,0.35)] sm:px-12 sm:py-12"
      >
        <p className="font-heading text-[0.68rem] tracking-[0.22em] uppercase text-gold-deep">
          Cookies
        </p>
        <h2
          id="cookie-banner-title"
          className="mt-3 font-heading text-3xl leading-tight text-ink sm:text-[2rem]"
        >
          We Value Your Privacy
        </h2>
        <div className="mt-5">
          <Ornament />
        </div>
        <p
          id="cookie-banner-description"
          className="mt-6 text-lg leading-relaxed text-ink-soft"
        >
          We use cookies to help our website function properly and improve your
          browsing experience. By continuing to use our website, you agree to
          our{" "}
          <Link
            href="/privacy"
            className="text-gold-deep underline underline-offset-3 hover:text-leather-mid"
          >
            cookie policy
          </Link>
          .
        </p>

        <button
          type="button"
          onClick={onAccept}
          autoFocus
          className="mt-8 w-full cursor-pointer border border-leather bg-leather px-7 py-4 font-heading text-[0.78rem] tracking-[0.22em] uppercase text-ivory transition-colors hover:bg-leather-mid"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
