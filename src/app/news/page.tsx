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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
      image: '/images/news-bg.svg',
      date: 'May 10, 2023',
      category: 'Market Trends',
      author: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'New Study Shows Carbon Offsets Effectiveness in Reducing Emissions',
      summary: 'Research confirms that properly implemented carbon offset projects can significantly reduce global carbon emissions.',
      content: 'A comprehensive study conducted by the Climate Research Institute has found that high-quality carbon offset projects can achieve up to a 90% effectiveness rate in reducing global emissions when properly implemented and verified. The research analyzed over 200 offset projects across different sectors, including renewable energy, forestry, and methane capture, providing valuable insights for companies looking to invest in credible offset solutions.',
      image: '/images/news-bg.svg',
      date: 'April 22, 2023',
      category: 'Research',
      author: 'Michael Chen',
    },
    {
      id: 3,
      title: 'Indonesia Launches New Carbon Trading Program',
      summary: 'The Indonesian government has announced a comprehensive carbon trading program to combat deforestation and reduce emissions.',
      content: 'In a significant move toward meeting its climate goals, Indonesia has unveiled a national carbon trading program focused on forest conservation and sustainable land use practices. The program aims to reduce the country\'s carbon emissions by 29% by 2030 and will provide economic incentives for local communities to preserve forests while allowing companies to offset their emissions through verified conservation projects.',
      image: '/images/news-bg.svg',
      date: 'March 15, 2023',
      category: 'Policy',
      author: 'Diana Patel',
    },
    {
      id: 4,
      title: 'Corporate Leaders Pledge Carbon Neutrality by 2030',
      summary: 'A coalition of major multinational corporations has committed to achieving carbon neutrality across their operations by 2030.',
      content: 'At the recent Sustainable Business Forum, 50 global corporations representing over $4 trillion in annual revenue announced a joint pledge to reach carbon neutrality by 2030. The ambitious commitment includes eliminating direct emissions from their operations, transitioning to renewable energy sources, and offsetting unavoidable emissions through verified carbon credit programs.',
      image: '/images/news-bg.svg',
      date: 'March 8, 2023',
      category: 'Corporate',
      author: 'Robert Torres',
    },
    {
      id: 5,
      title: 'European Union Strengthens Carbon Border Adjustment Mechanism',
      summary: 'The EU has finalized plans to implement a Carbon Border Adjustment Mechanism to prevent carbon leakage and protect domestic industries.',
      content: 'The European Parliament has approved the final version of its Carbon Border Adjustment Mechanism (CBAM), which will impose tariffs on carbon-intensive imports from countries with less stringent climate policies. Set to begin implementation in 2025, the CBAM aims to level the playing field for EU industries while encouraging global trading partners to strengthen their own carbon pricing systems.',
      image: '/images/news-bg.svg',
      date: 'February 20, 2023',
      category: 'Policy',
      author: 'Sophie Martin',
    },
    {
      id: 6,
      title: 'Renewable Energy Projects Dominate Carbon Offset Market',
      summary: 'Renewable energy initiatives have become the leading category of carbon offset projects globally, surpassing forestry for the first time.',
      content: 'According to the latest Carbon Offset Market Report, renewable energy projects now account for 42% of all verified carbon offset credits issued globally, surpassing forestry projects (38%) for the first time. The shift reflects growing investor confidence in renewable energy technologies and their potential to deliver reliable emissions reductions while contributing to sustainable development goals in emerging economies.',
      image: '/images/news-bg.svg',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-header">
        <div className="page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="page-title">Climate & Carbon News</h1>
            <p className="page-description mx-auto">
              Stay updated with the latest developments in climate policy, carbon markets, and environmental initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Filters */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Search Bar */}
          <div className="md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input w-full pl-10 pr-4 py-3"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-accent/40 text-text-secondary hover:bg-accent/60'
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
                className="bg-white rounded-xl overflow-hidden shadow-soft hover-elevate"
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
                <div className="p-6 border-t border-secondary/10 flex flex-col h-64">
                  <div className="flex items-center text-sm text-text-secondary mb-2 space-x-4">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" /> {news.date}
                    </span>
                    <span>{news.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-text-secondary mb-4 flex-grow line-clamp-3">
                    {news.summary}
                  </p>
                  <Link 
                    href={`/news/${news.id}`} 
                    className="hover-underline text-primary font-medium inline-flex"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <p className="text-lg text-text-secondary">
                No news articles match your search. Please try different keywords or categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-accent/30 py-12 md:py-16 lg:py-20 border-t border-secondary/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-title">Stay Updated</h2>
            <p className="section-subtitle mb-8 mx-auto">
              Subscribe to our newsletter to get the latest news on carbon markets, climate policies, and sustainable innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input flex-grow"
              />
              <button className="btn btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 