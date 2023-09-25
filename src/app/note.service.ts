// src/app/note.service.ts

import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [];

  constructor() {
    // Load notes from local storage when the service is instantiated
    this.loadNotes();
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.saveNotes();
  }

  getNotes(): Note[] {
    return this.notes;
  }

  private saveNotes() {
    // Store notes in local storage
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  private loadNotes() {
    // Retrieve notes from local storage
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }
}
