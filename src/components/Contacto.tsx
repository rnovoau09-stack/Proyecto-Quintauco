import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./animations/FadeIn";

const Contacto = () => {
  const { t } = useLanguage();
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <MessageSquare className="w-4 h-4" />
              <span>Contacto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna izquierda: Información de contacto y mapa */}
            <FadeIn className="space-y-6">
              <div className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{t('contact.infoTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">{t('contact.email')}</p>
                      <p className="text-sm text-muted-foreground">
                        info@quintauco.cl
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">{t('contact.phone')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('contact.general')}: +56 9 9228 3007
                      </p>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all"
                    size="lg"
                    onClick={() => {
                      const phoneNumber = "+56 9 9228 3007";
                      const message = "Hola! Me gustaría obtener más información.";
                      const formattedNumber = phoneNumber.replace(/[\s\-+]/g, "");
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                  >
                    {t('contact.whatsapp')}
                  </Button>
                </div>
              </div>

              <Card className="p-6 sm:p-8 bg-card/97 backdrop-blur-xl border-2 border-border/70 shadow-premium hover:shadow-premium-lg hover:border-primary/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-card-foreground">{t('contact.locationTitle')}</h3>
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src="https://www.google.com/maps?q=Quintauco,+F-30-E,+Quintero,+Valpara%C3%ADso,+Chile&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </AspectRatio>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground mt-3 sm:mt-4 font-medium">
                  {t('contact.address')}
                </p>
              </Card>
            </FadeIn>

            {/* Columna derecha: Formulario de contacto */}
            <FadeIn delay={0.2}>
              <Card className="p-6 sm:p-8 bg-card/97 backdrop-blur-xl border-2 border-border/70 shadow-premium hover:shadow-premium-lg hover:border-primary/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-card-foreground">{t('contact.formTitle')}</h3>
                </div>
                <ContactForm />
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

