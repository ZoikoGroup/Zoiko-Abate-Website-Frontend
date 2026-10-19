import React from "react";
import Image from "next/image";

export default function RealProblemSection() {
  return (
    <div className="bg-[#FAF3F0] w-full min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-16 font-sans">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[2px] bg-[#C85A40]"></span>
            <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
              The real problem
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
            Risk lives in how work is organized.
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#5A4D56] leading-relaxed max-w-xl">
            <p>
              Deadline pressure, fragmented workflows, unclear decision rights
              and inadequate recovery are work-design conditions—not individual
              defects.
            </p>
            <p>
              Most organizations have the signals. What is missing is clear
              ownership, and controls with independently verifiable
              follow-through.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#"
              className="hover:bg-gray-50 text-[#1E152A] border border-[#E6E8EA] px-7 py-3.5 rounded-full font-medium transition-colors text-sm sm:text-base inline-flex items-center justify-center"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right Column: Card with Image and List Rows */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[620px] bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#F0E6E0] flex flex-col space-y-6">
            {/* Top Image inside Card */}
            <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden">
              <Image
                src="/home/3.png"
                alt="Modern office corridor and break area"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content Rows inside Card */}
            <div className="flex flex-col divide-y divide-[#F5EDE8]">
              {/* Row 1: Signal */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#1E152A] uppercase tracking-wider w-36">
                  Signal
                </span>
                <span className="text-sm sm:text-base text-[#5A4D56] flex-1">
                  Recurring late-night filings across one practice group
                </span>
              </div>

              {/* Row 2: Organizational cause */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#1E152A] uppercase tracking-wider w-36">
                  Organizational cause
                </span>
                <span className="text-sm sm:text-base text-[#5A4D56] flex-1">
                  Uneven allocation and ambiguous escalation rights
                </span>
              </div>

              {/* Row 3: Action */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#C85A40] uppercase tracking-wider w-36">
                  Action
                </span>
                <span className="text-sm sm:text-base text-[#5A4D56] flex-1">
                  Owned control, a review date and evidence of follow-through
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
