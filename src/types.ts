export type CategoryType = 'all' | 'photography' | 'ai' | 'digital' | 'experiments';

export interface ProjectMedia {
  url: string;
  caption?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'cinematic';
}

export interface Project {
  id: string;
  title: string;
  category: 'photography' | 'ai' | 'digital' | 'experiments';
  categoryLabel: string;
  year: string;
  location?: string;
  tagline: string;
  coverImage: string;
  galleryImages: ProjectMedia[];
  description: string;
  personalThought?: string;
  techDetails?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export interface Note {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: {
    intro: string;
    bodyParagraphs: string[];
    pullQuote?: string;
    takeaways?: string[];
  };
  featured?: boolean;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: 'reading' | 'guide' | 'resource' | 'experiment';
  categoryLabel: string;
  description: string;
  status: 'available' | 'coming_soon';
  link?: string;
  authorOrSource?: string;
  tag?: string;
  note?: string;
  downloadLabel?: string;
}

export interface CurrentlyState {
  exploring: {
    title: string;
    detail: string;
    statusBadge: string;
  };
  creating: {
    title: string;
    detail: string;
    statusBadge: string;
  };
  learning: {
    title: string;
    detail: string;
    statusBadge: string;
  };
  reading: {
    title: string;
    author: string;
    note: string;
    statusBadge: string;
  };
}

export interface PillarDetail {
  id: 'create' | 'learn' | 'reflect';
  title: string;
  pronunciation?: string;
  description: string;
  mindset: string;
  facets: {
    label: string;
    subtext: string;
  }[];
}

export interface LifeLesson {
  id: string;
  number: string;
  title: string;
  insight: string;
  context: string;
  tag: string;
}
