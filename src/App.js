import React from 'react';
import Board from './components/Board'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container} from 'react-bulma-components';
import {Heading} from 'react-bulma-components'


function App() {
  return ( 
    <Container className='has-text-centered'>
      <Heading>React Tic Tac Toe</Heading>
      <Board/>


    </Container>
    
  );
}

export default App;