
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'AI Consultant', path: '/consultant' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl border-b border-blue-900/30' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <span className="text-white font-display text-2xl font-bold">H</span>
          </div>
          <span className="font-display text-2xl tracking-wider font-bold">
            HAUPTCON <span className="text-blue-500">(PTY) LTD</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-blue-400 ${
                location.pathname === link.path ? 'text-blue-500' : 'text-zinc-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
          >
            Tender Inquiry
          </Link>
        </nav>

        <button className="md:hidden text-zinc-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
