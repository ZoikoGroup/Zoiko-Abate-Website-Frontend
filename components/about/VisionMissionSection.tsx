import React from "react";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <div className="relative w-full flex bg-[VisionMissionSection] items-center justify-center py-16 px-4 sm:px-8 lg:px-12 font-sans overflow-hidden">
      {/* Full Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/4.jpg"
          alt="City skyline at dusk background"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        {/* Dark overlay with reddish-purple tint matching the design */}
        <div className="absolute inset-0 bg-[#120B1A]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Our Vision Card */}
        <div className="bg-[#FFFFFF0F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col space-y-6">
          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#899591] to-[#DA715C] flex items-center justify-center text-white shadow-lg shrink-0">
            <Eye className="w-6 h-6 text-white" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our vision
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed opacity-90">
              To create a world where demanding work can be both high-performing
              and sustainable—because organizations understand, govern, and
              continuously improve the conditions in which people work.
            </p>
          </div>
        </div>

        {/* Our Mission Card */}
        <div className="bg-[#FFFFFF0F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col space-y-6">
          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#899591] to-[#DA715C] flex items-center justify-center text-white shadow-lg shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our mission
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed opacity-90">
              To equip organizations with privacy-respecting, evidence-driven
              infrastructure to identify psychosocial hazards, understand their
              organizational causes, implement accountable controls, verify
              their effectiveness, and evaluate improvements in work design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
