import React, { useState } from 'react';
import PossibleAnswer from './PossibleAnswer';
import { IQuestion } from '../models/IQuestion';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  addAnswer,
  incrementTheIndex,
  decrementTheIndex,
  INITIAL_ARR_VALUES,
} from '../store/triviaSlice';

const Question: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentQuestionIndex = useAppSelector(
    (state) => state.trivia.currentQuestionIndex
  );

  const userAnswersArr = useAppSelector((state) => state.trivia.userAnswers);

  const [userAnswer, setUserAnswer] = useState(
    userAnswersArr[currentQuestionIndex]
  );

  const currentQuestion: IQuestion = useAppSelector(
    (state) => state.trivia.questions[currentQuestionIndex]
  );
  const { title, possibleAnswers } = currentQuestion;

  const handleClickNext = () => {
    if (userAnswer !== INITIAL_ARR_VALUES) {
      setUserAnswer(userAnswersArr[currentQuestionIndex + 1]);
      dispatch(addAnswer(userAnswer));
      dispatch(incrementTheIndex());
    } else {
      alert('Choose answer before moving to next question');
    }
  };

  const handleClickPrevious = () => {
    if (currentQuestionIndex !== 0) {
      setUserAnswer(userAnswersArr[currentQuestionIndex - 1]);
      dispatch(decrementTheIndex());
    }
  };

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
                isChecked={userAnswer === i}
                setChoosenAnswer={setUserAnswer}
                index={i.toString()}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={() => handleClickPrevious()}>Previous</button>
      <button onClick={() => handleClickNext()}>Next</button>
    </div>
  );
};

export default Question;
