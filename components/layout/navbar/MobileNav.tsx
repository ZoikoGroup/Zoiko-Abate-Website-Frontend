"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { DROPDOWNS, NAV_ORDER } from "./data";

type Props = { onNavigate: () => void };

export default function MobileNav({ onNavigate }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div
      id="mobile-nav"
      className="max-h-[80vh] overflow-y-auto border-t border-[#EEEAE4] bg-white px-4 pb-6 pt-3 sm:px-6 lg:hidden"
    >
      <ul className="flex flex-col">
        {NAV_ORDER.map((entry) => {
          if (entry.type === "link") {
            return (
              <li key={entry.label} className="border-b border-[#EEEAE4]">
                <Link
                  href={entry.href}
                  onClick={onNavigate}
                  className="block py-3.5 text-[15px] font-medium text-[#14181C]"
                >
                  {entry.label}
                </Link>
              </li>
            );
          }
          const menu = DROPDOWNS.find((d) => d.key === entry.key);
          if (!menu) return null;
          const isOpen = open === menu.key;
          return (
            <li key={menu.key} className="border-b border-[#EEEAE4]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mobile-panel-${menu.key}`}
                onClick={() => setOpen(isOpen ? null : menu.key)}
                className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-medium text-[#14181C]"
              >
                {menu.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen ? (
                <ul id={`mobile-panel-${menu.key}`} className="pb-3">
                  {menu.cards.map((card) => (
                    <li key={card.title}>
                      <Link
                        href={card.href}
                        onClick={onNavigate}
                        className="block py-2.5 text-[14px] text-[#3C4348]"
                      >
                        {card.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={menu.ctaHref}
                      onClick={onNavigate}
                      className="block py-2.5 text-[14px] font-semibold text-[#C2493A]"
                    >
                      {menu.cta}
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex flex-col gap-3">
        <Link
          href="#"
          onClick={onNavigate}
          className="text-[15px] font-medium text-[#14181C]"
        >
          Sign In
        </Link>
        <Link
          href="#"
          onClick={onNavigate}
          className="inline-flex w-fit items-center rounded-full bg-[#C2493A] px-6 py-3 text-[14px] font-semibold text-white"
        >
          Request a Demo
        </Link>
      </div>
    </div>
  );
}
