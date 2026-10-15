"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import Container from "@/components/ui/Container";
import { organizations } from "@/data/organizations";

export default function TrustedOrganizations() {
    const reduceMotion = useReducedMotion();

    const canScroll = organizations.length >= 5 && !reduceMotion;
    const visibleOrganizations = canScroll ? [...organizations, ...organizations] : organizations;

    return (
        <section
            id="referanslar"
            className="overflow-hidden bg-brand-white py-20 sm:py-28"
            aria-labelledby="organizations-title"
        >
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                        BİZE GÜVENEN KURUMLAR
                    </span>

                    <h2
                        id="organizations-title"
                        className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
                    >
                        Birlikte değer üretiyoruz.
                    </h2>

                    <p className="mt-5 text-base leading-8 text-brand-text">
                        EnneagramDigital ile bireysel farklılıkları anlamaya ve gelişimi
                        desteklemeye önem veren kurumlarla birlikte çalışıyoruz.
                    </p>
                </div>
            </Container>

            <div className="relative mx-auto mt-12 max-w-7xl overflow-hidden px-4 sm:mt-16">
                {organizations.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-brand-border bg-white px-6 py-12 text-center text-sm text-brand-text">
                        Kurum logoları eklendiğinde burada görüntülenecek.
                    </div>
                ) : (
                    <div
                        className={`overflow-hidden ${
                            canScroll
                                ? "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                                : ""
                        }`}
                    >
                        <motion.div
                            animate={canScroll ? { x: ["0%", "-50%"] } : undefined}
                            transition={
                                canScroll
                                    ? {
                                          duration: 30,
                                          repeat: Infinity,
                                          ease: "linear",
                                      }
                                    : undefined
                            }
                            whileHover={canScroll ? { animationPlayState: "paused" } : undefined}
                            className={`flex w-max items-center gap-5 ${
                                canScroll ? "" : "mx-auto flex-wrap justify-center"
                            }`}
                        >
                            {visibleOrganizations.map((organization, index) => (
                                <div
                                    key={`${organization.name}-${index}`}
                                    aria-hidden={canScroll && index >= organizations.length}
                                    className="flex h-28 w-44 shrink-0 items-center justify-center rounded-2xl border border-brand-border bg-white px-6 py-5 transition-colors hover:border-brand-blue/30 sm:h-32 sm:w-52"
                                >
                                    <Image
                                        src={organization.logo}
                                        alt={
                                            canScroll && index >= organizations.length
                                                ? ""
                                                : organization.name
                                        }
                                        width={160}
                                        height={80}
                                        className="max-h-16 w-auto max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
