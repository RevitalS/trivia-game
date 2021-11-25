import React from 'react';

interface IProps {
    grade:number;
}

  const Finish: React.FC<IProps> = (props) => {

    return (
        <div>
        <p>Good Job</p>
        <p>your grade is {props.grade}</p>
        <button>Try Again</button>
        </div>
    )
  }

  export default Finish;