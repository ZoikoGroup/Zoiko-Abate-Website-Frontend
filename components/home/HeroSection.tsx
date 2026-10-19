import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-white to-[#FAF3F0] flex items-center justify-center p-4 sm:p-8 lg:p-12 font-sans">
      <div className="relative w-full max-w-[1480px] rounded-3xl overflow-hidden shadow-2xl min-h-[580px] lg:min-h-[640px] flex flex-col lg:flex-row items-stretch">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/1.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay to ensure dark, professional tone if background image varies */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#251A2FE0] via-[#251A2F9E] to-[#251A2F1F]" />
        </div>

        {/* Main Card Content Layout */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 gap-8 lg:gap-12">
          {/* Left Column: Text & CTA Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between text-white space-y-8">
            <div className="space-y-6">
              {/* Eyebrow Label */}
              <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-[#E0C3B7] font-semibold">
                WORK DESIGN & PSYCHOSOCIAL RISK INFRASTRUCTURE
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Change the work.
                <br />
                Not the worker.
              </h1>

              {/* Description Body Text */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl font-normal opacity-90">
                Identify the work conditions creating organizational risk.
                Govern corrective action, verify controls, and separately
                measure whether work design improves.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="#"
                  className="bg-[#C85A40] hover:bg-[#b04d35] text-white px-7 py-3.5 rounded-full font-medium transition-colors shadow-md text-sm sm:text-base inline-flex items-center justify-center"
                >
                  Request a Demo
                </a>
                <a
                  href="#"
                  className="text-white underline underline-offset-4 font-medium text-sm sm:text-base hover:text-gray-200 transition-colors"
                >
                  Explore the Platform
                </a>
              </div>
            </div>

            {/* Bottom Divider & Guarantee Note */}
            <div className="pt-6 border-t border-white/20">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                <p className="leading-snug max-w-md">
                  Organization-level insight. No employee surveillance or
                  individual productivity scoring.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Image Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] h-[380px] sm:h-[460px] lg:h-[620px] overflow-hidden">
              <Image
                src="/home/2.png"
                alt="Woman working on laptop at desk"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
