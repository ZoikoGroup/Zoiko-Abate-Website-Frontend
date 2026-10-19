import React from "react";
import Image from "next/image";

export default function WhatWeBelieveSection() {
  const principles = [
    {
      title: "Prevention over reaction",
      description:
        "Work-related hazards should be recognized early and addressed through organizational controls, not only through downstream support.",
      image: "/about/5.png",
      alt: "Hands gesturing over a desk with laptop and notebooks",
    },
    {
      title: "Accountability over appearance",
      description:
        "Risk records need owners, decisions, due dates, evidence, and review—not just dashboards or completed checklists.",
      image: "/about/6.png",
      alt: "Team meeting in a conference room",
    },
    {
      title: "Privacy over surveillance",
      description:
        "Organizations need dependable aggregate insights without profiling workers or intruding into private support.",
      image: "/about/7.png",
      alt: "Software code syntax highlighted on screen",
    },
  ] as const;

  return (
    <div className="bg-[#EEF2F0] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col items-center space-y-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-xl">
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[2px] bg-[#C85A40]"></span>
            <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
              Principles
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E152A] leading-[1.1]">
            What we believe
          </h2>
        </div>

        {/* 3 Principles Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#E5D8D0] flex flex-col transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Header */}
              <div className="relative w-full h-[220px] sm:h-[240px]">
                <Image
                  src={principle.image}
                  alt={principle.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col space-y-3 flex-1 justify-start">
                <h3 className="text-2xl font-bold text-[#1E152A] tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5A4D56] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
