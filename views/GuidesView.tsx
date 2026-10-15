"use client";

import { useState } from "react";

import GuidesHero from "@/components/guides/GuidesHero";
import GuidesDirectory from "@/components/guides/GuidesDirectory";
import GuidesCTA from "@/components/guides/GuidesCTA";

export default function GuidesView() {
    const [search, setSearch] = useState("");

    return (
        <main>
            <GuidesHero search={search} onSearchChange={setSearch} />

            <GuidesDirectory search={search} onClearFilters={() => setSearch("")} />
            <GuidesCTA />
        </main>
    );
}
