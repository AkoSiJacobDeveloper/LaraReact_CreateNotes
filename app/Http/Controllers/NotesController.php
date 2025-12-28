<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notes = Note::latest()->paginate(10);
        return Inertia::render('welcome', [
            'notes' => $notes
        ]);
    }

    /**
     * Show the form for creating a new resource.s
     */
    public function create()
    {
        return Inertia::render('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:75',
            'description' => 'required|max:1000'
        ]);

        Note::create($validated);

        return redirect('/')->with('success', 'Notes successfully created!');
    }


    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        return Inertia::render('show', [
            'note' => $note
        ] );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        return Inertia::render('edit', [
            'note' => $note
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Note $note)
    {
        $validated = $request->validate([
            'title' => 'required|max:75',
            'description' => 'required|max:1000'
        ]);

        $note->update($validated);

        return redirect('/')->with('success', 'Note updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        $note->delete();

        return redirect('/')->with('success', 'Notes successfully deleted!');
    }
}
