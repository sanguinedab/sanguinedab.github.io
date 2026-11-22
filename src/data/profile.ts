import { FaGithub, FaRegEnvelope } from "react-icons/fa6";

export const profile = {
  name: `sanguinedab`,
  headline: `服务端工程师 · DevOps · AI Agent`,
  email: `sanguinedab@gmail.com`,
  location: `福建 · 中国`,
  profileImage: `https://github.com/sanguinedab.png`,
  links: [
    {
      name: `GitHub`,
      url: `https://github.com/sanguinedab`,
      icon: FaGithub
    },
    {
      name: `邮箱`,
      url: `mailto:sanguinedab@gmail.com`,
      icon: FaRegEnvelope
    }
  ],
  biography: `<p>我是 sanguinedab，一名服务端工程师，也做 DevOps。五年经验，起点是区块链：大学时搭过私有链、读过以太坊源码、写过智能合约，Go 也是从那时开始用的。</p>
<p>毕业之后，从统一身份认证、DevOps 告警、AIGC、工业质检一路做到 Kubernetes 训练平台；现在主要投入企业 RAG 问答平台，从校园知识问答、开放平台迭代到企业多租户，架构、功能、开发、部署都在这条线上。</p>
<p>我喜欢把一件事从头到尾跑通：设计、开发、部署、观测，缺一不可。日常最在意系统的稳定性、可观测性和交付效率；有余力时写点自己的工具，比如把数学问题变成 Manim 讲解视频的 Reason to Manim。</p>`
};