import { Request, Response } from 'express';
import ProjectTest from '../models/project.model'

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectTest.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const newProject = new ProjectTest(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllProjects,
  createProject
}; 