import React from 'react';
import { useAppDispatch } from '../store/hooks';
import { reset } from '../store/triviaSlice';

interface IProps {
  grade: number;
  setStillAnswer: (boolean: boolean) => void;
}

const Finish: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(reset());
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
