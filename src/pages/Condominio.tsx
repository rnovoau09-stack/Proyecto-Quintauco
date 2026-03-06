import Navbar from "@/components/Navbar";
import HeroCondo from "@/components/HeroCondo";
import Condo from "@/components/Condo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Actividades from "@/components/Actividades";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { smoothScrollToSection } from "@/utils/smoothScroll";


const Condominio = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const state = location.state as { sectionId?: string } | null;
        const sectionId = state?.sectionId;
        if (!sectionId) return;

        smoothScrollToSection(sectionId, { offset: 100, duration: 900 });

        navigate(".", { replace: true, state: null as unknown as undefined });
    }, [location.state, navigate]);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="section-fade">
                <HeroCondo />
            </div>
            <div className="section-fade" style={{ animationDelay: '0.15s' }}>
                <Condo />
            </div>
            <div className="section-fade" style={{ animationDelay: '0.25s' }}>
                <Actividades />
            </div>
            <div className="section-fade" style={{ animationDelay: '0.35s' }}>
                <Contacto />
            </div>
            <div className="section-fade" style={{ animationDelay: '0.45s' }}>
                <Footer />
            </div>
        </div>
    );
};

export default Condominio;
