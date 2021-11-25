import React, { useState } from 'react';
import PossibleAnswer from './PossibleAnswer';
import { IQuestion } from '../models/IQuestion';
import { useFormInput } from '../hooks/useFormInput';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {addAnswer, incrementTheIndex} from '../store/triviaSlice'

interface IProps {
  handleQuestions: (answer: number) => void;
}

const Question: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const [userAnswer, setUserAnswers] = useState('');
  const currentQuestionIndex = useAppSelector(
    (state) => state.trivia.currentQuestionIndex
  );
  const currentQuestion = useAppSelector(state => state.trivia.questions[currentQuestionIndex]);
  const { title, possibleAnswers } = currentQuestion;

  console.log(currentQuestion);

  const handleChange = (value: string) => {
    props.handleQuestions(parseInt(value));
    console.log('value ', value);
    setUserAnswers('');
    dispatch(addAnswer(parseInt(value)))
    dispatch(incrementTheIndex());
  };
  const value = useFormInput('', handleChange);

  const style = {
    li: { listStyleType: 'none' },
  };

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {possibleAnswers.map((text, i) => {
          return (
            <li key={i} style={style.li}>
              <PossibleAnswer
                text={text}
                isChecked={userAnswer === i.toString()}
                setChoosenAnswer={setUserAnswers}
                index={i.toString()}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={() => handleChange(userAnswer)}>Next</button>
    </div>
  );
};

export default Question;
