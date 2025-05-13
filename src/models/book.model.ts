import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    bookName: string;
    createdAt: Date;
    updatedAt: Date;
}

const bookSchema = new Schema({
    bookName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const BookTest = mongoose.model<IBook>('Book', bookSchema);
export default BookTest; 