"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { HiArrowUpRight, HiPlus, HiMinus, HiChatBubbleLeftRight } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { faqs } from "@/data/faq";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const reduceMotion = useReducedMotion();

    return (
        <section id="sss" className="bg-brand-soft py-20 sm:py-28" aria-labelledby="faq-title">
            <Container>
                <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    {/* Sol alan */}
                    <div className="lg:sticky lg:top-28">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                            SIKÇA SORULAN SORULAR
                        </span>

                        <h2
                            id="faq-title"
                            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
                        >
                            Merak ettiğiniz
                            <span className="block text-brand-orange">bir şey mi var?</span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-8 text-brand-text">
                            EnneagramDigital&apos;in işleyişi, mizaç temelli yaklaşımı ve kullanım
                            süreciyle ilgili en çok merak edilen soruları burada yanıtladık.
                        </p>

                        {/* İletişim kartı */}
                        <div className="mt-10 max-w-md rounded-3xl border border-brand-border bg-white p-6 sm:p-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                <HiChatBubbleLeftRight size={24} />
                            </div>

                            <h3 className="mt-6 text-lg font-extrabold text-brand-navy">
                                Başka bir sorunuz mu var?
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-brand-text">
                                Demo görüşmesinde tüm sorularınızı birlikte değerlendirebiliriz.
                            </p>

                            <Link
                                href="/iletisim?konu=demo"
                                className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                            >
                                Demo Talep Et
                                <HiArrowUpRight
                                    size={19}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Sağ alan: Sorular */}
                    <div className="min-w-0 space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const answerId = `faq-answer-${faq.id}`;
                            const questionId = `faq-question-${faq.id}`;

                            return (
                                <div
                                    key={faq.id}
                                    className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                                        isOpen ? "border-brand-blue/30" : "border-brand-border"
                                    }`}
                                >
                                    <h3>
                                        <button
                                            id={questionId}
                                            type="button"
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex w-full cursor-pointer items-center gap-4 px-5 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-blue sm:gap-5 sm:px-7"
                                        >
                                            <span className="shrink-0 text-xs font-bold text-brand-orange">
                                                {faq.id}
                                            </span>

                                            <span className="min-w-0 flex-1 text-sm font-bold leading-6 text-brand-navy sm:text-base">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                                                    isOpen
                                                        ? "bg-brand-blue text-white"
                                                        : "bg-brand-soft text-brand-blue"
                                                }`}
                                            >
                                                {isOpen ? (
                                                    <HiMinus size={17} />
                                                ) : (
                                                    <HiPlus size={17} />
                                                )}
                                            </span>
                                        </button>
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                id={answerId}
                                                role="region"
                                                aria-labelledby={questionId}
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
                                                    duration: reduceMotion ? 0 : 0.3,
                                                    ease: "easeInOut",
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-7 pl-12 sm:px-7 sm:pl-16">
                                                    <p className="text-sm leading-7 text-brand-text">
                                                        {faq.answer}
                                                    </p>
                                                </div>
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
