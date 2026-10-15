"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX, HiOutlineArrowRight } from "react-icons/hi";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-white/95 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between gap-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="shrink-0 text-xl font-extrabold tracking-tight text-brand-navy"
                    >
                        enneagram
                        <span className="text-brand-orange">digital.</span>
                    </Link>

                    {/* Masaüstü menüsü */}
                    <nav aria-label="Ana menü" className="hidden items-center gap-6 xl:flex">
                        {navigation.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                                        active ? "text-brand-orange" : "text-brand-navy"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Masaüstü CTA */}
                    <Link
                        href="/iletisim"
                        className="hidden items-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-brand-navy transition hover:opacity-90 xl:inline-flex"
                    >
                        Demo Talep Et
                        <HiOutlineArrowRight size={17} />
                    </Link>

                    {/* Mobil menü butonu */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center justify-center rounded-lg p-2 text-brand-navy xl:hidden"
                    >
                        {menuOpen ? <HiOutlineX size={27} /> : <HiOutlineMenu size={27} />}
                    </button>
                </div>

                {/* Mobil menü */}
                {menuOpen && (
                    <nav
                        id="mobile-navigation"
                        aria-label="Mobil menü"
                        className="border-t border-brand-border py-5 xl:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-brand-soft ${
                                        pathname === item.href
                                            ? "bg-brand-soft text-brand-blue"
                                            : "text-brand-navy"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link
                                href="/iletisim"
                                onClick={() => setMenuOpen(false)}
                                className="mt-4 rounded-xl bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-brand-navy"
                            >
                                Demo Talep Et
                            </Link>
                        </div>
                    </nav>
                )}
            </Container>
        </header>
    );
}
