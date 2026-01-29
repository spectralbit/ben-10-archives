import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { useFavorites } from '@/hooks/useFavorites';
import { aliens } from '@/data/aliens';
import { villains } from '@/data/villains';
import { characters } from '@/data/characters';
import { AlienCard } from '@/components/AlienCard';
import { VillainCard } from '@/components/VillainCard';
import { CharacterCard } from '@/components/CharacterCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Zap, Skull, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Favorites = () => {
  const { favorites } = useFavorites();

  const favoriteAliens = aliens.filter(a => favorites.aliens.includes(a.id));
  const favoriteVillains = villains.filter(v => favorites.villains.includes(v.id));
  const favoriteCharacters = characters.filter(c => favorites.characters.includes(c.id));

  const totalFavorites = favorites.aliens.length + favorites.villains.length + favorites.characters.length;

  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3">
                My <span>Favorites</span>
                <Heart className="w-10 h-10 text-primary fill-primary" />
              </h1>
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
                Your personal collection of favorite aliens, villains, and characters.
                {totalFavorites === 0 && ' Start exploring and click the heart icon to save your favorites!'}
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="aliens" className="max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8 bg-muted/30 border border-border/30">
                <TabsTrigger 
                  value="aliens" 
                  className="flex items-center gap-2 font-orbitron data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  <Zap size={16} />
                  <span className="hidden sm:inline">Aliens</span>
                  <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                    {favorites.aliens.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="villains"
                  className="flex items-center gap-2 font-orbitron data-[state=active]:bg-destructive/20 data-[state=active]:text-destructive"
                >
                  <Skull size={16} />
                  <span className="hidden sm:inline">Villains</span>
                  <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-destructive/20 text-destructive">
                    {favorites.villains.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="characters"
                  className="flex items-center gap-2 font-orbitron data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  <User size={16} />
                  <span className="hidden sm:inline">Characters</span>
                  <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                    {favorites.characters.length}
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Aliens Tab */}
              <TabsContent value="aliens">
                {favoriteAliens.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {favoriteAliens.map((alien, index) => (
                      <AlienCard key={alien.id} alien={alien} index={index} />
                    ))}
                  </motion.div>
                ) : (
                  <EmptyState 
                    icon={<Zap className="w-12 h-12 text-primary/50" />}
                    message="No favorite aliens yet"
                    hint="Browse the Aliens page and click the heart icon to save your favorites"
                    link="/aliens"
                    linkText="Explore Aliens"
                  />
                )}
              </TabsContent>

              {/* Villains Tab */}
              <TabsContent value="villains">
                {favoriteVillains.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {favoriteVillains.map((villain, index) => (
                      <VillainCard key={villain.id} villain={villain} index={index} />
                    ))}
                  </motion.div>
                ) : (
                  <EmptyState 
                    icon={<Skull className="w-12 h-12 text-destructive/50" />}
                    message="No favorite villains yet"
                    hint="Browse the Villains page and click the heart icon to save your favorites"
                    link="/villains"
                    linkText="Explore Villains"
                  />
                )}
              </TabsContent>

              {/* Characters Tab */}
              <TabsContent value="characters">
                {favoriteCharacters.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {favoriteCharacters.map((character, index) => (
                      <CharacterCard key={character.id} character={character} index={index} />
                    ))}
                  </motion.div>
                ) : (
                  <EmptyState 
                    icon={<User className="w-12 h-12 text-primary/50" />}
                    message="No favorite characters yet"
                    hint="Browse the Characters page and click the heart icon to save your favorites"
                    link="/characters"
                    linkText="Explore Characters"
                  />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

interface EmptyStateProps {
  icon: React.ReactNode;
  message: string;
  hint: string;
  link: string;
  linkText: string;
}

const EmptyState = ({ icon, message, hint, link, linkText }: EmptyStateProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-20 text-center"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="font-orbitron text-lg text-foreground mb-2">{message}</h3>
    <p className="font-exo text-sm text-muted-foreground mb-6 max-w-sm">{hint}</p>
    <a 
      href={link}
      className="btn-omnitrix px-6 py-3 rounded-lg inline-block text-sm"
    >
      {linkText}
    </a>
  </motion.div>
);

export default Favorites;
