import { Sword, Shield, Scroll, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-accent group-hover:text-primary transition-colors" />
            <span className="font-cinzel text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              Calabozos y Dragones
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Inicio
            </Link>
            <Link
              to="/aventuras"
              className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
            >
              <Sword className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Aventuras
            </Link>
            <Link
              to="/personajes"
              className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
            >
              <Shield className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Personajes
            </Link>
            <Link
              to="/grimorio"
              className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
            >
              <Scroll className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Grimorio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
