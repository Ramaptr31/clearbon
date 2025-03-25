'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaTag, FaSearch } from 'react-icons/fa';

export default function News() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Intersection observer hook
  const [newsRef, newsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // State for filtering news
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Dummy news data with more items
  const newsItems = [
    {
      id: 1,
      title: 'Global Carbon Trading Market Grows by 15% in 2023',
      summary: 'The global carbon trading market experienced significant growth last year as more countries implement carbon pricing mechanisms.',
      content: 'According to a new report published by the International Carbon Market Association, the global carbon market reached a record value of $215 billion in 2023, representing a 15% increase from the previous year. The growth was primarily driven by the expansion of emissions trading systems in developing economies and strengthened policies in established markets like the EU and North America.',
      image: '/images/news1.jpg',
      date: 'May 10, 2023',
      category: 'Market Trends',
      author: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'New Study Shows Carbon Offsets Effectiveness in Reducing Emissions',
      summary: 'Research confirms that properly implemented carbon offset projects can significantly reduce global carbon emissions.',
      content: 'A comprehensive study conducted by the Climate Research Institute has found that high-quality carbon offset projects can achieve up to a 90% effectiveness rate in reducing global emissions when properly implemented and verified. The research analyzed over 200 offset projects across different sectors, including renewable energy, forestry, and methane capture, providing valuable insights for companies looking to invest in credible offset solutions.',
      image: '/images/news2.jpg',
      date: 'April 22, 2023',
      category: 'Research',
      author: 'Michael Chen',
    },
    {
      id: 3,
      title: 'Indonesia Launches New Carbon Trading Program',
      summary: 'The Indonesian government has announced a comprehensive carbon trading program to combat deforestation and reduce emissions.',
      content: 'In a significant move toward meeting its climate goals, Indonesia has unveiled a national carbon trading program focused on forest conservation and sustainable land use practices. The program aims to reduce the country\'s carbon emissions by 29% by 2030 and will provide economic incentives for local communities to preserve forests while allowing companies to offset their emissions through verified conservation projects.',
      image: '/images/news3.jpg',
      date: 'March 15, 2023',
      category: 'Policy',
      author: 'Diana Patel',
    },
    {
      id: 4,
      title: 'Corporate Leaders Pledge Carbon Neutrality by 2030',
      summary: 'A coalition of major multinational corporations has committed to achieving carbon neutrality across their operations by 2030.',
      content: 'At the recent Sustainable Business Forum, 50 global corporations representing over $4 trillion in annual revenue announced a joint pledge to reach carbon neutrality by 2030. The ambitious commitment includes eliminating direct emissions from their operations, transitioning to renewable energy sources, and offsetting unavoidable emissions through verified carbon credit programs.',
      image: '/images/news4.jpg',
      date: 'March 8, 2023',
      category: 'Corporate',
      author: 'Robert Torres',
    },
    {
      id: 5,
      title: 'European Union Strengthens Carbon Border Adjustment Mechanism',
      summary: 'The EU has finalized plans to implement a Carbon Border Adjustment Mechanism to prevent carbon leakage and protect domestic industries.',
      content: 'The European Parliament has approved the final version of its Carbon Border Adjustment Mechanism (CBAM), which will impose tariffs on carbon-intensive imports from countries with less stringent climate policies. Set to begin implementation in 2025, the CBAM aims to level the playing field for EU industries while encouraging global trading partners to strengthen their own carbon pricing systems.',
      image: '/images/news5.jpg',
      date: 'February 20, 2023',
      category: 'Policy',
      author: 'Sophie Martin',
    },
    {
      id: 6,
      title: 'Renewable Energy Projects Dominate Carbon Offset Market',
      summary: 'Renewable energy initiatives have become the leading category of carbon offset projects globally, surpassing forestry for the first time.',
      content: 'According to the latest Carbon Offset Market Report, renewable energy projects now account for 42% of all verified carbon offset credits issued globally, surpassing forestry projects (38%) for the first time. The shift reflects growing investor confidence in renewable energy technologies and their potential to deliver reliable emissions reductions while contributing to sustainable development goals in emerging economies.',
      image: '/images/news6.jpg',
      date: 'February 5, 2023',
      category: 'Market Trends',
      author: 'James Wilson',
    },
  ];

  // Categories for filtering
  const categories = [
    'all',
    ...Array.from(new Set(newsItems.map(item => item.category))),
  ];

  // Filter news based on search term and category
  const filteredNews = newsItems.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || news.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Climate & Carbon News
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with the latest developments in climate policy, carbon markets, and environmental initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Filters */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            {/* Search Bar */}
            <div className="md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors duration-200"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News Items */}
          <div 
            ref={newsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial="hidden"
                  animate={newsInView ? "visible" : "hidden"}
                  variants={slideInRight}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-zoom"
                >
                  <div className="relative h-52">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6 border border-t-0 border-gray-200 dark:border-gray-700 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2 space-x-4">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-1" /> {news.date}
                      </span>
                      <span>{news.author}</span>
                    </div>
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
                      Read Full Article →
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  No news articles match your search. Please try different keywords or categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter to get the latest news on carbon markets, climate policies, and sustainable innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-primary hover:bg-gray-100 transition-colors duration-300 font-semibold rounded-md">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 