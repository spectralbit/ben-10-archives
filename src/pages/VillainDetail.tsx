import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { villains } from '@/data/villains';
import { ArrowLeft, Skull, Crosshair, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const threatColors = {
  Low: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500' },
  Medium: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500' },
  High: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500' },
  Extreme: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500' }
};

const VillainDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const villain = villains.find(v => v.id === id);
  
  if (!villain) {
    return (
      <Layout>
        <PageTransition>
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-orbitron text-3xl text-foreground mb-4">Villain Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested villain is not in our database.</p>
            <button
              onClick={() => navigate('/villains')}
              className="btn-omnitrix px-6 py-3 rounded-lg"
            >
              Return to Villains
            </button>
          </div>
        </PageTransition>
      </Layout>
    );
  }

  const threat = threatColors[villain.threatLevel];

  return (
    <Layout>
      <PageTransition>
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <button
              onClick={() => navigate('/villains')}
              className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors mb-8 font-exo"
            >
              <ArrowLeft size={20} />
              <span>Back to Villains</span>
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
                  className="absolute inset-0 opacity-40"
                  style={{ backgroundColor: villain.color }}
                />
                <img
                  src={villain.imageUrl}
                  alt={villain.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Evil Glow */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{ 
                    background: `radial-gradient(circle at center, ${villain.color}, transparent 70%)` 
                  }}
                />

                {/* Threat Level Badge */}
                <div className={`absolute top-4 right-4 ${threat.bg} ${threat.text} border ${threat.border} px-4 py-2 rounded-lg font-exo font-medium flex items-center gap-2`}>
                  <AlertTriangle size={18} />
                  {villain.threatLevel} Threat
                </div>
              </motion.div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {villain.alias && (
                    <span className="text-destructive/80 text-sm font-exo font-medium uppercase tracking-widest mb-2 block">
                      "{villain.alias}"
                    </span>
                  )}
                  <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    {villain.name}
                  </h1>
                  <div 
                    className="w-20 h-1 rounded-full mb-6"
                    style={{ backgroundColor: villain.color, boxShadow: `0 0 20px ${villain.color}` }}
                  />
                  <p className="font-exo text-lg text-muted-foreground leading-relaxed mb-8">
                    {villain.description}
                  </p>

                  {/* Abilities */}
                  <div className="mb-8">
                    <h3 className="font-orbitron font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Crosshair className="text-destructive" size={20} />
                      Abilities
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {villain.abilities.map((ability) => (
                        <span
                          key={ability}
                          className="px-4 py-2 rounded-lg font-exo text-sm border bg-destructive/10 border-destructive/30 text-destructive"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* First Appearance */}
                  <div className="alien-card rounded-xl p-5">
                    <h3 className="font-orbitron font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Skull className="text-destructive" size={20} />
                      First Appearance
                    </h3>
                    <p className="font-exo text-primary text-lg">
                      {villain.firstAppearance}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default VillainDetail;