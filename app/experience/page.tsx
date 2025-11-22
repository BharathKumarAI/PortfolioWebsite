import PageHeader from '@/components/PageHeader';
import { getSortedContentData } from '@/lib/content';
import ExperienceView from '@/components/ExperienceView';

export default function ExperiencePage() {
  const experience = getSortedContentData('experience');
  const education = getSortedContentData('education');
  const certifications = getSortedContentData('certifications');
  const awards = getSortedContentData('awards');
  
  // Split awards into awards and hackathons based on category
  const pureAwards = awards.filter(item => item.category === 'award' || !item.category);
  const hackathons = awards.filter(item => item.category === 'hackathon');

  return (
    <div>
      <PageHeader 
        title="Experience & Achievements" 
        subtitle="My professional journey through Data Engineering, Cloud Architecture, and GenAI."
        gradient="cyan"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ExperienceView 
          experience={experience}
          education={education}
          awards={pureAwards}
          hackathons={hackathons}
          certifications={certifications}
        />
      </div>
    </div>
  );
}
