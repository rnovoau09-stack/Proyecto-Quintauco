import { Button } from "./ui/button";
import InquiryDialog from "./InquiryDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import logoLight from "@/assets/LogoNegroSinFondoSinSub.png";
import logoDark from "@/assets/LogoSinFondoSinSub.png";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { useTheme } from "@/hooks/use-theme";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { smoothScrollToSection } from "@/utils/smoothScroll";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = async (id: string) => {
    setMobileMenuOpen(false);
    await smoothScrollToSection(id, { offset: 100, duration: 900 });
  };

  const navigateToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { sectionId: id } });
      setMobileMenuOpen(false);
      return;
    }
    scrollToSection(id);
  };

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  // Ref para el contenido del Sheet para detectar swipe
  const sheetContentRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Detectar swipe de izquierda a derecha para cerrar el menú
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleTouchStart = (e: TouchEvent) => {
      // Solo detectar swipe si comienza en el área del Sheet (lado izquierdo de la pantalla)
      const startX = e.touches[0].clientX;
      if (startX < window.innerWidth * 0.3) { // Solo si el touch comienza en el 30% izquierdo
        touchStartRef.current = startX;
        touchStartXRef.current = startX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartRef.current === null) return;

      const currentX = e.touches[0].clientX;
      const diffX = currentX - touchStartRef.current;

      // Solo permitir swipe hacia la derecha (positivo)
      if (diffX > 0) {
        // Prevenir scroll mientras se hace swipe
        e.preventDefault();

        // Buscar el elemento del SheetContent en el DOM (Radix UI usa [data-radix-dialog-content])
        const sheetElement = document.querySelector('[data-radix-dialog-content]') as HTMLElement;
        if (sheetElement) {
          // Aplicar transformación visual mientras se desliza
          const translateX = Math.min(diffX, window.innerWidth);
          sheetElement.style.transform = `translateX(${translateX}px)`;
          sheetElement.style.transition = 'none';
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current === null || touchStartXRef.current === null) return;

      const endX = e.changedTouches[0].clientX;
      const diffX = endX - touchStartXRef.current;
      const minSwipeDistance = 100; // Distancia mínima para considerar un swipe

      const sheetElement = document.querySelector('[data-radix-dialog-content]') as HTMLElement;

      if (diffX > minSwipeDistance && mobileMenuOpen) {
        // Cerrar el menú si el swipe es suficiente
        setMobileMenuOpen(false);
      }

      // Resetear la transformación
      if (sheetElement) {
        sheetElement.style.transform = '';
        sheetElement.style.transition = '';
      }

      touchStartRef.current = null;
      touchStartXRef.current = null;
    };

    // Añadir listeners al documento para capturar todos los toques
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1100] bg-background/90 dark:bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigateToSection('hero')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Logo Proyecto Quintauco"
              className="h-12 w-auto md:h-14 object-contain"
            />
          </motion.div>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <motion.button
                onClick={() => navigateToSection('hero')}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {t('nav.home')}
              </motion.button>
              <motion.button
                onClick={() => navigateToSection('etapas')}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {t('nav.park')}
              </motion.button>
              <motion.button
                onClick={() => navigate('/condominio')}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {t('nav.condo')}
              </motion.button>
              <motion.button
                onClick={() => navigate('/galeria')}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {t('nav.gallery')}
              </motion.button>
              <motion.button
                onClick={() => navigateToSection('contacto')}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {t('nav.contact')}
              </motion.button>
              <div className="mx-2 h-6 w-px bg-border" />
              <InquiryDialog
                trigger={
                  <Button
                    variant="hero"
                    size="sm"
                    className="rounded-full px-5 shadow-md hover:shadow-lg"
                  >
                    {t('nav.inquiry')}
                  </Button>
                }
              />
            </div>

            {/* Mobile Menu Button */}
            {!mobileMenuOpen ? (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
              </Sheet>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="relative md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            )}

            {/* Mobile Menu Sheet */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[400px] p-0 transition-transform duration-300 ease-out"
              >
                <div className="flex flex-col h-full" ref={sheetContentRef}>
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={theme === 'dark' ? logoDark : logoLight}
                        alt="Logo Proyecto Quintauco"
                        className="h-12 w-auto object-contain transition-opacity duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      />
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="relative"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 space-y-2">
                    <button
                      onClick={() => handleNavClick(() => navigateToSection('hero'))}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold text-foreground"
                    >
                      {t('nav.home')}
                    </button>
                    <button
                      onClick={() => handleNavClick(() => navigateToSection('etapas'))}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold text-foreground"
                    >
                      {t('nav.park')}
                    </button>
                    <button
                      onClick={() => handleNavClick(() => navigate('/condominio'))}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold text-foreground"
                    >
                      {t('nav.condo')}
                    </button>
                    <button
                      onClick={() => handleNavClick(() => navigate('/galeria'))}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold text-foreground"
                    >
                      {t('nav.gallery')}
                    </button>
                    <button
                      onClick={() => handleNavClick(() => navigateToSection('contacto'))}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold text-foreground"
                    >
                      {t('nav.contact')}
                    </button>
                    <div className="pt-4 border-t border-border mt-4">
                      <InquiryDialog
                        trigger={
                          <Button
                            variant="hero"
                            size="lg"
                            className="w-full rounded-full shadow-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {t('nav.inquiry')}
                          </Button>
                        }
                      />
                    </div>
                  </div>
                  <div className="p-6 border-t border-border flex items-center justify-between gap-4">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Theme & Language Toggles */}
            <div className="hidden md:flex items-center gap-2 pl-2 border-l border-border/50">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
