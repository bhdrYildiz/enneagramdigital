"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    HiOutlineShieldCheck,
    HiOutlineAdjustmentsHorizontal,
    HiOutlineXMark,
} from "react-icons/hi2";

import { getCookieConsent, saveCookieConsent } from "@/lib/cookieConsent";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    useEffect(() => {
        const consent = getCookieConsent();

        if (!consent) {
            setVisible(true);
        } else {
            setAnalyticsEnabled(consent.analytics);
        }

        const openSettings = () => {
            const current = getCookieConsent();

            setAnalyticsEnabled(current?.analytics ?? false);
            setSettingsOpen(true);
            setVisible(true);
        };

        window.addEventListener("open-cookie-settings", openSettings);

        return () => {
            window.removeEventListener("open-cookie-settings", openSettings);
        };
    }, []);

    function applyConsent(analytics: boolean) {
        const previous = getCookieConsent();
        const wasEnabled = previous?.analytics === true;

        saveCookieConsent(analytics);
        setAnalyticsEnabled(analytics);
        setSettingsOpen(false);
        setVisible(false);

        if (wasEnabled && !analytics) {
            // Daha önce yüklenen Analytics betiklerini ve
            // mevcut sayfa içi izlemeyi durdurmak için.
            window.location.reload();
            return;
        }

        window.dispatchEvent(
            new CustomEvent("cookie-consent-updated", {
                detail: { analytics },
            }),
        );
    }

    if (!visible) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5">
            <div className="mx-auto max-w-3xl rounded-[24px] border border-brand-border bg-white p-5 shadow-2xl shadow-brand-navy/20 sm:p-7">
                <div className="flex items-start gap-4">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue sm:flex">
                        <HiOutlineShieldCheck size={26} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="text-lg font-extrabold text-brand-navy">
                                Gizliliğiniz bizim için önemli
                            </h2>

                            {getCookieConsent() && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setVisible(false);
                                        setSettingsOpen(false);
                                    }}
                                    aria-label="Çerez panelini kapat"
                                    className="text-brand-text transition hover:text-brand-navy"
                                >
                                    <HiOutlineXMark size={21} />
                                </button>
                            )}
                        </div>

                        <p className="mt-3 text-sm leading-7 text-brand-text">
                            Sitemizin temel işlevleri için gerekli teknolojileri kullanıyoruz.
                            İzninizle Google Analytics aracılığıyla site kullanımını analiz
                            edebiliriz. Tercihlerinizi istediğiniz zaman değiştirebilirsiniz.{" "}
                            <Link
                                href="/cerez-politikasi"
                                className="font-bold text-brand-blue underline underline-offset-4"
                            >
                                Çerez Politikası
                            </Link>
                        </p>

                        {settingsOpen && (
                            <div className="mt-5 space-y-4 rounded-2xl border border-brand-border bg-brand-white p-4">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-extrabold text-brand-navy">
                                            Zorunlu teknolojiler
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-brand-text">
                                            Çerez tercihinizin hatırlanması gibi temel işlevler için
                                            kullanılır.
                                        </p>
                                    </div>

                                    <span className="shrink-0 text-xs font-bold text-brand-blue">
                                        Aktif
                                    </span>
                                </div>

                                <div className="border-t border-brand-border pt-4">
                                    <label className="flex cursor-pointer items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-extrabold text-brand-navy">
                                                Analitik çerezler
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-brand-text">
                                                Google Analytics ile site kullanımının analiz
                                                edilmesine izin verir.
                                            </p>
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={analyticsEnabled}
                                            onChange={(event) =>
                                                setAnalyticsEnabled(event.target.checked)
                                            }
                                            aria-label="Analitik çerezlere izin ver"
                                            className="h-5 w-5 shrink-0 accent-brand-blue"
                                        />
                                    </label>
                                </div>
                            </div>
                        )}

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            {settingsOpen ? (
                                <button
                                    type="button"
                                    onClick={() => applyConsent(analyticsEnabled)}
                                    className="rounded-xl bg-brand-navy px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-blue"
                                >
                                    Tercihlerimi Kaydet
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => applyConsent(true)}
                                        className="rounded-xl bg-brand-navy px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-blue"
                                    >
                                        Kabul Et
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => applyConsent(false)}
                                        className="rounded-xl border border-brand-border px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-soft"
                                    >
                                        Reddet
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setSettingsOpen(true)}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-brand-blue transition hover:bg-brand-soft"
                                    >
                                        <HiOutlineAdjustmentsHorizontal size={19} />
                                        Tercihleri Yönet
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
