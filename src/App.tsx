import React from 'react';
import TodoList from './Components/TodoList/TodoList';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Start Planning Today🔥</h1>
      <div className="app-main-interface">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
