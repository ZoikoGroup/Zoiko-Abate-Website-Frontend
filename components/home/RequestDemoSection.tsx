"use client"
import React from "react";
import Image from "next/image";

export default function RequestDemoSection() {
  return (
    <div className="bg-[#251A2F] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Column: Image Card with Overlay Text Box */}
        <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden max-h-[480px] lg:max-h-[580] flex flex-col justify-end p-6 sm:p-8 border border-white/10 shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/home/17.png"
              alt="Conference room meeting table"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Floating White Card Overlay */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-3 shadow-2xl max-w-lg border border-white/40">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E152A] tracking-tight leading-snug">
              See how Abate could strengthen your work-design assurance.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
              Talk through your operating model, jurisdictional needs, data
              boundaries and pilot fit.
            </p>
          </div>
        </div>

        {/* Right Column: Request a Demo Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#F0E6E0] flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-[#1E152A] tracking-tight">
              Request a Demo
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5B52]">
              Fields marked <span className="text-[#C85A40]">*</span> are
              required. Please don't include sensitive employee information.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Work email */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                Work email <span className="text-[#C85A40]">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#1E152A] focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all"
              />
            </div>

            {/* Full name & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                  Full name <span className="text-[#C85A40]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#1E152A] focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                  Organization <span className="text-[#C85A40]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#1E152A] focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all"
                />
              </div>
            </div>

            {/* Role & Region / country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                  Role{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#1E152A] focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                  Region / country <span className="text-[#C85A40]">*</span>
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#5A4D56] focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all"
                >
                  <option value="" disabled>
                    Select a region
                  </option>
                  <option value="us">United States</option>
                  <option value="eu">Europe</option>
                  <option value="uk">United Kingdom</option>
                  <option value="apac">Asia Pacific</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Area of interest */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                Area of interest{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <select
                defaultValue=""
                className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#5A4D56] focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all"
              >
                <option value="" disabled>
                  Select an area
                </option>
                <option value="risk-assurance">Risk Assurance</option>
                <option value="work-design">Work-Design Outcomes</option>
                <option value="ai-risk">AI Work-Design Risk</option>
                <option value="jurisdiction">Jurisdiction Packs</option>
              </select>
            </div>

            {/* Context */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-[#1E152A]">
                Context{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Your operating model, jurisdictions, or what you'd like to cover"
                className="w-full border border-[#E5D8D0] rounded-xl px-4 py-3 text-sm text-[#1E152A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C85A40]/50 transition-all resize-none"
              />
            </div>

            {/* Privacy Note Banner */}
            <div className="bg-[#F6F7F8] rounded-xl p-3 text-xs text-[#6B5B52]">
              We use these details only to respond to your request. Read our{" "}
              <a
                href="#"
                className="underline font-semibold text-[#1E152A] hover:text-[#C85A40]"
              >
                Privacy Notice
              </a>
              .
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3 pt-1">
              <input
                type="checkbox"
                id="updates"
                className="mt-0.5 rounded border-[#E5D8D0] text-[#C85A40] focus:ring-[#C85A40]"
              />
              <label
                htmlFor="updates"
                className="text-xs text-[#5A4D56] leading-tight"
              >
                Send me occasional Zoiko Abate updates. Optional; you can
                unsubscribe at any time.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#C85A40] hover:bg-[#b04d35] text-white py-3.5 rounded-2xl font-semibold shadow-md transition-colors text-base"
              >
                Request a Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
