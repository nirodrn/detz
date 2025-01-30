import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Mail, Clock, Package, Camera } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const RefundPolicy = () => {
  return (
    <div>
      <PageHeader
        title="Refund Policy"
        description="Our commitment to customer satisfaction"
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
                <RotateCcw className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-gray-600">Thank you for choosing Detz. We are committed to providing quality software solutions, electrical products, and studio services. If, for any reason, you are not completely satisfied, we are here to help.</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Returns and Refunds</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Package className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Software Products</h3>
                    </div>
                    <p className="text-gray-600">Refunds available within 7 days of purchase, if software is not downloaded or activated. Subscription refunds are prorated.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Electrical Products</h3>
                    </div>
                    <p className="text-gray-600">14-day return window for unused items in original packaging. 6-month warranty for faulty products.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Camera className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Studio Services</h3>
                    </div>
                    <p className="text-gray-600">Cancellations accepted 48 hours before scheduled session. No refunds for completed services.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-4">
                    <p className="text-gray-600">Refunds will be processed within 7 business days after we receive and inspect the returned item or confirm eligibility. Refunds will be credited to the original payment method, excluding any non-refundable charges such as shipping fees.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">For refund-related inquiries, please contact us at:</p>
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

export default RefundPolicy;