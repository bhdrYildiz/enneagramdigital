import SchoolsHero from "@/components/schools/SchoolsHero";
import SchoolsBenefits from "@/components/schools/SchoolsBenefits";
import SchoolsPlatform from "@/components/schools/SchoolsPlatform";
import SchoolsProcess from "@/components/schools/SchoolsProcess";
import SchoolsCTA from "@/components/schools/SchoolsCTA";

export default function SchoolsView() {
    return (
        <main>
            <SchoolsHero />
            <SchoolsBenefits />
            <SchoolsPlatform />
            <SchoolsProcess />
            <SchoolsCTA />
        </main>
    );
}
