'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaShieldAlt, FaUserCheck, FaFileContract, FaChartLine, FaFileAlt } from 'react-icons/fa';

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

export default function TradingProcess() {
  // Trading process steps data
  const tradingSteps = [
    {
      icon: <FaUserCheck className="w-8 h-8" />,
      title: "Account Setup & Verification",
      description: "Create your Clearbon account and complete our verification process to ensure compliance with KYC (Know Your Customer) requirements."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Market Exploration",
      description: "Browse available carbon credits from verified projects, filtering by project type, location, certification standard, and price range."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Due Diligence",
      description: "Review project documentation, verification reports, and impact metrics to ensure the credits meet your sustainability criteria and standards."
    },
    {
      icon: <FaExchangeAlt className="w-8 h-8" />,
      title: "Purchase & Settlement",
      description: "Execute your trade through our secure platform, with transparent pricing and low transaction fees. Payment can be made via various methods."
    },
    {
      icon: <FaFileContract className="w-8 h-8" />,
      title: "Credit Issuance & Registry",
      description: "Once settled, your carbon credits are transferred to your account and recorded in the appropriate carbon registry for full traceability."
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Retirement & Reporting",
      description: "Choose to retire credits immediately to offset your emissions or hold them for future use. Receive detailed reports for sustainability disclosures."
    }
  ];

  // Trading mechanisms data
  const tradingMechanisms = [
    {
      title: "Direct Purchase",
      description: "Buy carbon credits directly from verified projects or credit owners at a fixed price."
    },
    {
      title: "Auction Participation",
      description: "Bid on carbon credit lots through our regular auction events, offering potential for competitive pricing."
    },
    {
      title: "Subscription Model",
      description: "Set up recurring purchases to automatically offset your emissions on a monthly or quarterly basis."
    },
    {
      title: "Portfolio Management",
      description: "Create a diversified portfolio of carbon credits across different project types and regions."
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
            <h1 className="page-title">Carbon Trading Process</h1>
            <p className="page-description">
              Understand how our transparent, secure, and efficient carbon trading platform works to connect buyers and sellers in the voluntary carbon market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">What is Carbon Trading?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                Carbon trading is a market-based approach to controlling carbon emissions by providing economic incentives for reducing the discharge of pollutants. The concept involves buying and selling permits and credits that allow the holder to emit a specific amount of carbon dioxide or other greenhouse gases.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                At Clearbon, we focus on the voluntary carbon market, where businesses, organizations, and individuals can purchase carbon credits to offset their emissions voluntarily, beyond any regulatory requirements.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our platform utilizes blockchain technology to ensure transparency, security, and traceability in every transaction. This allows buyers to trust that their investments are making a real impact on reducing global carbon emissions.
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
                  src="/images/carbon-trading.jpg" 
                  alt="Carbon trading process visualization" 
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

      {/* How It Works Section - Timeline Style */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">The Trading Process</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Our streamlined carbon trading process makes it easy to participate in climate action through the voluntary carbon market.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line for desktop */}
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-sage/30 z-0"></div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="relative z-10"
            >
              {tradingSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'} mb-8 md:mb-0`}>
                    <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                  
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                    <div className="bg-sage/20 p-4 rounded-full border-4 border-white dark:border-gray-800">
                      <div className="text-dark-forest">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 text-right'}`}></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trading Mechanisms Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Trading Mechanisms</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Clearbon offers several ways to acquire carbon credits, providing flexibility to match your sustainability strategy and requirements.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 grid-gap-lg"
          >
            {tradingMechanisms.map((mechanism, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="card card-hover"
              >
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">{mechanism.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{mechanism.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology & Security Section */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/blockchain-technology.jpg" 
                  alt="Blockchain technology for carbon trading" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover-zoom"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-dark-forest/20 blur-xl z-0"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-sage/20 blur-xl z-0"></div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Technology & Security</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                Our platform integrates advanced blockchain technology to ensure the integrity, transparency, and security of all carbon credit transactions. This technology creates an immutable record of each credit's journey from issuance to retirement.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Prevention of Double Counting</h3>
                    <p className="text-gray-700 dark:text-gray-300">Our blockchain-based registry ensures each carbon credit can only be sold and retired once, eliminating the risk of double counting.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Full Traceability</h3>
                    <p className="text-gray-700 dark:text-gray-300">Track the entire lifecycle of each carbon credit from project development to credit retirement, with timestamped verification at each stage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Secure Transactions</h3>
                    <p className="text-gray-700 dark:text-gray-300">Enterprise-grade security protocols protect all financial transactions and sensitive data on our platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-forest dark:text-pale-lime">Integration with Major Registries</h3>
                    <p className="text-gray-700 dark:text-gray-300">Our system connects with established carbon registries like Verra and Gold Standard to maintain consistency with global carbon accounting standards.</p>
                  </div>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Join the growing community of individuals and organizations using our platform to access the voluntary carbon market and make a positive impact on our climate.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/register" className="btn bg-sage hover:bg-pale-lime hover:text-dark-forest text-dark-forest font-medium transition-all duration-300">
                  Create an Account
                </Link>
                <Link href="/contact" className="btn border border-white text-white hover:bg-white hover:text-dark-forest transition-all duration-300">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 