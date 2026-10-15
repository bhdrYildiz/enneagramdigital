import Container from "@/components/ui/Container";
import { businessSteps } from "@/data/business";

export default function BusinessProcess() {
    return (
        <section className="bg-brand-white py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        NASIL ÇALIŞIR?
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Farkındalıktan gelişime uzanan bir yolculuk.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Kurumlarda gelişim, insanların kendilerini tanımasıyla başlayabilir. Bu
                        farkındalığın eğitimler ve uygulamalarla desteklenmesi, öğrenilenlerin
                        günlük iş hayatına taşınmasına yardımcı olur.
                    </p>
                </div>

                <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {businessSteps.map((step) => (
                        <article
                            key={step.number}
                            className="rounded-3xl border border-brand-border bg-white p-7 sm:p-8"
                        >
                            <span className="text-4xl font-extrabold tracking-tight text-brand-orange">
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

                <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-brand-text">
                    Mizaç değerlendirmeleri klinik tanı, işe alımda eleme veya çalışanların
                    performansını kesin olarak belirleme amacıyla kullanılmamalıdır. Sonuçlar,
                    bireysel farkındalık ve gelişim çalışmalarını destekleyen bilgiler olarak
                    değerlendirilmelidir.
                </p>
            </Container>
        </section>
    );
}
