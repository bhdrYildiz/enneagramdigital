import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { cookieInformation } from "@/data/cookies";

export const metadata: Metadata = {
    title: "Çerez Politikası | EnneagramDigital",
    description:
        "EnneagramDigital internet sitesinde kullanılan çerezler, Google Analytics ve çerez tercihleri hakkında bilgilendirme.",
};

export default function CookiePolicyPage() {
    return (
        <LegalPage
            eyebrow="ÇEREZLER VE TERCİHLER"
            title="Çerez Politikası"
            description="İnternet sitemizde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi edinebilir, tercihlerinizi yönetebilirsiniz."
            updatedAt={cookieInformation.updatedAt}
            sections={cookieInformation.sections}
        />
    );
}
