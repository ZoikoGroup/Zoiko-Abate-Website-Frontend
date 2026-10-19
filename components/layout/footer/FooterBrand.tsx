import Image from "next/image";
import Link from "next/link";
import { BRAND } from "./data";

export default function FooterBrand() {
  return (
    <div>
      <Link
        href="/"
        aria-label="Zoiko Abate home"
        className="inline-flex w-fit items-center rounded-full bg-white px-5 py-3"
      >
        <Image
          src="/logo.png"
          alt="Zoiko Abate"
          width={170}
          height={44}
          className="h-auto w-[170px]"
        />
      </Link>

      <h2 className="mt-8 text-[26px] font-semibold tracking-[-0.01em] text-white">
        {BRAND.tagline}
      </h2>
      <p className="mt-3 max-w-[480px] text-[18px] leading-[1.55] text-white/90">
        {BRAND.subline}
      </p>
      <p className="mt-6 max-w-[480px] text-[15px] leading-[1.75] text-white/60">
        {BRAND.description}
      </p>
    </div>
  );
}
