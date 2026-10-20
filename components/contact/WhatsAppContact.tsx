import { FaWhatsapp } from "react-icons/fa6";
import { HiCheckCircle, HiOutlineChatBubbleLeftRight, HiArrowUpRight } from "react-icons/hi2";

import { getWhatsAppUrl } from "@/data/socialLinks";

const demoBenefits = [
    "Platformun genel tanıtımı",
    "Kullanım alanlarının değerlendirilmesi",
    "Mizaç analizi ve raporlama yaklaşımı",
    "Sorularınızın yanıtlanması",
];

export default function WhatsAppContact() {
    const whatsappUrl = getWhatsAppUrl();

    return (
        <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Demo görüşmesi kartı */}
            <div className="flex h-full min-w-0 flex-col rounded-[28px] border border-brand-border bg-brand-soft p-7 sm:p-9">
                <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue">
                        <HiOutlineChatBubbleLeftRight size={23} />
                    </div>

                    <h3 className="text-lg font-extrabold leading-snug text-brand-navy">
                        Demo görüşmesinde neler var?
                    </h3>
                </div>

                <ul className="mt-8 space-y-5">
                    {demoBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-4">
                            <HiCheckCircle size={21} className="mt-0.5 shrink-0 text-brand-blue" />

                            <span className="text-sm leading-7 text-brand-text">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* WhatsApp hızlı iletişim kartı */}
            <div className="flex h-full min-w-0 flex-col rounded-[28px] border border-brand-border bg-white p-7 sm:p-9">
                <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-blue">
                        <FaWhatsapp size={23} />
                    </div>

                    <h3 className="text-lg font-extrabold leading-snug text-brand-navy">
                        WhatsApp ile Hızlı İletişim
                    </h3>
                </div>

                <p className="mt-8 text-sm leading-7 text-brand-text">
                    EnneagramDigital hakkında merak ettiklerinizi bize iletin. Platformumuzun
                    kullanım alanları, mizaç analizleri ve demo görüşmeleri hakkında bilgi alın.
                </p>

                <div className="mt-auto pt-7">
                    <a
                        href={whatsappUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled={!whatsappUrl}
                        className={`inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-sm font-extrabold transition-colors duration-200 ${
                            whatsappUrl
                                ? "bg-brand-navy text-white hover:bg-brand-blue"
                                : "pointer-events-none bg-brand-border text-brand-text"
                        }`}
                    >
                        WhatsApp ile İletişime Geç
                        <HiArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
}
