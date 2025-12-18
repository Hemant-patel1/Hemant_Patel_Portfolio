import React from 'react';
import developerimage from '../assets/developer.png'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ArrowUpRight, 
  Download,
  Briefcase,
  MapPin
} from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

const Hero = ({ contactInfo, socialLinks }) => {
  return (
    <section id="home" className="min-h-screen pt-14 sm:pt-16 flex items-center overflow-hidden">
      <div className="container-custom section-padding relative">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-4 sm:space-y-6 animate-slide-up order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2 text-sm sm:text-base">
                <Sparkles size={16} className="sm:w-5 sm:h-5" />
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-primary-500 leading-tight">
                Hemant <span className="text-primary-600 dark:text-primary-400">Patel</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-500">
               Python Full Stack <span className="font-semibold">Web Developer</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="sm:w-5 sm:h-5" />
                  <span>3+ Months  Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="sm:w-5 sm:h-5" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                I build Scalable,secure,and high-performence web application using <span className="font-semibold text-primary-600 dark:text-primary-400">Python</span>, <span className="font-semibold text-primary-600 dark:text-primary-400">React.Js</span>, and <span className="font-semibold text-primary-600 dark:text-primary-400">modern JavaScript frameworks.</span> 
                Let's bring your ideas to life!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <a href="#projects" className="btn-primary flex items-center gap-2 text-sm sm:text-base">
                View Projects
                <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2 text-sm sm:text-base">
                Contact Me
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a 
  href="https://drive.google.com/file/d/1mGpF1nLFv7FhshgAm9nnY2luhf1YeNtI/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
>
  <Download size={16} className="sm:w-5 sm:h-5" />
  Resume
</a>
            </div>
            
            <div className="flex gap-4 sm:gap-6 pt-6 sm:pt-8">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} className="sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="relative animate-float order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10">
              <img 
                src={developerimage}
                alt="Hemant Patel - Web Developer"
                className="rounded-2xl shadow-2xl w-full h-75 sm:h-96 lg:h-screen object-cover"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-primary-600 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold">3+</p>
                  <p className="text-xs sm:text-sm">Months Experience</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-primary-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;