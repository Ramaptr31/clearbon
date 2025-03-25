'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image 
              src="/images/logo.svg" 
              alt="Clearbon Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-primary">Clearbon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'About Us', path: '/about' },
            { name: 'What We Do', path: '/what-we-do' },
            { name: 'Calculator', path: '/calculator' },
            { name: 'News', path: '/news' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className="text-text dark:text-text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link 
            href="/login" 
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 dark:text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <nav className="flex flex-col px-4 py-5 space-y-4">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'What We Do', path: '/what-we-do' },
              { name: 'Calculator', path: '/calculator' },
              { name: 'News', path: '/news' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className="text-text dark:text-text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/login" 
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header; 