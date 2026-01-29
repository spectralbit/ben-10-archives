import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { CharacterCard } from '@/components/CharacterCard';
import { characters } from '@/data/characters';

const Characters = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                Main <span>Characters</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the heroes behind the summer adventure. From Ben's alien transformations 
                to Gwen's magical abilities and Grandpa Max's secret past—discover their stories.
              </p>
            </div>

            {/* Character Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {characters.map((character, index) => (
                <CharacterCard key={character.id} character={character} index={index} />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Characters;
