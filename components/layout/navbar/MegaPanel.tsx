import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Info,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Dropdown, Tone } from "./data";

const TONES: Record<Tone, { card: string; icon: string }> = {
  peach: { card: "bg-[#FCEFEA]", icon: "bg-[#FADCD3] text-[#D8503F]" },
  mint: { card: "bg-[#EEF3F1]", icon: "bg-[#DCEAE5] text-[#0F6B58]" },
  plain: {
    card: "border border-[#E6E3DE] bg-white",
    icon: "bg-[#EFF1F2] text-[#1F2A33]",
  },
};

type Props = {
  item: Dropdown;
  id: string;
  onNavigate: () => void;
};

export default function MegaPanel({ item, id, onNavigate }: Props) {
  const MutedIcon = item.note.mutedIcon === "users" ? Users : Globe;
  const hasLoop = Boolean(item.loop);

  return (
    <div
      id={id}
      role="region"
      aria-label={`${item.label} menu`}
      className="absolute left-1/2 top-full z-40 w-full max-w-[1100px] -translate-x-1/2 rounded-3xl border border-[#E9E6E0] bg-white p-3 shadow-[0_24px_60px_rgba(35,25,45,0.16)]"
    >
      <div className="grid grid-cols-[340px_1fr] gap-3">
        <div className="flex flex-col overflow-hidden rounded-2xl bg-[#2A1F35] text-white">
          <div
            className="relative h-[200px] w-full"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 0 100%)" }}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-[#7FD9C4]">
              {item.eyebrow}
            </p>
            <h3 className="mt-2 text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]">
              {item.heading}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/80">
              {item.body}
            </p>
            <Link
              href={item.ctaHref}
              onClick={onNavigate}
              className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#F4A58F] pb-1 pt-4 text-[15px] font-semibold text-[#F4A58F] transition-opacity hover:opacity-80"
            >
              {item.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <ul
            className={`grid flex-1 gap-3 ${
              item.cards.length === 4 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {item.cards.map((card) => {
              const tone = TONES[card.tone];
              const Icon = card.icon;
              return (
                <li key={card.title}>
                  <Link
                    href={card.href}
                    onClick={onNavigate}
                    className={`group flex h-full items-start gap-4 rounded-2xl px-5 py-4 transition-shadow hover:shadow-md ${tone.card}`}
                  >
                    <span
                      className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl ${tone.icon}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[17px] font-semibold text-[#14181C]">
                        {card.title}
                      </span>
                      <span className="mt-1.5 block text-[13px] leading-[1.55] text-[#6B6F73]">
                        {card.text}
                      </span>
                    </span>
                    <ChevronRight
                      className="mt-1 h-4 w-4 shrink-0 text-[#14181C]"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 flex items-center gap-4 border-t border-[#E9E6E0] px-3 pt-3 text-[12px]">
            {hasLoop ? (
              <>
                <Info
                  className="h-6 w-6 shrink-0 fill-[#14181C] text-white"
                  aria-hidden="true"
                />
                <ol className="flex items-center gap-2 font-semibold text-[#14181C]">
                  {item.loop?.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      {step}
                      {index < (item.loop?.length ?? 0) - 1 ? (
                        <ArrowRight
                          className="h-3.5 w-3.5 text-[#D8503F]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
                <span className="border-l border-[#E1DED8] pl-4 text-[#8A8D90]">
                  {item.loopNote}
                </span>
                <span className="ml-auto inline-flex items-center gap-2 text-[#D8503F]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  {item.note.mutedText}
                </span>
              </>
            ) : (
              <>
                <Info
                  className="h-6 w-6 shrink-0 fill-[#14181C] text-white"
                  aria-hidden="true"
                />
                <p className="max-w-[220px] text-[#14181C]">{item.note.text}</p>
                <div className="flex flex-1 items-center gap-3 border-l border-[#E1DED8] pl-4 text-[#9A9DA0]">
                  <MutedIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    {item.note.mutedTitle ? (
                      <span className="block font-semibold">
                        {item.note.mutedTitle}
                      </span>
                    ) : null}
                    {item.note.mutedText}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
