import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, Sparkles } from "lucide-react";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="font-cinzel text-4xl font-bold text-primary mb-4 text-center">
          Quiénes Somos
        </h1>
        <p className="font-crimson text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Somos un emporio dedicado a equipar a aventureros y maestros de mazmorras
          con los mejores artículos para sus partidas de rol.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="mb-4 text-primary">
                <Heart className="h-12 w-12" />
              </div>
              <CardTitle className="font-cinzel text-2xl text-primary">
                Nuestra Pasión
              </CardTitle>
            </CardHeader>
            <CardContent className="font-crimson text-muted-foreground">
              Nacimos del amor por el rol y los juegos de mesa. Cada producto que
              ofrecemos ha sido seleccionado con el mismo cuidado con el que un mago
              elegiría sus componentes de hechizos.
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="mb-4 text-primary">
                <Users className="h-12 w-12" />
              </div>
              <CardTitle className="font-cinzel text-2xl text-primary">
                Nuestra Comunidad
              </CardTitle>
            </CardHeader>
            <CardContent className="font-crimson text-muted-foreground">
              No somos solo una tienda, somos parte de una gran comunidad de jugadores
              que comparten la pasión por crear historias épicas alrededor de una mesa.
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="mb-4 text-primary">
                <Award className="h-12 w-12" />
              </div>
              <CardTitle className="font-cinzel text-2xl text-primary">
                Calidad Premium
              </CardTitle>
            </CardHeader>
            <CardContent className="font-crimson text-muted-foreground">
              Trabajamos solo con proveedores de confianza y ofrecemos productos de la
              más alta calidad. Tu satisfacción es nuestro tesoro más preciado.
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="mb-4 text-primary">
                <Sparkles className="h-12 w-12" />
              </div>
              <CardTitle className="font-cinzel text-2xl text-primary">
                Compromiso
              </CardTitle>
            </CardHeader>
            <CardContent className="font-crimson text-muted-foreground">
              Nos comprometemos a brindarte la mejor experiencia de compra, con atención
              personalizada y productos que harán tus aventuras inolvidables.
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8 text-center">
              <h2 className="font-cinzel text-3xl font-bold text-primary mb-4">
                Únete a Nuestra Aventura
              </h2>
              <p className="font-crimson text-lg text-muted-foreground mb-6">
                En Emporio Arcano, cada compra es el comienzo de una nueva historia épica.
                Déjanos ser parte de tu aventura y equiparte con el mejor loot para tu mesa.
              </p>
              <p className="font-crimson text-foreground italic">
                "El verdadero tesoro no es el oro, sino las historias que creamos juntos."
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
