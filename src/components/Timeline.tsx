import { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineEvents, TimelineEvent } from '@/data/timeline';
import { Circle, Film } from 'lucide-react';

const categoryIcons = {
  origin: '🌟',
  alien: '👽',
  battle: '⚔️',
  character: '👤'
};

export const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      {/* Events */}
      <div className="space-y-8 md:space-y-12">
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          const isSelected = selectedEvent?.id === event.id;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-4 md:gap-8 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <button
                  onClick={() => setSelectedEvent(isSelected ? null : event)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'scale-125 border-primary bg-primary text-primary-foreground'
                      : 'border-primary/50 bg-background hover:border-primary hover:scale-110'
                  }`}
                  style={{ 
                    borderColor: isSelected ? event.color : undefined,
                    backgroundColor: isSelected ? event.color : undefined 
                  }}
                >
                  <span className="text-sm">{categoryIcons[event.category]}</span>
                </button>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <motion.div
                  layout
                  className={`alien-card rounded-xl p-5 cursor-pointer transition-all ${
                    isSelected ? 'ring-2' : ''
                  }`}
                  style={{ 
                    '--tw-ring-color': event.color 
                  } as React.CSSProperties}
                  onClick={() => setSelectedEvent(isSelected ? null : event)}
                >
                  {/* Date Badge */}
                  <span 
                    className="inline-block text-xs font-exo font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                    style={{ 
                      backgroundColor: `${event.color}20`,
                      color: event.color
                    }}
                  >
                    {event.date}
                  </span>

                  {/* Title */}
                  <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-exo text-sm text-muted-foreground leading-relaxed ${
                    isSelected ? '' : 'line-clamp-2'
                  }`}>
                    {event.description}
                  </p>

                  {/* Episode Reference */}
                  {isSelected && event.episodeRef && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-border/50"
                    >
                      <div className={`flex items-center gap-2 text-sm font-exo ${isLeft ? 'md:justify-end' : ''}`}>
                        <Film size={14} className="text-primary" />
                        <span className="text-muted-foreground">Episode:</span>
                        <span className="text-primary">{event.episodeRef}</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}
      </div>

      {/* End marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 bottom-0">
        <Circle className="w-4 h-4 text-primary fill-primary" />
      </div>
    </div>
  );
};