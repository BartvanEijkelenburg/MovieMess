import { motion } from 'framer-motion';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const plans = [
  {
    title: 'Basic',
    price: 8.99,
    features: ['SD quality', 'One screen', 'No download'],
  },
  {
    title: 'Standard',
    price: 13.99,
    features: ['HD quality', 'Two screens', 'Downloads'],
    bestChoice: true, // Add a flag to indicate it's the best choice
  },
  {
    title: 'Premium',
    price: 17.99,
    features: ['Full HD quality', 'Four screens', 'Downloads'],
  },
];

const PricingPlans = () => {
  return (
    <div className={'bg-black'}>
      <div className={'py-20'}>
        <h2 className={'text-3xl font-bold text-white text-center mb-20'}>
          Choose the perfect plan for you
        </h2>
        <div className={'relative max-w-7xl mx-auto flex flex-wrap justify-center gap-8'}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`w-4/5 my-6 md:my-4 relative md:w-1/4 max-w-96 rounded-md p-8 border-4 ${
                plan.bestChoice
                  ? 'border-pink-500 shadow-2xl shadow-pink-500/50'
                  : 'border-blue-500 shadow-2xl shadow-blue-500/50'
              }`}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              initial={{ opacity: 0, y: 50, scale: plan.bestChoice ? 1.1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {plan.bestChoice && (
                <div
                  className={
                    'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border-2 w-2/3 text-center border-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform shadow-md shadow-pink-500/50'
                  }
                >
                  MOST POPULAR
                </div>
              )}
              <div className={'mb-8 text-xl font-bold text-center text-white neon-text'}>
                {plan.title}
              </div>
              <div className={'mb-12 text-3xl font-bold text-center text-white neon-text'}>
                ${plan.price}
                <span className={'text-lg font-medium text-gray-400'}> /month</span>
              </div>
              <ul className={'mb-8 list-disc list-inside'}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={'mb-2 text-gray-400 neon-text flex items-center'}>
                    <FontAwesomeIcon icon={faCheck} className={'mr-2 text-green-400'} />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`text-center uppercase ${
                  plan.bestChoice
                    ? 'border border-blue-500 hover:bg-blue-500 shadow-blue-500/50'
                    : 'border border-pink-500 hover:bg-pink-500 shadow-pink-500/50'
                } text-white font-bold px-8 py-3 rounded-md shadow-lg transition-colors duration-200 ease-in-out py-3 px-6 rounded-full block mx-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Select Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
