import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDeleted = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskCompleted = async (taskId, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, { completed });
      setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed } : task)));
    } catch (error) {
      console.error('Error updating task completion:', error);
    }
  };

  return (
    <div>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList
        tasks={tasks}
        onTaskDeleted={handleTaskDeleted}
        onTaskCompleted={handleTaskCompleted}
      />
    </div>
  );
};

export default App;
