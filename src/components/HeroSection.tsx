import { Link } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Omnitrix Circle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
        <div className="w-full h-full rounded-full border-2 border-primary animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-8 rounded-full border border-primary/50" />
        <div className="absolute inset-16 rounded-full border border-primary/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Zap size={16} className="text-primary" />
            <span className="font-exo text-sm text-primary">Classic Series Fan Hub</span>
          </div>

          {/* Main Title */}
          <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <span className="text-foreground">BEN</span>
            <span className="text-primary omnitrix-glow">10</span>
          </h1>

          {/* Subtitle */}
          <p className="font-exo text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            It Started When an Alien Device Did What It Did
          </p>

          {/* Description */}
          <p className="font-exo text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '300ms' }}>
            Explore the world of Ben Tennyson and the Omnitrix. Discover all 10 original alien heroes, 
            relive classic episodes, and dive into the universe that started it all.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link
              to="/aliens"
              className="btn-omnitrix px-8 py-4 rounded-lg flex items-center gap-2 text-sm"
            >
              Explore Aliens
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/episodes"
              className="px-8 py-4 rounded-lg border border-primary/30 text-foreground font-orbitron font-semibold text-sm uppercase tracking-wider hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              View Episodes
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
