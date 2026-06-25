import Image from "next/image";
import Link from "next/link";
import {
  FiExternalLink,
  FiMail,
  FiRadio,
} from "react-icons/fi";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  agenticWorkflowSteps,
  aiToolchain,
  commandMetrics,
  edsyftCaseStudy,
  edsyftModules,
  profile,
  proofHighlights,
  publicProjects,
  roleFocus,
  skillClusters,
  socialLinks,
  stackHighlights,
} from "@/lib/portfolio-data";

export function CommandHero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <Badge className="border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            {profile.availability}
          </Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Full Stack Developer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build web applications with React, Next.js, TypeScript, Java,
            REST APIs, and SQL, using AI tools to plan, debug, and ship faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  title={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="gradient-border relative overflow-hidden rounded-lg bg-white/[0.05] p-5 shadow-[0_30px_120px_-56px_rgba(139,92,246,0.95)] backdrop-blur-xl">
            <div className="absolute inset-x-8 top-10 h-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-12 right-8 h-36 w-36 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="relative min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-[#090d1e]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(34,211,238,0.22),transparent_18rem)]" />
              <div className="absolute left-8 right-8 top-8 flex justify-between">
                <span className="h-2 w-20 rounded-full bg-cyan-300/70 signal-pulse" />
                <span className="h-2 w-14 rounded-full bg-amber-300/70 signal-pulse" />
              </div>
              <Image
                alt={profile.name}
                className="absolute bottom-0 left-1/2 h-[31rem] w-auto -translate-x-1/2 object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.65)]"
                height={519}
                priority
                src={profile.avatar}
                unoptimized
                width={481}
              />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                {commandMetrics.map((metric) => (
                  <div
                    className="rounded-lg border border-white/10 bg-black/45 p-3 backdrop-blur-xl"
                    key={metric.label}
                  >
                    <p className="text-2xl font-black text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-300">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IdentityStrip() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {roleFocus.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className="gradient-border rounded-lg bg-white/[0.04] p-5"
              key={item.label}
            >
              <div className="flex items-center justify-between gap-4">
                <Icon className="h-6 w-6 text-amber-200" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  {item.label}
                </span>
              </div>
              <p className="mt-4 text-xl font-semibold text-white">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Build workflow"
          title="From requirement to checked implementation."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {agenticWorkflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]"
                key={step.label}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-cyan-200" />
                  <span className="text-sm font-semibold text-violet-200">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {aiToolchain.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                className="rounded-lg border border-violet-300/15 bg-violet-300/[0.06] p-5"
                key={tool.name}
              >
                <Icon className="h-7 w-7 text-violet-100" />
                <p className="mt-4 text-lg font-semibold text-white">
                  {tool.name}
                </p>
                <p className="mt-1 text-sm text-cyan-100">{tool.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Product proof"
          title="Edsyft ERP as public-safe case study."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="gradient-border rounded-lg bg-white/[0.05] p-6">
            <Badge className="border-amber-300/25 bg-amber-300/10 text-amber-100">
              {edsyftCaseStudy.eyebrow}
            </Badge>
            <h3 className="mt-5 text-3xl font-black text-white">
              {edsyftCaseStudy.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {edsyftCaseStudy.summary}
            </p>
            <div className="mt-5 grid gap-3">
              {[
                ["Role", edsyftCaseStudy.role],
                ["Contribution", edsyftCaseStudy.contribution],
                ["Outcome", edsyftCaseStudy.outcome],
              ].map(([label, detail]) => (
                <div
                  className="rounded-lg border border-white/10 bg-black/20 p-4"
                  key={label}
                >
                  <p className="text-sm font-semibold text-cyan-100">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {edsyftCaseStudy.stack.map((tech) => (
                <span
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={edsyftCaseStudy.liveHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  View live ERP
                  <FiExternalLink />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">Read project proof</Link>
              </Button>
            </div>
          </article>

          <div className="grid content-start gap-3">
            {proofHighlights.map((highlight) => (
              <div
                className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] p-4 text-sm font-medium leading-6 text-cyan-50"
                key={highlight}
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {edsyftModules.slice(0, 6).map((module) => {
            const Icon = module.icon;
            return (
              <div
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-amber-300/40 hover:bg-white/[0.07]"
                key={module.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-6 w-6 text-amber-200" />
                  <span className="rounded-md bg-cyan-300/10 px-2 py-1 text-xs text-cyan-100">
                    {module.signal}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <SectionKicker
            label="Public repositories"
            title="Smaller projects that support the full-stack story."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {publicProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.07]"
                  key={project.title}
                >
                  <Icon className="h-6 w-6 text-violet-200" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <a
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
                    href={project.repoHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View repo
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillConstellation() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Skill stack"
          title="Tools I can use on full-stack teams."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stackHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="rounded-lg border border-white/10 bg-black/20 p-4"
                    key={item.label}
                  >
                    <Icon className="h-6 w-6 text-cyan-200" />
                    <p className="mt-3 text-sm font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillClusters.slice(0, 4).map((cluster) => (
              <SkillCard cluster={cluster} key={cluster.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="gradient-border mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg bg-white/[0.05] p-6 sm:p-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold text-cyan-200">Open signal</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Open for full stack roles and practical product work.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Sriram
              <FiMail />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SectionKicker({
  label,
  title,
  titleAs = "h2",
}: {
  label: string;
  title: string;
  titleAs?: "h1" | "h2";
}) {
  const Title = titleAs;

  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <FiRadio className="h-4 w-4" />
        {label}
      </p>
      <Title className="mt-3 text-3xl font-black text-white sm:text-5xl">
        {title}
      </Title>
    </div>
  );
}

function SkillCard({ cluster }: { cluster: (typeof skillClusters)[number] }) {
  const Icon = cluster.icon;
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <Icon className="h-6 w-6 text-violet-200" />
      <h3 className="mt-4 text-lg font-semibold text-white">{cluster.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{cluster.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {cluster.tools.slice(0, 4).map((tool) => (
          <span
            className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-slate-300"
            key={tool}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
