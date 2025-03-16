// server.ts
import express, { Request, Response } from 'express';
import * as NoteRepository from './NoteRepository';
import { validateNoteFormat } from './validateNote';
import { logger } from './logger';

const app = express();
app.use(express.json());

// Add the logging middleware
app.use(logger);

// Example categories
const categories = [
  { id: '1', name: 'Work' },
  { id: '2', name: 'Personal' }
];

// Endpoint to get notes by category
app.get('/api/notes/categories/:categoryId', (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const notes = NoteRepository.getNotesByCategoryId(categoryId);
  res.json(notes);  // Respond with the notes that match the category
});

// Endpoint to update a note
app.put('/api/notes/:id', validateNoteFormat, (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedNote = req.body;

  const note = NoteRepository.updateNote(id, updatedNote);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.json(note);  // Return the updated note
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
