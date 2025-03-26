'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

export default function PrivacyPolicy() {
  // Last updated date
  const lastUpdated = "February 15, 2023";

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
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-description">
              Our commitment to protecting your privacy and securing your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
                <p className="text-gray-600 dark:text-gray-400">Last Updated: {lastUpdated}</p>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline">Print</button>
                  <button className="btn btn-sm btn-outline">Download PDF</button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">1. Introduction</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Thank you for choosing Clearbon. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services. By accessing our website or using our platform, you consent to the collection, use, and disclosure of information in accordance with this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Register for an account</li>
                    <li>Complete a carbon footprint calculation</li>
                    <li>Purchase carbon offsets</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or promotions</li>
                    <li>Contact our customer support</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The personal information we may collect includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Billing information and payment details</li>
                    <li>Account credentials</li>
                    <li>Profile information, including preferences and settings</li>
                    <li>Information about your carbon footprint, lifestyle, and consumption patterns</li>
                    <li>For business users, information about your organization and its operations</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    When you visit our website or use our platform, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Device information (such as your IP address, browser type, and operating system)</li>
                    <li>Usage information (such as pages visited, time spent on pages, and links clicked)</li>
                    <li>Location information</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Providing and maintaining our services, including calculating carbon footprints and processing offset purchases</li>
                    <li>Personalizing your experience on our platform</li>
                    <li>Processing transactions and sending related information</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Sending you marketing and promotional communications (with your consent)</li>
                    <li>Improving our website, products, and services</li>
                    <li>Conducting research and analysis to better understand how users use our services</li>
                    <li>Protecting our services and preventing fraudulent activity</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">4. How We Share Your Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
                    <li><strong>Carbon Offset Project Partners:</strong> When you purchase offsets, relevant information may be shared with the project developers or registry operators to facilitate the transaction and verify offset retirements.</li>
                    <li><strong>Business Partners:</strong> With your consent, we may share information with business partners to offer you certain products, services, or promotions.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information when required by law, such as to comply with a subpoena, legal proceedings, or similar legal process.</li>
                    <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">5. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We use cookies for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Keeping you signed in to your account</li>
                    <li>Understanding how you use our website</li>
                    <li>Personalizing your experience</li>
                    <li>Analyzing the effectiveness of our marketing campaigns</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">6. Data Security</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our security measures include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular security training for all staff</li>
                    <li>Monitoring for suspicious activities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    After your account is closed, we may retain certain information for a limited period to comply with legal requirements, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigations, and take other actions permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">8. Your Privacy Rights</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li><strong>Right to Access:</strong> You can request a copy of the personal information we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> You can request that we correct inaccurate or incomplete information about you.</li>
                    <li><strong>Right to Erasure:</strong> You can request that we delete your personal information in certain circumstances.</li>
                    <li><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your information in certain circumstances.</li>
                    <li><strong>Right to Data Portability:</strong> You can request to receive your personal information in a structured, commonly used format.</li>
                    <li><strong>Right to Object:</strong> You can object to our processing of your personal information in certain circumstances.</li>
                    <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent at any time where we rely on consent to process your personal information.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16 without verification of parental consent, we will take steps to remove that information from our servers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you are located outside the United States and choose to provide information to us, please note that we transfer the information, including personal information, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">11. Updates to This Privacy Policy</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">12. Contact Us</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-sage/10 p-5 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Email:</strong> privacy@clearbon.com</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Postal Address:</strong> 123 Green Street, Suite 456, Eco City, EC 12345, United States</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-pale-lime/20 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-6 text-center">Related Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-gap-lg">
              <Link href="/terms-conditions" className="card card-hover text-center py-6">
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Terms & Conditions</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Review our Terms of Service for using the Clearbon platform.
                  </p>
                </div>
              </Link>
              
              <Link href="/faqs" className="card card-hover text-center py-6">
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">FAQs</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Find answers to commonly asked questions about our platform.
                  </p>
                </div>
              </Link>
              
              <Link href="/contact" className="card card-hover text-center py-6">
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Contact Us</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Get in touch with our team for privacy-related inquiries.
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 