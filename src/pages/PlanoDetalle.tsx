import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import maqueta from "@/assets/PlanoReal.png";

const PlanoDetalle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const scrollPosition = location.state?.scrollPosition || 0;
    const returnTo = location.state?.returnTo || "/";
    const sectionId = location.state?.sectionId;

    const handleVolver = () => {
        // Navegar de vuelta a la ruta de origen, pasando sectionId si existe
        navigate(returnTo, {
            replace: true,
            state: sectionId ? { sectionId } : undefined
        });

        // Restaurar la posición de scroll solo si no hay sectionId
        if (!sectionId) {
            setTimeout(() => {
                window.scrollTo({
                    top: scrollPosition,
                    behavior: "instant"
                });
            }, 0);
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* Header con botón volver */}
            <div className="p-6 flex items-center">
                <button
                    onClick={handleVolver}
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-xl hover:bg-primary hover:text-white transition-all duration-300 group"
                    aria-label="Volver"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-semibold">Volver</span>
                </button>
            </div>

            {/* Imagen centrada */}
            <div className="flex-1 flex items-center justify-center p-8">
                <img
                    src={maqueta}
                    alt="Masterplan Integral del Parque - Vista Completa"
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    );
};

export default PlanoDetalle;
