"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { CookieBanner } from "@/components/CookieBanner";
import { acceptConsent, hasConsent, subscribeConsent } from "@/lib/consent";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

// `null` means "not known yet" (server render and hydration), so the popup
// never flashes for visitors who have already accepted.
const getServerConsent = (): boolean | null => null;

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const consent = useSyncExternalStore<boolean | null>(
    subscribeConsent,
    hasConsent,
    getServerConsent,
  );
  const pathname = usePathname();
  // The policy page stays readable so visitors can see what they're accepting.
  const blocked = consent === false && !pathname.startsWith("/privacy");

  useEffect(() => {
    if (!blocked) return;
    const root = document.documentElement;
    root.classList.add("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [blocked]);

  return (
    <>
      <div className="contents" inert={blocked}>
        {children}
      </div>
      {blocked ? <CookieBanner onAccept={acceptConsent} /> : null}
      {consent && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}
