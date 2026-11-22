import type { ReactNode } from "react";
import { useSearchParams } from "react-router";
import { FaWrench, FaCode, FaLink } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { personalProjects, workProjects } from "@/data/workProjects";
import type { ShowcaseProject } from "@/types/showcaseProject";
import { cn } from "@/lib/utils";

type TabKey = "work" | "personal";

export default function ProjectsPage() {
  usePageTitle("Projects");

  const [searchParams, setSearchParams] = useSearchParams();
  const tab: TabKey =
    searchParams.get("tab") === "personal" ? "personal" : "work";

  const setTab = (next: TabKey) => {
    const params = new URLSearchParams(searchParams);
    if (next === "work") params.delete("tab");
    else params.set("tab", next);
    setSearchParams(params, { replace: true });
  };

  const projects = tab === "work" ? workProjects : personalProjects;

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
          <FaWrench />
          Projects
        </div>

        <div
          role="tablist"
          aria-label="项目类型"
          className="mx-auto flex w-fit items-center gap-1 rounded-lg border bg-muted/40 p-1"
        >
          <TabButton
            active={tab === "work"}
            count={workProjects.length}
            onClick={() => setTab("work")}
          >
            工作项目
          </TabButton>
          <TabButton
            active={tab === "personal"}
            count={personalProjects.length}
            onClick={() => setTab("personal")}
          >
            个人项目
          </TabButton>
        </div>

        {projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count: number;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-colors",
        active
          ? "bg-background font-medium text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
      <span className="text-xs text-muted-foreground">{count}</span>
    </button>
  );
}

function ProjectCard({ project }: { project: ShowcaseProject }) {
  const { title, period, role, summary, points, tags, href } = project;

  return (
    <Card className="gap-0 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="font-mono text-sm text-muted-foreground">
          {period}
        </span>
        <Badge variant="secondary" className="rounded-sm font-normal">
          {role}
        </Badge>
      </div>

      <h3 className="mt-2 text-lg font-semibold tracking-tight">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
          >
            {title}
            <FaLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        ) : (
          title
        )}
      </h3>

      {summary && (
        <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
      )}

      {points?.length ? (
        <ul className="mt-3 space-y-1.5">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-sm leading-relaxed text-foreground/90"
            >
              <span aria-hidden className="select-none text-muted-foreground">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

function EmptyState() {
  return (
    <Card className="items-center justify-center gap-3 py-16 text-center">
      <FaCode className="h-8 w-8 text-muted-foreground" aria-hidden />
      <p className="font-medium">个人项目整理中</p>
      <p className="max-w-sm text-sm text-muted-foreground">
        开源项目和 side project 稍后补充，先看看工作项目吧。
      </p>
    </Card>
  );
}
