import type { Metadata } from "next";
import { FiCheckCircle } from "react-icons/fi";

import { SectionKicker } from "@/components/command-studio";
import {
  agenticWorkflowSteps,
  foundationStack,
  profile,
  resumeSignals,
  skillClusters,
} from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Recruiter-friendly AI Product Engineer profile for Sriram Badisa.",
};

export default function ResumePage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Recruiter signal"
          titleAs="h1"
          title="AI-native product engineering profile."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="gradient-border rounded-lg bg-white/[0.05] p-6">
            <p className="text-sm font-semibold text-cyan-100">
              {profile.name}
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              {profile.headline}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              {profile.secondaryHeadline}
            </p>
            <div className="mt-8 grid gap-3">
              {resumeSignals.map((signal) => (
                <div
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-slate-200"
                  key={signal}
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-cyan-200" />
                  {signal}
                </div>
              ))}
            </div>
          </aside>

          <section className="grid gap-4 sm:grid-cols-2">
            {skillClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <article
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                  key={cluster.title}
                >
                  <Icon className="h-6 w-6 text-violet-200" />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {cluster.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {cluster.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cluster.tools.map((tool) => (
                      <span
                        className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-slate-300"
                        key={tool}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </section>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-white">
              Daily AI engineering loop
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {agenticWorkflowSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    className="rounded-lg border border-white/10 bg-black/20 p-4"
                    key={step.label}
                  >
                    <Icon className="h-5 w-5 text-cyan-200" />
                    <p className="mt-3 font-semibold text-white">
                      {step.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-lg border border-amber-300/20 bg-amber-300/[0.06] p-6">
            <h2 className="text-2xl font-black text-white">
              Backend foundations
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {foundationStack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="rounded-lg border border-white/10 bg-black/20 p-4"
                    key={item.label}
                  >
                    <Icon className="h-5 w-5 text-amber-200" />
                    <p className="mt-3 text-sm font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
