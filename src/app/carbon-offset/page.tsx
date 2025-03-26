'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSeedling, FaSolarPanel, FaWind, FaTree, FaRecycle, FaChartLine } from 'react-icons/fa';

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

export default function CarbonOffset() {
  // Offset project types data
  const projectTypes = [
    {
      icon: <FaTree />,
      title: "Reforestation & Conservation",
      description: "Projects that protect existing forests or restore degraded land through tree planting, enhancing carbon sequestration and biodiversity."
    },
    {
      icon: <FaSolarPanel />,
      title: "Renewable Energy",
      description: "Solar, hydro, and geothermal projects that replace fossil fuel-based energy production, reducing greenhouse gas emissions."
    },
    {
      icon: <FaWind />,
      title: "Wind Energy",
      description: "Wind farms that generate clean electricity, avoiding emissions from conventional fossil fuel power plants."
    },
    {
      icon: <FaRecycle />,
      title: "Waste Management",
      description: "Projects that reduce methane emissions from landfills, implement recycling programs, or convert waste to energy."
    },
    {
      icon: <FaSeedling />,
      title: "Regenerative Agriculture",
      description: "Farming methods that sequester carbon in soil while improving crop yields and ecosystem health."
    },
    {
      icon: <FaChartLine />,
      title: "Energy Efficiency",
      description: "Programs that reduce energy consumption in buildings, transportation, and industrial processes."
    }
  ];

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
            <h1 className="page-title">Carbon Offset Solutions</h1>
            <p className="page-description">
              Balance your carbon footprint by investing in verified climate action projects that reduce, remove, or avoid greenhouse gas emissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What are Carbon Offsets Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">What Are Carbon Offsets?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                Carbon offsets represent a reduction, removal, or avoidance of greenhouse gas emissions that compensate for emissions occurring elsewhere. When you purchase a carbon offset, you're investing in projects that reduce carbon dioxide or other greenhouse gases in the atmosphere.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                At Clearbon, we connect you with high-integrity carbon offset projects around the world. Each carbon credit you purchase represents one metric ton of carbon dioxide equivalent (CO₂e) that has been reduced or removed from the atmosphere.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                While reducing your own emissions should be the first priority, carbon offsets provide a way to take responsibility for unavoidable emissions while supporting sustainable development and climate innovation.
              </p>
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
                  src="/images/carbon-offset.jpg" 
                  alt="Carbon offset visualized" 
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

      {/* How It Works Section */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">How Carbon Offsetting Works</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Our platform makes it easy to calculate, offset, and track your carbon footprint with just a few simple steps.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 grid-gap-lg"
          >
            <motion.div 
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <span className="text-dark-forest text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Calculate Your Footprint</h3>
              <p>Use our carbon calculator to measure the emissions from your activities, whether you're an individual, household, or business.</p>
              <Link href="/calculator" className="mt-5 inline-block text-dark-forest hover-underline">
                Try the Calculator
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <span className="text-dark-forest text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Choose Offset Projects</h3>
              <p>Browse verified projects across different categories and regions. Select projects that align with your values and sustainability goals.</p>
              <Link href="#project-types" className="mt-5 inline-block text-dark-forest hover-underline">
                View Project Types
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <span className="text-dark-forest text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Purchase & Track</h3>
              <p>Complete your purchase and receive a certificate. Monitor the impact of your offsets through our transparent tracking system.</p>
              <Link href="/trading-process" className="mt-5 inline-block text-dark-forest hover-underline">
                Learn About Trading
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="project-types" className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Carbon Offset Project Types</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              We offer a diverse range of verified carbon offset projects across multiple sectors and geographies. All projects meet rigorous standards for environmental integrity, additionality, and sustainable development.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-lg"
          >
            {projectTypes.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card card-hover"
              >
                <div className="card-body">
                  <div className="flex items-start mb-4">
                    <div className="bg-sage/20 p-4 rounded-lg mr-4">
                      <div className="text-dark-forest text-2xl">
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mt-2">{project.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Verification Standards */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Our Verification Standards</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                We only list carbon offset projects that meet the highest standards of environmental integrity. All projects on our platform are verified by trusted third-party organizations and meet international standards for carbon offsetting.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Additionality</h3>
                    <p className="text-gray-700 dark:text-gray-300">Projects must demonstrate that carbon reductions would not have occurred without carbon credit financing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Permanence</h3>
                    <p className="text-gray-700 dark:text-gray-300">Carbon reductions must be maintained over time, with safeguards against reversal of climate benefits.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">No Double Counting</h3>
                    <p className="text-gray-700 dark:text-gray-300">Each carbon credit is tracked through a registry system to ensure it's only counted and sold once.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Social Benefits</h3>
                    <p className="text-gray-700 dark:text-gray-300">Projects must contribute to sustainable development goals and provide co-benefits to local communities.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="grid grid-cols-2 gap-6"
            >
              <div className="card shadow-soft p-6 text-center">
                <Image 
                  src="/images/verification/gold-standard.png" 
                  alt="Gold Standard" 
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="font-medium text-dark-forest dark:text-pale-lime">Gold Standard</h3>
              </div>
              <div className="card shadow-soft p-6 text-center">
                <Image 
                  src="/images/verification/verra.png" 
                  alt="Verra VCS" 
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="font-medium text-dark-forest dark:text-pale-lime">Verra VCS</h3>
              </div>
              <div className="card shadow-soft p-6 text-center">
                <Image 
                  src="/images/verification/climate-action-reserve.png" 
                  alt="Climate Action Reserve" 
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="font-medium text-dark-forest dark:text-pale-lime">Climate Action Reserve</h3>
              </div>
              <div className="card shadow-soft p-6 text-center">
                <Image 
                  src="/images/verification/american-carbon-registry.png" 
                  alt="American Carbon Registry" 
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="font-medium text-dark-forest dark:text-pale-lime">American Carbon Registry</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto bg-dark-forest text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-sage/20 blur-2xl"></div>
              <div className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-pale-lime/10 blur-2xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Offset Your Carbon Footprint?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Join thousands of individuals and businesses taking responsibility for their climate impact through our verified carbon offset projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/calculator" className="btn bg-sage hover:bg-pale-lime hover:text-dark-forest text-dark-forest font-medium transition-all duration-300">
                  Calculate Your Footprint
                </Link>
                <Link href="/for-businesses" className="btn border border-white text-white hover:bg-white hover:text-dark-forest transition-all duration-300">
                  Business Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 