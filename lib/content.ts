// ============================================================
// 非 Markdown 的站点配置：菜单、经历、联系
// （个人信息 / 技能 / 项目 请编辑 content/ 目录下的 .md 文件）
// ============================================================

// 左侧文件树菜单（href 对应各路由页面）
export const nav = [
  { href: "/", label: "首页", hint: "hi" },
  { href: "/profile", label: "个人信息", hint: "profile" },
  { href: "/skills", label: "技能", hint: "skills" },
  { href: "/experience", label: "经历", hint: "experience" },
  { href: "/projects", label: "项目", hint: "projects" },
  { href: "/contact", label: "联系", hint: "contact" },
];

// 经历已移至 content/experience.md（渲染为叙事正文）

export const contact = {
  heading: "一起做点有意思的事",
  sub: "我在寻找新的机会与合作，欢迎来聊聊后端、云原生，或者任何有趣的项目。",
};

export const socials = [
  { label: "GitHub", handle: "@sanguinedab", href: "https://github.com/sanguinedab" },
  { label: "邮箱", handle: "hello@linmo.dev", href: "mailto:hello@linmo.dev" },
  { label: "博客", handle: "linmo.dev", href: "#" },
];
