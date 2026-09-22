"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteImage } from "@/components/SiteImage";
import { mainNav } from "@/lib/nav";

type HeaderProps = Readonly<{
  name: string
}>;

export function Header({ name }: HeaderProps) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <HomeHeader name={name} />;
  }

  return <SiteHeader name={name} pathname={pathname} pinned />;
}

function HomeHeader({ name }: HeaderProps) {
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const welcome = document.getElementById("welcome");
    if (!welcome) return;

    const update = () => {
      setPinned(welcome.getBoundingClientRect().top <= 0);
    };

    const observer = new IntersectionObserver(update, {
      threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    observer.observe(welcome);
    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return <SiteHeader name={name} pathname="/" pinned={pinned} overlay />;
}

type SiteHeaderProps = HeaderProps & {
  pathname: string
  pinned: boolean
  overlay?: boolean
};

function SiteHeader({ name, pathname, pinned, overlay = false }: SiteHeaderProps) {
  const bar = overlay
    ? pinned
      ? "fixed inset-x-0 top-0 z-30 bg-leather text-ivory shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
      : "absolute inset-x-0 top-0 z-30 text-ivory"
    : "sticky top-0 z-30 bg-leather text-ivory";

  return (
    <header className={bar}>
      <div className="relative flex min-h-14 w-full items-center gap-3 px-6 py-3 sm:px-8 md:min-h-[5.5rem] md:gap-5 md:px-10 md:py-6 lg:px-14">
        <Link href="/" aria-label={name} className="relative z-10 shrink-0">
          <SiteImage
            src="/badge.png"
            alt=""
            className="h-11 w-11 object-contain md:h-[4.25rem] md:w-[4.25rem] lg:h-[4.75rem] lg:w-[4.75rem]"
          />
        </Link>

        {overlay && !pinned ? null : (
          <Link
            href="/"
            className="ml-3 max-w-[calc(100%-6.5rem)] py-1 font-heading text-[0.95rem] leading-snug text-ivory md:text-xl"
          >
            {name}
          </Link>
        )}

        {/* Remount on route change so the drawer closes without setState-in-effect. */}
        <MenuNav key={pathname} />
      </div>
    </header>
  );
}

function MenuNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="ml-auto shrink-0">
      <button
        type="button"
        className="p-2 text-ivory"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex h-6 w-7 flex-col justify-between" aria-hidden="true">
          <span className={`block h-[3px] w-full shrink-0 bg-current transition ${open ? "translate-y-[10.5px] rotate-45" : ""}`} />
          <span className={`block h-[3px] w-full shrink-0 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[3px] w-full shrink-0 bg-current transition ${open ? "-translate-y-[10.5px] -rotate-45" : ""}`} />
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-ink/25"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="site-nav"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(18.5rem,82vw)] flex-col bg-leather px-8 pt-24 shadow-[-12px_0_32px_rgba(0,0,0,0.28)]"
          >
            <button
              type="button"
              className="absolute right-5 top-5 p-2 text-ivory"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <span aria-hidden="true" className="font-heading text-2xl leading-none">
                ×
              </span>
            </button>
            <nav className="flex flex-col gap-6" aria-label="Main">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-heading text-xl leading-snug text-ivory md:text-2xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
