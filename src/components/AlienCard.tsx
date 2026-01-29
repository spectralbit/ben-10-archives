import { Link } from 'react-router-dom';
import { Alien } from '@/data/aliens';
import { FavoriteButton } from './FavoriteButton';
import { useFavorites } from '@/hooks/useFavorites';

interface AlienCardProps {
  alien: Alien;
  index: number;
}

export const AlienCard = ({ alien, index }: AlienCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite('alien', alien.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite('alien', alien.id);
  };

  return (
    <Link 
      to={`/aliens/${alien.id}`}
      className="alien-card rounded-xl overflow-hidden group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: alien.color }}
        />
        <img
          src={alien.imageUrl}
          alt={alien.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Favorite Button */}
        <div className="absolute top-3 right-3">
          <FavoriteButton
            isFavorite={favorited}
            onClick={handleFavoriteClick}
            variant="default"
          />
        </div>
        
        {/* Glow overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${alien.color}, transparent 70%)` 
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-orbitron font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {alien.name}
          </h3>
          <span 
            className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
            style={{ backgroundColor: alien.color, boxShadow: `0 0 10px ${alien.color}` }}
          />
        </div>
        
        <p className="text-primary/80 text-xs font-exo font-medium uppercase tracking-wider mb-3">
          {alien.species}
        </p>
        
        <p className="text-muted-foreground text-sm font-exo leading-relaxed line-clamp-3">
          {alien.description}
        </p>

        {/* Powers */}
        <div className="mt-4 flex flex-wrap gap-2">
          {alien.powers.slice(0, 2).map((power) => (
            <span 
              key={power}
              className="text-xs font-exo px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {power}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
