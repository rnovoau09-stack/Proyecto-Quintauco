import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Proyecto from "@/components/Proyecto";
import Parque from "@/components/Parque";
import InmobiliariaPreview from "@/components/InmobiliariaPreview";
import Contacto from "@/components/Contacto";
import Servicios from "@/components/Servicios";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { smoothScrollToSection } from "@/utils/smoothScroll";
// removed subscription and survey dialogs per user request

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // subscription and survey dialogs removed

  useEffect(() => {
    const state = location.state as { sectionId?: string } | null;
    const sectionId = state?.sectionId;
    if (!sectionId) return;

    smoothScrollToSection(sectionId, { offset: 100, duration: 900 });

    navigate(".", { replace: true, state: null as unknown as undefined });
  }, [location.state, navigate]);

  return (
    <div className="min-h-screen">
      {/* subscription and survey dialogs removed */}
      <Navbar />
      <Hero />
      <Proyecto />
      <Parque />
      <InmobiliariaPreview />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
