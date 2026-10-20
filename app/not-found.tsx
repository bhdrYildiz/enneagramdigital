import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-brand-white px-6 py-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-soft blur-3xl"
            />

            <div className="relative mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-white text-brand-orange shadow-sm">
                    <HiOutlineMagnifyingGlass size={30} />
                </div>

                <p className="mt-8 text-[clamp(6rem,20vw,11rem)] font-black leading-none tracking-[-0.09em] text-brand-navy">
                    4<span className="text-brand-orange">0</span>4
                </p>

                <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                    Aradığınız sayfayı bulamadık.
                </h1>

                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-brand-text sm:text-base">
                    Sayfa taşınmış, kaldırılmış veya adresi yanlış yazılmış olabilir. Ana sayfadan
                    keşfetmeye devam edebilirsiniz.
                </p>

                <div className="mt-9 flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-navy px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                    >
                        <HiOutlineArrowLeft size={18} />
                        Ana Sayfaya Dön
                    </Link>
                </div>

                <p className="mt-10 text-xs font-medium text-brand-text/70">
                    EnneagramDigital · İnsanı anlamakla başlayan dönüşüm
                </p>
            </div>
        </main>
    );
}
