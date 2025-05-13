const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: { type: String, require: true },
    bookId: { type: Number, require:true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
const BookTest = mongoose.model('Book', bookSchema);
module.exports = BookTest;