import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedAliens } from '@/components/FeaturedAliens';
import { SeriesIntro } from '@/components/SeriesIntro';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedAliens />
      <SeriesIntro />
    </Layout>
  );
};

export default Index;
