'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
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
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-modern p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form 
              className="space-y-6" 
              action={`mailto:${personalInfo.email}`}
              method="POST"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
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
                  name="subject"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  name="body"
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

          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Or Connect on Socials</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.github && (
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
