import React from "react";

import MainLayout from "@/layouts/main-layout";
import EditForm from "@/components/edit-note-form";

export default function CreateNotes() {
    return (
        <MainLayout>
            <div className="h-screen flex items-center justify-center">
                <EditForm />
            </div>
        </MainLayout>
    )
}