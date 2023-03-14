import Layout from 'src/core/layouts/Layout';
import { BlitzPage } from '@blitzjs/next';
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../core/components/Navbar';
import { ScrollBarComponent } from '../core/components/ScrollBarComponent';
import { Footer } from '../core/components/Footer';
import { PricingPlans } from '../core/components/Features';
import { Divider } from '../core/components/Divider';
import Link from 'next/link';

const HomePageHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', delay: 0.2, duration: 1.5 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', delay: 0.8, stiffness: 200 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', delay: 1.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', delay: 1.6, stiffness: 200 },
    },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial={'hidden'}
      animate={'visible'}
      className={'relative h-screen flex flex-col justify-center items-center text-center p-4'}
    >
      <div className={'absolute inset-0 opacity-100 bg-black z-0'} />
      <motion.video
        animate={{ opacity: 0.5 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.2 }}
        autoPlay={true}
        loop={true}
        muted={true}
        src={
          'https://eastusver2.blob.core.windows.net/cutyt/output/yt-dlp/8120762165/Space_Travel_-_1_HOUR_60_FPS_4K_Royality_Free_Free_Download_No_Credits_Needed_from0s_to60.848508s.webm?sv=2021-10-04&st=2022-01-20T20%3A38%3A00Z&se=3022-01-21T20%3A38%3A00Z&sr=c&sp=racwdxltf&sig=ceMQ%2Fs%2FLZ5Bcs00Juy96zHlqMb%2FeNdOS9xwlrR9H%2FhU%3D'
        }
        className={'absolute inset-0 object-cover w-full h-full z-0'}
      />
      <motion.h1 variants={titleVariants} className={'text-4xl font-bold text-white mb-8 z-10'}>
        Welcome to <motion.span className={'text-blue-500'}>MovieMess</motion.span>
      </motion.h1>
      <motion.p variants={subtitleVariants} className={'text-lg text-white mb-12 z-10'}>
        Watch your favorite movies and TV shows anytime, anywhere.
      </motion.p>
      <Link href={'/register'} className={'z-10'}>
        <motion.p
          variants={buttonVariants}
          className={
            'uppercase border border-blue-500 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-md shadow-lg shadow-blue-500/50 transition-colors duration-300 ease-in-out z-10'
          }
          whileHover={'hover'}
          whileTap={'tap'}
        >
          Try it for free!
        </motion.p>
      </Link>
    </motion.div>
  );
};

const Home: BlitzPage = () => {
  return (
    <Layout title={'Home'}>
      <ScrollBarComponent />
      <Navbar />
      <HomePageHeroSection />
      <Divider text={'Pricing plans'} />
      <PricingPlans />
      <Footer />
    </Layout>
  );
};

export default Home;
