"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HiArrowUpRight, HiArrowRight, HiSparkles } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function CTA() {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section
            id="hemen-baslayin"
            className="relative isolate overflow-hidden bg-brand-navy py-12 sm:py-24 lg:py-32"
            aria-labelledby="cta-title"
        >
            {/* Arka plan ışık efektleri */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <motion.div
                    animate={
                        reduceMotion
                            ? undefined
                            : {
                                  x: [0, 45, 0],
                                  y: [0, -35, 0],
                              }
                    }
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-48 -right-40 h-[400px] w-[400px] rounded-full bg-brand-blue/40 blur-[110px] sm:h-[600px] sm:w-[600px]"
                />

                <motion.div
                    animate={
                        reduceMotion
                            ? undefined
                            : {
                                  x: [0, -35, 0],
                                  y: [0, 30, 0],
                              }
                    }
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-56 -left-40 h-[400px] w-[400px] rounded-full bg-brand-orange/15 blur-[120px] sm:h-[550px] sm:w-[550px]"
                />

                {/* İnce dekoratif çizgiler */}
                <div className="absolute inset-0 opacity-[0.06]">
                    <div className="absolute top-0 left-1/4 h-full w-px bg-white" />
                    <div className="absolute top-0 left-2/4 h-full w-px bg-white" />
                    <div className="absolute top-0 left-3/4 h-full w-px bg-white" />
                </div>
            </div>

            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        staggerChildren: reduceMotion ? 0 : 0.12,
                    }}
                    className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
                >
                    {/* Üst etiket */}
                    <motion.div
                        variants={fadeUp}
                        transition={{
                            duration: reduceMotion ? 0 : 0.5,
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5"
                    >
                        <HiSparkles size={16} className="text-brand-orange" />

                        <span className="text-xs font-bold tracking-[0.12em] text-white/85 uppercase">
                            EnneagramDigital ile Tanışın
                        </span>
                    </motion.div>

                    {/* Başlık */}
                    <motion.h2
                        id="cta-title"
                        variants={fadeUp}
                        transition={{
                            duration: reduceMotion ? 0 : 0.65,
                        }}
                        className="mt-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                    >
                        İnsanı anlamakla
                        <span className="block text-brand-orange">başlayın.</span>
                    </motion.h2>

                    {/* Açıklama */}
                    <motion.p
                        variants={fadeUp}
                        transition={{
                            duration: reduceMotion ? 0 : 0.6,
                        }}
                        className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9"
                    >
                        Bireysel farklılıkları keşfedin, potansiyeli anlamlandırın ve gelişime yeni
                        bir bakış açısı kazandırın. EnneagramDigital ile tanışmak için ilk adımı
                        atın.
                    </motion.p>

                    {/* CTA butonları */}
                    <motion.div
                        variants={fadeUp}
                        transition={{
                            duration: reduceMotion ? 0 : 0.6,
                        }}
                        className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
                    >
                        <Link
                            href="/iletisim?konu=demo"
                            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-brand-orange px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#F15C31] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                        >
                            Demo Talep Et
                            <HiArrowUpRight
                                size={20}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="/iletisim"
                            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                        >
                            Bizimle İletişime Geç
                            <HiArrowRight
                                size={19}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>

                    {/* Alt bilgi */}
                    <motion.div
                        variants={fadeUp}
                        transition={{
                            duration: reduceMotion ? 0 : 0.6,
                        }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7"
                    >
                        {["Okullar", "İş Dünyası", "Bireysel Kullanım"].map((item) => (
                            <span
                                key={item}
                                className="flex items-center gap-2 text-xs font-medium text-white/50"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
