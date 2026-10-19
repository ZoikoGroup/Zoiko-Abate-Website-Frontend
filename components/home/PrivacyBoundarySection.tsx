import React from "react";
import Image from "next/image";
import { Home, Lock } from "lucide-react";

export default function PrivacyBoundarySection() {
  return (
    <div className="bg-[#FAF3F0] w-full py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] bg-[#251A2F] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
        {/* Left Column: Image Container */}
        <div className="w-full lg:w-1/2 relative min-h-[360px] sm:min-h-[460px] lg:min-h-full">
          <Image
            src="/home/14.png"
            alt="Person using laptop and mobile phone"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Column: Content Container */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-white space-y-8">
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#E0C3B7] font-medium">
                Privacy & data boundaries
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Privacy is a system boundary, not a dashboard setting.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              The employer view and the Private Vault are separate by design.
              There is no employer access to Vault identity or content, and no
              join between the two.
            </p>

            {/* Two Vault/View Comparison Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative items-center">
              {/* Employer View Box */}
              <div className="bg-[#FFFFFF14] border border-[#FFFFFF2E] rounded-2xl p-6 space-y-4 shadow-inner">
                <div className="flex items-center space-x-2 text-[#FFFFFF]">
                  <Home className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base text-white">
                    Employer view
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFFFFF] mt-1">•</span>
                    <span>Released, aggregated cohort insights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFFFFF] mt-1">•</span>
                    <span>Organizational controls and owners</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFFFFF] mt-1">•</span>
                    <span>Verification records</span>
                  </li>
                </ul>
              </div>

              {/* Private Vault Box */}
              <div className="bg-[#DA715C24] border border-[#DA715C73] rounded-2xl p-6 space-y-4 shadow-inner">
                <div className="flex items-center space-x-2 text-[#FFFFFF]">
                  <Lock className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base text-white">
                    Private Vault
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFFFFF] mt-1">•</span>
                    <span>Separate identity and content</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFFFFF] mt-1">•</span>
                    <span>No employer access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFFFFF] mt-1">•</span>
                    <span>No employer join</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold">
              <a
                href="#"
                className="text-white underline underline-offset-4 hover:text-[#E0C3B7] transition-colors"
              >
                Privacy & Data Boundaries
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Security & Governance
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Responsible AI
              </a>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
              Abate is nonclinical: it does not diagnose, treat or predict
              individual burnout. AI may prepare suggestions; only a
              human-authorized workflow changes an assurance status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
