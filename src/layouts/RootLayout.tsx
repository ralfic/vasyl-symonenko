import { Outlet, useLocation } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

export const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="pt-22 pb-8 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
