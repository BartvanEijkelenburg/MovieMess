import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProfileAvatar from './ProfileAvatar';
import { useRouter } from 'next/router';

const navItems: { text: string; url: string }[] = [
  { text: 'Movies', url: '/' },
  { text: 'Series', url: '/series' },
  { text: 'TV Shows', url: '/tv' },
  { text: 'My List', url: '/my-list' },
];
export const AppNavbar = () => {
  const router = useRouter();
  return (
    <nav className={'w-full p-4 h-32 text-white h-16'}>
      <div
        className={
          'w-full mx-auto flex items-center bg-gray-800 h-full rounded-lg p-4 justify-evenly'
        }
      >
        <div className={'flex justify-evenly w-1/3'}>
          {navItems.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className={`mt-auto mb-auto text-gray-500 ${
                router.pathname === item.url ? 'text-white' : ''
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div
          className={'px-4 py-2 bg-black flex justify-between rounded-2xl w-full h-full max-w-md '}
        >
          <motion.input
            type={'text'}
            placeholder={'Search...'}
            className={
              'bg-transparent focus:outline-none w-full h-full caret-pink-500 text-xl focus:border-b focus:border-pink-500 mr-4'
            }
          />
          <button
            className={
              'bg-gray-700 text-white rounded-lg p-2 hover:bg-gray-800 w-1/3 active:bg-gray-700 uppercase transition-colors duration-200 ease-in-out'
            }
          >
            Search
          </button>
        </div>
        <div className={''}>
          <ProfileAvatar />
        </div>
      </div>
    </nav>
  );
};
