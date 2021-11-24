import React from 'react';
import PossibleAnswer from './PossibleAnswer';
import {IQuestion} from '../models/IQuestion';

interface IProps {
    question:{
        title: string,
        possibleAnswers: Array<string>,
    };
    handleQuestions: (answer: number) => void,
}

const Question: React.FC<IProps> = (props) => {

    const {title, possibleAnswers} = props.question;


    return (
        <div>
          <h4>{title}</h4>
          <ul>
              {possibleAnswers.map( (text, i) => {
                  return (
                      <li key={i}>
                      <PossibleAnswer text={text} index={i} handleQuestions={props.handleQuestions} />
                      </li>
                  )
              })
              }
          </ul>
        </div>
      );
}


export default Question;
