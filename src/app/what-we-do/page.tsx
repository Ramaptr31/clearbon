'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaTree, FaSun, FaWater, FaRecycle } from 'react-icons/fa';

export default function WhatWeDo() {
  // Intersection observer hooks
  const [calculatorRef, calculatorInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [offsetRef, offsetInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [tradingRef, tradingInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // State for calculator
  const [industryType, setIndustryType] = useState('manufacturing');
  const [employeeCount, setEmployeeCount] = useState(100);
  const [energyConsumption, setEnergyConsumption] = useState(50000);
  const [wasteGenerated, setWasteGenerated] = useState(500);
  const [transportEmissions, setTransportEmissions] = useState(250);
  const [showResults, setShowResults] = useState(false);

  // Calculate carbon footprint (dummy calculation)
  const calculateFootprint = () => {
    setShowResults(true);
  };

  // Offset projects
  const offsetProjects = [
    {
      id: 1,
      name: 'Reforestation in Borneo',
      organization: 'Earth Restoration Alliance',
      description: 'Planting native tree species to restore degraded forest lands in Borneo, Indonesia.',
      image: '/images/forest-project.svg',
      price: 45,
      category: 'Forestry',
      icon: <FaTree className="text-primary text-2xl" />,
    },
    {
      id: 2,
      name: 'Solar Power Development in India',
      organization: 'Renewable Energy Foundation',
      description: 'Building solar farms in rural India to replace diesel generators and coal power plants.',
      image: '/images/solar-project.svg',
      price: 35,
      category: 'Renewable Energy',
      icon: <FaSun className="text-primary text-2xl" />,
    },
    {
      id: 3,
      name: 'Clean Water Access in East Africa',
      organization: 'Water Solutions International',
      description: 'Providing clean water sources that eliminate the need for wood-burning water purification.',
      image: '/images/water-project.svg',
      price: 40,
      category: 'Water',
      icon: <FaWater className="text-primary text-2xl" />,
    },
    {
      id: 4,
      name: 'Wind Energy Development in Brazil',
      organization: 'Circular Economy Hub',
      description: 'Implementing wind turbines to generate clean energy and reduce reliance on fossil fuels.',
      image: '/images/wind-project.svg',
      price: 30,
      category: 'Renewable Energy',
      icon: <FaRecycle className="text-primary text-2xl" />,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/hero-bg.svg"
            alt="Forests and nature"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              How Clearbon Works
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We provide end-to-end solutions for carbon trading, from footprint calculation to offset procurement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carbon Footprint Calculator Section */}
      <section 
        id="footprint"
        ref={calculatorRef}
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Carbon Footprint Calculator
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Estimate your company's carbon emissions with our simple calculator tool.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
            variants={slideUp}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Company Carbon Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your company details to estimate your carbon footprint
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Calculator Input Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Industry Type
                  </label>
                  <select
                    value={industryType}
                    onChange={(e) => setIndustryType(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                  >
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="retail">Retail</option>
                    <option value="services">Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="agriculture">Agriculture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Annual Energy Consumption (kWh)
                  </label>
                  <input
                    type="number"
                    value={energyConsumption}
                    onChange={(e) => setEnergyConsumption(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Annual Waste Generated (tons)
                  </label>
                  <input
                    type="number"
                    value={wasteGenerated}
                    onChange={(e) => setWasteGenerated(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Transport Emissions (tons CO₂)
                  </label>
                  <input
                    type="number"
                    value={transportEmissions}
                    onChange={(e) => setTransportEmissions(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <button
                onClick={calculateFootprint}
                className="w-full py-3 px-6 bg-primary hover:bg-secondary text-white font-semibold rounded-md transition-colors duration-300"
              >
                Calculate Carbon Footprint
              </button>
            </div>
          </motion.div>

          {/* Results Section */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Your Estimated Carbon Footprint
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Energy Emissions:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {(energyConsumption * 0.0005).toFixed(2)} tons CO₂e
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Waste Emissions:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {(wasteGenerated * 0.8).toFixed(2)} tons CO₂e
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Transport Emissions:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {transportEmissions.toFixed(2)} tons CO₂e
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Employee-related Emissions:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {(employeeCount * 1.2).toFixed(2)} tons CO₂e
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Total Carbon Footprint:</span>
                  <span className="text-lg font-bold text-primary">
                    {(
                      energyConsumption * 0.0005 +
                      wasteGenerated * 0.8 +
                      transportEmissions +
                      employeeCount * 1.2
                    ).toFixed(2)} tons CO₂e
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="#offset"
                  className="inline-flex items-center py-2 px-6 bg-primary hover:bg-secondary text-white font-semibold rounded-md transition-colors duration-300"
                >
                  Explore Offset Options <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Carbon Offset Solutions Section */}
      <section 
        id="offset"
        ref={offsetRef}
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={offsetInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Carbon Offset Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse verified projects from our NGO partners to offset your carbon footprint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offsetProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={offsetInView ? "visible" : "hidden"}
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-lift"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {project.icon}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.organization}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${project.price}/ton
                    </span>
                    <Link
                      href="#"
                      className="py-2 px-4 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors duration-300 text-sm"
                    >
                      Select Project
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Process Section */}
      <section 
        id="trading"
        ref={tradingRef}
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={tradingInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Trading Process Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn how the carbon trading process works on our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: 'Calculate Emissions',
                description: 'Use our Carbon Calculator to measure your company\'s carbon footprint based on your operations and activities.',
              },
              {
                step: 2,
                title: 'Select Offset Projects',
                description: 'Browse our marketplace of verified carbon offset projects from trusted NGO partners around the world.',
              },
              {
                step: 3,
                title: 'Complete Transaction',
                description: 'Purchase carbon credits to offset your emissions and receive verification certificates for your records.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial="hidden"
                animate={tradingInView ? "visible" : "hidden"}
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate={tradingInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-primary hover:bg-secondary transition-colors duration-300 text-white font-semibold rounded-full inline-block"
            >
              Start Trading Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 