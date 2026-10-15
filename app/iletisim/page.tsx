import type { Metadata } from "next";
import ContactView from "@/views/ContactView";

export const metadata: Metadata = {
    title: "İletişim ve Demo Talebi | EnneagramDigital",
    description:
        "EnneagramDigital hakkında bilgi alın, okulunuz veya kurumunuz için demo talep edin. Mizaç analizi, raporlama ve dijital gelişim çözümlerimizi keşfedin.",
};

export default function ContactPage() {
    return <ContactView />;
}
