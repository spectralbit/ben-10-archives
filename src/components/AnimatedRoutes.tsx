import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '@/pages/Index';
import Aliens from '@/pages/Aliens';
import AlienDetail from '@/pages/AlienDetail';
import Villains from '@/pages/Villains';
import VillainDetail from '@/pages/VillainDetail';
import Omnitrix from '@/pages/Omnitrix';
import Episodes from '@/pages/Episodes';
import Quiz from '@/pages/Quiz';
import TimelinePage from '@/pages/TimelinePage';
import Characters from '@/pages/Characters';
import CharacterDetail from '@/pages/CharacterDetail';
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
        <Route path="/villains" element={<Villains />} />
        <Route path="/villains/:id" element={<VillainDetail />} />
        <Route path="/omnitrix" element={<Omnitrix />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
