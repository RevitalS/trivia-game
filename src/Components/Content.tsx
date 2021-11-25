import React, { useEffect, useState } from 'react';
import Progressbar from './Progressbar';
import Question from './Question';
import { IQuestion } from '../models/IQuestion';
import Finish from './Finish';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {incrementTheIndex} from '../store/triviaSlice'



interface IState {
  hasQuestions: boolean;
  stillAnswer: boolean;
}

const Content: React.FC<{}> = () => {

  const dispatch = useAppDispatch();

  const [stillAnswer, setStillAnswer] = useState(true);
  const [hasQuestions, setHasQuestions] = useState(false);


  const currentQuestionIndex = useAppSelector(
    (state) => state.trivia.currentQuestionIndex
  );
  const numberOfQuestions = useAppSelector(state => state.trivia.questions.length);
  const userAnswers = useAppSelector(state => state.trivia.userAnswers);
  const correctAnswers = useAppSelector(state => state.trivia.answers);


  const calculatedGrade = () => {
    const correctUserAnswers = userAnswers.filter(
      (userAnswer, i) => userAnswer === correctAnswers[i]
    );
    const gradePerAnswer = 100/ userAnswers.length;
    return gradePerAnswer * correctUserAnswers.length;
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < numberOfQuestions - 1) {
      dispatch(incrementTheIndex);
    } else {
      calculatedGrade();
      setStillAnswer(false);
    }
  };

  const handleQuestions = (answer: number) => {
    moveToNextQuestion();
  };

  useEffect(() => {
    if (numberOfQuestions > 0) {
      setHasQuestions(true);
    }
  }, [numberOfQuestions]);

  return (
    <div>
      {stillAnswer ? (
        hasQuestions && (
          <div>
            <Question
              handleQuestions={handleQuestions}
            />
            <Progressbar />
          </div>
        )
      ) : (
        <Finish grade={calculatedGrade()} />
      )}
    </div>
  );
};

export default Content;
