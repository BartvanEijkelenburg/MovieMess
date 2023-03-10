import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faContactBook,
  faDollar,
  faHome,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';
import { useSession } from '@blitzjs/auth';

export const Navbar = () => {
  const router = useRouter();
  const session = useSession({ suspense: false });
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { text: string; icon: IconDefinition; url: string }[] = [
    { text: 'Home', icon: faHome, url: '/' },
    { text: 'Pricing', icon: faDollar, url: '#pricing' },
    { text: 'Contact', icon: faContactBook, url: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'ease-in' },
    },
    exit: {
      opacity: 0,
      x: 500,
    },
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: 'tween', duration: 0.5 },
    },
    tap: { scale: 0.9 },
    hover: { scale: 1.1 },
  };
  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { scale: 1.2 },
  };

  return (
    <nav className={'bg-black text-white h-16 fixed top-0 w-full z-20'}>
      <div className={'max-w-6xl mx-auto px-4 flex justify-between items-center h-full'}>
        <div className={'w-80'}>
          <Link href={'/'}>
            <h1
              className={'text-xl font-bold text-pink-500 text-5xl'}
              style={{
                fontFamily: 'HelveticaNeue-CondensedBlack',
              }}
            >
              M
            </h1>
          </Link>
        </div>

        <div className={'hidden md:flex items-center space-x-8'}>
          {navItems.map((navItem, index) => {
            return (
              <Link
                className={`group transition-colors duration-200 ease-in-out ${
                  router.pathname === navItem.url ? 'text-blue-500' : ''
                }`}
                key={index}
                href={navItem.url}
              >
                <motion.p
                  variants={linkVariants}
                  className={
                    'bg-left-bottom bg-gradient-to-r from-blue-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out'
                  }
                >
                  {navItem.text}
                </motion.p>
              </Link>
            );
          })}
        </div>
        <div className={'hidden md:flex items-center space-x-4 w-80 justify-end'}>
          {session ? (
            <>
              <Link href={'/login'}>
                <motion.button
                  variants={linkVariants}
                  className={
                    'uppercase w-full border border-pink-500 hover:bg-pink-500 text-white font-bold px-8 py-2 rounded-md shadow-lg shadow-pink-500/50 transition-colors duration-200 ease-in-out z-10'
                  }
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  Log In
                </motion.button>
              </Link>
              <Link href={'/register'}>
                <motion.button
                  variants={linkVariants}
                  className={
                    'uppercase text-center w-full border border-blue-500 bg-blue-500 text-white font-bold px-8 py-2 rounded-md shadow-lg shadow-blue-500/50 transition-colors duration-200 ease-in-out z-10'
                  }
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  Register
                </motion.button>
              </Link>
            </>
          ) : (
            <Link href={'/app'}>
              <motion.button
                variants={linkVariants}
                className={
                  'uppercase text-center w-full border border-blue-500 bg-blue-500 text-white font-bold px-8 py-2 rounded-md shadow-lg shadow-blue-500/50 transition-colors duration-200 ease-in-out z-10'
                }
                whileHover={'hover'}
                whileTap={'tap'}
              >
                App
              </motion.button>
            </Link>
          )}
        </div>
        {/* Hamburger Menu Icon */}
        <div className={'ml-auto md:hidden'}>
          <motion.button
            className={'text-3xl text-white focus:outline-none'}
            onClick={toggleMenu}
            animate={isOpen ? 'open' : 'closed'}
            variants={hamburgerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon className={'w-8'} icon={isOpen ? faTimes : faBars} />
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          variants={menuVariants}
          initial={'hidden'}
          animate={isOpen ? 'visible' : 'hidden'}
          exit={'exit'}
          className={
            'flex justify-center w-64 h-screen float-right bg-black md:hidden divide-y divide-white'
          }
        >
          <ul className={'flex flex-col space-y-8 w-full p-4'}>
            {navItems.map((navItem, index) => {
              return (
                <Link key={index} href={navItem.url}>
                  <motion.li
                    className={
                      'p-3 rounded-md cursor-pointer hover:bg-blue-200/50 active:bg-blue-300/50 transition-colors duration-200 text-2xl flex items-center space-x-6 '
                    }
                    whileTap={'tap'}
                    whileHover={'hover'}
                    variants={linkVariants}
                  >
                    <FontAwesomeIcon className={'w-6'} icon={navItem.icon} />
                    <p>{navItem.text}</p>
                  </motion.li>
                </Link>
              );
            })}
            <Link href={'#'}>
              <motion.li
                variants={linkVariants}
                className={
                  'text-center uppercase w-full border border-pink-500 hover:bg-pink-500 text-white font-bold px-8 py-3 rounded-md shadow-lg shadow-pink-500/50 transition-colors duration-200 ease-in-out z-10'
                }
                whileHover={'hover'}
                whileTap={'tap'}
              >
                Login
              </motion.li>
            </Link>
            <Link href={'#'}>
              <motion.li
                variants={linkVariants}
                className={
                  'uppercase text-center w-full border border-blue-500 bg-blue-500 text-white font-bold px-8 py-3 rounded-md shadow-lg shadow-blue-500/50 transition-colors duration-200 ease-in-out z-10'
                }
                whileHover={'hover'}
                whileTap={'tap'}
              >
                Sign Up
              </motion.li>
            </Link>
          </ul>
        </motion.div>
      ) : null}
    </nav>
  );
};
