import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function SchoolsCTA() {
    return (
        <section className="bg-brand-navy py-20 text-white sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                        OKULUNUZ İÇİN YENİ BİR YAKLAŞIM
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                        Öğrencilerinizi daha yakından tanımaya hazır mısınız?
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
                        Her öğrencinin anlaşılmaya değer farklı bir dünyası vardır. EnneagramDigital
                        ile mizaç temelli değerlendirmelerin, rehberlik çalışmalarının ve öğrenci
                        takibinin okulunuzda nasıl bir araya gelebileceğini keşfedin.
                    </p>

                    <Link
                        href="/iletisim?konu=demo"
                        className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                    >
                        Okulunuz İçin Demo Talep Edin
                        <HiArrowUpRight size={19} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
