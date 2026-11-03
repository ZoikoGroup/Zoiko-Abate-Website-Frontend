"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after navigating to a new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ECE6EE] bg-white font-jakarta text-[#1E152A]">
      <div className="relative mx-auto flex h-20 max-w-[1432px] items-center gap-6 px-4 sm:px-6 xl:px-10 2xl:px-[84px]">
        <Link
          href="/"
          aria-label="Zoiko Abate home"
          className="flex shrink-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-xl bg-[#2A1430] shadow-[0_0_0_1px_#ECE6EE]"
          >
            <span className="bg-[linear-gradient(160deg,#E07A63_0%,#8E9792_100%)] bg-clip-text text-2xl font-extrabold leading-none text-transparent">
              A
            </span>
          </span>
          <Image
            src="/logo-wordmark.webp"
            alt="Zoiko Abate"
            width={160}
            height={24}
            priority
            className="h-auto w-[160px]"
          />
        </Link>

        <DesktopNav />

        <Link
          href="#"
          className="hidden min-h-11 shrink-0 items-center gap-2 rounded-full bg-[#CC3F2A] px-5 text-base font-bold leading-6 text-white shadow-[0_6px_16px_-6px_rgba(204,63,42,0.6)] transition-opacity hover:opacity-90 xl:inline-flex"
        >
          Request a Demo
          <ArrowRight className="size-4" strokeWidth={2.2} aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto inline-flex size-10 items-center justify-center rounded-md border border-[#ECE6EE] xl:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? <MobileNav onNavigate={() => setOpen(false)} /> : null}
    </header>
  );
}
