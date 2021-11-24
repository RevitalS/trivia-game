import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';

interface IProps {

}

const HomePage: React.FC<IProps> = (props) => {

    return (
        <Main>
        <h1>HomePage</h1>
        <p>Welcome to the game</p>
        <Link to="/game">
				Start
			</Link>
        </Main>
    )
  }

  export default HomePage;