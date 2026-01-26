import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { aliens } from '@/data/aliens';
import { episodes } from '@/data/episodes';
import { ArrowLeft, Zap, Shield, Target } from 'lucide-react';
import { motion } from 'framer-motion';

// Map aliens to episodes they appear in (simulated data)
const alienEpisodeAppearances: Record<string, string[]> = {
  heatblast: ["s1e1", "s1e5", "s1e8"],
  fourarms: ["s1e1", "s1e3", "s1e7", "s1e10"],
  xlr8: ["s1e2", "s1e4", "s1e6"],
  diamondhead: ["s1e1", "s1e5", "s1e9"],
  greymatter: ["s1e2", "s1e6", "s1e8"],
  stinkfly: ["s1e3", "s1e4", "s1e7"],
  ripjaws: ["s1e3", "s1e5"],
  upgrade: ["s1e6", "s1e8", "s1e10"],
  ghostfreak: ["s1e4", "s1e9"],
  wildmutt: ["s1e1", "s1e2", "s1e7"]
};

// Additional stats for each alien
const alienStats: Record<string, { strength: number; speed: number; durability: number; intelligence: number; special: number }> = {
  heatblast: { strength: 70, speed: 60, durability: 80, intelligence: 50, special: 95 },
  fourarms: { strength: 100, speed: 40, durability: 95, intelligence: 40, special: 60 },
  xlr8: { strength: 30, speed: 100, durability: 40, intelligence: 60, special: 80 },
  diamondhead: { strength: 85, speed: 50, durability: 100, intelligence: 50, special: 85 },
  greymatter: { strength: 10, speed: 30, durability: 20, intelligence: 100, special: 70 },
  stinkfly: { strength: 40, speed: 80, durability: 50, intelligence: 50, special: 75 },
  ripjaws: { strength: 75, speed: 85, durability: 60, intelligence: 45, special: 80 },
  upgrade: { strength: 50, speed: 50, durability: 70, intelligence: 90, special: 100 },
  ghostfreak: { strength: 40, speed: 60, durability: 90, intelligence: 70, special: 95 },
  wildmutt: { strength: 65, speed: 75, durability: 70, intelligence: 30, special: 85 }
};

const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm font-exo">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  </div>
);

const AlienDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const alien = aliens.find(a => a.id === id);
  
  if (!alien) {
    return (
      <Layout>
        <PageTransition>
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-orbitron text-3xl text-foreground mb-4">Alien Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested alien does not exist in the Omnitrix database.</p>
            <button
              onClick={() => navigate('/aliens')}
              className="btn-omnitrix px-6 py-3 rounded-lg"
            >
              Return to Aliens
            </button>
          </div>
        </PageTransition>
      </Layout>
    );
  }

  const stats = alienStats[alien.id] || { strength: 50, speed: 50, durability: 50, intelligence: 50, special: 50 };
  const appearanceIds = alienEpisodeAppearances[alien.id] || [];
  const appearances = episodes.filter(ep => appearanceIds.includes(ep.id));

  return (
    <Layout>
      <PageTransition>
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <button
              onClick={() => navigate('/aliens')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-exo"
            >
              <ArrowLeft size={20} />
              <span>Back to Aliens</span>
            </button>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5]"
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{ backgroundColor: alien.color }}
                />
                <img
                  src={alien.imageUrl}
                  alt={alien.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    background: `radial-gradient(circle at center, ${alien.color}, transparent 70%)` 
                  }}
                />
              </motion.div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-primary text-sm font-exo font-medium uppercase tracking-widest mb-2 block">
                    {alien.species}
                  </span>
                  <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    {alien.name}
                  </h1>
                  <div 
                    className="w-20 h-1 rounded-full mb-6"
                    style={{ backgroundColor: alien.color, boxShadow: `0 0 20px ${alien.color}` }}
                  />
                  <p className="font-exo text-lg text-muted-foreground leading-relaxed mb-8">
                    {alien.description}
                  </p>

                  {/* Powers */}
                  <div className="mb-8">
                    <h3 className="font-orbitron font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Zap className="text-primary" size={20} />
                      Powers & Abilities
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {alien.powers.map((power) => (
                        <span
                          key={power}
                          className="px-4 py-2 rounded-lg font-exo text-sm border transition-all hover:scale-105"
                          style={{ 
                            borderColor: `${alien.color}40`,
                            backgroundColor: `${alien.color}10`,
                            color: alien.color
                          }}
                        >
                          {power}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              {/* Stats Card */}
              <div className="alien-card rounded-xl p-6">
                <h3 className="font-orbitron font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                  <Shield className="text-primary" size={20} />
                  Combat Statistics
                </h3>
                <div className="space-y-4">
                  <StatBar label="Strength" value={stats.strength} color={alien.color} />
                  <StatBar label="Speed" value={stats.speed} color={alien.color} />
                  <StatBar label="Durability" value={stats.durability} color={alien.color} />
                  <StatBar label="Intelligence" value={stats.intelligence} color={alien.color} />
                  <StatBar label="Special Ability" value={stats.special} color={alien.color} />
                </div>
              </div>

              {/* Quick Facts */}
              <div className="alien-card rounded-xl p-6">
                <h3 className="font-orbitron font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                  <Target className="text-primary" size={20} />
                  Quick Facts
                </h3>
                <div className="space-y-4 font-exo">
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Species</span>
                    <span className="text-foreground font-medium">{alien.species}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Primary Power</span>
                    <span className="text-foreground font-medium">{alien.powers[0]}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Episode Appearances</span>
                    <span className="text-foreground font-medium">{appearances.length}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">First Appearance</span>
                    <span className="text-foreground font-medium">
                      {appearances[0]?.title || "Unknown"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Signature Color</span>
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: alien.color, boxShadow: `0 0 10px ${alien.color}` }}
                      />
                      <span className="text-foreground font-medium">{alien.color}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Episode Appearances */}
            {appearances.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-orbitron font-semibold text-xl text-foreground mb-6">
                  Episode Appearances
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {appearances.map((episode) => (
                    <div
                      key={episode.id}
                      className="episode-card rounded-lg overflow-hidden flex"
                    >
                      <img
                        src={episode.imageUrl}
                        alt={episode.title}
                        className="w-24 h-20 object-cover flex-shrink-0"
                      />
                      <div className="p-3 flex-1">
                        <span className="text-primary text-xs font-exo font-medium">
                          EP {episode.number.toString().padStart(2, '0')}
                        </span>
                        <h4 className="font-orbitron font-medium text-sm text-foreground line-clamp-1">
                          {episode.title}
                        </h4>
                        <p className="text-muted-foreground text-xs font-exo">
                          {episode.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default AlienDetail;