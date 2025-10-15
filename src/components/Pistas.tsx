import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import trailImage from "@/assets/Vista Playa.png";

const Pistas = () => {
  const pistas = [
    {
      nombre: "Línea Verde",
      dificultad: "Principiante",
      descripcion: "Pista de iniciación perfecta para quienes comienzan en el downhill",
      longitud: "800m",
      desnivel: "120m",
      color: "bg-green-500"
    },
    {
      nombre: "Línea Azul",
      dificultad: "Intermedio",
      descripcion: "Combina velocidad y técnica con peraltes y zonas de flow",
      longitud: "1.2km",
      desnivel: "180m",
      color: "bg-blue-500"
    },
    {
      nombre: "Línea Negra",
      dificultad: "Experto",
      descripcion: "Saltos técnicos, drops y secciones de alta velocidad para riders experimentados",
      longitud: "1.5km",
      desnivel: "250m",
      color: "bg-gray-900"
    }
  ];

  return (
    <section id="pistas" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pistas de Downhill
          </h2>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Etapa 1</strong> incluye tres pistas diseñadas profesionalmente para distintos niveles de habilidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6">
            {pistas.map((pista, index) => (
              <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                <div className="flex items-start gap-4">
                  <div className={`w-1 h-20 ${pista.color} rounded-full`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{pista.nombre}</h3>
                      <Badge variant="outline" className="text-xs">
                        {pista.dificultad}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pista.descripcion}
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span><strong className="text-foreground">Longitud:</strong> 1 a 1.5km</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={trailImage} 
              alt="Vista aérea de las pistas"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Topografía Ideal
                </h3>
                <p className="text-white/90">
                  Terreno natural perfectamente adaptado para mountain bike y deportes outdoor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Próximamente</h3>
          <p className="text-lg mb-2 text-white/90">
            En las siguientes etapas se expandirá la red de pistas con senderos de trekking, trail running y actividades complementarias
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pistas;
