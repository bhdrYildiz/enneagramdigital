import type { Metadata } from "next";
import GuidesView from "@/views/GuidesView";

export const metadata: Metadata = {
    title: "Kullanım Kılavuzları | EnneagramDigital",
    description:
        "EnneagramDigital kullanım kılavuzlarını keşfedin. Mizaç değerlendirmesi, raporlar, okul yönetimi, öğrenci takibi ve rehberlik çalışmaları hakkında adım adım bilgi alın.",
};

export default function GuidesPage() {
    return <GuidesView />;
}
