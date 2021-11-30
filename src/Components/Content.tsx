import React, { useEffect, useState } from 'react';
import Question from './Question';
import Finish from './Finish';
import { useAppSelector } from '../store/hooks';
import Main from './Main';


const Content: React.FC<{}> = () => {

  const [hasQuestions, setHasQuestions] = useState(false);

  const currentQuestionIndex = useAppSelector(
    (state) => state.trivia.currentQuestionIndex
  );
  const numberOfQuestions = useAppSelector(
    (state) => state.trivia.questions.length
  );
  const userAnswers = useAppSelector((state) => state.trivia.userAnswers);
  const correctAnswers = useAppSelector((state) => state.trivia.answers);

  const calculatedGrade = () => {
    const correctUserAnswers = userAnswers.filter(
      (userAnswer, i) => userAnswer === correctAnswers[i]
    );
    const gradePerAnswer = 100 / userAnswers.length;
    return gradePerAnswer * correctUserAnswers.length;
  };



  useEffect(() => {
    if (numberOfQuestions > 0) {
      setHasQuestions(true);
    }
  }, [numberOfQuestions]);

  return (
    <Main>
      {currentQuestionIndex < numberOfQuestions ? (
        hasQuestions && (
          <div>
            <Question/>
          </div>
        )
      ) : (
        <Finish grade={calculatedGrade()} />
      )}
    </Main>
  );
};

export default Content;
