import type { ComponentType } from "react";
import { Link, useParams } from "react-router";
import {
  FaArrowLeft,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaSitemap,
  FaStar,
} from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { projectDetails } from "@/data/projectDetails";
import { personalProjects, workProjects } from "@/data/workProjects";

const CAPABILITY_ICONS: Record<string, ComponentType<{ className?: string }>> =
  {
    系统架构: FaSitemap,
    功能设计: FaLayerGroup,
    代码开发: FaCode,
    运维部署: FaServer,
  };

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = [...workProjects, ...personalProjects].find(
    (item) => item.slug === slug,
  );
  const detail = slug ? projectDetails[slug] : undefined;

  usePageTitle(project?.title ?? "项目详情");

  if (!project || !detail) {
    return (
      <div className="flex flex-col items-center gap-4 py-24 text-center">
        <p className="text-lg font-medium">项目不存在</p>
        <Button asChild variant="outline" size="sm">
          <Link to="/projects">返回项目列表</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 pb-10">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <FaArrowLeft className="h-3.5 w-3.5" />
        返回项目
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <Badge variant="secondary" className="rounded-sm font-normal">
            {project.role}
          </Badge>
          {project.featured ? (
            <Badge className="gap-1 rounded-sm border-transparent bg-emerald-500/15 text-emerald-400">
              <FaStar className="h-3 w-3" />
              重点项目
            </Badge>
          ) : null}
        </div>
        <p className="font-mono text-sm text-muted-foreground">
          {project.period}
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          {detail.intro}
        </p>
        {project.tags?.length ? (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </header>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">三个阶段</h2>
        <ol className="relative space-y-6 border-l pl-6">
          {detail.phases.map((phase) => (
            <li key={phase.period} className="relative">
              <span
                aria-hidden
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {phase.period}
                </span>
                <h3 className="font-semibold">{phase.title}</h3>
              </div>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {phase.summary}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">架构与交付</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {detail.capabilities.map((capability) => {
            const Icon = CAPABILITY_ICONS[capability.title] ?? FaSitemap;
            return (
              <Card key={capability.title} className="gap-3 p-5">
                <div className="flex items-center gap-2 font-semibold">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {capability.title}
                </div>
                <ul className="space-y-1.5">
                  {capability.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-foreground/90"
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
              </Card>
            );
          })}
        </div>
      </section>

      <div className="pt-2">
        <Button asChild variant="ghost" size="sm" className="gap-1.5">
          <Link to="/projects">
            <FaArrowLeft className="h-3.5 w-3.5" />
            返回项目列表
          </Link>
        </Button>
      </div>
    </div>
  );
}
