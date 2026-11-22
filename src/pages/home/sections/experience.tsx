import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { education } from "@/data/education";
import { workExperience } from "@/data/workExperience";

export default function ExperienceSection() {
  return (
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
      <Card className="gap-0 p-6">
        <div className="flex items-center gap-2 text-base font-semibold">
          <FaGraduationCap className="h-4 w-4 text-emerald-400" />
          教育经历
        </div>

        <div className="mt-5 space-y-5">
          {education.map((item) => (
            <TimelineItem
              key={`${item.school}-${item.years}`}
              title={item.school}
              period={item.years}
              subtitle={item.degree}
              points={item.points}
            />
          ))}
        </div>
      </Card>

      <Card className="gap-0 p-6">
        <div className="flex items-center gap-2 text-base font-semibold">
          <FaBriefcase className="h-4 w-4 text-emerald-400" />
          工作经历
        </div>

        <div className="mt-5 space-y-5">
          {workExperience.map((item) => (
            <TimelineItem
              key={`${item.company}-${item.years}`}
              title={item.company}
              period={item.years}
              subtitle={item.title}
              points={item.points}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

function TimelineItem({
  title,
  period,
  subtitle,
  points,
}: {
  title: string;
  period: string;
  subtitle: string;
  points?: string[];
}) {
  return (
    <div className="relative border-l border-border pl-5">
      <span
        aria-hidden
        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-card"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-semibold">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {points?.length ? (
        <ul className="mt-2 space-y-1">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-[13px] leading-relaxed text-foreground/85"
            >
              <span aria-hidden className="select-none text-muted-foreground">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
