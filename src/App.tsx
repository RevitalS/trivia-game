import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './Components/Content';
import {useAppDispatch, useAppSelector} from './store/hooks'

interface IState {
  questions: any,
}

const App: React.FC = (props) => { 

const [questionsObject, setQuestionsObject] = useState({})

useEffect(() => {
  fetch('questions.json')
    .then((response) => response.json())
    .then(data => {setQuestionsObject(data);
      console.log(questionsObject);
    });
}, []);

  return (
    <div className='App'>
      <h1>Trivia</h1>
      <Content />
    </div>
  );
}

export default App;
