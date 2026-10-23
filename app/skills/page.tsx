import { PageHeader } from "@/components/terminal/PageHeader";
import { skills } from "@/lib/md";

export default function SkillsPage() {
  return (
    <div className="pb-16 pt-14 md:pb-24 md:pt-20">
      <PageHeader title="技能" hint="skills" />
      <div className="space-y-4">
        {skills.map((g) => (
          <div
            key={g.group}
            className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <div className="w-24 shrink-0 text-sm font-semibold text-accent">
              <span aria-hidden className="text-muted">
                ▸{" "}
              </span>
              {g.group}
            </div>
            <div className="text-[15px] leading-relaxed text-fg/85">
              {g.items.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
