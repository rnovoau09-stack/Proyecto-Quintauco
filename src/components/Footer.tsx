import logoLight from "@/assets/LogoNegroSinFondoSinSub.png";
import logoDark from "@/assets/LogoSinFondoSinSub.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Logo Proyecto Quintauco"
              className="h-14 w-auto md:h-16 lg:h-18 object-contain"
            />
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {t('footer.rights')}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {t('footer.location')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
