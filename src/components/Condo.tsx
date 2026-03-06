import { Card } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Expand } from "lucide-react";
import maqueta from "@/assets/PlanoReal.png";

const Condo = () => {
  const { t } = useLanguage();
  return (
    <section id="condo" className="pt-20 pb-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-card-foreground mb-6">
              {t('condo.valuePropTitle')}
            </h3>
            <h2 className="text-3xl md:text-4xl text-foreground dark:text-card-foreground mb-6">
              {t('condo.mainTitle')}
            </h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              {t('condo.description')}
            </p>
          </div>

          <div className="relative group">
            <Link
              to="/plano-detalle"
              state={{ returnTo: "/condominio", sectionId: "condo" }}
              className="relative bg-white dark:bg-card/90 backdrop-blur-sm border-2 border-border/50 rounded-2xl shadow-xl overflow-hidden p-4 md:p-6 block cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={maqueta}
                alt="Masterplan Integral del Parque"
                className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-600"
                loading="lazy"
                style={{
                  maxHeight: '600px'
                }}
              />
              {/* Expand icon in bottom right corner */}
              <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-card/95 p-2.5 rounded-lg shadow-lg border border-border/50 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <Expand className="w-5 h-5 text-primary" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Condo;
