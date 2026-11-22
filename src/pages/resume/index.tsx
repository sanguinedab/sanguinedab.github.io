import { Link } from "react-router";
import { FaArrowLeft, FaPrint } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { personalProjects, workProjects } from "@/data/workProjects";

const SUMMARY =
  "5 年后端与 DevOps 经验：从统一身份认证、DevOps 告警、AIGC、工业质检一路做到 Kubernetes 训练平台；目前负责企业 RAG 问答平台的架构、开发与交付。熟悉 Go / Python、Kubernetes、可观测性与 CI/CD，近期专注 AI Agent 与 MCP 落地。";

function contactLinks() {
  const links: { label: string; href?: string }[] = [
    { label: profile.location },
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: "github.com/sanguinedab", href: "https://github.com/sanguinedab" },
    { label: "reason2m.com", href: "https://reason2m.com" },
  ];
  return links.filter((item) => item.label);
}

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

  const work = workProjects;
  const personal = personalProjects;

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
        <article className="resume-sheet mx-auto w-full bg-white px-10 py-10 shadow-xl print:px-0 print:py-0 print:shadow-none">
          <header className="border-b border-zinc-200 pb-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-1 text-base text-zinc-600">{profile.headline}</p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500">
                {contactLinks().map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="hover:text-zinc-900"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span key={item.label}>{item.label}</span>
                  ),
                )}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              {SUMMARY}
            </p>
          </header>

          <section className="mt-5">
            <h2 className="break-after-avoid border-b border-zinc-200 pb-1 text-sm font-semibold tracking-wider text-zinc-900">
              项目经历
            </h2>
            <div className="mt-4 space-y-4">
              {work.map((project) => (
                <ResumeItem key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h2 className="break-after-avoid border-b border-zinc-200 pb-1 text-sm font-semibold tracking-wider text-zinc-900">
              个人项目
            </h2>
            <div className="mt-4 space-y-4">
              {personal.map((project) => (
                <ResumeItem key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h2 className="break-after-avoid border-b border-zinc-200 pb-1 text-sm font-semibold tracking-wider text-zinc-900">
              技能
            </h2>
            <div className="mt-3 space-y-2">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className="grid grid-cols-[6.5rem_1fr] gap-3 text-sm"
                >
                  <div className="text-zinc-500">{group}</div>
                  <div className="text-zinc-800">
                    {items
                      .map((item) =>
                        item.proficiency
                          ? `${item.name}（${item.proficiency}）`
                          : item.name,
                      )
                      .join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-8 border-t border-zinc-200 pt-3 text-xs text-zinc-400">
            更新于 {new Date().toLocaleDateString("zh-CN")} · {profile.name}
          </footer>
        </article>
      </main>
    </div>
  );
}

function ResumeItem({
  project,
}: {
  project: (typeof workProjects)[number];
}) {
  return (
    <div className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[15px] font-semibold">{project.title}</h3>
        <span className="text-xs text-zinc-500">{project.period}</span>
      </div>
      <p className="text-xs text-zinc-500">{project.role}</p>
      {project.summary ? (
        <p className="mt-1 text-sm text-zinc-700">{project.summary}</p>
      ) : null}
      {project.points?.length ? (
        <ul className="mt-1 space-y-0.5">
          {project.points.slice(0, 3).map((point) => (
            <li
              key={point}
              className="flex gap-2 text-sm leading-relaxed text-zinc-700"
            >
              <span aria-hidden className="select-none text-zinc-400">
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
