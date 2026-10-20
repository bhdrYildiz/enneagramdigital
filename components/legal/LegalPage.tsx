import Container from "@/components/ui/Container";

type LegalSection = {
    id: string;
    title: string;
    paragraphs: string[];
};

type LegalPageProps = {
    eyebrow: string;
    title: string;
    description: string;
    updatedAt: string;
    sections: LegalSection[];
};

export default function LegalPage({
    eyebrow,
    title,
    description,
    updatedAt,
    sections,
}: LegalPageProps) {
    return (
        <main className="bg-brand-white">
            <section className="relative overflow-hidden bg-brand-navy pb-16 pt-14 text-white sm:pb-20 sm:pt-20">
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />

                <Container>
                    <div className="relative max-w-3xl">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                            {eyebrow}
                        </p>

                        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                            {title}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                            {description}
                        </p>

                        <p className="mt-7 text-xs font-semibold text-white/55">
                            Son güncelleme: {updatedAt}
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-14 sm:py-20">
                <Container>
                    <div className="grid min-w-0 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
                        <aside className="hidden lg:block">
                            <nav
                                aria-label="Sayfa içeriği"
                                className="sticky top-28 rounded-2xl border border-brand-border bg-white p-6"
                            >
                                <p className="mb-5 text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                                    İÇİNDEKİLER
                                </p>

                                <div className="space-y-1">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block rounded-lg px-3 py-2 text-sm leading-6 text-brand-text transition hover:bg-brand-soft hover:text-brand-navy"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </aside>

                        <div className="min-w-0 rounded-[28px] border border-brand-border bg-white p-6 shadow-sm sm:p-10 lg:p-12">
                            <div className="space-y-11">
                                {sections.map((section) => (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-28"
                                    >
                                        <h2 className="text-xl font-extrabold leading-snug tracking-tight text-brand-navy sm:text-2xl">
                                            {section.title}
                                        </h2>

                                        <div className="mt-5 space-y-4">
                                            {section.paragraphs.map((paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="text-sm leading-8 text-brand-text sm:text-base"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            <div className="mt-12 border-t border-brand-border pt-8">
                                <p className="text-sm leading-7 text-brand-text">
                                    Kişisel verilerin korunmasına ilişkin sorularınız için iletişim
                                    sayfamız üzerinden bizimle bağlantı kurabilirsiniz.
                                </p>

                                <a
                                    href="/iletisim"
                                    className="mt-4 inline-flex items-center text-sm font-extrabold text-brand-blue underline underline-offset-4"
                                >
                                    İletişim sayfasına git
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
