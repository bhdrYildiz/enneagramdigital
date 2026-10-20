import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavigationLoader from "@/components/shared/NavigationLoader";
import { Suspense } from "react";
import CookieConsent from "@/components/shared/CookieConsent";
import AnalyticsLoader from "@/components/shared/AnalyticsLoader";
import FloatingSocialMenu from "@/components/shared/FloatingSocialMenu";

import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: {
        default: "EnneagramDigital",
        template: "%s | EnneagramDigital",
    },
    description:
        "Okullar, kurumlar ve bireyler için mizaç temelli analiz, gelişim ve takip platformu.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="tr">
            <body
                className={`${manrope.variable} min-h-screen bg-brand-white text-brand-navy antialiased`}
            >
                <div className="flex min-h-screen flex-col">
                    <Suspense fallback={null}>
                        <NavigationLoader>
                            <Header />

                            {children}

                            <Footer />

                            <CookieConsent />
                            <FloatingSocialMenu />
                        </NavigationLoader>
                    </Suspense>

                    <Suspense fallback={null}>
                        <AnalyticsLoader />
                    </Suspense>
                </div>
            </body>
        </html>
    );
}
