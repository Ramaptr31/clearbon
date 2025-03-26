'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaCar, FaPlane, FaHome, FaShoppingBag, FaUtensils, FaTrash, FaLeaf, FaArrowRight } from 'react-icons/fa';

// Interface untuk event input
interface InputChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

export default function Calculator() {
  // Animation controls
  const [calculatorRef, calculatorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [resultsRef, resultsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };
  
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Form state
  const [formData, setFormData] = useState({
    // Transportation
    carMileage: 0,
    carEfficiency: 25, // mpg
    flightShortHaul: 0, // flights per year
    flightMediumHaul: 0, // flights per year
    flightLongHaul: 0, // flights per year
    publicTransport: 0, // miles per week
    
    // Home energy
    electricityUsage: 0, // kWh per month
    naturalGasUsage: 0, // therms per month
    renewablePercentage: 0, // percent of electricity from renewable sources
    householdSize: 1, // number of people
    
    // Food and consumption
    dietType: 'omnivore', // omnivore, pescatarian, vegetarian, vegan
    localFoodPercentage: 0, // percent of food that is locally sourced
    newClothingItems: 0, // items per year
    newElectronicsItems: 0, // items per year
    
    // Waste
    recyclingPercentage: 0, // percent of waste recycled
    compostingPercentage: 0, // percent of food waste composted
  });

  // Results state
  const [results, setResults] = useState({
    transportationEmissions: 0,
    homeEnergyEmissions: 0,
    foodEmissions: 0,
    consumptionEmissions: 0,
    wasteEmissions: 0,
    totalEmissions: 0,
    showResults: false
  });

  // Handle input changes
  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === '' ? 0 : parseFloat(value)
    });
  };

  // Handle select changes
  const handleSelectChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Calculate carbon footprint
  const calculateFootprint = () => {
    // Transportation emissions calculation
    const carEmissions = (formData.carMileage * 52) / formData.carEfficiency * 19.6; // 19.6 lbs CO2 per gallon of gasoline
    const shortHaulEmissions = formData.flightShortHaul * 500; // 500 lbs CO2 per short haul flight
    const mediumHaulEmissions = formData.flightMediumHaul * 1200; // 1200 lbs CO2 per medium haul flight
    const longHaulEmissions = formData.flightLongHaul * 2500; // 2500 lbs CO2 per long haul flight
    const publicTransportEmissions = formData.publicTransport * 52 * 0.25; // 0.25 lbs CO2 per mile
    
    // Home energy emissions calculation
    const electricityEmissions = formData.electricityUsage * 12 * 0.92 * (1 - (formData.renewablePercentage / 100)); // 0.92 lbs CO2 per kWh
    const naturalGasEmissions = formData.naturalGasUsage * 12 * 11.7; // 11.7 lbs CO2 per therm
    const homeEnergyEmissionsPerPerson = (electricityEmissions + naturalGasEmissions) / formData.householdSize;
    
    // Food emissions calculation
    let dietFactor = 0;
    switch(formData.dietType) {
      case 'omnivore': dietFactor = 3.3; break; // 3.3 tons CO2 per year
      case 'pescatarian': dietFactor = 2.5; break; // 2.5 tons CO2 per year
      case 'vegetarian': dietFactor = 1.7; break; // 1.7 tons CO2 per year
      case 'vegan': dietFactor = 1.5; break; // 1.5 tons CO2 per year
      default: dietFactor = 3.3;
    }
    
    const foodEmissions = dietFactor * 2000 * (1 - (formData.localFoodPercentage / 200)); // Convert tons to lbs and apply local food reduction
    
    // Consumption emissions calculation
    const clothingEmissions = formData.newClothingItems * 50; // 50 lbs CO2 per new clothing item
    const electronicsEmissions = formData.newElectronicsItems * 300; // 300 lbs CO2 per new electronics item
    
    // Waste emissions calculation
    const baseWasteEmissions = 700; // 700 lbs CO2 baseline per year
    const recyclingReduction = baseWasteEmissions * (formData.recyclingPercentage / 100) * 0.5;
    const compostingReduction = baseWasteEmissions * (formData.compostingPercentage / 100) * 0.3;
    const wasteEmissions = baseWasteEmissions - recyclingReduction - compostingReduction;
    
    // Total emissions in pounds CO2
    const totalTransportation = carEmissions + shortHaulEmissions + mediumHaulEmissions + longHaulEmissions + publicTransportEmissions;
    const totalHomeEnergy = homeEnergyEmissionsPerPerson;
    const totalFood = foodEmissions;
    const totalConsumption = clothingEmissions + electronicsEmissions;
    const totalWaste = wasteEmissions;
    
    const total = totalTransportation + totalHomeEnergy + totalFood + totalConsumption + totalWaste;
    
    // Convert to metric tons for display
    const totalEmissionsMetricTons = total / 2204.62;
    
    setResults({
      transportationEmissions: totalTransportation / 2204.62,
      homeEnergyEmissions: totalHomeEnergy / 2204.62,
      foodEmissions: totalFood / 2204.62,
      consumptionEmissions: totalConsumption / 2204.62,
      wasteEmissions: totalWaste / 2204.62,
      totalEmissions: totalEmissionsMetricTons,
      showResults: true
    });
    
    // Scroll to results
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
      window.scrollTo({
        top: resultsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-pale-lime bg-opacity-10">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-dark-forest text-center mb-6">Carbon Footprint Calculator</h1>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Calculate your personal carbon footprint and discover ways to reduce your impact on the environment.
        </p>

        <div className="grid gap-8 mb-16">
          {/* Transportation Section */}
          <motion.div 
            className="bg-white rounded-lg p-6 border border-sage shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-dark-forest mb-4 flex items-center">
              <div className="bg-sage p-2 rounded-full mr-3 text-white">
                <FaCar />
              </div>
              Transportation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weekly car mileage
                </label>
                <input
                  type="number"
                  name="carMileage"
                  value={formData.carMileage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Miles per week"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Car fuel efficiency
                </label>
                <input
                  type="number"
                  name="carEfficiency"
                  value={formData.carEfficiency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Miles per gallon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Public transportation miles per week
                </label>
                <input
                  type="number"
                  name="publicTransport"
                  value={formData.publicTransport}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Miles per week"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short flights per year (&lt; 3 hours)
                </label>
                <input
                  type="number"
                  name="flightShortHaul"
                  value={formData.flightShortHaul}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Flights per year"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Medium flights per year (3-6 hours)
                </label>
                <input
                  type="number"
                  name="flightMediumHaul"
                  value={formData.flightMediumHaul}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Flights per year"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Long flights per year (&gt; 6 hours)
                </label>
                <input
                  type="number"
                  name="flightLongHaul"
                  value={formData.flightLongHaul}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Flights per year"
                />
              </div>
            </div>
          </motion.div>

          {/* Home Energy Section */}
          <motion.div 
            ref={calculatorRef}
            className="bg-white rounded-lg p-6 border border-sage shadow-sm"
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-xl font-semibold text-dark-forest mb-4 flex items-center">
              <div className="bg-sage p-2 rounded-full mr-3 text-white">
                <FaHome />
              </div>
              Home Energy
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly electricity usage
                </label>
                <input
                  type="number"
                  name="electricityUsage"
                  value={formData.electricityUsage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="kWh per month"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Renewable energy percentage
                </label>
                <input
                  type="number"
                  name="renewablePercentage"
                  value={formData.renewablePercentage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="% of renewable energy"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly natural gas usage
                </label>
                <input
                  type="number"
                  name="naturalGasUsage"
                  value={formData.naturalGasUsage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Therms per month"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Household size
                </label>
                <input
                  type="number"
                  name="householdSize"
                  value={formData.householdSize}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Number of people"
                  min="1"
                />
              </div>
            </div>
          </motion.div>

          {/* Food & Consumption Section */}
          <motion.div 
            className="bg-white rounded-lg p-6 border border-sage shadow-sm"
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-xl font-semibold text-dark-forest mb-4 flex items-center">
              <div className="bg-sage p-2 rounded-full mr-3 text-white">
                <FaUtensils />
              </div> 
              Food & Consumption
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Diet type
                </label>
                <select
                  name="dietType"
                  value={formData.dietType}
                  onChange={handleSelectChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                >
                  <option value="omnivore">Omnivore (Regular meat consumption)</option>
                  <option value="pescatarian">Pescatarian (Fish, no meat)</option>
                  <option value="vegetarian">Vegetarian (No meat or fish)</option>
                  <option value="vegan">Vegan (No animal products)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Local food percentage
                </label>
                <input
                  type="number"
                  name="localFoodPercentage"
                  value={formData.localFoodPercentage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="% of locally sourced food"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New clothing items per year
                </label>
                <input
                  type="number"
                  name="newClothingItems"
                  value={formData.newClothingItems}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Items per year"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New electronic items per year
                </label>
                <input
                  type="number"
                  name="newElectronicsItems"
                  value={formData.newElectronicsItems}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="Items per year"
                  min="0"
                />
              </div>
            </div>
          </motion.div>

          {/* Waste Section */}
          <motion.div 
            className="bg-white rounded-lg p-6 border border-sage shadow-sm"
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-xl font-semibold text-dark-forest mb-4 flex items-center">
              <div className="bg-sage p-2 rounded-full mr-3 text-white">
                <FaTrash />
              </div> 
              Waste
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recycling percentage
                </label>
                <input
                  type="number"
                  name="recyclingPercentage"
                  value={formData.recyclingPercentage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="% of waste recycled"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Composting percentage
                </label>
                <input
                  type="number"
                  name="compostingPercentage"
                  value={formData.compostingPercentage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sage"
                  placeholder="% of food waste composted"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <button
              onClick={calculateFootprint}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-dark-forest hover:bg-sage focus:outline-none focus:ring-4 focus:ring-pale-lime transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculate My Footprint
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results.showResults && (
          <motion.div 
            id="results-section"
            ref={resultsRef}
            className="bg-white rounded-lg p-8 border border-sage shadow-sm mb-16"
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            variants={slideUp}
          >
            <h2 className="text-2xl font-bold text-dark-forest mb-6 text-center">Your Carbon Footprint Results</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-dark-forest mb-4">Total Annual Emissions</h3>
              <div className="relative h-16 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="absolute h-full bg-gradient-to-r from-sage to-dark-forest rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(100, (results.totalEmissions / 20) * 100)}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-gray-800 text-lg">{results.totalEmissions.toFixed(2)} metric tons CO₂e per year</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 px-1 mt-1">
                <span>0</span>
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20+</span>
              </div>
              <div className="mt-4 bg-pale-lime bg-opacity-20 border border-sage rounded-lg p-3 text-sm text-gray-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-dark-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  The average American's carbon footprint is about 16 metric tons per year
                </p>
                {results.totalEmissions < 8 && (
                  <p className="flex items-center mt-2 text-dark-forest">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Great job! Your footprint is significantly below average.
                  </p>
                )}
                {results.totalEmissions >= 8 && results.totalEmissions < 16 && (
                  <p className="flex items-center mt-2 text-sage">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Your footprint is below average, but there's room for improvement.
                  </p>
                )}
                {results.totalEmissions >= 16 && (
                  <p className="flex items-center mt-2 text-dark-forest font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Your footprint is above average. Check out our tips section to reduce your impact.
                  </p>
                )}
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <div className="bg-white p-5 rounded-lg border border-sage shadow-sm transition-transform hover:scale-105">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-dark-forest flex items-center">
                    <FaCar className="mr-2 text-sage" /> Transportation
                  </h4>
                  <div className="bg-pale-lime bg-opacity-50 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-dark-forest">{Math.round(results.transportationEmissions / results.totalEmissions * 100)}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">{results.transportationEmissions.toFixed(2)} <span className="text-sm font-medium text-gray-500">tons</span></p>
                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-sage h-full" style={{ width: `${Math.min(100, (results.transportationEmissions / 5) * 100)}%` }}></div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-sage shadow-sm transition-transform hover:scale-105">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-dark-forest flex items-center">
                    <FaHome className="mr-2 text-sage" /> Home Energy
                  </h4>
                  <div className="bg-pale-lime bg-opacity-50 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-dark-forest">{Math.round(results.homeEnergyEmissions / results.totalEmissions * 100)}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">{results.homeEnergyEmissions.toFixed(2)} <span className="text-sm font-medium text-gray-500">tons</span></p>
                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-sage h-full" style={{ width: `${Math.min(100, (results.homeEnergyEmissions / 5) * 100)}%` }}></div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-sage shadow-sm transition-transform hover:scale-105">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-dark-forest flex items-center">
                    <FaUtensils className="mr-2 text-sage" /> Food Consumption
                  </h4>
                  <div className="bg-pale-lime bg-opacity-50 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-dark-forest">{Math.round(results.foodEmissions / results.totalEmissions * 100)}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">{results.foodEmissions.toFixed(2)} <span className="text-sm font-medium text-gray-500">tons</span></p>
                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-sage h-full" style={{ width: `${Math.min(100, (results.foodEmissions / 5) * 100)}%` }}></div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm transition-transform hover:scale-105">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-dark-forest flex items-center">
                    <FaShoppingBag className="mr-2 text-sage" /> Consumption
                  </h4>
                  <div className="bg-pale-lime bg-opacity-50 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-dark-forest">{Math.round(results.consumptionEmissions / results.totalEmissions * 100)}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">{results.consumptionEmissions.toFixed(2)} <span className="text-sm font-medium text-gray-500">tons</span></p>
                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-sage h-full" style={{ width: `${Math.min(100, (results.consumptionEmissions / 5) * 100)}%` }}></div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-sage shadow-sm transition-transform hover:scale-105">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-dark-forest flex items-center">
                    <FaTrash className="mr-2 text-sage" /> Waste
                  </h4>
                  <div className="bg-pale-lime bg-opacity-50 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium text-dark-forest">{Math.round(results.wasteEmissions / results.totalEmissions * 100)}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">{results.wasteEmissions.toFixed(2)} <span className="text-sm font-medium text-gray-500">tons</span></p>
                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-sage h-full" style={{ width: `${Math.min(100, (results.wasteEmissions / 5) * 100)}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mt-4">
                <a 
                  href="/offset" 
                  className="inline-flex items-center text-dark-forest hover:text-sage transition-colors"
                >
                  <FaLeaf className="mr-2" /> Offset Your Carbon Footprint
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tips Section */}
        <div className="mt-20 pb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-dark-forest">Tips to Reduce Your Carbon Footprint</h2>
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Transportation Tips */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage">
              <h3 className="text-xl font-semibold mb-4 text-dark-forest flex items-center">
                <FaCar className="mr-2 text-sage" /> Transportation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Use public transportation when possible</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Consider carpooling or ridesharing options</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Maintain your vehicle regularly for optimal efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Consider an electric or hybrid vehicle for your next purchase</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Walk or bike for short trips when weather permits</span>
                </li>
              </ul>
            </div>

            {/* Home Energy Tips */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage">
              <h3 className="text-xl font-semibold mb-4 text-dark-forest flex items-center">
                <FaHome className="mr-2 text-sage" /> Home Energy
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Switch to renewable energy if available</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Use energy-efficient appliances</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Improve home insulation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Turn off lights and electronics when not in use</span>
                </li>
              </ul>
            </div>

            {/* Food Tips */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage">
              <h3 className="text-xl font-semibold mb-4 text-dark-forest flex items-center">
                <FaUtensils className="mr-2 text-sage" /> Food
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Reduce meat consumption</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Buy local and seasonal produce</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Minimize food waste</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Choose organic products when possible</span>
                </li>
              </ul>
            </div>

            {/* Waste Tips */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage">
              <h3 className="text-xl font-semibold mb-4 text-dark-forest flex items-center">
                <FaTrash className="mr-2 text-sage" /> Waste
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Recycle paper, plastic, glass, and metal</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Compost food scraps and yard waste</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Reduce single-use plastics</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-sage">✓</div>
                  <span className="ml-2 text-gray-700">Buy less, reuse more</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 