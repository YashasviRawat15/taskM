import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const TaskItem = ({ task, onTaskDeleted, onTaskCompleted }) => {
  const handleDelete = () => {
    onTaskDeleted(task.id);
  };

  const handleComplete = () => {
    // Toggle the completed status and update on the server
    onTaskCompleted(task.id, !task.completed);
  };

  return (
    <div>
      <ul>
        <li>
      <span className='task' style={{ textDecoration: task.completed ? 'line-through' : 'none', fontSize:'1.4rem'}}>
        {task.title}
      </span>
      
      <button type='button' class='btn btn-success btn-sm item b1'  onClick={handleComplete}>
      
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button type='button' class='btn btn-danger btn-sm item b2' onClick={handleDelete}>Delete</button>
      
      </li>
      </ul>
    </div>
  );
};

export default TaskItem;
