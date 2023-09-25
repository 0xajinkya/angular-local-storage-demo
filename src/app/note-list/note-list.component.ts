// src/app/note-list/note-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  newNote: Note = new Note('', '');

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    // Initialize notes by fetching them from the service
    this.notes = this.noteService.getNotes();
  }

  addNote() {
    // Add a new note using the service
    this.noteService.addNote(this.newNote);
    this.newNote = new Note('', ''); // Clear the form
  }
}
