import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteService } from './note.service';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [AppComponent, NoteListComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)], // Configure RouterModule here
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
