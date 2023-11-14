import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onTaskComplete, onDeleteTask }) => {
  const [filter, setFilter] = useState('All');
  const [visibleTasks, setVisibleTasks] = useState(tasks);

  const handleFilterChange = newFilter => {
    setFilter(newFilter);

    switch (newFilter) {
      case 'All':
        setVisibleTasks(tasks);
        break;
      case 'Completed':
        setVisibleTasks(tasks.filter(task => task.completed));
        break;
      case 'Remaining':
        setVisibleTasks(tasks.filter(task => !task.completed));
        break;
      default:
        setVisibleTasks(tasks);
        break;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Completed')}>Completed</button>
        <button onClick={() => handleFilterChange('Remaining')}>Remaining</button>
      </div>
      <ul>
        {visibleTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskComplete={onTaskComplete}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
