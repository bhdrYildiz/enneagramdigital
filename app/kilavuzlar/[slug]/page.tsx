import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowUpRight, HiBookOpen, HiClock } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { guides, guideCategories } from "@/data/guides";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const guide = guides.find((item) => item.id === slug);

    if (!guide) {
        return {
            title: "Kılavuz Bulunamadı | EnneagramDigital",
        };
    }

    return {
        title: `${guide.title} | EnneagramDigital`,
        description: guide.description,
    };
}

export default async function GuideDetailPage({ params }: Props) {
    const { slug } = await params;

    const guide = guides.find((item) => item.id === slug);

    if (!guide) {
        notFound();
    }

    const categoryLabel =
        guideCategories.find((item) => item.id === guide.category)?.label ?? "Kılavuz";

    return (
        <main className="bg-brand-white">
            <section className="bg-brand-navy py-16 text-white sm:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <Link
                            href="/kilavuzlar"
                            className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-brand-orange"
                        >
                            <HiArrowLeft size={17} />
                            Tüm Kılavuzlar
                        </Link>

                        <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                            {categoryLabel}
                        </p>

                        <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            {guide.title}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                            {guide.description}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/70">
                            <span className="inline-flex items-center gap-2">
                                <HiClock size={18} />
                                {guide.readingTime} okuma
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <HiBookOpen size={18} />
                                {guide.steps.length} adım
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 sm:py-24">
                <Container>
                    <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
                        <aside className="lg:sticky lg:top-28 lg:self-start">
                            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue">
                                BU KILAVUZDA
                            </p>

                            <nav aria-label="Kılavuz içeriği" className="space-y-2">
                                {guide.steps.map((step, index) => (
                                    <a
                                        key={step.title}
                                        href={`#adim-${index + 1}`}
                                        className="block rounded-xl px-3 py-3 text-sm font-semibold leading-6 text-brand-text transition-colors hover:bg-brand-soft hover:text-brand-navy"
                                    >
                                        <span className="mr-2 text-brand-orange">0{index + 1}</span>

                                        {step.title}
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        <div className="min-w-0">
                            <div className="rounded-2xl border border-brand-border bg-brand-soft p-6 sm:p-8">
                                <p className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                                    BAŞLAMADAN ÖNCE
                                </p>

                                <p className="mt-4 text-sm leading-8 text-brand-text">
                                    Bu rehber, EnneagramDigital'in kullanım yaklaşımını ve ilgili
                                    süreçlerde dikkat edilmesi gereken noktaları açıklar. Gerçek
                                    panel ekranları ve işlem adımları, kullanılan modül ve kullanıcı
                                    yetkilerine göre farklılaşabilir.
                                </p>
                            </div>

                            <div className="mt-12 space-y-12">
                                {guide.steps.map((step, index) => (
                                    <article
                                        key={step.title}
                                        id={`adim-${index + 1}`}
                                        className="scroll-mt-28 border-b border-brand-border pb-12 last:border-b-0"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-sm font-extrabold text-white">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                                                ADIM {index + 1}
                                            </span>
                                        </div>

                                        <h2 className="mt-6 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
                                            {step.title}
                                        </h2>

                                        <p className="mt-5 text-base leading-9 text-brand-text">
                                            {step.description}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-10 rounded-3xl bg-brand-navy p-7 text-white sm:p-9">
                                <h2 className="text-xl font-extrabold">
                                    Daha fazla yardıma mı ihtiyacınız var?
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-white/75">
                                    Bu kılavuzda yanıtını bulamadığınız konular için destek
                                    merkezimizi ziyaret edebilirsiniz.
                                </p>

                                <Link
                                    href="/destek"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-orange hover:underline"
                                >
                                    Destek Merkezine Git
                                    <HiArrowUpRight size={17} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
