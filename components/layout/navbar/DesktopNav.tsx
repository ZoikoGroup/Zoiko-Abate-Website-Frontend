"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { DROPDOWNS, NAV_ORDER } from "./data";
import MegaPanel from "./MegaPanel";

const ITEM_BASE =
  "inline-flex min-h-11 items-center gap-1 rounded-[10px] px-3.5 text-base font-semibold leading-6 transition-colors";

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

  return (
    <div
      ref={wrapperRef}
      onMouseLeave={() => setActive(null)}
      className="hidden flex-1 items-center justify-end self-stretch xl:flex"
    >
      <nav aria-label="Primary" className="flex h-full items-center">
        <ul className="flex h-full items-center gap-0.5">
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
                    className={`${ITEM_BASE} text-[#1E152A] hover:bg-[#F7F2F6]`}
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
                  className={`${ITEM_BASE} ${
                    isOpen
                      ? "bg-[#FCE3DC] text-[#DC3F2A]"
                      : "text-[#1E152A] hover:bg-[#F7F2F6]"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {current ? (
        // The top padding bridges the gap below the header so hovering into the panel keeps it open.
        <div className="absolute left-1/2 top-full z-40 w-[1264px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-1.5">
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
