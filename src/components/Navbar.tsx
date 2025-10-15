import { Mountain } from "lucide-react";
import { Button } from "./ui/button";
import InquiryDialog from "./InquiryDialog";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Mountain className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">Proyecto</span>
              <span className="text-xs text-muted-foreground">Quintauco</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('proyecto')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Proyecto
            </button>
            <button onClick={() => scrollToSection('etapas')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Etapas
            </button>
            <button onClick={() => scrollToSection('pistas')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pistas
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </button>
            <InquiryDialog
              trigger={
                <Button variant="hero" size="sm">
                  Solicitar Más Información
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
