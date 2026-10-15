import type { Metadata } from "next";
import HowItWorksView from "@/views/HowItWorksView";

export const metadata: Metadata = {
    title: "Nasıl Çalışır? | EnneagramDigital",
    description:
        "EnneagramDigital'in nasıl çalıştığını keşfedin. Mizaç değerlendirmesi, raporlama, gelişim planlama ve takip süreçlerini adım adım inceleyin.",
};

export default function HowItWorksPage() {
    return <HowItWorksView />;
}
