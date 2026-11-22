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
    meta: "41 个标准情况",
    poster: "/images/cube/f2l.svg",
    note: "先放 4 条基础入槽与配对，完整的 41 条后续补齐。",
    cases: [
      {
        id: "F2L 01",
        name: "右槽入槽",
        alg: "R U R'",
        note: "配对好的角棱在右前方，角块白色朝右。",
      },
      {
        id: "F2L 02",
        name: "左槽入槽",
        alg: "L' U' L",
        note: "左手的镜像情况。",
      },
      {
        id: "F2L 03",
        name: "顶层配对 · 右",
        alg: "U R U' R'",
        note: "角块与棱块分开时，先把它们拼到一起。",
      },
      {
        id: "F2L 04",
        name: "顶层配对 · 左",
        alg: "U' F' U F",
        note: "换一个方向完成配对。",
      },
    ],
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
