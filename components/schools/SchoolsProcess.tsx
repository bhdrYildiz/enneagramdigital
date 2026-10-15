import Container from "@/components/ui/Container";
import { schoolSteps, schoolRoles } from "@/data/schools";

export default function SchoolsProcess() {
    return (
        <>
            <section className="bg-brand-soft py-20 sm:py-28">
                <Container>
                    <div className="max-w-3xl">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                            NASIL ÇALIŞIR?
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                            Tanıyın, anlayın, destekleyin ve gelişimi takip edin.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-brand-text">
                            Öğrenciyi tanımak tek başına yeterli değildir. Önemli olan, elde edilen
                            bilgileri öğrencinin gelişimini destekleyen planlı çalışmalara
                            dönüştürebilmektir.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {schoolSteps.map((step) => (
                            <article
                                key={step.number}
                                className="rounded-3xl border border-brand-border bg-white p-7 sm:p-9"
                            >
                                <span className="text-4xl font-extrabold tracking-tight text-brand-orange">
                                    {step.number}
                                </span>

                                <h3 className="mt-7 text-xl font-extrabold text-brand-navy sm:text-2xl">
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

            <section className="bg-brand-white py-20 sm:py-28">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                            KİMLER İÇİN?
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                            Aynı öğrenciyi destekleyen, farklı sorumluluklar.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-brand-text">
                            Öğrencinin gelişimi, okulun bütün paydaşlarının katkısıyla güçlenir.
                            EnneagramDigital, farklı kullanıcıların kendi görevleri doğrultusunda
                            öğrenciyi anlamasına ve gelişim sürecine katkı sunmasına yardımcı olur.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {schoolRoles.map((role) => (
                            <article
                                key={role.title}
                                className="rounded-3xl border border-brand-border bg-white p-7 transition-colors hover:border-brand-blue/30 sm:p-9"
                            >
                                <h3 className="text-xl font-extrabold text-brand-navy">
                                    {role.title}
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-brand-text">
                                    {role.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
