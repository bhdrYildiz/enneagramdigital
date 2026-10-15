"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 24,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: reduceMotion ? 0.15 : 0.55,
                delay: reduceMotion ? 0 : delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
