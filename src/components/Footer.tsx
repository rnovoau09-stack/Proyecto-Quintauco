import { Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">Proyecto</span>
              <span className="text-xs text-muted-foreground">Quintauco</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 Inversiones Yellowstone SpA. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Quintero, Región de Valparaíso, Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
