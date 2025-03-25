'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaIndustry, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  // Info card hover state
  const [activeInfoCard, setActiveInfoCard] = useState<number | null>(null);

  // Intersection observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [newsRef, newsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Dummy news data
  const newsItems = [
    {
      id: 1,
      title: 'Global Carbon Trading Market Grows by 15% in 2023',
      summary: 'The global carbon trading market experienced significant growth last year as more countries implement carbon pricing mechanisms.',
      image: '/images/news1.jpg',
      date: 'May 10, 2023',
    },
    {
      id: 2,
      title: 'New Study Shows Carbon Offsets Effectiveness in Reducing Emissions',
      summary: 'Research confirms that properly implemented carbon offset projects can significantly reduce global carbon emissions.',
      image: '/images/news2.jpg',
      date: 'April 22, 2023',
    },
    {
      id: 3,
      title: 'Indonesia Launches New Carbon Trading Program',
      summary: 'The Indonesian government has announced a comprehensive carbon trading program to combat deforestation and reduce emissions.',
      image: '/images/news3.jpg',
      date: 'March 15, 2023',
    },
  ];

  // Info cards data
  const infoCards = [
    {
      id: 1,
      title: 'Carbon Footprint',
      description: 'Understand and measure the total greenhouse gas emissions caused by an individual, event, organization, service, or product.',
      icon: <FaLeaf className="text-4xl text-primary" />,
      hoverDescription: 'Companies can track emissions from electricity use, transportation, and product manufacturing to identify reduction opportunities.',
    },
    {
      id: 2,
      title: 'Emissions Sources',
      description: 'Identify the primary sources of carbon emissions in different sectors of the economy and business operations.',
      icon: <FaIndustry className="text-4xl text-primary" />,
      hoverDescription: 'Major emission sources include energy production, transportation, industrial processes, and agriculture.',
    },
    {
      id: 3,
      title: 'Carbon Trading',
      description: 'A market-based approach to controlling pollution by providing economic incentives for reducing emissions.',
      icon: <FaExchangeAlt className="text-4xl text-primary" />,
      hoverDescription: 'Companies that reduce emissions below targets can sell excess credits to those who exceed their limits.',
    },
    {
      id: 4,
      title: 'Offset Projects',
      description: 'Initiatives that reduce, avoid, or capture greenhouse gas emissions to compensate for emissions occurring elsewhere.',
      icon: <FaChartLine className="text-4xl text-primary" />,
      hoverDescription: 'Projects include reforestation, renewable energy development, methane capture, and energy efficiency improvements.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="min-h-[80vh] flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.jpg"
            alt="Forest landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-3xl text-white"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={slideRight}
            >
              Start Your Carbon Journey
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200"
              variants={slideRight}
              transition={{ delay: 0.1 }}
            >
              Join the global effort to reduce carbon emissions through innovative carbon trading and offset solutions that benefit both businesses and the environment.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={slideRight}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="/what-we-do" 
                className="px-8 py-3 bg-primary hover:bg-secondary transition-colors duration-300 text-white font-semibold rounded-full text-center"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-300 text-white font-semibold rounded-full text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Information Section */}
      <section 
        ref={infoRef}
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Understanding Carbon Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn about the environmental impact of carbon emissions and how carbon trading can help mitigate climate change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover-lift ${
                  activeInfoCard === card.id ? 'border-primary border-2' : 'border border-gray-200 dark:border-gray-700'
                } transition-all duration-300`}
                onMouseEnter={() => setActiveInfoCard(card.id)}
                onMouseLeave={() => setActiveInfoCard(null)}
              >
                <div className="flex justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {activeInfoCard === card.id ? card.hoverDescription : card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section 
        ref={newsRef}
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate={newsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Latest Climate News
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments in climate policy, carbon markets, and environmental initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial="hidden"
                animate={newsInView ? "visible" : "hidden"}
                variants={slideRight}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-zoom"
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 border border-t-0 border-gray-200 dark:border-gray-700 flex flex-col h-64">
                  <span className="text-sm text-primary mb-2">{news.date}</span>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {news.summary}
                  </p>
                  <Link 
                    href={`/news/${news.id}`} 
                    className="text-primary hover:text-secondary transition-colors duration-300 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            animate={newsInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link 
              href="/news" 
              className="px-8 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 text-gray-800 dark:text-white font-medium rounded-full inline-block"
            >
              View All News
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-20 bg-primary text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join Clearbon today and start your journey towards a more sustainable future through effective carbon management.
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-primary hover:bg-gray-100 transition-colors duration-300 font-semibold rounded-full inline-block"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
