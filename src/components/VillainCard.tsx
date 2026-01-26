import { Link } from 'react-router-dom';
import { Villain } from '@/data/villains';
import { Skull } from 'lucide-react';

interface VillainCardProps {
  villain: Villain;
  index: number;
}

const threatColors = {
  Low: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Medium: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  High: 'bg-red-500/20 text-red-400 border-red-500/30',
  Extreme: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
};

export const VillainCard = ({ villain, index }: VillainCardProps) => {
  return (
    <Link
      to={`/villains/${villain.id}`}
      className="villain-card rounded-xl overflow-hidden group block animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ backgroundColor: villain.color }}
        />
        <img
          src={villain.imageUrl}
          alt={villain.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Threat Level Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-exo font-medium border ${threatColors[villain.threatLevel]}`}>
          {villain.threatLevel} Threat
        </div>

        {/* Evil Glow overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          style={{ 
            background: `radial-gradient(circle at center, ${villain.color}, transparent 70%)` 
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 bg-gradient-card">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-orbitron font-bold text-lg text-foreground group-hover:text-destructive transition-colors">
            {villain.name}
          </h3>
          <Skull 
            size={20}
            className="text-destructive/50 group-hover:text-destructive transition-colors mt-1"
          />
        </div>
        
        {villain.alias && (
          <p className="text-destructive/80 text-xs font-exo font-medium uppercase tracking-wider mb-3">
            "{villain.alias}"
          </p>
        )}
        
        <p className="text-muted-foreground text-sm font-exo leading-relaxed line-clamp-3">
          {villain.description}
        </p>

        {/* Abilities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {villain.abilities.slice(0, 2).map((ability) => (
            <span 
              key={ability}
              className="text-xs font-exo px-2 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20"
            >
              {ability}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};