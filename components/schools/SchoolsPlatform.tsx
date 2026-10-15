import {
    HiCheckCircle,
    HiAcademicCap,
    HiClipboardDocumentList,
    HiBookOpen,
    HiUsers,
} from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { schoolFeatures } from "@/data/schools";

const icons = [HiAcademicCap, HiClipboardDocumentList, HiBookOpen, HiUsers];

export default function SchoolsPlatform() {
    return (
        <section id="okullar-ozellikler" className="bg-white py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                        OKULLAR İÇİN DİJİTAL ÇÖZÜMLER
                    </p>

                    <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                        Öğrenciyi tanımaktan gelişimini takip etmeye uzanan bir sistem.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-brand-text">
                        EnneagramDigital, mizaç analizlerini rehberlik süreçleriyle bir araya
                        getirerek okulların öğrencileri daha yakından tanımasına ve çalışmalarını
                        daha düzenli yürütmesine yardımcı olur.
                    </p>
                </div>

                <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
                    {schoolFeatures.map((feature, index) => {
                        const Icon = icons[index];

                        return (
                            <article
                                key={feature.number}
                                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                            >
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <p className="text-xs font-extrabold tracking-[0.18em] text-brand-orange">
                                        {feature.eyebrow}
                                    </p>

                                    <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-6 text-base leading-8 text-brand-text">
                                        {feature.description}
                                    </p>

                                    <ul className="mt-7 space-y-4">
                                        {feature.points.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <HiCheckCircle
                                                    size={21}
                                                    className="mt-0.5 shrink-0 text-brand-blue"
                                                />

                                                <span className="text-sm leading-7 text-brand-navy">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft p-8 sm:min-h-[380px] sm:p-12">
                                        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-blue/10 blur-3xl" />
                                        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-orange/10 blur-3xl" />

                                        <div className="relative flex w-full max-w-sm flex-col items-center rounded-3xl border border-brand-border bg-white p-8 text-center shadow-xl shadow-brand-navy/5 sm:p-12">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-soft text-brand-blue">
                                                <Icon size={40} />
                                            </div>

                                            <span className="mt-8 text-xs font-bold tracking-[0.15em] text-brand-orange">
                                                {feature.number} / 04
                                            </span>

                                            <h4 className="mt-3 text-xl font-extrabold text-brand-navy">
                                                {feature.eyebrow}
                                            </h4>

                                            <p className="mt-4 text-sm leading-7 text-brand-text">
                                                Öğrenci odaklı, düzenli ve sürdürülebilir rehberlik
                                                yaklaşımı.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
