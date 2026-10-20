import { Suspense } from "react";

import Container from "@/components/ui/Container";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import WhatsAppContact from "./WhatsAppContact";

export default function ContactSection() {
    return (
        <section id="iletisim-formu" className="scroll-mt-24 bg-brand-white py-16 sm:py-20">
            <Container>
                {/* Üst alan: İletişim bilgileri ve form */}
                <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-x-16">
                    <div className="min-w-0">
                        <ContactInformation />
                    </div>

                    <div className="min-w-0">
                        <Suspense
                            fallback={
                                <div className="min-h-[500px] animate-pulse rounded-[28px] border border-brand-border bg-white" />
                            }
                        >
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>

                {/* Alt alan: Yan yana iki kart */}
                <div className="mt-10 lg:mt-12">
                    <WhatsAppContact />
                </div>
            </Container>
        </section>
    );
}
