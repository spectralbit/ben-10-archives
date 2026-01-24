import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedAliens } from '@/components/FeaturedAliens';
import { SeriesIntro } from '@/components/SeriesIntro';

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <FeaturedAliens />
        <SeriesIntro />
      </PageTransition>
    </Layout>
  );
};

export default Index;
