'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaIndustry, FaExchangeAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';

// Scroll reveal hook implementation
const useScrollReveal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return { ref, inView };
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
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

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

export default function Home() {
  // Info card hover state
  const [activeInfoCard, setActiveInfoCard] = useState<number | null>(null);

  // Define scroll reveal refs for different sections
  const heroRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const newsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

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
      icon: <FaLeaf className="w-10 h-10" />,
      hoverDescription: 'Companies can track emissions from electricity use, transportation, and product manufacturing to identify reduction opportunities.',
    },
    {
      id: 2,
      title: 'Emissions Sources',
      description: 'Identify the primary sources of carbon emissions in different sectors of the economy and business operations.',
      icon: <FaIndustry className="w-10 h-10" />,
      hoverDescription: 'Major emission sources include energy production, transportation, industrial processes, and agriculture.',
    },
    {
      id: 3,
      title: 'Carbon Trading',
      description: 'A market-based approach to controlling pollution by providing economic incentives for reducing emissions.',
      icon: <FaExchangeAlt className="w-10 h-10" />,
      hoverDescription: 'Companies that reduce emissions below targets can sell excess credits to those who exceed their limits.',
    },
    {
      id: 4,
      title: 'Offset Projects',
      description: 'Initiatives that reduce, avoid, or capture greenhouse gas emissions to compensate for emissions occurring elsewhere.',
      icon: <FaChartLine className="w-10 h-10" />,
      hoverDescription: 'Projects include reforestation, renewable energy development, methane capture, and energy efficiency improvements.',
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        ref={heroRef.ref}
        className={`section-lg relative bg-pale-lime/20 dark:bg-gray-900 ${heroRef.inView ? 'reveal-on-scroll is-revealed' : 'reveal-on-scroll'}`}
      >
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="gradient-text font-bold mb-6"
              variants={itemVariant}
            >
              Carbon Trading Made Simple
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariant}
            >
              Offset your carbon footprint with our transparent and efficient trading platform. 
              Join the global movement for a sustainable future.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              variants={itemVariant}
            >
              <Link href="/calculator" className="btn btn-primary btn-hover-slide">
                <span>Calculate Your Footprint</span>
              </Link>
              <Link href="/about" className="btn btn-outline hover-zoom">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-sage/20 blur-3xl"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-dark-forest/10 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </div>
      </motion.section>

      {/* Interactive Information Section */}
      <motion.section 
        ref={infoRef.ref}
        className={`section ${infoRef.inView ? 'reveal-on-scroll is-revealed' : 'reveal-on-scroll'}`}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-14"
            initial="hidden"
            animate={infoRef.inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-dark-forest dark:text-pale-lime font-semibold mb-5">Why Choose Clearbon?</h2>
            <p className="max-w-2xl mx-auto">Our platform offers a transparent, efficient, and secure way to trade carbon credits and offset your carbon footprint.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap-lg"
            initial="hidden"
            animate={infoRef.inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Feature Card 1 */}
            <motion.div 
              className="card card-hover hover-lift"
              variants={itemVariant}
            >
              <div className="card-body">
                <div className="mb-5 text-dark-forest">
                  <FaLeaf className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-dark-forest">Eco-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">Support sustainable projects that reduce greenhouse gas emissions and combat climate change.</p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div 
              className="card card-hover hover-lift"
              variants={itemVariant}
            >
              <div className="card-body">
                <div className="mb-5 text-dark-forest">
                  <FaChartLine className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-dark-forest">Transparent</h3>
                <p className="text-gray-600 dark:text-gray-300">Full visibility into carbon credit sources, prices, and impacts through our blockchain-based platform.</p>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div 
              className="card card-hover hover-lift"
              variants={itemVariant}
            >
              <div className="card-body">
                <div className="mb-5 text-dark-forest">
                  <FaExchangeAlt className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-dark-forest">Efficient</h3>
                <p className="text-gray-600 dark:text-gray-300">Fast and low-cost transactions with our streamlined trading process and minimal fees.</p>
              </div>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div 
              className="card card-hover hover-lift"
              variants={itemVariant}
            >
              <div className="card-body">
                <div className="mb-5 text-dark-forest">
                  <FaShieldAlt className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-dark-forest">Secure</h3>
                <p className="text-gray-600 dark:text-gray-300">Advanced security measures protect your transactions and data throughout the trading process.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section 
        ref={newsRef.ref}
        className={`section bg-pale-lime/20 dark:bg-gray-900 ${newsRef.inView ? 'reveal-on-scroll is-revealed' : 'reveal-on-scroll'}`}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-14"
            initial="hidden"
            animate={newsRef.inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-dark-forest dark:text-pale-lime font-semibold mb-5">Latest News</h2>
            <p className="max-w-2xl mx-auto">Stay updated with the latest developments in carbon trading and climate action.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 grid-gap-lg"
            initial="hidden"
            animate={newsRef.inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* News Card 1 */}
            <motion.div 
              className="card card-hover overflow-hidden hover-zoom"
              variants={scaleIn}
            >
              <div className="relative h-56">
                <Image 
                  src="/images/news-1.jpg" 
                  alt="Carbon Market News" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="card-body">
                <span className="text-sm text-sage font-medium">Market News</span>
                <h3 className="text-xl font-medium my-3 text-dark-forest">Carbon Credits Reach All-Time High</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">Global carbon markets saw unprecedented growth as demand for high-quality credits increases.</p>
                <Link href="/news/carbon-credits-ath" className="mt-5 inline-block text-dark-forest hover-underline">
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* News Card 2 */}
            <motion.div 
              className="card card-hover overflow-hidden hover-zoom"
              variants={scaleIn}
            >
              <div className="relative h-56">
                <Image 
                  src="/images/news-2.jpg" 
                  alt="Company Announcement" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="card-body">
                <span className="text-sm text-sage font-medium">Announcement</span>
                <h3 className="text-xl font-medium my-3 text-dark-forest">New Partnership with GreenTech</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">Clearbon announces strategic partnership to expand sustainable technology solutions.</p>
                <Link href="/news/greentech-partnership" className="mt-5 inline-block text-dark-forest hover-underline">
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* News Card 3 */}
            <motion.div 
              className="card card-hover overflow-hidden hover-zoom"
              variants={scaleIn}
            >
              <div className="relative h-56">
                <Image 
                  src="/images/news-3.jpg" 
                  alt="Industry Insight" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="card-body">
                <span className="text-sm text-sage font-medium">Insight</span>
                <h3 className="text-xl font-medium my-3 text-dark-forest">The Future of Voluntary Carbon Markets</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">Industry experts weigh in on trends shaping the voluntary carbon market ecosystem.</p>
                <Link href="/news/future-vcm" className="mt-5 inline-block text-dark-forest hover-underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef.ref}
        className={`section ${ctaRef.inView ? 'reveal-on-scroll is-revealed' : 'reveal-on-scroll'}`}
      >
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto bg-dark-forest text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            initial="hidden"
            animate={ctaRef.inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <motion.div 
                className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-sage/20 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-pale-lime/10 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reduce Your Carbon Footprint?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200">Join thousands of companies and individuals making a positive impact on our planet through carbon trading.</p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/register" className="btn bg-sage hover:bg-pale-lime hover:text-dark-forest text-dark-forest font-medium transition-all duration-300">
                  Get Started Today
                </Link>
                <Link href="/contact" className="btn border border-white text-white hover:bg-white hover:text-dark-forest transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
