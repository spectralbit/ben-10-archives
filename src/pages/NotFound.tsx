import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <PageTransition>
        <section className="py-20 min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <span className="font-orbitron font-black text-[120px] md:text-[160px] leading-none text-primary omnitrix-glow">
                  404
                </span>
              </div>

              {/* Message */}
              <h1 className="font-orbitron font-bold text-2xl md:text-3xl text-foreground mb-4">
                Dimension Not Found
              </h1>
              <p className="font-exo text-muted-foreground text-lg mb-8">
                Looks like the Omnitrix glitched and sent you to a dimension that doesn't exist. 
                Let's get you back to safety.
              </p>

              {/* Back Button */}
              <Link
                to="/"
                className="btn-omnitrix inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
              >
                <Home size={18} />
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default NotFound;
