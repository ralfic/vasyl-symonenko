import { useNavigate } from 'react-router';
import { Container } from '../../components/Container';
import { MButton } from '@/components/ui/button';
import { m } from 'framer-motion';
import { HeroImg } from '@/components/HeroImg';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const graduallyVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <m.div
        variants={graduallyVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-8  max-lg:gap-4 items-center max-lg:flex-col-reverse"
      >
        <section>
          <div className="mx-auto flex flex-col max-w-[800px] justify-center items-center gap-2 mb-8">
            <m.h1 variants={textVariants} className="text-5xl text-center font-semibold">
              «У мене Україна одна»
            </m.h1>
            <m.p variants={textVariants} className="italic">
              Сайт присвячений 90-річчю з дня народження Василя Симоненка —
              поета, журналіста, борця за свободу України.
            </m.p>
          </div>
          <m.div
            variants={graduallyVariants}
            className="self-center bg-(--tw-color-card) rounded-lg shadow-md p-4"
          >
            <div className="flex flex-col gap-3 mb-6">
              <m.p variants={textVariants}>
                <b>Василь Симоненко</b> — це не просто поет, це символ
                українського духу, який надихає мільйони. Його слова, написані
                десятиліття тому, звучать сьогодні так само гостро й актуально.
                Вони нагадують нам про те, що Україна — це не просто територія
                на карті, це мільйони сердець, які б’ються в унисон.
              </m.p>
              <m.p variants={textVariants}>
                <b>Цей сайт</b> — це не лише згадка про великого поета, а й
                нагода згадати, що кожен із нас є частинкою України. І саме від
                нас залежить, якою вона буде завтра.
              </m.p>
            </div>

            <m.p
              variants={textVariants}
              className="italic font-semibold text-center  "
            >
              « У мене Україна одна. І в серці, і в пісні одна. І в долі, і в
              радості одна. І в житті, і в смерті одна ».
            </m.p>
          </m.div>
        </section>
        <HeroImg />
      </m.div>
      <MButton
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        size={'lg'}
        onClick={() => navigate('/biography')}
        className="mt-4"
      >
        Дізнатися більше
      </MButton>
    </Container>
  );
};
