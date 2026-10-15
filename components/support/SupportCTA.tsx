import Link from "next/link";

import { HiArrowUpRight, HiChatBubbleLeftRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function SupportCTA() {
    return (
        <section className="bg-brand-white py-20 sm:py-24">
            <Container>
                <div className="relative overflow-hidden rounded-[28px] bg-brand-navy p-8 text-white sm:p-12 lg:p-14">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-[90px]" />

                    <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_auto]">
                        <div className="max-w-2xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                                <HiChatBubbleLeftRight size={25} />
                            </div>

                            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                Sorununuz hâlâ çözülmedi mi?
                            </h2>

                            <p className="mt-5 text-sm leading-8 text-white/75 sm:text-base">
                                Karşılaştığınız sorunu bizimle paylaşabilirsiniz. Talebinizi daha
                                doğru değerlendirebilmemiz için ilgili sayfayı, hata mesajını ve
                                sorunun nasıl oluştuğunu açıklamanız yeterli.
                            </p>
                        </div>

                        <Link
                            href="/iletisim?konu=destek"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-1 hover:brightness-110"
                        >
                            Destek Talebi Oluştur
                            <HiArrowUpRight size={19} />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
