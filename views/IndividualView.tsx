import IndividualHero from "@/components/individual/IndividualHero";
import IndividualInsights from "@/components/individual/IndividualInsights";
import IndividualFeatures from "@/components/individual/IndividualFeatures";
import TemperamentExplorer from "@/components/individual/TemperamentExplorer";
import IndividualProcess from "@/components/individual/IndividualProcess";
import IndividualCTA from "@/components/individual/IndividualCTA";

export default function IndividualView() {
    return (
        <main>
            <IndividualHero />
            <IndividualInsights />
            <IndividualFeatures />
            <TemperamentExplorer />
            <IndividualProcess />
            <IndividualCTA />
        </main>
    );
}
