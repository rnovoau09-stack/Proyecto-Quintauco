import { Calendar, Zap, Building2, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const Etapas = () => {
  const etapas = [
    {
      numero: "01",
      titulo: "Activación Inicial",
      subtitulo: "Base Ritoque - Parcela 3",
      duracion: "12 semanas (3 meses)",
      inversion: "250-300 UF",
      icon: Zap,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      items: [
        "Base de operaciones modular",
        "3 pistas de Downhill (DH)",
        "Zona de estacionamiento",
        "Señalética y medidas de seguridad",
        "Prueba de concepto comercial"
      ]
    },
    {
      numero: "02",
      titulo: "Consolidación",
      subtitulo: "Infraestructura y Expansión",
      duracion: "6 meses",
      inversion: "500-800 UF",
      icon: Building2,
      color: "text-accent",
      bgColor: "bg-accent/10",
      items: [
        "Infraestructura permanente",
        "Expansión de red de pistas MTB",
        "Senderos de trekking",
        "Cafetería y servicios",
        "Modelo operativo escalable"
      ]
    },
    {
      numero: "03",
      titulo: "Parque Integral",
      subtitulo: "Destino Outdoor Completo",
      duracion: "12-18 meses",
      inversion: "1.500-2.500 UF",
      icon: Sparkles,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        "Mirador y centro de visitantes",
        "Zona de camping y glamping",
        "Actividades complementarias",
        "Alianzas y patrocinios",
        "Integración inmobiliaria"
      ]
    }
  ];

  return (
    <section id="etapas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Plan de Desarrollo
          </h2>
          <p className="text-lg text-muted-foreground">
            Implementación escalonada en <strong className="text-foreground">3 etapas durante 24 meses</strong>, diseñada para validar y escalar el modelo de negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {etapas.map((etapa, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-full ${etapa.bgColor} flex items-center justify-center`}>
                    <etapa.icon className={`h-8 w-8 ${etapa.color}`} />
                  </div>
                  <span className="text-6xl font-bold text-muted-foreground/20">
                    {etapa.numero}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {etapa.titulo}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {etapa.subtitulo}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{etapa.duracion}</span>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full ${etapa.bgColor} ${etapa.color} text-sm font-semibold`}>
                    Inversión: {etapa.inversion}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <ul className="space-y-2">
                    {etapa.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${etapa.color} mt-1.5 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Etapas;
