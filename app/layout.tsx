import type { Metadata, Viewport } from "next";
import { Terminal } from "@/components/terminal/Terminal";
import { profile } from "@/lib/md";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.nameEn} — ${profile.role}`,
  description: profile.summary,
};

export const viewport: Viewport = {
  themeColor: "#020402",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Terminal profile={profile}>{children}</Terminal>
      </body>
    </html>
  );
}
