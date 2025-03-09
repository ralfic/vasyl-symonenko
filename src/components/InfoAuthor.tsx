import { listVariants, itemVariants } from '@/variants';
import { m } from 'framer-motion';

const leftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const InfoAuthor = () => {
  return (
    <m.div variants={listVariants} initial="hidden" animate="visible">
      <m.h2 variants={itemVariants} className="text-2xl font-bold">
        Автор
      </m.h2>
      <div>
        <m.p variants={leftVariants}>
          <span className="font-bold ">Ім'я:</span>{' '}
          <span className="dark:text-white/80">
            Тахтаров Данило Андрійович (17 років)
          </span>
        </m.p>
        <m.p variants={rightVariants}>
          <span className="font-bold">Клас:</span>{' '}
          <span className="dark:text-white/80">11-Б </span>
        </m.p>
        <m.p variants={leftVariants}>
          <span className="font-bold">Навчальний заклад:</span>{' '}
          <a
            className="underline dark:text-white/80 dark:hover:text-(--tw-color-dark-accent)  transition-colors"
            href="https://lyceumseven.wixsite.com/my-site"
            target="_blank"
          >
            Комунальний заклад «Златопільський ліцей №7 Златопільської міської
            ради Харківської області»
          </a>
        </m.p>
        <m.p variants={rightVariants}>
          <span className="font-bold">GitHub: </span>
          <a
            className="underline dark:text-white/80 dark:hover:text-(--tw-color-dark-accent)  transition-colors"
            href="https://github.com/ralfic"
            target="_blank"
          >
            https://github.com/ralfic
          </a>
        </m.p>
        <m.p variants={leftVariants}>
          <span className="font-bold">Telegram: </span>{' '}
          <span className="dark:text-white/80">@dtaas2</span>
        </m.p>
        <m.p variants={rightVariants}>
          <span className="font-bold">Stek: </span>{' '}
          <span className="dark:text-white/80">
            React, TypeScript, Framer Motion, Vite, ShadCn, Tailwind, React
            Router
          </span>
        </m.p>
      </div>
    </m.div>
  );
};
