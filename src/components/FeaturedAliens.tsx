import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { aliens } from '@/data/aliens';
import { AlienCard } from './AlienCard';

export const FeaturedAliens = () => {
  const featuredAliens = aliens.slice(0, 4);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title text-3xl md:text-4xl mb-2">
              Featured <span>Aliens</span>
            </h2>
            <p className="font-exo text-muted-foreground max-w-md">
              Meet some of the powerful aliens Ben can transform into using the Omnitrix.
            </p>
          </div>
          <Link
            to="/aliens"
            className="flex items-center gap-1 text-primary font-exo font-medium hover:gap-2 transition-all"
          >
            View All Aliens
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* Aliens Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAliens.map((alien, index) => (
            <AlienCard key={alien.id} alien={alien} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
