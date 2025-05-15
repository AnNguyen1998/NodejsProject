import { Request, Response } from 'express';
import TaskTest from '../models/task.model';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskTest.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const newTask = new TaskTest(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask
}; 