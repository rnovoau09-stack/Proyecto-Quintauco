import { Trees, Activity, Home as HomeIcon } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";

const Proyecto = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Trees,
      title: t('project.features.ha.title'),
      description: t('project.features.ha.desc')
    },
    {
      icon: Activity,
      title: t('project.features.sports.title'),
      description: t('project.features.sports.desc')
    },
    {
      icon: HomeIcon,
      title: t('project.features.lots.title'),
      description: t('project.features.lots.desc')
    }
  ];

  return (
    <section id="proyecto" className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#1D332D' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20">
            <Activity className="w-4 h-4" />
            <span>Proyecto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('project.title')}
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            {t('project.description')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border/50">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Trees className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t('project.connection.title')}</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {t('project.connection.desc1')}
                </p>
                <p className="text-base text-foreground/80 leading-relaxed hidden md:block">
                  {t('project.connection.desc2')}
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <HomeIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold">{t('project.access.title')}</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-sm md:text-base font-medium">{t('project.access.route1')}</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-sm md:text-base font-medium">{t('project.access.route2')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Proyecto;


