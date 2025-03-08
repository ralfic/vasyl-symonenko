import { Container } from './Container';
import { MenuNav } from './MenuNav';
import { Logo } from './Logo';
import { useTransform, useViewportScroll, m } from 'framer-motion';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(173, 216, 230, 0)', 'rgba(173, 216, 230, 1)']
  );
  const height = useTransform(scrollY, [0, 100], [60, 80]);

  return (
    <m.header
      style={{ background, height }}
      className="py-4  font-(--tw-font-caveat) fixed top-0 left-0 right-0 z-50"
    >
      <Container className="flex justify-between items-center">
        <Logo size="md" />
        <div className="max-md:hidden">
          <MenuNav />
        </div>
        <div className='hidden max-md:block'>
          <BurgerMenu />
        </div>
      </Container>
    </m.header>
  );
};
