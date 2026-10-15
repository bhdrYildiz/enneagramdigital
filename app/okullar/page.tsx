import type { Metadata } from "next";
import SchoolsView from "@/views/SchoolsView";

export const metadata: Metadata = {
    title: "Okullar İçin Mizaç Temelli Rehberlik | EnneagramDigital",
    description:
        "EnneagramDigital ile öğrencilerin bireysel özelliklerini keşfedin. Mizaç analizleri, öğrenci raporları, rehberlik görüşmeleri ve gelişim takibiyle okullar için dijital çözümleri inceleyin.",
};

export default function SchoolsPage() {
    return <SchoolsView />;
}
