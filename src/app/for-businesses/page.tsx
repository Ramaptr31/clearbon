'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBuilding, FaChartLine, FaRegHandshake, FaShieldAlt, FaUsers, FaFileAlt } from 'react-icons/fa';

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

export default function ForBusinesses() {
  // Business solutions data
  const solutions = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Carbon Footprint Analysis",
      description: "Comprehensive assessment of your organization's greenhouse gas emissions across Scope 1, 2, and 3, with detailed insights and reduction recommendations."
    },
    {
      icon: <FaRegHandshake className="w-8 h-8" />,
      title: "Corporate Offset Programs",
      description: "Customized carbon offset strategies aligned with your sustainability goals, industry requirements, and stakeholder expectations."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Compliance Solutions",
      description: "Navigate regulatory requirements in carbon markets with our compliance-focused solutions, ensuring you meet current and upcoming obligations."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Employee Engagement",
      description: "Engage your team in sustainability initiatives with personal carbon footprint calculators, offsetting programs, and educational resources."
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "ESG Reporting & Disclosure",
      description: "Comprehensive carbon data and analytics for your ESG reporting, including support for frameworks like TCFD, GRI, and CDP."
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Supply Chain Management",
      description: "Tools to measure, report, and reduce emissions throughout your supply chain, helping you achieve Scope 3 emission reduction targets."
    }
  ];

  // Cases studies data
  const caseStudies = [
    {
      company: "TechGlobal Inc.",
      industry: "Technology",
      challenge: "Needed to achieve carbon neutrality across global operations while addressing Scope 3 emissions from their supply chain.",
      solution: "Implemented a comprehensive carbon management strategy, including detailed supply chain emissions mapping and high-impact offset portfolio.",
      result: "Achieved carbon neutrality for direct operations within 18 months and reduced supply chain emissions by 25% through supplier engagement.",
      image: "/images/case-studies/tech-global.jpg"
    },
    {
      company: "EcoRetail Group",
      industry: "Retail",
      challenge: "Faced pressure from consumers and investors to reduce environmental impact across 500+ store locations and e-commerce operations.",
      solution: "Deployed store-by-store energy efficiency program combined with renewable energy credits and targeted carbon offset investments.",
      result: "Reduced operational emissions by 40% and achieved carbon-neutral shipping for all e-commerce orders.",
      image: "/images/case-studies/eco-retail.jpg"
    },
    {
      company: "GreenManufacture Co.",
      industry: "Manufacturing",
      challenge: "Needed to address high-emission production processes while maintaining competitive pricing in a cost-sensitive market.",
      solution: "Developed a phased approach to emission reductions, combining process improvements with strategic carbon offsetting.",
      result: "Reduced carbon intensity of products by 35% and created a premium 'carbon-neutral' product line that increased market share.",
      image: "/images/case-studies/green-manufacture.jpg"
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
            <h1 className="page-title">Carbon Solutions for Business</h1>
            <p className="page-description">
              Comprehensive carbon management strategies to help your organization achieve its sustainability goals, manage risks, and create business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Why Businesses Choose Clearbon</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                In today's business environment, addressing carbon emissions isn't just about environmental responsibility—it's a strategic imperative. Investors, customers, employees, and regulators increasingly expect organizations to take meaningful climate action.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                At Clearbon, we provide businesses with the tools, insights, and market access needed to develop and implement effective carbon strategies that align with your organizational goals.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Meet Stakeholder Expectations</h3>
                    <p className="text-gray-700 dark:text-gray-300">Address the growing demands from investors, customers, and employees for climate action and transparency.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Manage Climate-Related Risks</h3>
                    <p className="text-gray-700 dark:text-gray-300">Mitigate regulatory, reputational, and physical risks associated with climate change and carbon emissions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Gain Competitive Advantage</h3>
                    <p className="text-gray-700 dark:text-gray-300">Differentiate your brand and products in the marketplace through credible climate commitments and carbon-neutral offerings.</p>
                  </div>
                </div>
              </div>
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
                  src="/images/business-meeting.jpg" 
                  alt="Business sustainability meeting" 
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

      {/* Solutions Grid */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Our Business Solutions</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Comprehensive services to help your organization measure, reduce, and offset carbon emissions while creating business value.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-lg"
          >
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card card-hover"
              >
                <div className="card-body">
                  <div className="flex items-start mb-4">
                    <div className="bg-sage/20 p-4 rounded-lg mr-4">
                      <div className="text-dark-forest text-2xl">
                        {solution.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mt-2">{solution.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Success Stories</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              See how businesses across different industries have leveraged our platform to achieve their sustainability goals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card card-hover shadow-soft overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <Image 
                      src={study.image} 
                      alt={study.company} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover-zoom"
                    />
                  </div>
                  <div className="col-span-2 card-body">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold text-dark-forest dark:text-pale-lime">{study.company}</h3>
                      <span className="bg-sage/20 text-dark-forest text-sm font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 grid-gap-sm mb-5">
                      <div>
                        <h4 className="font-medium text-dark-forest dark:text-pale-lime mb-2">Challenge</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-forest dark:text-pale-lime mb-2">Solution</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-forest dark:text-pale-lime mb-2">Results</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{study.result}</p>
                      </div>
                    </div>
                    
                    <Link href="/contact" className="btn btn-outline hover-lift">
                      Read Full Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link href="/case-studies" className="btn btn-primary hover-lift">
              View More Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Tailored to Your Business</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                We understand that every business is unique, with different sustainability goals, industry requirements, and organizational structures. That's why we offer customized carbon management solutions designed specifically for your needs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our team of experts works closely with you to understand your business context and develop a carbon strategy that aligns with your sustainability objectives, budget constraints, and stakeholder expectations.
              </p>
              
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-4">Industries We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-dark-forest dark:text-pale-lime">Technology</span>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-dark-forest dark:text-pale-lime">Finance</span>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-dark-forest dark:text-pale-lime">Manufacturing</span>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-dark-forest dark:text-pale-lime">Retail</span>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-dark-forest dark:text-pale-lime">Transportation</span>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-dark-forest dark:text-pale-lime">Energy</span>
                </div>
              </div>
              
              <Link href="/contact" className="btn btn-primary hover-lift">
                Schedule a Consultation
              </Link>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="relative mt-10 lg:mt-0 order-first lg:order-last"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/custom-solutions.jpg" 
                  alt="Custom carbon solutions for business" 
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

      {/* Get Started CTA */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Carbon Strategy?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Join leading businesses that are turning climate action into competitive advantage with Clearbon's comprehensive carbon management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact" className="btn bg-sage hover:bg-pale-lime hover:text-dark-forest text-dark-forest font-medium transition-all duration-300">
                  Request a Demo
                </Link>
                <Link href="/calculator" className="btn border border-white text-white hover:bg-white hover:text-dark-forest transition-all duration-300">
                  Try Our Calculator
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 