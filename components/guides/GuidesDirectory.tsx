"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { HiArrowUpRight, HiBookOpen, HiClock, HiDocumentText } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { guideCategories, guides, type GuideCategory } from "@/data/guides";

type Props = {
    search: string;
    onClearFilters: () => void;
};

export default function GuidesDirectory({ search, onClearFilters }: Props) {
    const [category, setCategory] = useState<GuideCategory>("all");

    const filteredGuides = useMemo(() => {
        const query = search.toLocaleLowerCase("tr-TR").trim();

        return guides.filter((guide) => {
            const matchesCategory = category === "all" || guide.category === category;

            const content = [
                guide.title,
                guide.description,
                ...guide.steps.flatMap((step) => [step.title, step.description]),
            ]
                .join(" ")
                .toLocaleLowerCase("tr-TR");

            return matchesCategory && (!query || content.includes(query));
        });
    }, [category, search]);

    return (
        <section id="kilavuz-listesi" className="bg-brand-white py-20 sm:py-24">
            <Container>
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                            REHBER KÜTÜPHANESİ
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                            İhtiyacınıza uygun kılavuzu bulun.
                        </h2>

                        <p className="mt-5 text-sm leading-8 text-brand-text sm:text-base">
                            Konulara göre filtreleyin, arama yapın ve ilgili rehberin adımlarını
                            inceleyin.
                        </p>
                    </div>

                    <span className="text-sm font-semibold text-brand-text">
                        {filteredGuides.length} kılavuz bulundu
                    </span>
                </div>

                <div
                    role="group"
                    aria-label="Kılavuz kategorileri"
                    className="mt-10 flex flex-wrap gap-2"
                >
                    {guideCategories.map((item) => {
                        const active = category === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                aria-pressed={active}
                                onClick={() => setCategory(item.id)}
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

                {filteredGuides.length > 0 ? (
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredGuides.map((guide) => {
                            const categoryLabel =
                                guideCategories.find((item) => item.id === guide.category)?.label ??
                                "Kılavuz";

                            return (
                                <Link
                                    key={guide.id}
                                    href={`/kilavuzlar/${guide.id}`}
                                    className="group flex min-w-0 flex-col rounded-3xl border border-brand-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-soft p-3 text-brand-blue">
                                            <HiDocumentText size={26} />
                                        </div>

                                        <HiArrowUpRight
                                            size={21}
                                            className="text-brand-text/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-orange"
                                        />
                                    </div>

                                    <p className="mt-8 text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                                        {categoryLabel}
                                    </p>

                                    <h3 className="mt-3 text-xl font-extrabold leading-snug text-brand-navy">
                                        {guide.title}
                                    </h3>

                                    <p className="mt-4 flex-1 text-sm leading-7 text-brand-text">
                                        {guide.description}
                                    </p>

                                    <div className="mt-8 flex items-center justify-between border-t border-brand-border pt-5">
                                        <span className="flex items-center gap-2 text-xs font-semibold text-brand-text">
                                            <HiClock size={16} />
                                            {guide.readingTime}
                                        </span>

                                        <span className="flex items-center gap-2 text-xs font-extrabold text-brand-blue group-hover:text-brand-orange">
                                            <HiBookOpen size={16} />
                                            Rehberi Aç
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="mt-10 rounded-3xl border border-brand-border bg-white px-6 py-16 text-center">
                        <HiBookOpen size={36} className="mx-auto text-brand-blue" />

                        <h3 className="mt-5 text-xl font-extrabold text-brand-navy">
                            Aradığınız konuda kılavuz bulunamadı.
                        </h3>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-brand-text">
                            Farklı bir kelime deneyebilir veya tüm kategorilere geri dönebilirsiniz.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setCategory("all");
                                onClearFilters();
                            }}
                            className="mt-6 cursor-pointer rounded-xl bg-brand-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue"
                        >
                            Tüm Kategorileri Göster
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
}
