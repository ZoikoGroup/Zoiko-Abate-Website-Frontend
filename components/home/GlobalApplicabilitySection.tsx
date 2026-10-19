import React from "react";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

export default function GlobalApplicabilitySection() {
  return (
    <div className="bg-[#FAF3F0] w-full py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="relative w-full max-w-[1440px] rounded-3xl overflow-hidden shadow-2xl min-h-[580px] lg:min-h-[640px] flex items-center p-8 sm:p-12 lg:p-16">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/16.png"
            alt="Earth night view background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark Overlay for content readability */}
          <div className="absolute inset-0 bg-[#120B1A]/70 backdrop-brightness-90" />
        </div>

        {/* Content Overlay Container */}
        <div className="relative z-10 w-full max-w-2xl text-white space-y-8">
          {/* Section Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#E0C3B7] font-medium">
                Global applicability
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              One organizational model.
              <br />
              Jurisdiction-aware controls.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              An industry-neutral core describes how work is organized
              everywhere. Effective-dated jurisdiction packs, reviewed by local
              counsel, add the obligations that apply where you operate.[cite:
              10]
            </p>
          </div>

          {/* Two Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-2 shadow-inner">
              <h3 className="text-base font-bold text-white tracking-tight">
                Industry-neutral core
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                One assurance model across offices, teams and sectors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-2 shadow-inner">
              <h3 className="text-base font-bold text-white tracking-tight">
                Jurisdiction packs
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Effective-dated, with local legal review before use.
              </p>
            </div>
          </div>

          {/* Alert / Disclaimer Banner */}
          <div className="pt-2">
            <div className="bg-[#FAF3F0] text-[#1E152A] px-5 py-3.5 rounded-2xl flex items-center space-x-3 shadow-md border border-white/20">
              <AlertCircle className="w-5 h-5 text-[#C85A40] shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                Availability and applicable obligations vary by jurisdiction and
                deployment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
