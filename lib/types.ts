// Type Definitions for the Portfolio

export type ContentType = 'projects' | 'experience' | 'awards' | 'certifications' | 'education';

export interface ContentItem {
  slug: string;
  title: string;
  date?: string;
  summary?: string;
  description?: string;
  technologies?: string[];
  content: string;
  company?: string;
  location?: string;
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
  category?: string;
  [key: string]: any;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  social: {
    [key: string]: string;
  };
}

