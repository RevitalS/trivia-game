import React from 'react';
import { useFormInput } from '../hooks/useFormInput';

interface IProps {
  text: string;
  index: string;
  isChecked: boolean;
  setChoosenAnswer: (string: string) => void;
}

const PossibleAnswer: React.FC<IProps> = (props) => {
  const { text, isChecked, index, setChoosenAnswer } = props;

  return (
    <div>
      <label>
        <input
          type='radio'
          name='question'
          checked = {isChecked}
          onChange={() => setChoosenAnswer(index)}
        />{' '}
        {text}
      </label>
    </div>
  );
};

export default PossibleAnswer;
