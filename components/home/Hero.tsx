import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineCheckCircle } from "react-icons/hi";

import Container from "@/components/ui/Container";
import HeroVisual from "@/components/home/HeroVisual";

const highlights = [
    "Mizaç temelli analiz",
    "Kişiselleştirilmiş gelişim",
    "Dijital takip ve raporlama",
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-brand-white pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-24">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-soft blur-3xl" />
            <Container>
                <div className="relative grid min-w-0 items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-14">
                    {/* Sol içerik */}
                    <div className="min-w-0">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-orange" />

                            <span className="text-xs font-semibold tracking-wide text-brand-text">
                                İNSAN ODAKLI DİJİTAL GELİŞİM
                            </span>
                        </div>

                        <h1 className="mt-8 max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-navy sm:text-5xl lg:text-[clamp(2.5rem,4vw,3.75rem)]">
                            İnsanı anlamak,
                            <span className="block text-brand-orange">gelişimi dönüştürür.</span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-brand-text sm:text-lg">
                            Okullar, kurumlar ve bireyler için geliştirilen EnneagramDigital ile
                            mizaç farklılıklarını keşfedin, gelişim süreçlerini destekleyin ve
                            verileri anlamlı içgörülere dönüştürün.
                        </p>

                        {/* CTA butonları */}
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/ozellikler"
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-orange px-7 py-4 text-sm font-bold text-brand-navy transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Platformu Keşfet
                                <HiOutlineArrowRight size={19} />
                            </Link>

                            <Link
                                href="/iletisim?konu=demo"
                                className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-7 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:bg-brand-soft"
                            >
                                Demo Talep Et
                            </Link>
                        </div>

                        {/* Alt özellikler */}
                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                            {highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="flex items-center gap-2 text-sm text-brand-text"
                                >
                                    <HiOutlineCheckCircle
                                        size={19}
                                        className="shrink-0 text-brand-orange"
                                    />

                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sağ görsel galerisi */}
                    <HeroVisual />
                </div>
            </Container>
        </section>
    );
}
