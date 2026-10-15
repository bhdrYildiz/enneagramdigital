"use client";

import { useRef, useState } from "react";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

import Container from "@/components/ui/Container";
import HowItWorksVisual from "@/components/home/HowItWorksVisual";
import { howItWorksSteps } from "@/data/howItWorks";

export default function HowItWorks() {
    const processRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: processRef,
        offset: ["start center", "end center"],
    });

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        const nextIndex = Math.min(
            howItWorksSteps.length - 1,
            Math.max(0, Math.floor(progress * howItWorksSteps.length)),
        );

        setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    });

    return (
        <section
            id="nasil-calisir"
            className="bg-brand-white py-20 sm:py-28"
            aria-labelledby="how-it-works-title"
        >
            <Container>
                {/* Bölüm başlığı */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                        NASIL ÇALIŞIR?
                    </span>

                    <h2
                        id="how-it-works-title"
                        className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
                    >
                        Tanımaktan gelişime,
                        <span className="block text-brand-orange">tek bir yolculuk.</span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        EnneagramDigital ile bireysel farklılıkları keşfetmek, anlamlandırmak ve
                        gelişimi desteklemek üç adımda mümkün.
                    </p>
                </div>

                {/* Masaüstü */}
                <div
                    ref={processRef}
                    className="relative mt-16 hidden lg:grid lg:grid-cols-2 lg:gap-16"
                >
                    {/* Sol: Adımlar */}
                    <div>
                        {howItWorksSteps.map((step, index) => {
                            const active = activeIndex === index;

                            return (
                                <div
                                    key={step.id}
                                    className="flex min-h-[65vh] items-center border-b border-brand-border py-12 last:border-b-0"
                                >
                                    <motion.div
                                        animate={{
                                            opacity: active ? 1 : 0.4,
                                            x: active || reduceMotion ? 0 : -12,
                                        }}
                                        transition={{
                                            duration: reduceMotion ? 0 : 0.35,
                                        }}
                                        className="w-full"
                                    >
                                        <span className="text-sm font-bold text-brand-orange">
                                            {step.number}
                                        </span>

                                        <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-blue">
                                            {step.detail}
                                        </p>

                                        <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy">
                                            {step.title}
                                        </h3>

                                        <p className="mt-6 max-w-lg text-lg leading-8 text-brand-text">
                                            {step.description}
                                        </p>

                                        <div className="mt-8 flex items-center gap-3">
                                            <span
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    active
                                                        ? "w-12 bg-brand-orange"
                                                        : "w-5 bg-brand-border"
                                                }`}
                                            />

                                            <span className="text-xs font-semibold text-brand-text">
                                                {step.number} / 03
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Sağ: Sabit ekran görüntüsü */}
                    <div className="relative min-w-0">
                        <div className="sticky top-28 py-8">
                            <HowItWorksVisual activeId={howItWorksSteps[activeIndex].id} />
                        </div>
                    </div>
                </div>

                {/* Mobil ve tablet */}
                <div className="mt-14 space-y-16 lg:hidden">
                    {howItWorksSteps.map((step) => (
                        <div key={step.id} className="min-w-0 space-y-7">
                            <div>
                                <span className="text-sm font-bold text-brand-orange">
                                    {step.number}
                                </span>

                                <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-blue">
                                    {step.detail}
                                </p>

                                <h3 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-base leading-8 text-brand-text">
                                    {step.description}
                                </p>
                            </div>

                            <HowItWorksVisual activeId={step.id} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
