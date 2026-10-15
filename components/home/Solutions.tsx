import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SolutionCard from "@/components/home/SolutionCard";

import { solutions } from "@/data/solutions";

export default function Solutions() {
    return (
        <section
            id="cozumler"
            aria-labelledby="solutions-title"
            className="relative bg-brand-white py-20 sm:py-24 lg:py-28"
        >
            <Container>
                {/* Bölüm başlığı */}
                <Reveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                            ÇÖZÜMLERİMİZ
                        </span>

                        <h2
                            id="solutions-title"
                            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
                        >
                            Farklı dünyalar.
                            <span className="block text-brand-orange">Ortak bir anlayış.</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-text">
                            Her insanın ve her kurumun ihtiyaçları farklıdır. EnneagramDigital, bu
                            farklılıkları anlamlandırmak için üç özel çözüm sunar.
                        </p>
                    </div>
                </Reveal>

                {/* Çözüm kartları */}
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={solution.id} {...solution} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
