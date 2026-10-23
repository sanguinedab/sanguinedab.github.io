import { PageHeader } from "@/components/terminal/PageHeader";
import { experienceHtml } from "@/lib/md";

export default function ExperiencePage() {
  return (
    <div className="pb-16 pt-14 md:pb-24 md:pt-20">
      <PageHeader title="经历" hint="experience" />
      <div
        className="md max-w-3xl text-[15px] leading-relaxed text-fg/85"
        dangerouslySetInnerHTML={{ __html: experienceHtml }}
      />
    </div>
  );
}
