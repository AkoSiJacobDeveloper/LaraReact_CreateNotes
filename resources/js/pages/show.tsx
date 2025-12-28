import React from "react";
import { usePage, Link, Head} from "@inertiajs/react";
import { useRoute } from '../../../vendor/tightenco/ziggy';

import MainLayout from "@/layouts/main-layout";

import type { Note } from "@/types/note";

type PageProps = {
    note: Note;
}

export default function Show() {
    const { note } = usePage<PageProps>().props;
    const route = useRoute();

    return (
        <MainLayout>
            <Head title="Note details" />
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col gap-5 p-4 w-1/2 border rounded">
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-3xl mb-2"> { note.title } </h2>
                            <span className="text-xs text-slate-500"> Posted on: { new Date( note.created_at ).toLocaleDateString() } </span>
                        </div>
                        <p className="text-sm text-slate-600"> { note.description } </p>
                    </div>
                    <div className="flex justify-between">
                        <Link
                            href='/'
                            className="text-xs text-blue-500 transition-all duration-300 hover:underline"
                        >
                            Back
                        </Link>

                        {/* Delete and Edit */}
                        <div className="flex gap-1">
                            {/* Edit */}
                            <Link
                                href={ route('notes.edit', { note: note.id })}
                                as={"button"}
                                className="text-xs text-green-600 px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white rounded hover:cursor-pointer"
                            >
                                Edit
                            </Link>

                            {/* Delete */}
                            <Link
                                href={ route('notes.destroy', { note: note.id })}
                                method="delete"
                                as={"button"}
                                className="text-xs text-red-600 px-4 py-1 transition-all duration-300 hover:bg-red-600 hover:text-white rounded hover:cursor-pointer"
                            >
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}