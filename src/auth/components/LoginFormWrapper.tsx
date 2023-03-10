import { motion } from 'framer-motion';
import React from 'react';
import { LoginForm } from './LoginForm';

export const LoginFormWrapper = () => {
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
          <h1 className={'text-3xl font-extrabold tracking-tight mb-4 text-white'}>Login!</h1>
          <LoginForm />
        </motion.div>
      </div>
    </div>
  );
};
