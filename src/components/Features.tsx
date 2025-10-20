import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sword, Shield, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Combate Épico",
    description: "Participa en batallas estratégicas contra criaturas legendarias y villanos poderosos."
  },
  {
    icon: Shield,
    title: "Crea tu Héroe",
    description: "Personaliza tu personaje con clases únicas, habilidades especiales y equipo legendario."
  },
  {
    icon: Sparkles,
    title: "Magia Ancestral",
    description: "Domina hechizos y encantamientos de escuelas de magia milenarias."
  },
  {
    icon: Users,
    title: "Aventuras en Grupo",
    description: "Únete a otros aventureros para explorar mazmorras y derrotar enemigos formidables."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-foreground text-shadow-glow">
            Tu Aventura Te Espera
          </h2>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre un mundo lleno de misterios, peligros y recompensas legendarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(271_76%_53%/0.3)] group"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-cinzel text-2xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-crimson text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
