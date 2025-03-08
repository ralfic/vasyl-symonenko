import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const RootLayout = () => {
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
