"use client";

import { useState, type ReactNode } from "react";
import { site } from "@/lib/content";
import { Sidebar } from "./Sidebar";

export function Terminal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="titlebar">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="打开菜单"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded border border-line text-fg transition-colors hover:border-accent/60 md:hidden"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          >
            <path d="M2.5 4h11M2.5 8h11M2.5 12h11" />
          </svg>
        </button>

        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_8px_rgba(57,255,20,0.8)]"
        />

        <div className="flex-1 truncate text-center text-sm text-muted">{site.title}</div>

        <span className="hidden text-xs text-muted md:inline">bash</span>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />

      <main className="terminal-main">
        <div className="mx-auto max-w-5xl px-6 md:px-10">{children}</div>
      </main>

      <footer className="statusbar">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2 animate-pulse rounded-full bg-green shadow-[0_0_8px_rgba(57,255,20,0.7)]"
          />
          <span className="truncate">linmo@portfolio</span>
        </div>
        <span className="hidden sm:inline">⎇ main</span>
      </footer>

      <div aria-hidden className="scanlines" />
      <div aria-hidden className="vignette" />
    </>
  );
}
