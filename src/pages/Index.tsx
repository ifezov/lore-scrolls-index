import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const { products, user } = useApp();
  const navigate = useNavigate();
  
  // Get featured products
  const featuredProducts = products
    .filter(p => p.badges && (p.badges.includes('Más vendido') || p.badges.includes('Nuevo')))
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      <section className="py-16 container mx-auto px-6">
        <h2 className="font-cinzel text-4xl font-bold text-center text-primary mb-4">
          Productos Destacados
        </h2>
        <p className="font-crimson text-center text-muted-foreground mb-12">
          Los tesoros más codiciados de nuestro emporio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
