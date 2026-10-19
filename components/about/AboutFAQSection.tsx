"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function AboutFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Zoiko Abate?",
      answer:
        "Zoiko Abate is a work-design and psychosocial-risk infrastructure platform under development to help organizations identify work-related risks, govern corrective action, verify controls, and evaluate organizational work conditions.",
    },
    {
      question:
        "How is Zoiko Abate different from an employee engagement survey?",
      answer:
        "Unlike periodic sentiment surveys, Zoiko Abate provides a structured work-design risk assurance mechanism that links work conditions to accountable organizational interventions, controls, and auditable verification records.",
    },
    {
      question: "Does Zoiko Abate monitor or score individual employees?",
      answer:
        "No. Zoiko Abate focuses strictly on organizational work-system risks, using aggregate cohort-level data. It does not rank, score, or perform continuous individual surveillance on employees.",
    },
    {
      question: "Is Abate a mental-health or clinical treatment platform?",
      answer:
        "No. Abate is nonclinical and does not provide medical treatment, diagnosis, or clinical mental health interventions. It focuses on the organizational design of work.",
    },
    {
      question: "Can Abate certify compliance with workplace laws?",
      answer:
        "While Abate helps document controls and evidence for internal governance and auditability, it does not issue automated legal certifications or replace local counsel review.",
    },
    {
      question: "Who is Zoiko Abate designed for?",
      answer:
        "It is designed for high-intensity, demanding professional service environments starting with legal services—law firms and in-house legal teams—and expanding to advisory, consulting, and finance.",
    },
    {
      question: "How does AI fit into Abate?",
      answer:
        "Abate evaluates how AI adoption reshapes workloads, decision rights, and monitoring intensity, while preserving human authority over consequential risk governance decisions.",
    },
    {
      question: "Who owns and operates Zoiko Abate?",
      answer:
        "Zoiko Abate is a platform developed within Zoiko Group and operated by Zoiko Tech Inc., with global headquarters in California, USA and European headquarters in London, UK.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAF3F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Left Column: Title, Subtitle, and Office Image */}
        <div className="w-full lg:w-5/12 flex flex-col space-y-8 lg:sticky lg:top-8">
          <div className="space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Answers
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              Frequently asked questions
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5A4D56] leading-relaxed">
              Direct answers about what Zoiko Abate is, what it is not, and who
              it is for.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-[#E5D8D0]">
            <Image
              src="/about/14.png"
              alt="Modern office corridor and break room"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: Interactive Accordion List */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5D8D0]/80 shadow-[0_4px_12px_#0000001A] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isOpen ? "text-[#C85A40]" : "text-[#1E152A]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#C85A40] text-white"
                        : "bg-[#FAF3F0] text-[#C85A40]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#5A4D56] leading-relaxed border-t border-[#F5EDE8]/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
