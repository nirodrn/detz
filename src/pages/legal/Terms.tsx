import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Shield, Code, Zap, Camera } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const Terms = () => {
  return (
    <div>
      <PageHeader
        title="Terms and Conditions"
        description="Guidelines for using our services"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      />
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>You must be at least 18 years old to purchase software or electrical products or to book studio services.</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>By accessing our website, you agree to provide accurate information during registration or checkout.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product and Service Use</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Software</h3>
                    </div>
                    <p className="text-gray-600">Licenses are granted per user and must not be shared or resold.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Electrical</h3>
                    </div>
                    <p className="text-gray-600">Installation and usage must comply with provided guidelines. Detz is not responsible for damages caused by improper installation.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Camera className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Studio</h3>
                    </div>
                    <p className="text-gray-600">Clients are responsible for arriving on time and adhering to studio policies during their sessions.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">All content, including software code, product designs, and studio materials, is the intellectual property of Detz and cannot be reproduced without written permission.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">Detz is not liable for indirect or consequential damages resulting from the use of its products or services. For electrical products and studio services, our liability is limited to the purchase or booking amount.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">We may update these Terms and Conditions periodically. Any changes will be effective immediately upon posting on our website.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">For questions about these terms, please contact us at:</p>
                  <div className="flex items-center text-blue-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <a href="mailto:detz.org@outlook.com" className="hover:underline">detz.org@outlook.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Terms;