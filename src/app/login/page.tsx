'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLock, FaUserAlt } from 'react-icons/fa';

export default function Login() {
  // Login form state
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      if (formState.email && formState.password) {
        setLoginSuccess(true);
      } else {
        setLoginError('Please enter both email and password.');
      }
    }, 1500);
  };

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-pale-lime bg-opacity-20 dark:bg-gray-900">
      <div className="w-full max-w-md p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-dark-forest dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Log in to your Clearbon account
            </p>
          </div>

          {loginSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-pale-lime bg-opacity-20 dark:bg-sage/30 border border-sage dark:border-dark-forest rounded-lg p-6 text-center mb-6"
            >
              <div className="w-16 h-16 bg-dark-forest rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-forest dark:text-white">
                Login Successful!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have successfully logged in to your account.
              </p>
              <Link 
                href="/"
                className="px-6 py-2 bg-dark-forest hover:bg-sage text-white font-medium rounded-md transition-colors duration-300 inline-block"
              >
                Go to Dashboard
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {loginError && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 p-3 rounded-md text-sm">
                  {loginError}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUserAlt className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <Link 
                    href="#" 
                    className="text-sm text-dark-forest hover:text-sage transition-colors duration-300"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-colors duration-200"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formState.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-dark-forest border-gray-300 rounded focus:ring-sage"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 py-3 flex justify-center items-center rounded-md text-white font-medium transition-colors duration-300 ${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-dark-forest hover:bg-sage'
                }`}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <Link 
                    href="#" 
                    className="text-dark-forest hover:text-sage transition-colors duration-300 font-medium"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              By logging in, you agree to our{' '}
              <Link href="/terms-conditions" className="text-dark-forest hover:text-sage">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-dark-forest hover:text-sage">
                Privacy Policy
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 