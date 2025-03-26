'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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

export default function OurTeam() {
  // Team member data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With over 15 years in sustainable finance, Sarah leads Clearbon's mission to democratize carbon trading. Her background includes executive roles at Green Capital Partners and service on the UN Climate Advisory Board.",
      image: "/images/team/ceo.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah@clearbon.com"
      }
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings a decade of experience in blockchain technology and carbon market systems. Previously, he led technology teams at Climate Solutions Inc. and holds a Ph.D. in Computer Science from MIT.",
      image: "/images/team/cto.jpg",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        email: "michael@clearbon.com"
      }
    },
    {
      name: "Dr. Amara Okafor",
      role: "Chief Science Officer",
      bio: "An environmental scientist with a Ph.D. from Stanford, Amara oversees our carbon methodology and verification processes. Her research on carbon sequestration has been published in leading scientific journals.",
      image: "/images/team/cso.jpg",
      social: {
        linkedin: "https://linkedin.com/in/amaraokafor",
        twitter: "https://twitter.com/amaraokafor",
        email: "amara@clearbon.com"
      }
    },
    {
      name: "James Rodriguez",
      role: "Chief Operations Officer",
      bio: "James oversees the day-to-day operations of Clearbon. With experience scaling sustainable startups across three continents, he ensures our platform delivers consistent value and impact to users worldwide.",
      image: "/images/team/coo.jpg",
      social: {
        linkedin: "https://linkedin.com/in/jamesrodriguez",
        twitter: "https://twitter.com/jamesrodriguez",
        email: "james@clearbon.com"
      }
    },
    {
      name: "Emma Larsson",
      role: "Head of Partnerships",
      bio: "Emma manages our relationships with carbon project developers, corporations, and governmental agencies. Her background in international development gives her unique insight into effective cross-sector collaboration.",
      image: "/images/team/partnerships.jpg",
      social: {
        linkedin: "https://linkedin.com/in/emmalarsson",
        twitter: "https://twitter.com/emmalarsson",
        email: "emma@clearbon.com"
      }
    },
    {
      name: "Rajiv Patel",
      role: "Lead Carbon Markets Strategist",
      bio: "Rajiv has 12 years of experience in environmental commodities trading. He develops our market engagement strategies and ensures our platform adapts to the evolving landscape of global carbon markets.",
      image: "/images/team/strategist.jpg",
      social: {
        linkedin: "https://linkedin.com/in/rajivpatel",
        twitter: "https://twitter.com/rajivpatel",
        email: "rajiv@clearbon.com"
      }
    },
    {
      name: "Sophie Liu",
      role: "Head of User Experience",
      bio: "Sophie leads our design team with a focus on creating intuitive, accessible interfaces. Her work ensures that complex carbon trading concepts are presented in ways that empower users of all backgrounds.",
      image: "/images/team/ux.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sophieliu",
        twitter: "https://twitter.com/sophieliu",
        email: "sophie@clearbon.com"
      }
    },
    {
      name: "David Njoroge",
      role: "Head of Project Verification",
      bio: "David oversees our rigorous carbon project verification process. His expertise in environmental assessment and carbon accounting ensures the integrity and impact of every project on our platform.",
      image: "/images/team/verification.jpg",
      social: {
        linkedin: "https://linkedin.com/in/davidnjoroge",
        twitter: "https://twitter.com/davidnjoroge",
        email: "david@clearbon.com"
      }
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
            <h1 className="page-title">Our Team</h1>
            <p className="page-description">
              Meet the passionate experts behind Clearbon who are dedicated to revolutionizing carbon trading and tackling climate change through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Leadership Team</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Our diverse team brings together expertise in climate science, technology, finance, and sustainability to create an accessible and effective carbon trading platform.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap-lg"
          >
            {teamMembers.slice(0, 4).map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Our Values</h2>
            <p className="text-gray-700 dark:text-gray-300">
              At Clearbon, our team is unified by a shared commitment to these core values that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-gap-lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <svg className="w-10 h-10 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Integrity & Transparency</h3>
              <p>We operate with complete honesty and openness, ensuring that all carbon transactions and project impacts are fully traceable and verifiable.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <svg className="w-10 h-10 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Innovation & Impact</h3>
              <p>We constantly push the boundaries of what's possible in carbon markets, focusing on solutions that deliver measurable environmental and social benefits.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="card card-body text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-sage/20 p-4 rounded-full">
                  <svg className="w-10 h-10 text-dark-forest" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Inclusivity & Collaboration</h3>
              <p>We believe that fighting climate change requires diverse perspectives and wide participation, which is why we make carbon markets accessible to all.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-5">Core Team</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Meet the specialists who drive our day-to-day operations and ensure our platform delivers maximum value to users and the planet.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap-lg"
          >
            {teamMembers.slice(4).map((member, index) => (
              <TeamMemberCard key={index + 4} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Join Our Team</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We're always looking for talented individuals who are passionate about climate action and innovation. Explore current openings and become part of our mission.
            </p>
            <Link href="/careers" className="btn btn-primary hover-lift">
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Define TeamMember interface
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

// Team Member Card Component
const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.1, 0.9, 0.2, 1]
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.1, 0.9, 0.2, 1]
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="card card-hover overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="card-body">
        <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime">{member.name}</h3>
        <p className="text-sage font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
        
        <div className="flex space-x-3">
          <motion.a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn profile`}
            variants={socialIconVariants}
            whileHover="hover"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-sage/20 text-dark-forest hover:bg-dark-forest hover:text-white transition-all duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s Twitter profile`}
            variants={socialIconVariants}
            whileHover="hover"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-sage/20 text-dark-forest hover:bg-dark-forest hover:text-white transition-all duration-300"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href={`mailto:${member.social.email}`}
            aria-label={`Email ${member.name}`}
            variants={socialIconVariants}
            whileHover="hover"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-sage/20 text-dark-forest hover:bg-dark-forest hover:text-white transition-all duration-300"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}; 