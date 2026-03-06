import { Mountain, Key, MapPin, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";
import { useEffect, useState } from "react";
import VistaDron5 from "@/assets/VistaDron5.JPG";
import laguna from "@/assets/Laguna.png";
import VistaDron4 from "@/assets/VistaDron4.JPG";
import VistaDron3 from "@/assets/VistaDron3.JPG";
import VistaDron2 from "@/assets/VistaDron2.JPG";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";

const Actividades = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { t } = useLanguage();

  // Auto-play del carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [api]);
  const actividades = [
    {
      icon: Mountain,
      titulo: t('activities.views.title'),
      descripcion: t('activities.views.desc')
    },
    {
      icon: Key,
      titulo: t('activities.access.title'),
      descripcion: t('activities.access.desc')
    },
    {
      icon: MapPin,
      titulo: t('activities.location.title'),
      descripcion: t('activities.location.desc')
    },
    {
      icon: TrendingUp,
      titulo: t('activities.value.title'),
      descripcion: t('activities.value.desc')
    }
  ];

  return (
    <section id="actividades" className="pt-8 pb-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {actividades.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="p-6 border-0 shadow-none bg-transparent transition-[var(--transition-smooth)] hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground dark:text-card-foreground">{item.titulo}</h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{item.descripcion}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Slider de imágenes */}
        <div className="mb-16 mt-8 relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                  <img
                    src={VistaDron5}
                    alt="Ciclista en el parque"
                    className="w-full h-full object-cover"
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
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                  <img
                    src={laguna}
                    alt="Vista aérea de los senderos"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                  <img
                    src={VistaDron4}
                    alt="Vista al mar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                  <img
                    src={VistaDron3}
                    alt="Vista del terreno"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                  <img
                    src={VistaDron2}
                    alt="Paisaje natural"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="!left-2 md:!left-4 !top-1/2 !-translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg z-10" />
            <CarouselNext className="!right-2 md:!right-4 !top-1/2 !-translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg z-10" />
          </Carousel>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white mt-12">
          <h3 className="text-3xl font-bold mb-4">{t('activities.cta.title')}</h3>
          <p className="text-lg mb-2 text-white/90">
            {t('activities.cta.subtitle')}
          </p>
          <p>
            <strong>{t('activities.cta.text')}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Actividades;


