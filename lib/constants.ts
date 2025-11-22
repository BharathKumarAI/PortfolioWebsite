// Constants used throughout the application

export const SITE_NAME = "Bharath Kancharla";
export const ITEMS_PER_PAGE = 9;

// Animation Durations (in seconds)
export const ANIMATION = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.5,
    SLOW: 0.8,
  },
  DELAY: {
    NONE: 0,
    SHORT: 0.1,
    MEDIUM: 0.2,
    LONG: 0.3,
  },
  STAGGER: 0.1,
};

// Breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Content Types
export const CONTENT_TYPES = {
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  AWARDS: 'awards',
  CERTIFICATIONS: 'certifications',
  EDUCATION: 'education',
} as const;

// Social Media Platforms
export const SOCIAL_PLATFORMS = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  TWITTER: 'twitter',
  EMAIL: 'email',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Projects', href: '/projects', id: 'projects' },
  { name: 'Experience', href: '/experience', id: 'experience' },
  { name: 'Contact', href: '/contact', id: 'contact' },
] as const;

// Section IDs
export const SECTIONS = {
  HERO: 'hero',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  CONTACT: 'contact',
} as const;

