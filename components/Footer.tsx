'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, BookOpen } from 'lucide-react';
import { personalInfo } from '@/lib/config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            name: 'GitHub', 
            icon: Github, 
            href: personalInfo.social.github, 
        },
        { 
            name: 'LinkedIn', 
            icon: Linkedin, 
            href: personalInfo.social.linkedin, 
        },
        { 
            name: 'Medium', 
            icon: BookOpen, 
            href: personalInfo.social.medium, 
        },
        { 
            name: 'Email', 
            icon: Mail, 
            href: personalInfo.social.email, 
        },
    ];

    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="flex flex-col items-center gap-8">
                    {/* Social Links */}
                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            if (!link.href) return null; // Don't render if no link
                            
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                    className="text-gray-400 hover:text-emerald-400 transition-colors p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30"
                                    aria-label={link.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Copyright */}
                    <motion.div 
                        className="text-center space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Portfolio. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built with{' '}
                            <span className="text-emerald-400">Next.js</span>
                            {' '}&{' '}
                            <span className="text-cyan-400">Tailwind CSS</span>
                        </p>
                    </motion.div>

                    {/* Back to top button */}
                    <motion.button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="mt-4 px-6 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUp size={16} />
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
