// middleware/validateNote.ts
import { Request, Response, NextFunction } from 'express';

export function validateNoteFormat(req: Request, res: Response, next: NextFunction) {
  const { title, content, category } = req.body;

  // Check if the title and content are valid
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ message: 'Invalid title' });
  }

  if (!content || typeof content !== 'string') {
    return res.status(400).json({ message: 'Invalid content' });
  }

  // Check if the category is well-formed
  if (!category || typeof category.id !== 'string' || !category.name) {
    return res.status(400).json({ message: 'Invalid category' });
  }

  next();  // Proceed if everything is valid
}
