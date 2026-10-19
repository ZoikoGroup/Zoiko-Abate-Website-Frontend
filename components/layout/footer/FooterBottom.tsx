import Link from "next/link";
import { COPYRIGHT, DISCLAIMER, LEGAL_LINKS } from "./data";

export default function FooterBottom() {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <p className="max-w-[560px] text-[15px] leading-[1.7] text-white/65">
          {COPYRIGHT}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:max-w-[800px] lg:justify-end">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[15px] text-white/80 underline underline-offset-4 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 border-t border-white/10 pt-6 text-[14px] leading-[1.7] text-white/55">
        {DISCLAIMER}
      </p>
    </div>
  );
}
