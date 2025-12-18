import React from 'react';
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  Mail,
  Heart,
  Sparkles,
};

const Footer = ({ socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <Sparkles className="text-primary-400 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary-400">Hemant Patel</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">Python Full Stack Web Developer</p>
          </div>
          
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <IconComponent size={18} className="sm:w-5 sm:h-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Hemant Patel. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center justify-center gap-1 text-xs sm:text-sm">
              Made with <Heart size={12} className="text-red-500 animate-pulse sm:w-4 sm:h-4" /> using
              <span className="text-primary-400 ml-1">React + Vite + Tailwind</span>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Designed for developers
            </p>
          </div>
          
          <div className="mt-3 sm:mt-4">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 transition-colors text-xs sm:text-sm"
            >
              Back to top
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;