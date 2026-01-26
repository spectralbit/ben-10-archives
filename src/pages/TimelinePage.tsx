import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { Timeline as TimelineComponent } from '@/components/Timeline';

const TimelinePage = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                Series <span>Timeline</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow Ben's journey from discovering the Omnitrix to facing his greatest 
                challenges. Click on any event to learn more about key moments in the series.
              </p>
            </div>

            {/* Timeline */}
            <TimelineComponent />
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default TimelinePage;