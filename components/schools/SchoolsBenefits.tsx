import Container from "@/components/ui/Container";
import { schoolBenefits } from "@/data/schools";

export default function SchoolsBenefits() {
    return (
        <section className="bg-brand-white py-20 sm:py-28">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        EĞİTİMDE BİREYSEL FARKLILIKLAR
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Her öğrenci aynı şekilde öğrenmez, hissetmez ve gelişmez.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Eğitimde öğrencilerin farklılıklarını dikkate almak, yalnızca akademik
                        başarılarını artırmaya çalışmak değildir. Onların kendilerini nasıl
                        gördüklerini, hangi durumlarda zorlandıklarını ve nelerden güç aldıklarını
                        anlamak da bu yaklaşımın önemli bir parçasıdır.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {schoolBenefits.map((benefit) => (
                        <article
                            key={benefit.number}
                            className="group rounded-3xl border border-brand-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-9"
                        >
                            <span className="text-sm font-extrabold text-brand-orange">
                                {benefit.number}
                            </span>

                            <h3 className="mt-8 text-xl font-extrabold leading-snug tracking-tight text-brand-navy sm:text-2xl">
                                {benefit.title}
                            </h3>

                            <p className="mt-5 text-sm leading-8 text-brand-text">
                                {benefit.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
