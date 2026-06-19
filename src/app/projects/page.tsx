import type { Metadata } from "next";
import { FiArrowUpRight, FiCpu } from "react-icons/fi";

import { SectionKicker } from "@/components/command-studio";
import { Badge } from "@/components/ui/badge";
import { edsyftModules, projectProof } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product proof and public-safe Edsyft ERP case-study modules from Sriram Badisa.",
};

export default function ProjectsPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Selected proof"
          titleAs="h1"
          title="Product systems, not template cards."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projectProof.map((project) => (
            <article
              className="gradient-border rounded-lg bg-white/[0.05] p-6"
              key={project.title}
            >
              <Badge className="border-amber-300/25 bg-amber-300/10 text-amber-100">
                {project.type}
              </Badge>
              <h2 className="mt-5 text-3xl font-black text-white">
                {project.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {project.description}
              </p>
              <p className="mt-4 rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-cyan-100">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {edsyftModules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.07]"
                key={module.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-6 w-6 text-violet-200" />
                  <FiArrowUpRight className="h-4 w-4 text-slate-500" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-cyan-100">
                  {module.signal}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {module.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
          <FiCpu className="h-7 w-7 text-cyan-100" />
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            The work shown here is public-safe: it names product areas and
            engineering patterns without exposing private Edsyft data,
            credentials, screenshots, or implementation secrets.
          </p>
        </div>
      </div>
    </div>
  );
}
