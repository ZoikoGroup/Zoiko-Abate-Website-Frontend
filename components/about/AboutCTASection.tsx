import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutCTASection() {
  const exploreLinks = [
    { label: "Explore the Platform", href: "#" },
    { label: "Understand Risk Assurance", href: "#" },
    { label: "Explore Work-Design Outcomes", href: "#" },
    { label: "See How It Works", href: "#" },
    { label: "Read Our Privacy Approach", href: "#" },
  ] as const;

  return (
    <div className="bg-[#251A2F] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans text-white">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Heading, Subtext, and CTA Buttons */}
        <div className="w-full lg:w-5/12 flex flex-col space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]">
              Better work requires better evidence.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              <p>
                Zoiko Abate is being developed for organizations ready to make
                work design, organizational risk, and accountable change part of
                how they operate—not a parallel program with no connection to
                decisions.
              </p>
              <p>
                If you are examining systemic workplace risk, redesigning
                professional workflows, or introducing AI into
                high-responsibility work, we welcome a focused conversation
                about the problems you need to solve.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#"
              className="bg-[#C85A40] hover:bg-[#b04d35] text-white px-7 py-3.5 rounded-full font-semibold transition-colors shadow-md text-sm sm:text-base inline-flex items-center justify-center"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="text-white underline underline-offset-4 font-bold text-sm sm:text-base hover:text-[#C85A40] transition-colors"
            >
              Explore How It Works
            </a>
          </div>
        </div>

        {/* Right Column: Card with Image and Navigation Links */}
        <div className="w-full lg:w-5/12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-[#1E152A]">
            {/* Top Image Container */}
            <div className="relative w-full h-[220px] sm:h-[260px]">
              <Image
                src="/about/15.png"
                alt="Colleagues stacking hands together in teamwork"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Links Section */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-[#1E152A] tracking-tight">
                Continue exploring
              </h3>

              <div className="divide-y divide-[#F5EDE8]">
                {exploreLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-between py-3.5 text-sm sm:text-base font-semibold text-[#1E152A] hover:text-[#C85A40] transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#C85A40] transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
