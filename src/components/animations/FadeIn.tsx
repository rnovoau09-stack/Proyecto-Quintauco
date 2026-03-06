import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

export const FadeIn = ({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.6
}: FadeInProps) => {
    const shouldReduceMotion = useReducedMotion();

    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    };

    // Si el usuario prefiere movimiento reducido, solo hacemos fade
    const initialState = shouldReduceMotion
        ? { opacity: 0 }
        : {
            opacity: 0,
            ...directions[direction]
        };

    return (
        <motion.div
            initial={initialState}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{
                once: true,
                margin: "-100px",
                amount: 0.3
            }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // easeOut más suave
                opacity: { duration: duration * 0.8 }
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
