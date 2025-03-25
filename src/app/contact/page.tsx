'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'company',
  });

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Intersection observer hooks
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactInfoRef, contactInfoInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a static site, we'll just simulate form submission
    setFormSubmitted(true);
    // Reset form after submission (normally not needed with page navigation)
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        type: 'company',
      });
    }, 300);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions about carbon trading or want to get started? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <motion.div 
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={slideUp}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Us a Message
              </h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your message has been sent successfully. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        You are a... *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formState.type}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                      >
                        <option value="company">Company looking to offset emissions</option>
                        <option value="ngo">NGO with offset projects</option>
                        <option value="partner">Potential business partner</option>
                        <option value="individual">Individual with questions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-md transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              ref={contactInfoRef}
              initial="hidden"
              animate={contactInfoInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Eco Boulevard, Sustainable Tower<br />
                      12th Floor, Jakarta 12345<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +62 21 5678 9012<br />
                      Monday - Friday, 9am - 5pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@clearbon.com<br />
                      support@clearbon.com
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: <FaTwitter className="text-2xl" />, href: 'https://twitter.com' },
                      { icon: <FaFacebookF className="text-2xl" />, href: 'https://facebook.com' },
                      { icon: <FaInstagram className="text-2xl" />, href: 'https://instagram.com' },
                      { icon: <FaLinkedinIn className="text-2xl" />, href: 'https://linkedin.com' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-primary transition-colors duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit our office to learn more about carbon trading solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-96 border border-gray-200 dark:border-gray-700"
          >
            {/* This would typically be an actual map, but for this static site it's a placeholder image */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                Map Placeholder
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 