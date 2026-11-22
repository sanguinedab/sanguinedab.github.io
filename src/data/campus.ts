export type CampusLink = {
  label: string;
  href: string;
};

export type CampusEntry = {
  period: string;
  title: string;
  points: string[];
  links?: CampusLink[];
};

export const campus: CampusEntry[] = [
  {
    period: "大一",
    title: "从微电子转到数据科学与大数据技术",
    points: [
      "入学时就读微电子专业，后来通过转专业进入数据科学与大数据技术专业。",
      "从硬件转向软件与数据，也是后来做后端和区块链的起点。",
    ],
  },
  {
    period: "大二",
    title: "Java 课程设计：mini 版宝可梦 RPG",
    points: [
      "暑期课程设计，基于 Java + Swing 实现了一个 mini 版宝可梦回合制 RPG。",
      "抽象出角色基类，完成英雄与 NPC 的属性、普攻、技能、升级、装备和音效系统。",
      "自己实现了图形化界面、回合制战斗流程和结算界面，算是第一次把一个完整应用从头写完。",
    ],
    links: [
      {
        label: "阅读全文",
        href: "/articles/java-rpg-pokemon",
      },
    ],
  },
  {
    period: "大四",
    title: "实验室私有链平台",
    points: [
      "在导师实验室参与私有链平台开发，也是在这时开始接触 Golang 和区块链。",
      "参与链平台相关服务的开发，理解了账户、交易、合约这些区块链里的基本概念。",
      "用 Solidity 写智能合约，基于 geth + solc + web3.py 完成编译、部署与调用，还踩过 gas 给少了导致部署一直失败的坑。",
    ],
    links: [
      {
        label: "阅读全文",
        href: "/articles/web3py-smart-contract",
      },
    ],
  },
];
