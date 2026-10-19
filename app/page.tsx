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
