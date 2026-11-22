import type { ShowcaseProject } from "@/types/showcaseProject";

// 工作项目：按时间倒序。个人项目在下方 personalProjects 中补充。
export const workProjects: ShowcaseProject[] = [
  {
    title: "企业 RAG 问答平台",
    period: "2024.08 – 至今",
    role: "DevOps",
    tags: ["RAG", "MCP", "Kubernetes", "GitOps", "Helm"],
    points: [
      "负责平台后端架构设计，涵盖代码模块拆分与开发、微服务部署，保障系统的稳定性与可扩展性",
      "基于开源 AI Workflow 框架二次开发，落地 RAG 检索增强相关流程",
      "实现多租户、RBAC 权限管理、用户认证、文档入库、许可证签发等核心业务逻辑",
      "扩展工具调用模块，完成 MCP 集成并支持 MCP Server 对外暴露",
      "参与线上问题排查、性能调优与客户支持，持续改善系统表现",
      "从零搭建团队 GitOps 体系与 CI/CD 流程",
      "基于 cloud-init 制作基础 ISO 镜像，结合 Helm Charts 实现客户环境自动化交付",
    ],
  },
  {
    title: "分布式模型训练平台",
    period: "2024.03 – 2024.07",
    role: "DevOps",
    tags: ["Kubernetes", "Ansible", "RDMA", "Ceph", "可观测性"],
    points: [
      "基于 Ansible 实现一键部署：覆盖 Kubernetes 集群、显卡与网卡驱动、container-runtime、存储引擎、ingress-controller、Harbor、Prometheus、MetalLB 等基础组件及训练平台服务，简化部署流程并提升交付效率",
      "调研并设计 NFS、BeeGFS、CephFS 等分布式存储方案，通过 StorageClass + provisioner/CSI 自动管理 PVC，优化存储管理",
      "基于 Multus + Calico + RDMA + Whereabouts 构建管理网与计算网分离的网络分层，使训练任务独享 RDMA 高速网络",
      "使用 Grafana + Prometheus + Exporter 搭建监控体系，实时观测集群节点、网络与算力资源的状态和性能",
      "采用 Grafana + Loki + Promtail 构建日志系统，实现日志的集中收集与可视化分析",
      "负责集群日常维护与治理，保障集群的稳定性与安全性",
      "实现多级租户管理，支持用户隔离与资源分配",
      "通过 Pod 亲和性调度结合 RDMA 网卡优化 GPU 训练性能",
    ],
  },
  {
    title: "Aloha 机器人原型复现",
    period: "2024.01 – 2024.03",
    role: "开发",
    tags: ["ROS2", "Python", "具身智能"],
    summary: "复现具身机器人论文项目 Mobile ALOHA",
    points: [
      "调研具身机器人技术方案，搭建机械臂、摄像头、控制面板等实验场景",
      "改造项目源码以适配 UR5 机械臂，基于 ROS2 实现机械臂与相机控制",
      "对时间片动作做加权平均以提升精度、降低累计误差，在 20–50 次训练集下保持 70% 成功率，并具备一定泛化性",
    ],
  },
  {
    title: "智能瑕疵检测系统",
    period: "2023.06 – 2024.03",
    role: "后端开发 / 测试 / 交付",
    tags: ["计算机视觉", "Redis", "工业质检"],
    summary: "面向传统纺织等工业场景，基于目标检测算法提供瑕疵检测解决方案",
    points: [
      "支撑项目常规需求迭代与版本交付",
      "设计并实现可扩展的功能模块，灵活适配不同工业质检场景",
      "优化传输性能与 Redis 使用方式，提升数据通讯能力与系统稳定性",
    ],
  },
  {
    title: "AIGC 图像生成相关业务",
    period: "2022.11 – 2023.05",
    role: "后端开发",
    tags: ["AIGC", "Stable Diffusion", "工作流"],
    points: [
      "统一接入层与配置层协议",
      "支持 SD 与算法原子化部署，优化模型首次启动延迟",
      "实现可编排的 AIGC 工作流，可按业务需求自由组合 txt2img、img2img、CLIP、超分等算法能力",
    ],
  },
  {
    title: "DevOps 平台 - 告警通知",
    period: "2022.07 – 2022.09",
    role: "后端开发",
    tags: ["Prometheus", "飞书", "微服务"],
    points: [
      "按微服务拆分指标监控、适配器、策略中心与通知服务",
      "统一适配 GCP webhook、Sentry webhook、Prometheus 等告警格式",
      "由策略中心匹配告警策略，完成告警触发、降噪计数等处理",
      "集成飞书应用与邮件告警，开发飞书卡片交互，打通业务告警全流程",
    ],
  },
  {
    title: "统一身份认证系统",
    period: "2021.06 – 2022.05",
    role: "后端开发",
    tags: ["OAuth2", "OIDC", "RBAC", "Go", "Vitess"],
    points: [
      "基于 OAuth2.0 与 JWT 构建身份认证体系，支持 authorization_code、implicit、client_credentials 及 OIDC 等多种模式",
      "基于 RBAC 实现灵活可用的权限控制体系",
      "集成用户名/密码登录与 Google、Apple、Facebook、Instagram、Microsoft、飞书、企业微信等社交登录，并通过 Go Interface 机制快速接入 OAuth2 协议平台",
      "基于 Vitess 搭建分布式数据库方案，实现用户数据分布式存储、负载均衡与弹性扩缩容",
      "在生产环境不停服的前提下，完成跨云平台账号服务迁移",
      "提供 RESTful API 及 Android / iOS SDK，快速支撑 Web 端与移动端接入，实现高效的账户验证与授权",
      "满足 GDPR、CCPA 等个人数据安全合规要求",
    ],
  },
];

// 个人项目
export const personalProjects: ShowcaseProject[] = [
  {
    title: "Reason to Manim",
    period: "2026.09 – 至今",
    role: "全栈 / 独立开发",
    summary:
      "把一句「讲讲这个数学知识点 / 这道题」变成可播放的 Manim 讲解视频的 AI 应用。",
    points: [
      "Pi Agent 在后台自主完成解题 / 知识梳理、分镜、生成 Manim 代码并调用渲染工具，渲染失败时读报错自修重试。",
      "全托管在 Cloudflare Workers + Durable Objects：生成任务在 DO 内异步执行、前端轮询进度，零 VPS、零常驻服务器。",
      "渲染交给独立的 Rust 服务 manimgx-api，视频落 R2、任务与匿名指标落 D1；Manim 知识库按需读取，不塞进 system prompt。",
      "入口处有意图与合规闸门、按 IP 限流，挡掉跑题请求和刷接口带来的账单风险。",
      "接入 Clerk 登录与历史记录，支持下载、删除和注销清理，并补齐隐私政策、服务条款、Cookie 政策等上线合规层。",
    ],
    tags: [
      "Cloudflare Workers",
      "Durable Objects",
      "Manim",
      "AI Agent",
      "Rust",
      "TypeScript",
    ],
    href: "https://reason2m.com",
    cover: "/images/projects/reason2m.svg",
  },
];
