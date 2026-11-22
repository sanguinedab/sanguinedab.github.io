import type { ComponentType } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

import { education } from "@/data/education";
import { workExperience } from "@/data/workExperience";

type TimelineEntry = {
  title: string;
  period: string;
  subtitle: string;
  points?: string[];
};

export default function ExperienceSection() {
  return (
    <div className="space-y-14">
      <TimelineGroup
        icon={FaGraduationCap}
        title="教育经历"
        entries={education.map((item) => ({
          title: item.school,
          period: item.years,
          subtitle: item.degree,
        }))}
      />

      <TimelineGroup
        icon={FaBriefcase}
        title="工作经历"
        entries={workExperience.map((item) => ({
          title: item.company,
          period: item.years,
          subtitle: item.title,
          points: item.points,
        }))}
      />
    </div>
  );
}

function TimelineGroup({
  icon: Icon,
  title,
  entries,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  entries: TimelineEntry[];
}) {
  return (
    <section className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-2xl font-semibold">
        <Icon className="text-primary" />
        {title}
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="relative space-y-8 border-l border-border pl-6">
          {entries.map((entry) => (
            <div key={`${entry.title}-${entry.period}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-black ring-2 ring-white/25"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{entry.title}</h3>
                <span className="font-mono text-sm text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {entry.subtitle}
              </p>
              {entry.points?.length ? (
                <ul className="mt-2 space-y-1">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden
                        className="select-none text-muted-foreground"
                      >
                        ▸
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
