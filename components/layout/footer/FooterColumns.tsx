import Link from "next/link";
import { COLUMNS } from "./data";

export default function FooterColumns() {
  return (
    <nav
      aria-label="Footer"
      className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-6"
    >
      {COLUMNS.map((column) => (
        <div key={column.title}>
          <h3>
            <Link
              href={column.href}
              className="flex items-center gap-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
            >
              <span
                className="block h-[3px] w-4 shrink-0 rounded-full bg-gradient-to-r from-[#899591] to-[#DA715C]"
                aria-hidden="true"
              />
              {column.title}
            </Link>
          </h3>
          <ul className="mt-8 flex flex-col gap-4">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14.5px] leading-snug text-[#FFFFFFB8] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
