import React from "react";
import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01.",
      title: "Detect",
      subtitle: "Approved inputs",
      description:
        "Bring together approved organizational signals—workload patterns, cohort feedback and operational data—within privacy-released thresholds.",
      linkText: "How detection works",
      bgClass: "bg-[#FAF3F0]",
    },
    {
      number: "02.",
      title: "Attribute",
      subtitle: "Work-condition hypothesis",
      description:
        "Link the signal to a probable work-design cause, such as allocation, pace or decision rights, instead of to individuals.",
      linkText: "How attribution works",
      bgClass: "bg-[#EEF2F0]",
    },
    {
      number: "03.",
      title: "Control",
      subtitle: "Owner and intervention",
      description:
        "Assign an accountable owner and an intervention that changes the work, with a review date recorded from the start.",
      linkText: "How controls work",
      bgClass: "bg-[#FAF3F0]",
    },
    {
      number: "04.",
      title: "Verify",
      subtitle: "Evidence, residual risk, next review",
      description:
        "Record time-stamped evidence, assess residual risk and schedule the next review. Only an authorized human closes the record.",
      linkText: "How verification works",
      bgClass: "bg-[#EEF2F0]",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] w-full py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col items-center space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl">
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[2px] bg-[#C85A40]"></span>
            <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
              How it works
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E152A] leading-[1.1]">
            From organizational signals to verified action.
          </h2>
          <p className="text-base sm:text-lg text-[#5A4D56] leading-relaxed">
            Four connected steps. Each one is reviewable by the people
            accountable for it.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgClass} rounded-3xl p-8 flex flex-col justify-between border border-[#E5D8D0]/60 shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              <div className="space-y-4">
                <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#899591] to-[#DA715C] bg-clip-text text-transparent">
                  {step.number}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#1E152A] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#6B5B52] uppercase tracking-wider">
                    {step.subtitle}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed pt-2">
                  {step.description}
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="#"
                  className="text-sm font-semibold text-[#1E152A] underline underline-offset-4 hover:text-[#C85A40] transition-colors inline-block"
                >
                  {step.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image Container */}
        <div className="w-full relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#E5D8D0]">
          <Image
            src="/home/4.png"
            alt="Modern building exterior facade"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
