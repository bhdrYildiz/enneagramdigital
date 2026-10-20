"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlinePhotograph } from "react-icons/hi";

const screens = [
    {
        id: "ekran1",
        title: "Platform Ekranı 01",
        image: "/images/how-it-works/ekran1.png",
    },
    {
        id: "ekran2",
        title: "Platform Ekranı 02",
        image: "/images/how-it-works/ekran2.png",
    },
    {
        id: "ekran3",
        title: "Platform Ekranı 03",
        image: "/images/how-it-works/ekran3.png",
    },
    {
        id: "ekran4",
        title: "Platform Ekranı 04",
        image: "/images/how-it-works/ekran4.png",
    },
    {
        id: "ekran5",
        title: "Platform Ekranı 05",
        image: "/images/how-it-works/ekran5.png",
    },
];

export default function HeroVisual() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeScreen = screens[activeIndex];

    function changeScreen(direction: number) {
        setActiveIndex((previous) => (previous + direction + screens.length) % screens.length);
    }

    return (
        <div className="relative mx-auto w-full min-w-0 max-w-3xl">
            <div className="pointer-events-none absolute -inset-5 rounded-[3rem] bg-brand-soft blur-3xl" />
            <div className="pointer-events-none absolute -right-3 top-8 h-20 w-20 rounded-full bg-brand-orange/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-brand-border bg-white shadow-2xl shadow-brand-navy/15">
                <div className="flex items-center justify-between gap-3 border-b border-brand-border bg-white px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>

                    <div className="min-w-0 max-w-[65%] truncate rounded-md bg-brand-soft px-4 py-1.5 text-center text-[10px] font-semibold text-brand-text sm:text-xs">
                        EnneagramDigital / Platform
                    </div>

                    <HiOutlinePhotograph size={17} className="shrink-0 text-brand-text/60" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-soft">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeScreen.id}
                            initial={{
                                opacity: 0,
                                scale: 1.025,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.985,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={activeScreen.image}
                                alt={activeScreen.title}
                                fill
                                priority={activeIndex === 0}
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Alt kontrol alanı */}
                <div className="flex items-center justify-between gap-3 border-t border-brand-border bg-white px-4 py-3 sm:px-5">
                    <div className="min-w-0">
                        <p className="truncate text-xs font-extrabold text-brand-navy sm:text-sm">
                            {activeScreen.title}
                        </p>

                        <p className="mt-1 text-[11px] text-brand-text">
                            {String(activeIndex + 1).padStart(2, "0")}
                            {" / "}
                            {String(screens.length).padStart(2, "0")}
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            onClick={() => changeScreen(-1)}
                            aria-label="Önceki platform ekranı"
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-brand-border text-brand-navy transition hover:border-brand-blue hover:bg-brand-soft"
                        >
                            <HiOutlineArrowLeft size={17} />
                        </button>

                        <button
                            type="button"
                            onClick={() => changeScreen(1)}
                            aria-label="Sonraki platform ekranı"
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-brand-navy text-white transition hover:bg-brand-blue"
                        >
                            <HiOutlineArrowRight size={17} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Küçük görsel galerisi */}
            <div
                className="relative mt-4 grid grid-cols-5 gap-2 sm:gap-3"
                aria-label="Platform ekran görüntüleri"
            >
                {screens.map((screen, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <button
                            key={screen.id}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`${screen.title} görselini göster`}
                            aria-pressed={isActive}
                            className={`relative aspect-[4/3] min-w-0 cursor-pointer overflow-hidden rounded-lg border-2 bg-white transition-all sm:rounded-xl ${
                                isActive
                                    ? "border-brand-orange shadow-lg shadow-brand-orange/10"
                                    : "border-brand-border opacity-65 hover:border-brand-blue hover:opacity-100"
                            }`}
                        >
                            <Image
                                src={screen.image}
                                alt=""
                                fill
                                sizes="(max-width: 640px) 18vw, 110px"
                                className="object-cover object-top"
                            />
                        </button>
                    );
                })}
            </div>

            {/* Galeri açıklaması */}
            <p className="relative mt-4 text-center text-xs leading-6 text-brand-text">
                Platformun farklı ekranlarını incelemek için küçük görsellere veya ok butonlarına
                tıklayın.
            </p>
        </div>
    );
}
