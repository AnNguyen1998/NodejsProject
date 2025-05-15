"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getAllTasks = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
const getAllTasks = async (req, res) => {
    try {
        const tasks = await task_model_1.default.find();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllTasks = getAllTasks;
const createTask = async (req, res) => {
    const newTask = new task_model_1.default(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createTask = createTask;
module.exports = {
    getAllTasks: exports.getAllTasks,
    createTask: exports.createTask
};
