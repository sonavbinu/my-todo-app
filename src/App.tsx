import React, { useEffect, useState } from 'react';
import TodoList from './Components/TodoList/TodoList';
import './App.scss';

const App: React.FC = () => {
  const prompts = [
    'What are you going to create today?',
    'What’s the one task that will make today amazing?',
    'What’s your top priority for today?',
    'What challenge are you ready to overcome today?',
    'Which small step will move you closer to your big goal?',
    'Discipline is the bridge between goals and achievement.',
    'Done is better than perfect.',
    'Your future is created by what you do today, not tomorrow.',
    'Focus on progress, not perfection.',
    'Start where you are. Use what you have. Do what you can.',
  ];

  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setQuote(prompts[randomIndex]);
  }, []);

  return (
    <div className="container">
      <h1>Start Planning Today🔥</h1>
      <p>{quote}</p>
      <div className="app-main-interface">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
