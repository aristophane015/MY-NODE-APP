// models/Note.ts
import { Category } from './category';

export interface Note {
  id: string;
  title: string;
  content: string;
  category: Category;  // Each note will belong to a category
  createdAt: Date;
  updatedAt: Date;
}
