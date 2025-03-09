import { Container } from '@/components/Container';
import { m } from 'framer-motion';
import { textVariants } from '@/variants';
import { InfoResources } from '@/components/InfoResources';
import { InfoAuthor } from '@/components/InfoAuthor';

export const InfoPage = () => {
  return (
    <Container className="flex flex-col gap-6">
      <m.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl text-center font-semibold"
      >
        Інформація
      </m.h1>
      <InfoResources />
      <InfoAuthor />
    </Container>
  );
};
