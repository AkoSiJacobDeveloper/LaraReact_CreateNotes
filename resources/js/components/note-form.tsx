import React from "react";
import { Head, useForm } from "@inertiajs/react";

export default function NoteForm() {
    const { data, setData, post, errors, processing } = useForm({
        title: '',
        description: ''
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post('/notes')
    }

    return (
        <div className="w-1/2 mx-auto flex flex-col gap-6">
            <Head title="Create notes" />
            <h1 className=" text-2xl font-semibold">Create New Note</h1>
            <form onSubmit={submit}>
                <div>
                    <div className="mb-5">
                        {/* Title */}
                        <label 
                            htmlFor="title"
                            className="block text-sm font-medium"
                        >
                            Title
                        </label>
                        <input 
                            type="text"
                            value={ data.title }
                            onChange={(e) => setData('title', e.target.value)} 
                            className={`border w-full p-3 rounded mb-2 ${
                                errors.title
                                    ? 'border-red-700'
                                    : ''
                            }`}
                        />

                        { errors.title && <p className="errors text-xs text-red-700"> { errors.title } * </p> }
                    </div>

                    <div className="mb-5 ">
                        {/* Description */}
                        <label 
                            htmlFor="Description"
                            className="block text-sm font-medium"
                        >
                            Description
                        </label>
                        <textarea 
                            value={ data.description }
                            onChange={(e) => setData('description', e.target.value)}
                            className={`border w-full p-3 rounded mb-1 ${
                                errors.description
                                    ? 'border-red-700'
                                    : ''
                            }`}
                            rows={8}
                            name="description" 
                            id="description"
                        >
                        </textarea>

                        { errors.description && <p className="errors text-xs text-red-700"> { errors.description } *</p> }
                    </div>

                    <div className="flex justify-end">
                        <button
                            disabled = { processing }
                            type="submit"
                            className={`border px-4 py-3 rounded font-medium cursor-pointer transition-all duration-300 ${
                                processing
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'hover:bg-blue-500 hover:text-white'
                            }`}
                        >
                            { processing ? 'Creating note...' : 'Create note' }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quis id omnis deserunt optio, molestiae inventore animi, nesciunt accusamus at commodi excepturi assumenda modi corrupti. Nihil maxime hic dicta explicabo.