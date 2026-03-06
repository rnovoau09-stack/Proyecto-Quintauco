import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScaleInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const ScaleIn = ({
    children,
    className,
    delay = 0,
    duration = 0.5
}: ScaleInProps) => {
    const shouldReduceMotion = useReducedMotion();

    const initialState = shouldReduceMotion
        ? { opacity: 0 }
        : {
            opacity: 0,
            scale: 0.95
        };

    return (
        <motion.div
            initial={initialState}
            whileInView={{
                opacity: 1,
                scale: 1
            }}
            viewport={{
                once: true,
                margin: "-80px",
                amount: 0.3
            }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.34, 1.56, 0.64, 1], // easeOutBack para un efecto más dinámico
            }}
            style={{
                willChange: "opacity, transform",
                transition: "none" // Desactiva transiciones CSS para evitar conflictos
            }}
            className={cn("motion-element", className)}
        >
            {children}
        </motion.div>
    );
};
