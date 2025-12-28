import React from "react";
import { Head, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { useRoute } from '../../../vendor/tightenco/ziggy';

import type { Note } from "@/types/note";
import type { PaginatedData } from "@/types/note";

type PageProps = {
    notes: PaginatedData<Note>;
}

export default function DataContainer() {
    const { notes } = usePage<PageProps>().props
    const route = useRoute()
    
    return (
        <div className="pt-10 flex flex-col gap-2">
            <Head title="Notes" />
            <div>
                {/* Headline */}
                <div>
                    <h1 className="font-bold text-3xl mb-5">Your created notes</h1>
                </div>
                
                {/* Data displayed in grid */}
                <div className="grid grid-cols-3 gap-2">
                    { notes.data.map ( note => (
                        <div
                            key={ note.id }
                            className="border p-3 rounded"
                        >
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h2 className="font-semibold mb-2"> { note.title } </h2>
                                    <p className="text-sm text-slate-600 truncate"> { note.description } </p>
                                </div>
                                <div className="flex justify-between">
                                    <Link
                                        href = { route('notes.show', { note: note.id })}
                                        className="text-xs text-blue-500 transition-all duration-300 hover:underline"
                                    >
                                        Read More
                                    </Link>
                                    <span className="text-xs text-slate-500"> Posted on: { new Date( note.created_at ).toLocaleDateString() } </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-end">
                <nav className="flex gap-2">
                    {notes.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            className={`
                                flex gap-2 px-4 py-2 rounded-lg text-xs
                                ${link.active
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
                                ${!link.url ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                            `}
                            preserveScroll
                            preserveState
                        >
                            <span dangerouslySetInnerHTML={{ __html: link.label }} />
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}