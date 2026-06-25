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
    default: `${profile.name} | Full Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Full stack developer portfolio for Sriram Badisa, focused on React, Next.js, TypeScript, Java, REST APIs, SQL, ERP product work, and AI-assisted delivery.",
  icons: {
    icon: "/assets/images/sriram-profile-removebg.png",
  },
  openGraph: {
    title: `${profile.name} | Full Stack Developer`,
    description:
      "Recruiter-focused portfolio for full stack development, public-safe Edsyft ERP proof, public projects, and AI-assisted engineering workflow.",
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
