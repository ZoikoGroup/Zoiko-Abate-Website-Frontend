import React from "react";
import Image from "next/image";

export default function AIWorkDesignRiskSection() {
  const stages = [
    {
      stage: "Stage 1",
      title: "AI change registered",
      description: "A drafting assistant enters the matter workflow",
      image: "/home/6.png",
      isOdd: true,
    },
    {
      stage: "Stage 2",
      title: "Baseline",
      description: "Pace, review load and task allocation recorded",
      image: "/home/7.png",
      isOdd: false,
    },
    {
      stage: "Stage 3",
      title: "Assess",
      description: "Exceptions, monitoring and override are examined",
      image: "/home/8.png",
      isOdd: true,
    },
    {
      stage: "Stage 4",
      title: "Control",
      description: "Human review points and role clarity defined",
      image: "/home/9.png",
      isOdd: false,
    },
    {
      stage: "Stage 5",
      title: "Verify",
      description: "Evidence that the control is working in practice",
      image: "/home/10.png",
      isOdd: true,
    },
    {
      stage: "Stage 6",
      title: "Outcome review",
      description: "Did the work become clearer and more sustainable?",
      image: "/home/11.png",
      isOdd: false,
    },
  ] as const;

  const tags = [
    "Decision rights",
    "Pace",
    "Exceptions",
    "Cognitive burden",
    "Monitoring",
    "Practical human override",
    "Role clarity",
  ] as const;

  return (
    <div className="bg-[#251A2F] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans text-white">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col space-y-4 max-w-3xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#E0C3B7] font-medium">
                AI Work-Design Risk
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.1]">
              AI can change the workload—even when the model works.
            </h2>
          </div>

          <div className="flex flex-col items-start space-y-6 max-w-md">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              New tools reshape decision rights, pace, exceptions and cognitive
              burden. Abate treats each AI change as a work-design change, with
              a baseline, controls and human review.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-6 py-3 rounded-full font-medium transition-colors text-sm sm:text-base inline-flex items-center justify-center"
            >
              Explore AI Work-Design Risk
            </a>
          </div>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-end">
          {stages.map((item, index) => {
            const heightClass = item.isOdd ? "h-[330px]" : "h-[270px]";
            return (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden shadow-xl border border-white/10 flex flex-col justify-end p-6 ${heightClass}`}
              >
                {/* Background Image for Card */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-1">
                  <span className="text-xs font-semibold text-[#E0C3B7] uppercase tracking-wider">
                    {item.stage}
                  </span>
                  <h3 className="font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-normal pt-1 opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tags / Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#33253F] border border-[#483756] text-[#E0C3B7] px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-inner"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
