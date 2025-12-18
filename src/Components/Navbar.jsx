import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ 
  darkMode, 
  setDarkMode, 
  activeSection, 
  scrollToSection, 
  menuOpen, 
  setMenuOpen,
  navItems 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || menuOpen ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center gap-1 sm:gap-2"
            >
              <Sparkles size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Web Developer</span>
              <span className="sm:hidden">DF</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 capitalize relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 ${
                    activeSection === item.id
                      ? 'text-primary-600 dark:text-primary-400 after:w-full'
                      : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm py-2 px-4"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu pt-14">
          <div className="p-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-4 px-4 rounded-lg capitalize transition-all duration-200 text-lg ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-center mt-4 py-4 text-lg"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;