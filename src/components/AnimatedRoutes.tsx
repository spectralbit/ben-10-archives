import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '@/pages/Index';
import Aliens from '@/pages/Aliens';
import AlienDetail from '@/pages/AlienDetail';
import Omnitrix from '@/pages/Omnitrix';
import Episodes from '@/pages/Episodes';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/aliens" element={<Aliens />} />
        <Route path="/aliens/:id" element={<AlienDetail />} />
        <Route path="/omnitrix" element={<Omnitrix />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
