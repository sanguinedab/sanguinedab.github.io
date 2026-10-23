import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import type { Profile, Project, SkillGroup } from "./types";

const contentDir = path.join(process.cwd(), "content");
const md = new MarkdownIt({ html: false, linkify: true });

function read(name: string) {
  const raw = fs.readFileSync(path.join(contentDir, name), "utf8");
  return matter(raw);
}

// 个人信息（frontmatter 存结构化字段，正文存简介 Markdown）
const { data: p, content: intro } = read("profile.md");
export const profile: Profile = {
  name: p.name ?? "",
  nameEn: p.nameEn ?? "",
  monogram: p.monogram ?? "",
  role: p.role ?? "",
  location: p.location ?? "",
  handle: p.handle ?? "",
  email: p.email ?? "",
  greeting: p.greeting ?? "",
  summary: p.summary ?? "",
  stats: Array.isArray(p.stats)
    ? p.stats.map((s: any) => ({
        value: String(s.value ?? ""),
        label: String(s.label ?? ""),
      }))
    : [],
  introHtml: md.render(intro.trim()),
};

// 技能
const { data: sk } = read("skills.md");
export const skills: SkillGroup[] = Array.isArray(sk.groups)
  ? sk.groups.map((g: any) => ({
      group: String(g.group ?? ""),
      items: Array.isArray(g.items) ? g.items.map((it: any) => String(it)) : [],
    }))
  : [];

// 项目
const { data: pr } = read("projects.md");
export const projects: Project[] = Array.isArray(pr.projects)
  ? pr.projects.map((x: any) => ({
      title: String(x.title ?? ""),
      titleEn: String(x.titleEn ?? ""),
      blurb: String(x.blurb ?? ""),
      tags: Array.isArray(x.tags) ? x.tags.map((t: any) => String(t)) : [],
      meta: String(x.meta ?? ""),
      href: String(x.href ?? "#"),
    }))
  : [];

// 经历（正文是一篇 Markdown 叙述）
const { content: exp } = read("experience.md");
export const experienceHtml = md.render(exp.trim());
