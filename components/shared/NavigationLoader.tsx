"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import PageLoader from "@/components/ui/PageLoader";

type NavigationContextType = {
    startNavigation: (href: string) => void;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function useNavigationLoader() {
    const context = useContext(NavigationContext);

    if (!context) {
        throw new Error("useNavigationLoader must be used within NavigationLoader");
    }

    return context;
}

export default function NavigationLoader({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(false);

    const targetRef = useRef<string | null>(null);

    const currentUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

    const startNavigation = useCallback(
        (href: string) => {
            const url = new URL(href, window.location.origin);

            const target = `${url.pathname}${url.search}`;

            if (target === currentUrl) {
                return;
            }

            targetRef.current = target;
            setLoading(true);
        },
        [currentUrl],
    );

    useEffect(() => {
        if (!loading || !targetRef.current) {
            return;
        }

        if (currentUrl === targetRef.current) {
            targetRef.current = null;
            setLoading(false);
        }
    }, [currentUrl, loading]);

    return (
        <NavigationContext.Provider value={{ startNavigation }}>
            {children}

            {loading && (
                <div className="fixed inset-0 z-[200] bg-brand-white">
                    <PageLoader />
                </div>
            )}
        </NavigationContext.Provider>
    );
}
