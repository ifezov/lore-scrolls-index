const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-card border-t-2 border-primary/50 pt-8 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h5 className="font-cinzel text-primary font-bold text-xl mb-3">
              Emporio Arcano
            </h5>
            <p className="text-muted-foreground text-sm mb-3">
              Loot legendario para tu mesa.
            </p>
            <p className="text-muted-foreground text-xs">
              RUT 76.123.456-7 · Santiago, Chile
            </p>
          </div>

          <div>
            <h6 className="font-cinzel text-foreground font-semibold mb-3">Tienda</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/catalogo" className="text-muted-foreground hover:text-accent transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="/quienes-somos" className="text-muted-foreground hover:text-accent transition-colors">
                  Quiénes Somos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-cinzel text-foreground font-semibold mb-3">Legal</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-cinzel text-foreground font-semibold mb-3">Síguenos</h6>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Emporio Arcano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
