"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiArrowUpRight, HiChartBar, HiChatBubbleLeftRight, HiUserGroup } from "react-icons/hi2";

import Container from "@/components/ui/Container";

const previewItems = [
    {
        label: "Bireysel Farkındalık",
        description: "Güçlü yönleri keşfetme",
        icon: HiChartBar,
    },
    {
        label: "Ekip İletişimi",
        description: "Farklı yaklaşımları anlama",
        icon: HiChatBubbleLeftRight,
    },
    {
        label: "Liderlik Gelişimi",
        description: "Yönetim tarzını değerlendirme",
        icon: HiUserGroup,
    },
];

export default function BusinessHero() {
    return (
        <section className="relative isolate overflow-hidden bg-brand-navy py-20 text-white sm:py-28 lg:py-32">
            <div className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-brand-blue/25 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand-orange/10 blur-[120px]" />

            <Container>
                <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange"
                        >
                            ENNEAGRAMDIGITAL / İŞ DÜNYASI
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[60px]"
                        >
                            İş hayatında insanı anlamak,
                            <span className="text-brand-orange">
                                {" "}
                                başarıyı birlikte inşa etmektir.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.22 }}
                            className="mt-8 max-w-xl space-y-5 text-base leading-8 text-white/75"
                        >
                            <p>
                                Her kurumun hedefleri vardır. Ancak bu hedeflere ulaşmak için
                                birlikte çalışan insanların beklentileri, motivasyonları ve iletişim
                                biçimleri birbirinden farklı olabilir.
                            </p>

                            <p>
                                EnneagramDigital, mizaç temelli farkındalık ve gelişim yaklaşımıyla
                                çalışanların kendilerini daha iyi tanımalarına, yöneticilerin
                                ekiplerini daha bilinçli anlamalarına ve kurum içindeki iletişimin
                                güçlendirilmesine yardımcı olmayı amaçlar.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-9 flex flex-wrap gap-3"
                        >
                            <Link
                                href="/iletisim?konu=kurumsal-demo"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:brightness-110"
                            >
                                Kurumsal Demo Talep Et
                                <HiArrowUpRight size={18} />
                            </Link>

                            <a
                                href="#is-dunyasi-cozumler"
                                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                            >
                                Çözümleri İncele
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
                                        KURUMSAL GELİŞİM
                                    </p>
                                    <h2 className="mt-2 text-xl font-extrabold">
                                        İnsan Odaklı Yaklaşım
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                                    <HiUserGroup size={24} />
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-2">
                                {["Tanı", "Anla", "Geliştir"].map((item, index) => (
                                    <div
                                        key={item}
                                        className="rounded-xl bg-brand-soft px-2 py-4 text-center"
                                    >
                                        <span className="block text-lg font-extrabold text-brand-orange">
                                            0{index + 1}
                                        </span>
                                        <span className="mt-1 block text-xs font-semibold text-brand-navy">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 space-y-3">
                                {previewItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex items-center gap-4 rounded-2xl border border-brand-border p-4"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                                                <Icon size={22} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-extrabold">
                                                    {item.label}
                                                </p>
                                                <p className="mt-1 text-xs text-brand-text">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="mt-5 text-center text-[11px] text-brand-text">
                                Temsili içerik görseli
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
