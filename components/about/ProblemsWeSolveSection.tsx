import React from "react";
import Image from "next/image";

export default function ProblemsWeSolveSection() {
  const problems = [
    {
      number: "1",
      title: "Hidden work-system risks",
      description:
        "Identify patterns such as workload concentration, recovery constraints, deadline pressure, fragmented coordination, and unclear decision rights.",
    },
    {
      number: "2",
      title: "Findings without follow-through",
      description:
        "Connect a documented risk to an accountable organizational intervention, owner, schedule, and verification process.",
    },
    {
      number: "3",
      title: "Weak evidence of what changed",
      description:
        "Preserve a reliable record of detection, attribution, corrective action, residual risk, and subsequent review.",
    },
    {
      number: "4",
      title: "AI changes human work unpredictably",
      description:
        "Assess changes in authority, autonomy, exception handling, monitoring intensity, and realistic human override.",
    },
  ] as const;

  return (
    <div className="bg-[#FFFFFF] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">
        {/* Left Column: Image Container */}
        <div className="w-full lg:w-5/12 relative min-h-[420px] sm:min-h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5D8D0]">
          <Image
            src="/about/8.png"
            alt="People sitting around a wooden table in a cafe or modern office space"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Right Column: Title and List of Problem Cards */}
        <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                The problem space
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              The problems we intend to solve
            </h2>
          </div>

          {/* List of 4 Cards */}
          <div className="flex flex-col space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-[#EEF2F0]/60 border border-[#E5D8D0] rounded-2xl p-6 sm:p-7 flex items-start space-x-5 shadow-sm relative overflow-hidden transition-all duration-300 hover:bg-[#EEF2F0] hover:shadow-md"
              >
                {/* Left Accent Color Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C85A40]" />

                {/* Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#251A2F] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {problem.number}
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E152A] tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
