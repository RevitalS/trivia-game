import React, { useState } from 'react';
import PossibleAnswer from './PossibleAnswer';
import { IQuestion } from '../models/IQuestion';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  addAnswer,
  incrementTheIndex,
  decrementTheIndex,
} from '../store/triviaSlice';

interface IProps {}

const Question: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const currentQuestionIndex = useAppSelector(
    (state) => state.trivia.currentQuestionIndex
  );
  const userAnswerFromStore = useAppSelector(
    (state) => state.trivia.userAnswers[currentQuestionIndex]
  );

  const userAnswersArr = useAppSelector((state) => state.trivia.userAnswers);

  const [userAnswer, setUserAnswer] = useState(-1);

  const currentQuestion = useAppSelector(
    (state) => state.trivia.questions[currentQuestionIndex]
  );
  const { title, possibleAnswers } = currentQuestion;

  const handleClickNext = () => {
    if (userAnswer !== -1) {
      dispatch(addAnswer(userAnswer));
      dispatch(incrementTheIndex());
      setUserAnswer(userAnswersArr[currentQuestionIndex + 1]);
    } else {
      alert('Choose answer before moving to next question');
    }
  };

  const handleClickPrevious = () => {
    dispatch(decrementTheIndex());
    setUserAnswer(userAnswersArr[currentQuestionIndex - 1]);
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
