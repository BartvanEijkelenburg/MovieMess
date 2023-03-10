import { BlitzPage } from '@blitzjs/next';
import Layout from '../../core/layouts/Layout';
import { AppNavbar } from '../../core/components/AppNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { motion } from 'framer-motion';

const AppPage: BlitzPage = () => {
  const activeId = 2;
  const profiles = [
    {
      id: 1,
      initials: 'JH',
    },
    {
      id: 2,
      initials: 'JH',
    },
    {
      id: 3,
      initials: 'JH',
    },
  ];
  return (
    <Layout title={'Stream Now!'}>
      <div className={'flex w-screen'}>
        <div className={'w-28 h-screen py-4 pl-4'}>
          <div className={'h-full flex-col flex p-4 space-y-8 bg-gray-800 rounded-lg'}>
            {profiles.map((profile) => {
              return (
                <motion.div
                  key={profile.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full bg-black w-16 h-16 flex justify-center place-items-center bg-blue-500 cursor-pointer ${
                    activeId === profile.id ? 'border border-white' : 'border border-transparent'
                  }}`}
                >
                  <FontAwesomeIcon className={'w-4 h-4 text-white'} icon={faUser} />
                </motion.div>
              );
            })}
          </div>
        </div>
        <AppNavbar />
      </div>
    </Layout>
  );
};

AppPage.authenticate = true;

export default AppPage;
