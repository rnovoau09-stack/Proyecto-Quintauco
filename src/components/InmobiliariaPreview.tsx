import { Home, MapPin, Ruler } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import paisaje from "@/assets/VistaDron2.JPG";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";

const InmobiliariaPreview = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const features = [
        {
            icon: Ruler,
            title: t('inmobiliaria.features.lots.title'),
            description: t('inmobiliaria.features.lots.desc')
        },
        {
            icon: MapPin,
            title: t('inmobiliaria.features.location.title'),
            description: t('inmobiliaria.features.location.desc')
        },
        {
            icon: Home,
            title: t('inmobiliaria.features.sustainable.title'),
            description: t('inmobiliaria.features.sustainable.desc')
        }
    ];

    return (
        <section id="inmobiliaria-preview" className="py-20 md:py-28 relative overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${paisaje})` }}
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20">
                                <Home className="w-4 h-4" />
                                <span>Inmobiliaria</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                {t('inmobiliaria.title')} <br />
                                <span className="text-primary">{t('inmobiliaria.titleHighlight')}</span>
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-3xl drop-shadow-md">
                                {t('inmobiliaria.description')} <strong className="text-white font-semibold">{t('inmobiliaria.descriptionStrong')}</strong> {t('inmobiliaria.descriptionEnd')}
                            </p>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
                            {features.map((feature, index) => (
                                <FadeIn key={index} delay={0.1 + (index * 0.05)} className="h-full">
                                    <div className="flex flex-col h-full gap-3 md:gap-4 p-5 md:p-7 rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/45 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg hover:shadow-2xl">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-white/25 flex items-center justify-center shadow-lg flex-shrink-0">
                                            <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-base md:text-lg text-white mb-1 md:mb-2 drop-shadow-sm">{feature.title}</h3>
                                            <p className="text-xs md:text-sm text-white/95 leading-relaxed drop-shadow-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.3}>
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={() => navigate('/condominio')}
                                className="text-base px-8 py-3 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto font-semibold"
                            >
                                {t('inmobiliaria.cta')}
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InmobiliariaPreview;

