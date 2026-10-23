export type Stat = { value: string; label: string };

export type Profile = {
  name: string;
  nameEn: string;
  monogram: string;
  role: string;
  location: string;
  handle: string;
  email: string;
  greeting: string;
  summary: string;
  stats: Stat[];
  introHtml: string;
};

export type SkillGroup = { group: string; items: string[] };

export type Project = {
  title: string;
  titleEn: string;
  blurb: string;
  tags: string[];
  meta: string;
  href: string;
};
