import { itemVariants, listVariants, titleVariants } from '@/variants';
import { Container } from '@/components/Container';
import { vasylSymonenkoGallery } from '@/constants';
import { m } from 'framer-motion';

export const GalleryPage = () => {
  return (
    <Container className="flex flex-col gap-6 mx-">
      <m.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center"
      >
        Галерея
      </m.h1>
      <m.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="flex-wrap gap-4 flex justify-center"
      >
        {vasylSymonenkoGallery.map((photo, index) => (
          <m.img
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            src={photo}
            className="flex-shrink-0 bg-stone-200 w-96 h-96 object-fill max-xl:w-64 max-xl:h-64 max-md:w-48 max-md:h-48 max-sm:w-32 max-sm:h-32"
            loading="lazy"
            key={index}
          />
        ))}
      </m.div>
    </Container>
  );
};
