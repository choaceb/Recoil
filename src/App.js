import React from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <div className="App">
      <h1>Recoil TodoList</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default App;
