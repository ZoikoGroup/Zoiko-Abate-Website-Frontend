import React from "react";
import Image from "next/image";

export default function WhoItIsForSection() {
  return (
    <div className="bg-[#FAF3F0] w-full py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Who it is for
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              Built for complex, high-accountability work.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-[#5A4D56] leading-relaxed">
            <p>
              A global, industry-neutral foundation, launching first with legal
              services where workload intensity and accountability are
              highest.
            </p>
          </div>
        </div>

        {/* Two Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Law firms and legal departments (Larger width, e.g., col-span-7) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5D8D0] min-h-[500px] flex flex-col justify-between p-8 sm:p-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/home/12.png"
                alt="Lady Justice statue"
                fill
                className="object-cover object-center"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Content inside Left Card */}
            <div className="relative z-0 space-y-3">
              <span className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Launch sector
              </span>
            </div>

            <div className="relative z-10 space-y-6 pt-12">
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Law firms and legal departments
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-lg">
                  Deadline concentration, matter allocation and escalation
                  rights, addressed as organizational design rather than
                  individual resilience.
                </p>
              </div>

              {/* Action Buttons / Pills inside Card */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#"
                  className="bg-white hover:bg-gray-100 text-[#1E152A] px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md inline-flex items-center justify-center"
                >
                  Law Firms
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-gray-100 text-[#1E152A] px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md inline-flex items-center justify-center"
                >
                  In-House Legal Teams
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Accounting, consulting and advisory (Col-span-5) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5D8D0] min-h-[500px] flex flex-col justify-between p-8 sm:p-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/home/13.png"
                alt="Modern advisory office space"
                fill
                className="object-cover object-center"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Content inside Right Card */}
            <div className="relative z-0 space-y-3">
              <span className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Designed for expansion
              </span>
            </div>

            <div className="relative z-10 space-y-6 pt-12">
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Accounting, consulting and advisory
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  An extension path for other high-intensity professional
                  services, subject to readiness and validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
