import Link from "next/link";
import {
    HiOutlineArrowRight,
    HiOutlineClock,
    HiOutlineExclamationCircle,
    HiOutlineDocumentText,
} from "react-icons/hi";

import Container from "@/components/ui/Container";

const missedOpportunities = [
    {
        icon: HiOutlineExclamationCircle,
        title: "Fark edilmeyen ihtiyaçlar",
        description:
            "Öğrencilerin bireysel farklılıkları yeterince " +
            "görünür olmadığında doğru yaklaşımı belirlemek zorlaşabilir.",
    },
    {
        icon: HiOutlineDocumentText,
        title: "Dağınık kalan bilgiler",
        description:
            "Görüşmeler ve değerlendirmeler farklı yerlerde " +
            "tutulduğunda bütüncül bir gelişim takibi zorlaşabilir.",
    },
    {
        icon: HiOutlineClock,
        title: "Kaçırılan gelişim fırsatları",
        description:
            "Düzenli izlenmeyen süreçlerde önemli değişimleri " +
            "ve destek ihtiyaçlarını zamanında fark etmek güçleşebilir.",
    },
];

export default function CTA() {
    return (
        <section className="bg-brand-white py-20 sm:py-24">
            <Container>
                <div className="relative overflow-hidden rounded-[28px] bg-brand-navy px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    {/* Arka plan detayları */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />

                    <div className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                                <span className="h-2 w-2 rounded-full bg-brand-orange" />

                                <span className="text-xs font-bold tracking-wide text-white/80">
                                    BUGÜN GÖREMEDİĞİNİZ, YARIN ÖNEMLİ OLABİLİR
                                </span>
                            </div>

                            <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Bir öğrenciyi yeterince tanımadan,
                                <span className="block text-brand-orange">
                                    ne kadarını değiştirebilirsiniz?
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                Her öğrencinin kendine özgü ihtiyaçları, güçlü yönleri ve gelişim
                                fırsatları vardır. Bunları görünür kılmayan süreçlerde önemli
                                ayrıntılar gözden kaçabilir.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-4 md:grid-cols-3">
                            {missedOpportunities.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                                            <Icon size={25} />
                                        </div>

                                        <h3 className="mt-5 text-lg font-bold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/65">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-9 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                                    Öğrencileri anlamak için daha fazla fırsatı kaçırmayın.
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/65">
                                    EnneagramDigital'in okulunuza nasıl uyarlanabileceğini birlikte
                                    değerlendirelim.
                                </p>
                            </div>

                            <Link
                                href="/iletisim?konu=demo"
                                className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-brand-orange px-7 py-4 text-sm font-extrabold text-brand-navy transition hover:-translate-y-0.5 hover:shadow-lg lg:self-auto"
                            >
                                Demo Talep Et
                                <HiOutlineArrowRight size={19} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
