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
        <section className="relative overflow-hidden bg-brand-white py-20 sm:py-24 lg:py-32">
            {/* Dekoratif arka plan */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-soft blur-3xl" />

            <Container>
                <div className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
                    {/* Sol içerik */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-brand-orange" />

                            <span className="text-xs font-semibold tracking-wide text-brand-text">
                                İNSAN ODAKLI DİJİTAL GELİŞİM
                            </span>
                        </div>

                        <h1 className="mt-8 max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
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
                                href="/iletisim"
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

                    {/* Sağ platform görseli */}
                    <HeroVisual />
                </div>
            </Container>
        </section>
    );
}
