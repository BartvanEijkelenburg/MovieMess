import { motion } from 'framer-motion';
import React from 'react';

export const Divider: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={'bg-black my-20'}>
      <div
        className={
          'max-w-6xl mx-auto relative flex flex-col sm:flex-row justify-center items-center'
        }
      >
        <motion.div
          className={'w-full h-1 bg-white mb-4 sm:mb-0 sm:mr-1'}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <div className={'w-full'}>
          <h2 className={'text-4xl font-bold text-white text-center'}>{text}</h2>
        </div>
        <motion.div
          className={'w-full h-1 bg-white mt-4 sm:mt-0 sm:ml-1'}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};
