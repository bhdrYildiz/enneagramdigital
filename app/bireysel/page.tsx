import type { Metadata } from "next";
import IndividualView from "@/views/IndividualView";

export const metadata: Metadata = {
    title: "Bireysel Mizaç Analizi ve Kendini Tanıma | EnneagramDigital",
    description:
        "EnneagramDigital ile mizaç özelliklerinizi keşfedin. Güçlü yönlerinizi, motivasyonlarınızı, ilişkilerinizi ve kişisel gelişim alanlarınızı daha yakından tanıyın.",
};

export default function IndividualPage() {
    return <IndividualView />;
}
