'use client';

import { ContentItem } from '@/lib/types';
import Card from './Card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
    title: string;
    subtitle?: string;
    items: ContentItem[];
    id: string;
}

export default function Section({ title, subtitle, items, id }: SectionProps) {
    const ref = useRef(null);
    // Reduce margin so it triggers earlier, or remove 'once: true' if you want re-animation
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    if (!items || items.length === 0) return null;

    return (
        <section 
            id={id} 
            ref={ref}
            className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16 text-center"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    <span className="text-white">{title.split(' ')[0]}</span>
                    {' '}
                    <span className="text-gradient-emerald">{title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                    {subtitle || `${items.length} ${items.length === 1 ? 'item' : 'items'}`}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {items.map((item, index) => (
                    <Card key={item.slug} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}
