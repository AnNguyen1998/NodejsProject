"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getAllBooks = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
const getAllBooks = async (req, res) => {
    try {
        const books = await book_model_1.default.find();
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllBooks = getAllBooks;
const createBook = async (req, res) => {
    const newBook = new book_model_1.default(req.body);
    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createBook = createBook;
module.exports = {
    getAllBooks: exports.getAllBooks,
    createBook: exports.createBook
};
