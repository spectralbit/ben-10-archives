import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { getCharacterById } from '@/data/characters';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Quote, Star, Users, Sparkles } from 'lucide-react';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const character = getCharacterById(id || '');

  if (!character) {
    return (
      <Layout>
        <PageTransition>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-orbitron text-3xl text-foreground mb-4">Character Not Found</h1>
              <Link to="/characters" className="btn-omnitrix px-6 py-3 rounded-lg inline-block">
                Back to Characters
              </Link>
            </div>
          </div>
        </PageTransition>
      </Layout>
    );
  }

  const roleColors: Record<string, string> = {
    'Hero / Omnitrix Wielder': 'bg-primary/20 text-primary border-primary/30',
    'Support / Magic User': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Mentor / Former Plumber': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Back Button */}
            <Link
              to="/characters"
              className="inline-flex items-center gap-2 font-exo text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Characters
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-start gap-6 mb-12"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-2 border-primary/30 shrink-0">
                <User className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-2">
                  {character.name}
                </h1>
                <p className="font-exo text-lg text-muted-foreground mb-3">{character.fullName}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-4 py-1.5 text-sm font-exo font-medium rounded-full border ${roleColors[character.role]}`}>
                    {character.role}
                  </span>
                  <span className="px-3 py-1 text-sm font-exo bg-muted text-muted-foreground rounded-full">
                    Age: {character.age}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="alien-card rounded-xl p-6 mb-8 flex items-start gap-4"
            >
              <Quote className="w-8 h-8 text-primary shrink-0" />
              <p className="font-exo text-xl italic text-foreground">{character.quote}</p>
            </motion.div>

            {/* Backstory */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="font-orbitron font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Backstory
              </h2>
              <p className="font-exo text-muted-foreground leading-relaxed">{character.backstory}</p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="alien-card rounded-xl p-6"
              >
                <h2 className="font-orbitron font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Skills & Abilities
                </h2>
                <ul className="space-y-3">
                  {character.skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3 font-exo text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Relationships */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="alien-card rounded-xl p-6"
              >
                <h2 className="font-orbitron font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Key Relationships
                </h2>
                <ul className="space-y-3">
                  {character.relationships.map((rel, index) => (
                    <li key={index} className="flex items-center justify-between font-exo text-sm">
                      <span className="text-foreground">{rel.name}</span>
                      <span className="text-muted-foreground">{rel.relation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Personality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="font-orbitron font-bold text-xl text-foreground mb-4">Personality Traits</h2>
              <div className="flex flex-wrap gap-3">
                {character.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 font-exo text-sm bg-primary/10 text-primary rounded-full border border-primary/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Moments Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="font-orbitron font-bold text-xl text-foreground mb-6">Key Moments</h2>
              <div className="space-y-6">
                {character.keyMoments.map((moment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary/30"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                    <div className="alien-card rounded-lg p-4">
                      <span className="font-exo text-xs text-primary uppercase tracking-wider">
                        {moment.episode}
                      </span>
                      <h3 className="font-orbitron font-bold text-foreground mt-1 mb-2">
                        {moment.title}
                      </h3>
                      <p className="font-exo text-sm text-muted-foreground">
                        {moment.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default CharacterDetail;
