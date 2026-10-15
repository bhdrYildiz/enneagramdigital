"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiMinus, HiPlus } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { journeyFaqs } from "@/data/howItWorksPage";

export default function JourneyFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                            MERAK EDİLENLER
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                            Aklınızdaki sorulara birlikte bakalım.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-brand-text">
                            Platformu kullanmadan önce değerlendirme süreci, raporlar ve kullanım
                            alanları hakkında merak ettiklerinizi burada bulabilirsiniz.
                        </p>
                    </div>

                    <div className="divide-y divide-brand-border border-y border-brand-border">
                        {journeyFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const answerId = `journey-answer-${index}`;
                            const buttonId = `journey-question-${index}`;

                            return (
                                <div key={faq.question}>
                                    <h3>
                                        <button
                                            id={buttonId}
                                            type="button"
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left"
                                        >
                                            <span className="text-base font-extrabold leading-7 text-brand-navy sm:text-lg">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                                    isOpen
                                                        ? "bg-brand-navy text-white"
                                                        : "bg-brand-soft text-brand-blue"
                                                }`}
                                            >
                                                {isOpen ? (
                                                    <HiMinus size={18} />
                                                ) : (
                                                    <HiPlus size={18} />
                                                )}
                                            </span>
                                        </button>
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                id={answerId}
                                                role="region"
                                                aria-labelledby={buttonId}
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.25,
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="max-w-2xl pb-7 pr-10 text-sm leading-8 text-brand-text sm:text-base">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
