import { Button } from "@/components/ui/button";
import { Sword, Scroll } from "lucide-react";
import dragonHero from "@/assets/dragon-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dragonHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">
          <h1 className="font-cinzel text-6xl md:text-8xl font-black text-foreground text-shadow-glow">
            CALABOZOS Y DRAGONES
          </h1>
          
          <p className="font-crimson text-2xl md:text-3xl text-accent text-shadow-gold italic">
            Forja tu leyenda en un mundo de magia y aventuras
          </p>

          <p className="font-crimson text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Adéntrate en mazmorras oscuras, enfrenta dragones legendarios y descubre tesoros
            ancestrales. Tu destino te aguarda, valiente aventurero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="font-cinzel text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(271_76%_53%/0.4)] hover:shadow-[0_0_40px_hsl(271_76%_53%/0.6)] transition-all duration-300"
            >
              <Sword className="mr-2 h-5 w-5" />
              Comenzar Aventura
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-cinzel text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-[0_0_20px_hsl(42_100%_50%/0.3)] hover:shadow-[0_0_30px_hsl(42_100%_50%/0.5)] transition-all duration-300"
            >
              <Scroll className="mr-2 h-5 w-5" />
              Explorar Grimorio
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
