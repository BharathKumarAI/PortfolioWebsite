import Hero from '@/components/Hero';
import { getFeaturedContent } from '@/lib/content';
import Section from '@/components/Section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = getFeaturedContent('projects', 3);

  return (
    <div className="relative">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {featuredProjects.length > 0 && (
          <>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-16" />
            <Section
              id="featured"
              title="Featured Projects"
              items={featuredProjects}
            />
            <div className="flex justify-center mt-8">
              <Link 
                href="/projects"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white group"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
