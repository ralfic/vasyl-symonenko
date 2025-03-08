import { Container } from '@/components/Container';
import { m } from 'framer-motion';
import { titleVariants } from '@/variants';
import { WorksList } from '@/components/WorksList';

export const CreativityPage = () => {
  return (
    <Container className="flex flex-col gap-6">
      <m.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center"
      >
        Творчість
      </m.h1>

      <WorksList />
    </Container>
  );
};
