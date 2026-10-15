"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { HiArrowUpRight, HiChevronDown, HiMagnifyingGlass } from "react-icons/hi2";

import Container from "@/components/ui/Container";

import { supportCategories, supportQuestions, type SupportCategory } from "@/data/support";

type Props = {
    search: string;
    onClearSearch: () => void;
};

export default function SupportCenter({ search, onClearSearch }: Props) {
    const [category, setCategory] = useState<SupportCategory>("all");

    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const filteredQuestions = useMemo(() => {
        const query = search.toLocaleLowerCase("tr-TR").trim();

        return supportQuestions.filter((item) => {
            const matchesCategory = category === "all" || item.category === category;

            const content = [item.question, item.answer].join(" ").toLocaleLowerCase("tr-TR");

            return matchesCategory && (!query || content.includes(query));
        });
    }, [category, search]);

    function resetFilters() {
        setCategory("all");
        setOpenQuestion(null);
        onClearSearch();
    }

    return (
        <section className="bg-brand-white py-20 sm:py-24">
            <Container>
                <div className="mx-auto max-w-5xl">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                            SIK SORULAN SORULAR
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                            Aradığınız yanıtı birlikte bulalım.
                        </h2>

                        <p className="mt-5 text-sm leading-8 text-brand-text sm:text-base">
                            İlgilendiğiniz kategoriyi seçin veya arama alanını kullanarak soruların
                            yanıtlarına ulaşın.
                        </p>
                    </div>

                    <div
                        role="group"
                        aria-label="Destek kategorileri"
                        className="mt-10 flex flex-wrap gap-2"
                    >
                        {supportCategories.map((item) => {
                            const active = category === item.id;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    aria-pressed={active}
                                    onClick={() => {
                                        setCategory(item.id);
                                        setOpenQuestion(null);
                                    }}
                                    className={`cursor-pointer rounded-full border px-4 py-2.5 text-xs font-extrabold transition-all sm:text-sm ${
                                        active
                                            ? "border-brand-navy bg-brand-navy text-white"
                                            : "border-brand-border bg-white text-brand-text hover:border-brand-blue hover:text-brand-blue"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    <p aria-live="polite" className="mt-8 text-sm font-semibold text-brand-text">
                        {filteredQuestions.length} soru bulundu
                    </p>

                    {filteredQuestions.length > 0 ? (
                        <div className="mt-5 space-y-3">
                            {filteredQuestions.map((item) => {
                                const isOpen = openQuestion === item.id;

                                const categoryLabel =
                                    supportCategories.find((entry) => entry.id === item.category)
                                        ?.label ?? "Destek";

                                const answerId = `support-answer-${item.id}`;

                                return (
                                    <article
                                        key={item.id}
                                        className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                                            isOpen ? "border-brand-blue/30" : "border-brand-border"
                                        }`}
                                    >
                                        <h3>
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={answerId}
                                                onClick={() =>
                                                    setOpenQuestion(isOpen ? null : item.id)
                                                }
                                                className="flex w-full cursor-pointer items-center justify-between gap-5 p-5 text-left sm:p-7"
                                            >
                                                <span className="min-w-0">
                                                    <span className="mb-2 block text-xs font-bold text-brand-blue">
                                                        {categoryLabel}
                                                    </span>

                                                    <span className="block text-base font-extrabold leading-7 text-brand-navy sm:text-lg">
                                                        {item.question}
                                                    </span>
                                                </span>

                                                <HiChevronDown
                                                    size={21}
                                                    className={`shrink-0 text-brand-blue transition-transform duration-200 ${
                                                        isOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                        </h3>

                                        {isOpen && (
                                            <div
                                                id={answerId}
                                                className="border-t border-brand-border px-5 pb-7 pt-5 sm:px-7"
                                            >
                                                <p className="text-sm leading-8 text-brand-text sm:text-base">
                                                    {item.answer}
                                                </p>

                                                {item.guideUrl && (
                                                    <Link
                                                        href={item.guideUrl}
                                                        className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue transition-colors hover:text-brand-orange"
                                                    >
                                                        İlgili Kılavuzu İncele
                                                        <HiArrowUpRight size={17} />
                                                    </Link>
                                                )}
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="mt-5 rounded-3xl border border-brand-border bg-white px-6 py-16 text-center">
                            <HiMagnifyingGlass size={38} className="mx-auto text-brand-blue" />

                            <h3 className="mt-5 text-xl font-extrabold text-brand-navy">
                                Aradığınız konuda sonuç bulunamadı.
                            </h3>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-brand-text">
                                Farklı bir kelime deneyebilir veya bütün destek konularını yeniden
                                görüntüleyebilirsiniz.
                            </p>

                            <button
                                type="button"
                                onClick={resetFilters}
                                className="mt-6 cursor-pointer rounded-xl bg-brand-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue"
                            >
                                Tüm Konuları Göster
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
