import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-omnitrix flex items-center justify-center">
              <span className="font-orbitron font-bold text-background text-sm">10</span>
            </div>
            <span className="font-orbitron font-semibold text-sm">
              <span className="text-foreground">BEN</span>
              <span className="text-primary">10</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['Home', 'Aliens', 'Episodes', 'About'].map((link) => (
              <Link
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary text-sm font-exo transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs font-exo text-center">
            Fan-made website. Not affiliated with Cartoon Network.
          </p>
        </div>
      </div>
    </footer>
  );
};
