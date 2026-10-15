import type { Metadata } from "next";
import BusinessView from "@/views/BusinessView";

export const metadata: Metadata = {
    title: "İş Dünyası İçin Mizaç Temelli Gelişim | EnneagramDigital",
    description:
        "EnneagramDigital ile çalışan farkındalığı, ekip iletişimi, liderlik gelişimi ve kurumsal eğitim süreçlerine mizaç temelli bir bakış açısı kazandırın.",
};

export default function BusinessPage() {
    return <BusinessView />;
}
