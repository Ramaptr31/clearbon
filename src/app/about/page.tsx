'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'With over 15 years of experience in environmental policy, Sarah leads our mission to create impactful carbon trading solutions.',
      image: '/images/profile.svg',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Michael brings technical expertise in sustainable technologies and carbon accounting methodologies to our platform.',
      image: '/images/profile.svg',
    },
    {
      name: 'Diana Patel',
      role: 'Head of NGO Partnerships',
      bio: 'Diana works directly with environmental NGOs to develop effective carbon offset projects and ensure quality standards.',
      image: '/images/profile.svg',
    },
    {
      name: 'Robert Torres',
      role: 'Corporate Relations Director',
      bio: 'Robert helps companies navigate the carbon market, developing customized solutions to meet sustainability goals.',
      image: '/images/profile.svg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="page-header">
        <div className="page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="page-title">About Clearbon</h1>
            <p className="page-description mx-auto">
              Our mission is to accelerate the transition to a low-carbon economy by connecting businesses with high-quality carbon offset projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" ref={missionRef} className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h2 className="section-title">Our Mission and Vision</h2>
            <div className="space-y-4">
              <p className="text-text-secondary">
                Clearbon was founded in 2021 with a clear mission: to simplify carbon trading and make it accessible to all businesses, regardless of size or industry. We believe that transparent, efficient carbon markets are crucial to addressing climate change.
              </p>
              <p className="text-text-secondary">
                Our vision is to create a world where carbon reduction is integrated into every business model, and where the true environmental cost of operations is reflected in business decisions.
              </p>
              <p className="text-text-secondary">
                By connecting companies with verified carbon offset projects from respected NGOs, we help reduce overall emissions while supporting sustainable development across the globe.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 relative h-80 md:h-96"
          >
            <Image 
              src="/images/minimalist/hero-sustainable.svg"
              alt="Sustainable Mission"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="bg-accent/30 py-12 md:py-16 lg:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              Our diverse team of experts is passionate about creating innovative solutions for carbon trading and climate action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft hover-elevate"
              >
                <div className="relative h-48 bg-secondary/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-tertiary font-medium mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle mx-auto">
            These principles guide everything we do at Clearbon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Transparency',
              description: 'We believe in full disclosure of all carbon trading processes, making complex information accessible and understandable.',
            },
            {
              title: 'Impact',
              description: 'Every carbon credit should represent genuine, measurable environmental benefits that can be tracked and verified.',
            },
            {
              title: 'Innovation',
              description: 'We continuously seek new ways to make carbon markets more efficient, accessible, and effective for all participants.',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-accent/30 rounded-xl p-8 border border-secondary/10 hover-elevate"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-text-secondary">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 