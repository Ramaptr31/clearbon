'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const footerLinks = [
    {
      title: 'About',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Our Team', href: '/about#team' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'What We Do', href: '/what-we-do' },
        { name: 'Carbon Calculator', href: '/calculator' },
        { name: 'Carbon Footprint', href: '/what-we-do#footprint' },
        { name: 'Carbon Offset', href: '/what-we-do#offset' },
        { name: 'Trading Process', href: '/what-we-do#trading' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'News', href: '/news' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: 'https://twitter.com' },
    { name: 'Facebook', icon: <FaFacebookF className="w-5 h-5" />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedinIn className="w-5 h-5" />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-primary">Clearbon</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Clearbon is a platform that connects companies and NGOs to facilitate carbon trading, helping reduce carbon emissions and combat climate change.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Clearbon. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 