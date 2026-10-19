"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { DROPDOWNS, NAV_ORDER } from "./data";
import MegaPanel from "./MegaPanel";

// Panels with four cards (Platform) need the full width.
// Panels with two or three stacked cards are narrower.
const WIDE_WIDTH = "w-[1100px]";
const NARROW_WIDTH = "w-[860px]";

export default function DesktopNav() {
  const [active, setActive] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Hide the dropdown whenever a new page has loaded.
  useEffect(() => {
    setActive(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    const onClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setActive(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const current = DROPDOWNS.find((d) => d.key === active) ?? null;
  const widthClass =
    current && current.cards.length === 4 ? WIDE_WIDTH : NARROW_WIDTH;

  return (
    <div
      ref={wrapperRef}
      onMouseLeave={() => setActive(null)}
      className="hidden items-center self-stretch lg:flex"
    >
      <nav aria-label="Primary" className="flex h-full items-center">
        <ul className="flex h-full items-center gap-10">
          {NAV_ORDER.map((entry) => {
            if (entry.type === "link") {
              return (
                <li
                  key={entry.label}
                  onMouseEnter={() => setActive(null)}
                  className="flex h-full items-center"
                >
                  <Link
                    href={entry.href}
                    className="text-[14px] font-medium text-[#14181C] transition-colors hover:text-[#C2493A]"
                  >
                    {entry.label}
                  </Link>
                </li>
              );
            }
            const menu = DROPDOWNS.find((d) => d.key === entry.key);
            if (!menu) return null;
            const isOpen = active === menu.key;
            return (
              <li
                key={menu.key}
                onMouseEnter={() => setActive(menu.key)}
                className="flex h-full items-center"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`mega-${menu.key}`}
                  onClick={() => setActive(isOpen ? null : menu.key)}
                  className={`inline-flex h-full items-center gap-1.5 text-[14px] font-medium transition-colors ${
                    isOpen ? "text-[#C2493A]" : "text-[#14181C]"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {current ? (
        <div
          className={`absolute left-1/2 top-full z-40 max-w-[calc(100vw-2rem)] -translate-x-1/2 ${widthClass}`}
        >
          <MegaPanel
            item={current}
            id={`mega-${current.key}`}
            onNavigate={() => setActive(null)}
          />
        </div>
      ) : null}
    </div>
  );
}
