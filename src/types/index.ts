export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  challenges: string;
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  accentColor: string;
}

export interface TechItem {
  name: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  skills: TechItem[];
}

export interface TimelineMilestone {
  period: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconType: 'code' | 'brain' | 'terminal' | 'rocket';
}

export interface StatMetric {
  label: string;
  value: string;
  description: string;
}
