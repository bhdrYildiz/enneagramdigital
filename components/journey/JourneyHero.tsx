"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import Container from "@/components/ui/Container";

const stages = [
    { number: "01", title: "Değerlendir" },
    { number: "02", title: "Anla" },
    { number: "03", title: "Planla" },
    { number: "04", title: "Takip Et" },
];

export default function JourneyHero() {
    return (
        <section className="relative isolate overflow-hidden bg-brand-navy py-20 text-white sm:py-28 lg:py-32">
            <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-brand-blue/30 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand-orange/10 blur-[100px]" />

            <Container>
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange"
                    >
                        ENNEAGRAMDIGITAL / NASIL ÇALIŞIR?
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[64px]"
                    >
                        İnsanı tanımaktan
                        <span className="text-brand-orange"> gelişimi desteklemeye</span> uzanan bir
                        yolculuk.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
                    >
                        EnneagramDigital, mizaç değerlendirmesinden elde edilen bilgileri anlaşılır
                        raporlarla buluşturur. Okulların, kurumların ve bireylerin bu farkındalığı
                        gelişim çalışmalarında nasıl kullanabileceğini adım adım keşfedin.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-9 flex flex-wrap justify-center gap-3"
                    >
                        <a
                            href="#surec"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:brightness-110"
                        >
                            Süreci Keşfet
                            <HiArrowDown size={17} />
                        </a>

                        <Link
                            href="/iletisim?konu=demo"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                        >
                            Demo Talep Et
                            <HiArrowUpRight size={17} />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="relative z-10 mt-16 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4"
                >
                    {stages.map((stage, index) => (
                        <div
                            key={stage.number}
                            className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-extrabold text-brand-orange">
                                    {stage.number}
                                </span>

                                {index < stages.length - 1 && (
                                    <span className="text-white/30">→</span>
                                )}
                            </div>

                            <p className="mt-6 text-lg font-extrabold sm:text-xl">{stage.title}</p>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
