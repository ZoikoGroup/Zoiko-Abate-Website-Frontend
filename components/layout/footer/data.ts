export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; href: string; links: FooterLink[] };

// Updated helper: accepts an optional href, defaulting to "#" if not provided
const l = (label: string, href: string = "#"): FooterLink => ({ label, href });

export const COLUMNS: readonly FooterColumn[] = [
  {
    title: "Platform",
    href: "/platform", // You can also customize column-level hrefs
    links: [
      l("Platform Overview", "/platform/overview"), // Manual custom href example
      l("Product Capabilities", "/platform/capabilities"),
      l("Why Abate", "/platform/why-abate"),
      l("Assurance Framework"), // Falls back to "#" automatically
    ],
  },
  {
    title: "Risk Assurance",
    href: "#",
    links: [
      l("Risk Assurance", "/risk-assurance"),
      l("Psychosocial Hazards", "/risk-assurance/psychosocial-hazards"),
      l("Controls & Ownership"),
      l("Verification & Evidence"),
    ],
  },
  {
    title: "Work-Design Outcomes",
    href: "#",
    links: [
      l("Work-Design Outcomes"),
      l("Workload Sustainability"),
      l("Role Clarity & Autonomy"),
      l("Evidence Limitations"),
    ],
  },
  {
    title: "AI Work-Design Risk",
    href: "#",
    links: [
      l("AI & Human Work Overview", "/ai-work-design/overview"),
      l("AI Work-Design FAQs", "/ai-work-design/faqs"),
    ],
  },
  {
    title: "Solutions",
    href: "#",
    links: [
      l("Law Firms", "/solutions/law-firms"),
      l("In-House Legal Teams", "/solutions/in-house-legal"),
      l("Legal Work Design", "/solutions/legal-work-design"),
    ],
  },
  {
    title: "How It Works",
    href: "#",
    links: [
      l("Our Method"),
      l("Detect & Attribute"),
      l("Control & Verify"),
      l("Request a Demo", "/request-demo"),
    ],
  },
  {
    title: "Trust & Privacy",
    href: "#",
    links: [
      l("Privacy & Data Boundaries"),
      l("Practice–Vault Separation"),
      l("Cohort-Based Reporting"),
      l("Data Rights"),
    ],
  },
  {
    title: "Security & Governance",
    href: "#",
    links: [
      l("Security & Governance"),
      l("Evidence Governance"),
      l("Security Contact"),
    ],
  },
  {
    title: "Research & Evidence",
    href: "#",
    links: [
      l("Evidence Approach"),
      l("Verification Method"),
      l("Risk & Methods FAQs"),
    ],
  },
  {
    title: "Resources & Learning",
    href: "#",
    links: [
      l("Frequently Asked Questions", "/faqs"),
      l("Contact Our Team", "/contact"),
    ],
  },
  {
    title: "Company",
    href: "#",
    links: [
      l("About Zoiko Abate", "/about"),
      l("Zoiko Group", "https://zoikogroup.com"),
      l("Contact", "/contact"),
    ],
  },
  {
    title: "Contact & Support",
    href: "#",
    links: [
      l("Request a Demo", "/request-demo"),
      l("General Inquiries"),
      l("Accessibility"),
    ],
  },
] as const;

export type Office = { title: string; lines: readonly string[] };

export const OFFICES: readonly Office[] = [
  {
    title: "Global Headquarters",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "USA"],
  },
  {
    title: "European Headquarters",
    lines: [
      "167–169 Great Portland Street,",
      "5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
  },
] as const;

export const BRAND = {
  tagline: "Change the work. Not the worker.",
  subline:
    "Work-design and psychosocial-risk infrastructure for accountable organizational action.",
  description:
    "Zoiko Abate helps organizations detect psychosocial hazards, manage work-design risks, verify corrective controls, and evaluate work-design outcomes separately. The initial focus is legal services, with a global, extensible foundation.",
} as const;

export const LEGAL_LINKS: readonly FooterLink[] = [
  l("Privacy Policy", "/privacy"),
  l("Terms of Use", "/terms"),
  l("Cookie Policy", "/cookies"),
  l("Cookie Settings", "#cookie-settings"),
  l("Accessibility Statement", "/accessibility"),
  l("Security Contact", "/security"),
  l("Sitemap", "/sitemap"),
] as const;

export const COPYRIGHT =
  "© 2026 Zoiko Tech Inc. All rights reserved. Zoiko Abate is a platform owned and operated by Zoiko Tech Inc., a Zoiko Group company.";

export const DISCLAIMER =
  "Regulatory content is informational and not legal or medical advice. Abate is not an emergency or incident reporting service; if someone is in immediate danger, contact local emergency services.";
