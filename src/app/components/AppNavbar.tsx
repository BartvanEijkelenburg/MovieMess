import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ProfileAvatarButton } from './ProfileAvatarButton';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navItems: { text: string; url: string }[] = [
  { text: 'Movies', url: '/app' },
  { text: 'Series', url: '#' },
  { text: 'TV Shows', url: '#' },
  { text: 'My List', url: '#' },
];

export const AppNavbar = () => {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className={'flex w-screen items-center justify-center'}>
      <AnimatePresence>
        <motion.nav layout className={'w-full max-w-6xl p-2 h-24 text-white h-16'}>
          <div
            className={
              'w-full mx-auto flex items-center bg-gray-800 h-full rounded-lg p-4 justify-between'
            }
          >
            <div className={'flex justify-evenly w-1/3'}>
              {/* Desktop Navigation */}
              <div className={'hidden md:flex'}>
                {navItems.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className={`px-4 py-2 rounded-lg mt-auto mb-auto text-gray-500 hover:text-white hover:bg-gray-500 active:bg-gray-600 transition-colors duration-200 ease-in-out
                    ${router.pathname === item.url ? 'text-white' : ''}`}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
              {/* Mobile Navigation */}
              <div className={'md:hidden'}>
                <button
                  className={
                    'p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none h-8 w-8 flex items-center justify-center'
                  }
                  onClick={toggleMobileNav}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                {isMobileNavOpen && (
                  <div className={'fixed top-0 left-0 w-screen h-screen bg-gray-900 z-50'}>
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ duration: 0.4 }}
                      className={'flex flex-col justify-center h-full text-center'}
                    >
                      {navItems.map((item, index) => (
                        <Link
                          href={item.url}
                          key={index}
                          className={`px-4 py-2 rounded-lg text-gray-500 hover:text-white hover:bg-gray-500 active:bg-gray-600 transition-colors duration-200 ease-in-out
                        ${router.pathname === item.url ? 'text-white' : ''}`}
                          onClick={toggleMobileNav}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
            <div
              className={
                'px-2 py-1 bg-black flex justify-between rounded-lg w-full h-full max-w-sm lg:max-w-lg'
              }
            >
              <motion.input
                type={'text'}
                placeholder={'Search...'}
                className={
                  'bg-transparent focus:outline-none w-full h-full caret-pink-500 focus:border-b focus:border-pink-500 mr-4'
                }
              />
              <button
                className={
                  'bg-gray-700 text-white rounded-lg px-2 hover:bg-gray-800 w-1/3 active:bg-gray-700 uppercase transition-colors duration-200 ease-in-out'
                }
              >
                Search
              </button>
            </div>
            <div>
              <ProfileAvatarButton />
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};
