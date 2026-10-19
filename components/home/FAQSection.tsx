import React from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What problem does Zoiko Abate solve?",
      answer:
        "It helps organizations identify and address psychosocial risks rooted in work design, such as sustained workload pressure, unclear responsibilities and fragmented work. It links organizational signals to accountable controls and verification evidence.",
    },
    {
      question: "Does Zoiko Abate score or monitor individual employees?",
      answer:
        "No. Its employer-facing approach is designed around organizational risk intelligence and privacy-controlled reporting, not individual productivity scores, clinical inferences or continuous employee surveillance.",
    },
    {
      question: "How are risk assurance and performance outcomes different?",
      answer:
        "Risk assurance records the hazard, cause, assigned action, evidence and verification. Work-design outcomes separately indicate whether relevant organizational conditions changed. An improved outcome cannot close an unresolved risk obligation.",
    },
    {
      question: "Is Zoiko Abate only for law firms?",
      answer:
        "No. The foundational architecture is global and industry-neutral. Legal services are the initial focus, with a planned expansion into other high-intensity professional services subject to readiness and validation.",
    },
  ] as const;

  return (
    <div className="bg-[#FAF3F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-8">
        {/* Main Overview Card */}
        <div className="w-full bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg border border-[#F0E6E0] flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E152A] tracking-tight">
              What is Zoiko Abate?
            </h2>
            <p className="text-base sm:text-lg text-[#5A4D56] leading-relaxed">
              Zoiko Abate is a work-design and psychosocial-risk platform that
              helps organizations identify hazards in how work is organized,
              coordinate corrective action, verify controls, and separately
              assess changes in organizational working conditions. It is not an
              employee surveillance or clinical mental-health system.
            </p>
          </div>

          {/* Logo Badge */}
          <div className="w-12 h-12 rounded-full bg-[#251A2F] flex items-center justify-center font-bold text-xl shadow-md">
            <span className="bg-gradient-to-r from-[#899591] to-[#DA715C] bg-clip-text text-transparent">
              Z
            </span>
          </div>
        </div>

        {/* 2x2 FAQ Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#F0E6E0] flex items-start space-x-4 relative overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-[#899591] to-[#DA715C]" />

              <div className="space-y-3 pl-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#1E152A] tracking-tight leading-snug">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
