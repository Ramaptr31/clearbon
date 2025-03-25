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
      image: '/images/team1.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Michael brings technical expertise in sustainable technologies and carbon accounting methodologies to our platform.',
      image: '/images/team2.jpg',
    },
    {
      name: 'Diana Patel',
      role: 'Head of NGO Partnerships',
      bio: 'Diana works directly with environmental NGOs to develop effective carbon offset projects and ensure quality standards.',
      image: '/images/team3.jpg',
    },
    {
      name: 'Robert Torres',
      role: 'Corporate Relations Director',
      bio: 'Robert helps companies navigate the carbon market, developing customized solutions to meet sustainability goals.',
      image: '/images/team4.jpg',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Clearbon
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to accelerate the transition to a low-carbon economy by connecting businesses with high-quality carbon offset projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        id="mission"
        ref={missionRef}
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission and Vision
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Clearbon was founded in 2021 with a clear mission: to simplify carbon trading and make it accessible to all businesses, regardless of size or industry. We believe that transparent, efficient carbon markets are crucial to addressing climate change.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our vision is to create a world where carbon reduction is integrated into every business model, and where the true environmental cost of operations is reflected in business decisions.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  By connecting companies with verified carbon offset projects from respected NGOs, we help reduce overall emissions while supporting sustainable development across the globe.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative h-80 md:h-96"
            >
              <Image 
                src="/images/mission.jpg"
                alt="Reforestation project"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team"
        ref={teamRef}
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-lift"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="text-white/90">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 