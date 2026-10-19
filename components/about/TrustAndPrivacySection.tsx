import React from "react";

export default function TrustAndPrivacySection() {
  return (
    <div className="bg-[#251A2F] w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans text-white">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[2px] bg-[#C85A40]"></span>
            <span className="text-[13px] uppercase tracking-[0.15em] text-[#E0C3B7] font-medium">
              Trust and privacy
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1]">
            Privacy is not a marketing feature. It is a boundary.
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              Zoiko Abate&apos;s proposed architecture separates organizational
              work-risk management from optional private support. The
              organizational Practice environment is designed for governed risk
              records, aggregated reporting, and intervention workflows. The
              private Vault is intended to operate independently, with separate
              identity and access boundaries. Employers must not gain access to
              a person&apos;s private Vault identity or content or re-identify
              individuals through a cross-domain join.
            </p>
            <p>
              Organizational reporting is intended to use approved cohorts,
              suppression rules, purpose controls, and limitations that reflect
              the size and quality of available data. The system is not intended
              to provide individual productivity scores, disciplinary rankings,
              or clinical diagnoses.
            </p>
          </div>
        </div>

        {/* Right Column: Practice Environment & Private Vault Cards */}
        <div className="w-full lg:w-5/12 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          {/* Practice Environment Card */}
          <div className="w-full sm:w-[280px] bg-[#33253F] border border-[#483756] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Practice environment
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-[#C85A40] mt-1">•</span>
                <span>Governed risk records</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C85A40] mt-1">•</span>
                <span>Aggregated, approved-cohort reporting</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C85A40] mt-1">•</span>
                <span>Intervention workflows</span>
              </li>
            </ul>
          </div>

          {/* Vertical Divider with "No join" */}
          <div className="hidden sm:flex flex-col items-center justify-center px-1">
            <div className="h-32 border-l border-dashed border-gray-500 flex items-center justify-center">
              <span className="bg-[#251A2F] px-1 py-2 text-[10px] tracking-widest text-gray-400 uppercase transform -rotate-90 whitespace-nowrap">
                No join
              </span>
            </div>
          </div>

          {/* Private Vault Card */}
          <div className="w-full sm:w-[280px] bg-[#DA715C24] border border-[#C85A40]/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Private Vault
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-[#C85A40] mt-1">•</span>
                <span>Separate identity</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C85A40] mt-1">•</span>
                <span>Separate access boundaries</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C85A40] mt-1">•</span>
                <span>No employer access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
