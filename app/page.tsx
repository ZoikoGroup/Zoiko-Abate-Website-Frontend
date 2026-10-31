import type { Metadata } from "next";

import {
  HeroSection,
  FeaturesBar,
  RealProblemSection,
  HowItWorksSection,
  TwoValuePlanesSection,
  AIWorkDesignRiskSection,
  WhoItIsForSection,
  PrivacyBoundarySection,
  EvidenceJourneySection,
  GlobalApplicabilitySection,
  FAQSection,
  RequestDemoSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Zoiko Abate | Psychosocial Risk Management & Work Design",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesBar />
      <RealProblemSection />
      <HowItWorksSection />
      <TwoValuePlanesSection />
      <AIWorkDesignRiskSection />
      <WhoItIsForSection />
      <PrivacyBoundarySection />
      <EvidenceJourneySection />
      <GlobalApplicabilitySection />
      <FAQSection />
      <RequestDemoSection />
    </main>
  );
}
