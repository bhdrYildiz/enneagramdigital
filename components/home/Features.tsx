"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

import Container from "@/components/ui/Container";
import FeatureVisual from "@/components/home/FeatureVisual";
import { features } from "@/data/features";

type FeatureId = (typeof features)[number]["id"];

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");

        const update = () => setIsDesktop(media.matches);

        update();
        media.addEventListener("change", update);

        return () => media.removeEventListener("change", update);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (!isDesktop) return;

        const nextIndex = Math.min(features.length - 1, Math.floor(progress * features.length));

        setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    });

    return (
        <section
            ref={sectionRef}
            id="ozellikler"
            className="bg-brand-soft"
            aria-labelledby="features-title"
        >
            <Container>
                {/* Bölüm başlığı */}
                <div className="py-20 text-center lg:pb-10">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                        PLATFORM ÖZELLİKLERİ
                    </span>

                    <h2
                        id="features-title"
                        className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
                    >
                        Veriden daha fazlası.
                        <span className="block text-brand-orange">Anlamlı içgörüler.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-text">
                        Mizaç analizlerinden gelişim raporlarına, takip süreçlerinden dijital
                        yönetime kadar ihtiyaç duyduğunuz araçları keşfedin.
                    </p>
                </div>

                {/* Mobil ve tablet görünümü */}
                <div className="space-y-12 pb-20 lg:hidden">
                    {features.map((feature) => (
                        <div key={feature.id} className="space-y-6">
                            <div>
                                <span className="text-sm font-bold text-brand-orange">
                                    {feature.number}
                                </span>

                                <h3 className="mt-3 text-2xl font-bold text-brand-navy">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-brand-text">
                                    {feature.description}
                                </p>
                            </div>

                            <FeatureVisual activeId={feature.id} />
                        </div>
                    ))}
                </div>

                {/* Masaüstü scroll storytelling */}
                <div className="relative hidden lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Sol: Scroll alanı */}
                    <div>
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="flex min-h-[65vh] flex-col justify-center border-b border-brand-border py-12"
                            >
                                <motion.div
                                    animate={{
                                        opacity: activeIndex === index ? 1 : 0.45,
                                        x: activeIndex === index || reduceMotion ? 0 : -12,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-sm font-bold text-brand-orange">
                                        {feature.number}
                                    </span>

                                    <h3 className="mt-4 text-3xl font-extrabold text-brand-navy">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-6 max-w-md text-lg leading-8 text-brand-text">
                                        {feature.description}
                                    </p>

                                    <ul className="mt-8 space-y-3">
                                        {feature.highlights.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-3 text-sm text-brand-text"
                                            >
                                                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Sağ: Sticky platform önizlemesi */}
                    <div className="relative min-w-0">
                        <div className="sticky top-28 py-8">
                            <div className="w-full min-w-0">
                                <FeatureVisual activeId={features[activeIndex].id} />

                                {/* Scroll ilerleme göstergesi */}
                                <div className="mt-5 h-1 overflow-hidden rounded-full bg-brand-border">
                                    <motion.div
                                        className="h-full origin-left bg-brand-orange"
                                        style={{
                                            scaleX: scrollYProgress,
                                        }}
                                    />
                                </div>

                                <div className="mt-4 flex justify-between text-xs font-semibold text-brand-text">
                                    <span>KEŞFET</span>
                                    <span>
                                        0{activeIndex + 1} / 0{features.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
