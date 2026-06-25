import type { IconType } from "react-icons";
import {
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiCode,
  FiCommand,
  FiDatabase,
  FiFileText,
  FiGitBranch,
  FiGithub,
  FiGlobe,
  FiGrid,
  FiLayers,
  FiMail,
  FiMapPin,
  FiPhone,
  FiServer,
  FiShield,
  FiShoppingBag,
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
  headline: "Full Stack Developer",
  secondaryHeadline: "Full Stack Developer - AI-assisted product UI focus",
  shortHeadline:
    "Full stack product interfaces with React, Next.js, TypeScript, Java, and SQL",
  avatar: "/assets/images/sriram-profile-removebg.png",
  email: "srirambadisa1938@gmail.com",
  phone: "+91 9553736290",
  birthday: "September 17, 2002",
  location: "Ameerpet, Hyderabad, India",
  availability: "Open to 0-2 year full stack roles",
  experienceLevel: "0-2 years",
  primaryRole: "Full Stack Developer",
  secondaryRole: "AI Prompt Engineer",
  summary:
    "I build practical web applications across React, Next.js, TypeScript, Tailwind, Java, REST APIs, SQL, and PostgreSQL, with a daily AI-assisted workflow for planning, debugging, and delivery.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Education", href: "/education" },
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
    icon: FiGithub,
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
  { label: "Role", value: "FS", detail: "Full stack developer" },
  { label: "Level", value: "0-2", detail: "Years experience" },
  { label: "Proof", value: "ERP", detail: "Edsyft product work" },
  { label: "AI", value: "Prompt", detail: "Assisted delivery" },
];

export const roleFocus = [
  {
    label: "Primary target",
    value: profile.primaryRole,
    detail:
      "React, Next.js, TypeScript, Java, REST APIs, SQL, and product UI delivery.",
    icon: FiBriefcase,
  },
  {
    label: "Secondary signal",
    value: profile.secondaryRole,
    detail:
      "AI tools for planning, prompts, debugging, refactoring, and documentation.",
    icon: FiCommand,
  },
  {
    label: "Experience level",
    value: profile.experienceLevel,
    detail:
      "Early-career developer with production-style ERP and public project proof.",
    icon: FiShield,
  },
];

export const agenticWorkflowSteps = [
  {
    label: "Plan",
    detail:
      "Clarify role, product intent, data shape, and implementation path before coding.",
    icon: FiCommand,
  },
  {
    label: "Build",
    detail: "Implement typed UI, forms, tables, routes, and API-aware screens.",
    icon: FiCode,
  },
  {
    label: "Review",
    detail:
      "Use AI and manual review to check correctness, maintainability, and edge cases.",
    icon: FiGitBranch,
  },
  {
    label: "Validate",
    detail:
      "Run type, lint, build, route, and browser checks before handoff when available.",
    icon: FiShield,
  },
];

