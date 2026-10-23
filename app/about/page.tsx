import { PageHeader } from "@/components/terminal/PageHeader";
import { about } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="pb-16 pt-14 md:pb-24 md:pt-20">
      <PageHeader title={about.heading} hint="about" />
      <div className="space-y-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-fg/85">
            {p}
          </p>
        ))}
        <p className="pt-2 text-sm text-fg/80">
          <span className="text-green/70">education </span>
          <span className="text-muted">:: </span>
          {about.education.school} · {about.education.degree} · {about.education.period}
        </p>
      </div>
    </div>
  );
}
