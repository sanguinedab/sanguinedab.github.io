import { PageHeader } from "@/components/terminal/PageHeader";
import { experience } from "@/lib/content";

export default function ExperiencePage() {
  return (
    <div className="pb-16 pt-14 md:pb-24 md:pt-20">
      <PageHeader title="经历" hint="experience" />
      <div className="space-y-10">
        {experience.map((e) => (
          <div key={e.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-fg">
                <span aria-hidden className="text-accent">
                  ▸{" "}
                </span>
                {e.role} <span className="font-normal text-accent/90">@ {e.company}</span>
              </h3>
              <span className="text-xs text-muted">{e.period}</span>
            </div>
            <p className="mt-1 pl-5 text-sm text-muted">— {e.summary}</p>
            <ul className="mt-3 space-y-1.5 pl-5 text-[15px] leading-relaxed text-fg/85">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-muted">
                    -
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 pl-5 text-xs text-muted">
              <span className="text-green/70">tags </span>
              {e.tags.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