export const aiToolchain = [
  {
    name: "Claude",
    label: "Prompt and planning support",
    description:
      "Used for product thinking, prompt design, architecture planning, documentation, and reasoning.",
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
    title: "AI-Assisted Workflow",
    summary:
      "Practical use of Claude, Codex, and GitHub Copilot to plan, build, debug, refactor, and review faster.",
    icon: FiZap,
    tools: [
      "Claude",
      "Codex",
      "GitHub Copilot",
      "Prompt engineering",
      "AI-assisted debugging",
      "Agentic refactoring",
    ],
  },
  {
    title: "Frontend Product Systems",
    summary:
      "Typed App Router surfaces, responsive layouts, reusable components, forms, dialogs, and role-aware product flows.",
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
      "Backend and database foundations for API contracts, data flows, transactions, and product platform work.",
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
      "Validation habits that keep product screens stable before handoff and deployment.",
    icon: SiVitest,
    tools: [
      "Typecheck",
      "ESLint",
      "Build gates",
      "Vitest",
      "Playwright",
      "Route QA",
    ],
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

export const edsyftCaseStudy = {
  title: "Edsyft ERP",
  eyebrow: "Flagship product proof",
  liveHref: "https://erp.edsyft.com/login",
  repoLabel: "Private organization repository",
  summary:
    "A production ERP platform with admin, admissions, finance, parent portal, upload, table, filter, and reporting-style workflows.",
  role:
    "Worked from requirements to implementation across product modules, with a focus on practical screens that support real school operations.",
  challenge:
    "ERP screens need dense data, reliable forms, role-aware actions, safe file handling, and clear operational flows without exposing private school data.",
  contribution:
    "Built and improved modules across admissions, finance operations, parent portal, school admin, uploads, data tables, filters, and workflow states.",
  outcome:
    "Public-safe portfolio proof of full-stack product thinking, frontend execution, API-aware workflows, and AI-assisted delivery habits.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "REST APIs",
    "PostgreSQL",
  ],
};

export type PortfolioProject = {
  title: string;
  type: string;
  description: string;
  impact: string;
  tech: string[];
  href?: string;
  repoHref?: string;
  icon: IconType;
};

export const projectProof = [
  {
    title: "Edsyft ERP",
    type: "Flagship product proof",
    description:
      "Public-safe case study around operational ERP modules, data-heavy workflows, and product UI systems.",
    impact:
      "Built across admissions, finance, parent portal, admin, uploads, tables, filters, and reporting-style patterns.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "REST APIs"],
    href: edsyftCaseStudy.liveHref,
    icon: FiBriefcase,
  },
  {
    title: "Portfolio Website",
    type: "Personal product surface",
    description:
      "A recruiter-focused Next.js portfolio that presents role fit, case-study proof, projects, resume signals, and contact paths.",
    impact:
      "Demonstrates responsive UI composition, content strategy, TypeScript structure, and deployment-ready frontend work.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    repoHref: "https://github.com/srirambadisa/srirambadisa_portfolio",
    icon: FiGlobe,
  },
] satisfies PortfolioProject[];

export const publicProjects = [
  {
    title: "Ram Big Basket Project",
    type: "E-commerce clone",
    description:
      "A JavaScript shopping experience inspired by Big Basket, focused on product browsing and storefront flow.",
    impact:
      "Good public proof for frontend fundamentals, layout structure, shopping UI patterns, and JavaScript interaction.",
    tech: ["JavaScript", "HTML", "CSS"],
    repoHref: "https://github.com/srirambadisa/ram-big-basket-project",
    icon: FiShoppingBag,
  },
  {
    title: "Ram Store React Project",
    type: "React storefront",
    description:
      "A React-based store project for practicing component composition, product cards, and reusable UI structure.",
    impact:
      "Shows React fundamentals, component thinking, state-oriented UI, and practical product listing patterns.",
    tech: ["React", "JavaScript", "CSS"],
    repoHref: "https://github.com/srirambadisa/ram-store-react-project",
    icon: SiReact,
  },
  {
    title: "User Management Node.js",
    type: "Backend CRUD foundation",
    description:
      "A Node.js user-management project for practicing server-side routes, data handling, and CRUD workflows.",
    impact:
      "Supports the full-stack story with backend fundamentals beyond static frontend pages.",
    tech: ["Node.js", "JavaScript", "REST APIs"],
    repoHref: "https://github.com/srirambadisa/user-management-nodejs",
    icon: FiServer,
  },
  {
    title: "Spring Boot REST Practice",
    type: "Java API practice",
    description:
      "Spring Boot REST practice projects covering Java backend patterns, transactions, MVC structure, and API communication.",
    impact:
      "Rounds out backend foundations for Java, REST APIs, Spring tooling, and database-aware application work.",
    tech: ["Java", "Spring Boot", "REST APIs"],
    repoHref: "https://github.com/srirambadisa?tab=repositories&q=springboot",
    icon: FiTerminal,
  },
] satisfies PortfolioProject[];

export const proofHighlights = [
  "Production-style ERP modules and public projects",
  "React, Next.js, TypeScript, Tailwind, Java, REST APIs, SQL",
  "AI prompt workflow with Claude, Codex, and GitHub Copilot",
  "0-2 year full-stack profile with product UI strength",
];

export const educationHistory = [
  {
    course: "B.Tech ECE",
    institution: "Krishna University College of Engineering & Technology",
    location: "Rudravaram, Machilipatnam",
    years: "2020-2024",
    scoreLabel: "CGPA",
    score: "7.4",
    highlights: [
      "Electronics and communication engineering foundation",
      "Problem-solving base for software and full-stack development",
    ],
  },
  {
    course: "Intermediate MPC",
    institution: "Sri Srinivasa Junior College",
    location: "Vissannapeta",
    years: "2018-2020",
    scoreLabel: "CGPA",
    score: "9.3",
    highlights: ["Maths", "Physics", "Chemistry"],
  },
  {
    course: "10th",
    institution: "M.J.P.A.P.B.C.W. Residential School",
    location: "Nizampatnam",
    years: "2017-2018",
    scoreLabel: "CGPA",
    score: "9.0",
    highlights: ["Academic foundation and residential school discipline"],
  },
];

export const resumeSignals = [
  "Full stack developer targeting 0-2 year roles",
  "Next.js App Router and React surfaces",
  "TypeScript-first implementation",
  "Design-system and shadcn-style UI",
  "Data-heavy ERP workflows",
  "AI prompt engineering and assisted development workflow",
  "Java, REST APIs, SQL, and PostgreSQL foundations",
];
