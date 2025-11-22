'use client';

import { ContentItem } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

interface TimelineProps {
  items: ContentItem[];
  title?: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <div className="py-12 relative">
      {title && (
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-12 flex items-center gap-3"
        >
          <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <Award className="w-5 h-5 text-emerald-400" />
          </div>
          {title}
        </motion.h3>
      )}

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
        {items.map((item, index) => {
          const isExpanded = expandedId === item.slug;
          
          return (
            <motion.div 
              key={item.slug}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-[#0f0f1e]" />
              
              <div 
                className={`card-modern p-6 rounded-xl transition-all cursor-pointer hover:border-emerald-500/30 ${isExpanded ? 'ring-1 ring-emerald-500/30 bg-white/5' : ''}`}
                onClick={() => setExpandedId(isExpanded ? null : item.slug)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    {item.company && (
                      <div className="flex items-center gap-2 text-cyan-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium text-lg">{item.company}</span>
                      </div>
                    )}
                  </div>
                  {item.date && (
                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  )}
                </div>
                
                <div className="text-gray-300 leading-relaxed mb-4">
                  {item.summary}
                </div>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, isExpanded ? undefined : 6).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isExpanded && item.technologies.length > 6 && (
                      <span className="text-xs font-medium text-gray-400 px-2 py-1">
                        +{item.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                )}

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/10 pt-4 mt-4"
                    >
                      <div className="prose prose-invert prose-sm max-w-none prose-p:text-gray-300 prose-headings:text-white prose-li:text-gray-300 prose-strong:text-white">
                        <ReactMarkdown>{item.content}</ReactMarkdown>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-center mt-2 pt-2">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
