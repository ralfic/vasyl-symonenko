import { Container } from '@/components/Container';
import { m } from 'framer-motion';
import { textVariants } from '@/variants';

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
      <div>
        <h2 className="text-2xl font-bold">Використані ресурси:</h2>
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
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://vasylsymonenko.org/foto/"
            >
              https://vasylsymonenko.org/foto/
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://suspilne.media/culture/93717-u-mene-ukraina-odna-86-ta-ricnica-z-narodzenna-vasila-simonenka/"
            >
              https://suspilne.media/culture/93717-u-mene-ukraina-odna-86-ta-ricnica-z-narodzenna-vasila-simonenka/
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Автор</h2>
        <div>
          <p>
            <span className="font-bold">Ім'я:</span> Тахтаров Данило Андрійович
            (17 років)
          </p>
          <p>
            <span className="font-bold">Клас:</span> 11-Б
          </p>
          <p>
            <span className="font-bold">Навяльний заклад:</span> Комунальний
            заклад «Златопільський ліцей №7 Златопільської міської ради
            Харківської області»
          </p>
          <p>
            <span className="font-bold">GitHub: </span>
            <a
              className="underline"
              href="https://github.com/ralfic"
              target="_blank"
            >
              https://github.com/ralfic
            </a>
          </p>
          <p>
            <span className="font-bold">Telegram: </span>
            @dtaas2
          </p>
        </div>
      </div>
    </Container>
  );
};
