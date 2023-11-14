import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList/TaskList'
import TaskForm from './components/TaskForm/TaskForm';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Tasks updated:', tasks);
    // Puedes implementar la persistencia de datos aquí utilizando localStorage
    // localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskComplete = taskId => {
    // Actualizar el estado de la tarea completada
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = taskName => {
    // Agregar una nueva tarea al estado
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleDeleteTask = taskId => {
    // Eliminar una tarea del estado
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div>       
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;

