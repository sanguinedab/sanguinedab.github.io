export interface ShowcaseProject {
  title: string;
  period: string;
  role: string;
  summary?: string;
  points?: string[];
  tags?: string[];
  href?: string;
  // 卡片封面：留空时使用内置的渐变封面
  cover?: string;
}
