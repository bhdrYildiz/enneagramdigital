import Link from "next/link";
import { HiArrowLeft, HiBookOpen } from "react-icons/hi2";

export default function GuideNotFound() {
    return (
        <main className="flex min-h-[65vh] items-center justify-center bg-brand-white px-5 py-20">
            <div className="max-w-lg text-center">
                <HiBookOpen size={48} className="mx-auto text-brand-blue" />

                <h1 className="mt-6 text-3xl font-extrabold text-brand-navy">
                    Aradığınız kılavuz bulunamadı.
                </h1>

                <p className="mt-5 text-base leading-8 text-brand-text">
                    Kılavuz kaldırılmış veya adresi değişmiş olabilir. Diğer rehberleri incelemek
                    için kılavuz merkezine dönebilirsiniz.
                </p>

                <Link
                    href="/kilavuzlar"
                    className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3 text-sm font-bold text-white"
                >
                    <HiArrowLeft size={18} />
                    Kılavuzlara Dön
                </Link>
            </div>
        </main>
    );
}
