"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-[#EEEAE4] bg-white font-sans text-[#14181C]">
      <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link href="/" aria-label="Zoiko Abate home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Zoiko Abate"
            width={150}
            height={40}
            priority
            className="h-auto w-[150px]"
          />
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="#"
            className="text-[15px] font-medium text-[#14181C] transition-colors hover:text-[#C2493A]"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-[#C2493A] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#EEEAE4] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? <MobileNav onNavigate={() => setOpen(false)} /> : null}
    </header>
  );
}
