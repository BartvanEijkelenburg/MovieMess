import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@blitzjs/rpc';
import logout from '../../auth/mutations/logout';
import { useSession } from '@blitzjs/auth';

const ProfileAvatar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { email } = useSession({ suspense: false });
  const [logoutMutation] = useMutation(logout);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
  };

  return (
    <div className={'flex items-center relative'}>
      <motion.button
        className={'text-white focus:outline-none'}
        onClick={toggleMenu}
        animate={isOpen ? 'hover' : 'none'}
        variants={avatarVariants}
        whileHover={'hover'}
      >
        <FontAwesomeIcon className={'w-6 h-6'} icon={faUser} />
      </motion.button>
      <AnimatePresence mode={'popLayout'}>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            className={
              'absolute top-10 right-0 w-56 bg-black divide-y divide-white rounded-md shadow-lg'
            }
          >
            <ul className={'flex flex-col items-center w-full p-4'}>
              <li className={'w-full flex justify-center my-4'}>Hi {email}</li>
              <li className={'w-full flex justify-center my-4'}>
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
    </div>
  );
};

export default ProfileAvatar;
