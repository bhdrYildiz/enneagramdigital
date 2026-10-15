import Link from "next/link";
import { HiArrowUpRight, HiChatBubbleLeftRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";

export default function GuidesCTA() {
    return (
        <section className="bg-brand-soft py-20 sm:py-24">
            <Container>
                <div className="grid items-center gap-8 rounded-[28px] bg-brand-navy p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:p-14">
                    <div className="max-w-2xl">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                            <HiChatBubbleLeftRight size={25} />
                        </div>

                        <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                            Aradığınız yanıtı bulamadınız mı?
                        </h2>

                        <p className="mt-5 text-sm leading-8 text-white/75 sm:text-base">
                            Kılavuzlarda yer almayan bir konu hakkında bilgi almak veya platformun
                            kullanımına ilişkin sorularınızı iletmek için destek merkezimizi ziyaret
                            edebilirsiniz.
                        </p>
                    </div>

                    <Link
                        href="/destek"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-1 hover:brightness-110"
                    >
                        Destek Merkezine Git
                        <HiArrowUpRight size={19} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
