import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaCar, FaPlane, FaHome, FaShoppingBag, FaUtensils, FaTrash } from 'react-icons/fa';

// Define event types for form inputs
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
    <main className="min-h-screen bg-white pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carbon Footprint Calculator
          </h1>
          <p className="text-xl max-w-3xl">
            Calculate your personal carbon footprint and discover ways to reduce your environmental impact.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section 
        ref={calculatorRef}
        className="container mx-auto px-4 py-12"
      >
        <motion.div
          initial="hidden"
          animate={calculatorInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8">Enter Your Information</h2>
          
          {/* Transportation Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaCar className="text-green-600 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Transportation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Car Miles Driven Weekly</label>
                <input
                  type="number"
                  name="carMileage"
                  value={formData.carMileage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Car Fuel Efficiency (MPG)</label>
                <input
                  type="number"
                  name="carEfficiency"
                  value={formData.carEfficiency || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Short Flights Per Year (&lt; 3 hours)</label>
                <input
                  type="number"
                  name="flightShortHaul"
                  value={formData.flightShortHaul || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Medium Flights Per Year (3-6 hours)</label>
                <input
                  type="number"
                  name="flightMediumHaul"
                  value={formData.flightMediumHaul || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Long Flights Per Year (&gt; 6 hours)</label>
                <input
                  type="number"
                  name="flightLongHaul"
                  value={formData.flightLongHaul || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Public Transport Miles Per Week</label>
                <input
                  type="number"
                  name="publicTransport"
                  value={formData.publicTransport || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          
          {/* Home Energy Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaHome className="text-green-600 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Home Energy</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Electricity Usage (kWh per month)</label>
                <input
                  type="number"
                  name="electricityUsage"
                  value={formData.electricityUsage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Natural Gas Usage (therms per month)</label>
                <input
                  type="number"
                  name="naturalGasUsage"
                  value={formData.naturalGasUsage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Renewable Energy Percentage</label>
                <input
                  type="number"
                  name="renewablePercentage"
                  value={formData.renewablePercentage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Household Size (people)</label>
                <input
                  type="number"
                  name="householdSize"
                  value={formData.householdSize || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1"
                  min="1"
                />
              </div>
            </div>
          </div>
          
          {/* Food & Consumption Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaUtensils className="text-green-600 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Food & Consumption</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Diet Type</label>
                <select
                  name="dietType"
                  value={formData.dietType}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="omnivore">Omnivore (Regular meat consumption)</option>
                  <option value="pescatarian">Pescatarian (Fish but no meat)</option>
                  <option value="vegetarian">Vegetarian (No meat or fish)</option>
                  <option value="vegan">Vegan (No animal products)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Locally Sourced Food Percentage</label>
                <input
                  type="number"
                  name="localFoodPercentage"
                  value={formData.localFoodPercentage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">New Clothing Items Per Year</label>
                <input
                  type="number"
                  name="newClothingItems"
                  value={formData.newClothingItems || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">New Electronics Items Per Year</label>
                <input
                  type="number"
                  name="newElectronicsItems"
                  value={formData.newElectronicsItems || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          
          {/* Waste Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaTrash className="text-green-600 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Waste</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Recycling Percentage</label>
                <input
                  type="number"
                  name="recyclingPercentage"
                  value={formData.recyclingPercentage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Composting Percentage</label>
                <input
                  type="number"
                  name="compostingPercentage"
                  value={formData.compostingPercentage || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
          
          {/* Calculate Button */}
          <div className="text-center mt-8">
            <button
              onClick={calculateFootprint}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-lg"
            >
              Calculate My Footprint
            </button>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section 
        id="results-section"
        ref={resultsRef}
        className="container mx-auto px-4 py-12"
      >
        {results.showResults && (
          <motion.div
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            variants={slideUp}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-8">Your Carbon Footprint Results</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaCar className="text-green-600 mr-2" />
                  Transportation
                </h3>
                <p className="text-4xl font-bold text-green-600">{results.transportationEmissions.toFixed(2)} <span className="text-lg">tons CO<sub>2</sub>e/year</span></p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaHome className="text-green-600 mr-2" />
                  Home Energy
                </h3>
                <p className="text-4xl font-bold text-green-600">{results.homeEnergyEmissions.toFixed(2)} <span className="text-lg">tons CO<sub>2</sub>e/year</span></p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaUtensils className="text-green-600 mr-2" />
                  Food
                </h3>
                <p className="text-4xl font-bold text-green-600">{results.foodEmissions.toFixed(2)} <span className="text-lg">tons CO<sub>2</sub>e/year</span></p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaShoppingBag className="text-green-600 mr-2" />
                  Consumption
                </h3>
                <p className="text-4xl font-bold text-green-600">{results.consumptionEmissions.toFixed(2)} <span className="text-lg">tons CO<sub>2</sub>e/year</span></p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaTrash className="text-green-600 mr-2" />
                  Waste
                </h3>
                <p className="text-4xl font-bold text-green-600">{results.wasteEmissions.toFixed(2)} <span className="text-lg">tons CO<sub>2</sub>e/year</span></p>
              </div>
              
              <div className="bg-green-100 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Total Carbon Footprint
                </h3>
                <p className="text-4xl font-bold text-green-700">{results.totalEmissions.toFixed(2)} <span className="text-lg">tons CO<sub>2</sub>e/year</span></p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How You Compare</h3>
              <p className="mb-4">The average person in the United States has a carbon footprint of approximately 15 tons CO<sub>2</sub>e per year. The global average is about 4 tons CO<sub>2</sub>e per year.</p>
              
              <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className="absolute h-full bg-green-600 rounded-full"
                  style={{ width: `${Math.min(100, (results.totalEmissions / 20) * 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600">
                <span>0 tons</span>
                <span>5 tons</span>
                <span>10 tons</span>
                <span>15 tons</span>
                <span>20+ tons</span>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/what-we-do" 
                className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-lg inline-block"
              >
                Offset Your Carbon Footprint
              </Link>
            </div>
          </motion.div>
        )}
      </section>

      {/* Tips Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Tips to Reduce Your Carbon Footprint</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FaCar className="text-green-600 text-xl mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Transportation</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Use public transportation when possible</li>
                <li>Consider carpooling or ridesharing</li>
                <li>Choose electric or hybrid vehicles</li>
                <li>Combine errands to minimize trips</li>
                <li>Walk or bike for short distances</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FaHome className="text-green-600 text-xl mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Home Energy</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Switch to LED light bulbs</li>
                <li>Install a programmable thermostat</li>
                <li>Upgrade to energy-efficient appliances</li>
                <li>Improve home insulation</li>
                <li>Consider solar panels or renewable energy options</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FaUtensils className="text-green-600 text-xl mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Food</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Reduce meat consumption, especially beef</li>
                <li>Choose locally grown and seasonal foods</li>
                <li>Minimize food waste</li>
                <li>Grow your own herbs or vegetables</li>
                <li>Support sustainable farming practices</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FaShoppingBag className="text-green-600 text-xl mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Consumption</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Buy quality items that last longer</li>
                <li>Repair items instead of replacing them</li>
                <li>Shop secondhand when possible</li>
                <li>Borrow or rent items used infrequently</li>
                <li>Choose products with minimal packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 