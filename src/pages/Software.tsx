import React from 'react';
import { Globe, ShoppingCart, Smartphone, Database, Layout, Settings } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ServiceFeature from '../components/ServiceFeature';

const Software = () => {
  const features = [
    {
      Icon: Globe,
      title: "Business Websites",
      description: "Professional websites to enhance your business presence.",
    },
    {
      Icon: Database,
      title: "Management Software",
      description: "Efficient solutions to manage your operations smoothly.",
    },
    {
      Icon: Layout,
      title: "Personal Websites",
      description: "Customizable websites to showcase your personal brand.",
    },
    {
      Icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Robust platforms to sell your products online.",
    },
    {
      Icon: Smartphone,
      title: "Mobile Applications",
      description: "Engaging apps for your customers on-the-go.",
    },
    {
      Icon: Settings,
      title: "Custom Solutions",
      description: "Tailored solutions to meet your unique needs.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="DETZ Software"
        description="Innovative software solutions for growth and efficiency"
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Flexible Payment Options</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">
                The entire amount can be paid in interest-free installments within a specified time frame.
                Small and medium businesses can pay a down-payment of 17 USD (approximately 5000 LKR) or
                more and pay the rest in installments.
              </p>
              <p>
                Maintenance of your existing websites can be obtained on a monthly or yearly basis for a
                very reasonable amount. Websites developed by us come with a one-year warranty and free
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;