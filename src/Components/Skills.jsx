import React from 'react';
import { ChevronRight, Code } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills = ({ skills }) => {
  const getIcon = (iconName) => {
    const iconMap = {
      ChevronRight,
      Code,
    };
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : <Code />;
  };

  return (
    <section id="skills" className="section-padding bg-gray-100 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with on a daily basis." 
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg card-hover group"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-600 dark:text-primary-400 w-4 h-4 sm:w-5 sm:h-5">
                    {getIcon(skill.icon)}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">
                    <ChevronRight size={14} className="text-primary-500 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;