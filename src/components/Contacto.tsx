import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import InquiryDialog from "./InquiryDialog";
import { Card } from "./ui/card";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contacto
            </h2>
            <p className="text-lg text-muted-foreground">
              ¿Interesado en el proyecto? Contáctanos para más información
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Información del Proyecto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ubicación</p>
                      <p className="text-sm text-muted-foreground">
                        Fundo Las Palmas, Santa Julia<br />
                        Quintero, Región de Valparaíso, Chile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@info.cl
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Teléfono</p>
                      <p className="text-sm text-muted-foreground">
                        +56 9 XXXX XXXX
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Inversiones Yellowstone SpA</h4>
                <p className="text-sm text-white/90 mb-4">
                  Sociedad promotora del Proyecto Quintauco
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Gestión Operativa:</strong></p>
                  <p className="text-white/90">Rodrigo Novoa</p>
                  <p className="text-white/90">Marcelo Mondaca</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <InquiryDialog
                trigger={
                  <Button variant="hero" size="lg">
                    Solicitar Más Información
                  </Button>
                }
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
