import { FaGithub, FaRegEnvelope } from "react-icons/fa6";

export const profile = {
  name: `sanguinedab`,
  headline: `后端工程师 · DevOps · AI Agent`,
  email: `hello@example.com`,
  location: `上海 · 中国`,
  profileImage: `https://github.com/sanguinedab.png`,
  links: [
    {
      name: `GitHub`,
      url: `https://github.com/sanguinedab`,
      icon: FaGithub
    },
    {
      name: `邮箱`,
      url: `mailto:hello@example.com`,
      icon: FaRegEnvelope
    }
  ],
  biography: `5 年后端与 DevOps 经验，做过统一身份认证、DevOps 告警平台、AIGC 图像生成和工业瑕疵检测，也做过 Kubernetes 分布式训练平台与具身机器人复现。
目前在做企业 RAG 问答平台，负责后端架构、微服务、GitOps / CI/CD、MCP 工具集成与自动化交付；日常用 Go 和 Python，熟悉 Kubernetes、可观测性与云原生这套技术栈。
<div class="my-2"></div>
我相信工程师的价值在于把一件事从头到尾跑通：设计、开发、部署、观测。`
};