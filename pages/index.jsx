import React from 'react';
import { Container } from 'react-bootstrap';
import LogIn from '../components/login';
import SignUp from '../components/signUp';
import Principal from '../components/Principal';

function ConectionAll() {
  return (
    <>
      <Container>
        <LogIn />
        {/* <SignUp />
        <Principal /> */}
      </Container>
    </>
  )
}
export default ConectionAll