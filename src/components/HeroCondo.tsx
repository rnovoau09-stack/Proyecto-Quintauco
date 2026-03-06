import { Home, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import vistaTerreno from "@/assets/VistaDron1.JPG";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";
import { smoothScrollToSection } from "@/utils/smoothScroll";

const HeroCondo = () => {
  const { t } = useLanguage();

  const scrollToCondo = () => {
    smoothScrollToSection('condo', { offset: 100, duration: 900 });
  };

  return (
    <section
      id="hero-condo"
      className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={vistaTerreno}
          alt="Vista del Terreno Quintauco"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.75) contrast(1.1)',
          }}
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            {/* Icon Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
              <Home className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t('condo.valuePropTitle') || 'Desarrollo Inmobiliario'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t('heroCondo.title')}<br />
              <span className="text-primary">{t('heroCondo.subtitle')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              {t('heroCondo.description')}
            </p>

            {/* CTA Button */}
            <Button
              onClick={scrollToCondo}
              size="lg"
              className="group px-10 py-7 text-lg font-semibold rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                {t('inmobiliaria.cta') || 'Conocer Más'}
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroCondo;
