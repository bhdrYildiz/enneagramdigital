import Link from "next/link";
import { HiAcademicCap, HiBuildingOffice2, HiUser, HiArrowUpRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";

const audiences = [
    {
        title: "Okullar İçin",
        description:
            "Öğrencilerin bireysel farklılıklarını anlamak, mizaç değerlendirmelerini incelemek ve rehberlik çalışmalarını daha düzenli yürütmek isteyen eğitim kurumları için.",
        href: "/okullar",
        icon: HiAcademicCap,
    },
    {
        title: "İş Dünyası İçin",
        description:
            "Çalışan farkındalığını, ekip içi iletişimi, liderlik gelişimini ve insan odaklı kurumsal çalışmaları desteklemek isteyen şirketler için.",
        href: "/is-dunyasi",
        icon: HiBuildingOffice2,
    },
    {
        title: "Bireysel Kullanım",
        description:
            "Kendisini daha yakından tanımak, davranış eğilimlerini keşfetmek ve kişisel farkındalık yolculuğuna yeni bir bakış açısı kazandırmak isteyen herkes için.",
        href: "/bireysel",
        icon: HiUser,
    },
];

export default function PlatformAudience() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        KULLANIM ALANLARI
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Farklı ihtiyaçlar, ortak bir yaklaşım.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        EnneagramDigital, insanı anlamayı merkeze alan yaklaşımını farklı kullanım
                        alanlarına taşır. İhtiyacınıza uygun çözümü seçerek daha ayrıntılı bilgi
                        edinebilirsiniz.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {audiences.map((audience) => {
                        const Icon = audience.icon;

                        return (
                            <Link
                                key={audience.href}
                                href={audience.href}
                                className="group flex flex-col rounded-3xl border border-brand-border bg-brand-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-9"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                        <Icon size={27} />
                                    </div>

                                    <HiArrowUpRight
                                        size={21}
                                        className="text-brand-text/50 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-orange"
                                    />
                                </div>

                                <h3 className="mt-8 text-xl font-extrabold text-brand-navy">
                                    {audience.title}
                                </h3>

                                <p className="mt-5 flex-1 text-sm leading-8 text-brand-text">
                                    {audience.description}
                                </p>

                                <span className="mt-8 text-sm font-extrabold text-brand-blue transition-colors group-hover:text-brand-orange">
                                    Detayları İncele
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
