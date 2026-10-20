"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight, HiOutlineXMark } from "react-icons/hi2";

import { socialLinks, getWhatsAppUrl } from "@/data/socialLinks";

export default function FloatingSocialMenu() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const links = [
        {
            label: "WhatsApp",
            href: getWhatsAppUrl(),
            icon: FaWhatsapp,
            color: "bg-[#25D366]",
        },
        {
            label: "Instagram",
            href: socialLinks.instagram.url,
            icon: FaInstagram,
            color: "bg-[#C13584]",
        },
        {
            label: "YouTube",
            href: socialLinks.youtube.url,
            icon: FaYoutube,
            color: "bg-[#FF0033]",
        },
    ].filter((link) => Boolean(link.href));

    useEffect(() => {
        function handleOutsideClick(event: PointerEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    if (links.length === 0) {
        return null;
    }

    return (
        <div ref={containerRef} className="fixed bottom-5 right-4 z-50 sm:bottom-7 sm:right-7">
            <div
                id="floating-social-links"
                className={`absolute bottom-[calc(100%+14px)] right-0 flex flex-col items-end gap-3 transition-all duration-200 ${
                    open
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-3 opacity-0 pointer-events-none"
                }`}
            >
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={open ? 0 : -1}
                            onClick={() => setOpen(false)}
                            className="group flex items-center gap-3"
                            aria-label={`${link.label} üzerinden iletişime geç`}
                        >
                            <span className="rounded-lg border border-brand-border bg-white px-3 py-2 text-xs font-bold text-brand-navy shadow-md">
                                {link.label}
                            </span>

                            <span
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${link.color}`}
                            >
                                <Icon size={23} />
                            </span>
                        </a>
                    );
                })}
            </div>

            <button
                type="button"
                aria-label={open ? "Sosyal iletişim menüsünü kapat" : "Sosyal iletişim menüsünü aç"}
                aria-expanded={open}
                aria-controls="floating-social-links"
                onClick={() => setOpen((previous) => !previous)}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-xl shadow-brand-navy/25 transition-all duration-200 hover:-translate-y-1 hover:bg-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
            >
                {open ? <HiOutlineXMark size={26} /> : <HiOutlineChatBubbleLeftRight size={26} />}
            </button>
        </div>
    );
}
