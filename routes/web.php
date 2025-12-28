<?php

use App\Http\Controllers\NotesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [NotesController::class, 'index'])->name('notes.index');
Route::resource('notes', NotesController::class)->except('index');

require __DIR__.'/settings.php';
