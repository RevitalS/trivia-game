import React from 'react';
import Main from './Main';

interface IProps {

}

  const About: React.FC<IProps> = (props) => {

    return (
        <Main>
        <h1>About</h1>
        <p>this game is trivia</p>
        </Main>
    )
  }

  export default About;