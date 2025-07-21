import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={() => onDelete(task)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
