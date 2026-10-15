import JourneyHero from "@/components/journey/JourneyHero";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import JourneyAudience from "@/components/journey/JourneyAudience";
import JourneyFAQ from "@/components/journey/JourneyFAQ";
import JourneyCTA from "@/components/journey/JourneyCTA";

export default function HowItWorksView() {
    return (
        <main>
            <JourneyHero />
            <JourneyTimeline />
            <JourneyAudience />
            <JourneyFAQ />
            <JourneyCTA />
        </main>
    );
}
