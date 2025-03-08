import { m } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: [0.8, 1] },
  visible: { opacity: 1, scale: [1, 0.8], transition: { duration: 0.5 } },
};

export const HeroImg = () => {
  return (
    <m.img
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      className="w-96 h-96 flex-shrink-0  rounded-full bg-stone-200 "
      src="/portret2.jpg"
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
        duration: 0.5,
      }}
      loading="lazy"
    />
  );
};
