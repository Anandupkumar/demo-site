"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";

type HeaderProps = {
  name: string
};

export function Header({ name }: HeaderProps) {
  const pathname = usePathname();
  const overlay = pathname === "/";

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 bg-leather text-parchment"
      }
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8">
        {overlay ? (
          <span className="sr-only">{name}</span>
        ) : (
          <Link
            href="/"
            className="max-w-[14rem] font-heading text-[0.7rem] leading-snug tracking-[0.16em] uppercase text-parchment sm:max-w-none sm:text-sm sm:tracking-[0.18em]"
          >
            {name}
          </Link>
        )}

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading text-[0.7rem] tracking-[0.22em] uppercase transition-colors ${
                  overlay
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-gold"
                      : "text-parchment/80 hover:text-parchment"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Remount on route change so the drawer closes without setState-in-effect. */}
        <MobileNav key={pathname} overlay={overlay} />
      </div>
    </header>
  );
}

function MobileNav({ overlay }: { overlay: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`ml-auto p-2 lg:hidden ${overlay ? "text-white" : "text-parchment"}`}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex h-5 w-7 flex-col justify-between" aria-hidden="true">
          <span className={`block h-px w-full bg-current transition ${open ? "translate-y-2.5 rotate-45" : ""}`} />
          <span className={`block h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-full bg-current transition ${open ? "-translate-y-2.5 -rotate-45" : ""}`} />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 flex flex-col bg-leather px-8 pt-24 lg:hidden"
        >
          <button
            type="button"
            className="absolute right-5 top-5 p-2 text-parchment"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <span aria-hidden="true" className="font-heading text-2xl leading-none">
              ×
            </span>
          </button>
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-2xl tracking-[0.18em] uppercase text-parchment"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
