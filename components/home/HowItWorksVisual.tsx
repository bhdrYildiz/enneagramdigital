"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type ScreenId = "test" | "discover" | "develop";

type HowItWorksVisualProps = {
    activeId: ScreenId;
    className?: string;
};

const screens: Record<ScreenId, { src: string; title: string }> = {
    test: {
        src: "/images/how-it-works/ekran1.png",
        title: "Mizaç Testi",
    },
    discover: {
        src: "/images/how-it-works/ekran2.png",
        title: "Mizaç Analiz Raporu",
    },
    develop: {
        src: "/images/how-it-works/ekran3.png",
        title: "Gelişim ve Takip Paneli",
    },
};

export default function HowItWorksVisual({ activeId, className = "" }: HowItWorksVisualProps) {
    const reduceMotion = useReducedMotion();
    const screen = screens[activeId];

    return (
        <div className={`min-w-0 ${className}`}>
            <div className="overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl shadow-brand-navy/10">
                {/* Üst pencere çubuğu */}
                <div className="flex items-center gap-2 border-b border-brand-border px-4 py-4 sm:px-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />

                    <span className="ml-auto truncate text-xs font-semibold text-brand-text">
                        {screen.title}
                    </span>
                </div>

                {/* Görsel alanı */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft sm:aspect-[16/11]">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activeId}
                            initial={{
                                opacity: 0,
                                scale: reduceMotion ? 1 : 1.035,
                                y: reduceMotion ? 0 : 12,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: reduceMotion ? 1 : 0.985,
                                y: reduceMotion ? 0 : -8,
                            }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.4,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={screen.src}
                                alt={`EnneagramDigital ${screen.title} ekran görüntüsü`}
                                fill
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Aktif ekran göstergesi */}
            <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-brand-text">Gerçek platform ekranı</p>

                <div className="flex items-center gap-2">
                    {(Object.keys(screens) as ScreenId[]).map((id) => (
                        <motion.span
                            key={id}
                            animate={{
                                width: activeId === id ? 28 : 10,
                                backgroundColor: activeId === id ? "#FF6E42" : "#E1E7EA",
                            }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.3,
                            }}
                            className="h-2.5 rounded-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
