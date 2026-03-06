import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "@/assets/Poster-Video-Hero.png";
import logo from "@/assets/LogoSinFondoSinSub.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";
import { smoothScrollToSection } from "@/utils/smoothScroll";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProyecto = () => {
    smoothScrollToSection('proyecto', { offset: 100, duration: 900 });
  };

  const scrollToContacto = () => {
    smoothScrollToSection('contacto', { offset: 100, duration: 900 });
  };

  // Video local desde /public/hero-video.mp4
  const videoUrl = "/hero-video.mp4";

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          poster={hero1} // Fallback image while video loads
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback to image if video fails */}
          <img
            src={hero1}
            alt="Paisaje Quintauco"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            {/* Small Logo Above Title */}
            <div className="mb-6">
              <img
                src={logo}
                alt="Proyecto Quintauco"
                className="h-16 sm:h-20 md:h-24 w-auto mx-auto"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
                }}
              />
            </div>

            {/* Welcome Text */}
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">
              {t('hero.welcome') || 'Bienvenido a Proyecto Quintauco'}
            </p>

            {/* Main Headline - Bold and Impactful */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 sm:mb-10" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {t('hero.headline1') || 'Vive la naturaleza'}<br />
              {t('hero.headline2') || 'en su forma más pura'}
            </h1>

            {/* CTA Buttons - Side by Side */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              {/* Primary CTA */}
              <Button
                onClick={scrollToProyecto}
                className="group min-w-[180px] bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  {t('hero.cta.explore') || 'Ver Proyecto'}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Secondary CTA */}
              <Button
                onClick={scrollToContacto}
                variant="outline"
                className="group min-w-[180px] bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-foreground px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('hero.cta.contact') || 'Contacto'}
                </span>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator - Simple and Clean */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[2px] h-12 bg-white/40 animate-pulse rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
