import mongoose, { Schema, Document } from 'mongoose';

interface Task extends Document {
    taskName: String;
    beginDate: String,
    endDate: String,
    process: Number,
    status: String,
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema({
    taskName: { type: String, required: true },
    beginDate: { type: String, required: true },
    endDate: { type: String, required: true },
    process: { type: Number, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const TaskTest = mongoose.model<Task>('Task', taskSchema);
export default TaskTest; 