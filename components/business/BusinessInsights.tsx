import Container from "@/components/ui/Container";
import { businessInsights } from "@/data/business";

export default function BusinessInsights() {
    return (
        <section className="bg-brand-white py-20 sm:py-28">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                            İŞ DÜNYASINDA İNSAN FAKTÖRÜ
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                            Aynı kurumda çalışmak, aynı şekilde düşünmek anlamına gelmez.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-brand-text">
                            İş hayatındaki farklılıklar bazen iletişimi zorlaştırabilir. Ancak
                            insanların olayları neden farklı değerlendirdiğini anlamaya çalışmak, bu
                            farklılıkları daha bilinçli yönetmenin ilk adımı olabilir.
                        </p>
                    </div>

                    <div className="divide-y divide-brand-border border-t border-brand-border">
                        {businessInsights.map((insight) => (
                            <article key={insight.number} className="py-9 sm:py-12">
                                <span className="text-sm font-extrabold text-brand-orange">
                                    {insight.number}
                                </span>

                                <h3 className="mt-5 text-xl font-extrabold leading-snug text-brand-navy sm:text-2xl">
                                    {insight.title}
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-brand-text sm:text-base">
                                    {insight.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
