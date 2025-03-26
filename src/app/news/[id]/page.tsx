'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Example news data (would normally come from an API or database)
const newsItems = [
  {
    id: '1',
    title: 'Global Carbon Trading Market Grows by 15% in 2023',
    summary: 'The global carbon trading market experienced significant growth last year as more countries implement carbon pricing mechanisms.',
    content: `
      <p>According to a new report published by the International Carbon Market Association, the global carbon market reached a record value of $215 billion in 2023, representing a 15% increase from the previous year. The growth was primarily driven by the expansion of emissions trading systems in developing economies and strengthened policies in established markets like the EU and North America.</p>
      
      <p>The report highlights several key trends:</p>
      
      <ul>
        <li>The EU Emissions Trading System (ETS) remains the largest carbon market, accounting for approximately 45% of global value.</li>
        <li>China's national ETS, launched in 2021, has shown rapid expansion and now covers over 2,000 power sector entities.</li>
        <li>Regional carbon markets in North America, including the Western Climate Initiative and RGGI, have strengthened price floors and expanded sector coverage.</li>
        <li>Emerging economies in Southeast Asia and Latin America are developing new carbon pricing mechanisms with international support.</li>
      </ul>
      
      <p>"This growth demonstrates the increasing recognition of carbon pricing as an essential tool for meeting climate goals," said Maria Chen, lead author of the report. "As more countries work toward their Paris Agreement commitments, we expect to see continued expansion and integration of carbon markets globally."</p>
      
      <p>The report also notes challenges, including price volatility, policy uncertainty, and the need for greater standardization across different markets. However, the overall trend points toward more robust and interconnected carbon trading systems in the coming years.</p>
      
      <p>For companies operating in multiple jurisdictions, navigating these diverse carbon pricing mechanisms remains complex. Experts recommend developing comprehensive carbon management strategies that account for evolving policies and market conditions in each region.</p>
    `,
    image: '/images/news1.jpg',
    date: 'May 10, 2023',
    category: 'Market Trends',
    author: 'Sarah Johnson',
    relatedArticles: [2, 6],
  },
  {
    id: '2',
    title: 'New Study Shows Carbon Offsets Effectiveness in Reducing Emissions',
    summary: 'Research confirms that properly implemented carbon offset projects can significantly reduce global carbon emissions.',
    content: `
      <p>A comprehensive study conducted by the Climate Research Institute has found that high-quality carbon offset projects can achieve up to a 90% effectiveness rate in reducing global emissions when properly implemented and verified. The research analyzed over 200 offset projects across different sectors, including renewable energy, forestry, and methane capture, providing valuable insights for companies looking to invest in credible offset solutions.</p>
      
      <p>The study, published in the Journal of Climate Policy, evaluated projects against strict criteria including:</p>
      
      <ul>
        <li>Additionality - ensuring that carbon reductions wouldn't have occurred without the project</li>
        <li>Permanence - confirming that carbon storage is long-term, especially for forest-based offsets</li>
        <li>Leakage prevention - guaranteeing that emissions aren't simply shifted elsewhere</li>
        <li>Community benefits - assessing how projects impact local populations</li>
      </ul>
      
      <p>"Our findings challenge the perception that carbon offsets are merely a way for companies to 'greenwash' their operations," said Dr. Michael Chen, lead researcher on the study. "When done right, offset projects deliver real environmental benefits and can play a crucial role in our climate mitigation strategy."</p>
      
      <p>The research found that forestry projects, particularly those focused on forest protection in tropical regions, offer some of the highest carbon benefits per dollar invested. However, they also face challenges related to permanence and verification. Renewable energy projects scored highest on reliability and ease of measurement.</p>
      
      <p>For companies looking to utilize carbon offsets, the report recommends:</p>
      
      <ol>
        <li>Prioritizing emissions reductions within their own operations first</li>
        <li>Selecting offset projects certified by reputable standards like Gold Standard or Verified Carbon Standard</li>
        <li>Diversifying offset investments across multiple project types and regions</li>
        <li>Engaging directly with offset project developers to enhance transparency</li>
      </ol>
      
      <p>The study concludes that while offsets shouldn't replace direct emissions reductions, they represent a valuable tool for addressing unavoidable emissions and supporting sustainable development in regions that host offset projects.</p>
    `,
    image: '/images/news2.jpg',
    date: 'April 22, 2023',
    category: 'Research',
    author: 'Michael Chen',
    relatedArticles: [1, 3],
  },
  {
    id: '3',
    title: 'Indonesia Launches New Carbon Trading Program',
    summary: 'The Indonesian government has announced a comprehensive carbon trading program to combat deforestation and reduce emissions.',
    content: `
      <p>In a significant move toward meeting its climate goals, Indonesia has unveiled a national carbon trading program focused on forest conservation and sustainable land use practices. The program aims to reduce the country's carbon emissions by 29% by 2030 and will provide economic incentives for local communities to preserve forests while allowing companies to offset their emissions through verified conservation projects.</p>
      
      <p>Announced by the Ministry of Environment and Forestry, the program establishes a regulatory framework for:</p>
      
      <ul>
        <li>Quantifying and verifying carbon sequestration in forest conservation projects</li>
        <li>Registering and trading carbon credits in a national registry</li>
        <li>Monitoring and reporting requirements for participating entities</li>
        <li>Revenue sharing mechanisms to benefit local and indigenous communities</li>
      </ul>
      
      <p>"Indonesia possesses some of the world's most carbon-rich forests, which are vital for global climate stability," said Minister Siti Nurbaya Bakar. "This program creates a sustainable economic model where forest protection becomes more valuable than forest conversion."</p>
      
      <p>The initiative builds on Indonesia's previous efforts to reduce deforestation, which have shown promising results in recent years. The carbon trading mechanism will initially focus on protecting primary forests and restoring degraded lands, with potential expansion to other sectors including energy and waste management.</p>
      
      <p>International partners, including the World Bank and several multinational corporations, have expressed support for the program. Initial funding of $150 million has been secured to develop the necessary infrastructure and build capacity among participating communities.</p>
      
      <p>For companies operating in Indonesia, the program offers a pathway to offset emissions while contributing to conservation efforts within the country. Several major palm oil producers have already committed to participating in pilot projects under the scheme.</p>
      
      <p>Environmental organizations have generally welcomed the initiative while emphasizing the importance of strong safeguards and transparent monitoring. "The success of this program will depend on rigorous verification and ensuring benefits flow to communities on the ground," said Aida Greenbury of the Sustainable Forest Alliance.</p>
      
      <p>The first carbon credits under the new system are expected to be issued by early 2024.</p>
    `,
    image: '/images/news3.jpg',
    date: 'March 15, 2023',
    category: 'Policy',
    author: 'Diana Patel',
    relatedArticles: [2, 5],
  },
  {
    id: '4',
    title: 'Corporate Leaders Pledge Carbon Neutrality by 2030',
    summary: 'A coalition of major multinational corporations has committed to achieving carbon neutrality across their operations by 2030.',
    content: `
      <p>At the recent Sustainable Business Forum, 50 global corporations representing over $4 trillion in annual revenue announced a joint pledge to reach carbon neutrality by 2030. The ambitious commitment includes eliminating direct emissions from their operations, transitioning to renewable energy sources, and offsetting unavoidable emissions through verified carbon credit programs.</p>
    `,
    image: '/images/news4.jpg',
    date: 'March 8, 2023',
    category: 'Corporate',
    author: 'Robert Torres',
    relatedArticles: [1, 5],
  },
  {
    id: '5',
    title: 'European Union Strengthens Carbon Border Adjustment Mechanism',
    summary: 'The EU has finalized plans to implement a Carbon Border Adjustment Mechanism to prevent carbon leakage and protect domestic industries.',
    content: `
      <p>The European Parliament has approved the final version of its Carbon Border Adjustment Mechanism (CBAM), which will impose tariffs on carbon-intensive imports from countries with less stringent climate policies. Set to begin implementation in 2025, the CBAM aims to level the playing field for EU industries while encouraging global trading partners to strengthen their own carbon pricing systems.</p>
    `,
    image: '/images/news5.jpg',
    date: 'February 20, 2023',
    category: 'Policy',
    author: 'Sophie Martin',
    relatedArticles: [3, 4],
  },
  {
    id: '6',
    title: 'Renewable Energy Projects Dominate Carbon Offset Market',
    summary: 'Renewable energy initiatives have become the leading category of carbon offset projects globally, surpassing forestry for the first time.',
    content: `
      <p>According to the latest Carbon Offset Market Report, renewable energy projects now account for 42% of all verified carbon offset credits issued globally, surpassing forestry projects (38%) for the first time. The shift reflects growing investor confidence in renewable energy technologies and their potential to deliver reliable emissions reductions while contributing to sustainable development goals in emerging economies.</p>
    `,
    image: '/images/news6.jpg',
    date: 'February 5, 2023',
    category: 'Market Trends',
    author: 'James Wilson',
    relatedArticles: [1, 2],
  },
];

