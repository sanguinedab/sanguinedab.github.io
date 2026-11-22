import type { ReactNode } from "react";
import { Link } from "react-router";
import {
  FaArrowLeft,
  FaGithub,
  FaGlobe,
  FaLocationDot,
  FaPrint,
  FaRegEnvelope,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { personalProjects, workProjects } from "@/data/workProjects";

const SUMMARY =
  "5 年服务端与 DevOps 经验：从统一身份认证、DevOps 告警、AIGC、工业质检一路做到 Kubernetes 训练平台；目前负责企业 RAG 问答平台的架构、开发与交付。熟悉 Go / Python、Kubernetes、可观测性与 CI/CD，近期专注 AI Agent 与 MCP 落地。";

const HIGHLIGHTS = ["5 年经验", "Go / Python", "Kubernetes", "CI/CD", "AI Agent"];

const CONTACTS = [
  { icon: FaLocationDot, text: profile.location },
  { icon: FaRegEnvelope, text: profile.email, href: `mailto:${profile.email}` },
  {
    icon: FaGithub,
    text: "github.com/sanguinedab",
    href: "https://github.com/sanguinedab",
  },
  { icon: FaGlobe, text: "reason2m.com", href: "https://reason2m.com" },
];

export default function ResumePage() {
  usePageTitle("简历");

  const handlePrint = () => {
    const previousTitle = document.title;
    document.title = `${profile.name}-简历`;
    const restore = () => {
      document.title = previousTitle;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
    window.setTimeout(restore, 1500);
  };

  return (
    <div className="resume-page min-h-screen bg-zinc-100 text-zinc-900 print:bg-white">
      <div className="no-print sticky top-0 z-10 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            返回首页
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-zinc-500 sm:inline">
              在打印对话框里选择「另存为 PDF」
            </span>
            <Button type="button" size="sm" onClick={handlePrint} className="gap-1.5">
              <FaPrint className="h-3.5 w-3.5" />
              导出 PDF
            </Button>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[210mm] px-4 py-8 print:p-0">
        <article className="resume-sheet mx-auto w-full bg-white px-8 py-8 shadow-xl print:px-0 print:py-0 print:shadow-none">
          <header className="rounded-xl bg-slate-900 px-7 py-6 text-white">
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
              <div className="min-w-0">
                <h1 className="text-4xl font-bold tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-1.5 text-sm font-medium tracking-wide text-emerald-400">
                  {profile.headline}
                </p>
                <p className="mt-4 max-w-xl text-[12.5px] leading-snug text-slate-300">
                  {SUMMARY}
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300">
                {CONTACTS.map((item) => (
                  <li key={item.text} className="flex items-center gap-2">
                    <item.icon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    {item.href ? (
                      <a href={item.href} className="hover:text-white">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>

          <Section index="01" title="项目经历" className="mt-5">
            <div className="mt-4 space-y-4 border-l border-zinc-200 pl-6">
              {workProjects.map((project) => (
                <TimelineItem key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section index="02" title="个人项目" className="mt-5">
            <div className="mt-3 space-y-3">
              {personalProjects.map((project) => (
                <div
                  key={project.title}
                  className="break-inside-avoid rounded-lg border border-zinc-200 bg-zinc-50/60 px-5 py-3.5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[15px] font-semibold">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-emerald-600">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">{project.role}</p>
                  {project.summary ? (
                    <p className="mt-1 text-sm text-zinc-700">
                      {project.summary}
                    </p>
                  ) : null}
                  <ul className="mt-1.5 space-y-1">
                    {project.points?.slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[12.5px] leading-snug text-zinc-700"
                      >
                        <span aria-hidden className="select-none text-emerald-500">
                          ▸
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section index="03" title="技能" className="mt-5">
            <div className="mt-3 space-y-2.5">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className="grid break-inside-avoid grid-cols-[5.5rem_1fr] items-start gap-3"
                >
                  <div className="pt-0.5 text-xs font-medium text-zinc-500">
                    {group}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item.name}
                        className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs text-zinc-700"
                      >
                        {item.name}
                        {item.proficiency ? (
                          <span className="text-emerald-600">
                            {" "}
                            · {item.proficiency}
                          </span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <footer className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-3 text-[11px] text-zinc-400">
            <span>更新于 {new Date().toLocaleDateString("zh-CN")}</span>
            <span>{profile.name} · 简历</span>
          </footer>
        </article>
      </main>
    </div>
  );
}

function Section({
  index,
  title,
  className,
  children,
}: {
  index: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="flex items-baseline gap-3 border-b border-zinc-900/10 pb-2">
        <span className="font-mono text-xs font-semibold text-emerald-600">
          {index}
        </span>
        <h2 className="text-base font-bold tracking-wide">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function TimelineItem({
  project,
}: {
  project: (typeof workProjects)[number];
}) {
  return (
    <div className="relative break-inside-avoid">
      <span
        aria-hidden
        className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900 ring-4 ring-white"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[15px] font-semibold">{project.title}</h3>
        <span className="font-mono text-xs text-emerald-600">
          {project.period}
        </span>
      </div>
      <p className="text-[11px] uppercase tracking-wider text-zinc-500">
        {project.role}
      </p>
      {project.summary ? (
        <p className="mt-1 text-[13px] text-zinc-700">{project.summary}</p>
      ) : null}
      {project.points?.length ? (
        <ul className="mt-1.5 space-y-1">
          {project.points.slice(0, 3).map((point) => (
            <li
              key={point}
              className="flex gap-2 text-[12.5px] leading-snug text-zinc-700"
            >
              <span aria-hidden className="select-none text-emerald-500">
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
