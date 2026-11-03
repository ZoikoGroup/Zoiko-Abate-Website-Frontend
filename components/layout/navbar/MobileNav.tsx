"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { DROPDOWNS, NAV_ORDER } from "./data";

type Props = { onNavigate: () => void };

export default function MobileNav({ onNavigate }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div
      id="mobile-nav"
      className="max-h-[80vh] overflow-y-auto border-t border-[#ECE6EE] bg-white px-4 pb-6 pt-3 sm:px-6 xl:hidden"
    >
      <ul className="flex flex-col">
        {NAV_ORDER.map((entry) => {
          if (entry.type === "link") {
            return (
              <li key={entry.label} className="border-b border-[#ECE6EE]">
                <Link
                  href={entry.href}
                  onClick={onNavigate}
                  className="block py-3.5 text-base font-semibold text-[#1E152A]"
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
            <li key={menu.key} className="border-b border-[#ECE6EE]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mobile-panel-${menu.key}`}
                onClick={() => setOpen(isOpen ? null : menu.key)}
                className={`flex w-full items-center justify-between py-3.5 text-left text-base font-semibold ${
                  isOpen ? "text-[#DC3F2A]" : "text-[#1E152A]"
                }`}
              >
                {menu.label}
                <ChevronDown
                  className={`size-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen ? (
                <div id={`mobile-panel-${menu.key}`} className="pb-3">
                  {menu.columns.map((column, index) => (
                    <div key={column.label ?? index} className="pb-1">
                      {column.label ? (
                        <p className="pb-1 pt-2 text-xs font-bold text-[#5A4D56]">
                          {column.label}
                        </p>
                      ) : null}
                      <ul>
                        {column.items.map((link) => (
                          <li key={link.title}>
                            <Link
                              href={link.href}
                              onClick={onNavigate}
                              className="block py-2.5 text-sm text-[#1E152A]"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href={menu.cta.href}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-2 py-2.5 text-sm font-bold text-[#CC3F2A]"
                  >
                    {menu.cta.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <Link
        href="#"
        onClick={onNavigate}
        className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#CC3F2A] px-5 text-base font-bold text-white shadow-[0_6px_16px_-6px_rgba(204,63,42,0.6)]"
      >
        Request a Demo
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
