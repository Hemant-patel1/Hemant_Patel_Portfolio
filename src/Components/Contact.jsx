import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact = ({ contactInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="section-padding bg-gray-100 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's work together to bring your ideas to life!" 
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center card-hover">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white">Email</h3>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-primary-600 dark:text-primary-400 hover:underline text-sm sm:text-base"
              >
                {contactInfo.email}
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center card-hover">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white">Phone</h3>
              <a 
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} 
                className="text-primary-600 dark:text-primary-400 hover:underline text-sm sm:text-base"
              >
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center card-hover sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{contactInfo.location}</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 lg:mb-6 text-sm lg:text-base">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
                Feel free to reach out through any of the platforms below.
              </p>
              
              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Github className="text-gray-600 dark:text-gray-300 w-4 h-4 lg:w-5 lg:h-5" />
                  <a 
                    href={`https://${contactInfo.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm lg:text-base"
                  >
                    {contactInfo.github}
                  </a>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <Linkedin className="text-gray-600 dark:text-gray-300 w-4 h-4 lg:w-5 lg:h-5" />
                  <a 
                    href={`https://${contactInfo.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm lg:text-base"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <Mail className="text-gray-600 dark:text-gray-300 w-4 h-4 lg:w-5 lg:h-5" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm lg:text-base"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="p-4 lg:p-6 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl">
                <h4 className="text-lg font-bold mb-2">Available for</h4>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  <span className="px-2 lg:px-3 py-1 bg-white/20 rounded-full text-xs lg:text-sm">Full-time</span>
                  <span className="px-2 lg:px-3 py-1 bg-white/20 rounded-full text-xs lg:text-sm">Freelance</span>
                  <span className="px-2 lg:px-3 py-1 bg-white/20 rounded-full text-xs lg:text-sm">Consultation</span>
                  <span className="px-2 lg:px-3 py-1 bg-white/20 rounded-full text-xs lg:text-sm">Open source</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 lg:mb-2 text-gray-700 dark:text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-sm lg:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 lg:mb-2 text-gray-700 dark:text-gray-300">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-sm lg:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5 lg:mb-2 text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-sm lg:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 lg:mb-2 text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-sm lg:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-primary flex items-center justify-center gap-1.5 lg:gap-2 text-sm lg:text-base py-2.5 lg:py-3"
                >
                  <Send size={16} className="lg:w-5 lg:h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;