import React from 'react';
import { motion } from 'framer-motion';
import { Check, Film, Camera, Heart } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Essential',
      price: 2499,
      description: 'Perfect for intimate weddings',
      features: [
        '6-hour coverage',
        '5-7 minute highlight film',
        'Digital delivery',
        'Licensed music',
        '2 videographers',
        'Raw footage included',
      ],
      icon: Film,
    },
    {
      name: 'Premium',
      price: 3999,
      description: 'Our most popular package',
      features: [
        '10-hour coverage',
        '8-10 minute highlight film',
        'Drone footage',
        'Same-day edit',
        '3 videographers',
        'Raw footage included',
        'Instagram teaser',
        'Custom music licensing',
      ],
      icon: Camera,
      popular: true,
    },
    {
      name: 'Luxury',
      price: 5999,
      description: 'The ultimate wedding experience',
      features: [
        'Full-day coverage',
        '12-15 minute highlight film',
        'Drone footage',
        'Same-day edit',
        '4 videographers',
        'Raw footage included',
        'Instagram teaser',
        'Custom music licensing',
        'Love story film',
        'Rehearsal dinner coverage',
      ],
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-4">
            Investment in Memories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package to capture your special day. All packages include
            professional editing and high-quality equipment.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-rose-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-rose-500 text-white px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <plan.icon className="h-12 w-12 text-rose-500 mb-6" />
                <h2 className="text-2xl font-serif text-gray-900 mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="ml-2 text-gray-600">/package</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-rose-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg text-center font-medium transition-colors ${
                    plan.popular
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose {plan.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                What is included in the raw footage?
              </h3>
              <p className="text-gray-600">
                Raw footage includes all unedited video files from your wedding day, delivered
                via digital download or hard drive. This allows you to keep every moment we
                captured.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                How long until we receive our video?
              </h3>
              <p className="text-gray-600">
                Highlight films are typically delivered within 8-12 weeks after your wedding.
                Same-day edits are shown during your reception, and Instagram teasers are
                delivered within one week.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Can we choose our own music?
              </h3>
              <p className="text-gray-600">
                Yes! We work with you to select licensed music that matches your style and
                the mood of your film. Custom music licensing is included in our Premium and
                Luxury packages.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Do you travel for weddings?
              </h3>
              <p className="text-gray-600">
                Yes, we love destination weddings! Travel fees vary depending on location.
                Contact us for a custom quote including travel expenses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;