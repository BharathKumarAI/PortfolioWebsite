'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { skills } from '@/lib/config';
import { Code, Server, Brain, Database, Cloud } from 'lucide-react';

interface SkillBarProps {
    name: string;
    level: number;
    index: number;
    isInView: boolean;
}

function SkillBar({ name, level, index, isInView }: SkillBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="space-y-1.5"
        >
            <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium text-sm">{name}</span>
                <span className="text-emerald-400 text-xs font-semibold">{level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                />
            </div>
        </motion.div>
    );
}

interface SkillCategoryProps {
    title: string;
    icon: React.ReactNode;
    skills: Array<{ name: string; level: number }>;
    delay: number;
    isInView: boolean;
}

function SkillCategory({ title, icon, skills: categorySkills, delay, isInView }: SkillCategoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay }}
            className="card-modern p-6 rounded-xl h-full"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg border border-emerald-500/30">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={index}
                        isInView={isInView}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const categories = [
        {
            title: "Languages & Core",
            icon: <Code className="w-6 h-6 text-emerald-400" />,
            skills: skills.languages,
            delay: 0.2,
        },
        {
            title: "Data Engineering",
            icon: <Database className="w-6 h-6 text-cyan-400" />,
            skills: skills.dataEngineering,
            delay: 0.3,
        },
        {
            title: "GenAI & Cloud",
            icon: <Brain className="w-6 h-6 text-violet-400" />,
            skills: skills.genai,
            delay: 0.4,
        },
    ];

    return (
        <section 
            id="skills" 
            ref={ref}
            className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                    <span className="text-white">Technical</span>
                    {' '}
                    <span className="text-gradient-emerald">Expertise</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                    Mastering the modern data stack and AI technologies
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <SkillCategory
                        key={category.title}
                        title={category.title}
                        icon={category.icon}
                        skills={category.skills}
                        delay={category.delay}
                        isInView={isInView}
                    />
                ))}
            </div>
        </section>
    );
}
