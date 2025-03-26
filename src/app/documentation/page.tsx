'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaCalculator, FaFileAlt, FaChartBar, FaBuilding, FaUser, FaDownload, FaArrowRight } from 'react-icons/fa';

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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export default function Documentation() {
  // Documentation categories
  const docCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: <FaBook /> },
    { id: 'calculator', name: 'Carbon Calculator', icon: <FaCalculator /> },
    { id: 'offset-projects', name: 'Offset Projects', icon: <FaFileAlt /> },
    { id: 'reporting', name: 'Reporting & Analytics', icon: <FaChartBar /> },
    { id: 'business', name: 'For Businesses', icon: <FaBuilding /> },
    { id: 'individual', name: 'For Individuals', icon: <FaUser /> }
  ];

  const [activeCategory, setActiveCategory] = useState('getting-started');

  // Documentation resources
  const resources = [
    {
      title: "Platform Overview Guide",
      description: "A comprehensive introduction to the Clearbon platform and its features.",
      type: "PDF",
      size: "3.2 MB",
      link: "/docs/platform-overview.pdf"
    },
    {
      title: "Calculator Methodology",
      description: "Detailed explanation of our carbon calculation methodology and data sources.",
      type: "PDF",
      size: "2.8 MB",
      link: "/docs/calculator-methodology.pdf"
    },
    {
      title: "Offset Project Standards",
      description: "Learn about the verification standards we use for carbon offset projects.",
      type: "PDF",
      size: "1.5 MB",
      link: "/docs/offset-standards.pdf"
    },
    {
      title: "Business Integration Guide",
      description: "Technical guide for integrating our API with your business systems.",
      type: "PDF",
      size: "4.1 MB",
      link: "/docs/business-integration.pdf"
    }
  ];

  // Documentation content by category
  const docContent = {
    'getting-started': {
      title: "Getting Started with Clearbon",
      description: "Welcome to Clearbon! This guide will help you understand how to use our platform to measure, reduce, and offset your carbon footprint.",
      sections: [
        {
          heading: "Creating Your Account",
          content: "To get started with Clearbon, you'll need to create an account. Click the 'Sign Up' button in the top right corner of our homepage. You can register using your email or through Google or Apple accounts. Once registered, you'll be guided through the initial setup process to customize your experience.",
          image: "/images/docs/account-creation.jpg"
        },
        {
          heading: "Understanding Your Dashboard",
          content: "After logging in, you'll land on your personalized dashboard. This is your command center for climate action. Here you'll find your carbon footprint summary, reduction goals, offset history, and recommended actions. The dashboard adapts based on whether you're an individual user or a business account.",
          image: "/images/docs/dashboard.jpg"
        },
        {
          heading: "Your First Carbon Calculation",
          content: "Start by calculating your carbon footprint. For individuals, you'll answer questions about your lifestyle, transportation, home energy use, and consumption habits. For businesses, you'll input data about operations, energy use, and supply chain activities. Our calculator uses this information to estimate your greenhouse gas emissions.",
          image: "/images/docs/calculator.jpg"
        },
        {
          heading: "Exploring Offset Projects",
          content: "Once you've calculated your footprint, you can explore our verified carbon offset projects. Browse by project type, location, or co-benefits. Each project includes detailed information about its impact, verification status, and the communities it supports. You can select specific projects that align with your values.",
          image: "/images/docs/projects.jpg"
        },
        {
          heading: "Setting Reduction Goals",
          content: "Carbon offsetting works best alongside emission reductions. Set reduction goals based on the personalized recommendations we provide. Track your progress over time as you implement changes to your lifestyle or business operations to reduce your carbon footprint.",
          image: "/images/docs/reduction-goals.jpg"
        }
      ]
    },
    'calculator': {
      title: "Using the Carbon Calculator",
      description: "Our carbon calculator is designed to provide accurate estimates of your greenhouse gas emissions while being user-friendly and educational.",
      sections: [
        {
          heading: "Calculator Overview",
          content: "The Clearbon calculator follows greenhouse gas accounting protocols while simplifying the process for users. For individuals, we cover transportation, home energy, food, purchases, and services. For businesses, we address Scope 1, 2, and 3 emissions following the Greenhouse Gas Protocol standards.",
          image: "/images/docs/calculator-overview.jpg"
        },
        {
          heading: "Entering Your Data",
          content: "When using the calculator, you'll progress through a series of sections. For the most accurate results, try to provide specific information like your actual electricity usage or miles driven. However, we also offer simplified options using national or regional averages if you don't have exact figures available.",
          image: "/images/docs/data-entry.jpg"
        },
        {
          heading: "Understanding Your Results",
          content: "After completing the calculator, you'll receive a breakdown of your carbon footprint by category. This visualization helps you identify your biggest emission sources and where to focus reduction efforts. Your results are compared to relevant averages to provide context for your impact.",
          image: "/images/docs/results.jpg"
        },
        {
          heading: "Saving and Updating Your Calculation",
          content: "Your calculation results are saved to your account for future reference. We recommend updating your calculation periodically (every 6-12 months for individuals, quarterly for businesses) or when significant changes occur. You can easily update specific sections without redoing the entire calculation.",
          image: "/images/docs/updating.jpg"
        },
        {
          heading: "Activity-Specific Calculations",
          content: "In addition to complete footprint calculations, you can also perform activity-specific calculations for events, travel, or specific business activities. These targeted calculations are perfect for one-time offsetting or project-specific sustainability initiatives.",
          image: "/images/docs/activity-specific.jpg"
        }
      ]
    },
    'offset-projects': {
      title: "Understanding Carbon Offset Projects",
      description: "Carbon offset projects reduce, remove, or avoid greenhouse gas emissions. Learn how these projects work and how we ensure their quality and impact.",
      sections: [
        {
          heading: "Types of Carbon Offset Projects",
          content: "We offer diverse project types including renewable energy (solar, wind, hydro), forestry (reforestation, avoided deforestation), methane capture, energy efficiency, and community-focused projects like clean cookstoves. Each project type addresses different aspects of climate change mitigation.",
          image: "/images/docs/project-types.jpg"
        },
        {
          heading: "Verification and Standards",
          content: "All projects on our platform are verified by independent third parties using internationally recognized standards like Gold Standard, Verra (VCS), Climate Action Reserve, or American Carbon Registry. These standards ensure projects deliver real, additional, permanent, and accurately measured climate benefits.",
          image: "/images/docs/verification.jpg"
        },
        {
          heading: "Understanding Co-Benefits",
          content: "Beyond carbon reduction, many projects deliver additional environmental and social benefits. These can include biodiversity protection, improved water quality, community economic development, health improvements, gender equality, and more. We highlight these co-benefits to help you select projects aligned with your values.",
          image: "/images/docs/co-benefits.jpg"
        },
        {
          heading: "Project Selection Process",
          content: "When offsetting, you can choose specific projects or let us create a balanced portfolio. Individual users often select projects based on personal values or interests, while businesses might align projects with their industry, operational locations, or sustainability goals.",
          image: "/images/docs/selection.jpg"
        },
        {
          heading: "Tracking Your Impact",
          content: "After supporting a project, you'll receive detailed information about your contribution's impact. This includes the quantity of emissions offset, project-specific metrics, and updates about progress and milestones. For businesses, we provide more detailed reporting suitable for ESG disclosures.",
          image: "/images/docs/impact-tracking.jpg"
        }
      ]
    },
    'reporting': {
      title: "Reporting & Analytics",
      description: "Track your climate impact over time with our comprehensive reporting and analytics tools.",
      sections: [
        {
          heading: "Dashboard Analytics",
          content: "Your dashboard provides real-time analytics of your carbon footprint, reduction progress, and offset history. Visual charts and graphs make it easy to understand your impact at a glance and track changes over time. Key metrics are highlighted to give you a quick overview of your climate action journey.",
          image: "/images/docs/dashboard-analytics.jpg"
        },
        {
          heading: "Detailed Reports",
          content: "Generate detailed reports for specific time periods or activities. These reports break down your emissions by source, show your reduction achievements, and document your offset purchases. Reports can be customized to include the metrics most relevant to your goals.",
          image: "/images/docs/detailed-reports.jpg"
        },
        {
          heading: "Business ESG Reporting",
          content: "For business users, we offer specialized reporting aligned with common ESG frameworks like GRI, CDP, and TCFD. These reports help streamline your sustainability disclosures and provide the documentation needed for stakeholder communications and regulatory compliance.",
          image: "/images/docs/esg-reporting.jpg"
        },
        {
          heading: "Certificate Generation",
          content: "After offsetting emissions, you can generate certificates documenting your climate action. These certificates include details about the quantity offset, projects supported, and verification standards. Businesses can use these for marketing, stakeholder communications, and documentation.",
          image: "/images/docs/certificates.jpg"
        },
        {
          heading: "Data Export Options",
          content: "Export your data in multiple formats (PDF, CSV, Excel) for external analysis or integration with other systems. This flexibility allows you to incorporate your climate data into broader sustainability management processes or custom reporting workflows.",
          image: "/images/docs/data-export.jpg"
        }
      ]
    },
    'business': {
      title: "Business Solutions Documentation",
      description: "Comprehensive guides for businesses implementing carbon management strategies through our platform.",
      sections: [
        {
          heading: "Business Account Setup",
          content: "Business accounts offer enhanced features including multi-user access, department-level tracking, custom reporting, and API access. During setup, you'll define your organizational structure, set user permissions, and configure your account to align with your business operations.",
          image: "/images/docs/business-setup.jpg"
        },
        {
          heading: "Emissions Inventory Management",
          content: "Create and maintain a comprehensive greenhouse gas inventory following the GHG Protocol. Track emissions across Scopes 1, 2, and 3, set reduction targets, and monitor progress. Our platform simplifies data collection and calculations while ensuring accuracy and compliance with reporting standards.",
          image: "/images/docs/emissions-inventory.jpg"
        },
        {
          heading: "Supply Chain Emissions",
          content: "Address Scope 3 emissions with our supply chain tools. Import supplier data, send assessment questionnaires, and model emissions for complex supply networks. Our system helps identify hotspots and opportunities for supplier engagement and emissions reduction.",
          image: "/images/docs/supply-chain.jpg"
        },
        {
          heading: "API Integration",
          content: "Our API allows integration with your existing systems including ERP, energy management, travel booking, and sustainability management platforms. This technical documentation covers authentication, available endpoints, data structures, and example implementations.",
          image: "/images/docs/api-integration.jpg"
        },
        {
          heading: "Employee Engagement Programs",
          content: "Implement internal carbon reduction and offsetting programs for employees. Our platform supports individual employee footprint calculations, team challenges, education modules, and options for employees to contribute to company offset initiatives.",
          image: "/images/docs/employee-engagement.jpg"
        }
      ]
    },
    'individual': {
      title: "Documentation for Individual Users",
      description: "Resources to help individual users maximize their climate impact through our platform.",
      sections: [
        {
          heading: "Personal Account Features",
          content: "Explore the features designed specifically for individual users, including personalized recommendations, progress tracking, achievement badges, and social sharing options. Learn how to customize your dashboard and set preferences for a tailored experience.",
          image: "/images/docs/personal-features.jpg"
        },
        {
          heading: "Subscription Offset Plans",
          content: "Monthly subscription plans provide an easy way to maintain carbon neutrality. Learn how to select the right subscription level, customize your project portfolio, and adjust your subscription as your footprint changes. We also explain billing options and how to manage your subscription.",
          image: "/images/docs/subscription-plans.jpg"
        },
        {
          heading: "One-Time Offset Purchases",
          content: "For specific activities like flights, events, or purchases, one-time offsets provide targeted climate action. This guide explains how to calculate emissions for specific activities, select appropriate offset amounts, and receive documentation of your offset action.",
          image: "/images/docs/one-time-offsets.jpg"
        },
        {
          heading: "Lifestyle Reduction Strategies",
          content: "Offsetting works best alongside emissions reductions. Learn practical strategies for reducing your carbon footprint through changes to transportation, home energy, diet, and consumption patterns. Our platform provides personalized recommendations based on your specific footprint profile.",
          image: "/images/docs/lifestyle-strategies.jpg"
        },
        {
          heading: "Gift Offsets",
          content: "Carbon offsets make meaningful gifts that create real environmental impact. Learn how to purchase gift offsets, customize the presentation with personal messages, and deliver the gift through email or printable certificates. We also explain how recipients can learn about the projects they're supporting.",
          image: "/images/docs/gift-offsets.jpg"
        }
      ]
    }
  };

  // Get content for current category
  const currentContent = docContent[activeCategory as keyof typeof docContent];

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
            <h1 className="page-title">Documentation & Resources</h1>
            <p className="page-description">
              Comprehensive guides and resources to help you get the most out of the Clearbon platform for managing your carbon footprint.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-gap-sm mb-12"
          >
            {docCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-dark-forest text-white'
                    : 'bg-sage/10 text-dark-forest hover:bg-sage/30'
                }`}
              >
                <div className="text-xl mb-2">{category.icon}</div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Documentation Content */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-3">{currentContent.title}</h2>
              <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">{currentContent.description}</p>
            </div>

            <div className="space-y-16">
              {currentContent.sections.map((section, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  className={`grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center ${
                    index % 2 !== 0 ? 'lg:rtl' : ''
                  }`}
                >
                  <div className={index % 2 !== 0 ? 'lg:text-right lg:ltr' : ''}>
                    <h3 className="text-2xl font-semibold text-dark-forest dark:text-pale-lime mb-4">{section.heading}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{section.content}</p>
                    <Link href="#" className="inline-flex items-center text-dark-forest font-medium hover:text-sage transition-colors">
                      Learn more <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                  <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src={section.image} 
                      alt={section.heading} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover-zoom"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Downloads Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-3">Downloadable Resources</h2>
              <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                Download these resources for more detailed information and offline reference.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap-lg"
            >
              {resources.map((resource, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="card card-hover bg-white dark:bg-gray-800"
                >
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime">{resource.title}</h3>
                      <span className="text-xs font-medium px-2 py-1 bg-sage/20 text-dark-forest rounded-full">{resource.type}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-5">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{resource.size}</span>
                      <Link href={resource.link} className="inline-flex items-center text-dark-forest font-medium hover:text-sage transition-colors">
                        Download <FaDownload className="ml-2 text-sm" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Need Additional Help?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Our support team is available to answer any questions and provide personalized guidance for your carbon journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary hover-lift">
                Contact Support
              </Link>
              <Link href="/faqs" className="btn btn-outline hover-lift">
                View FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 