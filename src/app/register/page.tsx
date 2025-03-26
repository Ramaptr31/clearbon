'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBuilding, FaLeaf, FaUser, FaEnvelope, FaLock, FaPhone, FaGlobe, FaInfoCircle } from 'react-icons/fa';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Register() {
  // State for registration type toggle
  const [registrationType, setRegistrationType] = useState<'company' | 'ngo'>('company');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    organization: '',
    website: '',
    industry: '',
    projectFocus: '',
    country: '',
    acceptTerms: false
  });

  // Form error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (registrationType === 'company' && !formData.organization) newErrors.organization = 'Company name is required';
    if (registrationType === 'ngo' && !formData.organization) newErrors.organization = 'Organization name is required';
    
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form (would connect to API in production)
    console.log('Form submitted:', formData);
    alert('Registration successful! Check your email to verify your account.');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Registration Header */}
      <section className="page-header">
        <div className="page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="page-title">Join the Clearbon Platform</h1>
            <p className="page-description mx-auto">
              Create an account to access our carbon trading platform and start making a positive impact on the environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-container">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Registration Type Selection */}
          <div className="mb-8 bg-accent/30 rounded-xl p-5 border border-secondary/10">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-primary mb-2">I want to register as:</h2>
              <p className="text-text-secondary text-sm">Select the option that best describes your organization</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRegistrationType('company')}
                className={`p-6 rounded-lg border-2 transition-all duration-300 flex flex-col items-center text-center ${
                  registrationType === 'company' 
                    ? 'border-primary bg-primary/10 shadow-md' 
                    : 'border-secondary/30 bg-white hover:bg-accent/20'
                }`}
              >
                <FaBuilding size={40} className={`mb-3 ${registrationType === 'company' ? 'text-primary' : 'text-secondary'}`} />
                <h3 className="text-lg font-semibold mb-2">Company</h3>
                <p className="text-sm text-text-secondary">For businesses looking to offset their carbon footprint or engage in carbon trading</p>
              </button>

              <button
                type="button"
                onClick={() => setRegistrationType('ngo')}
                className={`p-6 rounded-lg border-2 transition-all duration-300 flex flex-col items-center text-center ${
                  registrationType === 'ngo' 
                    ? 'border-primary bg-primary/10 shadow-md' 
                    : 'border-secondary/30 bg-white hover:bg-accent/20'
                }`}
              >
                <FaLeaf size={40} className={`mb-3 ${registrationType === 'ngo' ? 'text-primary' : 'text-secondary'}`} />
                <h3 className="text-lg font-semibold mb-2">NGO / Project Developer</h3>
                <p className="text-sm text-text-secondary">For organizations developing carbon offset projects or environmental initiatives</p>
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-text-primary">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full pl-10 input ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full pl-10 input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-text-primary">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`block w-full pl-10 input ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="Minimum 8 characters"
                      />
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-text-primary">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`block w-full pl-10 input ${errors.confirmPassword ? 'border-red-500' : ''}`}
                        placeholder="Confirm your password"
                      />
                    </div>
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              {/* Organization Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {registrationType === 'company' ? 'Company Information' : 'Organization Information'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block mb-2 text-sm font-medium text-text-primary">
                      {registrationType === 'company' ? 'Company Name' : 'Organization Name'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaBuilding className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className={`block w-full pl-10 input ${errors.organization ? 'border-red-500' : ''}`}
                        placeholder={registrationType === 'company' ? 'Acme Corp' : 'Environmental Foundation'}
                      />
                    </div>
                    {errors.organization && <p className="mt-1 text-sm text-red-500">{errors.organization}</p>}
                  </div>

                  <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-text-primary">
                      Website (optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaGlobe className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="block w-full pl-10 input"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-text-primary">
                      Phone Number (optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full pl-10 input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-text-primary">
                      Country (optional)
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="block w-full input"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IN">India</option>
                      <option value="CN">China</option>
                      <option value="BR">Brazil</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {registrationType === 'company' ? (
                    <div className="md:col-span-2">
                      <label htmlFor="industry" className="block mb-2 text-sm font-medium text-text-primary">
                        Industry (optional)
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="block w-full input"
                      >
                        <option value="">Select Industry</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Energy">Energy</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Technology">Technology</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Retail">Retail</option>
                        <option value="Financial">Financial Services</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  ) : (
                    <div className="md:col-span-2">
                      <label htmlFor="projectFocus" className="block mb-2 text-sm font-medium text-text-primary">
                        Project Focus (optional)
                      </label>
                      <select
                        id="projectFocus"
                        name="projectFocus"
                        value={formData.projectFocus}
                        onChange={handleChange}
                        className="block w-full input"
                      >
                        <option value="">Select Project Focus</option>
                        <option value="Reforestation">Reforestation</option>
                        <option value="Renewable Energy">Renewable Energy</option>
                        <option value="Methane Capture">Methane Capture</option>
                        <option value="Energy Efficiency">Energy Efficiency</option>
                        <option value="Conservation">Conservation</option>
                        <option value="Sustainable Agriculture">Sustainable Agriculture</option>
                        <option value="Ocean Preservation">Ocean Preservation</option>
                        <option value="Community Projects">Community Projects</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className={`w-4 h-4 border-2 rounded focus:ring-2 focus:ring-primary ${
                        errors.acceptTerms ? 'border-red-500' : 'border-sage'
                      }`}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="acceptTerms" className="font-medium text-text-secondary">
                      I agree to the <Link href="/terms-conditions" className="text-primary hover:underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                    </label>
                    {errors.acceptTerms && <p className="mt-1 text-sm text-red-500">{errors.acceptTerms}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  type="submit"
                  className="btn btn-primary py-3 px-8 text-base font-medium"
                >
                  Create Account
                </button>
                <Link href="/login" className="btn btn-outline py-3 px-8 text-base font-medium">
                  Already Have an Account?
                </Link>
              </div>
            </form>
          </div>

          {/* Note */}
          <div className="mt-6 bg-accent/30 rounded-lg p-4 flex items-start">
            <FaInfoCircle className="text-primary flex-shrink-0 mt-1 mr-3" />
            <p className="text-sm text-text-secondary">
              By creating an account, you'll gain access to our carbon trading platform, offset calculations, and personalized recommendations. All information is securely stored and protected according to our privacy policy.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 