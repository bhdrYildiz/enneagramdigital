import { HiChatBubbleLeftRight, HiCheckCircle } from "react-icons/hi2";

import { contactBenefits } from "@/data/contact";

export default function ContactInformation() {
    return (
        <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">
                BİRLİKTE KEŞFEDELİM
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl">
                Doğru çözümü bulmak, ihtiyaçlarınızı anlamakla başlar.
            </h2>

            <p className="mt-6 text-base leading-8 text-brand-text">
                Her okulun, kurumun ve bireyin beklentileri farklıdır. Bu nedenle EnneagramDigital'i
                yalnızca özellikleriyle değil, sizin kullanım amacınızla birlikte değerlendirmek
                istiyoruz.
            </p>

            <div className="mt-10 space-y-8">
                {contactBenefits.map((benefit) => (
                    <div key={benefit.number} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-extrabold text-brand-blue">
                            {benefit.number}
                        </div>

                        <div>
                            <h3 className="text-lg font-extrabold text-brand-navy">
                                {benefit.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-brand-text">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 rounded-3xl border border-brand-border bg-brand-soft p-6 sm:p-8">
                <div className="flex items-center gap-3">
                    <HiChatBubbleLeftRight size={25} className="text-brand-blue" />

                    <h3 className="text-lg font-extrabold text-brand-navy">
                        Demo görüşmesinde neler var?
                    </h3>
                </div>

                <div className="mt-6 space-y-4">
                    {[
                        "Platformun genel tanıtımı",
                        "Kullanım alanlarının değerlendirilmesi",
                        "Mizaç analizi ve raporlama yaklaşımı",
                        "Sorularınızın yanıtlanması",
                    ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                            <HiCheckCircle size={20} className="mt-0.5 shrink-0 text-brand-blue" />

                            <span className="text-sm leading-6 text-brand-navy">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
