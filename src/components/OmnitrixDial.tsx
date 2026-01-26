import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { aliens, Alien } from '@/data/aliens';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

interface OmnitrixDialProps {
  onSelect?: (alien: Alien) => void;
  showNavigation?: boolean;
}

export const OmnitrixDial = ({ onSelect, showNavigation = true }: OmnitrixDialProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isActivated, setIsActivated] = useState(false);
  const navigate = useNavigate();

  const selectedAlien = aliens[selectedIndex];

  const rotateLeft = () => {
    setSelectedIndex((prev) => (prev - 1 + aliens.length) % aliens.length);
  };

  const rotateRight = () => {
    setSelectedIndex((prev) => (prev + 1) % aliens.length);
  };

  const handleActivate = () => {
    setIsActivated(true);
    setTimeout(() => {
      if (onSelect) {
        onSelect(selectedAlien);
      } else {
        navigate(`/aliens/${selectedAlien.id}`);
      }
      setIsActivated(false);
    }, 800);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') rotateLeft();
      if (e.key === 'ArrowRight') rotateRight();
      if (e.key === 'Enter') handleActivate();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="flex flex-col items-center">
      {/* Main Omnitrix Dial */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-muted bg-gradient-to-b from-muted to-card shadow-2xl">
          {/* Dial Notches */}
          {aliens.map((_, index) => {
            const angle = (index / aliens.length) * 360 - 90;
            const isSelected = index === selectedIndex;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                }}
              >
                <span
                  className={`block w-full h-full rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-primary scale-150 shadow-[0_0_15px_hsl(var(--primary))]'
                      : 'bg-muted-foreground/50 hover:bg-primary/50'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Inner Circle (Display) */}
        <div 
          className={`absolute inset-8 rounded-full border-2 overflow-hidden transition-all duration-300 ${
            isActivated 
              ? 'border-primary shadow-[0_0_50px_hsl(var(--primary)),inset_0_0_50px_hsl(var(--primary)/0.3)]' 
              : 'border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.2)]'
          }`}
        >
          {/* Background Glow */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{ 
              background: `radial-gradient(circle, ${selectedAlien.color}40 0%, transparent 70%)`,
              opacity: isActivated ? 1 : 0.5
            }}
          />

          {/* Alien Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAlien.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={selectedAlien.imageUrl}
                alt={selectedAlien.name}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  isActivated ? 'brightness-150 saturate-150' : ''
                }`}
              />
              
              {/* Activation Flash */}
              <AnimatePresence>
                {isActivated && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-primary/80"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />
        </div>

        {/* Center Button */}
        <button
          onClick={handleActivate}
          disabled={isActivated}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 transition-all duration-300 ${
            isActivated
              ? 'bg-primary border-primary scale-110 animate-pulse'
              : 'bg-card border-primary/70 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]'
          }`}
        >
          <Zap 
            className={`w-8 h-8 mx-auto transition-colors ${
              isActivated ? 'text-primary-foreground' : 'text-primary'
            }`}
          />
        </button>
      </div>

      {/* Alien Info */}
      <div className="mt-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAlien.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-primary/80 text-xs font-exo font-medium uppercase tracking-widest">
              {selectedAlien.species}
            </span>
            <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-foreground mt-1">
              {selectedAlien.name}
            </h3>
            <p className="text-muted-foreground font-exo text-sm mt-2 max-w-xs mx-auto line-clamp-2">
              {selectedAlien.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {showNavigation && (
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={rotateLeft}
            className="p-3 rounded-full border border-border/50 bg-card hover:border-primary/50 hover:bg-primary/10 transition-all"
            aria-label="Previous alien"
          >
            <ChevronLeft className="text-foreground" size={24} />
          </button>
          
          <div className="flex gap-1">
            {aliens.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Select alien ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={rotateRight}
            className="p-3 rounded-full border border-border/50 bg-card hover:border-primary/50 hover:bg-primary/10 transition-all"
            aria-label="Next alien"
          >
            <ChevronRight className="text-foreground" size={24} />
          </button>
        </div>
      )}

      {/* Instructions */}
      <p className="text-muted-foreground/60 text-xs font-exo mt-4">
        Use ← → arrows or click notches to rotate • Press Enter or center button to transform
      </p>
    </div>
  );
};