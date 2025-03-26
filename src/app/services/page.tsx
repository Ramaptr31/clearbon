'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaChartLine, 
  FaLeaf, 
  FaCalculator, 
  FaRegClipboard, 
  FaUsers, 
  FaRegHandshake,
  FaGlobeAmericas,
  FaTree,
  FaSolarPanel,
  FaTrashAlt,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

export default function Services() {
  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [tradingRef, tradingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [offsetRef, offsetInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Projects data
  const projectTypes = [
    {
      icon: <FaTree size={24} className="text-primary" />,
      title: "Reforestation",
      description: "Projects that plant and restore forests, increasing carbon sequestration and biodiversity.",
      image: "/images/forest-project.svg"
    },
    {
      icon: <FaSolarPanel size={24} className="text-primary" />,
      title: "Renewable Energy",
      description: "Clean energy projects like solar, reducing the need for fossil fuel-based electricity generation.",
      image: "/images/wind-project.svg"
    },
    {
      icon: <FaGlobeAmericas size={24} className="text-primary" />,
      title: "Conservation",
      description: "Protection of ecosystems that naturally store carbon and preserve biodiversity.",
      image: "/images/forest-project.svg"
    },
    {
      icon: <FaTrashAlt size={24} className="text-primary" />,
      title: "Waste Management",
      description: "Projects that capture methane from landfills or improve waste disposal methods.",
      image: "/images/water-project.svg"
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      title: "Basic",
      price: "$0",
      description: "Essential tools for individual carbon footprint management",
      features: [
        "Carbon footprint calculator",
        "Basic reporting tools",
        "Access to educational resources",
        "Purchase offsets at market price"
      ],
      cta: "Get Started Free",
      link: "/register",
      highlight: false
    },
    {
      title: "Business",
      price: "$199",
      period: "/month",
      description: "Complete solutions for businesses to manage their carbon strategy",
      features: [
        "Team accounts and collaboration tools",
        "Advanced analytics and reporting",
        "API access for integration",
        "Detailed project documentation",
        "Dedicated account support",
        "Custom offset portfolios"
      ],
      cta: "Start 14-Day Trial",
      link: "/register",
      highlight: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Custom implementation and onboarding",
        "Supply chain emissions analysis",
        "White-labeled reporting tools",
        "Regulatory compliance support",
        "Dedicated account manager",
        "Priority support"
      ],
      cta: "Contact Sales",
      link: "/contact",
      highlight: false
    }
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
            <h1 className="page-title">Our Services</h1>
            <p className="page-description mx-auto">
              We provide comprehensive solutions for carbon management, from footprint calculation to offset project development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCalculator size={28} />,
              title: "Carbon Footprint Analysis",
              description: "Accurately measure your carbon emissions with our advanced calculator tools tailored for both individuals and organizations."
            },
            {
              icon: <FaChartLine size={28} />,
              title: "Carbon Trading Platform",
              description: "Buy, sell, and manage carbon credits on our transparent and user-friendly trading platform with real-time market data."
            },
            {
              icon: <FaLeaf size={28} />,
              title: "Offset Project Development",
              description: "Develop and fund carbon offset projects with our expert guidance, from concept through verification and certification."
            },
            {
              icon: <FaRegClipboard size={28} />,
              title: "ESG Reporting",
              description: "Comprehensive reporting tools for environmental, social, and governance metrics to meet stakeholder expectations."
            },
            {
              icon: <FaUsers size={28} />,
              title: "Climate Strategy Consulting",
              description: "Expert guidance to develop and implement effective carbon reduction strategies aligned with business objectives."
            },
            {
              icon: <FaRegHandshake size={28} />,
              title: "NGO & Corporate Partnerships",
              description: "Facilitation of strategic partnerships between NGOs with offset projects and corporations seeking to fund them."
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-soft border border-secondary/10 hover-elevate"
            >
              <div className="w-14 h-14 bg-accent/40 rounded-full flex items-center justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Carbon Trading Section */}
      <section ref={tradingRef} className="bg-accent/30 py-12 md:py-16 lg:py-20">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={tradingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="section-title">Carbon Trading Platform</h2>
              <div className="space-y-4 mb-6">
                <p className="text-text-secondary">
                  Our state-of-the-art carbon trading platform connects businesses with verified carbon offset projects around the world, enabling efficient and transparent transactions.
                </p>
                <p className="text-text-secondary">
                  With real-time data, advanced filtering, and detailed project information, you can make informed decisions about which carbon credits to purchase based on your specific criteria.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Transparent pricing and project details",
                  "Secure blockchain-based transactions",
                  "Portfolio management tools",
                  "Real-time market analytics",
                  "Automated purchase and retirement"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/trading-process" 
                className="btn btn-primary flex items-center justify-center md:justify-start md:inline-flex"
              >
                Learn About Trading Process <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={tradingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-secondary/10">
                <Image
                  src="/images/minimalist/carbon-trading.svg"
                  alt="Carbon Trading Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carbon Offset Section */}
      <section ref={offsetRef} className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={offsetInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-secondary/10">
              <Image
                src="/images/minimalist/carbon-offset.svg"
                alt="Carbon Offset Solutions"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={offsetInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="section-title">Carbon Offset Solutions</h2>
            <div className="space-y-4 mb-6">
              <p className="text-text-secondary">
                Our carbon offset solutions help you compensate for your unavoidable emissions by investing in projects that reduce or remove carbon from the atmosphere.
              </p>
              <p className="text-text-secondary">
                We ensure all offset projects meet the highest standards of quality, transparency, and impact verification, giving you confidence in your climate action.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Personalized offset recommendations",
                "Subscription-based offset programs",
                "Detailed impact reporting",
                "Certificate generation for retirement",
                "Custom branding for corporate programs"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/carbon-offset" 
              className="btn btn-primary flex items-center justify-center md:justify-start md:inline-flex"
            >
              Explore Carbon Offsets <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Types Section */}
      <section ref={projectsRef} className="bg-accent/30 py-12 md:py-16 lg:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Project Types</h2>
            <p className="section-subtitle mx-auto">
              We offer a diverse portfolio of verified carbon offset projects across multiple categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft hover-elevate"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="mr-3">{project.icon}</span>
                    <h3 className="text-xl font-semibold text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle mx-auto">
            Flexible options to meet the needs of individuals, businesses, and enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden border ${
                plan.highlight 
                  ? 'border-primary shadow-md relative' 
                  : 'border-secondary/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
              )}
              <div className={`p-6 ${plan.highlight ? 'bg-accent/30' : 'bg-white'}`}>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-secondary ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-text-secondary mb-6">
                  {plan.description}
                </p>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.link} 
                  className={`w-full btn ${
                    plan.highlight ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Climate Action?
            </h2>
            <p className="text-accent/90 text-lg mb-8 mx-auto">
              Start your journey toward carbon neutrality today with our comprehensive suite of services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-accent hover:text-primary transition-all duration-300"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/register" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Create Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 