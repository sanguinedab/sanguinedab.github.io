export type ProjectPhase = {
  period: string;
  title: string;
  summary: string;
};

export type ProjectCapability = {
  title: string;
  points: string[];
};

export type ProjectDetail = {
  slug: string;
  intro: string;
  ownership: string;
  phases: ProjectPhase[];
  capabilities: ProjectCapability[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "enterprise-rag": {
    slug: "enterprise-rag",
    intro:
      "从校园知识问答做到企业级多租户知识平台，先后经历校园百事通、开放平台、企业知识问答三个阶段。",
    ownership:
      "除智能问答（算法团队负责）外，几乎参与了平台的所有模块：整体系统架构、功能设计、后端开发、部署与运维。",
    phases: [
      {
        period: "2024.08 – 2025.02",
        title: "校园百事通",
        summary:
          "面向高校的知识问答系统，底层基于 FastGPT 搭建问答工作流，把知识库问答先跑起来。",
      },
      {
        period: "2025.03 – 2025.12",
        title: "开放平台",
        summary:
          "对标 FastGPT 做开发者平台，用户可以自由搭建工作流和 Agent，平台从「一套问答」变成「一套能力」。",
      },
      {
        period: "2026.01 – 至今",
        title: "企业知识问答",
        summary:
          "底层从 FastGPT 换成 qwenpaw agent，并基于 K8s Operator 支持多租户隔离与资源分配，转向企业知识问答场景。",
      },
    ],
    capabilities: [
      {
        title: "系统架构",
        points: [
          "私有化阶段用 Ansible 快速搭建私有云，MicroK8s 起小集群；公有云阶段负责上云部署改造",
          "设计多租户动态域名与 API 网关 HTTPRoute 方案",
          "整体采用微服务架构，按功能拆分平台模块",
        ],
      },
      {
        title: "功能设计",
        points: [
          "基于 CAS、OAuth2.0 / OIDC 的单点登录",
          "基于 RBAC + ABAC 的权限体系",
          "基于 Centrifugo 的多端消息中间件",
          "基于 K8s Operator 的多租户动态 Agent 部署与资源隔离",
        ],
      },
      {
        title: "代码开发",
        points: [
          "平台后端开发全程参与，覆盖各阶段的核心业务功能",
          "MCP 接入与多模型厂商接入",
          "多端数据入库，基于 Celery + Redis 队列处理",
          "参与许可证签发、文档入库等业务模块",
        ],
      },
      {
        title: "运维部署",
        points: [
          "从零搭建 GitOps 流程：GitLab CI + Helm Chart + FluxCD，打通开发到交付",
          "搭建可观测性体系：Grafana Alloy + Loki / Prometheus / Tempo + Grafana + Alertmanager",
        ],
      },
    ],
  },
};
