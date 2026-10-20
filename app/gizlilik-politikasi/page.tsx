import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { privacyInformation } from "@/data/privacy";

export const metadata: Metadata = {
    title: "Gizlilik Politikası | EnneagramDigital",
    description:
        "EnneagramDigital internet sitesinin gizlilik yaklaşımı, kişisel verilerin kullanımı, veri güvenliği ve üçüncü taraf hizmetler hakkında bilgilendirme.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPage
            eyebrow="GİZLİLİK VE VERİ GÜVENLİĞİ"
            title="Gizlilik Politikası"
            description="Gizliliğinize önem veriyoruz. İnternet sitemizi kullanırken bilgilerinizin nasıl işlendiğini ve korunduğunu bu sayfadan öğrenebilirsiniz."
            updatedAt={privacyInformation.updatedAt}
            sections={privacyInformation.sections}
        />
    );
}
