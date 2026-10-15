"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type FeatureId = "analysis" | "reports" | "tracking";

type FeatureVisualProps = {
    activeId: FeatureId;
};

const chartValues = [42, 65, 48, 92, 58, 73, 55, 68, 46];

function AnalysisPreview() {
    const reduceMotion = useReducedMotion();

    const scores = [
        { type: 1, score: 36 },
        { type: 2, score: 48 },
        { type: 3, score: 57 },
        { type: 4, score: 91 },
        { type: 5, score: 75 },
        { type: 6, score: 42 },
        { type: 7, score: 54 },
        { type: 8, score: 29 },
        { type: 9, score: 45 },
    ];

    return (
        <div className="space-y-5">
            {/* Başlık */}
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-medium text-brand-text">Bireysel Analiz</p>

                    <h4 className="mt-1 text-lg font-bold text-brand-navy">Mizaç Profili</h4>
                </div>

                <span className="rounded-full bg-brand-soft px-3 py-2 text-xs font-semibold text-brand-blue">
                    9 Mizaç
                </span>
            </div>

            {/* Özet kartları */}
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-brand-soft p-4">
                    <p className="text-xs text-brand-text">Baskın Mizaç</p>

                    <p className="mt-2 text-3xl font-extrabold text-brand-navy">4</p>

                    <p className="mt-1 text-xs text-brand-blue">Örnek profil</p>
                </div>

                <div className="rounded-2xl bg-brand-soft p-4">
                    <p className="text-xs text-brand-text">Kanat</p>

                    <p className="mt-2 text-3xl font-extrabold text-brand-navy">5</p>

                    <p className="mt-1 text-xs text-brand-blue">Örnek profil</p>
                </div>
            </div>

            {/* Grafik */}
            <div className="rounded-2xl border border-brand-border p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                    <h5 className="text-sm font-bold text-brand-navy">Mizaç Dağılımı</h5>

                    <span className="text-[10px] text-brand-text">Temsili puanlar</span>
                </div>

                <div className="mt-5 grid h-36 grid-cols-9 items-end gap-1.5 sm:h-40 sm:gap-2">
                    {scores.map((item) => (
                        <div
                            key={item.type}
                            className="flex h-full min-w-0 flex-col items-center justify-end gap-2"
                        >
                            <div className="flex h-full w-full items-end">
                                <motion.div
                                    initial={{
                                        height: reduceMotion ? `${item.score}%` : "0%",
                                    }}
                                    animate={{
                                        height: `${item.score}%`,
                                    }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 0.75,
                                        delay: reduceMotion ? 0 : item.type * 0.06,
                                        ease: "easeOut",
                                    }}
                                    className={`w-full rounded-t-md ${
                                        item.type === 4 ? "bg-brand-orange" : "bg-brand-blue"
                                    }`}
                                    title={`Mizaç ${item.type}: ${item.score} temsili puan`}
                                />
                            </div>

                            <span className="text-[11px] font-semibold text-brand-text">
                                {item.type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ReportsPreview() {
    return (
        <div className="space-y-5">
            <h4 className="font-bold text-brand-navy">Gelişim Raporu</h4>

            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-brand-soft p-5">
                    <p className="text-xs text-brand-text">Analiz</p>
                    <p className="mt-3 text-2xl font-bold text-brand-navy">360°</p>
                </div>

                <div className="rounded-2xl bg-brand-soft p-5">
                    <p className="text-xs text-brand-text">Mizaç Tipleri</p>
                    <p className="mt-3 text-2xl font-bold text-brand-navy">9</p>
                </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-brand-border p-5">
                {[
                    { label: "Farkındalık", value: 85 },
                    { label: "Gelişim Alanları", value: 64 },
                    { label: "Kişisel İçgörü", value: 76 },
                ].map((item) => (
                    <div key={item.label}>
                        <div className="mb-2 flex justify-between text-xs text-brand-text">
                            <span>{item.label}</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-brand-soft">
                            <div
                                className="h-full rounded-full bg-brand-blue"
                                style={{ width: `${item.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TrackingPreview() {
    const tasks = [
        { title: "Öğrenci Görüşmesi", status: "Tamamlandı" },
        { title: "Gelişim Takibi", status: "Planlandı" },
        { title: "Rehberlik Çalışması", status: "Devam Ediyor" },
    ];

    return (
        <div className="space-y-5">
            <h4 className="font-bold text-brand-navy">Takip ve Yönetim</h4>

            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <div
                        key={task.title}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-brand-border bg-white p-4"
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-xs font-bold text-brand-blue">
                                0{index + 1}
                            </span>

                            <span className="truncate text-xs font-semibold text-brand-navy sm:text-sm">
                                {task.title}
                            </span>
                        </div>

                        <span className="shrink-0 text-[10px] text-brand-text">{task.status}</span>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl bg-brand-soft p-4 text-sm text-brand-blue">
                Planlama, kayıt ve takip tek noktada.
            </div>
        </div>
    );
}

export default function FeatureVisual({ activeId }: FeatureVisualProps) {
    const reduceMotion = useReducedMotion();

    const previews = {
        analysis: <AnalysisPreview />,
        reports: <ReportsPreview />,
        tracking: <TrackingPreview />,
    };

    return (
        <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-brand-border bg-white p-4 shadow-xl shadow-brand-navy/5 sm:p-6">
            <div className="mb-6 flex items-center gap-2 border-b border-brand-border pb-5">
                {(["analysis", "reports", "tracking"] as const).map((id) => (
                    <motion.span
                        key={id}
                        animate={{
                            width: activeId === id ? 26 : 12,
                            backgroundColor: activeId === id ? "#FF6E42" : "#EAF3F6",
                        }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.3,
                            ease: "easeInOut",
                        }}
                        className="h-3 rounded-full"
                    />
                ))}

                <span className="ml-auto text-xs text-brand-text">Platform Önizlemesi</span>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeId}
                    initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: reduceMotion ? 0 : -20,
                    }}
                    transition={{
                        duration: reduceMotion ? 0.1 : 0.35,
                    }}
                >
                    {previews[activeId]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
