import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom ">
        <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-primary-600 mb-3 lg:mb-4">
            Featured Projects
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
            Some of my recent work that I'm proud of.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1 sm:gap-2">
                  <span className="px-2 sm:px-3 py-1 bg-black/70 text-white text-xs sm:text-sm rounded-full">
                    {project.tech[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white dark:text-white mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 sm:gap-3">
                  <a 
                    href={project.liveLink} 
                    className="flex-1 btn-primary flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex-1 btn-secondary flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-2.5 sm:hover:gap-3 transition-all duration-300 bg-primary-50 dark:bg-primary-900/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
          >
            View All Projects
            <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;