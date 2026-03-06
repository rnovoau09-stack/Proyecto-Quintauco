import { FadeIn } from "./animations/FadeIn";
import MapaSimple from "@/assets/PlanoReal.png";

const MapaUbicacion = () => {
    return (
        <section id="mapa-ubicacion" className="py-12 md:py-16 relative overflow-hidden bg-background">
            <FadeIn>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Map container with elegant frame */}
                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-card">
                        {/* Inner padding creates the frame effect */}
                        <div className="p-3 md:p-4 lg:p-6 bg-muted/30">
                            <div className="relative w-full overflow-hidden rounded-lg md:rounded-xl shadow-md bg-white dark:bg-gray-900">
                                <img
                                    src={MapaSimple}
                                    alt="Mapa del Proyecto Quintauco"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default MapaUbicacion;
