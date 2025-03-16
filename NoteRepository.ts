// repository/NoteRepository.ts
import { Note } from './Note';

let notes: Note[] = [];  // In-memory storage for notes

export const createNote = (note: Note): Note => {
  notes.push(note);  // Add the new note to the array
  return note;       // Return the created note
};

export const getNotesByCategoryId = (categoryId: string): Note[] => {
  return notes.filter(note => note.category.id === categoryId);  // Get notes that belong to a specific category
};

export const updateNote = (id: string, updatedNote: Partial<Note>): Note | null => {
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex === -1) return null; // Return null if note not found

  notes[noteIndex] = { ...notes[noteIndex], ...updatedNote, updatedAt: new Date() };
  return notes[noteIndex];
};
