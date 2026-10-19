import Link from "next/link";
import type { ComponentType } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type Social = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

const SOCIALS: readonly Social[] = [
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutube },
  { label: "X (Twitter)", href: "https://twitter.com/", Icon: FaXTwitter },
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
] as const;

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-[17px] font-semibold text-white">
        Follow Zoiko Abate
      </h3>
      <ul className="mt-5 flex flex-wrap gap-3">
        {SOCIALS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] transition-colors hover:bg-white/15"
            >
              <Icon className="h-5 w-5 text-white" />
            </a>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="mt-6 inline-block text-[17px] font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
      >
        Contact our team
      </Link>
    </div>
  );
}
