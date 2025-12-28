import React from "react";

import Header from "@/components/header";
import FlashToasts from "@/components/flash-toast";

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout( { children }: MainLayoutProps ) {
    return (
        <>
            <Header title = "Notes" />
            <FlashToasts />
            <main className="px-30">
                { children }
            </main>
        </>
    )
}