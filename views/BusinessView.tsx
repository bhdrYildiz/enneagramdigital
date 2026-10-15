import BusinessHero from "@/components/business/BusinessHero";
import BusinessInsights from "@/components/business/BusinessInsights";
import BusinessSolutions from "@/components/business/BusinessSolutions";
import BusinessLeadership from "@/components/business/BusinessLeadership";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessCTA from "@/components/business/BusinessCTA";

export default function BusinessView() {
    return (
        <main>
            <BusinessHero />
            <BusinessInsights />
            <BusinessSolutions />
            <BusinessLeadership />
            <BusinessProcess />
            <BusinessCTA />
        </main>
    );
}
