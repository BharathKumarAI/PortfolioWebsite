'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { personalInfo } from '@/lib/config';
import { User, MapPin, Mail } from 'lucide-react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section 
            id="about" 
            ref={ref}
            className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16 text-center"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    <span className="text-white">About</span>
                    {' '}
                    <span className="text-gradient-emerald">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image/Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="card-modern p-8 rounded-2xl">
                        <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                            {/* Placeholder for profile image */}
                            <User className="w-32 h-32 text-emerald-400/50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                    <User className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Name</p>
                                    <p className="font-semibold">{personalInfo.name}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-semibold">{personalInfo.location}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/20">
                                    <Mail className="w-5 h-5 text-violet-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold text-sm break-all">{personalInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        {personalInfo.about.paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="text-gray-300 leading-relaxed text-lg"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="pt-6"
                    >
                        <a
                            href={personalInfo.social.email}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            Get In Touch
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

