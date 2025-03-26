'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck, FaBriefcase, FaHandshake, FaLeaf, FaUsers, FaGlobeAmericas } from 'react-icons/fa';

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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export default function Careers() {
  // Current job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Carbon Project Manager",
      department: "Project Development",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description: "Lead the development and implementation of carbon offset projects. You'll work with project developers to ensure compliance with carbon standards and maximize environmental impact.",
      requirements: [
        "5+ years experience in carbon project development or environmental consulting",
        "Strong knowledge of carbon standards (VCS, Gold Standard, etc.)",
        "Project management certification preferred",
        "Excellent communication and stakeholder management skills"
      ],
      link: "/careers/carbon-project-manager"
    },
    {
      id: 2,
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Develop and maintain our blockchain-based carbon credit tracking system. You'll be responsible for ensuring transparency and security in carbon credit issuance and transactions.",
      requirements: [
        "3+ years experience with blockchain technologies (Ethereum, Polkadot, or similar)",
        "Proficient in JavaScript/TypeScript and Solidity",
        "Experience with smart contract development and security",
        "Knowledge of carbon markets preferred"
      ],
      link: "/careers/senior-blockchain-developer"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "London, UK (Hybrid)",
      type: "Full-time",
      description: "Create intuitive and accessible user interfaces for our carbon trading platform. You'll work with our product team to translate complex carbon trading concepts into accessible user experiences.",
      requirements: [
        "3+ years experience in UX/UI design for web applications",
        "Proficiency in Figma, Adobe XD, or similar design tools",
        "Experience simplifying complex technical concepts for diverse user groups",
        "Portfolio demonstrating strong visual design and user-centered thinking"
      ],
      link: "/careers/ux-ui-designer"
    },
    {
      id: 4,
      title: "Carbon Markets Analyst",
      department: "Market Strategy",
      location: "Singapore (Hybrid)",
      type: "Full-time",
      description: "Analyze carbon market trends and provide strategic recommendations for platform development. You'll help identify emerging opportunities and risks in global carbon markets.",
      requirements: [
        "2+ years experience in carbon markets or environmental commodities",
        "Strong analytical skills and experience with market data",
        "Background in environmental economics or related field",
        "Excellent research and communication abilities"
      ],
      link: "/careers/carbon-markets-analyst"
    },
    {
      id: 5,
      title: "Community Manager",
      department: "Marketing",
      location: "Remote (North America/Europe)",
      type: "Full-time",
      description: "Build and engage our community of users, partners, and stakeholders. You'll manage social media, organize events, and create content to grow our community of climate-conscious users.",
      requirements: [
        "3+ years experience in community management or social media marketing",
        "Strong understanding of environmental issues and sustainability",
        "Excellent written and verbal communication skills",
        "Experience with community engagement tools and analytics"
      ],
      link: "/careers/community-manager"
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "Environmental Impact",
      description: "Work on a mission that directly contributes to fighting climate change through market-based solutions."
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      description: "Join a diverse, international team of climate experts, technologists, and business innovators."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Flexible Work",
      description: "Enjoy flexible work arrangements, including remote options and flexible hours."
    },
    {
      icon: <FaHandshake />,
      title: "Competitive Compensation",
      description: "Receive competitive salary, equity options, and comprehensive health benefits."
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
            <h1 className="page-title">Careers at Clearbon</h1>
            <p className="page-description">
              Join our mission to accelerate the transition to a low-carbon economy through innovative carbon trading solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-lg items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Why Join Clearbon?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                At Clearbon, you'll be part of a team dedicated to building innovative solutions for one of the world's most pressing challenges: climate change. We believe that market-based approaches can drive significant environmental impact, and we're looking for passionate individuals to help us realize this vision.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 text-dark-forest mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-forest dark:text-pale-lime">{benefit.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
                  src="/images/team-working.jpg" 
                  alt="Team collaboration at Clearbon" 
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

      {/* Our Values Section */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Our Values</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              These core principles guide our work and define our company culture.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 grid-gap-lg"
          >
            <motion.div 
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <FaGlobeAmericas className="w-8 h-8 text-dark-forest" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Climate Impact</h3>
              <p>We prioritize environmental outcomes in every decision we make, focusing on solutions that deliver real, measurable benefits for our planet.</p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <FaUsers className="w-8 h-8 text-dark-forest" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Inclusive Innovation</h3>
              <p>We believe that diverse perspectives drive better solutions. We're committed to building a team that represents a variety of backgrounds, perspectives, and skills.</p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <FaHandshake className="w-8 h-8 text-dark-forest" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Transparent Action</h3>
              <p>We operate with complete transparency, both in our carbon trading platform and in how we work as a team, fostering trust with our users and each other.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Current Openings</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Explore our current job opportunities and find a role where you can contribute to our mission.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={job.id}
                variants={fadeIn}
                className="card card-hover"
              >
                <div className="card-body">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime">{job.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm">
                        <span className="flex items-center text-sage">
                          <FaBriefcase className="mr-2" /> {job.department}
                        </span>
                        <span className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Link href={job.link} className="btn btn-primary hover-lift self-start shrink-0">
                      Apply Now
                    </Link>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-dark-forest dark:text-pale-lime mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-sage mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6 text-center">Our Application Process</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-10 text-center">
              We've designed our hiring process to be thorough, fair, and respectful of your time.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-sage/20 p-4 rounded-full mr-6 flex-shrink-0">
                  <span className="text-dark-forest font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-2">Application Review</h3>
                  <p className="text-gray-700 dark:text-gray-300">Our team carefully reviews your resume, cover letter, and any portfolio materials to assess your qualifications and alignment with our mission.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-sage/20 p-4 rounded-full mr-6 flex-shrink-0">
                  <span className="text-dark-forest font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-2">Initial Interview</h3>
                  <p className="text-gray-700 dark:text-gray-300">A 30-45 minute video call with a member of our HR team to discuss your background, interests, and preliminary questions about the role.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-sage/20 p-4 rounded-full mr-6 flex-shrink-0">
                  <span className="text-dark-forest font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-2">Skills Assessment</h3>
                  <p className="text-gray-700 dark:text-gray-300">Depending on the role, you may be asked to complete a take-home assignment or technical interview to demonstrate your relevant skills.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-sage/20 p-4 rounded-full mr-6 flex-shrink-0">
                  <span className="text-dark-forest font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-2">Team Interviews</h3>
                  <p className="text-gray-700 dark:text-gray-300">Meet with potential teammates and cross-functional partners to explore how you'd work together and contribute to our mission.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-sage/20 p-4 rounded-full mr-6 flex-shrink-0">
                  <span className="text-dark-forest font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-2">Final Decision & Offer</h3>
                  <p className="text-gray-700 dark:text-gray-300">We make a decision promptly after completing the interview process and extend an offer to the selected candidate.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Application Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Don't See a Fitting Role?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We're always interested in connecting with talented individuals who are passionate about carbon trading and climate action. Submit an open application and tell us how you could contribute to our mission.
            </p>
            <Link href="/contact" className="btn btn-primary hover-lift">
              Submit Open Application
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 