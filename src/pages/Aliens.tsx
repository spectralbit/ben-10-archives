import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { AlienCard } from '@/components/AlienCard';
import { SearchFilter } from '@/components/SearchFilter';
import { aliens } from '@/data/aliens';

const Aliens = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [powerFilter, setPowerFilter] = useState('all');

  // Get unique species for filter
  const speciesOptions = useMemo(() => {
    const species = [...new Set(aliens.map(a => a.species))];
    return [
      { value: 'all', label: 'All Species' },
      ...species.map(s => ({ value: s, label: s }))
    ];
  }, []);

  // Get unique powers for filter
  const powerOptions = useMemo(() => {
    const powers = [...new Set(aliens.flatMap(a => a.powers))];
    return [
      { value: 'all', label: 'All Powers' },
      ...powers.map(p => ({ value: p, label: p }))
    ];
  }, []);

  // Filter aliens based on search and filters
  const filteredAliens = useMemo(() => {
    return aliens.filter(alien => {
      const matchesSearch = 
        searchQuery === '' ||
        alien.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alien.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alien.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSpecies = speciesFilter === 'all' || alien.species === speciesFilter;
      const matchesPower = powerFilter === 'all' || alien.powers.includes(powerFilter);

      return matchesSearch && matchesSpecies && matchesPower;
    });
  }, [searchQuery, speciesFilter, powerFilter]);

  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="max-w-3xl mb-8">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                Alien <span>Heroes</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground">
                The Omnitrix grants Ben the ability to transform into ten unique alien species, 
                each with their own incredible powers and abilities. Explore all of them below.
              </p>
            </div>

            {/* Search and Filters */}
            <SearchFilter
              searchPlaceholder="Search aliens by name, species, or description..."
              searchValue={searchQuery}
              onSearchChange={setSearchQuery}
              filters={[
                {
                  key: 'species',
                  label: 'Species',
                  options: speciesOptions,
                  value: speciesFilter,
                  onChange: setSpeciesFilter
                },
                {
                  key: 'power',
                  label: 'Power',
                  options: powerOptions,
                  value: powerFilter,
                  onChange: setPowerFilter
                }
              ]}
              resultCount={filteredAliens.length}
            />

            {/* Aliens Grid */}
            {filteredAliens.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAliens.map((alien, index) => (
                  <AlienCard key={alien.id} alien={alien} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-orbitron text-xl text-muted-foreground mb-2">
                  No aliens found
                </p>
                <p className="font-exo text-muted-foreground/70">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Aliens;
