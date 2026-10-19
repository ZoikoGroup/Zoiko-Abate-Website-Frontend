import React from "react";
import Image from "next/image";
import { Home, Shield, Columns, Lock, User, Cpu, Globe } from "lucide-react";

export default function OurDifferenceSection() {
  const cards = [
    {
      icon: Home,
      title: "Work-first, not worker-first",
      description:
        "Focus on the organizational conditions that create or amplify psychosocial risks—not employee rankings, personality labels, or resilience scoring.",
      theme: "light",
    },
    {
      icon: Shield,
      title: "Governed assurance process",
      description:
        "Connect risk identification with attribution, intervention ownership, verification, and auditable evidence.",
      theme: "light",
    },
    {
      icon: Columns,
      title: "Two distinct evidence planes",
      description:
        "Separate the status of risk controls from evidence about work-design performance and organizational change.",
      theme: "light",
    },
    {
      icon: Lock,
      title: "Privacy by architectural boundary",
      description:
        "Design organizational reporting around approved cohorts and safeguards while isolating optional private Vault services from employer access.",
      theme: "light",
    },
    {
      icon: User,
      title: "Human authority over material decisions",
      description:
        "Use deterministic controls and authorized approvals for consequential actions; AI may help explain and prepare, but should not independently close a hazard.",
      theme: "light",
    },
    {
      icon: Cpu,
      title: "AI as a work-design question",
      description:
        "Examine what changes for people when copilots, agents, and automation alter workload, monitoring, role clarity, and override rights.",
      theme: "light",
    },
    {
      icon: Globe,
      title: "Global design, sector discipline",
      description:
        "Lead with the distinctive demands of legal work while designing terminology and governance for broader professional-services adoption.",
      theme: "dark",
    },
  ] as const;

  return (
    <div className="bg-[#FFFFFF] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Our difference
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              What makes Zoiko Abate different
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-[#5A4D56] leading-relaxed">
            <p>
              Our design approach is defined less by the volume of data
              collected than by the integrity of the decisions it helps
              organizations make.
            </p>
          </div>
        </div>

        {/* Cards Grid: 4 on top, 3 on bottom */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const isDark = card.theme === "dark";

            return (
              <div
                key={index}
                className={`rounded-3xl p-8 flex flex-col justify-between shadow-sm border transition-all duration-300 ${
                  isDark
                    ? "bg-[#251A2F] text-white border-[#251A2F] lg:col-span-1 shadow-xl"
                    : "bg-white text-[#1E152A] border-[#E5D8D0] hover:shadow-md"
                }`}
              >
                <div className="space-y-6">
                  {/* Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-[#33253F] border border-[#483756] text-[#E0C3B7]"
                        : "bg-[#FAF3F0] border border-[#E5D8D0] text-[#C85A40]"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight">
                      {card.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? "text-gray-300" : "text-[#5A4D56]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Background Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl min-h-[320px] sm:min-h-[380px] flex items-center p-8 sm:p-12 lg:p-16">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/10.png"
              alt="Architecture background"
              fill
              className="object-cover object-center"
            />
            {/* Dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E152A]/90 via-[#1E152A]/70 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl text-white space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#E0C3B7] font-medium">
                Our philosophy, in one sentence
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
              We believe accountable organizations should be able to explain
              what was unsafe or unsustainable in the work, what they changed,
              what evidence they relied on, and what they learned next.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
