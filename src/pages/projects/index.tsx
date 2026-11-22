import type { ReactNode } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { FaWrench, FaCode, FaArrowUpRightFromSquare } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { personalProjects, workProjects } from "@/data/workProjects";
import type { ShowcaseProject } from "@/types/showcaseProject";
import { cn } from "@/lib/utils";

type TabKey = "work" | "personal";
type SortKey = "recent" | "oldest";

const SORTS: { value: SortKey; label: string }[] = [
  { value: "recent", label: "🕒 最近优先" },
  { value: "oldest", label: "📅 最早优先" },
];

const COVER_STYLES = [
  "from-emerald-950 via-teal-950 to-zinc-950",
  "from-zinc-900 via-emerald-950 to-teal-950",
  "from-teal-950 via-zinc-900 to-emerald-950",
  "from-emerald-900/80 via-zinc-950 to-teal-950",
];

// 用 period 的起始时间做排序（"2024.08 – 至今" -> "2024.08"）
const startOf = (period: string) => period.split("–")[0].trim();

export default function ProjectsPage() {
  usePageTitle("项目");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tab: TabKey =
    searchParams.get("tab") === "personal" ? "personal" : "work";
  const projects = tab === "work" ? workProjects : personalProjects;

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags ?? [])),
  ).sort();

  const tagParam = searchParams.get("tag");
  const sortParam = searchParams.get("sort");

  const activeTag =
    tagParam && allTags.includes(tagParam) ? tagParam : "all";
  const activeSort: SortKey = sortParam === "oldest" ? "oldest" : "recent";

  const updateParams = (next: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value === null) params.delete(key);
      else params.set(key, value);
    });
    navigate({ search: params.toString() }, { replace: true });
  };

  const switchTab = (next: TabKey) => {
    const params = new URLSearchParams(searchParams);
    params.delete("tab");
    params.delete("tag");
    params.delete("sort");
    if (next === "personal") params.set("tab", next);
    navigate({ search: params.toString() }, { replace: true });
  };

  const visible = projects
    .filter(
      (project) => activeTag === "all" || project.tags?.includes(activeTag),
    )
    .sort((a, b) => {
      const diff = startOf(b.period).localeCompare(startOf(a.period));
      return activeSort === "recent" ? diff : -diff;
    });

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
          <FaWrench />
          项目
        </div>

        <div
          role="tablist"
          aria-label="项目类型"
          className="mx-auto flex w-fit items-center gap-1 rounded-lg border bg-muted/40 p-1"
        >
          <TabButton
            active={tab === "work"}
            count={workProjects.length}
            onClick={() => switchTab("work")}
          >
            工作项目
          </TabButton>
          <TabButton
            active={tab === "personal"}
            count={personalProjects.length}
            onClick={() => switchTab("personal")}
          >
            个人项目
          </TabButton>
        </div>

        <div className="flex justify-between flex-wrap gap-2 items-center mx-2 sm:mx-6">
          {allTags.length > 0 ? (
            <div className="flex items-center gap-2">
              <label>按标签筛选：</label>
              <Select
                value={activeTag}
                onValueChange={(value) =>
                  updateParams({ tag: value === "all" ? null : value })
                }
              >
                <SelectTrigger className="w-[180px] cursor-pointer">
                  <SelectValue placeholder="标签" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">🏷️ 全部标签</SelectItem>
                  {allTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {activeTag !== "all" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateParams({ tag: null })}
                  className="px-2 text-sm cursor-pointer text-muted-foreground"
                >
                  清除筛选 ✕
                </Button>
              )}
            </div>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2">
            <label>排序：</label>
            <Select
              value={activeSort}
              onValueChange={(value) =>
                updateParams({ sort: value === "recent" ? null : value })
              }
            >
              <SelectTrigger className="w-[160px] cursor-pointer">
                <SelectValue placeholder="排序" />
              </SelectTrigger>
              <SelectContent>
                {SORTS.map((sort) => (
                  <SelectItem key={sort.value} value={sort.value}>
                    {sort.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        {visible.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 w-full gap-4 px-2 sm:px-6">
            {visible.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onTagClick={(tag) => updateParams({ tag })}
              />
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

function ProjectCard({
  project,
  onTagClick,
}: {
  project: ShowcaseProject;
  onTagClick: (tag: string) => void;
}) {
  const { title, period, role, summary, points, tags, cover, href } = project;
  const number = workProjects.findIndex((item) => item.title === title) + 1;
  const coverStyle =
    COVER_STYLES[(number > 0 ? number - 1 : 0) % COVER_STYLES.length];

  return (
    <Card className="rounded-md overflow-hidden gap-0 py-0 w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="relative aspect-3/2 w-full overflow-hidden lg:aspect-auto lg:w-72 lg:self-stretch">
          {cover ? (
            <img
              src={cover}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div
              className={cn(
                "relative flex h-full w-full flex-col justify-end overflow-hidden bg-gradient-to-br p-5",
                coverStyle,
              )}
            >
              {number > 0 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-6 text-[120px] font-black leading-none text-white/5 select-none"
                >
                  {String(number).padStart(2, "0")}
                </span>
              )}
              <div className="relative z-10 text-sm font-medium text-white/85">
                {title}
              </div>
            </div>
          )}
        </div>

        <div className="w-full border-t block lg:hidden" />
        <div className="h-full border-l hidden lg:block" />

        <div className="flex flex-1 flex-col gap-3 p-4 lg:p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold">{title}</h3>
                <span className="font-mono text-sm text-muted-foreground">
                  {period}
                </span>
              </div>
              {summary && (
                <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
              )}
            </div>
            <Badge variant="secondary" className="rounded-sm font-normal">
              {role}
            </Badge>
          </div>

          {points?.length ? (
            <ul className="space-y-1.5">
              {points.map((point) => (
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
          ) : null}

          {tags?.length ? (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant="secondary"
                  size="sm"
                  onClick={() => onTagClick(tag)}
                  className="rounded-sm cursor-pointer font-normal px-2 h-7.5 text-sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          ) : null}

          {href ? (
            <div className="pt-1">
              <Button asChild variant="outline" size="sm" className="gap-1.5">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  访问项目
                  <FaArrowUpRightFromSquare className="h-3 w-3" />
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
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
