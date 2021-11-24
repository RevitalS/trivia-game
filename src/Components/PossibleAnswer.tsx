import React from 'react';
import { useFormInput } from '../hooks/useFormInput';

interface IProps {
  text: string;
  index: number;
  handleQuestions: (answer: number) => void;
}

const PossibleAnswer: React.FC<IProps> = (props) => {
  const { text, index } = props;
  const handleChange = (value: string) => {
    props.handleQuestions(parseInt(value));
  };

  const value = useFormInput('', handleChange);

  return (
    <div>
      <label htmlFor={index.toString() + text}>
        <input
          type='radio'
          value={index.toString()}
          name='question'
          id={index.toString() + text}
          checked={value.value === text}
          onChange={value.onChange}
        />{' '}
        {text}
      </label>
    </div>
  );
};

export default PossibleAnswer;
