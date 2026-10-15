import { HiCursorArrowRays, HiRectangleGroup, HiAdjustmentsHorizontal } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { platformAdvantages } from "@/data/platform";

const icons = [HiCursorArrowRays, HiRectangleGroup, HiAdjustmentsHorizontal];

export default function PlatformAdvantages() {
    return (
        <section className="bg-brand-soft py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        NEDEN ENNEAGRAMDIGITAL?
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Teknolojiyi insanı anlamak için kullanıyoruz.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Dijital çözümler, insanlara karmaşık süreçler sunmak yerine günlük
                        çalışmalarını kolaylaştırmalıdır. EnneagramDigital, insan odaklı bir
                        yaklaşımı anlaşılır bir platform deneyimiyle buluşturmayı hedefler.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {platformAdvantages.map((advantage, index) => {
                        const Icon = icons[index];

                        return (
                            <article
                                key={advantage.title}
                                className="rounded-3xl border border-brand-border bg-white p-7 sm:p-9"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                    <Icon size={27} />
                                </div>

                                <h3 className="mt-7 text-xl font-extrabold text-brand-navy">
                                    {advantage.title}
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-brand-text">
                                    {advantage.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
