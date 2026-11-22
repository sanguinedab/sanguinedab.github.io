export type PllCase = {
  id: string;
  name: string;
  alg: string;
  image: string;
};

// 21 条 PLL，公式参考 speedcube.de，图示来自 cfgerr/20（MIT）
export const pllCases: PllCase[] = [
  { id: "PLL 01", name: "Aa", alg: "Lw' U R' D2 R U' R' D2 R2", image: "/images/cube/pll/Aa.svg" },
  { id: "PLL 02", name: "Ab", alg: "Rw U' L D2 L' U L D2 L2", image: "/images/cube/pll/Ab.svg" },
  { id: "PLL 03", name: "E", alg: "x' R U' R' D R U R' D' R U R' D R U' R' D'", image: "/images/cube/pll/E.svg" },
  { id: "PLL 04", name: "Z", alg: "M2 U M2 U M' U2 M2 U2 M' U2", image: "/images/cube/pll/Z.svg" },
  { id: "PLL 05", name: "H", alg: "M2 U M2 U2 M2 U M2", image: "/images/cube/pll/H.svg" },
  { id: "PLL 06", name: "Ua", alg: "R U' R U R U R U' R' U' R2", image: "/images/cube/pll/Ua.svg" },
  { id: "PLL 07", name: "Ub", alg: "R2 U R U R' U' R' U' R' U R'", image: "/images/cube/pll/Ub.svg" },
  { id: "PLL 08", name: "Ja", alg: "L' U' L F L' U' L U L F' L2 U L U", image: "/images/cube/pll/Ja.svg" },
  { id: "PLL 09", name: "Jb", alg: "R U R' F' R U R' U' R' F R2 U' R' U'", image: "/images/cube/pll/Jb.svg" },
  { id: "PLL 10", name: "T", alg: "R U R' U' R' F R2 U' R' U' R U R' F'", image: "/images/cube/pll/T.svg" },
  { id: "PLL 11", name: "Ra", alg: "R' U2 R U2 R' F R U R' U' R' F' R2 U'", image: "/images/cube/pll/Ra.svg" },
  { id: "PLL 12", name: "Rb", alg: "L U2 L' U2 L F' L' U' L U L F L2 U", image: "/images/cube/pll/Rb.svg" },
  { id: "PLL 13", name: "F", alg: "R U' R' U R2 y R U R' U' F' Dw R2 F R F'", image: "/images/cube/pll/F.svg" },
  { id: "PLL 14", name: "V", alg: "R' U R' Dw' R' F' R2 U' R' U R' F R F", image: "/images/cube/pll/V.svg" },
  { id: "PLL 15", name: "Na", alg: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", image: "/images/cube/pll/Na.svg" },
  { id: "PLL 16", name: "Nb", alg: "(R' U L' U2 R U' L) (R' U L' U2 R U' L) (U)", image: "/images/cube/pll/Nb.svg" },
  { id: "PLL 17", name: "Y", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'", image: "/images/cube/pll/Y.svg" },
  { id: "PLL 18", name: "Ga", alg: "R2 Uw' R U' R U R' Uw R2 y R U' R'", image: "/images/cube/pll/Ga.svg" },
  { id: "PLL 19", name: "Gb", alg: "R2 Uw R' U R' U' R Uw' R2 y' R' U R", image: "/images/cube/pll/Gb.svg" },
  { id: "PLL 20", name: "Gc", alg: "R' U' R y R2 Uw R' U R U' R Uw' R2", image: "/images/cube/pll/Gc.svg" },
  { id: "PLL 21", name: "Gd", alg: "R U R' y' R2 Uw' R U' R' U R' Uw R2", image: "/images/cube/pll/Gd.svg" },
];
