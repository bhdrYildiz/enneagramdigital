import { Suspense } from "react";

import Container from "@/components/ui/Container";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="bg-brand-white py-20 sm:py-28">
            <Container>
                <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <ContactInformation />

                    <Suspense
                        fallback={
                            <div className="min-h-[500px] animate-pulse rounded-[28px] border border-brand-border bg-white" />
                        }
                    >
                        <ContactForm />
                    </Suspense>
                </div>
            </Container>
        </section>
    );
}
