"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiArrowUpRight, HiChevronDown } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function SchoolsHero() {
    return (
        <section className="relative isolate overflow-hidden bg-brand-navy py-24 text-white sm:py-32 lg:py-36">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/30 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-64 left-0 h-[450px] w-[450px] rounded-full bg-brand-orange/10 blur-[120px]" />

            <Container>
                <div className="relative z-10 max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-7 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-orange"
                    >
                        ENNEAGRAMDIGITAL / OKULLAR
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="max-w-4xl text-4xl font-extrabold leading-[1.13] tracking-[-0.045em] sm:text-5xl lg:text-[66px]"
                    >
                        Her öğrenciyi tanımak,
                        <span className="text-brand-orange"> onun geleceğine dokunmanın</span> ilk
                        adımıdır.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/75 sm:text-lg sm:leading-9"
                    >
                        <p>
                            Aynı sınıfta eğitim gören öğrenciler, aynı olaylara farklı tepkiler
                            verebilir. Bir öğrenci başarısız olmaktan korkarken bir başkası
                            kendisini yeterince fark edilmemiş hissedebilir. Bazısı güven arar,
                            bazısı özgürce keşfetmek ister.
                        </p>

                        <p>
                            EnneagramDigital, öğrencilerin mizaç özelliklerini anlamaya yardımcı
                            olan analizleri, rehberlik çalışmalarını ve öğrenci takibini dijital bir
                            ortamda bir araya getirir.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link
                            href="/iletisim?konu=demo"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                        >
                            Demo Talep Et
                            <HiArrowUpRight size={18} />
                        </Link>

                        <a
                            href="#okullar-ozellikler"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                        >
                            Sistemi Keşfet
                            <HiChevronDown size={17} />
                        </a>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
