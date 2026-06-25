import type { Metadata } from "next";
import { FiMessageCircle } from "react-icons/fi";

import { SectionKicker } from "@/components/command-studio";
import { ContactForm } from "@/components/contact-form";
import { contactMethods, profile, socialLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sriram Badisa for full stack developer roles, AI prompt engineering work, and practical product projects.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionKicker
          label="Open channel"
          titleAs="h1"
          title="Contact me for roles, projects, and product work."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="gradient-border rounded-lg bg-white/[0.05] p-6">
            <FiMessageCircle className="h-8 w-8 text-cyan-200" />
            <h2 className="mt-5 text-3xl font-black text-white">
              Full stack roles, product UI systems, and AI-assisted delivery.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Reach out for opportunities where {profile.name} can help build
              React, Next.js, TypeScript, Java, REST API, and SQL-backed product
              interfaces.
            </p>

            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-slate-200 transition hover:border-cyan-300/35 hover:bg-white/[0.06]"
                    href={method.href}
                    key={method.label}
                  >
                    <Icon className="h-5 w-5 shrink-0 text-cyan-200" />
                    <span>
                      <span className="block text-xs text-slate-500">
                        {method.label}
                      </span>
                      <span className="block break-all font-semibold">
                        {method.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-violet-300/40 hover:text-white"
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
          </aside>

          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-white">Send a message</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Share a role, project, internship, freelance requirement, or
              collaboration note.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
