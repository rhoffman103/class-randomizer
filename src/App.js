import React from 'react';
import Container from 'react-bootstrap/Container';
import RosterContainer from './components/Roster/RosterContainer';
import Assignments from './components/Assignments/Assignments';

function App() {
  return (
    <Container>
      <RosterContainer />
      <Assignments />
    </Container>
  );
}

export default App;
