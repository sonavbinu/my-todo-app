import React from 'react';
import './TodoList.scss';

const TodoList: React.FC = () => {
  return (
    <div>
      <div className="input-main">
        <input
          className="input-title"
          type="text"
          placeholder="Type title of Task"
        />
        <input
          className="input-details"
          type="text"
          placeholder="Details of your task"
        />
        <button>+</button>
      </div>
    </div>
  );
};

export default TodoList;
