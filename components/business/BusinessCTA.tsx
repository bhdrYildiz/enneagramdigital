import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function BusinessCTA() {
    return (
        <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-28">
            <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-blue/25 blur-[110px]" />

            <Container>
                <div className="relative mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                        KURUMSAL GELİŞİM
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Kurumunuzdaki insan potansiyelini daha yakından keşfedin.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
                        Her çalışanın kendine özgü güçlü yönleri, ihtiyaçları ve gelişim alanları
                        vardır. EnneagramDigital'in mizaç temelli yaklaşımını tanıyın; kurumunuzun
                        iletişim, liderlik ve çalışan gelişimi çalışmalarında nasıl
                        değerlendirilebileceğini birlikte konuşalım.
                    </p>

                    <Link
                        href="/iletisim?konu=kurumsal-demo"
                        className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                    >
                        Kurumsal Demo Talep Edin
                        <HiArrowUpRight size={19} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
