const Todo = require("../../model/todoModel")
const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const createTask = await Todo.create({ title, description });
        res.status(200).json({ message: "Task created successfully", data: { createTask } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllTasks = async (req, res) => {
    try {
        const getAllTasks = await Todo.find();
        res.status(201).json({ message: "Tasks got successfully", data: { getAllTasks } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const getTask = await Todo.findById(id);
        res.status(200).json({ message: "Task got successfully", data: { getTask } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updataTask = async (req, res) => {
    const { id } = req.params;
    try {
        const updataTask = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Task updated successfully", data: { updataTask } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTask = await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Task deleted successfully", data: { deleteTask } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updataTask,
    deleteTask
}