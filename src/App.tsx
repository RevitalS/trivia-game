import React from 'react';
import { Outlet } from 'react-router';
import './App.css';

const App: React.FC = (props) => { 

  return (
    <div className='App'>
      <h1>Trivia</h1>
      <Outlet/>
    </div>
  );
}

export default App;
