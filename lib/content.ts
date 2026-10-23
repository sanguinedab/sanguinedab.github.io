// ============================================================
// 站点内容配置 —— 之后替换成你的真实资料，只改这一个文件即可
// ============================================================

export const site = {
  title: "linmo@portfolio",
  name: "林墨",
  nameEn: "LIN MO",
  monogram: "LM",
  role: "Go 后端工程师 · 全栈开发者",
  location: "上海 · 中国",
  handle: "@sanguinedab",
  email: "hello@linmo.dev",
};

// 左侧文件树菜单（href 对应各路由页面）
export const nav = [
  { href: "/", label: "个人信息", hint: "profile" },
  { href: "/about", label: "关于", hint: "about" },
  { href: "/skills", label: "技能", hint: "skills" },
  { href: "/experience", label: "经历", hint: "experience" },
  { href: "/projects", label: "项目", hint: "projects" },
  { href: "/contact", label: "联系", hint: "contact" },
];

export const hero = {
  greeting: "你好，我是",
  tagline: "Backend Engineer / Cloud Native",
  intro:
    "我用 Go 构建高性能、可扩展的后端服务，专注云原生与分布式系统，也喜欢折腾前端与开发者工具。",
};

export const stats = [
  { value: "6+", label: "年开发经验" },
  { value: "30+", label: "交付项目" },
  { value: "120+", label: "开源贡献" },
  { value: "99.9%", label: "服务可用性" },
];

export const about = {
  heading: "关于",
  paragraphs: [
    "我是一名专注后端的工程师，日常主力语言是 Go。过去六年里，我负责过消息队列、订单系统、实时推送等核心服务，习惯从稳定性和可观测性出发去设计系统。",
    "我相信好的软件是「简单、可维护、能扛住流量」的。工作之外，我维护着几个开源项目，也会写博客沉淀踩坑记录。",
  ],
  education: {
    school: "上海交通大学",
    degree: "计算机科学与技术 · 学士",
    period: "2014 – 2018",
  },
};

export const skills = [
  {
    group: "后端",
    items: ["Go", "gRPC", "微服务", "REST", "WebSocket", "Protobuf"],
  },
  {
    group: "数据",
    items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "ClickHouse"],
  },
  {
    group: "云原生",
    items: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana", "CI/CD"],
  },
  {
    group: "前端",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
];

export const experience = [
  {
    company: "星辰云科技",
    role: "高级后端工程师",
    period: "2021.06 – 至今",
    summary: "负责消息队列与流计算平台",
    points: [
      "负责消息队列与流计算平台，支撑日处理 40 亿+ 消息，峰值 QPS 突破 10w",
      "主导核心服务 Go 微服务化重构，P99 延迟下降 60%，故障恢复时间缩短一半",
      "搭建可观测性体系，链路追踪与告警覆盖全部核心链路",
    ],
    tags: ["Go", "Kafka", "Kubernetes", "gRPC"],
  },
  {
    company: "泛舟科技",
    role: "后端工程师",
    period: "2019.07 – 2021.05",
    summary: "订单与交易系统",
    points: [
      "负责订单系统微服务拆分与去单体化，大促期间稳定扛住 5 倍流量洪峰",
      "引入 gRPC 与服务网格，跨服务调用 P99 延迟显著下降",
      "设计幂等与最终一致性方案，保障交易链路数据准确",
    ],
    tags: ["Go", "MySQL", "Redis", "Istio"],
  },
  {
    company: "青柠网络",
    role: "全栈开发",
    period: "2018.07 – 2019.06",
    summary: "内部平台从 0 到 1",
    points: [
      "从 0 到 1 搭建内部运营平台（Go + React），服务多个业务团队",
      "落地 CI/CD 流水线，发布效率与稳定性大幅提升",
    ],
    tags: ["Go", "React", "Docker", "CI/CD"],
  },
];

export const projects = [
  {
    title: "gorun",
    titleEn: "分布式任务调度框架",
    blurb: "基于 Go 的轻量级分布式任务调度，支持 cron、分布式锁与失败重试。",
    tags: ["Go", "etcd", "gRPC"],
    meta: "开源 · GitHub 2.1k stars",
    href: "https://github.com/sanguinedab",
  },
  {
    title: "Nova Gateway",
    titleEn: "高性能 RPC 网关",
    blurb: "自研 API 网关，统一鉴权、限流与熔断，单机支撑 10w QPS。",
    tags: ["Go", "gRPC", "Redis"],
    meta: "企业级 · 生产在跑",
    href: "#",
  },
  {
    title: "Pulse",
    titleEn: "实时行情推送",
    blurb: "基于 WebSocket 的低延迟行情推送服务，端到端延迟低于 50ms。",
    tags: ["Go", "WebSocket", "Kafka"],
    meta: "低延迟 · 高并发",
    href: "#",
  },
  {
    title: "Linlog",
    titleEn: "个人博客与工具站",
    blurb: "记录技术笔记与效率工具，本站就是用它跑起来的。",
    tags: ["Next.js", "Tailwind", "MDX"],
    meta: "本站 · 持续更新",
    href: "#",
  },
];

export const contact = {
  heading: "一起做点有意思的事",
  sub: "我在寻找新的机会与合作，欢迎来聊聊后端、云原生，或者任何有趣的项目。",
  email: "hello@linmo.dev",
};

export const socials = [
  { label: "GitHub", handle: "@sanguinedab", href: "https://github.com/sanguinedab" },
  { label: "邮箱", handle: "hello@linmo.dev", href: "mailto:hello@linmo.dev" },
  { label: "博客", handle: "linmo.dev", href: "#" },
];
