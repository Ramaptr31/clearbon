'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants
const footerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const footerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.1, 0.9, 0.2, 1]
    }
  }
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.1, 0.9, 0.2, 1]
    }
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: [0.1, 0.9, 0.2, 1]
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerContainerVariants}
      className="bg-pale-lime/15 dark:bg-gray-900 border-t border-sage/20 dark:border-gray-800/50 mt-10"
    >
      <div className="container py-12 md:py-16">
        {/* Newsletter - Now moved to the top */}
        <motion.div 
          className="mb-16 pb-8 border-b border-sage/20 dark:border-gray-800/50"
          variants={footerItemVariants}
        >
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-5 text-dark-forest dark:text-pale-lime text-center">Stay Updated</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
              Subscribe to our newsletter for the latest updates on carbon trading and environmental sustainability.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 flex-grow rounded-lg border border-sage/30 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
                aria-label="Email address"
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary hover-lift focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
          {/* Logo and description */}
          <motion.div className="lg:col-span-2" variants={footerItemVariants}>
            <Link href="/" className="inline-flex items-center group">
              <div className="relative w-10 h-10 mr-3 transition-all duration-300 group-hover:scale-110">
                <Image 
                  src="/logo.svg" 
                  alt="Clearbon Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-dark-forest dark:text-pale-lime tracking-tight hover-underline">Clearbon</span>
            </Link>
            <p className="mt-5 text-gray-700 dark:text-gray-300 max-w-md">
              Making carbon trading accessible and transparent. Join us in our mission to create a more sustainable future through effective carbon management.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <motion.a 
                href="https://twitter.com/clearbon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/30 dark:bg-dark-forest/30 text-dark-forest dark:text-pale-lime hover:bg-dark-forest hover:text-white dark:hover:bg-pale-lime dark:hover:text-dark-forest transition-all duration-300"
                aria-label="Twitter"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/clearbon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/30 dark:bg-dark-forest/30 text-dark-forest dark:text-pale-lime hover:bg-dark-forest hover:text-white dark:hover:bg-pale-lime dark:hover:text-dark-forest transition-all duration-300"
                aria-label="LinkedIn"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/clearbon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/30 dark:bg-dark-forest/30 text-dark-forest dark:text-pale-lime hover:bg-dark-forest hover:text-white dark:hover:bg-pale-lime dark:hover:text-dark-forest transition-all duration-300"
                aria-label="Instagram"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a 
                href="https://facebook.com/clearbon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/30 dark:bg-dark-forest/30 text-dark-forest dark:text-pale-lime hover:bg-dark-forest hover:text-white dark:hover:bg-pale-lime dark:hover:text-dark-forest transition-all duration-300"
                aria-label="Facebook"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaFacebook size={18} />
              </motion.a>
              <motion.a 
                href="https://youtube.com/clearbon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/30 dark:bg-dark-forest/30 text-dark-forest dark:text-pale-lime hover:bg-dark-forest hover:text-white dark:hover:bg-pale-lime dark:hover:text-dark-forest transition-all duration-300"
                aria-label="YouTube"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaYoutube size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={footerItemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-dark-forest dark:text-pale-lime">Company</h3>
            <ul className="space-y-3">
              {['About', 'Our Mission', 'Our Team', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 dark:text-gray-300 hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-slide-x inline-flex">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={footerItemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-dark-forest dark:text-pale-lime">Services</h3>
            <ul className="space-y-3">
              {['Carbon Calculator', 'Carbon Offset', 'Trading Process', 'For Businesses', 'For Individuals'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 dark:text-gray-300 hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-slide-x inline-flex">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={footerItemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-dark-forest dark:text-pale-lime">Resources</h3>
            <ul className="space-y-3">
              {['News', 'FAQs', 'Documentation', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 dark:text-gray-300 hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-slide-x inline-flex">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-sage/20 dark:border-gray-800/50 text-center"
          variants={footerItemVariants}
        >
          <p className="text-gray-700 dark:text-gray-400 text-sm">
            © {currentYear} Clearbon. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-5 text-sm text-gray-700 dark:text-gray-400">
            <Link href="/privacy-policy" className="hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-underline">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-underline">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-underline">
              Sitemap
            </Link>
            <Link href="/contact" className="hover:text-dark-forest dark:hover:text-pale-lime transition-colors duration-300 hover-underline">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
} 