import Link from "next/link";
import { HiAcademicCap, HiArrowUpRight, HiBuildingOffice2, HiUserCircle } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { journeyAudiences } from "@/data/howItWorksPage";

const icons = [HiAcademicCap, HiBuildingOffice2, HiUserCircle];

export default function JourneyAudience() {
    return (
        <section className="bg-brand-soft py-20 sm:py-28">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        FARKLI KULLANIM ALANLARI
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Aynı yaklaşım, farklı ihtiyaçlara uygun çözümler.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Bir okulun öğrencilerini tanıma ihtiyacıyla bir kurumun ekip gelişimini
                        destekleme amacı birbirinden farklıdır. Kendisini keşfetmek isteyen bireyin
                        beklentileri de aynı değildir. Bu nedenle EnneagramDigital'in kullanım
                        süreci, hedeflenen alana göre farklılaşır.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {journeyAudiences.map((audience, index) => {
                        const Icon = icons[index];

                        return (
                            <Link
                                key={audience.href}
                                href={audience.href}
                                className="group flex flex-col rounded-3xl border border-brand-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-9"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                        <Icon size={27} />
                                    </div>

                                    <HiArrowUpRight
                                        size={20}
                                        className="text-brand-text/50 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-orange"
                                    />
                                </div>

                                <span className="mt-8 text-xs font-extrabold text-brand-orange">
                                    {audience.number}
                                </span>

                                <h3 className="mt-3 text-2xl font-extrabold text-brand-navy">
                                    {audience.title}
                                </h3>

                                <p className="mt-5 flex-1 text-sm leading-8 text-brand-text">
                                    {audience.description}
                                </p>

                                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue transition-colors group-hover:text-brand-orange">
                                    {audience.action}
                                    <HiArrowUpRight size={16} />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
