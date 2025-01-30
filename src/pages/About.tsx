import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Target, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our actions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace change and strive for innovation in everything we do."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as a team to achieve common goals."
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "We put our clients first, understanding their needs and exceeding their expectations."
    }
  ];

  return (
    <div>
      <PageHeader
        title="About DETZ"
        description="Crafting Tomorrow's Vision Today"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DETZ, our mission is to empower mid and small-level businesses by seamlessly integrating modern technology into their operations. We strive to provide high-class services that not only meet but exceed our clients' expectations, turning their business visions into reality. With a focus on innovation and quality, we aim to elevate every business we partner with, helping them thrive in a competitive landscape.
            </p>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="px-8 py-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-lg leading-relaxed text-white/90">
                  Our team consists of skilled professionals with diverse backgrounds in technology, design, and business. Together, we bring a wealth of knowledge and expertise to deliver outstanding results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;