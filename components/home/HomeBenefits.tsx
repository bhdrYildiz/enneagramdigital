import {
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineChartBar,
    HiOutlineCheckCircle,
} from "react-icons/hi";

import Container from "@/components/ui/Container";

const benefits = [
    {
        number: "01",
        icon: HiOutlineClock,
        label: "ZAMAN",
        title: "Takibe daha az, öğrenciye daha çok zaman.",
        description:
            "Öğrenci bilgilerini, değerlendirmeleri ve görüşme " +
            "kayıtlarını düzenli bir yapıda ele alın. Bilgiye ulaşmayı " +
            "ve süreçleri takip etmeyi kolaylaştırın.",
        points: ["Daha düzenli kayıt yönetimi", "Bilgiye daha kolay erişim"],
    },
    {
        number: "02",
        icon: HiOutlineEye,
        label: "FARKINDALIK",
        title: "Görünmeyen ihtiyaçları daha iyi fark edin.",
        description:
            "Her öğrencinin aynı şekilde motive olmadığını, " +
            "aynı ihtiyaçlara sahip olmadığını bilin. " +
            "Mizaç temelli içgörülerle bireysel farklılıkları " +
            "daha bilinçli değerlendirin.",
        points: ["Bireysel farklılıklara odaklanma", "Daha bilinçli iletişim"],
    },
    {
        number: "03",
        icon: HiOutlineChartBar,
        label: "GELİŞİM",
        title: "Yapılan çalışmaları görünür kılın.",
        description:
            "Değerlendirmeleri ve rehberlik çalışmalarını " +
            "tek seferlik işlemler olarak bırakmayın. " +
            "Gelişim süreçlerini daha planlı ve izlenebilir " +
            "bir yapıda destekleyin.",
        points: ["Planlı gelişim takibi", "Daha bütüncül değerlendirme"],
    },
];

export default function HomeBenefits() {
    return (
        <section className="border-y border-brand-border bg-white py-20 sm:py-24">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                        SİZE NE KAZANDIRIR?
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl">
                        Daha çok bilgi değil,
                        <span className="block text-brand-blue">daha anlamlı bir bakış açısı.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-text">
                        EnneagramDigital, okul yönetiminden sınıf içi iletişime ve rehberlik
                        çalışmalarına kadar gelişim süreçlerini daha bilinçli, düzenli ve
                        sürdürülebilir şekilde ele almanıza yardımcı olur.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <article
                                key={benefit.number}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-brand-border bg-brand-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-8"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                        <Icon size={27} />
                                    </div>

                                    <span className="text-sm font-extrabold text-brand-border">
                                        {benefit.number}
                                    </span>
                                </div>

                                <p className="mt-8 text-xs font-extrabold tracking-[0.16em] text-brand-orange">
                                    {benefit.label}
                                </p>

                                <h3 className="mt-3 text-xl font-extrabold leading-snug text-brand-navy">
                                    {benefit.title}
                                </h3>

                                <p className="mt-4 flex-1 text-sm leading-7 text-brand-text">
                                    {benefit.description}
                                </p>

                                <div className="mt-7 space-y-3 border-t border-brand-border pt-6">
                                    {benefit.points.map((point) => (
                                        <div
                                            key={point}
                                            className="flex items-center gap-2 text-sm font-medium text-brand-navy"
                                        >
                                            <HiOutlineCheckCircle
                                                size={18}
                                                className="shrink-0 text-brand-orange"
                                            />

                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
