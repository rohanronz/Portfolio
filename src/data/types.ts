export type Project = {
  name: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  stats: { label: string; value: string }[];
  socials: { label: string; href: string }[];
};
