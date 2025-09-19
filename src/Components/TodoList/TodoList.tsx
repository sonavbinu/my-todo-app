import React, { useState } from 'react';
import './TodoList.scss';

interface Task {
  title: string;
  details: string;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const addTask = () => {
    if (title.trim() === '' && details.trim() === '') return;
    const newTask: Task = { title, details };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDetails('');
  };

  return (
    <div className="todo-container">
      <div className="input-main">
        <input
          className="input-title"
          type="text"
          placeholder="Enter your task"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="input-details"
          type="text"
          value={details}
          onChange={e => setDetails(e.target.value)}
          placeholder="Details of your task"
        />
        <button onClick={addTask}>+</button>
      </div>
      <div className="todo-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong className="title">{task.title}</strong>
              <br />
              <p className="details"> {task.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
