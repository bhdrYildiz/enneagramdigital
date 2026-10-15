"use client";

import { motion } from "motion/react";
import { HiLifebuoy, HiMagnifyingGlass } from "react-icons/hi2";

import Container from "@/components/ui/Container";

type Props = {
    search: string;
    onSearchChange: (value: string) => void;
};

export default function SupportHero({ search, onSearchChange }: Props) {
    return (
        <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-28">
            <div className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-brand-blue/30 blur-[110px]" />

            <Container>
                <div className="relative mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-orange"
                    >
                        <HiLifebuoy size={28} />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange"
                    >
                        ENNEAGRAMDIGITAL / DESTEK MERKEZİ
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[60px]"
                    >
                        Size nasıl
                        <span className="text-brand-orange"> yardımcı olabiliriz?</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75"
                    >
                        Hesap erişiminden mizaç değerlendirmelerine, raporlardan teknik sorunlara
                        kadar merak ettiğiniz konuların yanıtlarını burada bulabilirsiniz.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative mx-auto mt-10 max-w-xl"
                    >
                        <HiMagnifyingGlass
                            size={21}
                            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-brand-text"
                        />

                        <input
                            type="search"
                            value={search}
                            onChange={(event) => onSearchChange(event.target.value)}
                            placeholder="Sorunuzu veya aradığınız konuyu yazın..."
                            aria-label="Destek sorularında ara"
                            className="min-h-14 w-full rounded-2xl border border-white/20 bg-white py-4 pl-14 pr-5 text-sm font-medium text-brand-navy outline-none transition-shadow placeholder:text-brand-text/70 focus:ring-4 focus:ring-brand-orange/20"
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
