import { Layout } from '@/components/Layout';
import { AlienCard } from '@/components/AlienCard';
import { aliens } from '@/data/aliens';

const Aliens = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="section-title text-4xl md:text-5xl mb-4">
              Alien <span>Heroes</span>
            </h1>
            <p className="font-exo text-lg text-muted-foreground">
              The Omnitrix grants Ben the ability to transform into ten unique alien species, 
              each with their own incredible powers and abilities. Explore all of them below.
            </p>
          </div>

          {/* Aliens Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aliens.map((alien, index) => (
              <AlienCard key={alien.id} alien={alien} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aliens;
