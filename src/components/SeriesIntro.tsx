import { Shield, Zap, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "The Omnitrix",
    description: "A powerful alien device containing DNA of countless species"
  },
  {
    icon: Zap,
    title: "10 Aliens",
    description: "Transform into ten unique alien heroes with amazing powers"
  },
  {
    icon: Users,
    title: "Team Tennyson",
    description: "Ben, Gwen, and Grandpa Max on an epic road trip adventure"
  },
  {
    icon: Star,
    title: "Classic Era",
    description: "The original 2005 series that started the beloved franchise"
  }
];

export const SeriesIntro = () => {
  return (
    <section className="py-20 relative border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl mb-4">
              About the <span>Series</span>
            </h2>
            <p className="font-exo text-muted-foreground text-lg max-w-2xl mx-auto">
              Ben 10 follows the adventures of 10-year-old Ben Tennyson who discovers 
              a mysterious alien watch called the Omnitrix that allows him to transform 
              into ten different alien heroes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="alien-card rounded-xl p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-exo text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
