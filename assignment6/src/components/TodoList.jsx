import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTasks = [...tasks, task.trim()].sort();
      setTasks(newTasks);
      setTask('');
    }
  };

  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter(t => t !== taskToDelete);
    setTasks(updatedTasks.sort());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <TodoItem key={index} task={t} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
