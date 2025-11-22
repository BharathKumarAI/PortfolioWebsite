import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentType, ContentItem } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all content items of a specific type, sorted by date
 */
export function getSortedContentData(type: ContentType): ContentItem[] {
  const dirPath = path.join(contentDirectory, type);
  
  if (!fs.existsSync(dirPath)) {
    console.warn(`Content directory not found: ${dirPath}`);
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allContentData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as any),
      };
    });

  // Sort content by date (descending: newest first)
  return allContentData.sort((a, b) => {
    // Helper to parse date string (e.g., "Dec 2022 - Present", "Mar 2020")
    const parseDate = (dateStr?: string | number) => {
      if (!dateStr) return 0;
      
      // Handle numeric dates (e.g., year 2023)
      const dateString = String(dateStr);
      
      // If it contains "Present", treat it as now
      if (dateString.toLowerCase().includes('present')) return new Date().getTime();
      
      // Extract the start date (first part before ' - ')
      // Handle ranges like "Dec 2022 - Present" or "Mar 2020 - Jul 2021"
      // If we want descending order (newest first), we should arguably sort by the *end* date?
      // But standard is usually by Start Date for chronologies.
      // "Mar 2020" vs "Dec 2022".
      // 2022 > 2020.
      // Descending: 2022, then 2020.
      
      const part = dateString.split('-')[0].trim(); 
      return new Date(part).getTime();
    };

    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    return dateB - dateA; // Descending order (Newest first)
  });
}

/**
 * Get a specific content item by type and slug
 */
export function getContentData(type: ContentType, slug: string): ContentItem | null {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`Content file not found: ${fullPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as any),
  };
}

/**
 * Get all slugs for a specific content type
 */
export function getAllContentSlugs(type: ContentType): string[] {
  const dirPath = path.join(contentDirectory, type);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

/**
 * Get featured content items
 */
export function getFeaturedContent(type: ContentType, limit?: number): ContentItem[] {
  const allContent = getSortedContentData(type);
  const featured = allContent.filter(item => item.featured);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Search content by title or summary
 */
export function searchContent(type: ContentType, query: string): ContentItem[] {
  const allContent = getSortedContentData(type);
  const lowerQuery = query.toLowerCase();
  
  return allContent.filter(item => 
    item.title?.toLowerCase().includes(lowerQuery) ||
    item.summary?.toLowerCase().includes(lowerQuery) ||
    item.content?.toLowerCase().includes(lowerQuery)
  );
}
