import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { EpisodeCard } from '@/components/EpisodeCard';
import { SearchFilter } from '@/components/SearchFilter';
import { episodes } from '@/data/episodes';

const Episodes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [seasonFilter, setSeasonFilter] = useState('all');

  // Get unique seasons for filter
  const seasonOptions = useMemo(() => {
    const seasons = [...new Set(episodes.map(e => e.season))].sort();
    return [
      { value: 'all', label: 'All Seasons' },
      ...seasons.map(s => ({ value: s.toString(), label: `Season ${s}` }))
    ];
  }, []);

  // Filter episodes based on search and filters
  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = 
        searchQuery === '' ||
        episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        episode.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSeason = seasonFilter === 'all' || episode.season.toString() === seasonFilter;

      return matchesSearch && matchesSeason;
    });
  }, [searchQuery, seasonFilter]);

  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="max-w-3xl mb-8">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                Episode <span>Guide</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground">
                Relive the adventures of Ben, Gwen, and Grandpa Max as they travel across 
                America and encounter villains, make friends, and save the world.
              </p>
            </div>

            {/* Search and Filters */}
            <SearchFilter
              searchPlaceholder="Search episodes by title or description..."
              searchValue={searchQuery}
              onSearchChange={setSearchQuery}
              filters={[
                {
                  key: 'season',
                  label: 'Season',
                  options: seasonOptions,
                  value: seasonFilter,
                  onChange: setSeasonFilter
                }
              ]}
              resultCount={filteredEpisodes.length}
            />

            {/* Episodes List */}
            {filteredEpisodes.length > 0 ? (
              <div className="flex flex-col gap-6">
                {filteredEpisodes.map((episode, index) => (
                  <EpisodeCard key={episode.id} episode={episode} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-orbitron text-xl text-muted-foreground mb-2">
                  No episodes found
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

export default Episodes;
