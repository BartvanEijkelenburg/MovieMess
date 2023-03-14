import React, { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPersonWalkingWithCane, faUser } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@blitzjs/rpc';
import logout from '../../auth/mutations/logout';
import { useSession } from '@blitzjs/auth';
import { SwitchProfileModal } from './SwitchProfileModal';

export const ProfileAvatarButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitchProfileModalOpen, setIsSwitchProfileModalOpen] = useState(false);

  const { email } = useSession({ suspense: false });
  const [logoutMutation] = useMutation(logout);
  const toggleMenu = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.querySelector('.menu') as HTMLElement;
      if (menu && !menu.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: 'ease-in', duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { type: 'ease-out', duration: 0.2 },
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

  const avatarVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div className={'flex items-center relative'}>
      <motion.button
        className={
          'text-white focus:outline-none hover:bg-gray-500 active:bg-gray-600 p-2 w-10 h-10 w-full rounded-full'
        }
        onClick={toggleMenu}
        animate={isOpen ? 'hover' : 'none'}
        variants={avatarVariants}
        whileHover={'hover'}
        whileTap={'tap'}
      >
        <FontAwesomeIcon className={'w-4 h-4'} icon={faUser} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            className={
              'menu absolute top-10 right-0 w-56 bg-black divide-y divide-white rounded-md shadow-lg z-10'
            }
          >
            <ul className={'flex flex-col items-center w-full p-4'}>
              <li className={'w-full flex justify-center my-2'}>Hi {email}</li>
              <li className={'w-full flex justify-center my-2'}>
                <motion.button
                  onClick={() => setIsSwitchProfileModalOpen(true)}
                  variants={linkVariants}
                  className={
                    'text-white text-lg py-2 cursor-pointer bg-gray-800 w-full rounded-lg text-center'
                  }
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  <FontAwesomeIcon icon={faPerson} className={'mr-4'} />
                  Switch profile
                </motion.button>
              </li>
              <li className={'w-full flex justify-center my-2'}>
                <motion.button
                  onClick={async () => await logoutMutation()}
                  variants={linkVariants}
                  className={
                    'text-white text-lg py-2 cursor-pointer bg-gray-800 w-full rounded-lg text-center'
                  }
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  Logout
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <SwitchProfileModal
        isOpen={isSwitchProfileModalOpen}
        onClose={() => setIsSwitchProfileModalOpen(false)}
        onSwitchProfile={(profileId) => {
          console.log(profileId);
          setIsSwitchProfileModalOpen(false);
        }}
        profileIcons={[
          {
            id: 1,
            name: 'John',
            icon: faUser,
          },
          {
            id: 2,
            name: 'Sarah',
            icon: faPerson,
          },
          {
            id: 3,
            name: 'David',
            icon: faPersonWalkingWithCane,
          },
        ]}
      />
    </div>
  );
};
