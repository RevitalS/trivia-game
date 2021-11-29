import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { reset } from '../store/triviaSlice';

interface IProps {
  grade: number;
  setStillAnswer: (boolean: boolean) => void;
}

const Finish: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(reset());
    console.log('handleClick');
    //props.setStillAnswer(true);
  };

  return (
    <div>
      <p>Good Job</p>
      <p>your grade is {props.grade}</p>
      <button onClick={handleClick}>Try Again</button>
    </div>
  );
};

export default Finish;
