"use client";

import { useState } from "react";

import SupportHero from "@/components/support/SupportHero";
import SupportCenter from "@/components/support/SupportCenter";
import SupportResources from "@/components/support/SupportResources";
import SupportCTA from "@/components/support/SupportCTA";

export default function SupportView() {
    const [search, setSearch] = useState("");

    return (
        <main>
            <SupportHero search={search} onSearchChange={setSearch} />

            <SupportCenter search={search} onClearSearch={() => setSearch("")} />

            <SupportResources />

            <SupportCTA />
        </main>
    );
}
