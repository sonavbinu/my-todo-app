import React, { useState } from 'react';
import './TodoList.scss';

interface Task {
  title: string;
  details: string;
  startDate: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');

  const addTask = () => {
    if (title.trim() === '' && details.trim() === '') return;
    const newTask: Task = { title, details, startDate, completed: false };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDetails('');
    setStartDate('');
  };
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const toggleComplete = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
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
                <button className="delete" onClick={() => deleteTask(index)}>
                  🗑️
                </button>
                <button>
                  {' '}
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
