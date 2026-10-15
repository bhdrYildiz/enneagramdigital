import Container from "@/components/ui/Container";
import { platformSteps } from "@/data/platform";

export default function PlatformProcess() {
    return (
        <section className="bg-brand-soft py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        KULLANIM SÜRECİ
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Başlamak için dört adım.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        EnneagramDigital'in sunduğu çözümleri ihtiyaçlarınıza göre
                        değerlendirebilir, mizaç analizlerinden elde edilen bilgileri farkındalık ve
                        gelişim çalışmalarında kullanabilirsiniz.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {platformSteps.map((step) => (
                        <article
                            key={step.number}
                            className="rounded-3xl border border-brand-border bg-white p-7 sm:p-8"
                        >
                            <span className="text-4xl font-extrabold text-brand-orange">
                                {step.number}
                            </span>

                            <h3 className="mt-7 text-xl font-extrabold text-brand-navy">
                                {step.title}
                            </h3>

                            <p className="mt-4 text-sm leading-8 text-brand-text">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
