"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    HiArrowRight,
    HiCheckCircle,
    HiChartBar,
    HiClipboardDocumentList,
    HiAcademicCap,
    HiBookOpen,
    HiUsers,
} from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { platformModules } from "@/data/platform";

const icons = [HiChartBar, HiClipboardDocumentList, HiAcademicCap, HiBookOpen, HiUsers];

export default function PlatformModules() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeModule = platformModules[activeIndex];
    const ActiveIcon = icons[activeIndex];

    return (
        <section id="platform-moduller" className="bg-brand-white py-20 sm:py-28">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        PLATFORM MODÜLLERİ
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        İhtiyacınız olan araçlar, bir arada.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        Değerlendirme, raporlama ve gelişim çalışmalarını ayrı ayrı yönetmek yerine
                        birbirini tamamlayan bir dijital yapı içinde ele alın. Aşağıdaki modülleri
                        seçerek sundukları imkânları inceleyin.
                    </p>
                </div>

                <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-10">
                    {/* Modül seçimi */}
                    <div
                        role="tablist"
                        aria-label="Platform modülleri"
                        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
                    >
                        {platformModules.map((module, index) => {
                            const Icon = icons[index];
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={module.id}
                                    type="button"
                                    role="tab"
                                    id={`platform-tab-${module.id}`}
                                    aria-selected={isActive}
                                    aria-controls="platform-module-panel"
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex min-w-[200px] shrink-0 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-200 lg:w-full lg:min-w-0 ${
                                        isActive
                                            ? "border-brand-blue bg-brand-navy text-white shadow-lg shadow-brand-navy/10"
                                            : "border-brand-border bg-white text-brand-navy hover:border-brand-blue/40"
                                    }`}
                                >
                                    <div
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                                            isActive
                                                ? "bg-white/10 text-brand-orange"
                                                : "bg-brand-soft text-brand-blue"
                                        }`}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <span
                                            className={`block text-[10px] font-extrabold tracking-wider ${
                                                isActive ? "text-white/60" : "text-brand-text"
                                            }`}
                                        >
                                            MODÜL {module.number}
                                        </span>

                                        <span className="mt-1 block text-sm font-extrabold">
                                            {module.eyebrow}
                                        </span>
                                    </div>

                                    <HiArrowRight
                                        size={16}
                                        className={
                                            isActive ? "text-brand-orange" : "text-brand-text/40"
                                        }
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Aktif modül */}
                    <div
                        id="platform-module-panel"
                        role="tabpanel"
                        aria-labelledby={`platform-tab-${activeModule.id}`}
                        className="min-w-0 overflow-hidden rounded-[28px] border border-brand-border bg-white"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={activeModule.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.22 }}
                                className="p-6 sm:p-9"
                            >
                                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
                                    {activeModule.eyebrow}
                                </p>

                                <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-3xl">
                                    {activeModule.title}
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-brand-text sm:text-base">
                                    {activeModule.description}
                                </p>

                                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {activeModule.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-2 text-sm leading-6 text-brand-navy"
                                        >
                                            <HiCheckCircle
                                                size={19}
                                                className="mt-0.5 shrink-0 text-brand-blue"
                                            />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Temsili ekran */}
                                <div className="mt-9 overflow-hidden rounded-2xl border border-brand-border bg-brand-soft">
                                    <div className="flex items-center gap-2 border-b border-brand-border bg-white px-4 py-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />

                                        <span className="ml-3 truncate text-[11px] font-bold text-brand-text">
                                            EnneagramDigital / {activeModule.eyebrow}
                                        </span>
                                    </div>

                                    <div className="p-5 sm:p-7">
                                        <div className="flex items-center gap-4 rounded-xl border border-brand-border bg-white p-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                                                <ActiveIcon size={28} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-extrabold text-brand-navy">
                                                    {activeModule.eyebrow}
                                                </p>
                                                <p className="mt-1 text-xs text-brand-text">
                                                    Dijital çalışma alanı
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                            {activeModule.points.slice(0, 2).map((point, index) => (
                                                <div
                                                    key={point}
                                                    className="rounded-xl border border-brand-border bg-white p-4"
                                                >
                                                    <span className="text-xs font-extrabold text-brand-orange">
                                                        0{index + 1}
                                                    </span>

                                                    <p className="mt-3 text-xs font-semibold leading-6 text-brand-navy">
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
