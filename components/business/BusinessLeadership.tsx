import { HiArrowUpRight, HiBuildingOffice2, HiUserGroup, HiUsers } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { businessAudiences } from "@/data/business";

const icons = [HiUsers, HiUserGroup, HiBuildingOffice2];

export default function BusinessLeadership() {
    return (
        <section className="bg-brand-soft py-20 sm:py-28">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        KİMLER İÇİN?
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Kurumunuzdaki her rol için farklı bir bakış açısı.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        İnsan kaynaklarından üst yönetime kadar her birimin çalışanlarla kurduğu
                        ilişki farklıdır. EnneagramDigital, insanı anlamaya yönelik yaklaşımıyla bu
                        farklı sorumluluklara gelişim odaklı katkılar sunmayı amaçlar.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {businessAudiences.map((audience, index) => {
                        const Icon = icons[index];

                        return (
                            <article
                                key={audience.number}
                                className="group flex flex-col rounded-3xl border border-brand-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 sm:p-9"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                        <Icon size={27} />
                                    </div>

                                    <HiArrowUpRight
                                        size={20}
                                        className="text-brand-text/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-orange"
                                    />
                                </div>

                                <h3 className="mt-8 text-xl font-extrabold leading-snug text-brand-navy sm:text-2xl">
                                    {audience.title}
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-brand-text">
                                    {audience.description}
                                </p>

                                <ul className="mt-7 space-y-3 border-t border-brand-border pt-6">
                                    {audience.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-2 text-sm leading-6 text-brand-navy"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
