import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



const TaskForm = ({ onTaskAdded }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', {
        title: newTask,
        completed: false, // Set the initial completed status
      });
      onTaskAdded(response.data);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2 className='form'>Task Manager</h2>
      <input
        type="text"
        placeholder="Task title"
        className="input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{width:'60%'}}
      />
      <button onClick={handleAddTask} type='button' className='btn btn-primary'>Add</button>
    </div>
  );
};

export default TaskForm;


