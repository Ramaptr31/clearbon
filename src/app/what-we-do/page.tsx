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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
      image: '/images/wind-project.svg',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-header">
        <div className="page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="page-title">How Clearbon Works</h1>
            <p className="page-description mx-auto">
              We provide end-to-end solutions for carbon trading, from footprint calculation to offset procurement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carbon Footprint Calculator Section */}
      <section 
        id="footprint"
        ref={calculatorRef}
        className="section-container"
      >
        <motion.div
          initial="hidden"
          animate={calculatorInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title">Carbon Footprint Calculator</h2>
          <p className="section-subtitle mx-auto">
            Estimate your company's carbon emissions with our simple calculator tool.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={calculatorInView ? "visible" : "hidden"}
          variants={slideUp}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-soft overflow-hidden border border-secondary/10"
        >
          <div className="bg-accent/30 p-6">
            <h3 className="text-xl font-semibold text-primary">
              Company Carbon Calculator
            </h3>
            <p className="text-text-secondary">
              Enter your company details to estimate your carbon footprint
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Calculator Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Industry Type
                </label>
                <select
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                  className="input w-full"
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
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="input w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Annual Energy Consumption (kWh)
                </label>
                <input
                  type="number"
                  value={energyConsumption}
                  onChange={(e) => setEnergyConsumption(Number(e.target.value))}
                  className="input w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Annual Waste Generated (tons)
                </label>
                <input
                  type="number"
                  value={wasteGenerated}
                  onChange={(e) => setWasteGenerated(Number(e.target.value))}
                  className="input w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Transport Emissions (tons CO₂)
                </label>
                <input
                  type="number"
                  value={transportEmissions}
                  onChange={(e) => setTransportEmissions(Number(e.target.value))}
                  className="input w-full"
                />
              </div>
            </div>

            <button
              onClick={calculateFootprint}
              className="btn btn-primary w-full"
            >
              Calculate Carbon Footprint
            </button>
          </div>
        </motion.div>

        {/* Results Section */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-6 bg-accent/30 rounded-xl border border-secondary/10 max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Your Estimated Carbon Footprint
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-secondary/20">
                <span className="text-text-secondary">Energy Emissions:</span>
                <span className="font-semibold text-primary">
                  {(energyConsumption * 0.0005).toFixed(2)} tons CO₂e
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-secondary/20">
                <span className="text-text-secondary">Waste Emissions:</span>
                <span className="font-semibold text-primary">
                  {(wasteGenerated * 0.8).toFixed(2)} tons CO₂e
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-secondary/20">
                <span className="text-text-secondary">Transport Emissions:</span>
                <span className="font-semibold text-primary">
                  {transportEmissions.toFixed(2)} tons CO₂e
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-secondary/20">
                <span className="text-text-secondary">Employee-related Emissions:</span>
                <span className="font-semibold text-primary">
                  {(employeeCount * 1.2).toFixed(2)} tons CO₂e
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold text-text-primary">Total Carbon Footprint:</span>
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
                className="btn btn-primary inline-flex items-center"
              >
                Explore Offset Options <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </section>

      {/* Carbon Offset Solutions Section */}
      <section 
        id="offset"
        ref={offsetRef}
        className="bg-accent/30 py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={offsetInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Carbon Offset Solutions</h2>
            <p className="section-subtitle mx-auto">
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
                className="bg-white rounded-xl overflow-hidden shadow-soft hover-elevate"
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
                    <span className="ml-2 text-sm text-text-secondary">
                      {project.organization}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {project.name}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${project.price}/ton
                    </span>
                    <Link
                      href="#"
                      className="btn btn-primary py-2 px-4 text-sm"
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
        className="section-container"
      >
        <motion.div
          initial="hidden"
          animate={tradingInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title">Trading Process Overview</h2>
          <p className="section-subtitle mx-auto">
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
              className="relative bg-white rounded-xl p-8 shadow-soft border border-secondary/10 hover-elevate"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-text-secondary">
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
            className="btn btn-primary px-8 py-3 rounded-full inline-block"
          >
            Start Trading Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
} 