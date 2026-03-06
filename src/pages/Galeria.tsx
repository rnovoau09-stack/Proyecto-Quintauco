import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import FirmaMOU from "@/assets/FirmaMOU.jpeg";
import Exploracion1 from "@/assets/Exploracion1.jpeg";
import Exploracion2 from "@/assets/Exploracion2.jpeg";
import Limpieza1 from "@/assets/Limpieza1.jpeg";
import Limpieza2 from "@/assets/Limpieza2.jpeg";
import Limpieza3 from "@/assets/Limpieza3.jpeg";
import ConstitucionQuintauco from "@/assets/ConstitucionQuintauco.jpeg";
import Laguna from "@/assets/Laguna.png";
import VistaDron1 from "@/assets/VistaDron1.JPG";

const Galeria = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const fotos = [
    { src: FirmaMOU, alt: "Firma MOU", caption: t('gallery.captions.mou') },
    { src: Exploracion1, alt: "Exploración 1", caption: t('gallery.captions.exploration1') },
    { src: Exploracion2, alt: "Exploración 2", caption: t('gallery.captions.exploration2') },
    { src: Limpieza1, alt: "Limpieza 1", caption: t('gallery.captions.cleaning1') },
    { src: Limpieza2, alt: "Limpieza 2", caption: t('gallery.captions.cleaning2') },
    { src: Limpieza3, alt: "Limpieza 3", caption: t('gallery.captions.cleaning3') },
    { src: ConstitucionQuintauco, alt: "Constitucion", caption: t('gallery.captions.constitution') },
    { src: Laguna, alt: "Laguna", caption: t('gallery.captions.lagoon') },
    { src: VistaDron1, alt: "Vista Aerea Quintauco", caption: t('Vista Aerea Quintauco') }
  ];

  // split fotos into rows of 3
  const chunks: Array<typeof fotos[number][]> = [];
  for (let i = 0; i < fotos.length; i += 3) {
    chunks.push(fotos.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-10 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('gallery.title')}</h1>
          <p className="text-muted-foreground max-w-2xl">{t('gallery.description')}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">{t('gallery.sectionTitle')}</h2>
          {/* Render rows of 3 photos dynamically */}
          {chunks.map((row, rIdx) => {
            const isLast = rIdx === chunks.length - 1;
            return (
              <div key={rIdx} className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${!isLast ? 'mb-6' : ''}`}>
                {row.map((foto, idx) => (
                  <Card key={rIdx * 3 + idx} className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={foto.src}
                        alt={foto.alt}
                        className="w-full h-56 md:h-72 lg:h-80 object-cover"
                        loading="lazy"
                        decoding="async"
                        fetchPriority={idx === 0 && rIdx === 0 ? "high" : "low"}
                        style={{
                          imageRendering: 'auto',
                          WebkitBackfaceVisibility: 'hidden',
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)'
                        }}
                      />
                      <div className="p-3">
                        <p className="text-sm text-muted-foreground">{foto.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('gallery.locationTitle')}</h2>
          <p className="text-muted-foreground max-w-2xl mb-6">{t('gallery.locationDesc')}</p>

          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps embed using the provided address */}
            <iframe
              title="Mapa del Proyecto Quintauco"
              src="https://www.google.com/maps?q=Quintauco,+F-30-E,+Quintero,+Valpara%C3%ADso,+Chile&z=15&output=embed"
              className="w-full h-96 border-0"
              loading="lazy"
            />
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <a href="https://www.google.com/maps/search/?api=1&query=Quintauco,+F-30-E,+Quintero,+Valpara%C3%ADso,+Chile" target="_blank" rel="noreferrer" className="underline hover:text-primary">{t('gallery.openMap')}</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galeria;


