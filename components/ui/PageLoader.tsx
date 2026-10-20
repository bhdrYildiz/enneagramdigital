export default function PageLoader() {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Sayfa yükleniyor"
            className="flex min-h-[65vh] flex-col items-center justify-center bg-brand-white px-6 text-center"
        >
            <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-brand-border border-t-brand-orange motion-reduce:animate-none" />

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy shadow-xl shadow-brand-navy/10">
                    <span className="text-3xl font-extrabold text-brand-orange">e.</span>
                </div>
            </div>

            <h2 className="mt-8 text-lg font-extrabold tracking-tight text-brand-navy">
                EnneagramDigital
            </h2>

            <p className="mt-2 text-sm text-brand-text">Sizin için hazırlanıyor...</p>

            <span className="sr-only">Lütfen bekleyin.</span>
        </div>
    );
}
