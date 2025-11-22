'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: 'emerald' | 'cyan' | 'violet';
}

export default function PageHeader({ title, subtitle, gradient = 'emerald' }: PageHeaderProps) {
  const gradientClass = {
    emerald: 'text-gradient-emerald',
    cyan: 'text-gradient-cyan',
    violet: 'text-gradient-violet',
  }[gradient];

  return (
    <div className="pt-32 pb-12 sm:pt-40 sm:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 ${gradientClass}`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </div>
  );
}

