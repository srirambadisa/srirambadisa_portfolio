import Link from "next/link";
import Image from "next/image";

import { contactMethods, navItems, profile } from "@/lib/portfolio-data";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050713]/88 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex min-w-0 items-center gap-3 md:mr-0" href="/">
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-violet-400/35 bg-violet-400/10 shadow-[0_0_30px_-12px_rgba(139,92,246,0.9)]">
            <Image
              alt={profile.name}
              className="object-cover object-[50%_18%]"
              fill
              priority
              sizes="44px"
              src={profile.avatar}
              unoptimized
            />
          </span>
          <span className="hidden min-w-0 md:block">
            <span className="block text-sm font-semibold text-white">
              Sriram Badisa
            </span>
            <span className="block truncate text-xs text-cyan-200/70">
              Full Stack Developer
            </span>
          </span>
        </Link>

        <div className="min-w-0 text-right md:hidden">
          <p className="truncate text-sm font-semibold text-white">
            {profile.name}
          </p>
          <p className="truncate text-xs text-cyan-200/70">
            {profile.headline}
          </p>
        </div>

        <nav className="ml-auto hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6 md:hidden">
        {navItems.map((item) => (
          <Link
            className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-300"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050713]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-white">{profile.name}</p>
            <p>{profile.secondaryHeadline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {contactMethods.slice(0, 2).map((method) => (
              <a
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 transition hover:border-cyan-300/40 hover:text-white"
                href={method.href}
                key={method.label}
              >
                {method.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="cyber-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative">
        <SiteNav />
        <div className="pt-[8.75rem] md:pt-[4.75rem]">{children}</div>
        <SiteFooter />
      </div>
    </div>
  );
}
