import { Layout } from '@/components/Layout';
import { Heart, Info, Shield } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                About This <span>Site</span>
              </h1>
              <p className="font-exo text-lg text-muted-foreground">
                A fan-made tribute to the classic animated series
              </p>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              {/* Fan Disclaimer */}
              <div className="alien-card rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center flex-shrink-0">
                    <Info size={24} className="text-destructive" />
                  </div>
                  <div>
                    <h2 className="font-orbitron font-bold text-xl text-foreground mb-3">
                      Fan-Made Disclaimer
                    </h2>
                    <p className="font-exo text-muted-foreground leading-relaxed">
                      This is an unofficial fan website created for educational and entertainment purposes only. 
                      Ben 10 and all related characters, names, and imagery are trademarks of Cartoon Network 
                      and Man of Action Entertainment. This site is not affiliated with, endorsed by, or 
                      connected to Cartoon Network, Warner Bros. Discovery, or any of their subsidiaries.
                    </p>
                  </div>
                </div>
              </div>

              {/* About the Series */}
              <div className="alien-card rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-orbitron font-bold text-xl text-foreground mb-3">
                      About Ben 10 Classic
                    </h2>
                    <p className="font-exo text-muted-foreground leading-relaxed mb-4">
                      Ben 10 is an American animated television series created by Man of Action 
                      (a group consisting of Duncan Rouleau, Joe Casey, Joe Kelly, and Steven T. Seagle) 
                      and produced by Cartoon Network Studios.
                    </p>
                    <p className="font-exo text-muted-foreground leading-relaxed mb-4">
                      The series premiered on December 27, 2005 and ran for four seasons until April 15, 2008. 
                      It follows 10-year-old Ben Tennyson who discovers a mysterious watch-like device called 
                      the Omnitrix that allows him to transform into ten different alien creatures.
                    </p>
                    <p className="font-exo text-muted-foreground leading-relaxed">
                      Along with his cousin Gwen and grandfather Max, Ben embarks on a road trip across 
                      America, fighting evil wherever they go while learning the true potential of the Omnitrix 
                      and uncovering secrets about his grandfather's past.
                    </p>
                  </div>
                </div>
              </div>

              {/* Site Purpose */}
              <div className="alien-card rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="font-orbitron font-bold text-xl text-foreground mb-3">
                      Site Purpose
                    </h2>
                    <p className="font-exo text-muted-foreground leading-relaxed mb-4">
                      This website was created as a tribute to one of the most beloved animated series 
                      of the 2000s. Our goal is to provide a comprehensive resource for fans to explore 
                      the aliens, episodes, and lore of the original Ben 10 series.
                    </p>
                    <p className="font-exo text-muted-foreground leading-relaxed">
                      Whether you're a longtime fan reliving childhood memories or a newcomer discovering 
                      the series for the first time, we hope this site enhances your appreciation for 
                      this iconic show.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center">
              <p className="font-exo text-sm text-muted-foreground">
                Made with <span className="text-primary">❤</span> by fans, for fans
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
