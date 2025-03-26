'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export default function FAQs() {
  // Categories of FAQs
  const faqCategories = [
    { id: 'general', name: 'General Questions' },
    { id: 'offsets', name: 'Carbon Offsetting' },
    { id: 'calculator', name: 'Carbon Calculator' },
    { id: 'business', name: 'For Businesses' },
    { id: 'individuals', name: 'For Individuals' },
    { id: 'platform', name: 'Platform Usage' }
  ];

  const [activeCategory, setActiveCategory] = useState('general');
  
  // FAQ data grouped by category
  const faqsByCategory = {
    general: [
      {
        question: "What is Clearbon?",
        answer: "Clearbon is a comprehensive platform that connects individuals and businesses with verified carbon offset projects. We provide tools to calculate carbon footprints, strategies to reduce emissions, and opportunities to offset remaining emissions through high-quality carbon projects worldwide."
      },
      {
        question: "What is carbon offsetting?",
        answer: "Carbon offsetting is the practice of compensating for carbon dioxide (CO₂) emissions by funding projects that reduce, remove, or avoid greenhouse gas emissions elsewhere. This can include renewable energy projects, reforestation, conservation efforts, and more."
      },
      {
        question: "Why should I offset my carbon emissions?",
        answer: "While reducing your carbon footprint should be the primary goal, some emissions are unavoidable in modern life. Carbon offsetting helps neutralize these unavoidable emissions by supporting projects that reduce or remove carbon from the atmosphere. It's a practical way to take responsibility for your environmental impact while supporting sustainable development projects worldwide."
      },
      {
        question: "How does carbon trading work?",
        answer: "Carbon trading operates on the principle that one ton of carbon dioxide reduced or removed anywhere has the same climate benefit. When entities reduce their emissions beyond required levels, they can sell these reductions as 'credits' to others who need to offset their emissions. This market-based approach incentivizes emission reductions where they are most cost-effective."
      },
      {
        question: "What makes Clearbon different from other offset providers?",
        answer: "Clearbon stands out through our commitment to transparency, quality, and user experience. We only list thoroughly vetted projects with clear additionality and verified impact. Our platform offers detailed analytics for businesses, personalized recommendations for individuals, and a seamless interface that makes climate action accessible to everyone."
      }
    ],
    offsets: [
      {
        question: "How are carbon offset projects verified?",
        answer: "Carbon offset projects on our platform are verified by independent third parties using internationally recognized standards such as Gold Standard, Verified Carbon Standard (Verra), Climate Action Reserve, and American Carbon Registry. These standards ensure that projects genuinely reduce emissions, are additional (wouldn't happen without carbon finance), and provide accurate measurement of climate benefits."
      },
      {
        question: "What types of carbon offset projects are available?",
        answer: "Our platform features diverse project types including: reforestation and afforestation, renewable energy (solar, wind, hydro), methane capture from landfills and farms, energy efficiency improvements, clean cooking solutions, and wildlife conservation. Each project has different co-benefits beyond carbon reduction, such as supporting local communities or protecting biodiversity."
      },
      {
        question: "How much does it cost to offset one ton of carbon?",
        answer: "The price per ton varies depending on the project type, location, co-benefits, and verification standard. On our platform, prices typically range from $8-25 per ton of CO₂e. Renewable energy projects tend to be less expensive, while forestry and community-focused projects with multiple co-benefits command higher prices."
      },
      {
        question: "How do I know my offsets are making a real difference?",
        answer: "We provide detailed information about each project's impact, verification status, and progress. All offset purchases come with certificates and unique serial numbers that can be tracked in public registries. We also share regular updates about the projects you support, including photos, stories, and verification reports to show their real-world impact."
      },
      {
        question: "Can carbon offsetting be considered greenwashing?",
        answer: "Carbon offsetting can be misused for greenwashing when organizations rely solely on offsets without making efforts to reduce emissions. At Clearbon, we emphasize a hierarchy of climate action: measure, reduce, and then offset unavoidable emissions. We encourage transparency about emissions and reduction efforts, viewing offsetting as a complement to—not a replacement for—direct emission reductions."
      }
    ],
    calculator: [
      {
        question: "How accurate is your carbon footprint calculator?",
        answer: "Our calculator uses the latest emissions factors and methodologies based on peer-reviewed research. While no calculator can be 100% precise without detailed measurement, ours provides a strong estimate by considering transportation, home energy, diet, purchases, and other lifestyle factors. We update our calculation methods regularly to incorporate the latest scientific data."
      },
      {
        question: "What factors are included in the carbon footprint calculation?",
        answer: "Our comprehensive calculator includes home energy use (electricity, heating, cooling), transportation (car, public transit, flights), diet (meat consumption, food waste), personal purchases (clothing, electronics, services), and lifestyle factors. For businesses, we include direct operations, purchased electricity, business travel, employee commuting, and supply chain emissions where data is available."
      },
      {
        question: "How often should I recalculate my carbon footprint?",
        answer: "For individuals, we recommend recalculating every 6-12 months or after significant lifestyle changes like moving, changing jobs, or switching to an electric vehicle. For businesses, quarterly or bi-annual calculations help track progress toward reduction goals. Our platform saves your previous inputs to make recalculation quick and easy."
      },
      {
        question: "Can I calculate emissions for a specific activity like flying?",
        answer: "Yes! Our calculator allows for activity-specific calculations, perfect for offsetting one-time emissions from flights, road trips, events, or specific purchases. Just select 'Single Activity' mode in the calculator and input the relevant details to receive an accurate estimate for that specific activity."
      },
      {
        question: "How do you calculate business carbon footprints?",
        answer: "Our business calculator follows the Greenhouse Gas Protocol, the most widely used accounting standard. We segment emissions into Scope 1 (direct emissions), Scope 2 (purchased electricity), and Scope 3 (indirect emissions including business travel, employee commuting, and supply chain). We work with businesses to gather appropriate data for each category and can integrate with common accounting and enterprise systems."
      }
    ],
    business: [
      {
        question: "How can carbon offsetting benefit my business?",
        answer: "Carbon offsetting can help your business meet sustainability goals, comply with emerging regulations, enhance brand reputation, engage employees, meet customer and investor expectations, and prepare for a low-carbon economy. Many organizations use carbon offsetting as part of a comprehensive climate strategy that includes direct emissions reductions and stakeholder engagement."
      },
      {
        question: "What reporting and documentation do you provide for business offsets?",
        answer: "We provide comprehensive documentation for all business offset purchases, including certificates with unique serial numbers, detailed project information, verification reports, and custom impact reports. These materials can be used for sustainability reporting, marketing materials, and stakeholder communications. We can tailor reporting to align with common frameworks like GRI, CDP, and TCFD."
      },
      {
        question: "Can we choose specific projects to support?",
        answer: "Absolutely! Businesses can select specific projects that align with their values, industry, geographic focus, or sustainability goals. We can also create custom portfolios of projects based on your criteria. Many businesses choose to support projects in their operational regions or that connect to their industry (e.g., forestry companies supporting reforestation projects)."
      },
      {
        question: "Do you offer carbon neutral certification for businesses?",
        answer: "Yes, we offer a Carbon Neutral Business certification program. After calculating your full carbon footprint and offsetting unavoidable emissions through our verified projects, we provide certification that your operations are carbon neutral. This includes a digital badge, certificate, and marketing materials to communicate your achievement to stakeholders."
      },
      {
        question: "How can we engage our employees or customers in our carbon strategy?",
        answer: "We offer several engagement solutions, including employee offset contribution programs, customer-facing carbon neutral shipping options, impact dashboards for internal communications, and co-branded educational materials. Many businesses also use our individual calculator as an employee benefit, allowing staff to measure and offset their personal footprints."
      }
    ],
    individuals: [
      {
        question: "How much does it cost to offset my annual carbon footprint?",
        answer: "The average person in the United States has a carbon footprint of approximately 16 tons of CO₂e per year. At an average price of $15 per ton, offsetting your entire footprint would cost about $240 annually or $20 monthly. However, through our reduction recommendations, most users can first reduce their footprint by 20-30%, lowering the cost of offsetting the remainder."
      },
      {
        question: "Can I offset just part of my carbon footprint?",
        answer: "Absolutely! While offsetting your entire footprint is ideal, any amount of offsetting makes a positive impact. Many users start by offsetting specific activities like flights or commuting, then gradually increase their commitment over time. Our platform allows you to offset any amount, from a single ton to your entire footprint."
      },
      {
        question: "What's the difference between one-time and subscription offsets?",
        answer: "One-time offsets are ideal for specific activities or events, like a flight or conference attendance. Subscription offsets are monthly recurring purchases designed to cover your ongoing emissions from daily life. Many users prefer subscriptions as they provide a consistent climate impact and can be adjusted as your carbon footprint changes."
      },
      {
        question: "How can I reduce my carbon footprint before offsetting?",
        answer: "After calculating your footprint, our platform provides personalized recommendations for reducing emissions based on your specific inputs. Common strategies include switching to renewable energy, improving home energy efficiency, reducing car travel, adjusting diet, minimizing air travel, and consuming fewer new products. We emphasize reduction first, with offsetting as a complement."
      },
      {
        question: "Can I give carbon offsets as a gift?",
        answer: "Yes! Carbon offsets make meaningful gifts that create positive environmental impact. Our gift offsets include a personalized digital certificate explaining the climate benefit and the specific project supported. You can choose the amount and project type, making it a thoughtful gift for environmentally conscious friends and family."
      }
    ],
    platform: [
      {
        question: "How do I create an account?",
        answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner of our homepage, enter your email address and create a password. You'll receive a verification email to confirm your account. Once verified, you can complete your profile, calculate your carbon footprint, and begin exploring offset options."
      },
      {
        question: "How do payments for carbon offsets work?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for offset purchases. For subscriptions, your payment method will be automatically charged monthly. All transactions are processed through secure payment gateways with encryption. For businesses, we offer invoicing options and can accommodate procurement processes."
      },
      {
        question: "Can I track the impact of my offsets over time?",
        answer: "Yes! Your personal dashboard shows all your offset purchases, their climate impact, and the specific projects you've supported. You can view your cumulative impact over time, download certificates, and receive updates about your projects. Business accounts include more detailed analytics and custom reporting options."
      },
      {
        question: "Is my personal data secure?",
        answer: "Protecting your data is a top priority. We use industry-standard encryption and security practices to safeguard your information. We never sell personal data to third parties and only use it to provide and improve our services. You can review our comprehensive Privacy Policy for details on how we collect, use, and protect your data."
      },
      {
        question: "How can I get support if I have questions?",
        answer: "We offer multiple support channels: email support available 7 days a week, live chat during business hours, an extensive knowledge base, and scheduled consultation calls for business customers. Most inquiries receive a response within 24 hours. For technical issues, priority support is available to address urgent concerns."
      }
    ]
  };

  // FAQ Accordion component
  const FAQAccordion = ({ faq }: { faq: { question: string; answer: string } }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <motion.div 
        variants={fadeIn}
        className="card card-hover mb-4"
      >
        <div 
          className="card-body cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime">{faq.question}</h3>
            <div className="text-sage">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

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
            <h1 className="page-title">Frequently Asked Questions</h1>
            <p className="page-description">
              Find answers to common questions about carbon trading, offsetting, and how our platform works. If you don't find what you're looking for, please reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          {/* FAQ Category Tabs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap justify-center mb-10 gap-2"
          >
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-dark-forest text-white'
                    : 'bg-sage/20 text-dark-forest hover:bg-sage/40'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* FAQ Accordions */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {faqsByCategory[activeCategory as keyof typeof faqsByCategory].map((faq, index) => (
              <FAQAccordion key={index} faq={faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-dark-forest dark:text-pale-lime mb-6">Still Have Questions?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Our team is here to help! Reach out to us for personalized support with your carbon journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary hover-lift">
                Contact Our Team
              </Link>
              <Link href="/documentation" className="btn btn-outline hover-lift">
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 