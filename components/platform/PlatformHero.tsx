"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiArrowUpRight, HiChartBar, HiClipboardDocumentList, HiUserGroup } from "react-icons/hi2";

import Container from "@/components/ui/Container";

const previewModules = [
    {
        title: "Mizaç Analizi",
        description: "Bireysel değerlendirmeler",
        icon: HiChartBar,
    },
    {
        title: "Detaylı Raporlar",
        description: "Açıklayıcı sonuç ekranları",
        icon: HiClipboardDocumentList,
    },
    {
        title: "Gelişim Takibi",
        description: "Planlı çalışmalar",
        icon: HiUserGroup,
    },
];

export default function PlatformHero() {
    return (
        <section className="relative isolate overflow-hidden bg-brand-navy py-20 text-white sm:py-28 lg:py-32">
            <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-blue/25 blur-[110px]" />

            <Container>
                <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange"
                        >
                            ENNEAGRAMDIGITAL / PLATFORM
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.1 }}
                            className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[60px]"
                        >
                            İnsanı anlamak için
                            <span className="text-brand-orange"> tasarlanmış dijital</span> bir
                            platform.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.22 }}
                            className="mt-8 max-w-xl space-y-5 text-base leading-8 text-white/75"
                        >
                            <p>
                                EnneagramDigital, mizaç değerlendirmelerini, açıklayıcı raporları ve
                                gelişim odaklı çalışmaları dijital bir ortamda bir araya getirir.
                            </p>

                            <p>
                                İster öğrencilerini daha yakından tanımak isteyen bir okul, ister
                                çalışanlarına farklı bir bakış açısı kazandırmak isteyen bir kurum,
                                ister kendisini keşfetmek isteyen bir birey olun; platform farklı
                                ihtiyaçlar için çözümler sunmayı amaçlar.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-9 flex flex-wrap gap-3"
                        >
                            <Link
                                href="/iletisim?konu=demo"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:brightness-110"
                            >
                                Demo Talep Et
                                <HiArrowUpRight size={18} />
                            </Link>

                            <a
                                href="#platform-moduller"
                                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                            >
                                Modülleri Keşfet
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="min-w-0"
                    >
                        <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white p-5 text-brand-navy shadow-2xl shadow-black/20 sm:p-7">
                            <div className="flex items-center justify-between border-b border-brand-border pb-5">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                                        PLATFORM GENEL BAKIŞ
                                    </p>
                                    <h2 className="mt-2 text-xl font-extrabold">
                                        EnneagramDigital
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                                    <HiChartBar size={24} />
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {previewModules.map((module) => {
                                    const Icon = module.icon;

                                    return (
                                        <div
                                            key={module.title}
                                            className="flex items-center gap-4 rounded-2xl border border-brand-border p-4"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                                                <Icon size={22} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-extrabold">
                                                    {module.title}
                                                </p>
                                                <p className="mt-1 text-xs text-brand-text">
                                                    {module.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 rounded-xl bg-brand-soft px-4 py-3 text-center">
                                <p className="text-xs font-semibold text-brand-blue">
                                    Tanı · Anla · Geliştir
                                </p>
                            </div>

                            <p className="mt-4 text-center text-[11px] text-brand-text">
                                Temsili platform görünümü
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
