import React from 'react';
interface IProps {
  text: string;
  index: string;
  isChecked: boolean;
  setChoosenAnswer: (number: number) => void;
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
          onChange={() => setChoosenAnswer(parseInt(index))}
        />{' '}
        {text}
      </label>
    </div>
  );
};

export default PossibleAnswer;
