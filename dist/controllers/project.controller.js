"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getAllProjects = void 0;
const project_model_1 = __importDefault(require("../models/project.model"));
const getAllProjects = async (req, res) => {
    try {
        const projects = await project_model_1.default.find();
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllProjects = getAllProjects;
const createProject = async (req, res) => {
    const newProject = new project_model_1.default(req.body);
    try {
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createProject = createProject;
module.exports = {
    getAllProjects: exports.getAllProjects,
    createProject: exports.createProject
};
