import { MapPin, Mountain, Users, TreePine } from "lucide-react";
import { Card } from "./ui/card";

const Proyecto = () => {
  const features = [
    {
      icon: Mountain,
      title: "385 Hectáreas",
      description: "Extenso territorio en el Fundo Las Palmas"
    },
    {
      icon: MapPin,
      title: "Ubicación Privilegiada",
      description: "Cercano a Concón, Viña del Mar y Valparaíso"
    },
    {
      icon: Users,
      title: "600.000+ Habitantes",
      description: "En radio de 30 km del parque"
    },
    {
      icon: TreePine,
      title: "Entorno Natural",
      description: "Paisaje protegido y atractivo para MTB"
    }
  ];

  return (
    <section id="proyecto" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            El Proyecto
          </h2>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Proyecto Quintauco</strong> es una iniciativa impulsada por <strong className="text-foreground">Inversiones Yellowstone SpA</strong> para transformar la zona de Santa Julia del Fundo Las Palmas en un destino outdoor de referencia en la Región de Valparaíso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground mb-4">
                Crear un parque outdoor de referencia regional que combine <strong className="text-foreground">deporte, naturaleza y educación ambiental</strong>, promoviendo la vida sana, el respeto por el entorno y la integración comunitaria.
              </p>
              <p className="text-muted-foreground">
                Con una topografía favorable para MTB, trekking y trail running, el parque ofrecerá <strong className="text-foreground">alta visibilidad para auspiciadores</strong> y marcas deportivas en un entorno natural protegido.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Accesos Principales</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Ruta F-30-E</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Ruta 64</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Ruta 60</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyecto;
