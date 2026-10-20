export const COOKIE_CONSENT_KEY = "enneagramdigital-cookie-consent";

export type CookieConsent = {
    analytics: boolean;
    updatedAt: string;
};

export function getCookieConsent(): CookieConsent | null {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const stored = localStorage.getItem(COOKIE_CONSENT_KEY);

        if (!stored) {
            return null;
        }

        const parsed: unknown = JSON.parse(stored);

        if (
            typeof parsed !== "object" ||
            parsed === null ||
            !("analytics" in parsed) ||
            typeof parsed.analytics !== "boolean"
        ) {
            return null;
        }

        return {
            analytics: parsed.analytics,
            updatedAt:
                "updatedAt" in parsed && typeof parsed.updatedAt === "string"
                    ? parsed.updatedAt
                    : "",
        };
    } catch {
        return null;
    }
}

export function saveCookieConsent(analytics: boolean): void {
    const consent: CookieConsent = {
        analytics,
        updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}
