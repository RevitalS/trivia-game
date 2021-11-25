import React, { useState } from 'react';
import PossibleAnswer from './PossibleAnswer';
import { IQuestion } from '../models/IQuestion';
import { useFormInput } from '../hooks/useFormInput';

interface IProps {
  question: {
    title: string;
    possibleAnswers: Array<string>;
  };
  handleQuestions: (answer: number) => void;
}

const Question: React.FC<IProps> = (props) => {
  const [userAnswer, setUserAnswers] = useState('');
  const { title, possibleAnswers } = props.question;
  const handleChange = (value: string) => {
    props.handleQuestions(parseInt(value));
    console.log('value ', value);
    setUserAnswers('');
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
            <li
              key={i}
              style={style.li}
            >
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
