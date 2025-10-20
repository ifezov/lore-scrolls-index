import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, user, removeFromCart, updateCartQuantity, getCartTotal } = useApp();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-12 flex items-center justify-center">
          <Card className="max-w-md w-full border-primary/20">
            <CardContent className="pt-6 text-center">
              <h2 className="font-cinzel text-2xl font-bold text-primary mb-4">
                Inicia Sesión
              </h2>
              <p className="font-crimson text-muted-foreground mb-6">
                Debes iniciar sesión para ver tu carrito de compras
              </p>
              <Button onClick={() => navigate("/auth")}>
                Ir a Iniciar Sesión
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-12 flex items-center justify-center">
          <Card className="max-w-md w-full border-primary/20">
            <CardContent className="pt-6 text-center">
              <h2 className="font-cinzel text-2xl font-bold text-primary mb-4">
                Carrito Vacío
              </h2>
              <p className="font-crimson text-muted-foreground mb-6">
                No tienes productos en tu carrito. ¡Explora nuestro catálogo!
              </p>
              <Button onClick={() => navigate("/catalogo")}>
                Ir al Catálogo
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="font-cinzel text-4xl font-bold text-primary mb-8 text-center">
          Carrito de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.product?.image || ''}
                      alt={item.product?.name || ''}
                      className="w-24 h-24 object-cover rounded"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/96x96/1a1208/d4af37?text=Producto';
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-cinzel text-lg font-bold text-primary mb-1">
                        {item.product?.name}
                      </h3>
                      <p className="font-crimson text-sm text-muted-foreground mb-3">
                        ${item.product?.price.toLocaleString('es-CL')} c/u
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-border rounded">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 font-bold">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-cinzel text-xl font-bold text-primary">
                        ${((item.product?.price || 0) * item.quantity).toLocaleString('es-CL')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="border-primary/20 sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-cinzel text-2xl font-bold text-primary mb-4">
                  Resumen del Pedido
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-crimson">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span>${getCartTotal().toLocaleString('es-CL')}</span>
                  </div>
                  <div className="flex justify-between font-crimson">
                    <span className="text-muted-foreground">Envío:</span>
                    <span>Gratis</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between font-cinzel text-xl font-bold">
                      <span className="text-primary">Total:</span>
                      <span className="text-primary">${getCartTotal().toLocaleString('es-CL')}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Proceder al Pago
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
