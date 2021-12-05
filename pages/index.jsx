import React from 'react';
import { Container } from 'react-bootstrap';
import Login from '../components/login';
import signUp from '../components/signUp'; 

export default function Home() {
  return (
    <Container>
      <Login />
      <signUp/>
      </Container>
  )
}
