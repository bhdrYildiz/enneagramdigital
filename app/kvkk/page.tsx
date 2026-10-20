import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { kvkkInformation } from "@/data/kvkk";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni | EnneagramDigital",
    description:
        "EnneagramDigital internet sitesinde kişisel verilerin işlenmesine ilişkin KVKK Aydınlatma Metni.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function KvkkPage() {
    return (
        <LegalPage
            eyebrow="YASAL BİLGİLENDİRME"
            title="KVKK Aydınlatma Metni"
            description="Kişisel verilerinizin hangi amaçlarla ve hangi esaslara göre işlendiği hakkında bilgilendirme."
            updatedAt={kvkkInformation.updatedAt}
            sections={kvkkInformation.sections}
        />
    );
}
