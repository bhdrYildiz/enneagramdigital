"use client";

import Link from "next/link";
import { HiArrowUp, HiArrowUpRight } from "react-icons/hi2";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import Container from "@/components/ui/Container";

const footerGroups = [
    {
        title: "Platform",
        links: [
            { label: "Özellikler", href: "/#ozellikler" },
            { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
            { label: "Sıkça Sorulan Sorular", href: "/#sss" },
            { label: "Demo Talep Et", href: "/iletisim?konu=demo" },
        ],
    },
    {
        title: "Çözümler",
        links: [
            { label: "Okullar", href: "/okullar" },
            { label: "İş Dünyası", href: "/is-dunyasi" },
            { label: "Bireysel", href: "/bireysel" },
        ],
    },
    {
        title: "Destek",
        links: [
            { label: "İletişim", href: "/iletisim" },
            { label: "Kullanım Kılavuzları", href: "/kilavuzlar" },
            { label: "Destek Merkezi", href: "/destek" },
        ],
    },
    {
        title: "Yasal",
        links: [
            { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
            { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
            { label: "Çerez Politikası", href: "/cerez-politikasi" },
        ],
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "",
        icon: FaInstagram,
    },
    {
        label: "LinkedIn",
        href: "",
        icon: FaLinkedinIn,
    },
    {
        label: "YouTube",
        href: "",
        icon: FaYoutube,
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="border-t border-brand-border bg-brand-white">
            <Container>
                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1.9fr] lg:gap-20">
                    {/* Marka alanı */}
                    <div className="max-w-sm">
                        <Link
                            href="/"
                            aria-label="EnneagramDigital ana sayfa"
                            className="inline-flex items-center text-2xl font-extrabold tracking-[-0.06em] sm:text-[28px]"
                        >
                            <span className="text-brand-navy">enneagram</span>
                            <span className="text-brand-orange">digital.</span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-brand-text">
                            İnsanı anlamakla başlayan dijital dönüşüm. Mizaç temelli analizler ve
                            gelişim çözümleriyle bireysel farklılıklara yeni bir bakış açısı.
                        </p>

                        {/* Sosyal medya */}
                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return social.href ? (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-blue transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ) : (
                                    <span
                                        key={social.label}
                                        title={`${social.label} bağlantısı henüz eklenmedi`}
                                        aria-hidden="true"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-text/40"
                                    >
                                        <Icon size={18} />
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer linkleri */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-8">
                        {footerGroups.map((group) => (
                            <div key={group.title} className="min-w-0">
                                <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-navy">
                                    {group.title}
                                </h3>

                                <ul className="mt-6 space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group inline-flex items-start gap-1 text-sm leading-6 text-brand-text transition-colors duration-200 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                                            >
                                                <span>{link.label}</span>

                                                <HiArrowUpRight
                                                    size={13}
                                                    className="mt-1 shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alt çizgi */}
                <div className="border-t border-brand-border py-6">
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-xs leading-6 text-brand-text">
                            © 2026 EnneagramDigital. Tüm hakları saklıdır.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
