import { Dices, Shield, Scroll, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="font-cinzel text-4xl font-bold text-center text-primary mb-4">
        ¿Por qué Emporio Arcano?
      </h2>
      <p className="font-crimson text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Descubre por qué somos la mejor opción para equipar tus aventuras épicas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          <CardHeader>
            <div className="mb-4 text-primary">
              <Dices className="h-12 w-12" />
            </div>
            <CardTitle className="font-cinzel text-primary">Productos Únicos</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-crimson">
              Dados, miniaturas y accesorios de la más alta calidad para tus partidas épicas.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          <CardHeader>
            <div className="mb-4 text-primary">
              <Scroll className="h-12 w-12" />
            </div>
            <CardTitle className="font-cinzel text-primary">Grimorio Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-crimson">
              Libros oficiales, guías y manuales para dominar el arte del rol.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          <CardHeader>
            <div className="mb-4 text-primary">
              <Shield className="h-12 w-12" />
            </div>
            <CardTitle className="font-cinzel text-primary">Calidad Garantizada</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-crimson">
              Cada producto es cuidadosamente seleccionado para asegurar tu satisfacción.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          <CardHeader>
            <div className="mb-4 text-primary">
              <Sparkles className="h-12 w-12" />
            </div>
            <CardTitle className="font-cinzel text-primary">Envío Rápido</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-crimson">
              Recibe tus tesoros mágicos en la puerta de tu mazmorra en tiempo récord.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;
