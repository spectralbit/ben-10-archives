import { Episode } from '@/data/episodes';
import { Clock, Calendar } from 'lucide-react';

interface EpisodeCardProps {
  episode: Episode;
  index: number;
}

export const EpisodeCard = ({ episode, index }: EpisodeCardProps) => {
  return (
    <div 
      className="episode-card rounded-xl overflow-hidden flex flex-col sm:flex-row group animate-slide-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image Section */}
      <div className="relative w-full sm:w-64 md:w-72 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
        <img
          src={episode.imageUrl}
          alt={episode.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80 hidden sm:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:hidden" />
        
        {/* Episode Number Badge */}
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground font-orbitron font-bold text-sm px-3 py-1 rounded-md">
          EP {episode.number.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
        {/* Season Badge */}
        <span className="text-primary/80 text-xs font-exo font-medium uppercase tracking-wider mb-2">
          Season {episode.season}
        </span>

        {/* Title */}
        <h3 className="font-orbitron font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-3">
          {episode.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm font-exo leading-relaxed mb-4 line-clamp-2">
          {episode.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            <span className="text-xs font-exo">{episode.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-primary" />
            <span className="text-xs font-exo">{episode.airDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
