import { useRef, useState } from "react";
import type { ChangeEvent, ComponentType, ReactNode } from "react";
import { Link } from "react-router";
import {
  FaArrowLeft,
  FaBriefcase,
  FaDiagramProject,
  FaEye,
  FaGlobe,
  FaGraduationCap,
  FaImage,
  FaLaptopCode,
  FaLocationDot,
  FaPen,
  FaPhone,
  FaPrint,
  FaRegEnvelope,
  FaRotateLeft,
  FaScrewdriverWrench,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { projectDetails } from "@/data/projectDetails";
import { skills } from "@/data/skills";
import { workExperience } from "@/data/workExperience";
import { personalProjects, workProjects } from "@/data/workProjects";
import "./resume.css";

const CONTACTS = [
  { icon: FaPhone, text: "138 0000 0000" },
  { icon: FaLocationDot, text: profile.location },
  { icon: FaRegEnvelope, text: profile.email, href: `mailto:${profile.email}` },
  {
    icon: FaGlobe,
    text: "sanguinedab.github.io",
    href: "https://sanguinedab.github.io",
  },
];

export default function ResumePage() {
  usePageTitle("简历");

  const sheetRef = useRef<HTMLElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState(true);
  const [avatar, setAvatar] = useState(profile.profileImage);

  const printSheet = () => {
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

  const handlePrint = () => {
    // 先退出编辑态再打印，避免个别浏览器在 contentEditable 状态下漏渲染内容
    if (editing) {
      setEditing(false);
      window.setTimeout(printSheet, 120);
    } else {
      printSheet();
    }
  };

  const handleAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setAvatar(URL.createObjectURL(file));
    event.target.value = "";
  };

  return (
    <div className="resume-page min-h-screen bg-white text-zinc-900 print:bg-white">
      <div className="no-print sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-2 px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            返回首页
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden text-xs text-zinc-500 lg:inline">
              直接点文字修改，内容只留在本地，不会上传
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setEditing((value) => !value)}
              className="gap-1.5"
            >
              {editing ? (
                <>
                  <FaEye className="h-3.5 w-3.5" />
                  预览
                </>
              ) : (
                <>
                  <FaPen className="h-3.5 w-3.5" />
                  编辑
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileRef.current?.click()}
              className="gap-1.5"
            >
              <FaImage className="h-3.5 w-3.5" />
              头像
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => window.location.reload()}
              className="gap-1.5"
            >
              <FaRotateLeft className="h-3.5 w-3.5" />
              重置
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handlePrint}
              className="gap-1.5"
            >
              <FaPrint className="h-3.5 w-3.5" />
              导出 PDF
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatar}
            />
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[210mm] px-4 py-8 print:p-0">
        <article
          ref={sheetRef}
          contentEditable={editing}
          suppressContentEditableWarning
          onClick={(event) => {
            if (editing && (event.target as HTMLElement).closest("a")) {
              event.preventDefault();
            }
          }}
          className={`resume-sheet mx-auto w-full border border-zinc-200 bg-white px-10 py-9 text-zinc-900 shadow-sm print:border-0 print:px-0 print:py-0 print:shadow-none ${
            editing ? "resume-editable" : ""
          }`}
        >
          <header className="flex flex-col gap-5 border-b border-zinc-200 pb-5 sm:flex-row sm:items-center">
            <div
              contentEditable={false}
              className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-zinc-100 bg-zinc-50"
            >
              <img
                src={avatar}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {profile.headline}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-zinc-600">
                {CONTACTS.map((item) => (
                  <span key={item.text} className="inline-flex items-center gap-1.5">
                    <item.icon className="h-3.5 w-3.5 text-zinc-400" />
                    {item.href ? (
                      <a href={item.href} className="hover:text-zinc-900">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <Section icon={FaGraduationCap} title="教育经历">
            <div className="space-y-3">
              {education.map((item) => (
                <div
                  key={`${item.school}-${item.years}`}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <div>
                    <div className="text-[15px] font-semibold">{item.school}</div>
                    <div className="text-sm text-zinc-500">{item.degree}</div>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    {item.years}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={FaBriefcase} title="工作经历">
            <div className="space-y-3.5">
              {workExperience.map((item) => (
                <div key={`${item.company}-${item.years}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[15px] font-semibold">{item.company}</h3>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.years}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">
                    {item.title}
                    {item.department ? ` · ${item.department}` : ""}
                  </p>
                  {item.points?.length ? (
                    <ul className="mt-1.5 space-y-1">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-[13px] leading-snug text-zinc-700"
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
              ))}
            </div>
          </Section>

          <Section icon={FaDiagramProject} title="项目经历">
            <div className="space-y-3.5">
              {workProjects.map((project) => (
                <ProjectItem key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section icon={FaLaptopCode} title="个人项目">
            <div className="space-y-3.5">
              {personalProjects.map((project) => (
                <ProjectItem key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section icon={FaScrewdriverWrench} title="技能">
            <div className="space-y-2.5">
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
                          <span className="text-zinc-500">
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
            <span>{profile.name} · 简历</span>
          </footer>
        </article>
      </main>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-5">
      <div className="mb-4 flex items-center rounded-full bg-zinc-100 p-1.5">
        <div className="flex items-center gap-2 rounded-full bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white">
          <Icon className="h-4 w-4" />
          {title}
        </div>
      </div>
      {children}
    </section>
  );
}

function ProjectItem({
  project,
}: {
  project: (typeof workProjects)[number];
}) {
  return (
    <div className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[15px] font-semibold">{project.title}</h3>
        <span className="font-mono text-xs text-zinc-500">
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
          {project.points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-[13px] leading-snug text-zinc-700"
            >
              <span aria-hidden className="select-none text-zinc-400">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {project.slug ? (
        <div className="mt-2 space-y-1">
          {projectDetails[project.slug]?.capabilities.map((capability) => (
            <p
              key={capability.title}
              className="text-[12.5px] leading-snug text-zinc-700"
            >
              <span className="font-semibold text-zinc-800">
                {capability.title}
              </span>
              ：{capability.points.join("；")}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
