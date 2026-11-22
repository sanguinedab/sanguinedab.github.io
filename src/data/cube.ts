import { f2lCases } from "./f2l";
import { ollCases } from "./oll";
import { pllCases } from "./pll";

export type CubeCase = {
  id: string;
  name?: string;
  alg: string;
  note?: string;
  image?: string;
};

export type CubeStage = {
  slug: string;
  letter: string;
  name: string;
  en: string;
  summary: string;
  meta: string;
  poster: string;
  tips?: string[];
  cases?: CubeCase[];
  note?: string;
};

export const cubeStages: CubeStage[] = [
  {
    slug: "cross",
    letter: "C",
    name: "十字",
    en: "CROSS",
    summary: "在底层拼出白色十字，并让侧面颜色对齐中心块。",
    meta: "8 步内完成",
    poster: "/images/cube/cross.svg",
    tips: [
      "先把白色中心块放到底面，围绕它做十字。",
      "观察时先锁定第一颗棱块，尽量把整条十字控制在 8 步以内。",
      "宁可在观察上多花两秒，也别做完再回头改。",
      "练盲拧十字：看 15 秒后闭眼完成，提升预判和连贯性。",
    ],
  },
  {
    slug: "f2l",
    letter: "F",
    name: "前两层",
    en: "F2L",
    summary: "把角块和棱块配对后一起入槽，同时完成前两层。",
    meta: "41 个公式",
    poster: "/images/cube/f2l.svg",
    note: "完整 41 条。灰色表示与本组角棱无关的块，只保留当前要拼的这一对。",
    cases: f2lCases,
  },
  {
    slug: "oll",
    letter: "O",
    name: "顶层定向",
    en: "OLL",
    summary: "把顶层所有块翻成黄色朝上，这一阶段共 57 个公式。",
    meta: "57 个公式",
    poster: "/images/cube/oll.svg",
    note: "完整 57 条，图示为顶面视角，灰色表示该块还没有黄色朝上。",
    cases: ollCases,
  },
  {
    slug: "pll",
    letter: "P",
    name: "顶层归位",
    en: "PLL",
    summary: "顶层全部朝上后，把角块和棱块归位，共 21 个公式。",
    meta: "21 个公式",
    poster: "/images/cube/pll.svg",
    note: "完整 21 条，图示中的箭头表示块需要移动的方向。",
    cases: pllCases,
  },
];
