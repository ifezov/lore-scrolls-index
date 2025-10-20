import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  badges: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useApp();

  return (
    <Card className="h-full flex flex-col border-primary/20 hover:border-primary/50 transition-all hover:shadow-gold">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/400x300/1a1208/d4af37?text=Producto';
            }}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        {product.badges && product.badges.length > 0 && (
          <div className="flex gap-2 mb-2 flex-wrap">
            {product.badges.map((badge, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        <CardTitle className="font-cinzel text-lg mb-2 text-primary">
          {product.name}
        </CardTitle>
        <p className="font-crimson text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="font-crimson text-xs text-muted-foreground mt-2">
          Stock: {product.stock}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t border-border">
        <span className="font-cinzel text-xl font-bold text-primary">
          ${product.price.toLocaleString('es-CL')}
        </span>
        <Button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          size="sm"
        >
          {product.stock === 0 ? 'Agotado' : 'Agregar'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
