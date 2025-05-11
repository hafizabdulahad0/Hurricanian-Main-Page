
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <header className="bg-emerald-600 dark:bg-emerald-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Hurricanian Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-xl font-bold text-white">HURRICANIAN</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-emerald-200 transition-colors duration-300">Home</Link>
          <Link to="/#services" className="text-white hover:text-emerald-200 transition-colors duration-300">Our Services</Link>
          <Link to="/#about" className="text-white hover:text-emerald-200 transition-colors duration-300">About Us</Link>
          <Link to="/#contact" className="text-white hover:text-emerald-200 transition-colors duration-300">Contact Us</Link>
        </nav>

        <div className="flex items-center">
          {/* Dark mode toggle */}
          <div className="mr-6">
            <input 
              type="checkbox" 
              id="darkmode-switch" 
              className="toggle-input" 
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="darkmode-switch" className="toggle-label">
              <span className="toggle-icon moon">🌙</span>
              <span className="toggle-icon sun">☀️</span>
              <span className="toggle-ball"></span>
            </label>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-emerald-600 dark:bg-emerald-800 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-2">
          <Link to="/" className="block py-2 text-white hover:text-emerald-200">Home</Link>
          <Link to="/#services" className="block py-2 text-white hover:text-emerald-200">Our Services</Link>
          <Link to="/#about" className="block py-2 text-white hover:text-emerald-200">About Us</Link>
          <Link to="/#contact" className="block py-2 text-white hover:text-emerald-200">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
