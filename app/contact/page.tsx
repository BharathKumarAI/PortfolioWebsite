'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '@/lib/config';

export default function ContactPage() {
  const socialLinks = personalInfo.social;

  return (
    <div>
      <PageHeader 
        title="Get In Touch" 
        subtitle="Have a project in mind or want to say hi? I'd love to hear from you."
        gradient="violet"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card-modern p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Me</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-modern p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect on Socials</h3>
              <div className="flex gap-4">
                {socialLinks.github && (
                  <a 
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-300 hover:text-white" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a 
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-gray-300 hover:text-white" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a 
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-gray-300 hover:text-white" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-modern p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
