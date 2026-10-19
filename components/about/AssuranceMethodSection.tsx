import React from "react";
import Image from "next/image";

export default function AssuranceMethodSection() {
  const steps = [
    {
      number: "01",
      title: "Detect",
      description:
        "Identify organizational work patterns and potential psychosocial hazards using approved, purpose-limited signals.",
      questionLabel: "Evidence question",
      questionText:
        "What concern was identified, with what source and data quality?",
    },
    {
      number: "02",
      title: "Attribute",
      description:
        "Examine the work-design conditions associated with the concern without turning the finding into an employee score.",
      questionLabel: "Evidence question",
      questionText:
        "Which workflow, control or work condition plausibly contributes?",
    },
    {
      number: "03",
      title: "Control",
      description:
        "Document the corrective response, accountable owner, decision, and required follow-up.",
      questionLabel: "Evidence question",
      questionText: "Who is responsible for changing what, by when?",
    },
    {
      number: "04",
      title: "Verify",
      description:
        "Check whether the control was implemented and whether the remaining risk needs additional attention.",
      questionLabel: "Evidence question",
      questionText:
        "What evidence supports the review and residual-risk status?",
    },
  ] as const;

  return (
    <div className="bg-[#FAF3F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                The method
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              From organizational risk to verifiable action
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-[#5A4D56] leading-relaxed">
            <p>
              The foundation of Zoiko Abate is a disciplined, four-part
              assurance method. Each stage is intended to be traceable, owned,
              and reviewable.
            </p>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#E5D8D0] shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Top Highlight Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C85A40]" />

              <div className="space-y-4 pt-2">
                <span className="text-2xl font-bold text-[#C85A40]">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-[#1E152A] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4D56] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Question Block */}
              <div className="pt-6 border-t border-[#F5EDE8] space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#6B5B52] font-semibold block">
                  {step.questionLabel}
                </span>
                <p className="text-xs sm:text-sm text-[#1E152A] font-medium leading-snug">
                  {step.questionText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Card */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#E5D8D0] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="w-full lg:w-5/12 relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-inner shrink-0">
            <Image
              src="/about/9.png"
              alt="Two colleagues giving high five over laptop at desk"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12 flex flex-col space-y-6">
            {/* Tag / Badge */}
            <div>
              <span className="inline-block bg-[#EEF4F0] text-[#4A7C59] text-xs font-semibold px-3.5 py-1.5 rounded-full">
                Work-Design Outcomes · a separate question
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E152A] tracking-tight">
                A second, separate question: Did the work improve?
              </h3>
              <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
                After a work-design intervention, Abate's Work-Design Outcomes
                approach is intended to examine relevant organizational
                changes—such as workload sustainability, role clarity, autonomy,
                coordination, or the quality of human–AI work. Every finding
                must state its comparison basis, coverage, limitations, and
                quality of evidence.
              </p>
            </div>

            {/* Dark Non-negotiable separation box */}
            <div className="bg-[#251A2F] text-white rounded-2xl p-6 space-y-2 shadow-lg border border-white/10">
              <h4 className="text-sm font-bold tracking-tight text-white">
                Non-negotiable separation
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Improved performance does not prove a hazard has been controlled
                or a legal obligation met. Equally, completion of a risk control
                does not prove that the work became more effective. These are
                connected questions with separate authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
