const BookTest = require('../models/book.model.ts');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookTest.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  const newBook = new BookTest(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};