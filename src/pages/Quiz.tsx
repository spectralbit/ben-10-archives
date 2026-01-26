import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { QuizGame } from '@/components/QuizGame';

const Quiz = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                Trivia <span>Challenge</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
                Think you know everything about Ben 10? Put your knowledge to the test 
                with questions about aliens, episodes, characters, and powers!
              </p>
            </div>

            {/* Quiz Game */}
            <QuizGame questionsCount={10} />
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Quiz;