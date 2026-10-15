import type { Metadata } from "next";
import SupportView from "@/views/SupportView";

export const metadata: Metadata = {
    title: "Destek Merkezi | EnneagramDigital",
    description:
        "EnneagramDigital Destek Merkezi. Hesap erişimi, mizaç değerlendirmeleri, raporlar, okul yönetimi, rehberlik paneli ve teknik sorunlar hakkında sık sorulan soruların yanıtlarını bulun.",
};

export default function SupportPage() {
    return <SupportView />;
}
