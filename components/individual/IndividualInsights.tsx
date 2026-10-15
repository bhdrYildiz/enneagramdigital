import Container from "@/components/ui/Container";
import { individualInsights } from "@/data/individual";

export default function IndividualInsights() {
    return (
        <section id="bireysel-kesfet" className="bg-white py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        KENDİNİ TANIMAK
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Kendinizi ne kadar tanıyorsunuz?
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Kendimizi tanıdığımızı düşünürüz. Neleri sevdiğimizi, nelerden
                        hoşlanmadığımızı ve hangi konularda başarılı olduğumuzu biliriz. Peki,
                        davranışlarımızın arkasındaki ihtiyaçları ne kadar fark ediyoruz?
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {individualInsights.map((insight) => (
                        <article
                            key={insight.number}
                            className="rounded-3xl border border-brand-border bg-brand-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 sm:p-9"
                        >
                            <span className="text-sm font-extrabold text-brand-orange">
                                {insight.number}
                            </span>

                            <h3 className="mt-7 text-xl font-extrabold leading-snug text-brand-navy sm:text-2xl">
                                {insight.title}
                            </h3>

                            <p className="mt-5 text-sm leading-8 text-brand-text">
                                {insight.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
