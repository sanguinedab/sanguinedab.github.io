import { PageHeader } from "@/components/terminal/PageHeader";
import { ProjectsView } from "@/components/terminal/ProjectsView";

export default function ProjectsPage() {
  return (
    <div className="pb-16 pt-14 md:pb-24 md:pt-20">
      <PageHeader title="项目" hint="projects" />
      <ProjectsView />
    </div>
  );
}
