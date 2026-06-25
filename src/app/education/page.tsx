import type { Metadata } from "next";
import { FiBookOpen, FiMapPin, FiStar } from "react-icons/fi";

import { SectionKicker } from "@/components/command-studio";
import { educationHistory, profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education timeline for Sriram Badisa, including B.Tech ECE, Intermediate MPC, and school background.",
};

export default function EducationPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Academic path"
          titleAs="h1"
          title="Education timeline"
        />

        <section className="gradient-border mt-10 rounded-lg bg-white/[0.05] p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <FiBookOpen className="h-8 w-8 text-cyan-200" />
              <h2 className="mt-5 text-3xl font-black text-white">
                ECE foundation, software direction.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              {profile.name} studied Electronics and Communication Engineering,
              built a strong Maths, Physics, and Chemistry base, and now applies
              that problem-solving foundation to full-stack product development.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-5">
          {educationHistory.map((item, index) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
              key={`${item.course}-${item.years}`}
            >
              <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.08] text-lg font-black text-cyan-100">
                  0{index + 1}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    {item.years}
                  </p>
                  <h2 className="mt-3 text-2xl font-black text-white">
                    {item.course}
                  </h2>
                  <p className="mt-3 text-lg font-semibold text-slate-200">
                    {item.institution}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <FiMapPin className="h-4 w-4 shrink-0 text-violet-200" />
                    {item.location}
                  </p>

                  {item.highlights.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300"
                          key={highlight}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="rounded-lg border border-amber-300/20 bg-amber-300/[0.06] p-4 lg:min-w-32">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-100">
                    <FiStar className="h-4 w-4" />
                    {item.scoreLabel}
                  </div>
                  <p className="mt-2 text-3xl font-black text-white">
                    {item.score}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
