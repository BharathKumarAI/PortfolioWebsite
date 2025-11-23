'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Terminal, ChevronDown, Brain } from 'lucide-react';
import { personalInfo } from '@/lib/config';

const MotionLink = motion.create(Link);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-violet-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto w-full relative z-10">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-emerald-500/5">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-100/90">
                                {personalInfo.hero.badge}
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white">
                            {personalInfo.hero.heading.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Data & AI</span>
                            <br />
                            <span className="relative">
                                {personalInfo.hero.heading.line2}
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed"
                    >
                        Expert in <span className="text-emerald-400 font-medium">Data Engineering</span>, 
                        <span className="text-cyan-400 font-medium"> Cloud Architecture</span>, and 
                        <span className="text-violet-400 font-medium"> Generative AI</span>. 
                        <br className="hidden sm:block" />
                        Transforming raw data into intelligent, actionable insights.
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
                    >
                        {['GenAI', 'Snowflake', 'Databricks', 'Python', 'Azure', 'Spark'].map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <MotionLink
                            href="/projects"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </MotionLink>

                        <MotionLink
                            href="/experience"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            My Journey
                            <Brain className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </MotionLink>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gray-500 hover:text-white cursor-pointer transition-colors"
                    onClick={() => {
                        const nextSection = document.getElementById('featured');
                        if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
