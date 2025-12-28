import React from "react";
import { usePage } from "@inertiajs/react";

import MainLayout from "@/layouts/main-layout";
import DataContainer from "@/components/data-container";

export default function Welcome() {
    
    return (
        <>
            <MainLayout>
                <div className="pt-10">
                    <DataContainer />
                </div>
            </MainLayout>
        </>
    )
}
