import {
    HiArrowTrendingUp,
    HiChatBubbleLeftRight,
    HiCheckCircle,
    HiLightBulb,
    HiUserGroup,
    HiUserCircle,
} from "react-icons/hi2";

type BusinessVisualProps = {
    type: "analysis" | "communication" | "leadership" | "development";
};

const visualContent = {
    analysis: {
        title: "Bireysel Farkındalık",
        subtitle: "Kendini tanıma yolculuğu",
        icon: HiUserCircle,
        items: ["Güçlü yönler", "Motivasyon kaynakları", "Gelişim alanları"],
    },
    communication: {
        title: "Ekip İletişimi",
        subtitle: "Birbirini anlamaya yönelik yaklaşım",
        icon: HiChatBubbleLeftRight,
        items: ["İletişim tercihleri", "Geri bildirim", "Birlikte çalışma"],
    },
    leadership: {
        title: "Liderlik Farkındalığı",
        subtitle: "Yönetim tarzını keşfetme",
        icon: HiUserGroup,
        items: ["Liderlik yaklaşımı", "Karar verme", "Ekip motivasyonu"],
    },
    development: {
        title: "Gelişim Yolculuğu",
        subtitle: "Farkındalıktan uygulamaya",
        icon: HiArrowTrendingUp,
        items: ["Kişisel farkındalık", "Gelişim çalışmaları", "Süreci değerlendirme"],
    },
};

export default function BusinessVisual({ type }: BusinessVisualProps) {
    const content = visualContent[type];
    const Icon = content.icon;

    return (
        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft p-5 sm:min-h-[420px] sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-blue/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-orange/10 blur-3xl" />

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
                                {index === 0 ? (
                                    <HiLightBulb size={19} />
                                ) : (
                                    <HiCheckCircle size={19} />
                                )}
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
                        Farklılıkları anlamak, birlikte gelişmenin başlangıcıdır.
                    </p>
                </div>
            </div>
        </div>
    );
}
