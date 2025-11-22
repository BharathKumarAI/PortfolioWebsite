'use client';

import { useState } from 'react';
import { ContentItem } from '@/lib/types';
import Timeline from '@/components/Timeline';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, BadgeCheck, Code2, Building2 } from 'lucide-react';

interface ExperienceViewProps {
  experience: ContentItem[];
  education: ContentItem[];
  awards: ContentItem[];
  hackathons: ContentItem[];
  certifications: ContentItem[];
}

type TabType = 'experience' | 'education' | 'awards' | 'hackathons' | 'certifications';

export default function ExperienceView({ experience, education, awards, hackathons, certifications }: ExperienceViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs = [
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'awards', label: 'Awards', icon: Trophy },
    { id: 'hackathons', label: 'Hackathons', icon: Code2 },
    { id: 'certifications', label: 'Certifications', icon: BadgeCheck },
  ];

  // Group awards by company
  const groupedAwards = awards.reduce((acc, award) => {
    const company = award.company || 'Other';
    if (!acc[company]) acc[company] = [];
    acc[company].push(award);
    return acc;
  }, {} as Record<string, ContentItem[]>);

  return (
    <div className="flex flex-col gap-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                isActive 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/10' 
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'experience' && (
            <div className="max-w-4xl mx-auto">
              <Timeline items={experience} title="Professional Journey" />
            </div>
          )}
          
          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto">
              <Timeline items={education} title="Academic Background" />
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="max-w-5xl mx-auto space-y-12">
              {Object.entries(groupedAwards).map(([company, companyAwards], groupIndex) => (
                <motion.div 
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{company}</h3>
                    <div className="h-px bg-white/10 flex-grow" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {companyAwards.map((item, index) => (
                      <AwardCard key={item.slug} item={item} index={index} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'hackathons' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hackathons.map((item, index) => (
                <AwardCard key={item.slug} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((item, index) => (
                <AwardCard key={item.slug} item={item} index={index} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AwardCard({ item, index }: { item: ContentItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-modern p-6 rounded-xl h-full flex flex-col hover:border-emerald-500/30 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
          {item.title}
        </h3>
        {item.date && (
          <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 whitespace-nowrap ml-2">
            {item.date}
          </span>
        )}
      </div>
      
      {item.company && (
        <p className="text-cyan-400 text-sm font-medium mb-3 flex items-center gap-2">
          <BadgeCheck className="w-4 h-4" />
          {item.company}
        </p>
      )}
      
      <p className="text-gray-400 text-sm mb-4 flex-grow">
        {item.summary}
      </p>

      {item.technologies && item.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
          {item.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/10 group-hover:border-emerald-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
