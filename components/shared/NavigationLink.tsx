"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { useNavigationLoader } from "@/components/shared/NavigationLoader";

type NavigationLinkProps = ComponentProps<typeof Link>;

export default function NavigationLink({ href, onClick, target, ...props }: NavigationLinkProps) {
    const { startNavigation } = useNavigationLoader();

    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
        onClick?.(event);

        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            target === "_blank"
        ) {
            return;
        }

        startNavigation(
            typeof href === "string"
                ? href
                : `${href.pathname ?? ""}${
                      href.query
                          ? `?${new URLSearchParams(
                                Object.entries(href.query).map(([key, value]) => [
                                    key,
                                    String(value),
                                ]),
                            )}`
                          : ""
                  }`,
        );
    }

    return <Link href={href} target={target} onClick={handleClick} {...props} />;
}
