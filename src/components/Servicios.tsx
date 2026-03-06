import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Utensils, Tent, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";
import vistaPlaya from "@/assets/Vista Playa.png";
import paisaje from "@/assets/Paisaje.png";
import trailAerial from "@/assets/trail-aerial.jpg";

const Servicios = () => {
  const { t } = useLanguage();
  return (
    <section id="servicios" className="py-12 md:py-16 sm:py-24 md:py-32 bg-gradient-to-b from-foreground via-foreground to-foreground/95 dark:from-card dark:via-card dark:to-card transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden">
      {/* Decorative elements - Hidden on mobile */}
      <div
        className="absolute top-20 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl hidden md:block"
      />
      <div
        className="absolute bottom-20 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl hidden md:block"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground dark:text-card-foreground relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center mb-8 md:mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 dark:bg-primary/25 text-primary-foreground dark:text-white font-semibold text-xs sm:text-sm mb-4 md:mb-6 sm:mb-8 border border-white/20 dark:border-primary/40 backdrop-blur-sm shadow-lg">
            <Utensils className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Servicios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 sm:mb-8 text-primary-foreground dark:text-card-foreground leading-tight px-2">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 dark:text-card-foreground/90 leading-relaxed px-2">
            {t('services.subtitle')}
          </p>
        </FadeIn>

        <div className="space-y-8 md:space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32">
          {/* Restaurant & Terraza - Card a la izquierda, imagen a la derecha */}
          <FadeIn className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
            <div
              className="w-full"
            >
              <Card className="p-4 md:p-6 sm:p-8 md:p-10 bg-card/97 backdrop-blur-xl border-2 border-border/70 shadow-premium hover:shadow-premium-lg hover:border-primary/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex items-center gap-2 md:gap-3 sm:gap-4 mb-3 md:mb-4 sm:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                    <Utensils className="h-5 w-5 md:h-6 md:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary dark:text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl sm:text-2xl font-bold text-foreground dark:text-card-foreground">{t('services.restaurant.title')}</h3>
                </div>
                <p className="text-xs md:text-sm sm:text-base text-muted-foreground dark:text-muted-foreground leading-relaxed mb-2 md:mb-3 sm:mb-4">
                  {t('services.restaurant.desc')}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-primary dark:text-primary">{t('services.restaurant.focus')}</p>
              </Card>
            </div>
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl md:rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hidden md:block" />
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 border-white/10 dark:border-border/50">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={vistaPlaya}
                    alt="Restaurant & Terraza"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </AspectRatio>
              </div>
            </div>
          </FadeIn>

          {/* Zona de Camping - Card a la derecha, imagen a la izquierda */}
          <FadeIn className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 dark:border-border/50 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={paisaje}
                    alt="Zona de Camping"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </AspectRatio>
              </div>
            </div>
            <div
              className="order-1 md:order-2"
            >
              <Card className="p-6 sm:p-8 md:p-10 bg-card/97 backdrop-blur-xl border-2 border-border/70 shadow-premium hover:shadow-premium-lg hover:border-primary/40 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] card-hover">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Tent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-secondary transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-card-foreground">{t('services.camping.title')}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  {t('services.camping.desc')}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-secondary">{t('services.camping.focus')}</p>
              </Card>
            </div>
          </FadeIn>

          {/* Centro de Información - Card a la izquierda, imagen a la derecha */}
          <FadeIn className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <Card className="p-6 sm:p-8 md:p-10 bg-card/97 backdrop-blur-xl border-2 border-border/70 shadow-premium hover:shadow-premium-lg hover:border-primary/40 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] card-hover">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Info className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-card-foreground">{t('services.info.title')}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  {t('services.info.desc')}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-accent">{t('services.info.focus')}</p>
              </Card>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 dark:border-border/50 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={trailAerial}
                    alt="Centro de Información"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </AspectRatio>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Servicios;

