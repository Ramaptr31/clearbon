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

export default function TermsConditions() {
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
            <h1 className="page-title">Terms & Conditions</h1>
            <p className="page-description">
              Please read these terms and conditions carefully before using the Clearbon platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Clearbon, Inc. ("we," "us" or "our"), concerning your access to and use of the Clearbon website and platform (collectively, the "Services").
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Services and you must discontinue use immediately.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Supplemental terms and conditions or documents that may be posted on the website from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">2. Services Description</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Clearbon provides a platform for individuals and businesses to calculate their carbon footprint, implement reduction strategies, and purchase carbon offsets to neutralize unavoidable emissions. Our Services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Carbon footprint calculators for individuals and businesses</li>
                    <li>Personalized recommendations for emission reductions</li>
                    <li>Access to verified carbon offset projects</li>
                    <li>Processing of carbon offset purchases</li>
                    <li>Reporting and tracking of carbon offset impact</li>
                    <li>Educational resources about climate change and carbon management</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    The provision of the Services is contingent upon your compliance with these Terms and Conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">3. User Accounts</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    You may not use as a username the name of another person or entity that is not lawfully available for use, or a name or trademark that is subject to any rights of another person or entity without appropriate authorization. You may not use as a username any name that is offensive, vulgar, or obscene.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">4. Carbon Offset Purchases</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    By purchasing carbon offsets through our platform, you acknowledge and agree to the following:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>All purchases are final and non-refundable unless otherwise specified or required by applicable law.</li>
                    <li>Pricing for carbon offsets is subject to change without notice.</li>
                    <li>We make a reasonable effort to ensure that all carbon offset projects listed on our platform are legitimate and verified by recognized standards, but we do not guarantee the performance or impact of any specific project.</li>
                    <li>Carbon offset retirements may take up to 30 days to be processed and confirmed in the respective registries.</li>
                    <li>You may not resell or transfer the carbon offsets purchased through our platform without our express written consent.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    For subscription-based offset purchases, you authorize us to charge your selected payment method on a recurring basis until you cancel the subscription. You may cancel your subscription at any time through your account settings or by contacting our customer support.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">5. Payment and Billing</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We accept various payment methods for carbon offset purchases and subscription services. By providing a payment method, you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Represent that you are authorized to use the payment method you provide.</li>
                    <li>Authorize us to charge the full amount to the payment method you provide.</li>
                    <li>Authorize us to charge you for any paid services or subscription to which you have subscribed.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If your payment cannot be processed, we reserve the right to suspend or terminate your access to the paid features of our Services. You are responsible for all applicable taxes related to your purchases.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    For business users, we may offer invoicing options. Payment terms for invoiced services are net 30 days from the invoice date, unless otherwise specified in writing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">6. Intellectual Property</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The Services and their original content, features, and functionality are and will remain the exclusive property of Clearbon and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Clearbon.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    You acknowledge and agree that all content, including without limitation text, images, audio, video, and interactive features, provided through the Services is our property or the property of our licensors and is protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">7. User Content</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our Services may allow you to submit, post, or share content, such as comments, reviews, and feedback ("User Content"). You retain ownership of any intellectual property rights that you hold in that User Content. When you submit User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with providing the Services.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>You own or control all rights in and to the User Content you provide.</li>
                    <li>The User Content does not violate, misappropriate, or infringe upon the rights of any third party, including privacy rights, publicity rights, copyrights, trademarks, contract rights, or any other intellectual property or proprietary rights.</li>
                    <li>The User Content does not contain material that is harmful, abusive, vulgar, obscene, hateful, or otherwise objectionable.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">8. Prohibited Activities</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You may not access or use the Services for any purpose other than that for which we make them available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    As a user of the Services, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                    <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
                    <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                    <li>Use the Services to advertise or offer to sell goods and services.</li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                    <li>Engage in unauthorized framing of or linking to the Services.</li>
                    <li>Attempt to impersonate another user or person or use the username of another user.</li>
                    <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                    <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
                    <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">9. Disclaimer of Warranties</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLEARBON DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    CLEARBON DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS IN THE SERVICES WILL BE CORRECTED. CLEARBON DOES NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    YOU ACKNOWLEDGE THAT THE CARBON CALCULATORS PROVIDED THROUGH THE SERVICES PROVIDE ESTIMATES BASED ON THE INFORMATION YOU PROVIDE AND INDUSTRY-STANDARD METHODOLOGIES, AND THE ACTUAL ENVIRONMENTAL IMPACT MAY VARY.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">10. Limitation of Liability</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CLEARBON, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;</li>
                    <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES;</li>
                    <li>ANY CONTENT OBTAINED FROM THE SERVICES; AND</li>
                    <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    IN NO EVENT SHALL CLEARBON'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO CLEARBON DURING THE TWELVE (12) MONTH PERIOD PRIOR TO THE CLAIM GIVING RISE TO SUCH LIABILITY.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">11. Indemnification</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    You agree to defend, indemnify, and hold harmless Clearbon, its parent company, subsidiaries, affiliates, and their respective directors, officers, employees, contractors, agents, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms and Conditions or your use of the Services, including, but not limited to, your User Content, any use of the Services' content, services, and products other than as expressly authorized in these Terms and Conditions, or your use of any information obtained from the Services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">12. Termination</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, at our sole discretion, for any reason whatsoever, including but not limited to a breach of these Terms and Conditions.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you wish to terminate your account, you may simply discontinue using the Services, or delete your account through your account settings. Upon termination of your account, your right to use the Services will cease immediately.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    All provisions of these Terms and Conditions which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">13. Governing Law</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    These Terms and Conditions and your use of the Services shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Your use of the Services may also be subject to other local, state, national, or international laws.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Any legal action or proceeding relating to your access to, or use of, the Services or these Terms and Conditions shall be instituted in a state or federal court in Delaware, and you agree to submit to the personal jurisdiction of such courts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">14. Dispute Resolution</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You agree to attempt to resolve any disputes informally before pursuing formal legal action. If informal resolution is not possible, any dispute arising from or relating to these Terms and Conditions or the Services shall be finally settled by binding arbitration. The arbitration shall be conducted on a confidential basis pursuant to the Commercial Arbitration Rules of the American Arbitration Association.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    To the fullest extent permitted by law, you agree that you will not file, join, or participate in any class action lawsuit in connection with any claim, dispute, or controversy that may arise in connection with your use of the Services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">15. Changes to Terms</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-forest dark:text-pale-lime mb-4">16. Contact Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-sage/10 p-5 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Email:</strong> legal@clearbon.com</p>
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
              <Link href="/privacy-policy" className="card card-hover text-center py-6">
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-dark-forest dark:text-pale-lime mb-3">Privacy Policy</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Learn how we protect and manage your personal data.
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
                    Get in touch with our team for legal and terms-related inquiries.
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