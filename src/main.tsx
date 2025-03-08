import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { RootLayout } from './layouts/RootLayout';
import { BiographyPage } from './pages/biography/BiographyPage';
import { CreativityPage } from './pages/creativity/CreativityPage';
import { GalleryPage } from './pages/gallery/GalleryPage';
import { TestPage } from './pages/test/TestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LazyMotion, domAnimation } from 'framer-motion';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<BiographyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/creativity" element={<CreativityPage />} />
            <Route path="/test" element={<TestPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>
);
