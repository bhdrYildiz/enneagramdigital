import { HiCheckCircle } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import BusinessVisual from "./BusinessVisual";
import { businessSolutions } from "@/data/business";

export default function BusinessSolutions() {
    return (
        <section id="is-dunyasi-cozumler" className="bg-white py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        KURUMSAL ÇÖZÜMLER
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        İnsan odaklı kurumlar için gelişim çözümleri.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        EnneagramDigital, çalışanların kendilerini daha iyi tanımasına ve kurumların
                        iletişim, liderlik ve gelişim çalışmalarına yeni bir bakış açısı
                        kazandırmasına yardımcı olur.
                    </p>
                </div>

                <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
                    {businessSolutions.map((solution, index) => (
                        <article
                            key={solution.id}
                            className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16"
                        >
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
                                    {solution.eyebrow}
                                </p>

                                <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                                    {solution.title}
                                </h3>

                                <p className="mt-6 text-base leading-8 text-brand-text">
                                    {solution.description}
                                </p>

                                <ul className="mt-7 space-y-4">
                                    {solution.points.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <HiCheckCircle
                                                size={21}
                                                className="mt-0.5 shrink-0 text-brand-blue"
                                            />

                                            <span className="text-sm leading-7 text-brand-navy">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={index % 2 === 1 ? "min-w-0 lg:order-1" : "min-w-0"}>
                                <BusinessVisual type={solution.id} />
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
