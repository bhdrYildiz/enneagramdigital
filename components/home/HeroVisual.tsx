import {
    HiOutlineAcademicCap,
    HiOutlineChartBar,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
} from "react-icons/hi";

const metrics = [
    {
        label: "Mizaç Tipleri",
        value: "9",
        icon: HiOutlineUserGroup,
    },
    {
        label: "Gelişim Yaklaşımı",
        value: "360°",
        icon: HiOutlineTrendingUp,
    },
];

const features = [
    {
        title: "Mizaç Analizi",
        description: "Bireysel farklılıkları keşfedin.",
        icon: HiOutlineUserGroup,
    },
    {
        title: "Gelişim Raporları",
        description: "Sonuçları anlamlandırın.",
        icon: HiOutlineChartBar,
    },
    {
        title: "Eğitim ve Rehberlik",
        description: "Gelişim süreçlerini destekleyin.",
        icon: HiOutlineAcademicCap,
    },
];

export default function HeroVisual() {
    return (
        <div className="relative mx-auto w-full max-w-xl">
            {/* Arka plan */}
            <div className="absolute -inset-5 rounded-[3rem] bg-brand-soft blur-2xl" />

            {/* Ana panel */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-white p-5 shadow-2xl shadow-brand-navy/10 sm:p-7">
                {/* Panel başlığı */}
                <div className="flex items-center justify-between border-b border-brand-border pb-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-text">
                            EnneagramDigital
                        </p>

                        <h3 className="mt-2 text-lg font-bold text-brand-navy">
                            Platforma Genel Bakış
                        </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-text">
                        <HiOutlineChartBar size={23} />
                    </div>
                </div>

                {/* Bilgi kartları */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                    {metrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                            <div key={metric.label} className="rounded-2xl bg-brand-soft p-4">
                                <Icon size={22} className="text-brand-text" />

                                <p className="mt-4 text-3xl font-bold text-brand-navy">
                                    {metric.value}
                                </p>

                                <p className="mt-1 text-xs text-brand-text">{metric.label}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Özellik listesi */}
                <div className="mt-6">
                    <h4 className="mb-4 text-sm font-bold text-brand-navy">Platform Çözümleri</h4>

                    <div className="space-y-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="flex items-center gap-4 rounded-xl border border-brand-border p-3"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-text">
                                        <Icon size={21} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-brand-navy">
                                            {feature.title}
                                        </p>

                                        <p className="mt-1 text-xs text-brand-text">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <p className="mt-5 text-center text-[11px] text-brand-text/70">
                    Temsili platform önizlemesi
                </p>
            </div>
        </div>
    );
}
