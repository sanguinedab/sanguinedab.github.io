import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Terminal } from "@/components/terminal/Terminal";
import { hero, site } from "@/lib/content";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.nameEn} — ${site.role}`,
  description: hero.intro,
};

export const viewport: Viewport = {
  themeColor: "#020402",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={jetbrains.variable}>
      <body className="antialiased">
        <Terminal>{children}</Terminal>
      </body>
    </html>
  );
}
