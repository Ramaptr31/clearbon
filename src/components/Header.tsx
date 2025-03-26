'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.1, 0.9, 0.2, 1]
    }
  }),
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
      ease: [0.1, 0.9, 0.2, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.1, 0.9, 0.2, 1]
    }
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.1, 0.9, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3
    }
  }
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Handle mobile menu backdrop scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.1, 0.9, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 shadow-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm' 
          : 'py-4 bg-pale-lime/20 dark:bg-gray-900/50'
      } border-b border-sage/10`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center group">
              <div className="relative w-10 h-10 mr-3 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image 
                  src="/logo.svg" 
                  alt="Clearbon Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-dark-forest dark:text-pale-lime tracking-tight hover-underline">Clearbon</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {['About', 'Services', 'News', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="nav-link text-gray-700 dark:text-gray-200 font-medium hover-underline"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link 
                href="/calculator" 
                className="nav-link text-gray-700 dark:text-gray-200 font-medium hover-underline"
              >
                Calculate
              </Link>
            </motion.div>
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link 
                href="/carbon-offset" 
                className="nav-link text-gray-700 dark:text-gray-200 font-medium hover-underline"
              >
                Offset
              </Link>
            </motion.div>
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link 
                href="/register" 
                className="btn btn-secondary hover:translate-y-[-2px] active:translate-y-[1px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage mr-2"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              custom={7}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link 
                href="/login" 
                className="btn btn-primary hover:translate-y-[-2px] active:translate-y-[1px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage"
              >
                Login
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:hidden p-2 rounded-lg text-dark-forest dark:text-pale-lime bg-white/30 dark:bg-gray-800/30 hover:bg-pale-lime/40 dark:hover:bg-dark-forest/40 focus:outline-none focus:ring-2 focus:ring-sage transition-all duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark-forest/20 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-t border-sage/20 shadow-xl md:hidden overflow-hidden z-50"
            >
              <div className="container py-5">
                <nav className="flex flex-col space-y-3">
                  {['About', 'Services', 'News', 'Contact'].map((item, index) => (
                    <motion.div 
                      key={item} 
                      variants={mobileItemVariants}
                      custom={index}
                      onClick={toggleMenu}
                    >
                      <Link 
                        href={`/${item.toLowerCase()}`} 
                        className="block py-3 px-4 text-gray-700 dark:text-gray-200 font-medium hover:bg-pale-lime/30 dark:hover:bg-dark-forest/30 hover:text-dark-forest dark:hover:text-pale-lime rounded-lg transition-all duration-300 hover-slide-x"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    variants={mobileItemVariants}
                    custom={4}
                    onClick={toggleMenu}
                  >
                    <Link 
                      href="/calculator" 
                      className="block py-3 px-4 text-gray-700 dark:text-gray-200 font-medium hover:bg-pale-lime/30 dark:hover:bg-dark-forest/30 hover:text-dark-forest dark:hover:text-pale-lime rounded-lg transition-all duration-300 hover-slide-x"
                    >
                      Calculate
                    </Link>
                  </motion.div>
                  <motion.div 
                    variants={mobileItemVariants}
                    custom={5}
                    onClick={toggleMenu}
                  >
                    <Link 
                      href="/carbon-offset" 
                      className="block py-3 px-4 text-gray-700 dark:text-gray-200 font-medium hover:bg-pale-lime/30 dark:hover:bg-dark-forest/30 hover:text-dark-forest dark:hover:text-pale-lime rounded-lg transition-all duration-300 hover-slide-x"
                    >
                      Offset
                    </Link>
                  </motion.div>
                  <motion.div 
                    variants={mobileItemVariants}
                    custom={6}
                  >
                    <Link 
                      href="/register" 
                      className="block w-full py-3 px-4 mt-3 text-center bg-sage hover:bg-sage/80 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                  <motion.div 
                    variants={mobileItemVariants}
                    custom={7}
                  >
                    <Link 
                      href="/login" 
                      className="block w-full py-3 px-4 mt-3 text-center bg-dark-forest hover:bg-sage text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      Login
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 