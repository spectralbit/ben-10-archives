import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { OmnitrixDial } from '@/components/OmnitrixDial';

const Omnitrix = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20 min-h-[80vh] flex flex-col items-center justify-center">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                The <span>Omnitrix</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
                The most powerful device in the universe. Rotate the dial to browse 
                through Ben's alien transformations and activate to learn more.
              </p>
            </div>

            {/* Interactive Dial */}
            <OmnitrixDial />
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Omnitrix;