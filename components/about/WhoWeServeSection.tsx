import React from "react";
import Image from "next/image";

export default function WhoWeServeSection() {
  const roles = [
    {
      title: "Managing Partner / General Counsel",
      question:
        "Can we understand and govern systemic work risks with credible evidence and ownership?",
    },
    {
      title: "COO / Operations",
      question:
        "Which work-design conditions create friction, and how can corrective work be evaluated?",
    },
    {
      title: "People / HR",
      question:
        "How can we move beyond sentiment alone to organizational action without worker surveillance?",
    },
    {
      title: "Risk / Safety / Compliance",
      question:
        "Can risk identification, control decisions, residual risk, and verification be traced?",
    },
    {
      title: "AI / Transformation",
      question:
        "What happens to workload, judgment, roles, and human override when AI enters the workflow?",
    },
  ] as const;

  return (
    <div className="bg-[#EEF2F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        {/* Top Hero Layout: Text + Image */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-6/12 flex flex-col space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Who we serve
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              Built for demanding professions
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#5A4D56] leading-relaxed">
              <p>
                Zoiko Abate&apos;s first commercial focus is legal services—law
                firms, in-house legal teams, and legal organizations confronting
                deadline intensity, complex matter workflows, demanding
                cognitive work, and rapidly changing human–AI responsibilities.
              </p>
              <p>
                The underlying approach is designed for future application
                across accounting, consulting, tax, advisory, and other
                knowledge-intensive professional services, subject to validated
                sector-specific terminology, integrations, measurement
                definitions, and legal requirements. Global ambition does not
                imply identical regulatory treatment in every country.
              </p>
            </div>
          </div>

          {/* Right Column: Image Container */}
          <div className="w-full lg:w-6/12 relative min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5D8D0]">
            <Image
              src="/about/12.png"
              alt="Two women working with laptops near server rack room"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Bottom Card Container: Who Should Lead the Conversation */}
        <div className="w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#E5D8D0] flex flex-col space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E152A] tracking-tight">
            Who should lead the conversation?
          </h3>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roles.map((role, index) => {
              const isOdd = index % 2 === 0; // 0, 2, 4 are odd items (1st, 3rd, 5th)

              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 flex flex-col space-y-3 shadow-sm border-t-3 relative overflow-hidden transition-all duration-300 hover:shadow-md ${
                    isOdd
                      ? "bg-[#FAF3F0] border-t-[#DA715C]"
                      : "bg-[#EEF2F0] border-t-[#899591]"
                  }`}
                >
                  <h4 className="text-base font-bold text-[#1E152A] tracking-tight leading-snug">
                    {role.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A4D56] leading-relaxed">
                    {role.question}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
