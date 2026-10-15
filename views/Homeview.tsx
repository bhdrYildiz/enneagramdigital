import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import TrustedOrganizations from "@/components/home/TrustedOrganizations";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomeView() {
    return (
        <main>
            <Hero />
            <Solutions />
            <TrustedOrganizations />
            <Features />
            <HowItWorks />
            <FAQ />
            <CTA />
        </main>
    );
}
