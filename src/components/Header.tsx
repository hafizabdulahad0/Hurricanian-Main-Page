
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, User, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    }
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#3EA99F] dark:bg-[#3EA99F] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and Brand (centered on mobile) */}
          <div className="flex items-center justify-center md:justify-start flex-1 md:flex-initial">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ea34d672-9fd9-47c3-a485-acb247e46a47.png" 
                  alt="Hurricanian Tree Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold italic text-white font-franklin">HURRICANIAN</span>
            </div>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-white hover:text-[#e6fffd] transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="flex items-center space-x-2 text-white hover:text-[#e6fffd] transition-colors duration-300"
            >
              <Briefcase className="w-4 h-4" />
              <span>Our Services</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-white hover:text-[#e6fffd] transition-colors duration-300"
            >
              <User className="w-4 h-4" />
              <span>About Us</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-white hover:text-[#e6fffd] transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </nav>

          {/* Right side - Dark mode toggle and mobile menu */}
          <div className="flex items-center justify-end flex-1 md:flex-initial">
            {/* Dark mode toggle */}
            <div className="mr-4">
              <input type="checkbox" id="darkmode-switch" className="toggle-input" checked={isDarkMode} onChange={toggleDarkMode} />
              <label htmlFor="darkmode-switch" className="toggle-label">
                <span className="toggle-icon moon">🌙</span>
                <span className="toggle-icon sun">☀️</span>
                <span className="toggle-ball"></span>
              </label>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden flex flex-col justify-center items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-[#3EA99F] dark:bg-[#3EA99F] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-2">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="flex items-center space-x-2 py-2 text-white hover:text-[#e6fffd] w-full text-left"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="flex items-center space-x-2 py-2 text-white hover:text-[#e6fffd] w-full text-left"
          >
            <Briefcase className="w-4 h-4" />
            <span>Our Services</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="flex items-center space-x-2 py-2 text-white hover:text-[#e6fffd] w-full text-left"
          >
            <User className="w-4 h-4" />
            <span>About Us</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 py-2 text-white hover:text-[#e6fffd] w-full text-left"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
