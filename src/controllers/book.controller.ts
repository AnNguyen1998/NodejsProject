import { Request, Response } from 'express';
import BookTest from '../models/book.model';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookTest.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req: Request, res: Response) => {
  const newBook = new BookTest(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  createBook
}; 