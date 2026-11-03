import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { Dropdown, MenuColumn, MenuFooter } from "./data";

type Props = {
  item: Dropdown;
  id: string;
  onNavigate: () => void;
};

export default function MegaPanel({ item, id, onNavigate }: Props) {
  return (
    <div
      id={id}
      role="region"
      aria-label={`${item.label} menu`}
      className="overflow-hidden rounded-3xl bg-white p-3 shadow-[0_2px_8px_rgba(42,22,48,0.06),0_24px_60px_-20px_rgba(42,22,48,0.28)] outline outline-1 -outline-offset-1 outline-[#ECE6EE]"
    >
      <div className="grid gap-3 xl:grid-cols-[360px_1fr]">
        <FeatureCard item={item} onNavigate={onNavigate} />

        <div className="grid grid-cols-2 py-1.5 pl-2.5 pr-1.5">
          {item.columns.map((column, index) => (
            <Column
              key={column.label ?? index}
              column={column}
              bordered={index > 0}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>

      {item.footer ? (
        <Footer footer={item.footer} onNavigate={onNavigate} />
      ) : null}
    </div>
  );
}

function FeatureCard({ item, onNavigate }: Omit<Props, "id">) {
  const { feature } = item;

  const heading = (
    <h3 className="text-2xl font-bold leading-7 text-white">
      {item.heading.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h3>
  );

  const eyebrow = (
    <p className="text-xs font-bold uppercase leading-5 tracking-wide text-white opacity-90">
      {item.eyebrow}
    </p>
  );

  if (feature.kind === "steps") {
    return (
      <div className="hidden min-h-[338px] flex-col rounded-2xl bg-[radial-gradient(120%_90%_at_100%_0%,#5B2655_0%,#2A1430_60%)] px-7 py-6 xl:flex">
        {eyebrow}
        <div className="mt-1.5">{heading}</div>
        <p className="mt-3 text-sm leading-[22px] text-white/80">
          {feature.body}
        </p>

        <ol className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/15 pt-5">
          {feature.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="flex size-6 items-center justify-center rounded-md bg-white/10 text-xs font-semibold text-[#F0957F]">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-white">{step}</span>
            </li>
          ))}
        </ol>

        <Link
          href={item.cta.href}
          onClick={onNavigate}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#F0957F] transition-opacity hover:opacity-80"
        >
          {item.cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative hidden min-h-[338px] flex-col justify-end overflow-hidden rounded-2xl bg-[#2A1430] px-7 py-6 xl:flex">
      <div className="absolute inset-x-0 top-0 h-[191px]">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="360px"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(58,26,63,0)_26%,rgba(58,26,63,0.55)_42%,#2A1430_56%)]"
      />

      <div className="relative flex flex-col gap-1.5 pr-14 pt-1">
        {eyebrow}
        {heading}
      </div>

      <Link
        href={item.cta.href}
        onClick={onNavigate}
        aria-label={item.cta.label}
        className="absolute bottom-6 right-6 flex size-10 items-center justify-center rounded-full bg-[#F05A47] text-white shadow-[0_0_0_4px_rgba(240,90,71,0.22)] transition-transform hover:scale-105"
      >
        <ArrowRight className="size-5" aria-hidden="true" />
      </Link>
    </div>
  );
}

function Column({
  column,
  bordered,
  onNavigate,
}: {
  column: MenuColumn;
  bordered: boolean;
  onNavigate: () => void;
}) {
  return (
    <div
      className={`flex flex-col gap-1 px-2.5 pt-2 ${
        bordered ? "border-l border-[#ECE6EE]" : ""
      }`}
    >
      {column.label ? (
        <p className="px-4 text-xs font-bold leading-5 text-[#5A4D56]">
          {column.label}
        </p>
      ) : null}

      <ul className="flex flex-col">
        {column.items.map((link, index) => {
          const Icon = link.icon;
          return (
            <li key={link.title} className="relative">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 -top-px h-px bg-[#ECE6EE]"
                />
              ) : null}
              <Link
                href={link.href}
                onClick={onNavigate}
                className="group flex items-start gap-3.5 rounded-2xl p-4 transition-colors hover:bg-[#FAF6F9]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F6EEF4] text-[#6B2A5E]">
                  <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-base font-bold leading-5 text-[#1E152A]">
                    {link.title}
                  </span>
                  <span className="text-sm leading-5 text-[#5A4D56]">
                    {link.text}
                  </span>
                </span>
                <ChevronRight
                  className="mt-[3px] size-4 shrink-0 text-[#5A4D56] transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Footer({
  footer,
  onNavigate,
}: {
  footer: MenuFooter;
  onNavigate: () => void;
}) {
  if (footer.kind === "flow") {
    return (
      <div className="mx-2.5 mb-1.5 mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl bg-[#E8EEEA] px-5 py-3.5 text-sm leading-5 text-[#5A4D56]">
        <ol className="flex flex-wrap items-center gap-2 font-bold">
          {footer.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              {step}
              {index < footer.steps.length - 1 ? (
                <span aria-hidden="true">→</span>
              ) : null}
            </li>
          ))}
        </ol>
        <p>{footer.note}</p>
      </div>
    );
  }

  return (
    <div className="mx-2.5 mb-1.5 mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl bg-[#E8EEEA] px-5 py-3.5">
      <div>
        <p className="text-base font-bold leading-6 text-[#1E152A]">
          {footer.title}
        </p>
        <p className="text-sm leading-5 text-[#5A4D56]">{footer.text}</p>
      </div>
      <Link
        href={footer.href}
        onClick={onNavigate}
        className="inline-flex items-center gap-2 text-base font-bold text-[#CC3F2A] transition-opacity hover:opacity-80"
      >
        {footer.label}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
