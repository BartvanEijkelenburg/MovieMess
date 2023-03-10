import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollBarComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={'w-screen h-1 fixed top-0 bg-pink-500 z-50'}
      style={{
        scaleX: scaleX,
        transformOrigin: 'left',
      }}
    />
  );
};
