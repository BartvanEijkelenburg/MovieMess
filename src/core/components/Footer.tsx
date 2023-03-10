import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={'bg-black'}>
      <div className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={'text-lg font-medium text-white'}>About</h3>
            <p className={'mt-2 text-gray-400'}>
              MovieMess is a movie / serie streaming website. We provide the best quality movies and
              series for free. We also provide a wide range of movies and series for you to choose
              from. We are the best streaming website in the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className={'text-lg font-medium text-white'}>Contact</h3>
            <ul className={'mt-2 space-y-2'}>
              <li>
                <Link href={'#'} className={'text-gray-400 hover:text-white'}>
                  Email
                </Link>
              </li>
              <li>
                <Link href={'#'} className={'text-gray-400 hover:text-white'}>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href={'#'} className={'text-gray-400 hover:text-white'}>
                  Discord
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className={'text-lg font-medium text-white'}>Newsletter</h3>
            <p className={'mt-2 text-gray-400'}>
              Sign up for our newsletter to get the latest updates and news about MovieMess
            </p>
            <form className={'mt-4'}>
              <div className={'flex items-center'}>
                <input
                  type={'email'}
                  className={
                    'bg-black flex-1 block w-full text-white border-white border-b py-2 px-3 focus:outline-none focus:border-b-pink-500 focus:shadow-outline-white'
                  }
                  placeholder={'Enter your email'}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={
                    'ml-4 transition-colors inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md font-bold text-white bg-secondary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800'
                  }
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        <div
          className={
            'mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'
          }
        >
          <div className={'flex items-center'}>
            <p className={'text-white'}>LOGO</p>
            <p className={'ml-4 text-gray-400'}>© 2023 MovieMess. All rights reserved.</p>
          </div>
          <div className={'mt-4 flex space-x-6 md:mt-0'}>
            <Link href={'#'} className={'text-gray-400 hover:text-white'}>
              Terms of Service
            </Link>
            <Link href={'#'} className={'text-gray-400 hover:text-white'}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
