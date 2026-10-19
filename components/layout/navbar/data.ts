import {
  BookOpen,
  Building2,
  Cpu,
  Database,
  FileBarChart,
  FileText,
  HelpCircle,
  Lock,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Tone = "peach" | "mint" | "plain";

export type MenuCard = {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
  tone: Tone;
};

export type MenuFooterNote = {
  text: string;
  mutedText: string;
  mutedIcon: "globe" | "users";
  mutedTitle?: string;
};

export type Dropdown = {
  key: string;
  label: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  cards: readonly MenuCard[];
  note: MenuFooterNote;
  loop?: readonly string[];
  loopNote?: string;
};

export const DROPDOWNS: readonly Dropdown[] = [
  {
    key: "platform",
    label: "Platform",
    eyebrow: "PLATFORM",
    heading: "Built for accountability. Designed for action.",
    body: "From organizational signals to work-design outcomes, the platform brings risk, evidence and governance together — so you can act with confidence.",
    cta: "View the platform",
    ctaHref: "#",
    image: "/navbar/1.png",
    imageAlt: "Bright meeting room with a long table and city views",
    cards: [
      {
        title: "Risk Assurance",
        text: "Detect organizational work hazards, attribute work-design drivers, assign controls, verify status.",
        href: "#",
        icon: ShieldCheck,
        tone: "peach",
      },
      {
        title: "Work-Design Outcomes",
        text: "Compare conditions after interventions, with comparison period, quality and limitations labeled.",
        href: "#",
        icon: TrendingUp,
        tone: "mint",
      },
      {
        title: "Evidence & Governance",
        text: "Document ownership, verification evidence, review schedules and residual risk.",
        href: "#",
        icon: FileText,
        tone: "peach",
      },
      {
        title: "AI Work-Design Risk",
        text: "Evaluate human–AI handoffs, workload, autonomy, role clarity and override.",
        href: "#",
        icon: Cpu,
        tone: "plain",
      },
    ],
    loop: ["Detect", "Attribute", "Control", "Verify"],
    loopNote: "The assurance loop",
    note: {
      text: "",
      mutedText: "Outcomes never close assurance records.",
      mutedIcon: "globe",
    },
  },
  {
    key: "solutions",
    label: "Solutions",
    eyebrow: "SOLUTIONS",
    heading:
      "Designed for launch sectors first, with expansion added only when supported.",
    body: "Focused solutions for legal teams, with additional sectors added as substantive content becomes available.",
    cta: "Explore our solutions",
    ctaHref: "#",
    image: "/navbar/2.png",
    imageAlt: "Two legal professionals in conversation",
    cards: [
      {
        title: "Law Firms",
        text: "Help your firm detect, evidence and govern work-design risk across engagements and teams.",
        href: "#",
        icon: Scale,
        tone: "peach",
      },
      {
        title: "In-House Legal Teams",
        text: "Give your legal team visibility into work-design risk across the business, with evidence and governance built in.",
        href: "#",
        icon: Users,
        tone: "mint",
      },
    ],
    note: {
      text: "Visible label means a real destination, not a placeholder.",
      mutedTitle: "Professional Services",
      mutedText:
        "Added only when a substantive cross-sector page is published.",
      mutedIcon: "users",
    },
  },
  {
    key: "trust",
    label: "Trust",
    eyebrow: "TRUST",
    heading: "Privacy-first trust, with clear boundaries.",
    body: "Understand what data is visible, where it is held, and how governance and AI decisions are controlled.",
    cta: "Explore trust",
    ctaHref: "#",
    image: "/navbar/3.png",
    imageAlt: "Two colleagues reviewing a tablet together",
    cards: [
      {
        title: "Privacy & Data Boundaries",
        text: "Explain visibility boundaries, Practice-Vault separation, and organizational-level reporting.",
        href: "#",
        icon: Lock,
        tone: "peach",
      },
      {
        title: "Security & Governance",
        text: "Show security posture, governance controls, human review, and operational safeguards.",
        href: "#",
        icon: Database,
        tone: "mint",
      },
      {
        title: "Responsible AI",
        text: "Describe bounded AI use, human oversight, accountability, and clear limitations.",
        href: "#",
        icon: Cpu,
        tone: "peach",
      },
    ],
    note: {
      text: "Trust pages describe safeguards clearly, without unsupported claims.",
      mutedText: "Jurisdiction coverage is explained in reviewed page content.",
      mutedIcon: "globe",
    },
  },
  {
    key: "resources",
    label: "Resources",
    eyebrow: "RESOURCES",
    heading: "Practical knowledge for more confident decisions.",
    body: "Explore evidence-led articles, frameworks, and practical guidance on trust, governance, and responsible AI in the workplace.",
    cta: "Explore resources",
    ctaHref: "#",
    image: "/navbar/4.png",
    imageAlt: "Two colleagues reviewing a printed chart",
    cards: [
      {
        title: "Insights",
        text: "Evidence-led articles, analysis, and practical perspectives on trust, governance, and AI.",
        href: "#",
        icon: FileBarChart,
        tone: "peach",
      },
      {
        title: "Work-Design Glossary",
        text: "Definitions, terms, and plain-language explanations for key concepts.",
        href: "#",
        icon: BookOpen,
        tone: "mint",
      },
      {
        title: "FAQs",
        text: "Quick answers to common product, trust, and implementation questions.",
        href: "#",
        icon: HelpCircle,
        tone: "peach",
      },
    ],
    note: {
      text: "Every link points to a useful, published page.",
      mutedText: "Avoid empty libraries and superficial keyword pages.",
      mutedIcon: "globe",
    },
  },
  {
    key: "company",
    label: "Company",
    eyebrow: "COMPANY",
    heading: "Meet the team behind Zoiko Abate.",
    body: "Learn who builds Abate, how the product is positioned, and how to contact the team with confidence.",
    cta: "Explore company",
    ctaHref: "#",
    image: "/navbar/5.png",
    imageAlt: "Four colleagues smiling around a laptop",
    cards: [
      {
        title: "About Zoiko Abate",
        text: "Understand the product story, organizational context, and the approved entity and offering description.",
        href: "/about",
        icon: Building2,
        tone: "peach",
      },
      {
        title: "Contact",
        text: "Reach the team for product questions, demo coordination, and business inquiries through an approved contact route.",
        href: "#",
        icon: Users,
        tone: "mint",
      },
    ],
    note: {
      text: "This menu is intentionally compact, with only meaningful destinations.",
      mutedText:
        "Corporate claims, contact details, and legal entity labeling must be approved before publication.",
      mutedIcon: "globe",
    },
  },
] as const;

export type PlainLink = { label: string; href: string };

export const SIMPLE_LINKS: readonly PlainLink[] = [
  { label: "How It Works", href: "#" },
] as const;

/** Order of the top-level nav. "link" entries are plain links, "menu" entries open a dropdown. */
export const NAV_ORDER = [
  { type: "menu", key: "platform" },
  { type: "menu", key: "solutions" },
  { type: "link", label: "How It Works", href: "#" },
  { type: "menu", key: "trust" },
  { type: "menu", key: "resources" },
  { type: "menu", key: "company" },
] as const;
