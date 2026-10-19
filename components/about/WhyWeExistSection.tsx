import React from "react";
import Image from "next/image";

export default function WhyWeExistSection() {
  return (
    <div className="bg-[#FFFFFF] w-full py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[2px] bg-[#C85A40]"></span>
            <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
              Why we exist
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
            The reason we exist
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#5A4D56] leading-relaxed">
            <p>
              Modern professional work can be demanding by design. Deadlines
              collide. Workloads concentrate unevenly. Roles change faster than
              operating rules. Human decisions become harder to trace,
              especially when new technology reshapes how work is assigned,
              reviewed, and approved.
            </p>
            <p>
              These are not simply individual resilience issues. They are
              questions about how work is organized, supported, governed, and
              improved. Too often, organizations detect strain only after
              consequences emerge—and have difficulty demonstrating what was
              changed afterward.
            </p>
            <p>
              Zoiko Abate is being built around a different premise: meaningful
              prevention begins with the conditions of work, and responsible
              management requires a traceable line from risk to intervention to
              verification.
            </p>
          </div>
        </div>

        {/* Right Column: Image with Floating Overlapping Divs */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[660px]">
            {/* Main Background Image Container */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5D8D0]">
              <Image
                src="/about/3.png"
                alt="Modern corporate office interior"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Floating Cards at Bottom */}
            <div className="relative -mt-20 sm:-mt-24 z-10 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left Floating Card: Dark Theme */}
              <div className="bg-[#251A2F] text-white rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col justify-between space-y-3">
                <h3 className="text-lg font-bold tracking-tight text-white">
                  Our point of view
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Responsibility begins with the design of work, not with
                  assigning a label to an individual.
                </p>
              </div>

              {/* Right Floating Card: Light Theme with Orange Top Border */}
              <div className="bg-white text-[#1E152A] rounded-2xl p-6 shadow-2xl border border-[#E5D8D0] border-t-4 border-t-[#C85A40] flex flex-col justify-between space-y-3">
                <h3 className="text-lg font-bold tracking-tight text-[#1E152A]">
                  What we are building
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4D56] leading-relaxed">
                  A governed system for work-related risk, corrective action,
                  evidence, and organizational learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
