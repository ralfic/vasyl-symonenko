import { BiographyContent } from '@/components/BiographyContent';
import { Container } from '@/components/Container';
import { ScrollReveal } from '@/components/ScrollReveal';
import { biographyData } from '@/constants';
import { titleVariants } from '@/variants';
import { m } from 'framer-motion';

export const BiographyPage = () => {
  return (
    <Container className="flex flex-col gap-6">
      <m.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center"
      >
        {biographyData.title}
      </m.h1>

      <ScrollReveal>
        <div className="bg-(--tw-color-card) dark:shadow-[rgba(0,_0,_0,_0.5)] dark:bg-(--tw-color-dark-secondary-background) rounded-lg shadow-md p-4">
          <p>
            <b>{biographyData.title}</b> —{' '}
            <span className="dark:text-white/80">
              {biographyData.description}
            </span>
          </p>
        </div>
      </ScrollReveal>

      <BiographyContent />
    </Container>
  );
};
