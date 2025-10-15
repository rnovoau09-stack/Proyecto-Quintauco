import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-biking.jpg";

const Hero = () => {
  const scrollToProyecto = () => {
    const element = document.getElementById('proyecto');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--overlay-dark)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Proyecto
            <span className="block text-secondary">Quintauco</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            385 hectáreas de naturaleza y adrenalina en Quintero, Región de Valparaíso
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProyecto}
              className="text-lg px-8"
            >
              Descubre el Proyecto
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
