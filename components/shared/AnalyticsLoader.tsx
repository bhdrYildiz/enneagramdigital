"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { getCookieConsent } from "@/lib/cookieConsent";

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

let analyticsInitialized = false;

function initializeAnalytics() {
    if (!measurementId || analyticsInitialized || getCookieConsent()?.analytics !== true) {
        return;
    }

    analyticsInitialized = true;

    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: unknown[]) {
        window.dataLayer?.push(args);
    };

    window.gtag("js", new Date());

    window.gtag("config", measurementId, {
        send_page_view: false,
    });

    const script = document.createElement("script");

    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;

    document.head.appendChild(script);
}

export default function AnalyticsLoader() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();

    useEffect(() => {
        const updateAnalytics = () => {
            if (getCookieConsent()?.analytics === true) {
                initializeAnalytics();
            }
        };

        updateAnalytics();

        window.addEventListener("cookie-consent-updated", updateAnalytics);

        return () => {
            window.removeEventListener("cookie-consent-updated", updateAnalytics);
        };
    }, []);

    useEffect(() => {
        const sendPageView = () => {
            if (!measurementId || getCookieConsent()?.analytics !== true) {
                return;
            }

            initializeAnalytics();

            window.gtag?.("event", "page_view", {
                page_path: `${pathname}${search ? `?${search}` : ""}`,
                page_location: window.location.href,
                page_title: document.title,
            });
        };

        sendPageView();

        window.addEventListener("cookie-consent-updated", sendPageView);

        return () => {
            window.removeEventListener("cookie-consent-updated", sendPageView);
        };
    }, [pathname, search]);

    return null;
}
