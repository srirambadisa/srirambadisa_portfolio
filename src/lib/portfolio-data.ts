import type { IconType } from "react-icons";
import {
  FiArchive,
  FiBookOpen,
  FiBox,
  FiCode,
  FiCommand,
  FiDatabase,
  FiFileText,
  FiGitBranch,
  FiGrid,
  FiLayers,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiSliders,
  FiTerminal,
  FiUploadCloud,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import {
  SiEclipseide,
  SiGithubcopilot,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

export const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const profile = {
  name: "Sriram Badisa",
  headline: "AI Product Engineer",
  secondaryHeadline: "Full Stack Product Engineer · AI Agentic Engineer",
  shortHeadline: "AI-assisted product systems with Next.js, React, and TypeScript",
  avatar: "/assets/images/sriram-profile-removebg.png",
  email: "srirambadisa1938@gmail.com",
  phone: "+91 9553736290",
  birthday: "September 17, 2002",
  location: "Ameerpet, Hyderabad, India",
  availability: "Open to product engineering roles",
  summary:
    "I design and build modern product interfaces with Next.js, React, TypeScript, Tailwind, shadcn-style systems, and a daily AI-assisted engineering workflow.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/badisa-sriram-50811a361/",
    icon: FiUsers,
  },
  {
    label: "GitHub",
    href: "https://github.com/srirambadisa",
    icon: FiArchive,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/__.mr.__.unique.___/",
    icon: FiZap,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: FiPhone,
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Ameerpet%20Hyderabad%20India",
    icon: FiMapPin,
  },
];

export type CommandMetric = {
  label: string;
  value: string;
  detail: string;
};

export const commandMetrics: CommandMetric[] = [
  { label: "Role", value: "AI", detail: "Product engineer" },
  { label: "Stack", value: "TS", detail: "Next.js + React" },
  { label: "Proof", value: "ERP", detail: "Edsyft modules" },
  { label: "Mode", value: "Ship", detail: "Tested handoff" },
];

export const agenticWorkflowSteps = [
  {
    label: "Plan",
    detail: "Clarify product intent, data shape, and build path.",
    icon: FiCommand,
  },
  {
    label: "Generate",
    detail: "Draft UI, flows, and implementation structure with AI assistance.",
    icon: FiCode,
  },
  {
    label: "Review",
    detail: "Check correctness, maintainability, and user-facing polish.",
    icon: FiGitBranch,
  },
  {
    label: "Validate",
    detail: "Run type, lint, build, route, and browser checks before handoff.",
    icon: FiShield,
  },
];

export const aiToolchain = [
  {
    name: "Claude",
    label: "Architecture reasoning",
    description:
      "Used for product thinking, architecture planning, documentation, and deeper reasoning.",
    icon: FiBox,
  },
  {
    name: "Codex",
    label: "Repository execution",
    description:
      "Used for codebase navigation, implementation, refactors, testing, and maintenance.",
    icon: SiOpenai,
  },
  {
    name: "GitHub Copilot",
    label: "IDE acceleration",
    description:
      "Used for inline coding, autocomplete, boilerplate acceleration, and IDE flow.",
    icon: SiGithubcopilot,
  },
];

export type SkillCluster = {
  title: string;
  summary: string;
  icon: IconType;
  tools: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    title: "AI Agentic Workflow",
    summary:
      "Daily practical use of Claude, Codex, and GitHub Copilot to plan, build, refactor, debug, review, and ship faster.",
    icon: FiZap,
    tools: [
      "Claude",
      "Codex",
      "GitHub Copilot",
      "Prompt-driven development",
      "AI-assisted debugging",
      "Agentic refactoring",
    ],
  },
  {
    title: "Frontend Product Systems",
    summary:
      "Typed App Router surfaces, responsive shells, reusable components, forms, dialogs, and role-aware product flows.",
    icon: SiNextdotjs,
    tools: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn UI",
      "Radix/Base UI",
    ],
  },
  {
    title: "Operational Interfaces",
    summary:
      "Dense ERP-style screens for tables, filters, dashboards, finance views, admissions flows, and admin workflows.",
    icon: FiGrid,
    tools: [
      "TanStack Table",
      "Filters",
      "Forms",
      "Dialogs",
      "Recharts",
      "Workflow states",
    ],
  },
  {
    title: "Backend Foundations",
    summary:
      "Supporting backend and database knowledge for API contracts, data flows, and product platform work.",
    icon: FiDatabase,
    tools: [
      "Java",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "Spring Tool Suite",
      "Eclipse",
    ],
  },
  {
    title: "Quality & Release",
    summary:
      "Validation habits that keep product screens stable before handoff.",
    icon: SiVitest,
    tools: ["Typecheck", "ESLint", "Build gates", "Vitest", "Playwright", "Route QA"],
  },
];

export const stackHighlights = [
  { label: "Next.js 16", icon: SiNextdotjs },
  { label: "React 19", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind v4", icon: SiTailwindcss },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "REST APIs", icon: FiTerminal },
];

export const foundationStack = [
  { label: "Java", icon: FiCode },
  { label: "REST APIs", icon: FiTerminal },
  { label: "SQL", icon: FiDatabase },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Spring Tool Suite", icon: FiBox },
  { label: "Eclipse", icon: SiEclipseide },
];

export const edsyftModules = [
  {
    title: "Admissions Workspace",
    description:
      "Applicant flows, lead conversion, document review, and validation-aware admission surfaces.",
    icon: FiBookOpen,
    signal: "Applicant lifecycle",
  },
  {
    title: "Finance Operations",
    description:
      "Fees, receipts, refunds, concessions, cheques, outstanding balances, and audit-friendly flows.",
    icon: FiFileText,
    signal: "Money-safe workflows",
  },
  {
    title: "Parent Portal",
    description:
      "Parent-facing modules for fees, documents, attendance, homework, health, transport, and communication.",
    icon: FiUsers,
    signal: "Multi-role experience",
  },
  {
    title: "Org & School Admin",
    description:
      "Tenant-aware platform surfaces for schools, users, students, staff, settings, and admin control.",
    icon: FiLayers,
    signal: "Admin systems",
  },
  {
    title: "Uploads & Storage",
    description:
      "Image crop flows, document uploads, private/public storage proxy routes, and S3-style object patterns.",
    icon: FiUploadCloud,
    signal: "File-safe platform",
  },
  {
    title: "Data Tables & Filters",
    description:
      "Reusable table chrome, sticky columns, pagination, toolbar overflow, faceted filters, and bulk actions.",
    icon: FiSliders,
    signal: "Dense UX systems",
  },
];

export const projectProof = [
  {
    title: "Edsyft ERP",
    type: "Flagship product proof",
    description:
      "A public-safe case study around operational ERP modules, data-heavy workflows, and product UI systems.",
    impact: "Built across admissions, finance, parent portal, admin, uploads, inspections, and reporting patterns.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn UI", "Recharts"],
  },
  {
    title: "AI Engineering Loop",
    type: "Daily workflow proof",
    description:
      "Practical agentic development process using Claude, Codex, and Copilot for faster, reviewed delivery.",
    impact: "Turns product intent into planned, implemented, checked, and polished user-facing work.",
    tech: ["Claude", "Codex", "GitHub Copilot", "Typecheck", "ESLint", "Build QA"],
  },
];

export const resumeSignals = [
  "AI-native product engineering",
  "Next.js App Router and React surfaces",
  "TypeScript-first implementation",
  "Design-system and shadcn-style UI",
  "Data-heavy ERP workflows",
  "Java, REST APIs, SQL, and PostgreSQL foundations",
];
