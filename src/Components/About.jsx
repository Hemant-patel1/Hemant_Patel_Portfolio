import React from 'react';
import { User, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About = ({ experience, education }) => {
  return (
    <section id="about" className="section-padding ">
      <div className="container-custom ">
          <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-primary-600 mb-3 lg:mb-4">
            About Me
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
            Python full-stack developer building scalable, secure, and high-performance web applications with modern technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-primary-600">
                <User className="text-primary-600 dark:text-primary-400 w-5 h-5 lg:w-6 lg:h-6" />
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                Hi, I’m Hemant Patel, a Python full-stack developer specializing in building scalable web applications using Python, React, and modern web technologies. 
                 
                Creating efficient, scalable, and user-friendly digital solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies 
                and best practices. 
              </p>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-primary-600">
                <Briefcase className="text-primary-600 dark:text-primary-400 w-5 h-5 lg:w-6 lg:h-6" />
                Experience
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary-500 pl-3 lg:pl-4 py-2 relative">
                    <div className="absolute -left-1.5 lg:-left-2 top-0 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-primary-500 rounded-full"></div>
                    <h4 className="font-bold text-base lg:text-lg text-gray-400 ">{exp.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400 text-sm lg:text-base">{exp.company} • {exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-600 mt-1 lg:mt-2 mb-2 lg:mb-3 text-sm lg:text-base">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle size={12} className="text-primary-500 mt-0.5 shrink-0 lg:w-3.5 lg:h-3.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-primary-600">
                <GraduationCap className="text-primary-600 dark:text-primary-400 w-5 h-5 lg:w-6 lg:h-6" />
                Education
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="font-bold text-base lg:text-lg text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-primary-600 dark:text-primary-400 text-sm lg:text-base">{edu.institution}</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 lg:mt-2 text-sm lg:text-base">{edu.description}</p>
                      </div>
                      <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm w-fit">
                        {edu.period}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</p>
                      </div>
                    )}
                    {edu.certificate && (
                      <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs lg:text-sm text-primary-600 dark:text-primary-400 flex items-center gap-1 lg:gap-2">
                          <CheckCircle size={14} className="lg:w-4 lg:h-4" />
                          Certificate Awarded
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-linear-to-br from-primary-500 to-primary-700 text-white p-4 lg:p-6 rounded-xl shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-2xl lg:text-3xl font-bold">3+</p>
                  <p className="text-primary-100 text-xs lg:text-sm">Projects Completed</p>
                </div>
                <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-2xl lg:text-3xl font-bold">∞</p>
                  <p className="text-primary-100 text-xs lg:text-sm">Passion for Code</p>
                </div>
                <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-2xl lg:text-3xl font-bold">∞</p>
                  <p className="text-primary-100 text-xs lg:text-sm">Use Code With Ai</p>
                </div>
                <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-2xl lg:text-3xl font-bold">∞</p>
                  <p className="text-primary-100 text-xs lg:text-sm">Self Motivated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;