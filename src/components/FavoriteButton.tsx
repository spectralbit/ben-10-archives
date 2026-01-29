import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  variant?: 'default' | 'destructive';
}

export const FavoriteButton = ({ 
  isFavorite, 
  onClick, 
  className,
  variant = 'default' 
}: FavoriteButtonProps) => {
  const colors = {
    default: {
      active: 'text-primary',
      inactive: 'text-muted-foreground hover:text-primary',
      fill: 'hsl(var(--primary))',
      glow: '0 0 12px hsl(var(--primary) / 0.6)'
    },
    destructive: {
      active: 'text-destructive',
      inactive: 'text-muted-foreground hover:text-destructive',
      fill: 'hsl(var(--destructive))',
      glow: '0 0 12px hsl(var(--destructive) / 0.6)'
    }
  };

  const colorSet = colors[variant];

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.85 }}
      className={cn(
        'p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 transition-colors z-10',
        isFavorite ? colorSet.active : colorSet.inactive,
        className
      )}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <motion.div
        animate={isFavorite ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          size={18}
          fill={isFavorite ? colorSet.fill : 'none'}
          style={isFavorite ? { filter: `drop-shadow(${colorSet.glow})` } : undefined}
        />
      </motion.div>
    </motion.button>
  );
};
