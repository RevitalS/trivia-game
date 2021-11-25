import React, { useEffect, useState } from 'react';
import Progressbar from './Progressbar';
import Question from './Question';
import { IQuestion } from '../models/IQuestion';
import Finish from './Finish';

interface IProps {
  questionsObject: any;
}

interface IState {
  hasQuestions: boolean;
  userAnswers: Array<number>;
  questionIndex: number;
  stillAnswer: boolean;
}

const Content: React.FC<IProps> = (props) => {
  const { questions, answers } = props.questionsObject;
  const [stillAnswer, setStillAnswer] = useState(true);
  const [hasQuestions, setHasQuestions] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array<number>());

  const calculatedGrade = () => {
    const correctAnswers = userAnswers.filter(
      (userAnswer, i) => userAnswer === answers[i]
    );
    const gradePerAnswer = 100/ userAnswers.length;
    return gradePerAnswer * correctAnswers.length;
    console.log(correctAnswers);
  };

  const saveUserAnswer = (answer: number) => {
    const updateAnswers = [...userAnswers, answer];
    setUserAnswers(updateAnswers);
  };

  const moveToNextQuestion = () => {
    console.log('moveToNextQuestion', questionIndex);
    if (questionIndex < questions.length - 1) {
      console.log('move');
      setQuestionIndex(questionIndex + 1);
    } else {
      calculatedGrade();
      setStillAnswer(false);
    }
  };

  const handleQuestions = (answer: number) => {
    saveUserAnswer(answer);
    moveToNextQuestion();
  };

  useEffect(() => {
    if (Object.keys(props.questionsObject).length > 0) {
      setHasQuestions(true);
    }
  }, [props.questionsObject]);

  return (
    <div>
      {stillAnswer ? (
        hasQuestions && (
          <div>
            <Question
              question={questions[questionIndex]}
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
