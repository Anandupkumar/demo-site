"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function scrollDocumentToTop() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    scrollDocumentToTop();
    const frame = requestAnimationFrame(scrollDocumentToTop);
    const timers = [50, 150, 300].map((ms) =>
      window.setTimeout(scrollDocumentToTop, ms),
    );
    return () => {
      cancelAnimationFrame(frame);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [pathname]);

  return null;
}
