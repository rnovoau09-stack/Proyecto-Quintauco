import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Proyecto from "@/components/Proyecto";
import Etapas from "@/components/Etapas";
import Pistas from "@/components/Pistas";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Proyecto />
      <Etapas />
      <Pistas />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
