import { getSortedContentData } from '@/lib/content';
import Section from '@/components/Section';

export default function ProjectsPage() {
  const projects = getSortedContentData('projects');

  return (
    <div className="pt-10">
      <Section 
        id="projects-list" 
        title="My Projects" 
        subtitle="A collection of my work, side projects, and experiments."
        items={projects} 
      />
    </div>
  );
}
