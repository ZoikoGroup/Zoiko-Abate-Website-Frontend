import React from "react";
import Image from "next/image";
import { XCircle } from "lucide-react";

export default function AIAndWorkSection() {
  const claims = [
    {
      title: "No surveillance promise",
      description:
        "Abate is not designed to rank individual workers or expose private support to employers.",
    },
    {
      title: "No automatic compliance",
      description:
        "A report or dashboard alone does not establish legal compliance or satisfy every jurisdiction's requirements.",
    },
    {
      title: "No unverified results",
      description:
        "Certification, customer impact, clinical effectiveness, and AI capabilities require documented evidence before publication.",
    },
  ] as const;

  return (
    <div className="bg-white w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        {/* Top Hero Layout: Image + Main Copy */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Image Container */}
          <div className="w-full lg:w-5/12 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5D8D0]">
            <Image
              src="/about/11.png"
              alt="Small humanoid robot sitting on a wooden bench reading"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Title and Description */}
          <div className="w-full lg:w-7/12 flex flex-col space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                AI and work
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              As AI changes the work, governance must follow the work
            </h2>

            {/* Body Text */}
            <div className="space-y-4 text-base sm:text-lg text-[#5A4D56] leading-relaxed">
              <p>
                AI adoption can redistribute tasks, accelerate throughput
                expectations, increase exception handling, blur decision rights,
                and change how professional judgment is exercised. Abate&apos;s
                AI Work-Design Risk capability is conceived to help
                organizations document those human-work implications before and
                after changes are made.
              </p>
              <p>
                This is not a substitute for AI model governance, cybersecurity,
                employment law advice, or clinical care. It is an organizational
                work-design discipline focused on accountable change, practical
                human oversight, and evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: What We Will Not Claim */}
        <div className="w-full space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E152A] tracking-tight">
            What we will not claim
          </h3>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {claims.map((claim, index) => (
              <div
                key={index}
                className="bg-[#FAF3F0] rounded-2xl p-6 sm:p-8 flex flex-col space-y-3 border border-[#E5D8D0]/60 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <XCircle className="w-6 h-6 text-[#C85A40] shrink-0" />
                  <h4 className="text-lg font-bold text-[#1E152A] tracking-tight">
                    {claim.title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
                  {claim.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
