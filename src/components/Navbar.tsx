import { ShoppingCart, User, LogOut, Home, Book, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { signOut } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const { user, getCartCount } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: "No se pudo cerrar sesión",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b-2 border-primary/50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-cinzel text-2xl font-bold text-primary group-hover:text-accent transition-colors">
              Emporio Arcano®
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
              >
                <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Inicio
              </Link>
              <Link
                to="/catalogo"
                className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
              >
                <Book className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Catálogo
              </Link>
              <Link
                to="/quienes-somos"
                className="flex items-center gap-2 font-crimson text-lg text-muted-foreground hover:text-accent transition-colors group"
              >
                <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Quiénes Somos
              </Link>
            </div>

            <Link to="/carrito" className="relative">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="default" size="sm">
                  Iniciar Sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
