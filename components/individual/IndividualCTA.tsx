import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function IndividualCTA() {
    return (
        <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-28">
            <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-blue/25 blur-[110px]" />

            <Container>
                <div className="relative mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                        KENDİNİ KEŞFET
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Kendinizi anlamaya bugün başlayın.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
                        Her insanın içinde keşfedilmeyi bekleyen farklı yönler vardır. Güçlü
                        yanlarınızı, ihtiyaçlarınızı ve davranış alışkanlıklarınızı daha yakından
                        tanımak için kendinize yeni sorular sorun. EnneagramDigital ile bu yolculuğa
                        ilk adımı atın.
                    </p>

                    <Link
                        href="/iletisim?konu=bireysel"
                        className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                    >
                        Kendini Keşfet
                        <HiArrowUpRight size={19} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
