import type { Metadata } from "next";
import PlatformView from "@/views/PlatformView";

export const metadata: Metadata = {
    title: "Platform Özellikleri | EnneagramDigital",
    description:
        "EnneagramDigital platformunu keşfedin. Mizaç değerlendirmeleri, detaylı raporlar, öğrenci takibi, rehberlik içerikleri ve farklı kullanıcı rolleri hakkında bilgi alın.",
};

export default function FeaturesPage() {
    return <PlatformView />;
}
