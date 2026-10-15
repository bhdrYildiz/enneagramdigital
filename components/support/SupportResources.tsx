import Link from "next/link";

import {
    HiArrowUpRight,
    HiBookOpen,
    HiComputerDesktop,
    HiQuestionMarkCircle,
} from "react-icons/hi2";

import Container from "@/components/ui/Container";

const resources = [
    {
        title: "Kullanım Kılavuzları",
        description:
            "Platformun kullanım yaklaşımını adım adım öğrenin. Mizaç değerlendirmesi, raporlar ve rehberlik süreçleri hakkında hazırlanan rehberleri inceleyin.",
        href: "/kilavuzlar",
        icon: HiBookOpen,
        action: "Kılavuzları İncele",
    },
    {
        title: "Platform Özellikleri",
        description:
            "EnneagramDigital'in değerlendirme, raporlama, takip ve gelişim süreçlerine yönelik çözümlerini daha yakından tanıyın.",
        href: "/ozellikler",
        icon: HiComputerDesktop,
        action: "Özellikleri Keşfet",
    },
    {
        title: "Nasıl Çalışır?",
        description:
            "Değerlendirmeden gelişim takibine uzanan yaklaşımımızı ve platformun kullanım sürecini dört temel adımda keşfedin.",
        href: "/nasil-calisir",
        icon: HiQuestionMarkCircle,
        action: "Süreci Öğren",
    },
];

export default function SupportResources() {
    return (
        <section className="bg-brand-soft py-20 sm:py-24">
            <Container>
                <div className="max-w-2xl">
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        YARDIMCI KAYNAKLAR
                    </p>

                    <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                        Daha fazlasını keşfedin.
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-brand-text sm:text-base">
                        EnneagramDigital'i öğrenmek ve ihtiyaç duyduğunuz bilgilere ulaşmak için
                        diğer kaynaklarımızdan da yararlanabilirsiniz.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {resources.map((resource) => {
                        const Icon = resource.icon;

                        return (
                            <Link
                                key={resource.href}
                                href={resource.href}
                                className="group flex min-w-0 flex-col rounded-3xl border border-brand-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-8"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                    <Icon size={27} />
                                </div>

                                <h3 className="mt-7 text-xl font-extrabold text-brand-navy">
                                    {resource.title}
                                </h3>

                                <p className="mt-4 flex-1 text-sm leading-8 text-brand-text">
                                    {resource.description}
                                </p>

                                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue transition-colors group-hover:text-brand-orange">
                                    {resource.action}
                                    <HiArrowUpRight size={18} />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
