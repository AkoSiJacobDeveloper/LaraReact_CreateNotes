import React from "react";
import { Link } from "@inertiajs/react";

interface HeaderProps {
    title: string
}

export default function Header( { title }: HeaderProps ) {
    return (
        <header className="px-30 py-4 border-b fixed w-full flex justify-between items-center">
            <Link
                href='/'
                className=""
            >
                <h1 className="font-medium text-lg inline-block">{title}</h1>
            </Link>

            <Link
                href='/notes/create'
            >
                <p className="px-4 opacity-45 transition-all duration-300 hover:opacity-100">Create Notes</p>
            </Link>
        </header>
    )
}