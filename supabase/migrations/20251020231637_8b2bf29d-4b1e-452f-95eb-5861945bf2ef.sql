-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  badges TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cart_items table
CREATE TABLE public.cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Products policies (public read, no write for regular users)
CREATE POLICY "Anyone can view products"
  ON public.products FOR SELECT
  USING (true);

-- Cart policies (users can only manage their own cart)
CREATE POLICY "Users can view their own cart"
  ON public.cart_items FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their own cart"
  ON public.cart_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart"
  ON public.cart_items FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own cart"
  ON public.cart_items FOR DELETE
  USING (auth.uid() = user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger for products table
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products with Emporio Arcano theme
INSERT INTO public.products (name, description, price, image, category, stock, badges) VALUES
('Dado D20 Místico', 'Dado de 20 caras con acabado metálico y runas antiguas grabadas. Perfecto para tus aventuras épicas.', 15000, '/assets/img/product1.jpg', 'Dados', 50, '{"Nuevo"}'),
('Manual del Jugador D&D 5e', 'Guía completa para jugadores con todas las reglas, razas y clases. Edición en español.', 45000, '/assets/img/product2.jpg', 'Libros', 30, '{"Más vendido"}'),
('Set de Miniaturas', 'Pack de 6 miniaturas pintadas a mano de alta calidad. Incluye héroes y monstruos variados.', 25000, '/assets/img/product3.jpg', 'Miniaturas', 40, '{"Nuevo"}'),
('Pantalla del DM', 'Pantalla de 4 paneles con tablas de referencia esenciales. Material resistente y diseño épico.', 18000, '/assets/img/product4.jpg', 'Accesorios', 25, '{}'),
('Mapa de Mazmorras', 'Mapa reutilizable de 60x90cm con cuadrícula. Compatible con marcadores borrables.', 12000, '/assets/img/product5.jpg', 'Mapas', 60, '{"Más vendido"}'),
('Cartas de Hechizos', 'Baraja completa de 100 hechizos con ilustraciones y descripciones detalladas.', 8000, '/assets/img/product6.jpg', 'Cartas', 70, '{}'),
('Set Completo de Dados', 'Set de 7 dados poliédricos con estuche de cuero. Incluye D4, D6, D8, D10, D12, D20 y D100.', 22000, '/assets/img/product7.jpg', 'Dados', 45, '{"Nuevo", "Más vendido"}'),
('Grimorio del Mago', 'Libro de hechizos encuadernado en cuero con 200 páginas en blanco para tus conjuros.', 35000, '/assets/img/product8.jpg', 'Libros', 20, '{}'),
('Fichas de Personaje', 'Pack de 50 fichas de personaje impresas en papel pergamino de alta calidad.', 5000, '/assets/img/product9.jpg', 'Accesorios', 100, '{}'),
('Dragón Rojo Miniatura', 'Miniatura de dragón rojo de 15cm pintada a mano. Detalle excepcional.', 55000, '/assets/img/product10.jpg', 'Miniaturas', 15, '{"Nuevo"}'),
('Torre de Dados Madera', 'Torre de dados artesanal en madera tallada con motivos celtas. Base con bandeja.', 28000, '/assets/img/product11.jpg', 'Accesorios', 30, '{"Más vendido"}'),
('Set de Condiciones', 'Pack de 24 fichas de condiciones con anillos de colores. Acrílico resistente.', 16000, '/assets/img/product12.jpg', 'Accesorios', 50, '{}')