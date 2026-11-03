import {
  Activity,
  BookOpen,
  Briefcase,
  Calculator,
  ChartColumn,
  CircleHelp,
  ClipboardCheck,
  Clock,
  Compass,
  Cpu,
  FileText,
  Globe,
  Layers,
  LayoutGrid,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MenuItem = {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
};

export type MenuColumn = {
  label?: string;
  items: readonly MenuItem[];
};

/** Left-hand card of a dropdown: either a photo card or a card listing the steps. */
export type MenuFeature =
  | { kind: "image"; image: string; imageAlt: string }
  | { kind: "steps"; body: string; steps: readonly string[] };

/** Optional strip along the bottom of a dropdown. */
export type MenuFooter =
  | { kind: "flow"; steps: readonly string[]; note: string }
  | { kind: "cta"; title: string; text: string; label: string; href: string };

export type Dropdown = {
  key: string;
  label: string;
  eyebrow: string;
  /** Lines of the feature card heading, rendered on separate lines. */
  heading: readonly string[];
  cta: { label: string; href: string };
  feature: MenuFeature;
  columns: readonly [MenuColumn, MenuColumn];
  footer?: MenuFooter;
};

export const ASSURANCE_STEPS = ["Detect", "Attribute", "Control", "Verify"] as const;

export const DROPDOWNS: readonly Dropdown[] = [
  {
    key: "platform",
    label: "Platform",
    eyebrow: "Platform",
    heading: ["A unified platform for", "work-design and", "psychosocial risk."],
    cta: { label: "Explore the platform", href: "#" },
    feature: {
      kind: "image",
      image: "/navbar/platform-team-meeting.webp",
      imageAlt: "Colleagues in discussion around a meeting table",
    },
    columns: [
      {
        label: "Risk assurance",
        items: [
          {
            title: "Risk Assurance",
            text: "Identify organization-level hazards; assign and verify controls.",
            href: "#",
            icon: Shield,
          },
          {
            title: "Evidence & Governance",
            text: "Status, owners, due dates, residual risk and evidence for every control.",
            href: "#",
            icon: ClipboardCheck,
          },
          {
            title: "AI Work-Design Risk",
            text: "Autonomy, cognitive load, monitoring intensity and human override.",
            href: "#",
            icon: Layers,
          },
        ],
      },
      {
        label: "Work-design outcomes",
        items: [
          {
            title: "Work-Design Outcomes",
            text: "Study organizational conditions after intervention, analyzed separately.",
            href: "#",
            icon: ChartColumn,
          },
          {
            title: "Measurement Method",
            text: "Cohorts, comparison periods and labeled evidence quality.",
            href: "#",
            icon: Activity,
          },
          {
            title: "Platform Overview",
            text: "The operating discipline from signals to action, evidence and review.",
            href: "#",
            icon: LayoutGrid,
          },
        ],
      },
    ],
    footer: {
      kind: "flow",
      steps: ASSURANCE_STEPS,
      note: "A favorable outcome result never closes an open risk finding.",
    },
  },
  {
    key: "solutions",
    label: "Solutions",
    eyebrow: "Solutions",
    heading: ["Built for complex", "work. Across", "professions."],
    cta: { label: "Explore all solutions", href: "#" },
    feature: {
      kind: "steps",
      body: "Address the organizational conditions behind psychosocial risk, wherever expert work is coordinated.",
      steps: ASSURANCE_STEPS,
    },
    columns: [
      {
        label: "By organization",
        items: [
          {
            title: "Professional Services",
            text: "Work-design risk for high-intensity expert work.",
            href: "#",
            icon: Briefcase,
          },
          {
            title: "Legal Services & Teams",
            text: "Law firms and in-house legal functions.",
            href: "#",
            icon: Scale,
          },
          {
            title: "Accounting, Tax & Audit",
            text: "Engagement cycles, review load and deadlines.",
            href: "#",
            icon: Calculator,
          },
          {
            title: "Consulting & Advisory",
            text: "Project concurrency, handoffs and recovery.",
            href: "#",
            icon: Compass,
          },
        ],
      },
      {
        label: "By organizational challenge",
        items: [
          {
            title: "Workload & Recovery",
            text: "Detect recurring demand and recovery strain.",
            href: "#",
            icon: Clock,
          },
          {
            title: "Psychosocial Risk Controls",
            text: "Assign actions and verify organizational controls.",
            href: "#",
            icon: ShieldCheck,
          },
          {
            title: "AI & Work Redesign",
            text: "Assess changes to workload and human oversight.",
            href: "#",
            icon: Sparkles,
          },
          {
            title: "Work-Design Outcomes",
            text: "Measure organizational change after action.",
            href: "#",
            icon: TrendingUp,
          },
        ],
      },
    ],
    footer: {
      kind: "cta",
      title: "For executives, operations, people, risk and transformation leaders",
      text: "Discover approaches to sustainable, accountable work design.",
      label: "Solutions overview",
      href: "#",
    },
  },
  {
    key: "trust",
    label: "Trust",
    eyebrow: "Trust",
    heading: ["Built on privacy,", "security and", "accountability."],
    cta: { label: "Explore trust", href: "#" },
    feature: {
      kind: "image",
      image: "/navbar/trust-advisory-conversation.webp",
      imageAlt: "Two colleagues in conversation",
    },
    columns: [
      {
        items: [
          {
            title: "Privacy & Data Boundaries",
            text: "Cohort-only organizational reporting, never individual scoring.",
            href: "#",
            icon: Lock,
          },
          {
            title: "Practice-Vault Separation",
            text: "Organizational insight stays separate from private, individual support.",
            href: "#",
            icon: Layers,
          },
          {
            title: "Security & Governance",
            text: "How access, approvals, auditability and service boundaries are governed.",
            href: "#",
            icon: ShieldCheck,
          },
        ],
      },
      {
        items: [
          {
            title: "Responsible AI",
            text: "Where AI can assist, and where deterministic controls and people decide.",
            href: "#",
            icon: Cpu,
          },
          {
            title: "Evidence & Accountability",
            text: "Auditable, evidence-led decisions with named human owners.",
            href: "#",
            icon: Scale,
          },
          {
            title: "Jurisdictional Approach",
            text: "Legal obligations and release controls that vary by location.",
            href: "#",
            icon: Globe,
          },
        ],
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    eyebrow: "Resources",
    heading: ["Insights, guidance", "and practical tools to", "drive change."],
    cta: { label: "Explore resources", href: "#" },
    feature: {
      kind: "image",
      image: "/navbar/resources-colleagues-reviewing.webp",
      imageAlt: "Two colleagues reviewing documents together",
    },
    columns: [
      {
        items: [
          {
            title: "Insights & Research",
            text: "Evidence-based work-design issues, policy context and references.",
            href: "#",
            icon: ChartColumn,
          },
          {
            title: "Guides & Frameworks",
            text: "Plain-language process resources to improve work and reduce risk.",
            href: "#",
            icon: BookOpen,
          },
          {
            title: "FAQs",
            text: "Direct answers for buyers, privacy reviewers and employee representatives.",
            href: "#",
            icon: CircleHelp,
          },
        ],
      },
      {
        items: [
          {
            title: "Work-Design Glossary",
            text: "Psychosocial hazards, attribution, controls, verification and evidence quality.",
            href: "#",
            icon: FileText,
          },
          {
            title: "Implementation Playbooks",
            text: "Step-by-step frameworks for successful adoption.",
            href: "#",
            icon: Layers,
          },
          {
            title: "Contact an Expert",
            text: "Get specialist guidance for your organization.",
            href: "#",
            icon: MessageSquare,
          },
        ],
      },
    ],
  },
  {
    key: "company",
    label: "Company",
    eyebrow: "Company",
    heading: ["A global team with a", "clear purpose:", "Change the work."],
    cta: { label: "Explore company", href: "/about" },
    feature: {
      kind: "image",
      image: "/navbar/company-global-team.webp",
      imageAlt: "Four colleagues smiling together",
    },
    columns: [
      {
        items: [
          {
            title: "About Zoiko Abate",
            text: "Our thesis, purpose and what makes us different.",
            href: "/about",
            icon: Users,
          },
          {
            title: "Vision & Mission",
            text: "Our long-term ambition and commitment.",
            href: "#",
            icon: Target,
          },
          {
            title: "Our Approach",
            text: "A people-centered, evidence-led and responsible approach.",
            href: "#",
            icon: Layers,
          },
        ],
      },
      {
        items: [
          {
            title: "Headquarters",
            text: "Our global and European headquarters.",
            href: "#",
            icon: MapPin,
          },
          {
            title: "Contact Us",
            text: "Get in touch with our team.",
            href: "#",
            icon: Mail,
          },
          {
            title: "Careers",
            text: "Build your career at Zoiko Abate.",
            href: "#",
            icon: Briefcase,
          },
        ],
      },
    ],
  },
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
