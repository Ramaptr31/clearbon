'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaHandshake, FaChartLine, FaGlobeAmericas } from 'react-icons/fa';

// Animation variants
const fadeIn = {
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

export default function OurMission() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="page-header">
        <div className="page-header-content">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="page-title">Our Mission</h1>
            <p className="page-description">
              Driven by a vision of a carbon-neutral future, Clearbon is on a mission to make carbon trading accessible and impactful for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="mb-16 text-center"
            >
              <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-8">Our Core Purpose</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                At Clearbon, we are committed to accelerating the transition to a low-carbon economy by making carbon trading transparent, efficient, and accessible to both businesses and individuals. We believe that by democratizing access to carbon markets, we can mobilize global resources to combat climate change effectively.
              </p>
            </motion.div>

            {/* Mission Pillars */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 grid-gap-lg"
            >
              {/* Pillar 1 */}
              <motion.div 
                variants={fadeIn}
                className="card card-body"
              >
                <div className="flex items-start">
                  <div className="bg-sage/20 p-4 rounded-lg mr-5">
                    <FaLeaf className="text-dark-forest w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Environmental Impact</h3>
                    <p>We're committed to catalyzing projects that deliver measurable carbon reductions and promote biodiversity. Our strict verification processes ensure that every carbon credit represents genuine environmental benefits.</p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div 
                variants={fadeIn}
                className="card card-body"
              >
                <div className="flex items-start">
                  <div className="bg-sage/20 p-4 rounded-lg mr-5">
                    <FaHandshake className="text-dark-forest w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Inclusivity & Accessibility</h3>
                    <p>We've designed our platform to be user-friendly for individuals and organizations of all sizes. Carbon trading shouldn't be limited to large corporations — everyone should have the opportunity to contribute to climate solutions.</p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div 
                variants={fadeIn}
                className="card card-body"
              >
                <div className="flex items-start">
                  <div className="bg-sage/20 p-4 rounded-lg mr-5">
                    <FaChartLine className="text-dark-forest w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Transparency & Trust</h3>
                    <p>We maintain complete transparency in our operations, from project selection to carbon credit issuance. Our blockchain-based tracking system ensures full traceability of carbon credits from generation to retirement.</p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 4 */}
              <motion.div 
                variants={fadeIn}
                className="card card-body"
              >
                <div className="flex items-start">
                  <div className="bg-sage/20 p-4 rounded-lg mr-5">
                    <FaGlobeAmericas className="text-dark-forest w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Global Collaboration</h3>
                    <p>Climate change is a global challenge that requires global solutions. We actively foster partnerships with projects, organizations, and communities worldwide to create a diverse portfolio of climate solutions.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement with Image */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Our Vision for 2030</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                By 2030, we envision a world where carbon trading is an integral part of the global economy, with Clearbon serving as the leading platform connecting emission reducers with those seeking to offset their carbon footprint.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-dark-forest mr-3">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Facilitate the trading of 100 million tons of carbon dioxide equivalent annually</p>
                </li>
                <li className="flex items-start">
                  <span className="text-dark-forest mr-3">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Support 1,000+ renewable energy, reforestation, and sustainable agriculture projects worldwide</p>
                </li>
                <li className="flex items-start">
                  <span className="text-dark-forest mr-3">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Enable 10 million individuals to participate in carbon markets through our accessible platform</p>
                </li>
                <li className="flex items-start">
                  <span className="text-dark-forest mr-3">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Provide detailed impact tracking for all projects, demonstrating measurable climate benefits</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="relative mt-10 lg:mt-0"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/mission-vision.jpg" 
                  alt="Our vision for carbon trading" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover-zoom"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-dark-forest/20 blur-xl z-0"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-sage/20 blur-xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Join Us in Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Whether you're looking to offset your carbon footprint, invest in sustainable projects, or partner with us to expand carbon markets, there's a place for you in our mission to combat climate change.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/calculator" className="btn btn-primary hover-lift">
                Calculate Your Footprint
              </Link>
              <Link href="/contact" className="btn btn-outline hover-lift">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 