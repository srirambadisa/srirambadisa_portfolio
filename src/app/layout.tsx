import type { Metadata } from "next";

import { PageShell } from "@/components/command-shell";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI Product Engineer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "AI-assisted product engineering portfolio for Sriram Badisa, focused on Next.js, React, TypeScript, modern UI systems, and product delivery.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
  openGraph: {
    title: `${profile.name} | AI Product Engineer`,
    description:
      "Creative AI command-studio portfolio for product engineering, modern interfaces, and daily agentic development workflows.",
    type: "website",
    images: [
      {
        url: profile.avatar,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageShell>
          <main>{children}</main>
        </PageShell>
      </body>
    </html>
  );
}
