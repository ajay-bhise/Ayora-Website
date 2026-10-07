export interface Capability {
  id: string;
  label: string;
  description: string;
  icon: string; // SVG path data
}

export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  href: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string | null; // null = not yet disclosed
  industry: string;
  summary: string;
  challenge: string;
  result: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  imageUrl: string | null;
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string; // ISO date string
  readMinutes: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
