'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Building2, Tag } from 'lucide-react';
import { ContentItem } from '@/lib/content';
import ReactMarkdown from 'react-markdown';

interface CardProps {
    item: ContentItem;
    index?: number;
}

export default function Card({ item, index = 0 }: CardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
        <>
            <motion.div
                layoutId={`card-${item.slug}`}
                onClick={() => setIsOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="card-modern p-6 rounded-xl cursor-pointer group relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                {/* Gradient overlay on hover */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-violet-500/10 opacity-0"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
                
                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? '100%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4 gap-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-gradient-emerald transition-all flex-1">
                            {item.title}
                        </h3>
                        {item.date && (
                            <motion.span 
                                className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5 flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Calendar className="w-3 h-3" />
                                {item.date}
                            </motion.span>
                        )}
                    </div>

                    {item.company && (
                        <p className="text-sm text-cyan-400 mb-3 font-medium flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            {item.company}
                        </p>
                    )}

                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {item.summary}
                    </p>

                    {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                            {item.technologies.slice(0, 4).map((tech, techIndex) => (
                                <motion.span 
                                    key={tech} 
                                    className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md border border-white/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-all"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: techIndex * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                            {item.technologies.length > 4 && (
                                <span className="text-xs text-gray-500 px-3 py-1 flex items-center">
                                    +{item.technologies.length - 4}
                                </span>
                            )}
                        </div>
                    )}

                    <motion.div 
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: isHovered ? 0 : 10 }}
                    >
                        <div className="p-2 bg-emerald-500/20 rounded-lg backdrop-blur-sm border border-emerald-500/30">
                            <ExternalLink className="text-emerald-400" size={18} />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            layoutId={`card-${item.slug}`}
                            className="fixed inset-4 sm:inset-8 z-[101] flex items-center justify-center pointer-events-none"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div 
                                className="w-full max-w-4xl bg-[#0f0f1e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col pointer-events-auto card-modern"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <motion.h2 
                                                className="text-2xl sm:text-4xl font-bold text-white mb-2"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                {item.title}
                                            </motion.h2>
                                            {item.company && (
                                                <motion.p 
                                                    className="text-lg text-cyan-400 font-medium flex items-center gap-2"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <Building2 className="w-5 h-5" />
                                                    {item.company}
                                                </motion.p>
                                            )}
                                            {item.date && (
                                                <motion.p 
                                                    className="text-sm text-gray-400 mt-2 flex items-center gap-2"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <Calendar className="w-4 h-4" />
                                                    {item.date}
                                                </motion.p>
                                            )}
                                        </div>
                                        <motion.button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white flex-shrink-0"
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label="Close modal"
                                        >
                                            <X size={24} />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                                    <motion.div 
                                        className="prose prose-invert prose-lg max-w-none 
                                            prose-headings:text-white prose-headings:font-bold
                                            prose-p:text-gray-300 prose-p:leading-relaxed
                                            prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-cyan-400 hover:prose-a:underline
                                            prose-strong:text-white prose-strong:font-semibold
                                            prose-ul:text-gray-300 prose-ol:text-gray-300
                                            prose-li:marker:text-emerald-400
                                            prose-code:text-emerald-300 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                                            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <ReactMarkdown>{item.content}</ReactMarkdown>
                                    </motion.div>

                                    {item.technologies && item.technologies.length > 0 && (
                                        <motion.div 
                                            className="mt-10 pt-8 border-t border-white/10"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Tag className="w-4 h-4" />
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((tech, techIndex) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        className="text-sm bg-emerald-500/10 text-emerald-300 px-4 py-2 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/20 transition-all cursor-default"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.4 + techIndex * 0.05 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {item.link && (
                                        <motion.div 
                                            className="mt-8 flex justify-end"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <motion.a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Project <ExternalLink size={18} />
                                            </motion.a>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
