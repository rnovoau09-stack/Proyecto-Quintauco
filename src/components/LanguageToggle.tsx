import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="w-9 h-9 rounded-full text-xl"
            title={language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
        >
            {language === "es" ? "🇪🇸" : "🇺🇸"}
        </Button>
    );
};

export default LanguageToggle;
