import React from "react";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <div className="bg-gradient-to-b from-white to-[#FAF3F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          <div className="space-y-6">
            {/* Eyebrow Label with Dash */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                About Zoiko Abate
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              Building a more accountable way to design work.
            </h1>

            {/* Description Body Text */}
            <p className="text-base sm:text-lg text-[#5A4D56] leading-relaxed max-w-xl">
              Zoiko Abate is a work-design and psychosocial-risk infrastructure
              platform being developed to help organizations understand where
              risk arises in the work itself, govern corrective action, verify
              controls, and evaluate changes in work conditions—with privacy,
              evidence, and human accountability built into its approach.
            </p>

            {/* Sub-quote / Tagline */}
            <div className="flex items-center space-x-3 pt-2">
              <span className="w-1 h-6 bg-[#C85A40] rounded-full shrink-0"></span>
              <p className="text-base sm:text-lg font-bold text-[#1E152A]">
                Change the work. Not the worker.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#"
              className="bg-[#C85A40] hover:bg-[#b04d35] text-white px-7 py-3.5 rounded-full font-semibold transition-colors shadow-md text-sm sm:text-base inline-flex items-center justify-center"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="text-[#1E152A] underline underline-offset-4 font-bold text-sm sm:text-base hover:text-[#C85A40] transition-colors"
            >
              Explore How It Works
            </a>
          </div>
        </div>

        {/* Right Column: Imagery Grid Layout */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-stretch gap-6">
          {/* First Large Image: 540px Height on Large Devices */}
          <div className="w-full sm:w-1/2 relative h-[380px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-[#E5D8D0]">
            <Image
              src="/about/1.png"
              alt="Office window view with laptop on table"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Second Column: Small Image + Dark Text Banner Container */}
          <div className="w-full sm:w-1/2 flex flex-col justify-end gap-6">
            {/* Second Image: 320px Height */}
            <div className="relative w-full h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-[#E5D8D0]">
              <Image
                src="/about/2.png"
                alt="Modern open-space office workspace"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Third Item: Dark Box (150px Height) */}
            <div className="w-full h-[150px] bg-[#251A2F] rounded-3xl p-6 flex items-center shadow-xl border border-white/10">
              <div className="flex items-start space-x-3 text-white">
                <span className="w-2 h-2 rounded-full bg-[#C85A40] mt-2 shrink-0"></span>
                <p className="text-sm sm:text-base font-semibold leading-relaxed tracking-wide">
                  Work-first. Privacy-led. Human-governed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
