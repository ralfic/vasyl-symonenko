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
        <div className="bg-(--tw-color-card) rounded-lg shadow-md p-4">
          <p>
            <b>{biographyData.title}</b> — {biographyData.description}
          </p>
        </div>
      </ScrollReveal>

      <BiographyContent />

      <div>
        <p>Використані ресурси:</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87"
            >
              https://uk.wikipedia.org/wiki/Симоненко_Василь_Андрійович
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://dovidka.biz.ua/vasil-simonenko-biografiya-korotko/"
            >
              https://dovidka.biz.ua/vasil-simonenko-biografiya-korotko/
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://uinp.gov.ua/istorychnyy-kalendar/sichen/8/1935-narodyvsya-poet-vasyl-symonenko"
            >
              https://uinp.gov.ua/istorychnyy-kalendar/sichen/8/1935-narodyvsya-poet-vasyl-symonenko
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
