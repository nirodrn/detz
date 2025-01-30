import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="How we handle and protect your data"
        backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
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
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Data</h3>
                    <p className="text-gray-600">Name, email address, phone number, and billing information provided during purchases or service requests.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Data</h3>
                    <p className="text-gray-600">Device information, IP address, and usage data collected through cookies and analytics tools.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To process and fulfill your orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To personalize your experience with Detz services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To communicate service updates, offers, and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To enhance our products and services based on user feedback</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">We do not sell your data. Information is shared only with trusted third-party providers necessary for payment processing, shipping, or analytics. Data sharing complies with applicable laws and is subject to confidentiality agreements.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">You can request access, correction, or deletion of your personal information at any time by contacting us.</p>
                  <div className="flex items-center text-blue-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <a href="mailto:detz.org@outlook.com" className="hover:underline">detz.org@outlook.com</a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">Cookies are used to enhance your browsing experience. You can disable cookies through your browser settings, but this may limit some functionality of our website.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicy;