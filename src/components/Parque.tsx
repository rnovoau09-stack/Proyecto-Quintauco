import { Card } from "./ui/card";
import {
  Trees,
  Mountain,
  Map,
  Footprints,
  Bike,
  Tent,
  Leaf,
  Binoculars,
  Bird,
  Camera,
  Sun,
  Home as HomeIcon,
  Activity,
  Expand,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";
import { ScaleIn } from "./animations/ScaleIn";
import maqueta from "@/assets/PlanoReal.png";
import flores from "@/assets/VistaDron6.JPG";

const Parque = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "400", label: t("park.stats.total"), icon: Trees },
    { value: "2.000 m²", label: t("park.stats.residential"), icon: HomeIcon },
    { value: "24/7", label: t("park.stats.private"), icon: Activity },
  ];

  const experiences = [
    {
      title: t("park.experiences.trekking.title"),
      description: t("park.experiences.trekking.desc"),
      icon: Footprints,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: t("park.experiences.bike.title"),
      description: t("park.experiences.bike.desc"),
      icon: Bike,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: t("park.experiences.birds.title"),
      description: t("park.experiences.birds.desc"),
      icon: Binoculars,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: t("park.experiences.photo.title"),
      description: t("park.experiences.photo.desc"),
      icon: Camera,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section
      id="etapas"
      className="py-12 md:py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      {/* Modern Decorative Background Elements - Hidden on mobile */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 animate-pulse hidden md:block" />
      <div className="absolute bottom-20 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-accent/8 rounded-full blur-3xl translate-x-1/2 animate-pulse delay-1000 hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-secondary/5 rounded-full blur-3xl hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn className="max-w-4xl mx-auto text-center mb-8 md:mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 text-primary dark:text-primary font-semibold text-xs sm:text-sm mb-4 md:mb-6 sm:mb-8 border border-primary/30 dark:border-primary/40 shadow-lg backdrop-blur-sm">
            <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{t("park.header.tag")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground dark:text-card-foreground mb-4 md:mb-6 sm:mb-8 leading-tight px-2">
            <span className="gradient-text text-shadow-premium">
              {t("park.header.title")}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
            {t("park.header.descStart")}{" "}
            <strong className="text-primary font-semibold">
              {t("park.header.descHighlight")}
            </strong>{" "}
            {t("park.header.descEnd")}
          </p>
        </FadeIn>

        {/* Stats Section - Simplified on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 sm:gap-8 mb-12 md:mb-16 sm:mb-24 md:mb-32">
          {stats.map((stat, index) => (
            <ScaleIn
              key={index}
              delay={index * 0.08}
              duration={0.55}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-xl md:rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] blur-xl opacity-0 group-hover:opacity-100 hidden md:block" />
              <div className="relative bg-card backdrop-blur-xl border-2 border-border/70 rounded-xl md:rounded-2xl sm:rounded-3xl p-4 md:p-6 sm:p-8 md:p-10 text-center hover:shadow-premium-lg hover:border-primary/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-premium">
                <div className="w-12 h-12 md:w-16 md:h-16 sm:w-20 sm:h-20 mx-auto mb-3 md:mb-4 sm:mb-6 rounded-lg md:rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl sm:text-5xl md:text-6xl font-bold text-foreground dark:text-card-foreground mb-1 md:mb-2 sm:mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-muted-foreground dark:text-muted-foreground font-semibold uppercase tracking-wider text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Masterplan & Conservation - Alternating Layout */}
        <div className="space-y-12 md:space-y-16 sm:space-y-24 md:space-y-32 lg:space-y-40 mb-12 md:mb-16 sm:mb-24 md:mb-32">
          {/* Masterplan */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1 space-y-4 md:space-y-6 sm:space-y-8 md:space-y-10">
              <div className="flex items-center gap-2 md:gap-3 sm:gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                  <Map className="w-5 h-5 md:w-6 md:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-card-foreground">
                  {t("park.masterplan.title")}
                </h3>
              </div>
              <p className="text-sm md:text-base sm:text-lg md:text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed">
                {t("park.masterplan.desc")}
              </p>
              <ul className="space-y-3 md:space-y-4 sm:space-y-5 md:space-y-6">
                {[
                  {
                    title: t("park.masterplan.base.title"),
                    desc: t("park.masterplan.base.desc"),
                    icon: Tent,
                  },
                  {
                    title: t("park.masterplan.residential.title"),
                    desc: t("park.masterplan.residential.desc"),
                    icon: HomeIcon,
                  },
                  {
                    title: t("park.masterplan.sports.title"),
                    desc: t("park.masterplan.sports.desc"),
                    icon: Bike,
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 md:gap-3 sm:gap-4 md:gap-5 group/item"
                  >
                    <div className="mt-1 w-10 h-10 md:w-12 md:h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-md">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm md:text-base sm:text-lg text-foreground dark:text-card-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm sm:text-base text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <div className="order-1 lg:order-2 relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent rounded-xl md:rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] blur-3xl transform rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hidden md:block" />
              <Link
                to="/plano-detalle"
                state={{
                  scrollPosition: window.scrollY,
                  returnTo: "/",
                  sectionId: "etapas",
                }}
                className="relative bg-white dark:bg-card/90 backdrop-blur-sm border-2 border-border/50 rounded-xl md:rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] shadow-xl md:shadow-2xl overflow-hidden aspect-auto p-4 md:p-6 block cursor-pointer hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={maqueta}
                  alt="Masterplan Integral del Parque"
                  className="w-full h-full object-contain rounded-xl md:rounded-2xl group-hover:scale-[1.02] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    maxHeight: "600px",
                  }}
                />
                {/* Expand icon in bottom right corner */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white/95 dark:bg-card/95 p-2 md:p-2.5 rounded-lg shadow-lg border border-border/50 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <Expand className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
              </Link>
            </div>
          </div>

          {/* Conservation */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/30 via-primary/20 to-transparent rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] blur-3xl transform -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="relative bg-card/90 backdrop-blur-sm border-2 border-border/50 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden aspect-square lg:aspect-[4/3] group-hover:border-accent/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <img
                  src={flores}
                  alt="Compromiso de Conservación - Flora Nativa"
                  className="w-full h-full object-cover rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] group-hover:scale-105 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    imageRendering: "auto",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                />
              </div>
            </div>
            <FadeIn className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shadow-lg">
                  <Leaf className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-card-foreground">
                  {t("park.conservation.title")}
                </h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed">
                {t("park.conservation.desc")}{" "}
                <strong className="text-accent font-semibold">
                  {t("park.conservation.descHighlight")}
                </strong>{" "}
                {t("park.conservation.descEnd")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { text: t("park.conservation.flora"), icon: Trees },
                  { text: t("park.conservation.fauna"), icon: Bird },
                  { text: t("park.conservation.trails"), icon: Footprints },
                  { text: t("park.conservation.education"), icon: Sun },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group/item"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ willChange: "transform" }}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base text-foreground dark:text-card-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white dark:bg-card border-2 border-border/50 dark:border-border/60 shadow-lg">
                <p className="text-sm sm:text-base text-foreground dark:text-card-foreground italic leading-relaxed">
                  "{t("park.conservation.quote")}"
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Experiences Grid */}
        <FadeIn className="text-center mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-card-foreground mb-4 sm:mb-6 px-2">
            {t("park.experiences.title")}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            {t("park.experiences.subtitle")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <ScaleIn key={index} delay={index * 0.08} duration={0.5}>
              <Card className="p-6 sm:p-8 hover:shadow-premium-lg transition-all duration-300 ease-out border-2 border-border/70 hover:border-primary/40 hover:-translate-y-2 hover:scale-[1.02] card-hover group relative overflow-hidden bg-card backdrop-blur-xl shadow-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${exp.bg} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg`}
                >
                  <exp.icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${exp.color} transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                  />
                </div>
                <h4 className="font-bold text-lg sm:text-xl text-foreground dark:text-card-foreground mb-2 sm:mb-3 relative z-10">
                  {exp.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed relative z-10">
                  {exp.description}
                </p>
              </Card>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parque;
