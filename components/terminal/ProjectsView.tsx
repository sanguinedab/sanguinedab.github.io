"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/content";

export function ProjectsView() {
  const [i, setI] = useState(0);
  const count = projects.length;
  const p = projects[i];
  const external = p.href.startsWith("http");

  const prev = () => setI((v) => (v - 1 + count) % count);
  const next = () => setI((v) => (v + 1) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="上一个项目"
          className="mt-1 shrink-0 text-2xl leading-none text-accent transition-opacity hover:opacity-60"
        >
          ◀
        </button>

        <div key={i} className="fade-up min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <a
              href={p.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group text-lg font-semibold text-fg transition-colors hover:text-accent"
            >
              <span aria-hidden className="text-accent">
                ▸{" "}
              </span>
              {p.title}
              {external && (
                <span
                  aria-hidden
                  className="ml-1 text-xs text-muted transition-colors group-hover:text-accent"
                >
                  ↗
                </span>
              )}
            </a>
            <span className="text-sm text-muted">{p.titleEn}</span>
          </div>

          <p className="mt-2 pl-5 text-[15px] leading-relaxed text-fg/85">{p.blurb}</p>
          <p className="mt-3 pl-5 text-xs text-muted">
            <span className="text-green/70">tags </span>
            {p.tags.join(" · ")}
          </p>
          <p className="mt-2 pl-5 text-xs text-muted">◆ {p.meta}</p>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="下一个项目"
          className="mt-1 shrink-0 text-2xl leading-none text-accent transition-opacity hover:opacity-60"
        >
          ▶
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-sm text-muted">
          {i + 1} / {count}
        </span>
        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`第 ${idx + 1} 个项目`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-6 bg-accent" : "w-1.5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
        <span className="ml-auto text-xs text-muted">← → 切换</span>
      </div>
    </div>
  );
}
