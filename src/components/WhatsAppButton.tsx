import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string; // Formato: +56912345678
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = "+56 9 9228 3007",
  message = "Hola! Me gustaría obtener más información.",
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!phoneNumber) {
      console.log("Número de WhatsApp aún no configurado");
      // Por ahora solo mostramos en consola, cuando tengas el número lo actualizamos
      return;
    }

    // Formato del enlace de WhatsApp
    // Eliminar espacios, guiones y el símbolo +
    const formattedNumber = phoneNumber.replace(/[\s\-+]/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
        style={{
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.2)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>

        {/* WhatsApp Icon */}
        <MessageCircle
          className="w-8 h-8 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12"
          strokeWidth={2}
        />

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap shadow-lg">
            ¿Necesitas ayuda?
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
          </div>
        )}
      </button>

      {/* Optional badge for notifications/updates */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default WhatsAppButton;
