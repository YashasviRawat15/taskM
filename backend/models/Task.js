const db = require('../config/db');

const Task = {
  getAllTasks: (result) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, tasks) => {
      if (err) throw err;
      result(tasks);
    });
  },
  getTaskById: (id, result) => {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    db.query(query, [id], (err, task) => {
      if (err) throw err;
      result(task[0]);
    });
  },
  createTask: (newTask, result) => {
    const { title, description, completed } = newTask;
    const query = 'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)';
    db.query(query, [title, description, completed], (err, response) => {
      if (err) throw err;
      const createdTask = { id: response.insertId, title, description, completed };
      result(createdTask);
    });
  },
  updateTask: (id, updatedTask, result) => {
    const { title, description, completed } = updatedTask;
    const query = 'UPDATE tasks SET completed = ? WHERE id = ?';
    db.query(query, [ completed, id], (err) => {
      if (err) throw err;
      result(updatedTask);
    });
  },
  deleteTask: (id, result) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], (err) => {
      if (err) throw err;
      result();
    });
  },
};

module.exports = Task;
