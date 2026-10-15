"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { HiArrowUpRight, HiCheck, HiAcademicCap, HiBuildingOffice2, HiUser } from "react-icons/hi2";

type SolutionCardProps = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    href: string;
    index: number;
};

const icons = [HiAcademicCap, HiBuildingOffice2, HiUser];

export default function SolutionCard({
    id,
    title,
    subtitle,
    description,
    features,
    href,
    index,
}: SolutionCardProps) {
    const reduceMotion = useReducedMotion();

    const Icon = icons[index] ?? HiAcademicCap;

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: reduceMotion ? 0.15 : 0.55,
                delay: reduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
            }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-navy/10 sm:p-8"
        >
            {/* Üst numara ve ikon */}
            <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={27} />
                </div>

                <span className="text-5xl font-extrabold tracking-tight text-brand-navy/10">
                    {id}
                </span>
            </div>

            {/* Başlık ve açıklama */}
            <div className="mt-9">
                <h3 className="text-2xl font-extrabold tracking-tight text-brand-navy">{title}</h3>

                <p className="mt-3 text-base font-semibold leading-relaxed text-brand-blue">
                    {subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-brand-text">{description}</p>
            </div>

            {/* Özellikler */}
            <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-brand-text">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-blue">
                            <HiCheck size={13} />
                        </span>

                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Alt bağlantı */}
            <div className="mt-auto pt-10">
                <div className="mb-6 h-px w-full bg-brand-border" />

                <Link
                    href={href}
                    className="inline-flex min-h-11 items-center gap-3 text-sm font-bold text-brand-navy transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                >
                    Detayları Keşfet
                    <HiArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                </Link>
            </div>

            {/* Alt dekoratif çizgi */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
        </motion.article>
    );
}
