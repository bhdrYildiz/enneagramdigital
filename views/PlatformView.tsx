import PlatformHero from "@/components/platform/PlatformHero";
import PlatformModules from "@/components/platform/PlatformModules";
import PlatformAdvantages from "@/components/platform/PlatformAdvantages";
import PlatformAudience from "@/components/platform/PlatformAudience";
import PlatformProcess from "@/components/platform/PlatformProcess";
import PlatformCTA from "@/components/platform/PlatformCTA";

export default function PlatformView() {
    return (
        <main>
            <PlatformHero />
            <PlatformModules />
            <PlatformAdvantages />
            <PlatformAudience />
            <PlatformProcess />
            <PlatformCTA />
        </main>
    );
}
