import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { EpisodeCard } from '@/components/EpisodeCard';
import { episodes } from '@/data/episodes';

const Episodes = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="max-w-3xl mb-12">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                Episode <span>Guide</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground">
                Relive the adventures of Ben, Gwen, and Grandpa Max as they travel across 
                America and encounter villains, make friends, and save the world.
              </p>
            </div>

            {/* Episodes List */}
            <div className="flex flex-col gap-6">
              {episodes.map((episode, index) => (
                <EpisodeCard key={episode.id} episode={episode} index={index} />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Episodes;
