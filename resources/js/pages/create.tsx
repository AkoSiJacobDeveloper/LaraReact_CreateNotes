import React from "react";

import MainLayout from "@/layouts/main-layout";
import NoteForm from "@/components/note-form";

export default function CreateNotes() {
    return (
        <MainLayout>
            <div className="h-screen flex items-center justify-center">
                <NoteForm />
            </div>
        </MainLayout>
    )
}