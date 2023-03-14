import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchProfile: (profileId: number) => void;
  profileIcons: { id: number; name: string; icon?: IconDefinition }[];
};

export const SwitchProfileModal: FC<Props> = ({
  isOpen,
  onClose,
  onSwitchProfile,
  profileIcons,
}) => {
  const activeProfile = 1;
  const modalVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: 'ease-in', duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { type: 'ease-out', duration: 0.2 },
    },
  };
  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial={'initial'}
          animate={'visible'}
          exit={'exit'}
          className={'fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'}
        >
          <div
            className={'absolute w-full h-full bg-black opacity-80'}
            onClick={handleOverlayClick}
          />
          <motion.div
            className={'bg-gray-900 rounded-md p-8 z-50  max-w-6xl w-2/3'}
            onClick={handleModalClick}
          >
            <div className={'flex justify-between items-center mb-4 w-full'}>
              <h2 className={'text-lg md:text-2xl font-bold'}>Switch Profile</h2>
            </div>
            <div>
              <p className={'mb-8'}>Select a profile to switch to:</p>
              <div className={'flex flex-col md:flex-row justify md:justify-evenly mt-4'}>
                {profileIcons.map((profile) => (
                  <motion.div key={profile.id} className={'flex flex-col items-center'}>
                    <motion.div
                      key={profile.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`rounded-lg bg-black w-24 h-24 flex justify-center place-items-center mb-4 cursor-pointer bg-transparent border
                      hover:bg-gray-700 active:bg-gray-800 transition-colors duration-200 ease-in-out select-none
                       ${activeProfile === profile.id ? 'border-white' : 'border-gray-700'}`}
                      onClick={() => onSwitchProfile(profile.id)}
                    >
                      <FontAwesomeIcon
                        className={'w-6 h-6 text-white'}
                        icon={profile.icon ?? faUser}
                      />
                    </motion.div>
                    <p className={'text-center'}>{profile.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
