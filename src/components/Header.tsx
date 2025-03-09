import { Container } from './Container';
import { MenuNav } from './MenuNav';
import { Logo } from './Logo';
import { useTransform, useViewportScroll, m } from 'framer-motion';
import { BurgerMenu } from './BurgerMenu';
import { ButtonThem } from './ButtonThem';

export const Header = () => {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(93,138,168, 0)', 'rgba(93,138,168, 1)']
  );
  const height = useTransform(scrollY, [0, 100], [60, 80]);

  return (
    <m.header
      style={{ background, height }}
      className="py-6  font-(--tw-font-caveat) fixed top-0 left-0 right-0 z-50"
    >
      <Container className="flex justify-between items-center">
        <Logo size="md" />
        <div className="max-md:hidden">
          <MenuNav />
        </div>
        <div className="flex gap-4 items-center">
          <ButtonThem />
          <div className="hidden max-md:block">
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </m.header>
  );
};
