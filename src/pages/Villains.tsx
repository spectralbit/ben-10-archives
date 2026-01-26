import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { VillainCard } from '@/components/VillainCard';
import { SearchFilter } from '@/components/SearchFilter';
import { villains } from '@/data/villains';
import { Skull } from 'lucide-react';

const Villains = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [threatFilter, setThreatFilter] = useState('all');

  const threatOptions = [
    { value: 'all', label: 'All Threats' },
    { value: 'Low', label: 'Low Threat' },
    { value: 'Medium', label: 'Medium Threat' },
    { value: 'High', label: 'High Threat' },
    { value: 'Extreme', label: 'Extreme Threat' }
  ];

  const filteredVillains = useMemo(() => {
    return villains.filter(villain => {
      const matchesSearch = 
        searchQuery === '' ||
        villain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        villain.alias?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        villain.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesThreat = threatFilter === 'all' || villain.threatLevel === threatFilter;

      return matchesSearch && matchesThreat;
    });
  }, [searchQuery, threatFilter]);

  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Skull className="text-destructive" size={40} />
                <h1 className="section-title text-4xl md:text-5xl">
                  Villain <span className="text-destructive">Gallery</span>
                </h1>
              </div>
              <p className="font-exo text-lg text-muted-foreground">
                From intergalactic warlords to mad scientists, Ben has faced some of the 
                most dangerous villains in the universe. Explore the rogues gallery.
              </p>
            </div>

            {/* Search and Filters */}
            <SearchFilter
              searchPlaceholder="Search villains by name or description..."
              searchValue={searchQuery}
              onSearchChange={setSearchQuery}
              filters={[
                {
                  key: 'threat',
                  label: 'Threat Level',
                  options: threatOptions,
                  value: threatFilter,
                  onChange: setThreatFilter
                }
              ]}
              resultCount={filteredVillains.length}
            />

            {/* Villains Grid */}
            {filteredVillains.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVillains.map((villain, index) => (
                  <VillainCard key={villain.id} villain={villain} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-orbitron text-xl text-muted-foreground mb-2">
                  No villains found
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

export default Villains;