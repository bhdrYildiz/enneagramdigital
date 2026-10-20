"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-brand-navy pb-16 pt-14 text-white sm:pb-20 sm:pt-16 lg:pb-20 lg:pt-18">
            <div className="pointer-events-none absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-brand-blue/30 blur-[110px]" />

            <Container>
                <div className="relative mx-auto max-w-3xl text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange"
                    >
                        ENNEAGRAMDIGITAL / İLETİŞİM
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[56px]"
                    >
                        İnsanı anlamaya yönelik
                        <span className="text-brand-orange"> ilk adımı birlikte</span> atalım.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75"
                    >
                        Platformu keşfetmek, demo talep etmek veya okulunuz ve kurumunuz için doğru
                        çözümü değerlendirmek üzere bizimle iletişime geçin.
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
