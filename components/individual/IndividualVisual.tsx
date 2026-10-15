import {
    HiAcademicCap,
    HiChatBubbleLeftRight,
    HiHeart,
    HiLightBulb,
    HiSparkles,
} from "react-icons/hi2";

type IndividualVisualProps = {
    type: "temperament" | "awareness" | "relationships" | "growth";
};

const visualContent = {
    temperament: {
        title: "Mizaç Keşfi",
        subtitle: "Kendini tanımaya bir adım",
        icon: HiSparkles,
        items: ["Davranış eğilimleri", "Güçlü yönler", "Motivasyon kaynakları"],
    },
    awareness: {
        title: "Kişisel Farkındalık",
        subtitle: "Kendine yeni sorular sor",
        icon: HiLightBulb,
        items: ["Duyguları fark etmek", "Alışkanlıkları gözlemlemek", "İhtiyaçları anlamak"],
    },
    relationships: {
        title: "İlişkiler",
        subtitle: "Farklılıkları anlamaya çalış",
        icon: HiHeart,
        items: ["İletişim tercihleri", "Karşılıklı anlayış", "Empati ve farkındalık"],
    },
    growth: {
        title: "Kişisel Gelişim",
        subtitle: "Farkındalığı hayatına taşı",
        icon: HiAcademicCap,
        items: ["Gelişim hedefleri", "Yeni alışkanlıklar", "Kendini gözlemleme"],
    },
};

export default function IndividualVisual({ type }: IndividualVisualProps) {
    const content = visualContent[type];
    const Icon = content.icon;

    return (
        <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft p-5 sm:min-h-[420px] sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-orange/10 blur-3xl" />

            <div className="relative w-full max-w-md rounded-3xl border border-brand-border bg-white p-5 shadow-xl shadow-brand-navy/5 sm:p-7">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                        <Icon size={28} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-base font-extrabold text-brand-navy">{content.title}</p>

                        <p className="mt-1 text-xs leading-5 text-brand-text">{content.subtitle}</p>
                    </div>
                </div>

                <div className="mt-7 space-y-3">
                    {content.items.map((item, index) => (
                        <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl border border-brand-border px-4 py-4"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-blue">
                                <HiChatBubbleLeftRight size={19} />
                            </div>

                            <span className="min-w-0 flex-1 text-sm font-semibold text-brand-navy">
                                {item}
                            </span>

                            <span className="text-xs font-bold text-brand-orange">
                                0{index + 1}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-xl bg-brand-navy px-4 py-4 text-center">
                    <p className="text-xs font-semibold leading-6 text-white">
                        Kendini anlamak, gelişimin başlangıcıdır.
                    </p>
                </div>
            </div>
        </div>
    );
}
