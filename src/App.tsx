import React from 'react';
import Calender from './Components/Calender';
import TodoList from './Components/TodoList/TodoList';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Start Planning Today🔥</h1>
      <div className="app-main-interface">
        <Calender />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
