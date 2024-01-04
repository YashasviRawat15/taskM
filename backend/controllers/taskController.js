const Task = require('../models/Task');

exports.getAllTasks = (req, res) => {
  Task.getAllTasks((tasks) => {
    res.json(tasks);
  });
};

exports.getTaskById = (req, res) => {
  const { id } = req.params;
  Task.getTaskById(id, (task) => {
    res.json(task);
  });
};

exports.createTask = (req, res) => {
  const newTask = req.body;
  Task.createTask(newTask, (createdTask) => {
    res.json(createdTask);
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  Task.updateTask(id, updatedTask, (task) => {
    res.json(task);
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteTask(id, () => {
    res.sendStatus(204); // No content
  });
};
