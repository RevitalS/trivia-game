import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Content from './Components/Content';
import HomePage from './Components/HomePage';
import {useAppDispatch, useAppSelector} from './store/hooks'

interface IState {
  questions: any,
}

const App: React.FC = (props) => { 

// useEffect(() => {
//   fetch('questions.json')
//     .then((response) => response.json())
//     .then(data => {setQuestionsObject(data);
//       console.log(questionsObject);
//     });
// }, []);

  return (
    <div className='App'>
      <h1>Trivia</h1>
      <Outlet/>
    </div>
  );
}

export default App;
