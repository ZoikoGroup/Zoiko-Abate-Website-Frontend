import React from "react";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

export default function TwoValuePlanesSection() {
  return (
    <div className="bg-[#EEF2F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col items-center space-y-12">
        {/* Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 max-w-[1440px]">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Two value planes
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              Assurance first. Better work, measured separately.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-[#5A4D56] leading-relaxed">
            <p>
              Abate keeps two distinct planes. Risk Assurance is the system of
              record for obligations and evidence. Work-Design Outcomes is a
              clearly labeled learning layer for measured directional change.
              They are never combined into a master score.
            </p>
          </div>
        </div>

        {/* Two Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Risk Assurance */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E5D8D0] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Top Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden">
                <Image
                  src="/home/18.png"
                  alt="Person writing notes on paper"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Tag / Badge */}
              <div>
                <span className="inline-block bg-[#FDF2EE] text-[#C85A40] text-xs font-semibold px-3 py-1.5 rounded-full">
                  Risk Assurance • obligations + evidence
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#1E152A] tracking-tight">
                  What happened, who owns it, and is it verified?
                </h3>
                <p className="text-sm sm:text-base text-[#5A4D56]">
                  Shows the hazard, attributed cause, accountable owner, control
                  status and verification.
                </p>
              </div>

              {/* Table / Rows */}
              <div className="flex flex-col divide-y divide-[#F5EDE8] pt-2">
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Hazard
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Recurring deadline concentration
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Cause
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Uneven allocation and escalation ambiguity
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Control
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Revised allocation and review cadence
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Owner
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Practice Operations
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Status
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Verification pending
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Work-Design Outcomes */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E5D8D0] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Top Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden">
                <Image
                  src="/home/5.png"
                  alt="Team collaborating in a workshop"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Tag / Badge */}
              <div>
                <span className="inline-block bg-[#EEF2F0] text-[#4A7C59] text-xs font-semibold px-3 py-1.5 rounded-full">
                  Work-Design Outcomes • measured directional change
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#1E152A] tracking-tight">
                  Is the work itself getting better?
                </h3>
                <p className="text-sm sm:text-base text-[#5A4D56]">
                  Shows the comparison period, quality state and direction of
                  change—including when evidence is insufficient.
                </p>
              </div>

              {/* Table / Rows */}
              <div className="flex flex-col divide-y divide-[#F5EDE8] pt-2">
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Metric family
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Role clarity
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Period
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Baseline vs. later review
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Direction
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Insufficient evidence
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Quality
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Sample / not production data
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-[#6B5B52] font-medium">
                    Important
                  </span>
                  <span className="text-[#1E152A] font-medium text-right">
                    Does not close risk obligation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#251A2F] text-white py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-lg">
          <AlertCircle className="w-5 h-5 text-[#E0C3B7] shrink-0" />
          <span className="text-sm sm:text-base font-medium tracking-wide">
            Performance does not close assurance obligations.
          </span>
        </div>
      </div>
    </div>
  );
}
