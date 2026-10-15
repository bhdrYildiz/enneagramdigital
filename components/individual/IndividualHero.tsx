"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiArrowUpRight, HiSparkles, HiHeart, HiLightBulb } from "react-icons/hi2";

import Container from "@/components/ui/Container";

const discoveryItems = [
    {
        title: "Kendini Tanı",
        description: "İç dünyanı keşfet",
        icon: HiSparkles,
    },
    {
        title: "İlişkilerini Anla",
        description: "Farklılıklara yeni bir gözle bak",
        icon: HiHeart,
    },
    {
        title: "Farkındalık Geliştir",
        description: "Kendine yeni sorular sor",
        icon: HiLightBulb,
    },
];

export default function IndividualHero() {
    return (
        <section className="relative isolate overflow-hidden bg-brand-white py-20 sm:py-28 lg:py-32">
            <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-soft blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand-orange/10 blur-[100px]" />

            <Container>
                <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue"
                        >
                            ENNEAGRAMDIGITAL / BİREYSEL
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.1 }}
                            className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-[62px]"
                        >
                            Kendinizi tanıdıkça,
                            <span className="text-brand-orange"> hayata başka bir gözle</span>{" "}
                            bakabilirsiniz.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.22 }}
                            className="mt-8 max-w-xl space-y-5 text-base leading-8 text-brand-text"
                        >
                            <p>
                                Neden bazı konularda çok hassas olduğunuzu, neden belirli durumlarda
                                aynı tepkileri verdiğinizi veya neden bazı insanlarla daha kolay
                                iletişim kurduğunuzu hiç düşündünüz mü?
                            </p>

                            <p>
                                EnneagramDigital, mizaç temelli değerlendirmeler ve farkındalık
                                içerikleriyle kendinizi daha yakından tanımanıza, güçlü yönlerinizi
                                keşfetmenize ve kişisel gelişim yolculuğunuza yeni bir bakış açısı
                                kazandırmanıza yardımcı olur.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-9 flex flex-wrap gap-3"
                        >
                            <Link
                                href="/iletisim?konu=bireysel"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:brightness-110"
                            >
                                Kendini Keşfet
                                <HiArrowUpRight size={18} />
                            </Link>

                            <a
                                href="#bireysel-kesfet"
                                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-blue"
                            >
                                Daha Fazla Bilgi
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="min-w-0"
                    >
                        <div className="relative rounded-[30px] border border-brand-border bg-white p-6 shadow-xl shadow-brand-navy/5 sm:p-9">
                            <div className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/20">
                                <HiSparkles size={27} />
                            </div>

                            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue">
                                KİŞİSEL KEŞİF
                            </p>

                            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-navy">
                                Kendine doğru bir yolculuk
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-brand-text">
                                Her insanın kendine özgü bir dünyası vardır. Keşfetmeye kendinizden
                                başlayın.
                            </p>

                            <div className="mt-7 space-y-3">
                                {discoveryItems.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-white p-4"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                                                <Icon size={24} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-extrabold text-brand-navy">
                                                    {item.title}
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-brand-text">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <span className="text-xs font-bold text-brand-orange">
                                                0{index + 1}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
