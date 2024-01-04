import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskDeleted, onTaskCompleted }) => {
  return (
    <div>
      <h2 className='list'>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskDeleted={onTaskDeleted}
            onTaskCompleted={onTaskCompleted}
            
          />
        ))}
        
      </ul>
      
    </div>
  );
};

export default TaskList;
