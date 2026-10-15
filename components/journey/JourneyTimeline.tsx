"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HiCheckCircle } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { journeySteps } from "@/data/howItWorksPage";

export default function JourneyTimeline() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="surec" className="scroll-mt-24 bg-brand-white py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        DÖRT TEMEL AŞAMA
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Her adım, insanı biraz daha iyi anlamak için.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        EnneagramDigital'in yaklaşımı yalnızca değerlendirme yapmakla sınırlı
                        değildir. Sonuçları anlamlandırmak, gelişim için uygun adımlar belirlemek ve
                        süreci değerlendirmek de bu yolculuğun parçalarıdır.
                    </p>
                </div>

                <div className="relative mt-16 sm:mt-24">
                    <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-brand-border lg:block" />

                    <div className="space-y-20 sm:space-y-28">
                        {journeySteps.map((step, index) => (
                            <article key={step.number} className="relative lg:pl-20">
                                <div className="absolute left-0 top-0 z-10 hidden h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-sm font-extrabold text-white lg:flex">
                                    {step.number}
                                </div>

                                <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                                    <motion.div
                                        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                        }}
                                        className={index % 2 === 1 ? "lg:order-2" : ""}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-extrabold text-brand-orange">
                                                {step.number}
                                            </span>

                                            <span className="h-px w-8 bg-brand-border" />

                                            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue">
                                                {step.label}
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                                            {step.title}
                                        </h3>

                                        <p className="mt-6 text-base leading-8 text-brand-text">
                                            {step.description}
                                        </p>

                                        <ul className="mt-7 space-y-4">
                                            {step.highlights.map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <HiCheckCircle
                                                        size={21}
                                                        className="mt-0.5 shrink-0 text-brand-blue"
                                                    />

                                                    <span className="text-sm leading-7 text-brand-navy">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div
                                        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.08,
                                        }}
                                        className={`min-w-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                                    >
                                        <div className="overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft p-3 shadow-xl shadow-brand-navy/5 sm:p-6">
                                            <div className="overflow-hidden rounded-2xl border border-brand-border bg-white">
                                                <div className="flex items-center gap-2 border-b border-brand-border px-4 py-3">
                                                    <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />

                                                    <span className="ml-3 truncate text-[11px] font-bold text-brand-text">
                                                        EnneagramDigital
                                                    </span>
                                                </div>

                                                <div className="relative aspect-[4/3] bg-white">
                                                    <Image
                                                        src={step.image}
                                                        alt={step.imageAlt}
                                                        fill
                                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
