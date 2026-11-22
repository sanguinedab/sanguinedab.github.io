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
  phases: ProjectPhase[];
  capabilities: ProjectCapability[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "enterprise-rag": {
    slug: "enterprise-rag",
    intro:
      "从校园知识问答做到企业级多租户知识平台，先后经历校园百事通、开放平台、企业知识问答三个阶段。",
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
          "私有化交付：用 Ansible 快速搭建私有云，以 MicroK8s 起轻量集群",
          "上云改造：完成公有云环境的部署改造",
          "网络方案：设计多租户动态域名与 API 网关 HTTPRoute 路由",
          "服务拆分：平台按微服务架构组织",
        ],
      },
      {
        title: "功能设计",
        points: [
          "单点登录：打通 CAS、OAuth2.0 / OIDC 多种认证协议",
          "权限体系：RBAC + ABAC 组合，兼顾角色与属性维度的灵活授权",
          "多端消息：基于 Centrifugo 构建多端消息中间件",
          "多租户部署：基于 K8s Operator 动态部署 Agent，并做资源隔离",
        ],
      },
      {
        title: "代码开发",
        points: [
          "后端开发：覆盖三个阶段的核心业务功能，随平台持续迭代",
          "工具调用：完成 MCP 接入，支持 MCP Server 对外暴露",
          "模型接入：接入多家模型厂商，统一调用方式",
          "数据入库：多端数据入库，基于 Celery + Redis 队列异步处理",
          "业务模块：许可证签发、文档入库等",
        ],
      },
      {
        title: "运维部署",
        points: [
          "GitOps：从零搭建 GitLab CI + Helm Chart + FluxCD 流程，打通开发到交付",
          "可观测性：Grafana Alloy 采集，Loki / Prometheus / Tempo 分别承载日志、指标与链路，Grafana + Alertmanager 负责看板与告警",
        ],
      },
    ],
  },
};
