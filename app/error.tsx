"use client";

import { useEffect } from "react";
import Link from "next/link";
import { HiOutlineArrowPath, HiOutlineExclamationTriangle, HiOutlineHome } from "react-icons/hi2";

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            console.error("Sayfa hatası:", error);
        }
    }, [error]);

    return (
        <main className="flex min-h-[75vh] items-center justify-center bg-brand-white px-6 py-20">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-50 text-brand-orange">
                    <HiOutlineExclamationTriangle size={38} />
                </div>

                <span className="mt-8 inline-block rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue">
                    BEKLENMEYEN BİR DURUM
                </span>

                <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                    Küçük bir aksilik yaşandı.
                </h1>

                <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-brand-text sm:text-base">
                    İstediğiniz sayfa görüntülenirken bir sorun oluştu. Tekrar deneyebilir veya ana
                    sayfaya dönebilirsiniz.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-blue"
                    >
                        <HiOutlineArrowPath size={19} />
                        Tekrar Dene
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-7 py-4 text-sm font-bold text-brand-navy transition hover:bg-brand-soft"
                    >
                        <HiOutlineHome size={19} />
                        Ana Sayfaya Dön
                    </Link>
                </div>

                <p className="mt-10 text-xs text-brand-text/60">
                    Sorun devam ederse destek ekibimizle iletişime geçebilirsiniz.
                </p>

                <Link
                    href="/destek"
                    className="mt-2 inline-block text-sm font-bold text-brand-blue underline underline-offset-4"
                >
                    Destek Merkezi
                </Link>
            </div>
        </main>
    );
}
