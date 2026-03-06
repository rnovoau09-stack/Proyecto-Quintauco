import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const Stagger = ({
    children,
    className,
    staggerDelay = 0.1,
    direction = "up"
}: StaggerProps) => {
    const shouldReduceMotion = useReducedMotion();

    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = shouldReduceMotion
        ? {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1] as const
                }
            }
        }
        : {
            hidden: {
                opacity: 0,
                ...directions[direction]
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1] as const
                }
            }
        };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-100px",
                amount: 0.2
            }}
            variants={containerVariants}
            style={{ transition: "none" }}
            className={cn("motion-element", className)}
        >
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        style={{
                            willChange: "opacity, transform",
                            transition: "none"
                        }}
                        className="motion-element"
                    >
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div
                    variants={itemVariants}
                    style={{
                        willChange: "opacity, transform",
                        transition: "none"
                    }}
                    className="motion-element"
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
};
