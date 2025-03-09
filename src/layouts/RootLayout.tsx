import { Outlet, useLocation } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { ScrollToTopButton } from '@/components/ScrollToTopButton ';

export const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="pt-22 pb-8 dark:bg-(--tw-color-dark-background) ">
        <Outlet />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};
