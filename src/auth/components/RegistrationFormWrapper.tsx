import { motion } from 'framer-motion';
import { RegistrationForm } from './RegistrationForm';
import React from 'react';

export const RegistrationFormWrapper = () => {
  return (
    <div className={'min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8'}>
      <div className={'max-w-md w-full'}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={
            'bg-black border-4 border-pink-500 shadow-2xl shadow-pink-500/50 rounded-lg shadow-lg p-8'
          }
        >
          <h1 className={'text-3xl font-extrabold tracking-tight mb-4 text-white'}>Register Now</h1>
          <RegistrationForm />
        </motion.div>
      </div>
    </div>
  );
};
