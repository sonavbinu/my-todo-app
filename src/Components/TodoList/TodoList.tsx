import React, { useState } from 'react';
import './TodoList.scss';

interface Task {
  title: string;
  details: string;
  startDate: string;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');

  const addTask = () => {
    if (title.trim() === '' && details.trim() === '') return;
    const newTask: Task = { title, details, startDate };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDetails('');
    setStartDate('');
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
        <input
          className="input-date"
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>
      <div className="todo-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-card">
              <h3>{task.title}</h3>
              <br />
              <p> {task.details}</p>
              <span>Start date:{task.startDate}</span>

              <div className="task-actions">
                <button className="edit">✏️</button>
                <button className="delete">🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
