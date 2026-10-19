"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function EvidenceJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Work condition",
      description:
        "Sustained deadline concentration in one practice group, identified from approved, privacy-released inputs.",
      record: "Record: Practice group A - cohort-level only",
    },
    {
      number: "2",
      title: "Attributed driver",
      description:
        "Allocation patterns and escalation rights linked to the observed workload concentration.",
      record: "Driver: Allocation volume & review cadence",
    },
    {
      number: "3",
      title: "Approved control",
      description:
        "Formal intervention assigned to adjust workload distribution and review schedules.",
      record: "Control: Revised allocation & review framework",
    },
    {
      number: "4",
      title: "Accountable owner",
      description:
        "Designated practice operations lead responsible for monitoring control execution.",
      record: "Owner: Practice Operations Lead",
    },
    {
      number: "5",
      title: "Time-stamped evidence",
      description:
        "Logged operational updates verifying implementation of the control measures.",
      record: "Evidence: Verified timestamped audit trail",
    },
    {
      number: "6",
      title: "Verification state",
      description:
        "Review status assessed by authorized personnel to confirm control effectiveness.",
      record: "Status: Pending formal human verification",
    },
    {
      number: "7",
      title: "Scheduled review",
      description:
        "Next evaluation date established to ensure ongoing adherence and risk mitigation.",
      record: "Review: Scheduled for following quarter",
    },
  ];

  return (
    <div className="bg-[#EEF2F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Evidence journey
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              A defensible path from risk to response.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-[#5A4D56] leading-relaxed">
            <p>
              Follow one sample record from work condition to scheduled review.
              Every step is synthetic and labeled; nothing here implies a
              completed certification or legal determination.
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Interactive Steps List */}
          <div className="w-full lg:w-5/12 flex flex-col space-y-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl flex items-center space-x-4 transition-all shadow-sm border ${
                    isActive
                      ? "bg-[#251A2F] text-white border-[#251A2F] shadow-md"
                      : "bg-white text-[#1E152A] border-[#E5D8D0] hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isActive
                        ? "bg-[#C85A40] text-white"
                        : "bg-[#EEF2F0] text-[#1E152A]"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="text-base sm:text-lg font-semibold tracking-tight">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Card with Image and Details */}
          <div className="w-full lg:w-7/12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E5D8D0] flex flex-col space-y-6">
            {/* Image Container */}
            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-inner">
              <Image
                src="/home/15.png"
                alt="Classic busts and library shelves representing evidence"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Card Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#6B5B52]">
                <Clock className="w-4 h-4 text-[#C85A40]" />
                <span>Illustrative interface — sample data only.</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1E152A] tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Record Badge / Box */}
              <div className="bg-[#EEF2F0] border border-[#E5D8D0] rounded-2xl p-4 text-sm font-medium text-[#1E152A]">
                {steps[activeStep].record}
              </div>

              {/* Progress Bar Indicators */}
              <div className="grid grid-cols-7 gap-2 pt-4">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-colors ${
                      i <= activeStep ? "bg-[#C85A40]" : "bg-[#E5D8D0]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
