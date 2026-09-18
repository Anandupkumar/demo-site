"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";

type HeaderProps = Readonly<{
  name: string
}>;

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
      <div className="relative mx-auto min-h-14 max-w-6xl px-6 py-4 sm:px-8">
        {/* Remount on route change so the drawer closes without setState-in-effect. */}
        <MenuNav key={pathname} overlay={overlay} />

        {/* The home hero already carries the name as the h1, so only inner pages repeat it. */}
        {overlay ? null : (
          <Link
            href="/"
            className="block max-w-[calc(100%-3.5rem)] py-1 font-heading text-[0.95rem] leading-snug text-parchment md:text-xl"
          >
            {name}
          </Link>
        )}
      </div>
    </header>
  );
}

function MenuNav({ overlay }: Readonly<{ overlay: boolean }>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="absolute right-4 top-3 sm:right-6">
      <button
        type="button"
        className={`p-2 ${overlay ? "text-white" : "text-parchment"}`}
        aria-expanded={open}
        aria-controls="site-nav"
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
          id="site-nav"
          className="fixed inset-0 z-40 flex flex-col bg-leather px-8 pt-24"
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
          <nav className="flex flex-col gap-6" aria-label="Main">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-2xl leading-snug text-parchment"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
