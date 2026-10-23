"use client";

import { useEffect, useState } from "react";
import { hero, site, stats } from "@/lib/content";

function useTypewriter(lines: string[], speed = 55, lineDelay = 420) {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDone([...lines]);
      return;
    }

    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      if (li >= lines.length) return;
      const line = lines[li];
      if (ci < line.length) {
        ci += 1;
        setDone([...lines.slice(0, li), line.slice(0, ci)]);
        timer = setTimeout(tick, speed);
      } else {
        li += 1;
        ci = 0;
        setDone(lines.slice(0, li));
        timer = setTimeout(tick, lineDelay);
      }
    };

    timer = setTimeout(tick, 250);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return done;
}

export function Hero() {
  const typed = useTypewriter([site.nameEn, site.role]);
  const active = Math.max(typed.length - 1, 0);

  return (
    <section id="profile" className="pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="flex items-start gap-5 md:gap-8">
        <div className="glow hidden h-20 w-20 shrink-0 items-center justify-center rounded border border-line bg-panel text-3xl font-bold text-accent sm:flex">
          {site.monogram}
        </div>
        <div className="min-w-0">
          <p className="mb-3 text-sm text-muted">{hero.greeting}</p>
          <h1 className="glow text-4xl font-bold leading-tight tracking-tight text-fg md:text-6xl">
            {typed[0] ?? ""}
            {active === 0 && <span className="cursor-blink ml-1 text-accent">▌</span>}
          </h1>
          <p className="glow mt-3 text-lg text-accent md:text-2xl">
            {typed[1] ?? ""}
            {active === 1 && <span className="cursor-blink ml-1">▌</span>}
          </p>

          <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-fg/75">
            <span>[ {site.location} ]</span>
            <span>[ {site.handle} ]</span>
            <a
              href={`mailto:${site.email}`}
              className="text-accent/85 transition-colors hover:text-accent"
            >
              [ {site.email} ]
            </a>
          </p>

          <p className="mt-3 text-xs text-green/80">
            <span className="glow-green">[ ok ]</span> profile loaded · open to work
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-fg/85">{hero.intro}</p>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
        {stats.map((s) => (
          <span key={s.label} className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-accent">{s.value}</span>
            <span className="text-sm text-muted">// {s.label}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
