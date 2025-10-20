import dragonHero from "@/assets/dragon-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${dragonHero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-primary mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          Bienvenido a Emporio Arcano
        </h1>
        <p className="font-crimson text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
          Tu portal mágico para aventuras épicas. Descubre nuestro catálogo de tesoros místicos
          para Dungeons & Dragons.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/catalogo">
            <Button size="lg" className="font-crimson text-lg">
              Explorar Catálogo
            </Button>
          </Link>
          <Link to="/quienes-somos">
            <Button size="lg" variant="outline" className="font-crimson text-lg">
              Conocer Más
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