export default function NewsArticle() {
  const params = useParams();
  const id = params?.id as string;
  const [article, setArticle] = useState<any | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with timeout
    setTimeout(() => {
      const foundArticle = newsItems.find(item => item.id === id);
      
      if (foundArticle) {
        setArticle(foundArticle);
        
        // Get related articles
        if (foundArticle.relatedArticles && foundArticle.relatedArticles.length > 0) {
          const related = newsItems.filter(item => 
            foundArticle.relatedArticles.includes(Number(item.id))
          );
          setRelatedArticles(related);
        }
      }
      
      setIsLoading(false);
    }, 300);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sorry, the article you are looking for could not be found.
          </p>
          <Link 
            href="/news"
            className="px-6 py-2 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors duration-300 inline-flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6 flex items-center text-primary text-sm">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="mx-4">•</span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" /> {article.date}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              {article.summary}
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {article.author.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div className="ml-4">
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-gray-400">Staff Writer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div 
                className="prose dark:prose-invert prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
            
            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-12"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
                  Share this article:
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaTwitter className="text-lg" />, name: 'Twitter', color: 'bg-[#1DA1F2] hover:bg-[#0d8bd9]' },
                    { icon: <FaFacebookF className="text-lg" />, name: 'Facebook', color: 'bg-[#4267B2] hover:bg-[#365899]' },
                    { icon: <FaLinkedinIn className="text-lg" />, name: 'LinkedIn', color: 'bg-[#0077B5] hover:bg-[#00669c]' },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white transition-colors duration-300`}
                      aria-label={`Share on ${social.name}`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Continue exploring similar topics with these recommended articles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-zoom"
                >
                  <Link href={`/news/${related.id}`} className="block">
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {related.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-primary mb-2 block">{related.date}</span>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                        {related.summary}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link 
                href="/news" 
                className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-white font-medium rounded-full inline-flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to All News
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
} 