export type CubeCase = {
  name: string;
  alg: string;
  note?: string;
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
    note: "先放基础入槽和配对思路，完整的 41 条后续补齐。",
    cases: [
      {
        name: "右槽入槽",
        alg: "R U R'",
        note: "配对好的角棱在右前方，角块白色朝右。",
      },
      {
        name: "左槽入槽",
        alg: "L' U' L",
        note: "左手的镜像情况。",
      },
      {
        name: "顶层配对 · 右",
        alg: "U R U' R'",
        note: "角块与棱块分开时，先把它们拼到一起。",
      },
      {
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
    meta: "先练 2-look",
    poster: "/images/cube/oll.svg",
    note: "这里先放 2-look 的 10 条常用公式，完整的 57 条后续补齐。",
    cases: [
      {
        name: "棱块 · 一字",
        alg: "F R U R' U' F'",
        note: "顶层棱块排成一条线。",
      },
      {
        name: "棱块 · L 形",
        alg: "F U R U' R' F'",
        note: "顶层棱块呈 L 形。",
      },
      {
        name: "棱块 · 点",
        alg: "F R U R' U' F' + F U R U' R' F'",
        note: "点状先做一字，再做 L 形。",
      },
      { name: "角块 · Sune", alg: "R U R' U R U2 R'" },
      { name: "角块 · Anti-Sune", alg: "R U2 R' U' R U' R'" },
      { name: "角块 · H", alg: "R U R' U R U' R' U R U2 R'" },
      { name: "角块 · Pi", alg: "R U2 R2 U' R2 U' R2 U2 R" },
      { name: "角块 · T", alg: "r U R' U' r' F R F'" },
      { name: "角块 · L", alg: "F R' F' r U R U' r'" },
      { name: "角块 · U", alg: "R2 D R' U2 R D' R' U2 R'" },
    ],
  },
  {
    slug: "pll",
    letter: "P",
    name: "顶层归位",
    en: "PLL",
    summary: "顶层全部朝上后，把角块和棱块归位，共 21 个公式。",
    meta: "先练 2-look",
    poster: "/images/cube/pll.svg",
    note: "先放 2-look 和两条常用 PLL，完整的 21 条后续补齐。",
    cases: [
      { name: "角块 · Aa", alg: "x R' U R' D2 R U' R' D2 R2" },
      { name: "角块 · Ab", alg: "x R2 D2 R U R' D2 R U' R" },
      {
        name: "角块 · E",
        alg: "x' R U' R' D R U R' D' R U R' D R U' R' D'",
      },
      { name: "棱块 · Ua", alg: "M2 U M U2 M' U M2" },
      { name: "棱块 · Ub", alg: "M2 U' M U2 M' U' M2" },
      { name: "棱块 · H", alg: "M2 U M2 U2 M2 U M2" },
      { name: "棱块 · Z", alg: "M2 U M2 U M' U2 M2 U2 M' U2" },
      { name: "T Perm", alg: "R U R' U' R' F R2 U' R' U' R U R' F'" },
      { name: "Y Perm", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
    ],
  },
];
