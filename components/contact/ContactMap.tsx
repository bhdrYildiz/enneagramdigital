import { HiOutlineArrowTopRightOnSquare, HiOutlineMapPin } from "react-icons/hi2";

import Container from "@/components/ui/Container";
import { contactDetails } from "@/data/contactDetails";

export default function ContactMap() {
    return (
        <section id="konum" className="border-t border-brand-border bg-white py-16 sm:py-20">
            <Container>
                <div className="mb-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                            KONUM & ULAŞIM
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                            Bizi ziyaret edin.
                        </h2>

                        <p className="mt-4 text-base leading-8 text-brand-text">
                            {contactDetails.companyName} konumunu haritadan inceleyebilir ve yol
                            tarifi alabilirsiniz.
                        </p>
                    </div>

                    <a
                        href={contactDetails.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-brand-navy px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-blue"
                    >
                        Yol Tarifi Al
                        <HiOutlineArrowTopRightOnSquare size={18} />
                    </a>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft shadow-xl shadow-brand-navy/5">
                    <iframe
                        src={contactDetails.mapEmbedUrl}
                        title="Enneagram Eğitim ve Danışmanlık konumu"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="block h-[350px] w-full border-0 sm:h-[450px]"
                    />

                    <div className="flex items-center gap-4 border-t border-brand-border bg-white px-6 py-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                            <HiOutlineMapPin size={24} />
                        </div>

                        <div>
                            <p className="text-sm font-extrabold text-brand-navy">
                                {contactDetails.companyName}
                            </p>

                            <p className="mt-1 text-sm text-brand-text">
                                {contactDetails.address ||
                                    "Konumumuzu harita üzerinden inceleyebilirsiniz."}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
