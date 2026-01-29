import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Quote } from 'lucide-react';
import type { Character } from '@/data/characters';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export const CharacterCard = ({ character, index }: CharacterCardProps) => {
  const roleColors: Record<string, string> = {
    'Hero / Omnitrix Wielder': 'bg-primary/20 text-primary border-primary/30',
    'Support / Magic User': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Mentor / Former Plumber': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Link to={`/characters/${character.id}`}>
        <article className="alien-card rounded-xl p-6 h-full flex flex-col gap-4 group cursor-pointer">
          {/* Icon & Header */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-colors">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-orbitron font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                {character.name}
              </h3>
              <p className="font-exo text-sm text-muted-foreground">{character.fullName}</p>
              <span className={`inline-block mt-2 px-3 py-1 text-xs font-exo font-medium rounded-full border ${roleColors[character.role] || 'bg-muted text-muted-foreground border-border'}`}>
                {character.role}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-exo text-sm text-muted-foreground line-clamp-3 flex-1">
            {character.description}
          </p>

          {/* Personality Traits */}
          <div className="flex flex-wrap gap-2">
            {character.personality.slice(0, 3).map((trait) => (
              <span
                key={trait}
                className="px-2 py-1 text-xs font-exo bg-muted/50 text-muted-foreground rounded border border-border/30"
              >
                {trait}
              </span>
            ))}
          </div>

          {/* Quote */}
          <div className="flex items-start gap-2 pt-2 border-t border-border/30">
            <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="font-exo text-sm italic text-foreground/80">{character.quote}</p>
          </div>

          {/* Key Moments Count */}
          <div className="flex items-center justify-between text-xs font-exo text-muted-foreground">
            <span>{character.keyMoments.length} Key Moments</span>
            <span className="text-primary group-hover:translate-x-1 transition-transform">
              View Profile →
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
