"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { temperamentTypes } from "@/data/individual";

export default function TemperamentExplorer() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        DOKUZ MİZAÇ
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Dokuz farklı bakış açısı. Her biri kendine özgü.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Enneagram yaklaşımı, insanların davranış ve motivasyonlarını anlamak için
                        dokuz temel mizaç örüntüsünden yararlanır. Bu örüntüler insanları kesin
                        sınırlarla ayırmak için değil, bireysel farklılıklar üzerine düşünmek için
                        kullanılabilir.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {temperamentTypes.map((temperament) => (
                        <motion.article
                            key={temperament.number}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="group rounded-3xl border border-brand-border bg-brand-white p-7 transition-colors hover:border-brand-blue/30 sm:p-8"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-2xl font-extrabold text-brand-blue transition-colors group-hover:bg-brand-navy group-hover:text-white">
                                {temperament.number}
                            </div>

                            <h3 className="mt-7 text-xl font-extrabold text-brand-navy">
                                {temperament.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-brand-text">
                                {temperament.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
